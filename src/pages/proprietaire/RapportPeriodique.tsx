import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, FileCheck, BarChart3, Download, FileText, Calendar } from "lucide-react";

const sidebarItems = [
  { label: "Tableau de Bord", href: "/proprietaire/dashboard", icon: <LayoutDashboard size={20}/> },
  { label: "Diligence", href: "#", icon: <FileCheck size={20}/>, children: [
    { label: "Valider une dépense", href: "/proprietaire/valider-depense" },
    { label: "Acquitter un paiement", href: "/proprietaire/acquitter-paiement" },
  ]},
  { label: "Consulter états", href: "#", icon: <BarChart3 size={20}/>, children: [
    { label: "Info par maison", href: "/proprietaire/info-maison" },
    { label: "Etat Caution", href: "/proprietaire/etat-caution" },
    { label: "Etat Impayé", href: "/proprietaire/etat-impaye" },
    { label: "Etat avance", href: "/proprietaire/etat-avance" },
    { label: "Etat dépense", href: "/proprietaire/etat-depense" },
    { label: "Rapport périodique", href: "#", children: [
      { label: "Mois en cours", href: "/proprietaire/rapport/mois-n" },
      { label: "Mois -1", href: "/proprietaire/rapport/mois-1" },
      { label: "Mois -2", href: "/proprietaire/rapport/mois-2" },
      { label: "Mois -3", href: "/proprietaire/rapport/mois-3" },
    ]},
  ]},
];

const rapports = [
  { mois: "Avril 2025 (en cours)", recettes: 815000, depenses: 510000, commission: 81500, netVerse: 223500, label: "mois-n" },
  { mois: "Mars 2025", recettes: 780000, depenses: 290000, commission: 78000, netVerse: 412000, label: "mois-1" },
  { mois: "Février 2025", recettes: 750000, depenses: 80000, commission: 75000, netVerse: 595000, label: "mois-2" },
  { mois: "Janvier 2025", recettes: 650000, depenses: 180000, commission: 65000, netVerse: 405000, label: "mois-3" },
];

const RapportPeriodique: React.FC = () => {
  const [selected, setSelected] = useState(rapports[0]);

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Espace Propriétaire" breadcrumb="Consulter états / Rapport périodique">
      <div className="space-y-6 animate-in fade-in duration-500">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Rapport Périodique</h2>
          <p className="text-slate-500">Synthèse mensuelle de vos revenus et dépenses.</p>
        </div>

        {/* Sélecteur de mois */}
        <div className="flex flex-wrap gap-3">
          {rapports.map(r => (
            <button
              key={r.label}
              onClick={() => setSelected(r)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                selected.label === r.label ? "bg-blue-600 text-white shadow-lg" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Calendar size={14} className="inline mr-1"/> {r.mois}
            </button>
          ))}
        </div>

        {/* Carte récapitulative */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6">{selected.mois}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <p className="text-xs text-slate-500 font-bold uppercase">Recettes</p>
              <p className="text-2xl font-black text-emerald-600 mt-1">{selected.recettes.toLocaleString()}</p>
              <p className="text-xs text-slate-400">FCFA</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-xl">
              <p className="text-xs text-slate-500 font-bold uppercase">Dépenses</p>
              <p className="text-2xl font-black text-red-500 mt-1">{selected.depenses.toLocaleString()}</p>
              <p className="text-xs text-slate-400">FCFA</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <p className="text-xs text-slate-500 font-bold uppercase">Commission</p>
              <p className="text-2xl font-black text-amber-600 mt-1">{selected.commission.toLocaleString()}</p>
              <p className="text-xs text-slate-400">FCFA (10%)</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <p className="text-xs text-slate-500 font-bold uppercase">Net versé</p>
              <p className="text-2xl font-black text-blue-600 mt-1">{selected.netVerse.toLocaleString()}</p>
              <p className="text-xs text-slate-400">FCFA</p>
            </div>
          </div>

          {/* Comparaison */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <h4 className="font-bold text-slate-700 text-sm mb-4">Comparaison mensuelle</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {rapports.map(r => (
                <div key={r.label} className={`p-4 rounded-xl border text-center ${r.label === selected.label ? "border-blue-300 bg-blue-50" : "border-slate-100"}`}>
                  <p className="text-xs text-slate-500 font-bold">{r.mois.split(" (")[0]}</p>
                  <p className="text-lg font-black text-slate-800 mt-1">{r.netVerse.toLocaleString()} F</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 flex items-center gap-2">
              <Download size={16}/> Télécharger Rapport PDF
            </button>
            <button className="bg-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-300 flex items-center gap-2">
              <FileText size={16}/> Rapport Moral (commentaire)
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RapportPeriodique;
