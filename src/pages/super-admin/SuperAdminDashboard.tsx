import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  LayoutDashboard, 
  Users, 
  ShieldAlert, 
  Settings, 
  FileSearch, 
  Wrench, 
  Activity, 
  Database, 
  Server, 
  Terminal, 
  Cpu, 
  Lock, 
  UserPlus, 
  History, 
  ShieldCheck,
  Zap,
  ChevronRight,
  HardDrive,
  FileText,
} from "lucide-react";

const SuperAdminDashboard: React.FC = () => {
  
  // Définition des items de la sidebar selon la structure fournie
  const sidebarItems = [
    {
      label: "Tableau de bord",
      href: "#",
      icon: <LayoutDashboard size={20} />,
      children: [
        { label: "Vue d'ensemble système", href: "/super-admin/dashboard" },
        { label: "Statistiques en temps réel", href: "/super-admin/stats-temps-reel" },
      ]
    },
    {
      label: "Gestion Utilisateurs & Rôles",
      href: "#",
      icon: <Users size={20} />,
      children: [
        { label: "Tous les utilisateurs", href: "/super-admin/utilisateurs" },
        { label: "Gestion des rôles", href: "/super-admin/gestion-roles" },
        { label: "Permissions détaillées", href: "/super-admin/permissions" },
        { label: "Créer utilisateur (Admin/Gérant)", href: "/super-admin/creer-utilisateur" },
        { label: "Historique des connexions", href: "/super-admin/historique-connexion" },
      ]
    },
    {
      label: "Supervision Globale",
      href: "#",
      icon: <ShieldAlert size={20} />,
      children: [
        { label: "Supervision Vente", href: "/super-admin/supervision-vente" },
        { label: "Supervision Location", href: "/super-admin/supervision-location" },
        { label: "Supervision Caisse", href: "/super-admin/supervision-caisse" },
        { label: "Toutes les validations en attente", href: "/super-admin/validations-pending" },
      ]
    },
    {
      label: "Configuration Système",
      href: "#",
      icon: <Settings size={20} />,
      children: [
        { label: "Paramètres de l'application", href: "/super-admin/parametres" },
        { label: "Configuration base de données", href: "/super-admin/config-db" },
        { label: "Gestion des emails / SMS", href: "/super-admin/notification-config" },
        { label: "Personnalisation du site vitrine", href: "/super-admin/site-vitrine" },
        { label: "Maintenance & Backup", href: "/super-admin/maintenance" },
      ]
    },
    {
      label: "Rapports & Audit",
      href: "#",
      icon: <FileSearch size={20} />,
      children: [
        { label: "Rapport financier complet", href: "/super-admin/rapport-financier" },
        { label: "Audit système", href: "/super-admin/audit" },
        { label: "Logs d'activité", href: "/super-admin/logs" },
        { label: "Export complet des données", href: "/super-admin/export" },
      ]
    },
    {
      label: "Outils Avancés",
      href: "#",
      icon: <Wrench size={20} />,
      children: [
        { label: "Gestion des API", href: "/super-admin/api-management" },
        { label: "Gestion des fichiers", href: "/super-admin/gestion-fichiers" },
        { label: "Commandes système", href: "/super-admin/commandes" },
      ]
    }
  ];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Administration Suprême"
      breadcrumb="Espace Super Admin / Dashboard"
    >
      <div className="space-y-8 animate-in fade-in duration-700">
        
        {/* EN-TÊTE */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Super Administration</h2>
            <p className="text-slate-500">Gestion de l'infrastructure globale et des politiques de sécurité.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all flex items-center gap-2">
              <Server size={18} />
              Santé Serveurs
            </button>
          </div>
        </div>

        {/* KPI SUPER ADMIN */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Disponibilité" value="99.9%" color="bg-emerald-600" icon={<Activity size={24}/>} />
          <StatCard title="Total Utilisateurs" value="1,248" color="bg-blue-600" icon={<Users size={24}/>} />
          <StatCard title="Sauvegardes" value="Stable" color="bg-purple-600" icon={<Database size={24}/>} />
          <StatCard title="Tentatives Intrusion" value="00" color="bg-slate-800" icon={<Lock size={24}/>} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Logs d'Erreur Système */}
          <div className="xl:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="text-rose-500" size={20} />
              <h3 className="font-bold text-slate-800">Flux de logs critiques</h3>
            </div>
            <div className="space-y-4">
              {[
                { type: "DB", msg: "Latence requête élevée", time: "Il y a 2m", status: "Warning" },
                { type: "Auth", msg: "Reset MDP Admin - Marie", time: "Il y a 15m", status: "Info" },
                { type: "Sys", msg: "Backup hebdomadaire fini", time: "04:00", status: "Success" },
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div>
                    <p className="text-xs font-bold text-slate-700">{log.msg}</p>
                    <p className="text-[10px] text-slate-500">{log.type} • {log.time}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${log.status === 'Warning' ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Ressources Infrastructure */}
          <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="text-indigo-500" size={20} />
              <h3 className="font-bold text-slate-800">Ressources Cloud</h3>
            </div>
            <div className="space-y-6">
              {[
                { label: "Utilisation CPU", usage: 34, color: "bg-emerald-500" },
                { label: "Mémoire RAM", usage: 52, color: "bg-blue-500" },
                { label: "Base de Données", usage: 18, color: "bg-indigo-500" },
              ].map((res, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">{res.label}</span>
                    <span className="text-slate-500">{res.usage}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`${res.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${res.usage}%` }}></div>
                  </div>
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

export default SuperAdminDashboard;