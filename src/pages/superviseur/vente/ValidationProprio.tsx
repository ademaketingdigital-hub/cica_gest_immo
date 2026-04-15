import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "../sidebarItems";
import { CheckCircle2, XCircle, FileText, ShieldCheck, ArrowRight } from "lucide-react";

const submissions = [
  { name: "Mme Adjo", id: "AB123456", date: "11/04/2026", documents: "CNI, Attestation" },
  { name: "M. Agbo", id: "CD789012", date: "10/04/2026", documents: "CNI, Relevé" },
  { name: "Mme Zinsou", id: "EF345678", date: "09/04/2026", documents: "CNI, Photos" },
];

const ValidationProprio: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Validation Proprio" breadcrumb="Superviseur / Supervision Vente / Validation Proprio">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Propriétaires en attente</h2>
          <p className="text-slate-500">Validez ou demandez des pièces supplémentaires pour les dossiers en attente.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
          <FileText size={16} /> Exporter
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
        <table className="min-w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-[0.15em]">
            <tr>
              <th className="px-5 py-4">Nom</th>
              <th className="px-5 py-4">Pièce d’identité</th>
              <th className="px-5 py-4">Date soumission</th>
              <th className="px-5 py-4">Documents</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((item) => (
              <tr key={item.name} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 font-semibold text-slate-800">{item.name}</td>
                <td className="px-5 py-4">{item.id}</td>
                <td className="px-5 py-4">{item.date}</td>
                <td className="px-5 py-4">{item.documents}</td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded-2xl bg-emerald-600 px-3 py-1 text-white text-xs font-semibold hover:bg-emerald-700 transition">Valider</button>
                    <button className="rounded-2xl bg-rose-500 px-3 py-1 text-white text-xs font-semibold hover:bg-rose-600 transition">Rejeter</button>
                    <button className="rounded-2xl bg-slate-100 px-3 py-1 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition">Demander pièces</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 text-slate-600">
        <div className="flex items-center gap-3 mb-3">
          <ShieldCheck size={18} className="text-blue-600" />
          <p className="font-semibold text-slate-800">Conseil</p>
        </div>
        <p>Priorisez les validations de dossiers disposant de toutes les pièces puis relancez les propriétaires dont les pièces sont incomplètes.</p>
      </div>
    </div>
  </DashboardLayout>
);

export default ValidationProprio;
