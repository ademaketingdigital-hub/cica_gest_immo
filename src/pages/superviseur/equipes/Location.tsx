import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "../sidebarItems";
import { Home, ShieldCheck, PieChart } from "lucide-react";

const managers = [
  { name: "E. Ahou", maisons: 14, occupation: "92%", impayes: 3 },
  { name: "S. Agbo", maisons: 10, occupation: "86%", impayes: 6 },
  { name: "M. Kpegba", maisons: 8, occupation: "79%", impayes: 9 },
];

const GestionnairesLocation: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Gestionnaires Location" breadcrumb="Superviseur / Équipes & Performance / Gestionnaires Location">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Équipe Location</h2>
          <p className="text-slate-500">Suivi des gestionnaires locatifs et de la performance des maisons gérées.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
          <Home size={16} /> Maisons suivies
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {managers.map((manager) => (
          <div key={manager.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{manager.name}</h3>
                <p className="text-sm text-slate-500">Taux occupation {manager.occupation}</p>
              </div>
              <ShieldCheck size={20} className="text-emerald-600" />
            </div>
            <div className="space-y-3 text-slate-600">
              <p>Maisons gérées: <span className="font-semibold text-slate-900">{manager.maisons}</span></p>
              <p>Impayés gérés: <span className="font-semibold text-slate-900">{manager.impayes}</span></p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 text-slate-600">
        <div className="flex items-center gap-3 mb-3">
          <PieChart size={18} className="text-blue-600" />
          <p className="font-semibold text-slate-800">Résumé</p>
        </div>
        <p>Les gestionnaires location sont suivis sur le taux d’occupation, les impayés et la gestion quotidienne des maisons.</p>
      </div>
    </div>
  </DashboardLayout>
);

export default GestionnairesLocation;
