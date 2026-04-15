import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "./sidebarItems";
import { UserPlus, ShieldCheck, ArrowRight, Search, Briefcase } from "lucide-react";

const managers = [
  { name: "A. Kossi", role: "Vente", dossiers: 42, performance: "88%", status: "Actif" },
  { name: "E. Ahou", role: "Location", dossiers: 36, performance: "81%", status: "Actif" },
  { name: "M. Hounkpe", role: "Vente", dossiers: 28, performance: "76%", status: "Actif" },
  { name: "S. Agbo", role: "Location", dossiers: 19, performance: "69%", status: "Inactif" },
];

const Gestionnaires: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Gestion des Gestionnaires" breadcrumb="Superviseur / Gestionnaires">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Gestionnaires Vente & Location</h2>
          <p className="text-slate-500">Liste et performance des responsables d’équipe.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="bg-slate-100 text-slate-800 px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-slate-200 transition">Ajouter gestionnaire</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-blue-700 transition">Exporter</button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <UserPlus size={20} className="text-blue-600" />
            <div>
              <p className="text-slate-500 text-sm">Total gestionnaires</p>
              <p className="text-3xl font-black text-slate-900">12</p>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">Regroupe les responsables de vente et de location qui traitent les dossiers.</div>
        </div>
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck size={20} className="text-emerald-600" />
            <div>
              <p className="text-slate-500 text-sm">Performance moyenne</p>
              <p className="text-3xl font-black text-slate-900">82%</p>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">Indicateur basé sur dossiers traités, temps de réponse et qualité des validations.</div>
        </div>
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <Briefcase size={20} className="text-amber-600" />
            <div>
              <p className="text-slate-500 text-sm">Dossiers traités</p>
              <p className="text-3xl font-black text-slate-900">125</p>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">Synthèse des derniers 7 jours par gestionnaire.</div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Liste des gestionnaires</h3>
            <p className="text-sm text-slate-500">Voir, réassigner ou activer les collaborateurs.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm">Filtrer</button>
            <button className="px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm">Recherche</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-600 border-separate border-spacing-y-3">
            <thead>
              <tr className="text-slate-500 uppercase text-xs font-semibold">
                <th className="px-4 py-3">Nom</th>
                <th className="px-4 py-3">Rôle</th>
                <th className="px-4 py-3">Dossiers</th>
                <th className="px-4 py-3">Performance</th>
                <th className="px-4 py-3">Statut</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {managers.map((manager) => (
                <tr key={manager.name} className="bg-slate-50 rounded-3xl mb-3">
                  <td className="px-4 py-4 font-semibold text-slate-800">{manager.name}</td>
                  <td className="px-4 py-4">{manager.role}</td>
                  <td className="px-4 py-4">{manager.dossiers}</td>
                  <td className="px-4 py-4">{manager.performance}</td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${manager.status === "Actif" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700"}`}>
                      {manager.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      <button className="rounded-2xl bg-blue-600 text-white px-3 py-1 text-xs font-semibold hover:bg-blue-700">Voir</button>
                      <button className="rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold hover:bg-slate-200">Réassigner</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Gestionnaires;
