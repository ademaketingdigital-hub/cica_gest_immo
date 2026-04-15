import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, FileCheck, BarChart3, Home, User, History, Download, Banknote, Wrench } from "lucide-react";
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

const maisons = [
  { id: "villa-cocotier", nom: "Villa Cocotier, Cotonou", type: "Villa 4 pièces", surface: "180 m²", chambres: 3, loyer: 150000, locataire: "Mme Adjovi Carine", tel: "+229 97 12 34 56", dateEntree: "01/03/2023" },
  { id: "appt-3b", nom: "Appt. 3B, Akpakpa", type: "Appartement F3", surface: "85 m²", chambres: 2, loyer: 85000, locataire: "M. Houessou Pierre", tel: "+229 96 78 90 12", dateEntree: "15/06/2024" },
  { id: "maison-calavi", nom: "Maison R+1, Calavi", type: "Maison R+1", surface: "250 m²", chambres: 5, loyer: 200000, locataire: "M. Gbenou Serge", tel: "+229 95 45 67 89", dateEntree: "01/01/2024" },
];

const revenus = [
  { name: "Nov", montant: 150000 }, { name: "Déc", montant: 150000 }, { name: "Jan", montant: 150000 },
  { name: "Fév", montant: 150000 }, { name: "Mar", montant: 150000 }, { name: "Avr", montant: 150000 },
];

const historiqueLocataires = [
  { nom: "M. Amoussou Paul", periode: "Jan 2021 — Fév 2023" },
  { nom: "Mme Sossou Grâce", periode: "Mar 2019 — Déc 2020" },
];

const depensesRecentes = [
  { date: "12/04/2025", desc: "Réparation plomberie", montant: 45000 },
  { date: "05/03/2025", desc: "Peinture salon", montant: 80000 },
];

const InfoMaison: React.FC = () => {
  const [selected, setSelected] = useState(maisons[0]);

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Espace Propriétaire" breadcrumb="Consulter états / Info par maison">
      <div className="space-y-6 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Fiche détaillée par maison</h2>
            <p className="text-slate-500">Consultez toutes les informations d'une maison.</p>
          </div>
          <select
            value={selected.id}
            onChange={e => setSelected(maisons.find(m => m.id === e.target.value)!)}
            className="border border-slate-200 rounded-xl px-4 py-2.5 bg-white text-sm font-medium"
          >
            {maisons.map(m => <option key={m.id} value={m.id}>{m.nom}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Infos générales */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto text-4xl mb-3">🏠</div>
              <h3 className="font-bold text-slate-800 text-lg">{selected.nom}</h3>
              <p className="text-sm text-slate-500">{selected.type}</p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Surface</span><span className="font-bold">{selected.surface}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Chambres</span><span className="font-bold">{selected.chambres}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Loyer</span><span className="font-bold text-emerald-600">{selected.loyer.toLocaleString()} F</span></div>
            </div>
            <button className="mt-4 w-full bg-slate-100 text-slate-700 py-2 rounded-lg text-sm font-bold hover:bg-slate-200 flex items-center justify-center gap-2">
              <Download size={14}/> État des lieux (PDF)
            </button>
          </div>

          {/* Locataire actuel */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><User size={18} className="text-blue-500"/> Locataire actuel</h3>
            <div className="bg-blue-50 rounded-xl p-4 mb-4">
              <p className="font-bold text-slate-800">{selected.locataire}</p>
              <p className="text-sm text-slate-500">{selected.tel}</p>
              <p className="text-xs text-slate-400 mt-1">Depuis le {selected.dateEntree}</p>
            </div>
            <h4 className="font-bold text-slate-700 text-sm mb-2 flex items-center gap-2"><History size={14}/> Anciens locataires</h4>
            <div className="space-y-2">
              {historiqueLocataires.map((h, i) => (
                <div key={i} className="flex justify-between text-sm p-2 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">{h.nom}</span>
                  <span className="text-slate-400 text-xs">{h.periode}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dépenses récentes */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Wrench size={18} className="text-amber-500"/> Dernières dépenses</h3>
            <div className="space-y-3">
              {depensesRecentes.map((d, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-slate-700">{d.desc}</p>
                    <p className="text-xs text-slate-400">{d.date}</p>
                  </div>
                  <span className="font-bold text-red-500 text-sm">-{d.montant.toLocaleString()} F</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Graphique revenus */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Banknote size={18} className="text-emerald-500"/> Revenus générés (6 mois)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={revenus}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false}/>
              <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false}/>
              <YAxis stroke="#64748b" axisLine={false} tickLine={false}/>
              <Tooltip contentStyle={{borderRadius:'12px',border:'none',boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}/>
              <Bar dataKey="montant" fill="#10b981" radius={[6,6,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800">
          <Download size={14} className="inline mr-2"/> Télécharger rapport complet de cette maison
        </button>
      </div>
    </DashboardLayout>
  );
};

export default InfoMaison;
