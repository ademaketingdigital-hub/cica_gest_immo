import React, { useState } from "react";
import { Filter, CalendarDays } from "lucide-react";
import { VentePageWrapper, StatusPill } from "./VentePageTemplate";

const EtatVentes: React.FC = () => {
  const [periode, setPeriode] = useState("30 derniers jours");
  const [statut, setStatut] = useState("Tous");
  const [gestionnaire, setGestionnaire] = useState("Tous");

  const ventes = [
    { ref: "VTE-001", client: "M. Patrick L.", parcel: "Villa A1", price: "28 000 000 XOF", echeancier: "Oui", statut: "Clôturé", date: "02/04/2026" },
    { ref: "VTE-002", client: "Mme Amina T.", parcel: "Lot B8", price: "15 800 000 XOF", echeancier: "Non", statut: "En cours", date: "22/03/2026" },
    { ref: "VTE-003", client: "SARL Agro", parcel: "Zone Agricole C3", price: "40 000 000 XOF", echeancier: "Oui", statut: "Réservé", date: "29/03/2026" },
  ];

  return (
    <VentePageWrapper
      title="Etat des ventes"
      breadcrumb="Consulter états / Etat des ventes"
      subtitle="Suivez toutes les ventes avec des filtres avancés par période, statut et gestionnaire."
      rightAction={
        <div className="inline-flex items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
          <Filter size={18} /> Filtres
        </div>
      }
    >
      <div className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Période</span>
            <select
              value={periode}
              onChange={(event) => setPeriode(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option>30 derniers jours</option>
              <option>Ce trimestre</option>
              <option>Ce semestre</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Statut</span>
            <select
              value={statut}
              onChange={(event) => setStatut(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option>Tous</option>
              <option>Clôturé</option>
              <option>En cours</option>
              <option>Réservé</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Gestionnaire</span>
            <select
              value={gestionnaire}
              onChange={(event) => setGestionnaire(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option>Tous</option>
              <option>Jean Dupont</option>
              <option>Rodolphe</option>
            </select>
          </label>
        </div>

        <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100 shadow-sm">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-[12px] uppercase tracking-[0.18em]">
              <tr>
                <th className="px-6 py-4">Référence</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Parcelle</th>
                <th className="px-6 py-4">Prix</th>
                <th className="px-6 py-4">Échéancier</th>
                <th className="px-6 py-4">Statut</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
              {ventes.map((vente) => (
                <tr key={vente.ref} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-800">{vente.ref}</td>
                  <td className="px-6 py-4">{vente.client}</td>
                  <td className="px-6 py-4">{vente.parcel}</td>
                  <td className="px-6 py-4">{vente.price}</td>
                  <td className="px-6 py-4">{vente.echeancier}</td>
                  <td className="px-6 py-4"><StatusPill status={vente.statut} /></td>
                  <td className="px-6 py-4">{vente.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </VentePageWrapper>
  );
};

export default EtatVentes;
