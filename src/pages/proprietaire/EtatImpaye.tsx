import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, FileCheck, BarChart3, AlertTriangle, Send } from "lucide-react";

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

const impayes = [
  { maison: "Appt. 3B, Akpakpa", locataire: "M. Houessou Pierre", mois: "Avril 2025", montant: 85000, jours: 14 },
  { maison: "Chambre Meublée, Ganhi", locataire: "M. Dossou Koffi", mois: "Avril 2025", montant: 35000, jours: 14 },
  { maison: "Appt. 3B, Akpakpa", locataire: "M. Houessou Pierre", mois: "Mars 2025", montant: 85000, jours: 45 },
  { maison: "Chambre Meublée, Ganhi", locataire: "M. Dossou Koffi", mois: "Mars 2025", montant: 35000, jours: 45 },
];

const EtatImpaye: React.FC = () => (
  <DashboardLayout sidebarItems={sidebarItems} title="Espace Propriétaire" breadcrumb="Consulter états / Etat Impayé">
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-black text-slate-800">État des Impayés</h2>
        <p className="text-slate-500">Loyers non payés sur l'ensemble de vos maisons.</p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
        <AlertTriangle className="text-red-500" size={20}/>
        <p className="text-sm text-red-700 font-medium">Total impayé : <span className="font-black">{impayes.reduce((s,i) => s+i.montant, 0).toLocaleString()} FCFA</span> sur {impayes.length} échéances</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="text-left px-5 py-3 font-bold text-slate-600">Maison</th>
              <th className="text-left px-5 py-3 font-bold text-slate-600">Locataire</th>
              <th className="text-center px-5 py-3 font-bold text-slate-600">Mois</th>
              <th className="text-right px-5 py-3 font-bold text-slate-600">Montant dû</th>
              <th className="text-center px-5 py-3 font-bold text-slate-600">Jours de retard</th>
              <th className="text-center px-5 py-3 font-bold text-slate-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {impayes.map((im, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                <td className="px-5 py-4 font-medium text-slate-800">{im.maison}</td>
                <td className="px-5 py-4 text-slate-600">{im.locataire}</td>
                <td className="px-5 py-4 text-center text-slate-600">{im.mois}</td>
                <td className="px-5 py-4 text-right font-bold text-red-600">{im.montant.toLocaleString()} F</td>
                <td className="px-5 py-4 text-center">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${im.jours > 30 ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>{im.jours} jours</span>
                </td>
                <td className="px-5 py-4 text-center">
                  <button className="bg-amber-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-amber-600 flex items-center gap-1 mx-auto">
                    <Send size={12}/> Relancer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default EtatImpaye;
