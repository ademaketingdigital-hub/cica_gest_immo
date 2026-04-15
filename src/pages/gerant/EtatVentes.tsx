import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { Download, Filter } from "lucide-react";

const ventes = [
  { client: "M. Loko", domaine: "Cotonou Nord", montant: "4.5M", date: "02/04", statut: "Finalisée" },
  { client: "Mme Sika", domaine: "Abomey Sud", montant: "3.2M", date: "05/04", statut: "En cours" },
  { client: "M. Dovi", domaine: "Porto-Novo Est", montant: "2.9M", date: "08/04", statut: "Bloquée" },
];

const EtatVentes: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="États des ventes" breadcrumb="Gérant / États & Rapports / États des ventes">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Rapport complet des ventes</h2>
          <p className="text-slate-500">Suivez toutes les ventes par statut avec filtres et export.</p>
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
            </tr>
          </thead>
          <tbody>
            {ventes.map((item) => (
              <tr key={item.client} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 font-semibold text-slate-800">{item.client}</td>
                <td className="px-5 py-4">{item.domaine}</td>
                <td className="px-5 py-4">{item.montant}</td>
                <td className="px-5 py-4">{item.date}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.statut === "Finalisée" ? "bg-emerald-100 text-emerald-700" : item.statut === "En cours" ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"}`}>
                    {item.statut}
                  </span>
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
