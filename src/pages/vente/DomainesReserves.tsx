import React from "react";
import { Clock, MapPin } from "lucide-react";
import { VentePageWrapper, StatusPill } from "./VentePageTemplate";

const DomainesReserves: React.FC = () => {
  const reserved = [
    { id: 1, name: "Lot 7 - Cotonou", type: "Bâti", client: "Mme Fatou D.", price: "26 500 000 XOF", status: "Réservé" },
    { id: 2, name: "Parcelle F1", type: "Vide", client: "M. Serge K.", price: "11 700 000 XOF", status: "Réservé" },
  ];

  return (
    <VentePageWrapper
      title="Domaine réservé"
      breadcrumb="Consulter états / Domaine réservé"
      subtitle="Liste des parcelles actuellement réservées en attente de finalisation."
    >
      <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100 shadow-sm">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-[12px] uppercase tracking-[0.18em]">
            <tr>
              <th className="px-6 py-4">Domaine</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Prix</th>
              <th className="px-6 py-4">Statut</th>
              <th className="px-6 py-4">Délai</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            {reserved.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">{row.name}</td>
                <td className="px-6 py-4">{row.type}</td>
                <td className="px-6 py-4">{row.client}</td>
                <td className="px-6 py-4">{row.price}</td>
                <td className="px-6 py-4"><StatusPill status={row.status} /></td>
                <td className="px-6 py-4 flex items-center gap-2"><Clock size={14} /> 5 jours</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </VentePageWrapper>
  );
};

export default DomainesReserves;
