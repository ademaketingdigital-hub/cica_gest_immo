import React, { useState } from "react";
import { CheckCircle2, ListChecks, CalendarDays } from "lucide-react";
import { ClientParcellePageWrapper, StatusPill } from "./ClientParcellePageTemplate";

const ValiderChoix: React.FC = () => {
  const [choice, setChoice] = useState<string>("Lot 5 - Cotonou");
  const [schedule, setSchedule] = useState("3 mois - 6 versements");

  const visitedParcels = [
    { id: 1, title: "Lot 5 - Cotonou", type: "Bâti", area: "420 m²", location: "Cotonou", price: "23 000 000 XOF", status: "Visité" },
    { id: 2, title: "Zone Agricole A2", type: "Agricole", area: "1800 m²", location: "Ouidah", price: "15 500 000 XOF", status: "Visité" },
  ];

  return (
    <ClientParcellePageWrapper
      title="Valider Choix"
      breadcrumb="Client / Valider Choix"
      subtitle="Confirmez la parcelle que vous souhaitez réserver après vos visites."
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          {visitedParcels.map((parcel) => (
            <div key={parcel.id} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Visité</p>
                  <h3 className="text-xl font-black text-slate-900">{parcel.title}</h3>
                  <p className="mt-2 text-slate-500">{parcel.type} · {parcel.area} · {parcel.location}</p>
                </div>
                <StatusPill status={parcel.status} />
              </div>
              <div className="mt-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Prix</p>
                <p>{parcel.price}</p>
                <p className="mt-3 font-semibold text-slate-900">Détails</p>
                <p>Terrain avec accès route, proche commodités et bornage réalisé.</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={() => setChoice(parcel.title)}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${choice === parcel.title ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                >
                  Je choisis cette parcelle
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 text-slate-900">
            <div className="rounded-3xl bg-blue-50 p-3 text-blue-600"><ListChecks size={24} /></div>
            <div>
              <h3 className="text-lg font-black">Confirmation du choix</h3>
              <p className="text-sm text-slate-500">Proposez un échéancier pour verrouiller la réservation.</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Parcelle sélectionnée</p>
              <p className="mt-2 font-black text-slate-900">{choice}</p>
            </div>
            <label className="block text-sm text-slate-700">
              Proposition d'échéancier
              <select
                value={schedule}
                onChange={(event) => setSchedule(event.target.value)}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option>3 mois - 6 versements</option>
                <option>6 mois - 12 versements</option>
                <option>12 mois - 24 versements</option>
              </select>
            </label>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Echéancier sélectionné</p>
              <p className="mt-2 text-slate-900 font-black">{schedule}</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700 transition">
              <CheckCircle2 size={18} /> Réserver pour ce client
            </button>
          </div>
        </div>
      </div>
    </ClientParcellePageWrapper>
  );
};

export default ValiderChoix;
