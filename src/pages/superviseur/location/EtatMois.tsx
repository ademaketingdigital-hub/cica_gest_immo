import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "../sidebarItems";
import { FileText, CalendarDays, CheckCircle2 } from "lucide-react";

const maisons = [
  { maison: "Villa A1", recettes: "420k", depenses: "120k", statut: "Validé" },
  { maison: "App. B3", recettes: "310k", depenses: "90k", statut: "En revue" },
  { maison: "Duplex C7", recettes: "280k", depenses: "65k", statut: "En attente" },
];

const EtatMois: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="État du mois" breadcrumb="Superviseur / Supervision Location / État du mois">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Récapitulatif mensuel</h2>
          <p className="text-slate-500">Validez les états mensuels des maisons et suivez recettes/dépenses.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
          <CalendarDays size={16} /> Avril 2026
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {maisons.map((item) => (
          <div key={item.maison} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">{item.maison}</h3>
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{item.statut}</span>
            </div>
            <p className="text-sm text-slate-500 mb-4">Recettes: {item.recettes} • Dépenses: {item.depenses}</p>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
              <CheckCircle2 size={16} /> Valider l'état
            </button>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 text-slate-600">
        <div className="flex items-center gap-3 mb-3">
          <FileText size={18} className="text-blue-600" />
          <p className="font-semibold text-slate-800">Résumé</p>
        </div>
        <p>Suivez l'équilibre recettes / dépenses et priorisez la validation des états pour les maisons en attente.</p>
      </div>
    </div>
  </DashboardLayout>
);

export default EtatMois;
