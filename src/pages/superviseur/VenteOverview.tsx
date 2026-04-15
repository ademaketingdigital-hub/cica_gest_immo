import React from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "./sidebarItems";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
import { TrendingUp, CalendarDays, CheckCircle, Search, ArrowRight, Users, Activity, ShieldCheck, Clock } from "lucide-react";

const kpis = [
  { title: "Gestionnaires actifs", value: "14", icon: <Users size={20} />, color: "bg-slate-800" },
  { title: "Parcelles en vente", value: "82", icon: <TrendingUp size={20} />, color: "bg-blue-600" },
  { title: "Clients en process", value: "58", icon: <Activity size={20} />, color: "bg-emerald-600" },
  { title: "Validations en attente", value: "9", icon: <Clock size={20} />, color: "bg-amber-500" },
];

const performanceData = [
  { mois: "Jan", ventes: 24, marge: 14 },
  { mois: "Fév", ventes: 31, marge: 21 },
  { mois: "Mar", ventes: 28, marge: 18 },
  { mois: "Avr", ventes: 35, marge: 23 },
  { mois: "Mai", ventes: 30, marge: 20 },
  { mois: "Juin", ventes: 38, marge: 26 },
];

const recentActivities = [
  { gestionnaire: "A. Kossi", action: "Validation Proprio", domaine: "Abomey", client: "Mme Adjo", date: "12/04", statut: "En attente" },
  { gestionnaire: "B. Hounkpe", action: "Pré-validation échéancier", domaine: "Cotonou", client: "M. Agbo", date: "11/04", statut: "Bloqué" },
  { gestionnaire: "C. Dossou", action: "Contrat prévente", domaine: "Porto-Novo", client: "Mme Zinsou", date: "10/04", statut: "Validé" },
  { gestionnaire: "D. Noudehou", action: "Publier domaine", domaine: "Ouidah", client: "M. Ahou" , date: "09/04", statut: "En cours" },
];

const pendingValidations = [
  { label: "Validation Proprio", description: "Documents en attente de signature" },
  { label: "Publier domaine", description: "Fiche domaine à valider" },
  { label: "Pré-validation échéancier", description: "Échéancier incomplet" },
  { label: "Contrat de prévente", description: "Contrat à relire" },
];

const VenteOverview: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Supervision Vente" breadcrumb="Superviseur / Supervision Vente">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Supervision de l’équipe Vente</h2>
          <p className="text-slate-500">Vue détaillée des validations, performances et activités récentes.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/superviseur/dashboard" className="bg-slate-100 text-slate-800 px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-slate-200 transition">Retour au dashboard</Link>
          <Link to="/superviseur/vente" className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-blue-700 transition">Voir suivi Vente</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((item) => (
          <div key={item.title} className={`${item.color} text-white rounded-3xl p-6 shadow-lg shadow-slate-200`}> 
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-100/80 font-bold">{item.title}</p>
              <div className="bg-white/10 p-3 rounded-2xl">{item.icon}</div>
            </div>
            <p className="text-4xl font-black">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Performance par gestionnaire</h3>
              <p className="text-sm text-slate-500">Volumes de ventes et marge sur les derniers mois.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm">Derniers 30 jours</button>
              <button className="px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm">Tous</button>
            </div>
          </div>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="mois" stroke="#64748b" axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }} />
                <Legend wrapperStyle={{ paddingTop: 16 }} />
                <Bar dataKey="ventes" fill="#2563eb" radius={[10, 10, 0, 0]} />
                <Bar dataKey="marge" fill="#16a34a" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Validations en attente</h3>
              <p className="text-sm text-slate-500">Actions à traiter en priorité.</p>
            </div>
            <ShieldCheck size={20} className="text-blue-600" />
          </div>
          <div className="space-y-3">
            {pendingValidations.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 p-4 hover:bg-slate-50 transition">
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Activités récentes</h3>
            <p className="text-sm text-slate-500">Suivi des actions de l’équipe vente.</p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 text-slate-700 text-sm">
              <Search size={14} /> Filtrer
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 text-slate-700 text-sm">
              <CalendarDays size={14} /> 30 derniers jours
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-separate border-spacing-y-3">
            <thead>
              <tr className="text-xs uppercase text-slate-500">
                <th className="px-4 py-3">Gestionnaire</th>
                <th className="px-4 py-3">Action</th>
                <th className="px-4 py-3">Domaine</th>
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Statut</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((item) => (
                <tr key={`${item.gestionnaire}-${item.date}`} className="bg-slate-50 rounded-3xl mb-3">
                  <td className="px-4 py-4 font-semibold text-slate-800">{item.gestionnaire}</td>
                  <td className="px-4 py-4 text-slate-600">{item.action}</td>
                  <td className="px-4 py-4 text-slate-600">{item.domaine}</td>
                  <td className="px-4 py-4 text-slate-600">{item.client}</td>
                  <td className="px-4 py-4 text-slate-600">{item.date}</td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${item.statut === "Validé" ? "bg-emerald-100 text-emerald-700" : item.statut === "Bloqué" ? "bg-rose-100 text-rose-700" : item.statut === "En attente" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-700"}`}>
                      {item.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default VenteOverview;
