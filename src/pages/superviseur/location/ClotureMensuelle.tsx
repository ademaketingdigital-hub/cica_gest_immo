import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "../sidebarItems";
import { CheckCircle2, Archive, ArrowRight } from "lucide-react";

const maisons = [
  { maison: "Villa A1", statut: "Prête", solde: "320k" },
  { maison: "App. B3", statut: "En revue", solde: "210k" },
  { maison: "Duplex C7", statut: "Bloquée", solde: "-12k" },
];

const ClotureMensuelle: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Clôture mensuelle" breadcrumb="Superviseur / Supervision Location / Clôture mensuelle">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Maisons à clôturer</h2>
          <p className="text-slate-500">Clôturez les maisons en fin de cycle et suivez les soldes restants.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition">
          <Archive size={16} /> Clôture massive
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {maisons.map((item) => (
          <div key={item.maison} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{item.maison}</h3>
                <p className="text-sm text-slate-500">Solde disponible: {item.solde}</p>
              </div>
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{item.statut}</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
                <CheckCircle2 size={16} /> Clôturer
              </button>
              <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition">
                <ArrowRight size={16} /> Détails
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default ClotureMensuelle;
