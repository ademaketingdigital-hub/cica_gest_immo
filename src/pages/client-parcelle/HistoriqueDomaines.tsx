import React from "react";
import { Archive, MapPin, FileText } from "lucide-react";
import { ClientParcellePageWrapper, StatusPill } from "./ClientParcellePageTemplate";

const HistoriqueDomaines: React.FC = () => {
  const history = [
    { id: 1, title: "Zone Agricole A2", status: "Réservée", type: "Agricole", location: "Ouidah", date: "Visité le 20/03/2026" },
    { id: 2, title: "Lot 5 - Cotonou", status: "Vendu", type: "Bâti", location: "Cotonou", date: "Réservé le 02/04/2026" },
    { id: 3, title: "Parcelle Vide B9", status: "Annulée", type: "Vide", location: "Abomey-Calavi", date: "Visité le 05/03/2026" },
  ];

  return (
    <ClientParcellePageWrapper
      title="Historique des domaines"
      breadcrumb="Client / Historique des domaines"
      subtitle="Accédez aux parcelles que vous avez visitées ou réservées dans le passé."
    >
      <div className="grid gap-6">
        {history.map((item) => (
          <div key={item.id} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.type}</p>
                <h3 className="mt-2 text-xl font-black text-slate-900">{item.title}</h3>
                <p className="mt-1 text-slate-500">{item.location} · {item.date}</p>
              </div>
              <StatusPill status={item.status} />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-4 flex items-center gap-3">
                <MapPin size={20} className="text-slate-600" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Localisation</p>
                  <p className="font-semibold text-slate-900">{item.location}</p>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 flex items-center gap-3">
                <FileText size={20} className="text-slate-600" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Documents</p>
                  <p className="font-semibold text-slate-900">Accès disponible</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ClientParcellePageWrapper>
  );
};

export default HistoriqueDomaines;
