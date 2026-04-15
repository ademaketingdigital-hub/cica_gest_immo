import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { TrendingUp, DollarSign } from "lucide-react";

const chiffres = [
  { label: "CA mensuel", value: "18.4M F" },
  { label: "CA trimestriel", value: "52.1M F" },
  { label: "Objectif annuel", value: "220M F" },
];

const ChiffreAffaires: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Chiffre d’affaires" breadcrumb="Gérant / Rapports & Statistiques / Chiffre d’affaires">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Performances commerciale</h2>
            <p className="text-slate-500">Suivez le chiffre d’affaires et le rythme de la croissance.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-800">
            <DollarSign size={18} /> En hausse
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {chiffres.map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
            <p className="mt-4 text-3xl font-black text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
        <p className="text-sm">L’harmonisation des ventes et de la location contribue à l’atteinte des objectifs annuels.</p>
      </div>
    </div>
  </DashboardLayout>
);

export default ChiffreAffaires;
