import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, FileCheck, BarChart3, ArrowUpRight } from "lucide-react";

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

const avances = [
  { maison: "Villa Cocotier, Cotonou", locataire: "Mme Adjovi Carine", moisCouverts: "Mai — Juin 2025", montant: 300000, dateVersement: "01/04/2025" },
  { maison: "Duplex, Fidjrossè", locataire: "Mme Agossa Ruth", moisCouverts: "Mai 2025", montant: 300000, dateVersement: "25/03/2025" },
  { maison: "Maison R+1, Calavi", locataire: "M. Gbenou Serge", moisCouverts: "Mai — Juil 2025", montant: 600000, dateVersement: "15/03/2025" },
];

const EtatAvance: React.FC = () => (
  <DashboardLayout sidebarItems={sidebarItems} title="Espace Propriétaire" breadcrumb="Consulter états / Etat avance">
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-black text-slate-800">État des Avances</h2>
        <p className="text-slate-500">Suivi des avances de loyer et paiements anticipés.</p>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
        <ArrowUpRight className="text-emerald-500" size={20}/>
        <p className="text-sm text-emerald-700 font-medium">Total avances en cours : <span className="font-black">{avances.reduce((s,a) => s+a.montant, 0).toLocaleString()} FCFA</span></p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="text-left px-5 py-3 font-bold text-slate-600">Maison</th>
              <th className="text-left px-5 py-3 font-bold text-slate-600">Locataire</th>
              <th className="text-center px-5 py-3 font-bold text-slate-600">Mois couverts</th>
              <th className="text-right px-5 py-3 font-bold text-slate-600">Montant</th>
              <th className="text-center px-5 py-3 font-bold text-slate-600">Date versement</th>
            </tr>
          </thead>
          <tbody>
            {avances.map((a, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                <td className="px-5 py-4 font-medium text-slate-800">{a.maison}</td>
                <td className="px-5 py-4 text-slate-600">{a.locataire}</td>
                <td className="px-5 py-4 text-center"><span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{a.moisCouverts}</span></td>
                <td className="px-5 py-4 text-right font-bold text-emerald-600">{a.montant.toLocaleString()} F</td>
                <td className="px-5 py-4 text-center text-slate-500">{a.dateVersement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default EtatAvance;
