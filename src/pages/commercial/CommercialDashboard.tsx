import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  LayoutDashboard, 
  Megaphone, 
  Newspaper, 
  Users, 
  BarChart3, 
  PlusCircle, 
  Image as ImageIcon, 
  Target, 
  ChevronRight, 
  Eye, 
  MousePointerClick, 
  UserPlus
} from "lucide-react";

const CommercialDashboard: React.FC = () => {
  
  // Définition des items de la sidebar pour le rôle Commercial
  const sidebarItems = [
    { 
      label: "Tableau de bord", 
      href: "/commercial/dashboard", 
      icon: <LayoutDashboard size={20}/> 
    },
    {
      label: "Publicités & Communication",
      href: "#",
      icon: <Megaphone size={20} />,
      children: [
        { label: "Gestion des publicités", href: "/commercial/publicites" },
        { label: "Créer une publicité", href: "/commercial/creer-publicite" },
        { label: "Images et visuels", href: "/commercial/images" },
        { label: "Gestion des bannières", href: "/commercial/bannieres" },
      ]
    },
    {
      label: "Actualités & Contenus",
      href: "#",
      icon: <Newspaper size={20} />,
      children: [
        { label: "Gestion des actualités", href: "/commercial/actualites" },
        { label: "Créer une actualité", href: "/commercial/creer-actualite" },
        { label: "Historique des publications", href: "/commercial/historique-publications" },
      ]
    },
    {
      label: "Prospection",
      href: "#",
      icon: <Users size={20} />,
      children: [
        { label: "Prospects", href: "/commercial/prospects" },
        { label: "Ajouter un prospect", href: "/commercial/ajout-prospect" },
        { label: "Campagnes de prospection", href: "/commercial/campagnes" },
      ]
    },
    {
      label: "Rapports",
      href: "#",
      icon: <BarChart3 size={20} />,
      children: [
        { label: "Performance des pubs", href: "/commercial/performance-publicites" },
        { label: "Statistiques de visibilité", href: "/commercial/statistiques-visibilite" },
        { label: "Rapport d'activité", href: "/commercial/rapport-activite" },
      ]
    }
  ];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Espace Commercial & Com"
      breadcrumb="Espace Commercial / Dashboard"
    >
      <div className="space-y-8 animate-in fade-in duration-700">
        
        {/* EN-TÊTE */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Performance Marketing</h2>
            <p className="text-slate-500">Gérez la visibilité de CANAL CICA et suivez vos prospects.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-orange-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all flex items-center gap-2">
              <PlusCircle size={18} />
              Nouvelle Pub
            </button>
          </div>
        </div>

        {/* KPI COMMERCIAUX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Vues Totales" value="12.4K" color="bg-blue-600" icon={<Eye size={24}/>} />
          <StatCard title="Clics Pubs" value="856" color="bg-indigo-600" icon={<MousePointerClick size={24}/>} />
          <StatCard title="Nouveaux Prospects" value="42" color="bg-emerald-600" icon={<UserPlus size={24}/>} />
          <StatCard title="Taux Conv." value="3.2%" color="bg-orange-600" icon={<Target size={24}/>} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Derniers Prospects */}
          <div className="xl:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <Users className="text-emerald-500" size={20} />
              <h3 className="font-bold text-slate-800">Derniers Prospects</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "Marc Kpanou", interest: "Parcelle - Calavi", status: "Nouveau" },
                { name: "Saliou Diallo", interest: "Location - Studio", status: "Contacté" },
                { name: "Alice Totin", interest: "Terrain Agricole", status: "RDV Fixé" },
              ].map((prospect, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                  <div>
                    <p className="text-sm font-bold text-slate-700">{prospect.name}</p>
                    <p className="text-xs text-slate-500">{prospect.interest}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${
                    prospect.status === 'Nouveau' ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {prospect.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
              Voir tous les prospects
            </button>
          </div>

          {/* Campagnes en cours */}
          <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <Megaphone className="text-orange-500" size={20} />
              <h3 className="font-bold text-slate-800">Campagnes Actives</h3>
            </div>
            <div className="space-y-6">
              {[
                { title: "Promotion Pâques - Parcelles Ouidah", reach: 85, color: "bg-blue-500" },
                { title: "Bannière Accueil - Résidences Meublées", reach: 62, color: "bg-orange-500" },
                { title: "Facebook Ads - Terrains Agricoles", reach: 45, color: "bg-indigo-500" },
              ].map((campagne, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-slate-700">{campagne.title}</span>
                    <span className="text-slate-500">{campagne.reach}% de l'objectif</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`${campagne.color} h-full rounded-full`} style={{ width: `${campagne.reach}%` }}></div>
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

export default CommercialDashboard;