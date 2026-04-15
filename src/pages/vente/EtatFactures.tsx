import React, { useState } from "react";
import { FileText, Download, Eye, X, ShieldCheck } from "lucide-react";
import { VentePageWrapper, StatusPill } from "./VentePageTemplate";

const EtatFactures: React.FC = () => {
  const [selectedInvoicePdf, setSelectedInvoicePdf] = useState<any | null>(null);

  const factures = [
    { id: 1, invoice: "FAC-2026-001", client: "Mme Amina T.", amount: "4 200 000 XOF", status: "Payée", date: "05/04/2026" },
    { id: 2, invoice: "FAC-2026-002", client: "M. Karim B.", amount: "12 000 000 XOF", status: "Partiellement payée", date: "02/04/2026" },
    { id: 3, invoice: "FAC-2026-003", client: "SARL Agri", amount: "30 000 000 XOF", status: "Impayée", date: "28/03/2026" },
  ];

  return (
    <VentePageWrapper
      title="Etats de Factures"
      breadcrumb="Consulter états / Etats de Factures"
      subtitle="Suivez toutes les factures émises et accédez aux versions PDF."
    >
      <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100 shadow-sm">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-[12px] uppercase tracking-[0.18em]">
            <tr>
              <th className="px-6 py-4">Facture</th>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Montant</th>
              <th className="px-6 py-4">Statut</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            {factures.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">{item.invoice}</td>
                <td className="px-6 py-4">{item.client}</td>
                <td className="px-6 py-4">{item.amount}</td>
                <td className="px-6 py-4"><StatusPill status={item.status} /></td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4 flex flex-wrap gap-2">
                  <button 
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                    onClick={() => setSelectedInvoicePdf(item)}
                    title="Aperçu de la facture"
                  >
                    <Eye size={14} /> Voir
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition">
                    <Download size={14} /> Télécharger
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL D'APERÇU PDF DE LA FACTURE */}
      {selectedInvoicePdf && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300">
          <div className="w-full max-w-5xl h-full flex flex-col rounded-[2.5rem] bg-white overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            
            {/* Barre d'outils du Modal */}
            <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 leading-tight">Aperçu Facture</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">No: {selectedInvoicePdf.invoice} — {selectedInvoicePdf.client}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition shadow-lg shadow-slate-200">
                  <Download size={14} /> Télécharger
                </button>
                <button 
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition" 
                  onClick={() => setSelectedInvoicePdf(null)}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Zone de lecture du PDF (Simulée) */}
            <div className="flex-1 bg-slate-100 p-4 md:p-10 overflow-auto flex justify-center">
              <div className="w-full max-w-[800px] aspect-[1/1.414] bg-white shadow-xl p-12 md:p-20 text-slate-800 relative">
                
                {/* Entête du Document */}
                <div className="flex justify-between items-start mb-16 border-b-2 border-blue-600 pb-8">
                  <div className="font-black text-2xl tracking-tighter text-blue-600 italic">CANAL CICA IMMO</div>
                  <div className="text-right">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Facture de Vente</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">{selectedInvoicePdf.invoice}</p>
                    <p className="text-xs text-slate-500">{selectedInvoicePdf.date}</p>
                  </div>
                </div>
                
                <h1 className="text-3xl font-black text-center mb-16 underline underline-offset-8 decoration-blue-600 uppercase">FACTURE</h1>
                
                <div className="grid grid-cols-2 gap-12 mb-12">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Émis par :</p>
                    <p className="font-bold">CANAL CICA SARL</p>
                    <p className="text-sm text-slate-500">Godomey, route de Ouidah, Bénin</p>
                    <p className="text-sm text-slate-500">+229 01 90 30 62 30</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Facturé à :</p>
                    <p className="font-bold">{selectedInvoicePdf.client}</p>
                    <p className="text-sm text-slate-500">Cotonou, Bénin</p>
                  </div>
                </div>

                <div className="border border-slate-100 rounded-2xl overflow-hidden mb-12">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 font-bold text-slate-700">
                      <tr>
                        <th className="px-6 py-4">Description</th>
                        <th className="px-6 py-4 text-right">Montant</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-6 py-4">Vente de parcelle immobilière - Paiement partiel / total</td>
                        <td className="px-6 py-4 text-right">{selectedInvoicePdf.amount}</td>
                      </tr>
                    </tbody>
                    <tfoot className="bg-slate-50 font-black text-slate-900 text-lg">
                      <tr>
                        <td className="px-6 py-4">TOTAL</td>
                        <td className="px-6 py-4 text-right">{selectedInvoicePdf.amount}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="pt-20 flex justify-between items-center italic text-slate-400">
                  <div className="text-center">
                    <p className="mb-10 text-xs font-black uppercase">Service Comptable</p>
                    <ShieldCheck size={48} className="mx-auto opacity-20" />
                  </div>
                  <div className="text-center">
                    <p className="mb-10 text-xs font-black uppercase">Cachet Société</p>
                    <div className="h-12 w-32 border-b border-slate-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </VentePageWrapper>
  );
};

export default EtatFactures;
