import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { Percent } from "lucide-react";

const MargeGlobale: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Marge globale" breadcrumb="Gérant / Rapports & Statistiques / Marge globale">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Marge consolidée</h2>
            <p className="text-slate-500">Analyse des marges réalisées sur les ventes et la location.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-800">
            <Percent size={18} /> 28%
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Marge brute</p>
          <p className="mt-4 text-4xl font-black text-slate-900">28%</p>
          <p className="mt-4 text-slate-600">La marge globale intègre coûts directs et frais d’exploitation.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Description</p>
          <p className="mt-3 text-slate-600">Un suivi serré des revenus et des coûts permet de maximiser la profitabilité.</p>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default MargeGlobale;
