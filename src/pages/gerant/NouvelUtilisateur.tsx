import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { UserPlus, ShieldCheck, Mail, Lock, Users2 } from "lucide-react";

const NouvelUtilisateur: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Créer nouvel utilisateur" breadcrumb="Gérant / Gestion des Rôles / Nouvel utilisateur">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Ajouter un utilisateur</h2>
          <p className="text-slate-500">Créer un compte avec rôle et permissions dès la première connexion.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
          <UserPlus size={16} /> Nouveau compte
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-600">
            Nom complet
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none" placeholder="Jean Dupont" />
          </label>
          <label className="space-y-2 text-sm text-slate-600">
            Email
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none" placeholder="jean@canal-cica.com" />
          </label>
          <label className="space-y-2 text-sm text-slate-600">
            Téléphone
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none" placeholder="+229 90 00 00 00" />
          </label>
          <label className="space-y-2 text-sm text-slate-600">
            Rôle
            <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none">
              <option>Gestionnaire Vente</option>
              <option>Gestionnaire Location</option>
              <option>Trésorier</option>
              <option>Superviseur</option>
            </select>
          </label>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-600">
            Mot de passe
            <input type="password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none" placeholder="••••••••" />
          </label>
          <label className="space-y-2 text-sm text-slate-600">
            Confirmer le mot de passe
            <input type="password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none" placeholder="••••••••" />
          </label>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">Créer utilisateur</button>
          <button className="rounded-2xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition">Annuler</button>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default NouvelUtilisateur;
