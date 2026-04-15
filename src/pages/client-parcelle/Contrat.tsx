import React from "react";
import { FileText, ArrowDown, CheckCircle2 } from "lucide-react";
import { ClientParcellePageWrapper, StatusPill } from "./ClientParcellePageTemplate";

const Contrat: React.FC = () => {
  const contract = {
    title: "Contrat de pré-vente #CP-2026-042",
    status: "En attente signature",
    date: "05/04/2026",
  };

  return (
    <ClientParcellePageWrapper
      title="Contrat de pré-vente"
      breadcrumb="Client / Contrat de pré-vente"
      subtitle="Consultez et signez votre contrat de pré-vente."
    >
      <div className="grid gap-6">
        <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Contrat</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">{contract.title}</h3>
              <p className="text-sm text-slate-500">Émis le {contract.date}</p>
            </div>
            <StatusPill status={contract.status} />
          </div>
          <div className="mt-8 rounded-3xl bg-slate-50 p-8 text-center text-slate-500">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
              <FileText size={28} />
            </div>
            <p className="text-sm font-medium">Aperçu du contrat de pré-vente (PDF)</p>
            <p className="mt-2 text-xs text-slate-400">Intégration PDF ou lien de téléchargement</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-3xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 transition">
              <ArrowDown size={16} /> Télécharger
            </button>
            <button className="inline-flex items-center gap-2 rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700 transition">
              <CheckCircle2 size={16} /> Signer le contrat
            </button>
          </div>
        </div>
      </div>
    </ClientParcellePageWrapper>
  );
};

export default Contrat;
