import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { Gauge, Percent } from "lucide-react";

const TauxOccupation: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Taux d’occupation" breadcrumb="Gérant / Rapports & Statistiques / Taux d’occupation">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Occupancy status</h2>
            <p className="text-slate-500">Taux d’occupation par zone et réserve de stock.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
            <Percent size={18} /> 72%
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Taux global</p>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-24 w-24 rounded-full bg-blue-600 text-white grid place-items-center text-3xl font-black">72%</div>
            <p className="text-slate-600">Occupació moyenne sur l’ensemble des biens et locations.</p>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 text-slate-500">
            <Gauge size={18} />
            <span>Capacité d’occupation par zone</span>
          </div>
          <div className="mt-8 space-y-4">
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Zone A</p>
              <p className="mt-2 text-xl font-bold text-slate-900">96%</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Zone B</p>
              <p className="mt-2 text-xl font-bold text-slate-900">64%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default TauxOccupation;
