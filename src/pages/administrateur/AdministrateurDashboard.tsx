import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  LayoutDashboard, 
  Users, 
  Activity, 
  Settings, 
  FileText, 
  Hammer, 
  BarChart3, 
  UserPlus, 
  ShieldCheck, 
  UserCog, 
  History, 
  TrendingUp, 
  Map, 
  Wallet, 
  CheckCircle2, 
  Sliders, 
  Wrench, 
  Building2, 
  Database, 
  Terminal, 
  Download, 
  Bell, 
  Monitor, 
  Globe,
  ChevronRight,
  Lock
} from "lucide-react";

const AdministrateurDashboard: React.FC = () => {
  
  // Définition des items de la sidebar selon la structure fournie
  const sidebarItems = [
    {
      label: "Tableau de bord",
      href: "#",
      icon: <LayoutDashboard size={20} />,
      children: [
        { label: "Vue d'ensemble générale", href: "/administrateur/dashboard" },
        { label: "Statistiques globales", href: "/administrateur/statistiques-globales" },
      ]
    },
    {
      label: "Gestion des Utilisateurs",
      href: "#",
      icon: <Users size={20} />,
      children: [
        { label: "Liste des utilisateurs", href: "/administrateur/utilisateurs" },
        { label: "Ajouter un utilisateur", href: "/administrateur/ajouter-utilisateur" },
        { label: "Gestion des rôles", href: "/administrateur/gestion-roles" },
        { label: "Assignation de rôles", href: "/administrateur/assignation-roles" },
        { label: "Historique des connexions", href: "/administrateur/historique-connexions" },
      ]
    },
    {
      label: "Supervision des Opérations",
      href: "#",
      icon: <Activity size={20} />,
      children: [
        { label: "Supervision Vente", href: "/administrateur/supervision-vente" },
        { label: "Supervision Location", href: "/administrateur/supervision-location" },
        { label: "Supervision Caisse", href: "/administrateur/supervision-caisse" },
        { label: "Toutes les validations", href: "/administrateur/validations-pending" },
      ]
    },
    {
      label: "Gestion du Système",
      href: "#",
      icon: <Settings size={20} />,
      children: [
        { label: "Paramètres de l'application", href: "/administrateur/parametres" },
        { label: "Configuration générale", href: "/administrateur/configuration" },
        { label: "Gestion des domaines / Maisons", href: "/administrateur/gestion-domaines" },
        { label: "Backup & Sécurité", href: "/administrateur/backup" },
        { label: "Logs du système", href: "/administrateur/logs" },
      ]
    },
    {
      label: "Rapports & Statistiques",
      href: "#",
      icon: <FileText size={20} />,
      children: [
        { label: "Rapport financier global", href: "/administrateur/rapport-financier" },
        { label: "Rapport complet des ventes", href: "/administrateur/rapport-ventes" },
        { label: "Rapport locatif complet", href: "/administrateur/rapport-locatif" },
        { label: "Performance globale", href: "/administrateur/performance" },
        { label: "Export de données", href: "/administrateur/export-donnees" },
      ]
    },
    {
      label: "Outils Avancés",
      href: "#",
      icon: <Hammer size={20} />,
      children: [
        { label: "Gestion des notifications", href: "/administrateur/notifications" },
        { label: "Personnalisation du site vitrine", href: "/administrateur/site-vitrine" },
        { label: "Gestion des pages publiques", href: "/administrateur/pages-publiques" },
      ]
    }
  ];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Console d'Administration"
      breadcrumb="Espace Administrateur / Dashboard"
    >
      <div className="space-y-8 animate-in fade-in duration-700">
        
        {/* EN-TÊTE */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">État du Système</h2>
            <p className="text-slate-500">Supervision technique et gestion des infrastructures.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-slate-200 hover:bg-slate-900 transition-all flex items-center gap-2">
              <Database size={18} />
              Backup Manuel
            </button>
          </div>
        </div>

        {/* KPI ADMINISTRATEUR */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Utilisateurs" value="124" color="bg-blue-600" icon={<Users size={24}/>} />
          <StatCard title="Uptime Système" value="99.9%" color="bg-emerald-600" icon={<Activity size={24}/>} />
          <StatCard title="Erreurs Logs" value="08" color="bg-rose-600" icon={<Terminal size={24}/>} />
          <StatCard title="Sécurité" value="Optimale" color="bg-indigo-600" icon={<ShieldCheck size={24}/>} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Activité Récente des Utilisateurs */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <History className="text-blue-600" size={20} />
              <h3 className="font-bold text-slate-800">Dernières connexions</h3>
            </div>
            <div className="space-y-4">
              {[
                { user: "Jean Gérant", time: "Il y a 5 min", action: "Connexion" },
                { user: "Marie Com", time: "Il y a 12 min", action: "Publication News" },
                { user: "Paul Trésor", time: "Il y a 45 min", action: "Validation Caisse" },
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">{log.user.charAt(0)}</div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">{log.user}</p>
                      <p className="text-[10px] text-slate-500">{log.action}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">{log.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const StatCard = ({ title, value, color, icon }: { title: string, value: string, color: string, icon: React.ReactNode }) => (
  <div className={`${color} text-white p-6 rounded-2xl shadow-lg flex items-center justify-between transition-transform hover:scale-[1.02]`}>
    <div>
      <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.1em]">{title}</p>
      <p className="text-4xl font-black mt-1 leading-none">{value}</p>
    </div>
    <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">{icon}</div>
  </div>
);

export default AdministrateurDashboard;