import React from "react";
import { Calendar, ListChecks } from "lucide-react";
import { VentePageWrapper, StatusPill } from "./VentePageTemplate";

const Echeancier: React.FC = () => {
  const dossiers = [
    { id: 1, ref: "VTE-002", client: "Mme Amina T.", schedule: [
      { date: "10/05/2026", amount: "3 500 000 XOF", status: "Payée" },
      { date: "10/06/2026", amount: "3 500 000 XOF", status: "En attente" },
      { date: "10/07/2026", amount: "3 500 000 XOF", status: "En attente" },
    ]},
    { id: 2, ref: "VTE-005", client: "M. Jean F.", schedule: [
      { date: "22/05/2026", amount: "4 000 000 XOF", status: "En attente" },
      { date: "22/06/2026", amount: "4 000 000 XOF", status: "En attente" },
    ]},
  ];

  return (
    <VentePageWrapper
      title="Échéancier"
      breadcrumb="Consulter états / Échéancier"
      subtitle="Vue détaillée des plans de paiement par dossier."
    >
      <div className="grid gap-6">
        {dossiers.map((dossier) => (
          <div key={dossier.id} className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{dossier.ref}</p>
                <h3 className="text-xl font-black text-slate-900">{dossier.client}</h3>
                <p className="mt-1 text-sm text-slate-500">Plan de paiement détaillé</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                <Calendar size={16} /> {dossier.schedule.length} échéances
              </div>
            </div>
            <div className="mt-6 overflow-x-auto rounded-3xl bg-slate-50 p-4">
              <table className="min-w-full text-left text-sm text-slate-600">
                <thead className="text-slate-500 text-[11px] uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Montant</th>
                    <th className="px-4 py-3">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {dossier.schedule.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-100 transition-colors">
                      <td className="px-4 py-3">{item.date}</td>
                      <td className="px-4 py-3">{item.amount}</td>
                      <td className="px-4 py-3"><StatusPill status={item.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </VentePageWrapper>
  );
};

export default Echeancier;
