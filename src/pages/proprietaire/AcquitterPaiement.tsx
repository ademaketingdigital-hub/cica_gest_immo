import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, FileCheck, BarChart3, CheckCircle, Download, History } from "lucide-react";

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

const paiementsEnCours = [
  { mois: "Mars 2025", maisons: "Villa Cocotier + Duplex Fidjrossè", brut: 450000, commission: 45000, net: 405000 },
  { mois: "Février 2025", maisons: "Maison R+1 Calavi", brut: 200000, commission: 20000, net: 180000 },
];

const historique = [
  { mois: "Janvier 2025", net: 620000, date: "05/02/2025" },
  { mois: "Décembre 2024", net: 580000, date: "06/01/2025" },
  { mois: "Novembre 2024", net: 600000, date: "04/12/2024" },
  { mois: "Octobre 2024", net: 550000, date: "05/11/2024" },
];

const AcquitterPaiement: React.FC = () => (
  <DashboardLayout sidebarItems={sidebarItems} title="Espace Propriétaire" breadcrumb="Diligence / Acquitter un paiement">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-black text-slate-800">Acquitter un paiement</h2>
        <p className="text-slate-500">Confirmez la réception des loyers nets après commission.</p>
      </div>

      {/* Paiements à acquitter */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><CheckCircle size={18} className="text-emerald-500"/> Paiements prêts à acquitter</h3>
        <div className="space-y-4">
          {paiementsEnCours.map((p, i) => (
            <div key={i} className="border border-slate-100 rounded-xl p-5 hover:bg-slate-50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-slate-800">{p.mois}</p>
                  <p className="text-sm text-slate-500">{p.maisons}</p>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <p className="text-slate-400 text-xs">Brut</p>
                    <p className="font-bold text-slate-700">{p.brut.toLocaleString()} F</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-400 text-xs">Commission</p>
                    <p className="font-bold text-red-500">-{p.commission.toLocaleString()} F</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-400 text-xs">Net à recevoir</p>
                    <p className="font-black text-emerald-600 text-lg">{p.net.toLocaleString()} F</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-700 flex items-center gap-1">
                      <CheckCircle size={16}/> Acquitter
                    </button>
                    <button className="bg-slate-200 text-slate-600 px-3 py-2 rounded-lg text-sm hover:bg-slate-300">
                      <Download size={16}/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Historique */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><History size={18} className="text-blue-500"/> Historique des paiements acquittés</h3>
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-4 py-3 font-bold text-slate-600">Mois</th>
              <th className="text-right px-4 py-3 font-bold text-slate-600">Montant net reçu</th>
              <th className="text-center px-4 py-3 font-bold text-slate-600">Date d'acquittement</th>
              <th className="text-center px-4 py-3 font-bold text-slate-600">Bordereau</th>
            </tr>
          </thead>
          <tbody>
            {historique.map((h, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-800">{h.mois}</td>
                <td className="px-4 py-3 text-right font-bold text-emerald-600">{h.net.toLocaleString()} F</td>
                <td className="px-4 py-3 text-center text-slate-500">{h.date}</td>
                <td className="px-4 py-3 text-center">
                  <button className="text-blue-600 hover:underline text-xs font-bold flex items-center gap-1 mx-auto"><Download size={14}/> PDF</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default AcquitterPaiement;
