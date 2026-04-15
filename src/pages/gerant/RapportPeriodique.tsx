import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { Calendar, ClipboardList } from "lucide-react";

const rapports = [
  { periode: "Mars 2026", type: "Rapport trimestriel", statut: "Disponible" },
  { periode: "Avril 2026", type: "Analyse de flux", statut: "Préparé" },
  { periode: "Mai 2026", type: "Tableau de bord global", statut: "En cours" },
];

const RapportPeriodique: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Rapports périodiques" breadcrumb="Gérant / Rapports & Statistiques / Rapports périodiques">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Synthèses périodiques</h2>
            <p className="text-slate-500">Consultez ou téléchargez les rapports métier récents.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
            <Calendar size={18} /> Mise à jour automatique
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-4 p-6 sm:grid-cols-3">
          {rapports.map((item) => (
            <div key={item.periode} className="rounded-3xl border border-slate-100 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.periode}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.type}</h3>
              <p className="mt-2 text-slate-600">Statut : <strong>{item.statut}</strong></p>
              <div className="mt-5 flex items-center gap-3">
                <button className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition">Voir</button>
                <button className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">Télécharger</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
        <div className="flex items-center gap-3 text-sm">
          <ClipboardList size={18} />
          <span>Les rapports sont générés automatiquement chaque fin de période et validés par le pôle financier.</span>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default RapportPeriodique;
