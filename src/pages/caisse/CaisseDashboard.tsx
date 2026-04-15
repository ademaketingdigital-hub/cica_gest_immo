import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  LayoutDashboard, ArrowDownCircle, ArrowUpCircle, BarChart3,
  Wallet, Receipt, ClipboardCheck, TrendingUp, AlertCircle, Banknote, Zap
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  LineChart, Line, PieChart, Pie, Cell
} from "recharts";

const sidebarItems = [
  { label: "Tableau de Bord", href: "/caisse/dashboard", icon: <LayoutDashboard size={20}/> },
  { label: "Encaissement", href: "#", icon: <ArrowDownCircle size={20}/>, children: [
    { label: "Caisse direct", href: "/caisse/encaissement-direct" },
    { label: "Validation paiement", href: "/caisse/validation-paiement" },
    { label: "Editer facture", href: "/caisse/editer-facture" },
  ]},
  { label: "Dépense", href: "#", icon: <ArrowUpCircle size={20}/>, children: [
    { label: "Dépense chez propriétaire", href: "/caisse/depense-proprietaire" },
    { label: "Paiement propriétaire", href: "/caisse/paiement-proprietaire" },
  ]},
  { label: "Etat", href: "#", icon: <BarChart3 size={20}/>, children: [
    { label: "Situation de caisse", href: "/caisse/situation-caisse" },
    { label: "Etat de paiement", href: "/caisse/etat-paiement" },
  ]},
];

const evolutionCaisse = [
  { jour: "01", solde: 7800000 }, { jour: "05", solde: 8200000 }, { jour: "10", solde: 7600000 },
  { jour: "15", solde: 8500000 }, { jour: "20", solde: 9100000 }, { jour: "25", solde: 8800000 }, { jour: "30", solde: 9200000 },
];

const repartition = [
  { name: "Loyers", value: 4500000 }, { name: "Ventes parcelles", value: 3200000 },
  { name: "Dépenses", value: 1800000 }, { name: "Commissions", value: 700000 },
];
const COLORS = ["#10b981", "#3b82f6", "#f43f5e", "#f59e0b"];

const transactions = [
  { label: "Loyer Villa Cocotier", type: "Encaissement", montant: "+150,000", date: "Il y a 20min", positif: true },
  { label: "Paiement Proprio. Kérékou", type: "Décaissement", montant: "-405,000", date: "Il y a 1h", positif: false },
  { label: "Vente Parcelle C12 — Calavi", type: "Encaissement", montant: "+2,500,000", date: "Ce matin", positif: true },
  { label: "Réparation plomberie Appt 3B", type: "Dépense", montant: "-45,000", date: "Hier", positif: false },
  { label: "Loyer Duplex Fidjrossè", type: "Encaissement", montant: "+300,000", date: "Hier", positif: true },
];

const alertes = [
  { text: "3 paiements en attente de validation", type: "warning" },
  { text: "Loyer impayé — M. Houessou (Appt. 3B)", type: "danger" },
  { text: "Versement propriétaire M. Kérékou en attente", type: "info" },
];

const CaisseDashboard: React.FC = () => (
  <DashboardLayout sidebarItems={sidebarItems} title="Gestion de la Caisse" breadcrumb="Espace Trésorier / Dashboard">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Trésorerie en temps réel</h2>
          <p className="text-slate-500">Vue globale de la situation financière.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-700 flex items-center gap-2"><Zap size={14}/> Encaisser</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-600 flex items-center gap-2"><ArrowUpCircle size={14}/> Dépense</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 flex items-center gap-2"><ClipboardCheck size={14}/> Valider</button>
        </div>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <KPI title="Solde Caisse" value="9.2M" color="bg-blue-700" icon={<Wallet size={20}/>}/>
        <KPI title="Encaissements jour" value="+2.95M" color="bg-emerald-600" icon={<ArrowDownCircle size={20}/>}/>
        <KPI title="Encaissements mois" value="12.4M" color="bg-emerald-500" icon={<TrendingUp size={20}/>}/>
        <KPI title="Dépenses jour" value="-450k" color="bg-red-500" icon={<ArrowUpCircle size={20}/>}/>
        <KPI title="À verser proprio" value="1.8M" color="bg-amber-500" icon={<Banknote size={20}/>}/>
        <KPI title="En attente" value="5" color="bg-purple-600" icon={<ClipboardCheck size={20}/>}/>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Évolution caisse */}
        <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-4">Évolution de la caisse (30 jours)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={evolutionCaisse}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false}/>
              <XAxis dataKey="jour" stroke="#64748b" axisLine={false} tickLine={false}/>
              <YAxis stroke="#64748b" axisLine={false} tickLine={false}/>
              <Tooltip contentStyle={{borderRadius:'12px',border:'none',boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}/>
              <Line type="monotone" dataKey="solde" stroke="#3b82f6" strokeWidth={3} dot={{fill:'#3b82f6',r:4}}/>
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Répartition */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-4">Répartition flux</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={repartition} dataKey="value" cx="50%" cy="50%" outerRadius={80} label={({name}) => name}>
                {repartition.map((_, i) => <Cell key={i} fill={COLORS[i]}/>)}
              </Pie>
              <Tooltip contentStyle={{borderRadius:'12px',border:'none'}}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Transactions */}
        <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Receipt size={18} className="text-blue-500"/> Dernières transactions</h3>
          <div className="space-y-3">
            {transactions.map((t, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div>
                  <p className="text-sm font-bold text-slate-700">{t.label}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">{t.type} • {t.date}</p>
                </div>
                <p className={`text-sm font-black ${t.positif ? 'text-emerald-600' : 'text-red-500'}`}>{t.montant} F</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alertes */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><AlertCircle size={18} className="text-amber-500"/> Alertes</h3>
          <div className="space-y-3">
            {alertes.map((a, i) => (
              <div key={i} className={`p-3 rounded-xl text-sm font-medium ${
                a.type === "danger" ? "bg-red-50 text-red-700" :
                a.type === "warning" ? "bg-amber-50 text-amber-700" :
                "bg-blue-50 text-blue-700"
              }`}>{a.text}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

const KPI = ({ title, value, color, icon }: any) => (
  <div className={`${color} text-white p-4 rounded-2xl shadow-lg flex items-center justify-between`}>
    <div>
      <p className="text-white/80 text-[9px] font-bold uppercase tracking-widest">{title}</p>
      <p className="text-2xl font-black mt-1">{value}</p>
    </div>
    <div className="bg-white/10 p-3 rounded-xl">{icon}</div>
  </div>
);

export default CaisseDashboard;
