import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { period: "Jan", value: 75 },
  { period: "Fév", value: 82 },
  { period: "Mar", value: 88 },
  { period: "Avr", value: 94 },
  { period: "Mai", value: 90 },
];

const Performance: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Performance" breadcrumb="Gérant / Rapports & Statistiques / Performance">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Performance opérationnelle</h2>
            <p className="text-slate-500">Analyse de l’efficacité de l’équipe sur les différents canaux.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">Trend stable</div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
              <XAxis dataKey="period" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Indice de conversion</p>
          <p className="mt-3 text-3xl font-black text-slate-900">68%</p>
          <p className="mt-3 text-slate-600">Rendement solide sur le pipeline commercial.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Équipe moyenne</p>
          <p className="mt-3 text-3xl font-black text-slate-900">14 collaborateurs</p>
          <p className="mt-3 text-slate-600">Performance mesurée sur la dernière période.</p>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Performance;
