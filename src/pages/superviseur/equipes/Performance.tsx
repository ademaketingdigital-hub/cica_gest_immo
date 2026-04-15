import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "../sidebarItems";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Trophy, BarChart3 } from "lucide-react";

const data = [
  { gestionnaire: "A. Kossi", ventes: 12, locations: 8, score: 86 },
  { gestionnaire: "E. Ahou", ventes: 9, locations: 10, score: 82 },
  { gestionnaire: "B. Hounkpe", ventes: 10, locations: 4, score: 78 },
  { gestionnaire: "S. Agbo", ventes: 6, locations: 12, score: 74 },
];

const pieData = [
  { name: "Top 1", value: 32 },
  { name: "Top 2", value: 26 },
  { name: "Top 3", value: 22 },
  { name: "Top 4", value: 20 },
];

const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"];

const IndicateursPerformance: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Indicateurs Performance" breadcrumb="Superviseur / Équipes & Performance / Indicateurs Performance">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Comparatif gestionnaires</h2>
          <p className="text-slate-500">Performance par gestionnaire, rang et indicateurs clés.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
          <Trophy size={16} /> Classement
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-5">Volume par gestionnaire</h3>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 15, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="gestionnaire" stroke="#64748b" axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }} />
                <Bar dataKey="ventes" fill="#2563eb" radius={[10, 10, 0, 0]} />
                <Bar dataKey="locations" fill="#10b981" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-slate-900">Classement top 4</h3>
            <BarChart3 size={18} className="text-slate-500" />
          </div>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" innerRadius={70} outerRadius={100} paddingAngle={4}>
                  {pieData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 text-slate-600">
        <div className="flex items-center gap-3 mb-3">
          <TrendingUp size={18} className="text-blue-600" />
          <p className="font-semibold text-slate-800">Indicateurs clés</p>
        </div>
        <p>Comparez les ventes, locations et scores de performance pour identifier les meilleurs gestionnaires.</p>
      </div>
    </div>
  </DashboardLayout>
);

export default IndicateursPerformance;
