import React from "react";
import { FileText, Download } from "lucide-react";
import { ClientParcellePageWrapper, StatusPill } from "./ClientParcellePageTemplate";

const Factures: React.FC = () => {
  const invoices = [
    { id: 1, reference: "FAC-2026-001", date: "02/04/2026", amount: "2 300 000 XOF", status: "Payée" },
    { id: 2, reference: "FAC-2026-002", date: "15/04/2026", amount: "2 000 000 XOF", status: "Payée" },
  ];

  return (
    <ClientParcellePageWrapper
      title="Facture de vente"
      breadcrumb="Client / Facture de vente"
      subtitle="Consultez et téléchargez vos factures de vente au format PDF."
    >
      <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100 shadow-sm">
        <table className="min-w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 uppercase tracking-[0.18em] text-[12px]">
            <tr>
              <th className="px-6 py-4">Référence</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Montant</th>
              <th className="px-6 py-4">Statut</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {invoices.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">{item.reference}</td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.amount}</td>
                <td className="px-6 py-4"><StatusPill status={item.status} /></td>
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

export default Factures;
