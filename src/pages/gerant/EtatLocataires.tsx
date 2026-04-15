import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { Home, HeartPulse } from "lucide-react";

const locataires = [
  { nom: "Mme Kemi", site: "Cité Soleil", statut: "Solvable", dernierPaiement: "01/04" },
  { nom: "M. Tchao", site: "Cité Aurore", statut: "Retard", dernierPaiement: "18/03" },
  { nom: "Mme Salif", site: "HLM Marina", statut: "Actif", dernierPaiement: "28/03" },
];

const EtatLocataires: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="État locataires" breadcrumb="Gérant / Rapports & Statistiques / État locataires">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Suivi des locataires</h2>
            <p className="text-slate-500">Analyse des paiements et de l’occupation locative.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl bg-sky-100 px-4 py-3 text-sm font-semibold text-sky-800">
            <HeartPulse size={18} /> Performance locative
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
        <table className="min-w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-[0.15em]">
            <tr>
              <th className="px-5 py-4">Nom</th>
              <th className="px-5 py-4">Site</th>
              <th className="px-5 py-4">Statut</th>
              <th className="px-5 py-4">Dernier paiement</th>
            </tr>
          </thead>
          <tbody>
            {locataires.map((item) => (
              <tr key={item.nom} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 font-semibold text-slate-800">{item.nom}</td>
                <td className="px-5 py-4">{item.site}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.statut === "Actif" ? "bg-emerald-100 text-emerald-700" : item.statut === "Retard" ? "bg-rose-100 text-rose-700" : "bg-slate-100 text-slate-700"}`}>
                    {item.statut}
                  </span>
                </td>
                <td className="px-5 py-4">{item.dernierPaiement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default EtatLocataires;
