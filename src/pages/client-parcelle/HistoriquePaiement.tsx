import React from "react";
import { Download, CreditCard } from "lucide-react";
import { ClientParcellePageWrapper, StatusPill } from "./ClientParcellePageTemplate";

const HistoriquePaiement: React.FC = () => {
  const payments = [
    { id: 1, date: "02/04/2026", amount: "1 500 000 XOF", method: "Mobile Money", reference: "MM-987654", receipt: "Reçu" },
    { id: 2, date: "15/04/2026", amount: "2 000 000 XOF", method: "Virement", reference: "TR-123456", receipt: "Reçu" },
  ];

  return (
    <ClientParcellePageWrapper
      title="Paiement"
      breadcrumb="Client / Paiement"
      subtitle="Historique complet de tous les paiements effectués avec téléchargement des reçus."
    >
      <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100 shadow-sm">
        <table className="min-w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 text-[12px] uppercase tracking-[0.18em]">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Montant payé</th>
              <th className="px-6 py-4">Mode de paiement</th>
              <th className="px-6 py-4">Référence</th>
              <th className="px-6 py-4">Reçu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">{payment.date}</td>
                <td className="px-6 py-4">{payment.amount}</td>
                <td className="px-6 py-4">{payment.method}</td>
                <td className="px-6 py-4">{payment.reference}</td>
                <td className="px-6 py-4">
                  <button className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition">
                    <Download size={14} /> Télécharger
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ClientParcellePageWrapper>
  );
};

export default HistoriquePaiement;
