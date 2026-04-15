import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  LayoutDashboard, 
  FileCheck, 
  PlusCircle, 
  BarChart3, 
  Map, 
  Clock, 
  CheckCircle, 
  Gavel,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  CircleDollarSign,
  PieChart,
  ShieldCheck,
  ArrowUpRight,
  MoreHorizontal
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const GestionnaireVenteDashboard: React.FC = () => {

  // On définit les items de la sidebar ici pour les passer au layout
  const sidebarItems = [
    { label: "Tableau de Bord", href: "/vente/dashboard", icon: <LayoutDashboard size={20}/> },
    {
      label: "Diligence",
      href: "#",
      icon: <FileCheck size={20} />,
      children: [
        { label: "Validation Proprio", href: "/vente/validation-proprio" },
        { label: "Publier domaine", href: "/vente/publier" },
        { label: "Pré-validation échéancier", href: "/vente/pre-validation" },
        { label: "Contrat de Prévente", href: "/vente/contrat" },
        { label: "Valider vente", href: "/vente/valider" },
      ]
    },
    {
      label: "Ajout",
      href: "#",
      icon: <PlusCircle size={20} />,
      children: [
        { label: "Ajout propriétaire", href: "/vente/ajouter-proprio" },
        { label: "Ajout domaine", href: "/vente/ajouter-domaine" },
      ]
    },
    {
      label: "Consulter états",
      href: "#",
      icon: <BarChart3 size={20} />,
      children: [
        { label: "Etat des ventes", href: "/vente/etat-ventes" },
        { label: "Etats de Factures", href: "/vente/etat-factures" },
        { label: "Etat des arrièrés", href: "/vente/etat-arrieres" },
        { label: "Etat des paiements", href: "/vente/etat-paiements" },
        { label: "Échéancier", href: "/vente/echeancier" },
        { label: "Domaine disponible", href: "/vente/domaines-dispo" },
        { label: "Domaine réservé", href: "/vente/domaines-reserves" },
        { label: "Domaine vendu", href: "/vente/vendus" },
        { label: "Etat propriétaire", href: "/vente/etat-proprio" },
        { label: "Marge", href: "/vente/marges" },
      ]
    }
  ];

  // Données fictives pour le graphique des ventes
  const salesData = [
    { name: 'Sem 1', ventes: 12 },
    { name: 'Sem 2', ventes: 18 },
    { name: 'Sem 3', ventes: 15 },
    { name: 'Sem 4', ventes: 25 },
    { name: 'Sem 5', ventes: 32 },
    { name: 'Sem 6', ventes: 28 },
  ];

  const recentActions = [
    { id: 1, action: "Publication", parcel: "Lot 45 - Calavi", user: "Système", date: "Il y a 10 min", status: "Succès" },
    { id: 2, action: "Réservation", parcel: "Domaine Agon", user: "M. Saliou", date: "Il y a 1h", status: "En attente" },
    { id: 3, action: "Vente", parcel: "Parcelle B12", user: "Mme Totin", date: "Il y a 3h", status: "Clôturé" },
  ];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Gestion Vente de Parcelles"
      breadcrumb="Espace Gestionnaire / Dashboard"
    >
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* EN-TÊTE ET ACTIONS RAPIDES */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Bonjour, Rodolphe 👋</h2>
            <p className="text-slate-500 font-medium">Prêt à propulser les ventes de CANAL CICA aujourd'hui ?</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-2xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
              <PlusCircle size={18} /> Ajouter Domaine
            </button>
            <button className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-2xl text-sm font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all">
              <TrendingUp size={18} /> Publier
            </button>
            <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-2xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all">
              <Clock size={18} /> Validations
            </button>
          </div>
        </div>

        {/* KPI CARDS ENHANCED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <StatCard title="Total Domaines" value="184" sub="+4 ce mois" color="slate" icon={<Map size={20}/>} />
          <StatCard title="Disponibles" value="24" sub="Libre" color="blue" icon={<CheckCircle size={20}/>} />
          <StatCard title="Réservées" value="08" sub="En attente" color="amber" icon={<Clock size={20}/>} />
          <StatCard title="Vendues" value="152" sub="Clôturées" color="emerald" icon={<ShieldCheck size={20}/>} />
          <StatCard title="Revenu Mensuel" value="12.5M" sub="XOF" color="indigo" icon={<CircleDollarSign size={20}/>} />
          <StatCard title="Marge Réalisée" value="2.1M" sub="+12%" color="purple" icon={<TrendingUp size={20}/>} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* GRAPHIQUE D'ÉVOLUTION - AREA CHART POUR EFFET WAOUH */}
          <div className="xl:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-black text-slate-800 text-xl tracking-tight">Évolution des Ventes</h3>
                <p className="text-sm text-slate-400 font-medium">Performance des 30 derniers jours</p>
              </div>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold">
                <ArrowUpRight size={14} /> +12.4%
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="ventes" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* VALIDATIONS EN ATTENTE */}
          <div className="xl:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                  <Gavel size={20} />
                </div>
                <h3 className="font-black text-slate-800 tracking-tight">Validations</h3>
              </div>
              <span className="bg-rose-100 text-rose-600 text-[10px] font-black px-2 py-1 rounded-full">5 URGENT</span>
            </div>
            <div className="space-y-4">
              {[
                { parcel: "Lot 4 - Pahou", owner: "M. Kpodékon", time: "2h" },
                { parcel: "Zone Agricole A", owner: "Mme Dossou", time: "5h" },
                { parcel: "Villa Cotonou", owner: "SARL Horizon", time: "12h" },
              ].map((val, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all cursor-pointer group">
                  <div>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{val.parcel}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{val.owner}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400">{val.time}</span>
                    <ChevronRight size={14} className="text-slate-300" />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 text-xs font-black text-slate-400 hover:text-slate-600 transition-colors border-t border-slate-50">
              VOIR TOUTES LES DEMANDES
            </button>
          </div>

          {/* TABLEAU DES 10 DERNIÈRES ACTIONS */}
          <div className="xl:col-span-3 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center">
              <h3 className="font-black text-slate-800 text-xl tracking-tight">Activités Récentes</h3>
              <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={20}/></button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-slate-50/50">
                    <th className="px-8 py-4">Action</th>
                    <th className="px-8 py-4">Parcelle / Domaine</th>
                    <th className="px-8 py-4">Intervenant</th>
                    <th className="px-8 py-4">Date</th>
                    <th className="px-8 py-4 text-right">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recentActions.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-5">
                        <span className="text-sm font-bold text-slate-700">{item.action}</span>
                      </td>
                      <td className="px-8 py-5 text-sm text-slate-500 font-medium">{item.parcel}</td>
                      <td className="px-8 py-5 text-sm text-slate-500">{item.user}</td>
                      <td className="px-8 py-5 text-xs text-slate-400 font-bold">{item.date}</td>
                      <td className="px-8 py-5 text-right">
                        <span className={`text-[10px] font-black px-3 py-1 rounded-full ${
                          item.status === "Succès" || item.status === "Clôturé" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                        }`}>
                          {item.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Composant Interne pour les KPI
const StatCard = ({ title, value, sub, color, icon }: any) => {
  const colorClasses: any = {
    slate: "bg-slate-900",
    blue: "bg-blue-600",
    amber: "bg-amber-500",
    emerald: "bg-emerald-600",
    indigo: "bg-indigo-600",
    purple: "bg-purple-600"
  };

  return (
    <div className={`${colorClasses[color]} text-white p-5 rounded-3xl shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between h-32`}>
      <div className="flex justify-between items-start">
        <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">{icon}</div>
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">{sub}</span>
      </div>
      <div>
        <p className="text-white/60 text-[9px] font-black uppercase tracking-widest">{title}</p>
        <p className="text-2xl font-black leading-tight">{value}</p>
      </div>
    </div>
  );
};

export default GestionnaireVenteDashboard;