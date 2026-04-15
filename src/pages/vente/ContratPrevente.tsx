import React, { useState } from "react";
import { FileText, Mail, CheckCircle2, Eye, X, Download, ShieldCheck } from "lucide-react";
import { VentePageWrapper, StatusPill } from "./VentePageTemplate";

const ContratPrevente: React.FC = () => {
  const [selectedContractPdf, setSelectedContractPdf] = useState<any | null>(null);

  const contracts = [
    { id: 1, ref: "CP-2026-001", client: "M. Alain B.", property: "Parcelle D2", statut: "En attente signature" },
    { id: 2, ref: "CP-2026-002", client: "Mme Sonia K.", property: "Lot F5", statut: "Signé" },
    { id: 3, ref: "CP-2026-003", client: "SARL Vita", property: "Zone Agricole Z1", statut: "En attente signature" },
  ];

  return (
    <VentePageWrapper
      title="Contrat de Prévente"
      breadcrumb="Diligence / Contrat de Prévente"
      subtitle="Consultez les contrats générés et suivez leur état jusqu'à la signature."
    >
      <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100 shadow-sm">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-[12px] uppercase tracking-[0.18em]">
            <tr>
              <th className="px-6 py-4">Référence</th>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Parcelle</th>
              <th className="px-6 py-4">Statut</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            {contracts.map((contract) => (
              <tr key={contract.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">{contract.ref}</td>
                <td className="px-6 py-4">{contract.client}</td>
                <td className="px-6 py-4">{contract.property}</td>
                <td className="px-6 py-4"><StatusPill status={contract.statut} /></td>
                <td className="px-6 py-4 flex flex-wrap gap-2">
                  <button 
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                    onClick={() => setSelectedContractPdf(contract)}
                    title="Aperçu du contrat"
                  >
                    <Eye size={14} /> Voir le PDF
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition">
                    <Mail size={14} /> Envoyer
                  </button>
                  {contract.statut !== "Signé" && (
                    <button className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 transition">
                      <CheckCircle2 size={14} /> Marquer signé
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL D'APERÇU PDF */}
      {selectedContractPdf && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300">
          <div className="w-full max-w-5xl h-full flex flex-col rounded-[2.5rem] bg-white overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            
            {/* Barre d'outils du Modal */}
            <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 leading-tight">Aperçu du Contrat</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Réf: {selectedContractPdf.ref} — {selectedContractPdf.client}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition shadow-lg shadow-slate-200">
                  <Download size={14} /> Télécharger
                </button>
                <button 
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition" 
                  onClick={() => setSelectedContractPdf(null)}
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
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Document de Compliance</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">{selectedContractPdf.ref}</p>
                  </div>
                </div>
                
                <h1 className="text-3xl font-black text-center mb-16 underline underline-offset-8 decoration-blue-600">CONTRAT DE PRÉVENTE IMMOBILIÈRE</h1>
                
                <div className="space-y-8 text-sm leading-relaxed text-justify">
                  <p>Entre les soussignés, <strong>CANAL CICA SARL</strong>, société immobilière sise à Godomey, représentée par son Gérant, dénommée ci-après "Le Vendeur", d'une part.</p>
                  
                  <p>Et <strong>{selectedContractPdf.client}</strong>, résidant à Cotonou, dénommé ci-après "L'Acquéreur", d'autre part.</p>
                  
                  <p>Il a été convenu et arrêté ce qui suit concernant l'acquisition de l'actif immobilier désigné comme <strong>{selectedContractPdf.property}</strong>.</p>
                  
                  <div className="space-y-4 pt-8">
                    <h2 className="font-black text-slate-900 border-b pb-2 uppercase tracking-wide">Article 1 : Objet de la vente</h2>
                    <p>Le présent contrat confirme l'engagement ferme de l'Acquéreur pour l'achat de la parcelle citée, soumise aux conditions suspensives de paiement intégral.</p>
                  </div>

                  <div className="pt-20 flex justify-between items-center italic text-slate-400">
                    <p>Fait à Cotonou, le {new Date().toLocaleDateString()}</p>
                    <div className="text-center">
                      <p className="mb-10 text-xs font-black uppercase">Cachet CANAL CICA</p>
                      <ShieldCheck size={48} className="mx-auto opacity-20" />
                    </div>
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

export default ContratPrevente;
