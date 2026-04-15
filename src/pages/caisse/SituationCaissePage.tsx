import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, ArrowDownCircle, ArrowUpCircle, BarChart3, Download, Filter } from "lucide-react";

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

const mouvements = [
  { date: "14/04/2025", libelle: "Loyer Villa Cocotier", type: "Entrée", montant: 150000, solde: 9200000 },
  { date: "14/04/2025", libelle: "Paiement Proprio Kérékou", type: "Sortie", montant: 405000, solde: 9050000 },
  { date: "13/04/2025", libelle: "Vente Parcelle C12", type: "Entrée", montant: 2500000, solde: 9455000 },
  { date: "13/04/2025", libelle: "Loyer Duplex Fidjrossè", type: "Entrée", montant: 300000, solde: 6955000 },
  { date: "12/04/2025", libelle: "Réparation plomberie", type: "Sortie", montant: 45000, solde: 6655000 },
  { date: "12/04/2025", libelle: "Loyer Maison R+1 Calavi", type: "Entrée", montant: 200000, solde: 6700000 },
  { date: "11/04/2025", libelle: "Commission gestionnaire", type: "Sortie", montant: 81500, solde: 6500000 },
];

const SituationCaissePage: React.FC = () => {
  const [filterType, setFilterType] = useState("Tous");
  const filtered = mouvements.filter(m => filterType === "Tous" || m.type === filterType);

  const totalEntrees = mouvements.filter(m => m.type === "Entrée").reduce((s, m) => s + m.montant, 0);
  const totalSorties = mouvements.filter(m => m.type === "Sortie").reduce((s, m) => s + m.montant, 0);

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Gestion de la Caisse" breadcrumb="Etat / Situation de caisse">
      <div className="space-y-6 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Situation de caisse</h2>
            <p className="text-slate-500">Détail des mouvements de trésorerie.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-700 flex items-center gap-2"><Download size={14}/> Excel</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 flex items-center gap-2"><Download size={14}/> PDF</button>
          </div>
        </div>

        {/* Résumé */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
            <p className="text-xs font-bold text-slate-500 uppercase">Total Entrées</p>
            <p className="text-2xl font-black text-emerald-600">+{totalEntrees.toLocaleString()} F</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <p className="text-xs font-bold text-slate-500 uppercase">Total Sorties</p>
            <p className="text-2xl font-black text-red-500">-{totalSorties.toLocaleString()} F</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <p className="text-xs font-bold text-slate-500 uppercase">Solde actuel</p>
            <p className="text-2xl font-black text-blue-600">{mouvements[0].solde.toLocaleString()} F</p>
          </div>
        </div>

        {/* Filtres */}
        <div className="flex items-center gap-3">
          <Filter size={16} className="text-slate-400"/>
          <select value={filterType} onChange={e => setFilterType(e.target.value)} className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white">
            {["Tous", "Entrée", "Sortie"].map(t => <option key={t}>{t}</option>)}
          </select>
          <input type="date" className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white"/>
          <input type="date" className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white"/>
        </div>

        {/* Tableau mouvements */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="text-left px-5 py-3 font-bold text-slate-600">Date</th>
                <th className="text-left px-5 py-3 font-bold text-slate-600">Libellé</th>
                <th className="text-center px-5 py-3 font-bold text-slate-600">Type</th>
                <th className="text-right px-5 py-3 font-bold text-slate-600">Montant</th>
                <th className="text-right px-5 py-3 font-bold text-slate-600">Solde</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((m, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="px-5 py-4 text-slate-500">{m.date}</td>
                  <td className="px-5 py-4 font-medium text-slate-800">{m.libelle}</td>
                  <td className="px-5 py-4 text-center">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${m.type === "Entrée" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>{m.type}</span>
                  </td>
                  <td className={`px-5 py-4 text-right font-bold ${m.type === "Entrée" ? "text-emerald-600" : "text-red-500"}`}>
                    {m.type === "Entrée" ? "+" : "-"}{m.montant.toLocaleString()} F
                  </td>
                  <td className="px-5 py-4 text-right font-bold text-slate-800">{m.solde.toLocaleString()} F</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SituationCaissePage;
