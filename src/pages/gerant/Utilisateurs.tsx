import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { Search, UserCheck, ShieldCheck, RefreshCcw } from "lucide-react";

const users = [
  { name: "A. Kossi", email: "kossi@canal-cica.com", phone: "+229 90 00 00 01", role: "Gestionnaire Vente", status: "Actif", lastLogin: "12/04/2026" },
  { name: "E. Ahou", email: "ahou@canal-cica.com", phone: "+229 90 00 00 02", role: "Gestionnaire Location", status: "Actif", lastLogin: "11/04/2026" },
  { name: "M. Hounkpe", email: "hounkpe@canal-cica.com", phone: "+229 90 00 00 03", role: "Trésorier", status: "Inactif", lastLogin: "08/04/2026" },
];

const Utilisateurs: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Liste des utilisateurs" breadcrumb="Gérant / Gestion des Rôles / Utilisateurs">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Tous les utilisateurs</h2>
          <p className="text-slate-500">Recherche, filtres et actions rapides sur les comptes.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition">
            <RefreshCcw size={16} /> Actualiser
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-slate-700">
          <Search size={18} />
          <input placeholder="Rechercher par nom, email, rôle..." className="bg-transparent outline-none text-sm w-72" />
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">Filtrer</button>
          <button className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition">Nouvel utilisateur</button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
        <table className="min-w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-[0.15em]">
            <tr>
              <th className="px-5 py-4">Nom</th>
              <th className="px-5 py-4">Email</th>
              <th className="px-5 py-4">Téléphone</th>
              <th className="px-5 py-4">Rôle actuel</th>
              <th className="px-5 py-4">Statut</th>
              <th className="px-5 py-4">Dernière connexion</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 font-semibold text-slate-800">{user.name}</td>
                <td className="px-5 py-4">{user.email}</td>
                <td className="px-5 py-4">{user.phone}</td>
                <td className="px-5 py-4">{user.role}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${user.status === "Actif" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700"}`}>{user.status}</span>
                </td>
                <td className="px-5 py-4">{user.lastLogin}</td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition">Modifier rôle</button>
                    <button className="rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition">Réinitialiser</button>
                    <button className="rounded-2xl bg-rose-500 px-3 py-1 text-xs font-semibold text-white hover:bg-rose-600 transition">Désactiver</button>
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

export default Utilisateurs;
