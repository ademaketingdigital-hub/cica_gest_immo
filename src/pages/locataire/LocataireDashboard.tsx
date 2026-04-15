import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  UserCheck, 
  CreditCard, 
  BarChart3, 
  Calendar, 
  FileText, 
  CheckCircle, 
  TrendingUp,
  ChevronRight,
  Clock,
  MapPin,
  AlertTriangle,
  ArrowRight
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LocataireDashboard: React.FC = () => {
  
  // Adaptation du menu Locataire au format sidebarItems
  const sidebarItems = [
    { label: "Tableau de Bord", href: "/locataire/dashboard", icon: <LayoutDashboard size={20}/> },
    {
      label: "Diligence",
      href: "#",
      icon: <UserCheck size={20} />,
      children: [
        { label: "Mes Visites", href: "/locataire/visites" },
        { label: "Valider Choix", href: "/locataire/valider-choix" },
        { label: "Paiement", href: "/locataire/paiement" },
      ]
    },
    {
      label: "Consulter états",
      href: "#",
      icon: <BarChart3 size={20} />,
      children: [
        { label: "Echéancier", href: "/locataire/echeancier" },
        { label: "Mes quittances", href: "/locataire/quittances" },
        { label: "Contrat de location", href: "/locataire/contrat" },
      ]
    }
  ];

  // Données fictives pour l'historique des paiements de loyer
  const paymentHistoryData = [
    { name: 'Jan', montant: 85000 },
    { name: 'Fév', montant: 85000 },
    { name: 'Mar', montant: 85000 },
    { name: 'Avr', montant: 85000 },
    { name: 'Mai', montant: 85000 },
    { name: 'Juin', montant: 85000 },
  ];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Espace Locataire"
      breadcrumb="Accueil / Mon compte"
    >
      <div className="space-y-8 animate-in fade-in duration-700">
        
        {/* EN-TÊTE DE BIENVENUE */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full -mr-16 -mt-16 blur-3xl" />
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Bonjour, M. Sossa 👋</h2>
            <div className="flex items-center gap-2 text-slate-500 mt-2 font-medium">
              <MapPin size={18} className="text-indigo-500" />
              <span>Villa Espoir A1 - Quartier PK8, Libreville</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-2xl text-sm font-black shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-all flex items-center gap-2 group">
              <CreditCard size={18} />
              Payer mon loyer
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border-2 border-slate-100 text-slate-700 px-6 py-3 rounded-2xl text-sm font-black hover:bg-slate-50 transition-all flex items-center gap-2">
              <Calendar size={18} />
              Visite
            </button>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-black shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all flex items-center gap-2">
              <FileText size={18} />
              Contrat
            </button>
          </div>
        </div>

        {/* ALERTES CRITIQUES */}
        <div className="bg-rose-50 border border-rose-100 p-4 rounded-2xl flex items-center gap-4 animate-pulse">
          <div className="h-10 w-10 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0">
            <AlertTriangle size={20} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-black text-rose-900 uppercase tracking-wider">Alerte Maintenance</p>
            <p className="text-xs text-rose-700 font-medium">L'intervention pour la plomberie est prévue demain à 09:00.</p>
          </div>
          <button className="text-xs font-bold text-rose-600 underline">Détails</button>
        </div>

        {/* GRID D'INFORMATIONS PRINCIPALES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Infos Logement */}
          <Card className="lg:col-span-2 rounded-[2rem] border-slate-100 overflow-hidden">
            <CardHeader className="bg-slate-50/50 pb-4">
              <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Détails du logement</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Type</p>
                  <p className="text-lg font-black text-slate-800">Appart. F3</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Loyer</p>
                  <p className="text-lg font-black text-indigo-600">85,000 FCFA</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Entrée</p>
                  <p className="text-lg font-black text-slate-800">15/01/2023</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Fin de bail</p>
                  <p className="text-lg font-black text-slate-800">15/01/2025</p>
                </div>
              </div>
              <div className="mt-10 space-y-3">
                <div className="flex justify-between items-end">
                  <p className="text-sm font-bold text-slate-600 italic">Progression du mois (Juin)</p>
                  <p className="text-xs font-black text-indigo-500">60%</p>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prochain Paiement */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <TrendingUp size={24} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Prochain Paiement</p>
                <p className="text-4xl font-black mt-1">85,000</p>
                <p className="text-sm font-bold text-white/60">Francs CFA</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase text-white/40 leading-none">Date limite</p>
                <p className="text-lg font-black text-emerald-400">05 Juillet</p>
              </div>
              <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase">
                A venir
              </div>
            </div>
          </div>
        </div>

        {/* CARTES DE STATISTIQUES (KPI) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Loyer Mensuel" value="85k" color="bg-indigo-600" icon={<CreditCard size={24}/>} />
          <StatCard title="Statut Compte" value="A jour" color="bg-emerald-600" icon={<CheckCircle size={24}/>} />
          <StatCard title="Prochaine Visite" value="15/05" color="bg-blue-600" icon={<Calendar size={24}/>} />
          <StatCard title="Alertes" value="00" color="bg-slate-800" icon={<Clock size={24}/>} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Bloc Mes dernières visites */}
          <div className="xl:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="text-blue-500" size={20} />
              <h3 className="font-bold text-slate-800">Dernières Visites</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "Villa Espoir - Salon", date: "12 Avril 2024", status: "Terminé" },
                { label: "Studio B4 - Plomberie", date: "05 Avril 2024", status: "Terminé" },
                { label: "Visite de contrôle", date: "Prochainement", status: "En attente" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
                  <div>
                    <p className="text-sm font-bold text-slate-700">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.date} • {item.status}</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Bloc Historique de Paiements */}
          <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
             <div className="flex items-center gap-2 mb-6">
               <TrendingUp className="text-emerald-500" size={20} />
               <h3 className="font-bold text-slate-800">Historique des Loyers (FCFA)</h3>
             </div>
             <ResponsiveContainer width="100%" height={250}>
               <BarChart data={paymentHistoryData}>
                 <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                 <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} />
                 <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
                 <Tooltip 
                    cursor={{fill: '#f8fafc'}} 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} 
                 />
                 <Bar dataKey="montant" fill="#4f46e5" radius={[6, 6, 0, 0]} />
               </BarChart>
             </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const StatCard = ({ title, value, color, icon }: any) => (
  <div className={`${color} text-white p-6 rounded-2xl shadow-lg flex items-center justify-between transition-transform hover:scale-[1.02]`}>
    <div>
      <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.1em]">{title}</p>
      <p className="text-4xl font-black mt-1 leading-none">{value}</p>
    </div>
    <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
      {icon}
    </div>
  </div>
);

export default LocataireDashboard;