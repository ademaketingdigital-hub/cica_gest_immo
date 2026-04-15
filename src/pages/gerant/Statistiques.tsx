import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Occupation", value: 68 },
  { name: "Vacance", value: 18 },
  { name: "Maintenance", value: 14 },
];
const COLORS = ["#2563EB", "#F59E0B", "#10B981"];

const Statistiques: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Statistiques" breadcrumb="Gérant / Rapports & Statistiques / Statistiques">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Indicateurs clés</h2>
            <p className="text-slate-500">Suivez les performances globales de l’activité.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 px-5 py-3 text-slate-700">Taux d’occupation 68%</div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" outerRadius={110} fill="#8884d8" label>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Synthèse du trimestre</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">Chiffre d’affaires</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">52M F</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">Marge</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">22%</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Remarques</p>
            <p className="mt-3 text-slate-600">L’occupation et le chiffre d’affaires montrent une progression constante. Prioriser les actions sur les offres en attente.</p>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Statistiques;
