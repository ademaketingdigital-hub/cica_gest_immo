import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  LayoutDashboard, FileCheck, BarChart3, Home, Banknote,
  AlertCircle, TrendingUp, UserCheck, Wrench, Eye,
  Phone, MapPin, Bell, ChevronRight
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const sidebarItems = [
  { label: "Tableau de Bord", href: "/proprietaire/dashboard", icon: <LayoutDashboard size={20}/> },
  {
    label: "Diligence", href: "#", icon: <FileCheck size={20} />,
    children: [
      { label: "Valider une dépense", href: "/proprietaire/valider-depense" },
      { label: "Acquitter un paiement", href: "/proprietaire/acquitter-paiement" },
    ]
  },
  {
    label: "Consulter états", href: "#", icon: <BarChart3 size={20} />,
    children: [
      { label: "Info par maison", href: "/proprietaire/info-maison" },
      { label: "Etat Caution", href: "/proprietaire/etat-caution" },
      { label: "Etat Impayé", href: "/proprietaire/etat-impaye" },
      { label: "Etat avance", href: "/proprietaire/etat-avance" },
      { label: "Etat dépense", href: "/proprietaire/etat-depense" },
      {
        label: "Rapport périodique", href: "#",
        children: [
          { label: "Mois en cours", href: "/proprietaire/rapport/mois-n" },
          { label: "Mois -1", href: "/proprietaire/rapport/mois-1" },
          { label: "Mois -2", href: "/proprietaire/rapport/mois-2" },
          { label: "Mois -3", href: "/proprietaire/rapport/mois-3" },
        ]
      },
    ]
  }
];

const maisons = [
  { id: 1, adresse: "Villa Cocotier, Cotonou", locataire: "Mme Adjovi Carine", tel: "+229 97 12 34 56", loyer: 150000, statut: "À jour", photo: "🏠" },
  { id: 2, adresse: "Appt. 3B, Akpakpa", locataire: "M. Houessou Pierre", tel: "+229 96 78 90 12", loyer: 85000, statut: "En retard", photo: "🏢" },
  { id: 3, adresse: "Studio Zogbo, Cotonou", locataire: null, tel: null, loyer: 45000, statut: "Vacant", photo: "🏘️" },
  { id: 4, adresse: "Maison R+1, Calavi", locataire: "M. Gbenou Serge", tel: "+229 95 45 67 89", loyer: 200000, statut: "À jour", photo: "🏡" },
  { id: 5, adresse: "Duplex, Fidjrossè", locataire: "Mme Agossa Ruth", tel: "+229 67 23 45 67", loyer: 300000, statut: "Payé", photo: "🏠" },
  { id: 6, adresse: "Chambre Meublée, Ganhi", locataire: "M. Dossou Koffi", tel: "+229 91 34 56 78", loyer: 35000, statut: "En retard", photo: "🏨" },
];

const incomeData = [
  { name: 'Nov', revenus: 680000 },
  { name: 'Déc', revenus: 720000 },
  { name: 'Jan', revenus: 650000 },
  { name: 'Fév', revenus: 750000 },
  { name: 'Mar', revenus: 815000 },
  { name: 'Avr', revenus: 780000 },
];

const alertes = [
  { text: "Loyer en retard — Appt. 3B, Akpakpa (M. Houessou)", type: "danger" },
  { text: "Loyer en retard — Chambre Meublée, Ganhi (M. Dossou)", type: "danger" },
  { text: "2 dépenses en attente de validation", type: "warning" },
  { text: "Paiement net de Mars prêt à acquitter", type: "info" },
];

const ProprietaireDashboard: React.FC = () => (
  <DashboardLayout sidebarItems={sidebarItems} title="Espace Propriétaire" breadcrumb="Accueil / Tableau de bord">
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Bienvenue, M. Kérékou</h2>
          <p className="text-slate-500">Vous gérez <span className="font-bold text-slate-700">6 maisons</span> au total.</p>
        </div>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:bg-slate-800 transition-all">
          Télécharger le bilan annuel
        </button>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <KPI title="Maisons" value="6" color="bg-blue-600" icon={<Home size={22}/>} />
        <KPI title="Taux d'occupation" value="83%" color="bg-indigo-600" icon={<UserCheck size={22}/>} />
        <KPI title="Revenu ce mois" value="815k" color="bg-emerald-600" icon={<TrendingUp size={22}/>} />
        <KPI title="À recevoir" value="680k" color="bg-amber-500" icon={<Banknote size={22}/>} />
        <KPI title="Caution détenue" value="1.2M" color="bg-purple-600" icon={<Banknote size={22}/>} />
      </div>

      {/* Maisons */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-4">Mes Maisons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {maisons.map(m => (
            <div key={m.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{m.photo}</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  m.statut === "À jour" ? "bg-emerald-100 text-emerald-700" :
                  m.statut === "Payé" ? "bg-blue-100 text-blue-700" :
                  m.statut === "En retard" ? "bg-red-100 text-red-700" :
                  "bg-slate-100 text-slate-500"
                }`}>{m.statut}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-600 mb-1">
                <MapPin size={14}/> {m.adresse}
              </div>
              {m.locataire ? (
                <div className="mt-2">
                  <p className="text-sm font-semibold text-slate-800">{m.locataire}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1"><Phone size={12}/> {m.tel}</p>
                </div>
              ) : (
                <p className="text-sm text-slate-400 mt-2 italic">Aucun locataire — Vacant</p>
              )}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                <p className="text-lg font-black text-slate-800">{m.loyer.toLocaleString()} <span className="text-xs font-normal text-slate-400">FCFA/mois</span></p>
                <button className="text-xs text-blue-600 font-bold flex items-center gap-1 hover:underline"><Eye size={14}/> Voir détails</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Graphique */}
        <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-emerald-500" size={20}/>
            <h3 className="font-bold text-slate-800">Évolution des revenus (6 mois)</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={incomeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false}/>
              <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false}/>
              <YAxis stroke="#64748b" axisLine={false} tickLine={false}/>
              <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
              <Bar dataKey="revenus" fill="#10b981" radius={[6, 6, 0, 0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Alertes */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="text-amber-500" size={20}/>
            <h3 className="font-bold text-slate-800">Alertes importantes</h3>
          </div>
          <div className="space-y-3">
            {alertes.map((a, i) => (
              <div key={i} className={`p-3 rounded-xl text-sm font-medium flex items-start gap-2 ${
                a.type === "danger" ? "bg-red-50 text-red-700" :
                a.type === "warning" ? "bg-amber-50 text-amber-700" :
                "bg-blue-50 text-blue-700"
              }`}>
                <AlertCircle size={16} className="mt-0.5 shrink-0"/>
                {a.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

const KPI = ({ title, value, color, icon }: any) => (
  <div className={`${color} text-white p-5 rounded-2xl shadow-lg flex items-center justify-between`}>
    <div>
      <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">{title}</p>
      <p className="text-3xl font-black mt-1">{value}</p>
    </div>
    <div className="bg-white/10 p-3 rounded-xl">{icon}</div>
  </div>
);

export default ProprietaireDashboard;
