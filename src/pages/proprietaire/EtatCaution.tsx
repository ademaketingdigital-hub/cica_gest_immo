import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, FileCheck, BarChart3, Shield } from "lucide-react";

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

const cautions = [
  { maison: "Villa Cocotier, Cotonou", locataire: "Mme Adjovi Carine", montant: 300000, date: "01/03/2023", statut: "Détenue" },
  { maison: "Appt. 3B, Akpakpa", locataire: "M. Houessou Pierre", montant: 170000, date: "15/06/2024", statut: "Détenue" },
  { maison: "Maison R+1, Calavi", locataire: "M. Gbenou Serge", montant: 400000, date: "01/01/2024", statut: "Détenue" },
  { maison: "Duplex, Fidjrossè", locataire: "Mme Agossa Ruth", montant: 600000, date: "10/09/2022", statut: "Détenue" },
  { maison: "Studio Zogbo", locataire: "M. Amoussou Paul", montant: 90000, date: "01/01/2021", statut: "Restituée" },
];

const totalDetenu = cautions.filter(c => c.statut === "Détenue").reduce((s, c) => s + c.montant, 0);

const EtatCaution: React.FC = () => (
  <DashboardLayout sidebarItems={sidebarItems} title="Espace Propriétaire" breadcrumb="Consulter états / Etat Caution">
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">État des Cautions</h2>
          <p className="text-slate-500">Suivi des cautions détenues et restituées.</p>
        </div>
        <div className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2">
          <Shield size={18}/> Total détenu : {totalDetenu.toLocaleString()} FCFA
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="text-left px-5 py-3 font-bold text-slate-600">Maison</th>
              <th className="text-left px-5 py-3 font-bold text-slate-600">Locataire</th>
              <th className="text-right px-5 py-3 font-bold text-slate-600">Montant</th>
              <th className="text-center px-5 py-3 font-bold text-slate-600">Date réception</th>
              <th className="text-center px-5 py-3 font-bold text-slate-600">Statut</th>
              <th className="text-center px-5 py-3 font-bold text-slate-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {cautions.map((c, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                <td className="px-5 py-4 font-medium text-slate-800">{c.maison}</td>
                <td className="px-5 py-4 text-slate-600">{c.locataire}</td>
                <td className="px-5 py-4 text-right font-bold text-slate-800">{c.montant.toLocaleString()} F</td>
                <td className="px-5 py-4 text-center text-slate-500">{c.date}</td>
                <td className="px-5 py-4 text-center">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.statut === "Détenue" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{c.statut}</span>
                </td>
                <td className="px-5 py-4 text-center">
                  {c.statut === "Détenue" && (
                    <button className="text-xs font-bold text-blue-600 hover:underline">Marquer restituée</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default EtatCaution;
