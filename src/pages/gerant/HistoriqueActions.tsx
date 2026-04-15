import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { Clock3, ListChecks } from "lucide-react";

const actions = [
  { user: "Admin", action: "Création d’un compte", date: "12/04 09:45" },
  { user: "Ops", action: "Validation facture #148", date: "12/04 10:15" },
  { user: "Finance", action: "Mise à jour solde caisse", date: "12/04 11:00" },
];

const HistoriqueActions: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Historique actions" breadcrumb="Gérant / Configuration / Historique actions">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Suivi des actions</h2>
            <p className="text-slate-500">Consultez les dernières actions de l’équipe et les validations d’accès.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
            <Clock3 size={18} /> Récents
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
        <table className="min-w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-[0.15em]">
            <tr>
              <th className="px-5 py-4">Utilisateur</th>
              <th className="px-5 py-4">Action</th>
              <th className="px-5 py-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {actions.map((item) => (
              <tr key={`${item.user}-${item.date}`} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 font-semibold text-slate-800">{item.user}</td>
                <td className="px-5 py-4">{item.action}</td>
                <td className="px-5 py-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default HistoriqueActions;
