import React from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { VentePageWrapper, StatusPill } from "./VentePageTemplate";

const DomainesDispo: React.FC = () => {
  const domains = [
    { id: 1, name: "Lot 3 - Abomey-Calavi", type: "Vide", area: "650 m²", location: "Abomey-Calavi", price: "9 200 000 XOF", status: "Disponible" },
    { id: 2, name: "Zone Agricole C4", type: "Agricole", area: "2 200 m²", location: "Porto-Novo", price: "18 500 000 XOF", status: "Disponible" },
  ];

  return (
    <VentePageWrapper
      title="Domaine disponible"
      breadcrumb="Consulter états / Domaine disponible"
      subtitle="Affichez toutes les parcelles encore disponibles à la vente."
    >
      <div className="grid gap-6">
        <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100 shadow-sm">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-[12px] uppercase tracking-[0.18em]">
              <tr>
                <th className="px-6 py-4">Domaine</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Superficie</th>
                <th className="px-6 py-4">Localisation</th>
                <th className="px-6 py-4">Prix</th>
                <th className="px-6 py-4">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
              {domains.map((domain) => (
                <tr key={domain.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-800">{domain.name}</td>
                  <td className="px-6 py-4">{domain.type}</td>
                  <td className="px-6 py-4">{domain.area}</td>
                  <td className="px-6 py-4 flex items-center gap-2"><MapPin size={14} />{domain.location}</td>
                  <td className="px-6 py-4">{domain.price}</td>
                  <td className="px-6 py-4"><StatusPill status={domain.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </VentePageWrapper>
  );
};

export default DomainesDispo;
