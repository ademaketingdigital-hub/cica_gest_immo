import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  LayoutDashboard, 
  FileCheck, 
  PlusCircle, 
  BarChart3, 
  Home, 
  Wallet, 
  DollarSign, 
  AlertTriangle,
  TrendingUp,
  ChevronRight,
  Users,
  Users2
} from "lucide-react";

import {
  ComposedChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LocationDashboard: React.FC = () => {
  
  // Adaptation du menu fourni au format sidebarItems (label/children)
  const sidebarItems = [
    { label: "Tableau de Bord", href: "/location/dashboard", icon: <LayoutDashboard size={20}/> },
    {
      label: "Diligence",
      href: "#",
      icon: <FileCheck size={20} />,
      children: [
        { label: "Validation d'événement", href: "/location/validation-evenement" },
        { label: "Confirmer une dépense", href: "/location/confirmer-depense" },
        { label: "Valider état du mois", href: "/location/valider-etat-mois" },
        { label: "Clôture mensuel", href: "/location/cloture-mensuel" },
      ]
    },
    {
      label: "Ajout",
      href: "#",
      icon: <PlusCircle size={20} />,
      children: [
        { label: "Propriétaire", href: "/location/ajout-proprietaire" },
        { label: "Maison", href: "/location/ajout-maison" },
        { label: "Locataire", href: "/location/ajout-locataire" },
        { label: "Demander une dépense", href: "/location/demander-depense" },
        { label: "Ajout d'événement", href: "/location/ajout-evenement" },
      ]
    },
    {
      label: "Consulter états",
      href: "#",
      icon: <BarChart3 size={20} />,
      children: [
        { label: "Info par maison", href: "/location/info-maison" },
        { label: "Situation caisse", href: "/location/situation-caisse" },
        { label: "Etat des recettes", href: "/location/etat-recettes" },
        { label: "Etat paye propriétaire", href: "/location/etat-paye-proprietaire" },
        { label: "Etat Caution", href: "/location/etat-caution" },
        { label: "Etat Impayé", href: "/location/etat-impaye" },
        { label: "Etat avance", href: "/location/etat-avance" },
        { label: "Etat dépense", href: "/location/etat-depense" },
        { label: "Rapport périodique", href: "/location/rapport-periodique" },
      ]
    }
  ];

  // Données Recettes vs Dépenses
  const chartData = [
    { name: 'Jan', recettes: 4500000, depenses: 1200000 },
    { name: 'Fév', recettes: 4200000, depenses: 950000 },
    { name: 'Mar', recettes: 4800000, depenses: 1100000 },
    { name: 'Avr', recettes: 5100000, depenses: 1300000 },
    { name: 'Mai', recettes: 4900000, depenses: 1050000 },
    { name: 'Juin', recettes: 5500000, depenses: 850000 },
  ];

  // Données loyers en retard
  const lateRents = [
    { maison: "Maison Espoir A1", locataire: "Martin K.", montant: "250,000 FCFA", jours: 15 },
    { maison: "Villa Lumière B2", locataire: "Sophie N.", montant: "180,000 FCFA", jours: 22 },
    { maison: "Appart Centre C3", locataire: "Paul M.", montant: "300,000 FCFA", jours: 8 },
  ];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Gestion Locative"
      breadcrumb="Espace Gestionnaire / Dashboard"
    >
      <div className="space-y-8 animate-in fade-in duration-700">
        
        {/* EN-TÊTE DE BIENVENUE */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Résumé de l'activité</h2>
            <p className="text-slate-500">Suivi des encaissements et de l'état du parc locatif.</p>
          </div>
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all">
            Rapport Mensuel PDF
          </button>
        </div>

        {/* BOUTONS RAPIDES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/location/ajout-maison" className="group">
            <button className="w-full h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 flex items-center gap-4 p-6">
              <PlusCircle size={28} />
              Ajouter une maison
            </button>
          </a>
          <a href="/location/ajout-locataire" className="group">
            <button className="w-full h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center gap-4 p-6">
              <Users size={28} />
              Ajouter un locataire
            </button>
          </a>
        </div>

        {/* CARTES DE STATISTIQUES (KPI) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
          <StatCard title="Maisons Gérées" value="42" color="bg-indigo-600" icon={<Home size={24}/>} />
          <StatCard title="Taux d'Occupation" value="87%" color="bg-sky-500" icon={<Users size={24}/>} />
          <StatCard title="Locataires Actifs" value="38" color="bg-purple-600" icon={<Users2 size={24}/>} />
          <StatCard title="Recettes Mois" value="5.5M" color="bg-emerald-600" icon={<DollarSign size={24}/>} />
          <StatCard title="Dépenses" value="850k" color="bg-orange-500" icon={<Wallet size={24}/>} />
          <StatCard title="Solde Caisse" value="4.65M" color="bg-green-600" icon={<DollarSign size={24}/>} />
          <StatCard title="Impayés" value="03" color="bg-rose-500" icon={<AlertTriangle size={24}/>} />
        </div>

        {/* TABLEAU LOYERS EN RETARD */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-rose-50 to-rose-100">
            <h3 className="font-bold text-xl text-rose-800 flex items-center gap-2">
              <AlertTriangle size={24} /> Loyers en retard (3)
            </h3>
            <p className="text-rose-600 mt-1">Actions requises pour relances</p>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Maison</TableHead>
                  <TableHead>Locataire</TableHead>
                  <TableHead className="text-right">Montant dû</TableHead>
                  <TableHead className="text-right">Jours</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lateRents.map((rent, i) => (
                  <TableRow key={i} className="hover:bg-rose-50/50 border-rose-100">
                    <TableCell className="font-semibold">{rent.maison}</TableCell>
                    <TableCell>{rent.locataire}</TableCell>
                    <TableCell className="text-right font-mono text-rose-700 font-bold">{rent.montant}</TableCell>
                    <TableCell className="text-right font-bold text-orange-600">{rent.jours}j</TableCell>
                    <TableCell>
                      <button className="px-3 py-1 bg-rose-100 text-rose-700 text-xs rounded-lg font-bold hover:bg-rose-200 transition-all">Relancer</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Bloc Diligences (1/3) */}
          <div className="xl:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <FileCheck className="text-indigo-500" size={20} />
              <h3 className="font-bold text-slate-800">Événements du mois en attente de validation</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "Clôture Maison 'Espoir'", date: "Aujourd'hui", type: "Clôture" },
                { label: "Réparation Plomberie Lot 2", date: "Hier", type: "Dépense" },
                { label: "Validation Entrée Locataire", date: "Il y a 2j", type: "Événement" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
                  <div>
                    <p className="text-sm font-bold text-slate-700">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.type} • {item.date}</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Bloc Performance Recettes (2/3) */}
          <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
             <div className="flex items-center gap-2 mb-6">
               <TrendingUp className="text-emerald-500" size={20} />
               <h3 className="font-bold text-slate-800">Recettes vs Dépenses (mensuel, FCFA)</h3>
             </div>
             <ResponsiveContainer width="100%" height={250}>
               <ComposedChart data={chartData}>
                 <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                 <XAxis dataKey="name" stroke="#64748b" fontSize={14} />
                 <YAxis stroke="#64748b" fontSize={12} />
                 <Tooltip 
                   cursor={{fill: '#f8fafc'}} 
                   contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.15)'}}
                   formatter={(value: number) => [`${(value/1000000).toFixed(1)}M FCFA`, 'Montant']}
                 />
                 <Legend />
                 <Bar dataKey="recettes" fill="#10b981" name="Recettes" radius={[6, 6, 0, 0]} />
                 <Line type="monotone" dataKey="depenses" stroke="#f59e0b" strokeWidth={4} name="Dépenses" dot={{fill: '#f59e0b', strokeWidth: 2}} />
               </ComposedChart>
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
    <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">{icon}</div>
  </div>
);

export default LocationDashboard;