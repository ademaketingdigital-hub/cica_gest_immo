import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ShieldCheck, TrendingUp, ClipboardCheck, CalendarDays } from "lucide-react";

const activityData = [
  { semaine: "S1", ventes: 12 },
  { semaine: "S2", ventes: 18 },
  { semaine: "S3", ventes: 22 },
  { semaine: "S4", ventes: 28 },
];

const pending = [
  { label: "Validation Proprio", count: 5 },
  { label: "Publier domaine", count: 3 },
  { label: "Pré-validation échéancier", count: 2 },
  { label: "Contrat prévente", count: 1 },
];

const SupervisionVente: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Supervision Vente" breadcrumb="Gérant / Supervision Globale / Supervision Vente">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid gap-6 lg:grid-cols-3">
        {pending.map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-slate-700">{item.label}</p>
              <ShieldCheck size={18} className="text-blue-600" />
            </div>
            <p className="text-3xl font-black text-slate-900">{item.count}</p>
            <p className="text-sm text-slate-500 mt-2">Validations en attente</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Activité équipe vente</h3>
              <p className="text-sm text-slate-500">Suivi de la production par semaine.</p>
            </div>
            <CalendarDays size={18} className="text-slate-500" />
          </div>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="semaine" stroke="#64748b" axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }} />
                <Bar dataKey="ventes" fill="#2563eb" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <ClipboardCheck size={18} className="text-emerald-600" />
            <h3 className="text-lg font-bold text-slate-900">Top 5 domaines</h3>
          </div>
          <div className="space-y-4 text-slate-600">
            <div className="rounded-3xl bg-slate-50 p-4">Domaine Akpakpa • 24 demandes</div>
            <div className="rounded-3xl bg-slate-50 p-4">Domaine Hêvié • 18 demandes</div>
            <div className="rounded-3xl bg-slate-50 p-4">Domaine Godomey • 16 demandes</div>
            <div className="rounded-3xl bg-slate-50 p-4">Domaine Cotonou Nord • 14 demandes</div>
            <div className="rounded-3xl bg-slate-50 p-4">Domaine Porto-Novo Est • 12 demandes</div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default SupervisionVente;
