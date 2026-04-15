import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "../sidebarItems";
import { TrendingUp, Award, Users } from "lucide-react";

const managers = [
  { name: "A. Kossi", ventes: 12, marge: "24%", validation: "92%" },
  { name: "B. Hounkpe", ventes: 9, marge: "19%", validation: "88%" },
  { name: "C. Dossou", ventes: 7, marge: "16%", validation: "85%" },
];

const GestionnairesVente: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Gestionnaires Vente" breadcrumb="Superviseur / Équipes & Performance / Gestionnaires Vente">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Équipe Vente</h2>
          <p className="text-slate-500">Suivi des gestionnaires de vente et de leurs performances individuelles.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
          <TrendingUp size={16} /> Top performance
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {managers.map((manager) => (
          <div key={manager.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{manager.name}</h3>
                <p className="text-sm text-slate-500">Taux de validation {manager.validation}</p>
              </div>
              <Award size={20} className="text-amber-500" />
            </div>
            <div className="space-y-3 text-slate-600">
              <p>Ventes réalisées: <span className="font-semibold text-slate-900">{manager.ventes}</span></p>
              <p>Marge moyenne: <span className="font-semibold text-slate-900">{manager.marge}</span></p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 text-slate-600">
        <div className="flex items-center gap-3 mb-3">
          <Users size={18} className="text-blue-600" />
          <p className="font-semibold text-slate-800">Résumé</p>
        </div>
        <p>Les gestionnaires vente sont évalués sur les dossiers traités, les marges et le taux de validation.</p>
      </div>
    </div>
  </DashboardLayout>
);

export default GestionnairesVente;
