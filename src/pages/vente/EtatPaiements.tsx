import React from "react";
import { CreditCard, Calendar, User } from "lucide-react";
import { VentePageWrapper, StatusPill } from "./VentePageTemplate";

const EtatPaiements: React.FC = () => {
  const payments = [
    { id: 1, client: "M. Alain B.", amount: "3 000 000 XOF", date: "05/04/2026", method: "Mobile Money", status: "Payée" },
    { id: 2, client: "Mme Hélène A.", amount: "1 500 000 XOF", date: "02/04/2026", method: "Virement", status: "Partiellement payée" },
    { id: 3, client: "SARL Vita", amount: "7 200 000 XOF", date: "30/03/2026", method: "Chèque", status: "Payée" },
  ];

  return (
    <VentePageWrapper
      title="Etat des paiements"
      breadcrumb="Consulter états / Etat des paiements"
      subtitle="Historique des paiements reçus avec filtres par date, client ou mode de paiement."
    >
      <div className="grid gap-6">
        <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100 shadow-sm">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-[12px] uppercase tracking-[0.18em]">
              <tr>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Montant</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Mode</th>
                <th className="px-6 py-4">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-800">{payment.client}</td>
                  <td className="px-6 py-4">{payment.amount}</td>
                  <td className="px-6 py-4">{payment.date}</td>
                  <td className="px-6 py-4">{payment.method}</td>
                  <td className="px-6 py-4"><StatusPill status={payment.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Encaissements</p>
            <p className="mt-3 text-3xl font-black text-slate-900">11 700 000 XOF</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Paiements partiels</p>
            <p className="mt-3 text-3xl font-black text-slate-900">1</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Mode favori</p>
            <p className="mt-3 flex items-center gap-2 text-3xl font-black text-slate-900"><CreditCard size={24} /> Mobile Money</p>
          </div>
        </div>
      </div>
    </VentePageWrapper>
  );
};

export default EtatPaiements;
