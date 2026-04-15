import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { Search, CheckSquare, RefreshCcw } from "lucide-react";

const users = [
  { name: "A. Kossi", email: "kossi@canal-cica.com", currentRole: "Gestionnaire Vente" },
  { name: "E. Ahou", email: "ahou@canal-cica.com", currentRole: "Gestionnaire Location" },
  { name: "M. Hounkpe", email: "hounkpe@canal-cica.com", currentRole: "Trésorier" },
];

const AssignerRoles: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Assigner rôles" breadcrumb="Gérant / Gestion des Rôles / Assigner rôles">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Assignation de rôles</h2>
          <p className="text-slate-500">Modifiez les profils individuels ou par lot pour les utilisateurs.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
          <RefreshCcw size={16} /> Actualiser
        </button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-slate-700">
          <Search size={18} />
          <input placeholder="Rechercher un utilisateur" className="bg-transparent outline-none text-sm w-72" />
        </div>
        <button className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition">Assigner rôles en masse</button>
      </div>

      <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
        <table className="min-w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-[0.15em]">
            <tr>
              <th className="px-5 py-4">Utilisateur</th>
              <th className="px-5 py-4">Email</th>
              <th className="px-5 py-4">Rôle actuel</th>
              <th className="px-5 py-4">Nouveau rôle</th>
              <th className="px-5 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 font-semibold text-slate-800">{user.name}</td>
                <td className="px-5 py-4">{user.email}</td>
                <td className="px-5 py-4">{user.currentRole}</td>
                <td className="px-5 py-4">
                  <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none">
                    <option>Gestionnaire Vente</option>
                    <option>Gestionnaire Location</option>
                    <option>Trésorier</option>
                    <option>Superviseur</option>
                  </select>
                </td>
                <td className="px-5 py-4">
                  <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition">
                    <CheckSquare size={14} /> Enregistrer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default AssignerRoles;
