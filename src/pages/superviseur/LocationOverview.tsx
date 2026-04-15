import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "./sidebarItems";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from "recharts";
import { Map, Home, AlertTriangle, Clock, ShieldCheck, BarChart3, CalendarDays, Search } from "lucide-react";

const performanceData = [
  { mois: "Jan", occupation: 72, impayes: 8 },
  { mois: "Fév", occupation: 78, impayes: 6 },
  { mois: "Mar", occupation: 84, impayes: 5 },
  { mois: "Avr", occupation: 88, impayes: 4 },
  { mois: "Mai", occupation: 91, impayes: 3 },
  { mois: "Juin", occupation: 93, impayes: 2 },
];

const housePerformance = [
  { maison: "Villa A1", occupation: "96%", impayes: "2", statut: "Stable" },
  { maison: "Appartement B3", occupation: "84%", impayes: "5", statut: "Suivi" },
  { maison: "Duplex C7", occupation: "91%", impayes: "1", statut: "Bon" },
  { maison: "Maison D5", occupation: "77%", impayes: "8", statut: "Alert" },
];

const alerts = [
  { label: "Loyer impayé > 30 jours - Résidence C7", type: "danger" },
  { label: "Validation état du mois en retard", type: "warning" },
  { label: "Clôture mensuelle à préparer", type: "info" },
];

const dataPie = [
  { name: "Occupées", value: 93 },
  { name: "Vacantes", value: 7 },
];

const COLORS = ["#2563eb", "#cbd5e1"];

const LocationOverview: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Supervision Location" breadcrumb="Superviseur / Supervision Location">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Supervision des locations</h2>
          <p className="text-slate-500">Tableau de bord de performance des maisons et des traitements locatifs.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="bg-slate-100 text-slate-800 px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-slate-200 transition">Filtrer</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-blue-700 transition">Aller à validations</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Performance location</h3>
              <p className="text-sm text-slate-500">Taux d’occupation et impayés par période.</p>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <CalendarDays size={16} /> 30 derniers jours
            </div>
          </div>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="mois" stroke="#64748b" axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }} />
                <Legend wrapperStyle={{ paddingTop: 16 }} />
                <Line type="monotone" dataKey="occupation" stroke="#22c55e" strokeWidth={3} dot={{ fill: "#22c55e" }} />
                <Line type="monotone" dataKey="impayes" stroke="#ef4444" strokeWidth={3} dot={{ fill: "#ef4444" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Alertes importantes</h3>
              <p className="text-sm text-slate-500">Retards et impayés à traiter.</p>
            </div>
            <AlertTriangle size={20} className="text-amber-500" />
          </div>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className={`rounded-3xl p-4 ${alert.type === "danger" ? "bg-rose-50 text-rose-700" : alert.type === "warning" ? "bg-amber-50 text-amber-700" : "bg-slate-50 text-slate-700"}`}>
                {alert.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Performance des maisons</h3>
              <p className="text-sm text-slate-500">Occupation, impayés et statut.</p>
            </div>
            <Home size={20} className="text-blue-600" />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-600 border-separate border-spacing-y-3">
              <thead>
                <tr className="text-slate-500 uppercase text-xs font-semibold">
                  <th className="px-4 py-3">Maison</th>
                  <th className="px-4 py-3">Occupation</th>
                  <th className="px-4 py-3">Impayés</th>
                  <th className="px-4 py-3">Statut</th>
                </tr>
              </thead>
              <tbody>
                {housePerformance.map((house) => (
                  <tr key={house.maison} className="bg-slate-50 rounded-3xl mb-3">
                    <td className="px-4 py-4 font-semibold text-slate-800">{house.maison}</td>
                    <td className="px-4 py-4">{house.occupation}</td>
                    <td className="px-4 py-4">{house.impayes}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${house.statut === "Alert" ? "bg-rose-100 text-rose-700" : house.statut === "Suivi" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
                        {house.statut}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-5">Taux d’occupation global</h3>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={dataPie} dataKey="value" innerRadius={70} outerRadius={95} paddingAngle={4}>
                  {dataPie.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>Occupées</span>
              <span className="font-semibold">93%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Vacantes</span>
              <span className="font-semibold">7%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default LocationOverview;
