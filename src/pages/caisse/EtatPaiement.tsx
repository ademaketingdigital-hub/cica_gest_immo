import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, ArrowDownCircle, ArrowUpCircle, BarChart3, Filter, Search } from "lucide-react";

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

const paiements = [
  { date: "14/04/2025", type: "Encaissement", client: "Mme Adjovi Carine", montant: 150000, mode: "Mobile Money", statut: "Validé" },
  { date: "14/04/2025", type: "Décaissement", client: "M. Kérékou (proprio)", montant: 405000, mode: "Virement", statut: "Effectué" },
  { date: "13/04/2025", type: "Encaissement", client: "M. Akplogan Boris", montant: 2500000, mode: "Virement", statut: "En attente" },
  { date: "13/04/2025", type: "Encaissement", client: "Mme Agossa Ruth", montant: 300000, mode: "Mobile Money", statut: "Validé" },
  { date: "12/04/2025", type: "Décaissement", client: "Réparation plomberie", montant: 45000, mode: "Espèces", statut: "Effectué" },
  { date: "12/04/2025", type: "Encaissement", client: "M. Gbenou Serge", montant: 200000, mode: "Espèces", statut: "Validé" },
  { date: "11/04/2025", type: "Décaissement", client: "Commission Mars", montant: 81500, mode: "Interne", statut: "Effectué" },
  { date: "10/04/2025", type: "Encaissement", client: "M. Dossou Koffi", montant: 35000, mode: "Espèces", statut: "Rejeté" },
];

const EtatPaiement: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("Tous");
  const [filterMode, setFilterMode] = useState("Tous");
  const filtered = paiements.filter(p =>
    (filterType === "Tous" || p.type === filterType) &&
    (filterMode === "Tous" || p.mode === filterMode) &&
    (search === "" || p.client.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Gestion de la Caisse" breadcrumb="Etat / Etat de paiement">
      <div className="space-y-6 animate-in fade-in duration-500">
        <div>
          <h2 className="text-2xl font-black text-slate-800">État de paiement</h2>
          <p className="text-slate-500">Historique complet des encaissements et décaissements.</p>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher..." className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-white w-60"/>
          </div>
          <Filter size={16} className="text-slate-400"/>
          <select value={filterType} onChange={e => setFilterType(e.target.value)} className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white">
            {["Tous", "Encaissement", "Décaissement"].map(t => <option key={t}>{t}</option>)}
          </select>
          <select value={filterMode} onChange={e => setFilterMode(e.target.value)} className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white">
            {["Tous", "Mobile Money", "Espèces", "Virement", "Interne"].map(m => <option key={m}>{m}</option>)}
          </select>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="text-left px-5 py-3 font-bold text-slate-600">Date</th>
                  <th className="text-center px-5 py-3 font-bold text-slate-600">Type</th>
                  <th className="text-left px-5 py-3 font-bold text-slate-600">Client / Libellé</th>
                  <th className="text-right px-5 py-3 font-bold text-slate-600">Montant</th>
                  <th className="text-center px-5 py-3 font-bold text-slate-600">Mode</th>
                  <th className="text-center px-5 py-3 font-bold text-slate-600">Statut</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="px-5 py-4 text-slate-500">{p.date}</td>
                    <td className="px-5 py-4 text-center">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.type === "Encaissement" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>{p.type}</span>
                    </td>
                    <td className="px-5 py-4 font-medium text-slate-800">{p.client}</td>
                    <td className={`px-5 py-4 text-right font-bold ${p.type === "Encaissement" ? "text-emerald-600" : "text-red-500"}`}>
                      {p.type === "Encaissement" ? "+" : "-"}{p.montant.toLocaleString()} F
                    </td>
                    <td className="px-5 py-4 text-center"><span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-full">{p.mode}</span></td>
                    <td className="px-5 py-4 text-center">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        p.statut === "Validé" || p.statut === "Effectué" ? "bg-emerald-100 text-emerald-700" :
                        p.statut === "En attente" ? "bg-amber-100 text-amber-700" :
                        "bg-red-100 text-red-700"
                      }`}>{p.statut}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-sm text-slate-500">{filtered.length} transaction(s) affichée(s)</p>
      </div>
    </DashboardLayout>
  );
};

export default EtatPaiement;
