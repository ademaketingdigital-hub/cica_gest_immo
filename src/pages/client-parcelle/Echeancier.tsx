import React from "react";
import { BarChart3 } from "lucide-react";
import { ClientParcellePageWrapper, StatusPill } from "./ClientParcellePageTemplate";

const Echeancier: React.FC = () => {
  const schedule = [
    { date: "10/05/2026", amount: "2 300 000 XOF", status: "Payé" },
    { date: "10/06/2026", amount: "2 300 000 XOF", status: "À venir" },
    { date: "10/07/2026", amount: "2 300 000 XOF", status: "À venir" },
    { date: "10/08/2026", amount: "2 300 000 XOF", status: "À venir" },
  ];

  const totalRemaining = "13 800 000 XOF";
  const progress = 30;

  return (
    <ClientParcellePageWrapper
      title="Echéancier"
      breadcrumb="Client / Echéancier"
      subtitle="Consultez le planning complet de paiement et le montant restant à régler."
    >
      <div className="grid gap-6">
        <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-black text-slate-900">Montant restant</h3>
              <p className="mt-2 text-3xl font-black text-slate-900">{totalRemaining}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4 text-slate-700">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Progression du paiement</div>
              <p className="mt-2 text-2xl font-black">{progress}%</p>
            </div>
          </div>
          <div className="mt-6 rounded-3xl bg-slate-50 p-4">
            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-blue-600" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100 shadow-sm">
          <table className="min-w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-500 text-[12px] uppercase tracking-[0.18em]">
              <tr>
                <th className="px-6 py-4">Date d'échéance</th>
                <th className="px-6 py-4">Montant</th>
                <th className="px-6 py-4">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {schedule.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-800">{item.date}</td>
                  <td className="px-6 py-4">{item.amount}</td>
                  <td className="px-6 py-4"><StatusPill status={item.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ClientParcellePageWrapper>
  );
};

export default Echeancier;
