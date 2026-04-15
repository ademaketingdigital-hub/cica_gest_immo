import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, MapPin, Wallet, Users2 } from "lucide-react";

const metrics = [
  { label: "CA total", value: "42.5M", icon: <Wallet size={20} />, color: "bg-blue-600" },
  { label: "Objectifs", value: "84%", icon: <TrendingUp size={20} />, color: "bg-emerald-600" },
  { label: "Charges", value: "12.2M", icon: <MapPin size={20} />, color: "bg-slate-800" },
  { label: "Alertes", value: "02", icon: <Users2 size={20} />, color: "bg-rose-600" },
];

const evolutionData = [
  { periode: "S1", valeur: 28 },
  { periode: "S2", valeur: 32 },
  { periode: "S3", valeur: 38 },
  { periode: "S4", valeur: 45 },
  { periode: "S5", valeur: 50 },
];

const Overview: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Vue d'ensemble" breadcrumb="Gérant / Supervision Globale / Vue d'ensemble">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className={`${metric.color} rounded-3xl p-6 text-white shadow-lg`}> 
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/80 font-bold">{metric.label}</p>
              <div className="rounded-2xl bg-white/10 p-3">{metric.icon}</div>
            </div>
            <p className="text-3xl font-black">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Comparaison Vente vs Location</h3>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={evolutionData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="periode" stroke="#64748b" axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }} />
                <Line type="monotone" dataKey="valeur" stroke="#2563eb" strokeWidth={3} dot={{ fill: "#2563eb" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Indicateurs clés</h3>
          <div className="space-y-4 text-slate-600">
            <div className="rounded-3xl bg-slate-50 p-4">Taux de conversion Vente: 18%</div>
            <div className="rounded-3xl bg-slate-50 p-4">Taux de conversion Location: 24%</div>
            <div className="rounded-3xl bg-slate-50 p-4">Taux d’occupation global: 91%</div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Overview;
