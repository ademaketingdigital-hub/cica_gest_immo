import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, ArrowDownCircle, ArrowUpCircle, BarChart3, CheckCircle2, XCircle, Eye, Filter } from "lucide-react";

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
  { id: 1, date: "14/04/2025", client: "Mme Adjovi Carine", montant: 150000, mode: "Mobile Money", ref: "MM-20250414-001", statut: "En attente", type: "Loyer" },
  { id: 2, date: "14/04/2025", client: "M. Akplogan Boris", montant: 2500000, mode: "Virement", ref: "VIR-20250414-003", statut: "En attente", type: "Parcelle" },
  { id: 3, date: "13/04/2025", client: "M. Gbenou Serge", montant: 200000, mode: "Espèces", ref: "ESP-20250413-002", statut: "En attente", type: "Loyer" },
  { id: 4, date: "12/04/2025", client: "Mme Agossa Ruth", montant: 300000, mode: "Mobile Money", ref: "MM-20250412-005", statut: "Validé", type: "Loyer" },
  { id: 5, date: "11/04/2025", client: "M. Dossou Koffi", montant: 35000, mode: "Espèces", ref: "ESP-20250411-001", statut: "Rejeté", type: "Loyer" },
];

const ValidationPaiement: React.FC = () => {
  const [filterStatut, setFilterStatut] = useState("Tous");
  const [filterType, setFilterType] = useState("Tous");
  const filtered = paiements.filter(p =>
    (filterStatut === "Tous" || p.statut === filterStatut) &&
    (filterType === "Tous" || p.type === filterType)
  );

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Gestion de la Caisse" breadcrumb="Encaissement / Validation paiement">
      <div className="space-y-6 animate-in fade-in duration-500">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Validation des paiements</h2>
          <p className="text-slate-500">Vérifiez et validez les paiements reçus.</p>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <Filter size={16} className="text-slate-400"/>
          <select value={filterStatut} onChange={e => setFilterStatut(e.target.value)} className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white">
            {["Tous", "En attente", "Validé", "Rejeté"].map(s => <option key={s}>{s}</option>)}
          </select>
          <select value={filterType} onChange={e => setFilterType(e.target.value)} className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white">
            {["Tous", "Loyer", "Parcelle"].map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="text-left px-5 py-3 font-bold text-slate-600">Date</th>
                  <th className="text-left px-5 py-3 font-bold text-slate-600">Client / Locataire</th>
                  <th className="text-right px-5 py-3 font-bold text-slate-600">Montant</th>
                  <th className="text-center px-5 py-3 font-bold text-slate-600">Mode</th>
                  <th className="text-center px-5 py-3 font-bold text-slate-600">Référence</th>
                  <th className="text-center px-5 py-3 font-bold text-slate-600">Type</th>
                  <th className="text-center px-5 py-3 font-bold text-slate-600">Statut</th>
                  <th className="text-center px-5 py-3 font-bold text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(p => (
                  <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="px-5 py-4 text-slate-500">{p.date}</td>
                    <td className="px-5 py-4 font-medium text-slate-800">{p.client}</td>
                    <td className="px-5 py-4 text-right font-bold text-slate-800">{p.montant.toLocaleString()} F</td>
                    <td className="px-5 py-4 text-center text-slate-600 text-xs">{p.mode}</td>
                    <td className="px-5 py-4 text-center"><code className="text-xs bg-slate-100 px-2 py-1 rounded">{p.ref}</code></td>
                    <td className="px-5 py-4 text-center"><span className={`text-xs font-bold px-2 py-1 rounded-full ${p.type === "Loyer" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>{p.type}</span></td>
                    <td className="px-5 py-4 text-center">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        p.statut === "En attente" ? "bg-amber-100 text-amber-700" :
                        p.statut === "Validé" ? "bg-emerald-100 text-emerald-700" :
                        "bg-red-100 text-red-700"
                      }`}>{p.statut}</span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      {p.statut === "En attente" ? (
                        <div className="flex items-center justify-center gap-2">
                          <button className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-emerald-700"><CheckCircle2 size={12} className="inline mr-1"/>Valider</button>
                          <button className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-red-600"><XCircle size={12} className="inline mr-1"/>Rejeter</button>
                        </div>
                      ) : (
                        <button className="text-blue-600 text-xs font-bold hover:underline"><Eye size={12} className="inline mr-1"/>Détails</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ValidationPaiement;
