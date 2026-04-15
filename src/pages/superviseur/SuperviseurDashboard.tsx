import React from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "./sidebarItems";
import { 
  LayoutDashboard, 
  TrendingUp, 
  Map, 
  Users, 
  BarChart3, 
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronRight,
  ShieldCheck,
  FileText,
  Activity
} from "lucide-react";

const SuperviseurDashboard: React.FC = () => {
  
  const sidebarItems = superviseurSidebarItems;

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Supervision Générale"
      breadcrumb="Espace Superviseur / Dashboard"
    >
      <div className="space-y-8 animate-in fade-in duration-700">
        
        {/* EN-TÊTE */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Console de Supervision</h2>
            <p className="text-slate-500">Contrôle et validation des activités opérationnelles.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/superviseur/vente/overview" className="bg-slate-100 text-slate-800 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all flex items-center gap-2">
              <TrendingUp size={18} />
              Supervision Vente
            </Link>
            <Link to="/superviseur/location/overview" className="bg-slate-100 text-slate-800 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all flex items-center gap-2">
              <Map size={18} />
              Supervision Location
            </Link>
            <Link to="/superviseur/rapports/global" className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2">
              <FileText size={18} />
              Rapports globaux
            </Link>
          </div>
        </div>

        {/* KPI SUPERVISEUR */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Alertes Critiques" value="03" color="bg-rose-600" icon={<AlertCircle size={24}/>} />
          <StatCard title="Validations en attente" value="12" color="bg-blue-600" icon={<Clock size={24}/>} />
          <StatCard title="Performance Équipe" value="94%" color="bg-emerald-600" icon={<Activity size={24}/>} />
          <StatCard title="Objectif Mensuel" value="78%" color="bg-slate-800" icon={<TrendingUp size={24}/>} />
        </div>

        {/* SECTION ACTIONS PRIORITAIRES */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="text-blue-600" size={20} />
              <h3 className="font-bold text-slate-800">Validations prioritaires</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "Clôture Mensuelle - Location", type: "Financier", priority: "Haute" },
                { label: "Validation Nouveau Domaine - Abomey", type: "Vente", priority: "Moyenne" },
                { label: "Validation Événement - Maison B12", type: "Location", priority: "Basse" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">{item.label}</p>
                      <p className="text-xs text-slate-500">{item.type} • Priorité : {item.priority}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
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

export default SuperviseurDashboard;