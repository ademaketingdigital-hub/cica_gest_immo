import React from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { 
  LayoutDashboard, 
  Settings2, 
  Users2, 
  Wallet, 
  LineChart,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  Zap,
  FileText,
  BarChart3,
  ChevronRight,
  CircleDollarSign
} from "lucide-react";

const GerantDashboard: React.FC = () => {
  
  const sidebarItems = gerantSidebarItems;

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Direction Opérationnelle"
      breadcrumb="Espace Gérant / Dashboard"
    >
      <div className="space-y-8 animate-in fade-in duration-700">
        
        {/* EN-TÊTE */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Vue Stratégique</h2>
            <p className="text-slate-500">Pilotage de la performance globale de CANAL CICA.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/gerant/utilisateurs" className="bg-slate-100 text-slate-800 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all flex items-center gap-2">
              <Users2 size={18} />
              Gestion Utilisateurs
            </Link>
            <Link to="/gerant/supervision-vente" className="bg-slate-100 text-slate-800 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all flex items-center gap-2">
              <ArrowUpRight size={18} />
              Supervision Vente
            </Link>
            <Link to="/gerant/supervision-location" className="bg-slate-100 text-slate-800 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all flex items-center gap-2">
              <ArrowDownRight size={18} />
              Supervision Location
            </Link>
          </div>
        </div>

        {/* KPI GÉRANT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Chiffre d'Affaires" 
            value="42.5M" 
            trend="+12%" 
            trendUp={true}
            color="bg-indigo-600" 
            icon={<CircleDollarSign size={24}/>} 
          />
          <StatCard 
            title="Objectifs Atteints" 
            value="84%" 
            trend="+5%" 
            trendUp={true}
            color="bg-emerald-600" 
            icon={<Target size={24}/>} 
          />
          <StatCard 
            title="Charges Fixes" 
            value="12.2M" 
            trend="-2%" 
            trendUp={false}
            color="bg-slate-800" 
            icon={<Wallet size={24}/>} 
          />
          <StatCard 
            title="Alertes Risques" 
            value="02" 
            trend="Stable" 
            trendUp={true}
            color="bg-rose-600" 
            icon={<ShieldCheck size={24}/>} 
          />
        </div>

        {/* SECTION PERFORMANCE & APPROBATIONS */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <LineChart className="text-indigo-600" size={20} />
                <h3 className="font-bold text-slate-800">Performance par Département</h3>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { name: "Pôle Vente de Parcelles", progress: 92, status: "Excellent" },
                { name: "Pôle Gestion Locative", progress: 78, status: "En progression" },
                { name: "Département Trésorerie", progress: 85, status: "Stable" },
              ].map((dept, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <p className="text-sm font-bold text-slate-700">{dept.name}</p>
                    <p className="text-xs font-bold text-indigo-600">{dept.status} ({dept.progress}%)</p>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${dept.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="xl:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="text-rose-500" size={20} />
              <h3 className="font-bold text-slate-800">Approbations urgentes</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "Budget Marketing Q3", amount: "5.5M", requester: "Com" },
                { label: "Réfection Maison A4", amount: "1.2M", requester: "Loc" },
                { label: "Prime Performance Vente", amount: "800K", requester: "RH" },
              ].map((req, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                  <div>
                    <p className="text-sm font-bold text-slate-700">{req.label}</p>
                    <p className="text-xs text-slate-500">{req.requester} • {req.amount}</p>
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

const StatCard = ({ title, value, trend, trendUp, color, icon }: { title: string, value: string, trend: string, trendUp: boolean, color: string, icon: React.ReactNode }) => (
  <div className={`${color} text-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]`}>
    <div className="flex items-center justify-between">
      <div className="bg-white/10 p-3 rounded-xl backdrop-blur-md">{icon}</div>
      <div className="flex items-center gap-1 text-[10px] font-bold bg-white/10 px-2 py-1 rounded-lg">
        {trendUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        {trend}
      </div>
    </div>
    <div className="mt-4">
      <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.1em]">{title}</p>
      <p className="text-3xl font-black mt-1 leading-none">{value}</p>
    </div>
  </div>
);

export default GerantDashboard;