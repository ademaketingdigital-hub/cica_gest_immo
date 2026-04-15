import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "../sidebarItems";
import { MapPin, Clock, AlertTriangle } from "lucide-react";

const domaines = [
  { name: "Domaine Akpakpa", statut: "Validation Technique", detail: "Étude de dossier en cours" },
  { name: "Domaine Hêvié", statut: "Prêt à publier", detail: "En attente du dernier document" },
  { name: "Domaine Godomey", statut: "Revue commerciale", detail: "Vérification des prix" },
];

const DomainesAttente: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Domaines en attente" breadcrumb="Superviseur / Supervision Vente / Domaines en attente">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Domaine en cours de traitement</h2>
          <p className="text-slate-500">Suivi des domaines qui ne sont pas encore publiés ou qui attendent une validation.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition">
          <MapPin size={16} /> Voir carte
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {domaines.map((domaine) => (
          <div key={domaine.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">{domaine.name}</h3>
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{domaine.statut}</span>
            </div>
            <p className="text-sm text-slate-500 mb-5">{domaine.detail}</p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock size={16} /> Temps estimé: 1-2 jours
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 text-slate-600">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle size={18} className="text-amber-500" />
          <p className="font-semibold text-slate-800">Points de vigilance</p>
        </div>
        <p>Les domaines en statut « Validation Technique » doivent être priorisés pour éviter les retards de publication.</p>
      </div>
    </div>
  </DashboardLayout>
);

export default DomainesAttente;
