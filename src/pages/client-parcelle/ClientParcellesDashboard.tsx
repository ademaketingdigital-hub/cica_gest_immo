import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  LayoutDashboard, 
  MapPin, 
  CheckSquare, 
  CreditCard, 
  BarChart3, 
  FileText, 
  History, 
  TrendingUp,
  Map,
  ChevronRight,
  Calendar,
  ShieldCheck,
  ArrowUpRight,
  Plus,
  Search,
  Zap,
  CheckCircle2
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

const ClientParcellesDashboard: React.FC = () => {
  
  // Configuration du menu Espace Client Parcelles
  const sidebarItems = [
    { label: "Tableau de Bord", href: "/client-parcelle/dashboard", icon: <LayoutDashboard size={20}/> },
    {
      label: "Diligence",
      href: "#",
      icon: <CheckSquare size={20} />,
      children: [
        { label: "Visiter", href: "/client-parcelle/visiter" },
        { label: "Valider Choix", href: "/client-parcelle/valider-choix" },
        { label: "Paiement", href: "/client-parcelle/paiement" },
      ]
    },
    {
      label: "Consulter états",
      href: "#",
      icon: <BarChart3 size={20} />,
      children: [
        { label: "Echéancier", href: "/client-parcelle/echeancier" },
        { label: "Paiement", href: "/client-parcelle/historique-paiement" },
        { label: "Contrat de pré-vente", href: "/client-parcelle/contrat" },
        { label: "Facture de vente", href: "/client-parcelle/factures" },
        { label: "Historique des domaines", href: "/client-parcelle/historique-domaines" },
      ]
    }
  ];

  // Données fictives pour l'investissement total cumulé
  const investmentData = [
    { name: 'Jan', invest: 2500000 },
    { name: 'Fév', invest: 3800000 },
    { name: 'Mar', invest: 3800000 },
    { name: 'Avr', invest: 5200000 },
    { name: 'Mai', invest: 7500000 },
    { name: 'Juin', invest: 7500000 },
  ];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Patrimoine Foncier"
      breadcrumb="Client / Tableau de Bord"
    >
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* CARTE DE BIENVENUE ET ACTIONS RAPIDES */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Bonjour, M. Sossa 👋</h2>
            <p className="text-slate-500 font-medium mt-1">Heureux de vous revoir. Voici l'état d'avancement de vos projets immobiliers.</p>
          </div>
          <div className="flex flex-wrap gap-3 relative z-10">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-2xl text-sm font-black shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
              <Search size={18} /> Visiter une parcelle
            </button>
            <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-2xl text-sm font-black shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95">
              <CreditCard size={18} /> Effectuer un paiement
            </button>
          </div>
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-blue-50/50 blur-3xl"></div>
        </div>

        {/* KPI CLIENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Parcelles" value="03" sub="En possession" color="blue" icon={<Map size={22}/>} />
          <StatCard title="Total Investi" value="7.5M" sub="XOF" color="emerald" icon={<TrendingUp size={22}/>} />
          <StatCard title="Prochain Paiement" value="1.5M" sub="10 Juin 2026" color="amber" icon={<Calendar size={22}/>} />
          <StatCard title="Documents" value="Signés" sub="Tous à jour" color="indigo" icon={<ShieldCheck size={22}/>} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* ACQUISITIONS EN COURS AVEC PROGRESSION */}
          <div className="xl:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl"><Zap size={20}/></div>
                <h3 className="font-black text-slate-800 text-xl tracking-tight">Acquisition en cours</h3>
              </div>
              <button className="text-xs font-black text-blue-600 uppercase tracking-widest hover:underline">Voir l'échéancier</button>
            </div>
            
            <div className="p-6 rounded-[2rem] bg-slate-50/50 border border-slate-100">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                <div>
                  <h4 className="text-lg font-black text-slate-800">Extension Calavi Lot 4</h4>
                  <p className="text-sm text-slate-500 font-medium">Référence : #CP-2026-042</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Montant Restant</p>
                  <p className="text-xl font-black text-blue-600">4.200.000 XOF</p>
                </div>
              </div>

              {/* STEPS PROGRESSION */}
              <div className="relative">
                <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-200"></div>
                <div className="absolute top-5 left-0 w-2/3 h-0.5 bg-blue-600"></div>
                <div className="relative flex justify-between">
                  {[
                    { label: "Visite", done: true },
                    { label: "Choix", done: true },
                    { label: "Paiement", done: true, current: true },
                    { label: "Contrat", done: false },
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 bg-transparent">
                      <div className={`z-10 h-10 w-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-all duration-500 ${
                        step.done ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-400'
                      } ${step.current ? 'ring-4 ring-blue-100 scale-110' : ''}`}>
                        {step.done ? <CheckCircle2 size={18} /> : <span className="text-[10px] font-black">{i + 1}</span>}
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider ${step.done ? 'text-blue-600' : 'text-slate-400'}`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DERNIÈRES ACTIONS */}
          <div className="xl:col-span-1 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl"><History size={20}/></div>
              <h3 className="font-black text-slate-800 text-xl tracking-tight">Activités</h3>
            </div>
            <div className="space-y-6">
              {[
                { title: "Paiement validé", date: "Hier", desc: "Versement de 500.000 XOF", type: "success" },
                { title: "Document reçu", date: "Il y a 3j", desc: "Attestation de réservation", type: "info" },
                { title: "Visite effectuée", date: "Il y a 1 sem", desc: "Domaine Ouidah", type: "info" },
              ].map((action, i) => (
                <div key={i} className="flex gap-4 relative">
                  {i !== 2 && <div className="absolute top-10 left-5 w-px h-10 bg-slate-100"></div>}
                  <div className={`h-10 w-10 rounded-xl shrink-0 flex items-center justify-center ${
                    action.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {action.type === 'success' ? <CheckCircle2 size={18} /> : <FileText size={18} />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{action.title}</p>
                    <p className="text-xs text-slate-500 font-medium">{action.desc}</p>
                    <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tighter">{action.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GRAPHIQUE D'ÉVOLUTION DU PATRIMOINE */}
          <div className="xl:col-span-3 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="font-black text-slate-800 text-xl tracking-tight">Valorisation du Patrimoine</h3>
                <p className="text-sm text-slate-400 font-medium">Evolution cumulée de vos investissements fonciers</p>
              </div>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full text-xs font-bold">
                <ArrowUpRight size={14} /> +45% total
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={investmentData}>
                <defs>
                  <linearGradient id="colorInvest" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="invest" stroke="#2563eb" strokeWidth={4} fillOpacity={1} fill="url(#colorInvest)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const StatCard = ({ title, value, sub, color, icon }: any) => {
  const colorClasses: any = {
    blue: "bg-blue-600",
    emerald: "bg-emerald-600",
    amber: "bg-amber-500",
    indigo: "bg-indigo-600"
  };

  return (
    <div className={`${colorClasses[color]} text-white p-6 rounded-[2rem] shadow-xl flex flex-col justify-between h-44 group transition-all hover:-translate-y-1`}>
      <div className="flex justify-between items-start">
        <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <ChevronRight size={16} className="text-white/40" />
      </div>
      <div>
        <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.15em] mb-1">{title}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-black tracking-tighter">{value}</p>
          <span className="text-[10px] font-bold text-white/40 uppercase">{sub}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientParcellesDashboard;