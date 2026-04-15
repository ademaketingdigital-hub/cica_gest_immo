import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, ArrowDownCircle, ArrowUpCircle, BarChart3, Upload } from "lucide-react";

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

const DepenseProprietaire: React.FC = () => (
  <DashboardLayout sidebarItems={sidebarItems} title="Gestion de la Caisse" breadcrumb="Dépense / Dépense chez propriétaire">
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-black text-slate-800">Enregistrer une dépense</h2>
        <p className="text-slate-500">Saisissez une dépense liée à un propriétaire.</p>
      </div>

      <div className="max-w-2xl bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-5">
        <div>
          <label className="text-sm font-bold text-slate-700 block mb-2">Propriétaire</label>
          <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white">
            <option>M. Kérékou Mathieu</option>
            <option>Mme Sossou Grâce</option>
            <option>M. Amoussou Paul</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-bold text-slate-700 block mb-2">Maison</label>
          <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white">
            <option>Villa Cocotier, Cotonou</option>
            <option>Appt. 3B, Akpakpa</option>
            <option>Maison R+1, Calavi</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-bold text-slate-700 block mb-2">Nature de la dépense</label>
          <input type="text" placeholder="Ex: Réparation plomberie" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-bold text-slate-700 block mb-2">Montant (FCFA)</label>
            <input type="number" placeholder="45 000" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"/>
          </div>
          <div>
            <label className="text-sm font-bold text-slate-700 block mb-2">Date</label>
            <input type="date" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"/>
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-slate-700 block mb-2">Justificatif</label>
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
            <Upload size={24} className="mx-auto text-slate-400 mb-2"/>
            <p className="text-sm text-slate-500">Glissez un fichier ici ou <span className="text-blue-600 font-bold">parcourez</span></p>
            <p className="text-xs text-slate-400 mt-1">PNG, JPG, PDF — max 5 Mo</p>
          </div>
        </div>

        <button className="w-full bg-red-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-red-600 transition-all shadow-lg">
          Enregistrer la dépense
        </button>
        <p className="text-xs text-slate-400 text-center">Cette dépense sera soumise à l'approbation du propriétaire.</p>
      </div>
    </div>
  </DashboardLayout>
);

export default DepenseProprietaire;
