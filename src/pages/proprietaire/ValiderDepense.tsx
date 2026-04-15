import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, FileCheck, BarChart3, CheckCircle2, XCircle, Eye, Filter } from "lucide-react";

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

const depenses = [
  { id: 1, date: "12/04/2025", maison: "Villa Cocotier, Cotonou", description: "Réparation plomberie salle de bain", montant: 45000, statut: "En attente", justificatif: true },
  { id: 2, date: "10/04/2025", maison: "Appt. 3B, Akpakpa", description: "Remplacement serrure porte principale", montant: 15000, statut: "En attente", justificatif: true },
  { id: 3, date: "08/04/2025", maison: "Maison R+1, Calavi", description: "Peinture façade extérieure", montant: 250000, statut: "En attente", justificatif: false },
  { id: 4, date: "05/04/2025", maison: "Villa Cocotier, Cotonou", description: "Étanchéité toiture", montant: 450000, statut: "Validée", justificatif: true },
  { id: 5, date: "01/04/2025", maison: "Duplex, Fidjrossè", description: "Entretien jardin mensuel", montant: 25000, statut: "Rejetée", justificatif: true },
];

const ValiderDepense: React.FC = () => {
  const [filterMaison, setFilterMaison] = useState("Toutes");
  const [filterStatut, setFilterStatut] = useState("Tous");
  const [showModal, setShowModal] = useState(false);

  const filtered = depenses.filter(d =>
    (filterMaison === "Toutes" || d.maison === filterMaison) &&
    (filterStatut === "Tous" || d.statut === filterStatut)
  );

  const maisonsList = ["Toutes", ...new Set(depenses.map(d => d.maison))];

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Espace Propriétaire" breadcrumb="Diligence / Valider une dépense">
      <div className="space-y-6 animate-in fade-in duration-500">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Valider une dépense</h2>
          <p className="text-slate-500">Approuvez ou rejetez les dépenses soumises par le gestionnaire.</p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-3 items-center">
          <Filter size={16} className="text-slate-400"/>
          <select value={filterMaison} onChange={e => setFilterMaison(e.target.value)} className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white">
            {maisonsList.map(m => <option key={m}>{m}</option>)}
          </select>
          <select value={filterStatut} onChange={e => setFilterStatut(e.target.value)} className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white">
            {["Tous", "En attente", "Validée", "Rejetée"].map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        {/* Tableau */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="text-left px-5 py-3 font-bold text-slate-600">Date</th>
                  <th className="text-left px-5 py-3 font-bold text-slate-600">Maison</th>
                  <th className="text-left px-5 py-3 font-bold text-slate-600">Description</th>
                  <th className="text-right px-5 py-3 font-bold text-slate-600">Montant</th>
                  <th className="text-center px-5 py-3 font-bold text-slate-600">Justificatif</th>
                  <th className="text-center px-5 py-3 font-bold text-slate-600">Statut</th>
                  <th className="text-center px-5 py-3 font-bold text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(d => (
                  <tr key={d.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 text-slate-600">{d.date}</td>
                    <td className="px-5 py-4 font-medium text-slate-800">{d.maison}</td>
                    <td className="px-5 py-4 text-slate-600">{d.description}</td>
                    <td className="px-5 py-4 text-right font-bold text-slate-800">{d.montant.toLocaleString()} F</td>
                    <td className="px-5 py-4 text-center">
                      {d.justificatif ? (
                        <button onClick={() => setShowModal(true)} className="text-blue-600 hover:underline text-xs font-bold flex items-center gap-1 mx-auto">
                          <Eye size={14}/> Voir
                        </button>
                      ) : <span className="text-slate-400 text-xs">Non fourni</span>}
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        d.statut === "En attente" ? "bg-amber-100 text-amber-700" :
                        d.statut === "Validée" ? "bg-emerald-100 text-emerald-700" :
                        "bg-red-100 text-red-700"
                      }`}>{d.statut}</span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      {d.statut === "En attente" && (
                        <div className="flex items-center justify-center gap-2">
                          <button className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-emerald-700 flex items-center gap-1">
                            <CheckCircle2 size={14}/> Valider
                          </button>
                          <button className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-red-600 flex items-center gap-1">
                            <XCircle size={14}/> Rejeter
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal justificatif */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
            <div className="bg-white rounded-2xl p-6 max-w-lg w-full" onClick={e => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-slate-800 mb-4">Justificatif de la dépense</h3>
              <div className="bg-slate-100 rounded-xl h-64 flex items-center justify-center text-slate-400">
                📄 Aperçu du justificatif (facture / photo)
              </div>
              <div className="mt-4 flex justify-end">
                <button onClick={() => setShowModal(false)} className="bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold">Fermer</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ValiderDepense;
