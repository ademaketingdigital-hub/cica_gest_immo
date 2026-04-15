import React from "react";
import { AlertTriangle, Bell, RefreshCcw } from "lucide-react";
import { VentePageWrapper, StatusPill } from "./VentePageTemplate";

const EtatArrieres: React.FC = () => {
  const arrears = [
    { id: 1, client: "M. Lucien A.", parcel: "Lot Z2", due: "3 500 000 XOF", daysLate: 15, status: "En retard" },
    { id: 2, client: "Mme Sita M.", parcel: "Villa D4", due: "2 100 000 XOF", daysLate: 7, status: "En retard" },
    { id: 3, client: "SARL Eco", parcel: "Zone Agricole L1", due: "10 000 000 XOF", daysLate: 21, status: "En retard" },
  ];

  return (
    <VentePageWrapper
      title="Etat des arrièrés"
      breadcrumb="Consulter états / Etat des arrièrés"
      subtitle="Concentrez-vous sur les paiements en retard et préparez les relances nécessaires."
      rightAction={
        <button className="inline-flex items-center gap-2 rounded-3xl bg-rose-600 px-4 py-3 text-sm font-bold text-white hover:bg-rose-700 transition">
          <Bell size={18} /> Relancer maintenant
        </button>
      }
    >
      <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100 shadow-sm">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-[12px] uppercase tracking-[0.18em]">
            <tr>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Parcelle</th>
              <th className="px-6 py-4">Montant dû</th>
              <th className="px-6 py-4">Jours de retard</th>
              <th className="px-6 py-4">Statut</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            {arrears.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">{item.client}</td>
                <td className="px-6 py-4">{item.parcel}</td>
                <td className="px-6 py-4">{item.due}</td>
                <td className="px-6 py-4">{item.daysLate} jours</td>
                <td className="px-6 py-4"><StatusPill status={item.status} /></td>
                <td className="px-6 py-4">
                  <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition">
                    <AlertTriangle size={14} /> Relancer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-slate-50 p-6">
          <p className="text-sm text-slate-500">Total arrières</p>
          <p className="mt-3 text-3xl font-black text-slate-900">15 600 000 XOF</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-6">
          <p className="text-sm text-slate-500">Relances prévues</p>
          <p className="mt-3 text-3xl font-black text-slate-900">3</p>
        </div>
      </div>
    </VentePageWrapper>
  );
};

export default EtatArrieres;
