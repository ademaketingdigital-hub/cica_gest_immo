import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "../sidebarItems";
import { Download, Filter, FolderCheck } from "lucide-react";

const ventes = [
  { client: "M. Loko", domaine: "Cotonou Nord", montant: "4.5M", date: "02/04", statut: "Finalisée" },
  { client: "Mme Sika", domaine: "Abomey Sud", montant: "3.2M", date: "05/04", statut: "En cours" },
  { client: "M. Dovi", domaine: "Porto-Novo Est", montant: "2.9M", date: "08/04", statut: "Bloquée" },
];

const EtatVentes: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="État des ventes" breadcrumb="Superviseur / Supervision Vente / État des ventes">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Tableau des ventes</h2>
          <p className="text-slate-500">Analyse et export des ventes réalisées et en cours.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition">
            <Filter size={16} /> Filtrer
          </button>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
            <Download size={16} /> Exporter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
        <table className="min-w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-[0.15em]">
            <tr>
              <th className="px-5 py-4">Client</th>
              <th className="px-5 py-4">Domaine</th>
              <th className="px-5 py-4">Montant</th>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4">Statut</th>
              <th className="px-5 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {ventes.map((vente) => (
              <tr key={vente.client} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 font-semibold text-slate-800">{vente.client}</td>
                <td className="px-5 py-4">{vente.domaine}</td>
                <td className="px-5 py-4">{vente.montant}</td>
                <td className="px-5 py-4">{vente.date}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${vente.statut === "Finalisée" ? "bg-emerald-100 text-emerald-700" : vente.statut === "En cours" ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"}`}>
                    {vente.statut}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition">
                    <FolderCheck size={14} /> Détails
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default EtatVentes;
