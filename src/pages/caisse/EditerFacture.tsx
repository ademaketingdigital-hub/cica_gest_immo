import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, ArrowDownCircle, ArrowUpCircle, BarChart3, Search, Download, Edit, RefreshCw } from "lucide-react";

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

const factures = [
  { numero: "FAC-2025-0089", client: "Mme Adjovi Carine", date: "14/04/2025", montant: 150000, statut: "Payée" },
  { numero: "FAC-2025-0088", client: "M. Akplogan Boris", date: "12/04/2025", montant: 2500000, statut: "En attente" },
  { numero: "FAC-2025-0087", client: "M. Gbenou Serge", date: "10/04/2025", montant: 200000, statut: "Payée" },
  { numero: "FAC-2025-0086", client: "Mme Agossa Ruth", date: "08/04/2025", montant: 300000, statut: "Payée" },
  { numero: "FAC-2025-0085", client: "M. Dossou Koffi", date: "05/04/2025", montant: 35000, statut: "Impayée" },
];

const EditerFacture: React.FC = () => {
  const [search, setSearch] = useState("");
  const filtered = factures.filter(f => f.numero.toLowerCase().includes(search.toLowerCase()) || f.client.toLowerCase().includes(search.toLowerCase()));

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Gestion de la Caisse" breadcrumb="Encaissement / Editer facture">
      <div className="space-y-6 animate-in fade-in duration-500">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Éditer une facture</h2>
          <p className="text-slate-500">Recherchez, modifiez ou téléchargez vos factures.</p>
        </div>

        <div className="relative max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
          <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Rechercher par n° facture ou client..." className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"/>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="text-left px-5 py-3 font-bold text-slate-600">N° Facture</th>
                <th className="text-left px-5 py-3 font-bold text-slate-600">Client</th>
                <th className="text-center px-5 py-3 font-bold text-slate-600">Date</th>
                <th className="text-right px-5 py-3 font-bold text-slate-600">Montant</th>
                <th className="text-center px-5 py-3 font-bold text-slate-600">Statut</th>
                <th className="text-center px-5 py-3 font-bold text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((f, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="px-5 py-4"><code className="bg-slate-100 px-2 py-1 rounded text-xs font-bold">{f.numero}</code></td>
                  <td className="px-5 py-4 font-medium text-slate-800">{f.client}</td>
                  <td className="px-5 py-4 text-center text-slate-500">{f.date}</td>
                  <td className="px-5 py-4 text-right font-bold text-slate-800">{f.montant.toLocaleString()} F</td>
                  <td className="px-5 py-4 text-center">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      f.statut === "Payée" ? "bg-emerald-100 text-emerald-700" :
                      f.statut === "En attente" ? "bg-amber-100 text-amber-700" :
                      "bg-red-100 text-red-700"
                    }`}>{f.statut}</span>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg" title="Modifier"><Edit size={14}/></button>
                      <button className="text-emerald-600 hover:bg-emerald-50 p-1.5 rounded-lg" title="Télécharger PDF"><Download size={14}/></button>
                      <button className="text-amber-600 hover:bg-amber-50 p-1.5 rounded-lg" title="Régénérer"><RefreshCw size={14}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditerFacture;
