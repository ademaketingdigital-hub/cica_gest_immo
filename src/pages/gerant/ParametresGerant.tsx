import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { Settings, ShieldCheck } from "lucide-react";

const ParametresGerant: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Paramètres" breadcrumb="Gérant / Configuration / Paramètres">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Configuration générale</h2>
            <p className="text-slate-500">Personnalisez l’accès, les notifications et les règles métier.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
            <ShieldCheck size={18} /> Sécurité
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Notifications</p>
          <div className="mt-4 space-y-4">
            <div className="rounded-3xl bg-slate-50 p-4">Alertes par email activées</div>
            <div className="rounded-3xl bg-slate-50 p-4">Rapports automatiques programmés</div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Accès</p>
          <div className="mt-4 space-y-4">
            <div className="rounded-3xl bg-slate-50 p-4">Gestion des permissions</div>
            <div className="rounded-3xl bg-slate-50 p-4">Securité & authentification</div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
        <div className="flex items-center gap-2 text-sm">
          <Settings size={18} />
          <span>Les paramètres permettent d’adapter le tableau de bord aux besoins du gérant.</span>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default ParametresGerant;
