import React from "react";
import { Trophy, MapPin } from "lucide-react";
import { VentePageWrapper, StatusPill } from "./VentePageTemplate";

const Vendus: React.FC = () => {
  const sold = [
    { id: 1, name: "Villa B5", buyer: "M. Lionel Z.", price: "31 000 000 XOF", date: "28/03/2026", location: "Cotonou" },
    { id: 2, name: "Zone Agricole K2", buyer: "SARL AgroBénin", price: "47 500 000 XOF", date: "20/03/2026", location: "Porto-Novo" },
  ];

  return (
    <VentePageWrapper
      title="Domaine vendu"
      breadcrumb="Consulter états / Domaine vendu"
      subtitle="Historique des parcelles déjà vendues et clôturées."
    >
      <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100 shadow-sm">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-[12px] uppercase tracking-[0.18em]">
            <tr>
              <th className="px-6 py-4">Domaine</th>
              <th className="px-6 py-4">Acheteur</th>
              <th className="px-6 py-4">Prix</th>
              <th className="px-6 py-4">Date de vente</th>
              <th className="px-6 py-4">Localisation</th>
              <th className="px-6 py-4">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            {sold.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">{item.name}</td>
                <td className="px-6 py-4">{item.buyer}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4 flex items-center gap-2"><MapPin size={14} />{item.location}</td>
                <td className="px-6 py-4"><StatusPill status="Vendu" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </VentePageWrapper>
  );
};

export default Vendus;
