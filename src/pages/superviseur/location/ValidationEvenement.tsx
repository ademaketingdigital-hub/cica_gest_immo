import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "../sidebarItems";
import { CalendarCheck, XCircle, CheckCircle2 } from "lucide-react";

const events = [
  { maison: "Villa A1", type: "Réparation", montant: "120k", date: "08/04/2026", statut: "En attente" },
  { maison: "App. B3", type: "Sinistre", montant: "450k", date: "09/04/2026", statut: "Proposition de coût" },
  { maison: "Duplex C7", type: "Inspection", montant: "80k", date: "10/04/2026", statut: "Soumis" },
];

const ValidationEvenement: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Validation d'événement" breadcrumb="Superviseur / Supervision Location / Validation d'événement">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Événements déclarés</h2>
          <p className="text-slate-500">Validez, rejetez ou modifiez le montant des événements signalés.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
          <CalendarCheck size={16} /> Nouveau suivi
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
        <table className="min-w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-[0.15em]">
            <tr>
              <th className="px-5 py-4">Maison</th>
              <th className="px-5 py-4">Type</th>
              <th className="px-5 py-4">Montant</th>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4">Statut</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.maison} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 font-semibold text-slate-800">{event.maison}</td>
                <td className="px-5 py-4">{event.type}</td>
                <td className="px-5 py-4">{event.montant}</td>
                <td className="px-5 py-4">{event.date}</td>
                <td className="px-5 py-4">{event.statut}</td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded-2xl bg-emerald-600 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-700 transition"><CheckCircle2 size={14} /> Valider</button>
                    <button className="rounded-2xl bg-rose-500 px-3 py-1 text-xs font-semibold text-white hover:bg-rose-600 transition"><XCircle size={14} /> Rejeter</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default ValidationEvenement;
