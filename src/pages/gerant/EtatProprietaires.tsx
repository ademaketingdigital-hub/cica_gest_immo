import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { Users, Star } from "lucide-react";

const proprietaires = [
  { nom: "M. Koffi", contact: "+229 90 12 34 56", biens: 4, solde: "12M" },
  { nom: "Mme Adjoua", contact: "+229 97 65 43 21", biens: 2, solde: "7.8M" },
  { nom: "M. Jean", contact: "+229 91 23 45 67", biens: 3, solde: "9.2M" },
];

const EtatProprietaires: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="État propriétaires" breadcrumb="Gérant / Rapports & Statistiques / État propriétaires">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Gestion des propriétaires</h2>
            <p className="text-slate-500">Suivez les propriétaires, leurs biens et les soldes associés.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl bg-amber-100 px-4 py-3 text-sm font-semibold text-amber-800">
            <Star size={18} /> Top propriétaires
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
        <table className="min-w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-[0.15em]">
            <tr>
              <th className="px-5 py-4">Nom</th>
              <th className="px-5 py-4">Contact</th>
              <th className="px-5 py-4">Biens</th>
              <th className="px-5 py-4">Solde</th>
            </tr>
          </thead>
          <tbody>
            {proprietaires.map((item) => (
              <tr key={item.nom} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 font-semibold text-slate-800">{item.nom}</td>
                <td className="px-5 py-4">{item.contact}</td>
                <td className="px-5 py-4">{item.biens}</td>
                <td className="px-5 py-4">{item.solde}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default EtatProprietaires;
