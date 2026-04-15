import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { periode: "S1", caisse: 14500000 },
  { periode: "S2", caisse: 13800000 },
  { periode: "S3", caisse: 15000000 },
  { periode: "S4", caisse: 15600000 },
];

const SituationCaisseGlobale: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Situation caisse globale" breadcrumb="Gérant / Supervision caisse / Situation caisse globale">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Suivi global de la caisse</h2>
            <p className="text-slate-500">Visualisez les soldes consolidés et les tendances de trésorerie.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 px-5 py-3 text-slate-700">Solde courant : 15 600 000 F</div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Tendance du solde</h3>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="periode" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip formatter={(value: number) => `${value.toLocaleString()} F`} />
                <Bar dataKey="caisse" fill="#2563EB" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Récapitulatif</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Entrées</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">9 500 000 F</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Sorties</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">4 700 000 F</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Observations</p>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>Solde stable sur les 4 derniers semestres.</li>
              <li>Pic de caisse le trimestre dernier.</li>
              <li>Veille des flux pour la clôture mensuelle.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default SituationCaisseGlobale;
