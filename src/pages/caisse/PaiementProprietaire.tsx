import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, ArrowDownCircle, ArrowUpCircle, BarChart3, Banknote, CheckCircle, History } from "lucide-react";

const sidebarItems = [
  { label: "Tableau de Bord", href: "/caisse/dashboard", icon: <LayoutDashboard size={20}/> },
  { label: "Encaissement", href: "#", icon: <ArrowDownCircle size={20}/>, children: [
    { label: "Caisse direct", href: "/caisse/encaissement-direct" },
    { label: "Validation paiement", href: "/caisse/validation-paiement" },
    { label: "Editer facture", href: "/caisse/editer-facture" },
  ]},
  { label: "Dépense", href: "#", icon: <ArrowUpCircle size={20}/>, children: [
    { label: "Dépense chez propriétaire", href: "/caisse/depense-proprietaire" },
    { label: "Paiement propriétaire", href: "/caisse/paiement-proprietaire" },
  ]},
  { label: "Etat", href: "#", icon: <BarChart3 size={20}/>, children: [
    { label: "Situation de caisse", href: "/caisse/situation-caisse" },
    { label: "Etat de paiement", href: "/caisse/etat-paiement" },
  ]},
];

const aVerser = [
  { proprietaire: "M. Kérékou Mathieu", mois: "Mars 2025", brut: 815000, commission: 81500, net: 733500 },
  { proprietaire: "Mme Sossou Grâce", mois: "Mars 2025", brut: 350000, commission: 35000, net: 315000 },
  { proprietaire: "M. Amoussou Paul", mois: "Mars 2025", brut: 120000, commission: 12000, net: 108000 },
];

const historique = [
  { proprietaire: "M. Kérékou Mathieu", mois: "Fév 2025", net: 680000, date: "05/03/2025", mode: "Virement" },
  { proprietaire: "Mme Sossou Grâce", mois: "Fév 2025", net: 290000, date: "05/03/2025", mode: "Mobile Money" },
  { proprietaire: "M. Amoussou Paul", mois: "Fév 2025", net: 95000, date: "06/03/2025", mode: "Espèces" },
];

const PaiementProprietaire: React.FC = () => (
  <DashboardLayout sidebarItems={sidebarItems} title="Gestion de la Caisse" breadcrumb="Dépense / Paiement propriétaire">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-black text-slate-800">Paiement aux propriétaires</h2>
        <p className="text-slate-500">Versez les loyers nets aux propriétaires.</p>
      </div>

      {/* À verser */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Banknote size={18} className="text-amber-500"/> Montants prêts à verser</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="text-left px-5 py-3 font-bold text-slate-600">Propriétaire</th>
                <th className="text-center px-5 py-3 font-bold text-slate-600">Mois</th>
                <th className="text-right px-5 py-3 font-bold text-slate-600">Brut</th>
                <th className="text-right px-5 py-3 font-bold text-slate-600">Commission</th>
                <th className="text-right px-5 py-3 font-bold text-slate-600">Net à verser</th>
                <th className="text-center px-5 py-3 font-bold text-slate-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {aVerser.map((p, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="px-5 py-4 font-medium text-slate-800">{p.proprietaire}</td>
                  <td className="px-5 py-4 text-center text-slate-500">{p.mois}</td>
                  <td className="px-5 py-4 text-right text-slate-600">{p.brut.toLocaleString()} F</td>
                  <td className="px-5 py-4 text-right text-red-500 font-medium">-{p.commission.toLocaleString()} F</td>
                  <td className="px-5 py-4 text-right font-black text-emerald-600">{p.net.toLocaleString()} F</td>
                  <td className="px-5 py-4 text-center">
                    <button className="bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-emerald-700 flex items-center gap-1 mx-auto">
                      <CheckCircle size={14}/> Effectuer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Historique */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><History size={18} className="text-blue-500"/> Historique des versements</h3>
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="text-left px-5 py-3 font-bold text-slate-600">Propriétaire</th>
              <th className="text-center px-5 py-3 font-bold text-slate-600">Mois</th>
              <th className="text-right px-5 py-3 font-bold text-slate-600">Montant net</th>
              <th className="text-center px-5 py-3 font-bold text-slate-600">Date</th>
              <th className="text-center px-5 py-3 font-bold text-slate-600">Mode</th>
            </tr>
          </thead>
          <tbody>
            {historique.map((h, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                <td className="px-5 py-4 font-medium text-slate-800">{h.proprietaire}</td>
                <td className="px-5 py-4 text-center text-slate-500">{h.mois}</td>
                <td className="px-5 py-4 text-right font-bold text-emerald-600">{h.net.toLocaleString()} F</td>
                <td className="px-5 py-4 text-center text-slate-500">{h.date}</td>
                <td className="px-5 py-4 text-center"><span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-full">{h.mode}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default PaiementProprietaire;
