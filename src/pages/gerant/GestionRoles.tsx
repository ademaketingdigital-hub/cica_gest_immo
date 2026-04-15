import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { ShieldCheck, Users2, Target, Settings2 } from "lucide-react";

const roles = [
  { name: "Gestionnaire Vente", users: 8, description: "Gestion des ventes de parcelles et validation des dossiers.", permissions: "Vente, Validation, Reporting" },
  { name: "Gestionnaire Location", users: 5, description: "Suivi locatif, gestion des loyers et impayés.", permissions: "Location, Opérations" },
  { name: "Trésorier", users: 2, description: "Gestion des flux financiers et approbations de caisse.", permissions: "Finance, Caisse" },
];

const GestionRoles: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Gestion des rôles" breadcrumb="Gérant / Gestion des Rôles / Gestion des rôles">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Rôles et permissions</h2>
          <p className="text-slate-500">Vue d’ensemble des rôles du système et des droits associés.</p>
        </div>
        <button className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">Ajouter un rôle</button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {roles.map((role) => (
          <div key={role.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{role.name}</h3>
                <p className="text-sm text-slate-500">{role.users} utilisateurs</p>
              </div>
              {role.name === "Gestionnaire Vente" ? <Target size={20} className="text-indigo-600" /> : role.name === "Gestionnaire Location" ? <Users2 size={20} className="text-emerald-600" /> : <Settings2 size={20} className="text-slate-600" />}
            </div>
            <p className="text-sm text-slate-600 mb-4">{role.description}</p>
            <p className="text-sm text-slate-500 mb-5"><span className="font-semibold text-slate-900">Permissions :</span> {role.permissions}</p>
            <button className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition">Modifier permissions</button>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default GestionRoles;
