import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, FileCheck, BarChart3, Filter, Wrench } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const sidebarItems = [
  { label: "Tableau de Bord", href: "/proprietaire/dashboard", icon: <LayoutDashboard size={20}/> },
  { label: "Diligence", href: "#", icon: <FileCheck size={20}/>, children: [
    { label: "Valider une dépense", href: "/proprietaire/valider-depense" },
    { label: "Acquitter un paiement", href: "/proprietaire/acquitter-paiement" },
  ]},
  { label: "Consulter états", href: "#", icon: <BarChart3 size={20}/>, children: [
    { label: "Info par maison", href: "/proprietaire/info-maison" },
    { label: "Etat Caution", href: "/proprietaire/etat-caution" },
    { label: "Etat Impayé", href: "/proprietaire/etat-impaye" },
    { label: "Etat avance", href: "/proprietaire/etat-avance" },
    { label: "Etat dépense", href: "/proprietaire/etat-depense" },
    { label: "Rapport périodique", href: "#", children: [
      { label: "Mois en cours", href: "/proprietaire/rapport/mois-n" },
      { label: "Mois -1", href: "/proprietaire/rapport/mois-1" },
      { label: "Mois -2", href: "/proprietaire/rapport/mois-2" },
      { label: "Mois -3", href: "/proprietaire/rapport/mois-3" },
    ]},
  ]},
];

const depenses = [
  { date: "12/04/2025", maison: "Villa Cocotier", categorie: "Plomberie", description: "Réparation salle de bain", montant: 45000 },
  { date: "05/04/2025", maison: "Villa Cocotier", categorie: "Étanchéité", description: "Étanchéité toiture", montant: 450000 },
  { date: "28/03/2025", maison: "Appt. 3B, Akpakpa", categorie: "Serrurerie", description: "Remplacement serrure", montant: 15000 },
  { date: "15/03/2025", maison: "Maison R+1, Calavi", categorie: "Peinture", description: "Peinture façade", montant: 250000 },
  { date: "01/03/2025", maison: "Duplex, Fidjrossè", categorie: "Jardin", description: "Entretien jardin", montant: 25000 },
  { date: "20/02/2025", maison: "Villa Cocotier", categorie: "Électricité", description: "Installation compteur", montant: 80000 },
];

const depensesParMois = [
  { name: "Nov", total: 120000 }, { name: "Déc", total: 95000 }, { name: "Jan", total: 180000 },
  { name: "Fév", total: 80000 }, { name: "Mar", total: 290000 }, { name: "Avr", total: 510000 },
];

const EtatDepense: React.FC = () => {
  const [filterMaison, setFilterMaison] = useState("Toutes");
  const maisonsList = ["Toutes", ...new Set(depenses.map(d => d.maison))];
  const filtered = depenses.filter(d => filterMaison === "Toutes" || d.maison === filterMaison);

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Espace Propriétaire" breadcrumb="Consulter états / Etat dépense">
      <div className="space-y-6 animate-in fade-in duration-500">
        <div>
          <h2 className="text-2xl font-black text-slate-800">État des Dépenses</h2>
          <p className="text-slate-500">Historique complet des dépenses validées.</p>
        </div>

        {/* Graphique */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Wrench size={18} className="text-amber-500"/> Dépenses mensuelles (FCFA)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={depensesParMois}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false}/>
              <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false}/>
              <YAxis stroke="#64748b" axisLine={false} tickLine={false}/>
              <Tooltip contentStyle={{borderRadius:'12px',border:'none',boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}/>
              <Bar dataKey="total" fill="#f59e0b" radius={[6,6,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Filtres */}
        <div className="flex items-center gap-3">
          <Filter size={16} className="text-slate-400"/>
          <select value={filterMaison} onChange={e => setFilterMaison(e.target.value)} className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white">
            {maisonsList.map(m => <option key={m}>{m}</option>)}
          </select>
        </div>

        {/* Tableau */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="text-left px-5 py-3 font-bold text-slate-600">Date</th>
                <th className="text-left px-5 py-3 font-bold text-slate-600">Maison</th>
                <th className="text-left px-5 py-3 font-bold text-slate-600">Catégorie</th>
                <th className="text-left px-5 py-3 font-bold text-slate-600">Description</th>
                <th className="text-right px-5 py-3 font-bold text-slate-600">Montant</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="px-5 py-4 text-slate-500">{d.date}</td>
                  <td className="px-5 py-4 font-medium text-slate-800">{d.maison}</td>
                  <td className="px-5 py-4"><span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-full">{d.categorie}</span></td>
                  <td className="px-5 py-4 text-slate-600">{d.description}</td>
                  <td className="px-5 py-4 text-right font-bold text-red-500">-{d.montant.toLocaleString()} F</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-slate-500">Total affiché : <span className="font-bold text-slate-800">{filtered.reduce((s,d) => s+d.montant, 0).toLocaleString()} FCFA</span></p>
      </div>
    </DashboardLayout>
  );
};

export default EtatDepense;
