import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "../sidebarItems";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CalendarDays, TrendingUp } from "lucide-react";

const statistics = [
  { mois: "Jan", ventes: 16, locations: 12 },
  { mois: "Fév", ventes: 18, locations: 14 },
  { mois: "Mar", ventes: 22, locations: 18 },
  { mois: "Avr", ventes: 25, locations: 21 },
  { mois: "Mai", ventes: 28, locations: 24 },
  { mois: "Juin", ventes: 32, locations: 28 },
];

const Statistiques: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Statistiques annuelles" breadcrumb="Superviseur / Rapports & États / Statistiques annuelles">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Statistiques de l’année</h2>
          <p className="text-slate-500">Évolution mensuelle des ventes et locations sur l’année en cours.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
          <CalendarDays size={16} /> 2026
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Évolution mensuelle</h3>
            <p className="text-sm text-slate-500">Comparatif ventes / locations mois par mois.</p>
          </div>
          <TrendingUp size={18} className="text-slate-500" />
        </div>
        <div className="h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={statistics} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="mois" stroke="#64748b" axisLine={false} tickLine={false} />
              <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }} />
              <Line type="monotone" dataKey="ventes" stroke="#2563eb" strokeWidth={3} dot={{ fill: "#2563eb" }} />
              <Line type="monotone" dataKey="locations" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Statistiques;
