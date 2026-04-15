import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, ArrowDownCircle, ArrowUpCircle, BarChart3, Search, CreditCard, Smartphone, Banknote, Building } from "lucide-react";

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

const modePaiement = [
  { label: "Mobile Money", icon: <Smartphone size={20}/> },
  { label: "Espèces", icon: <Banknote size={20}/> },
  { label: "Virement", icon: <Building size={20}/> },
  { label: "Carte bancaire", icon: <CreditCard size={20}/> },
];

const CaisseDirecte: React.FC = () => {
  const [mode, setMode] = useState("Mobile Money");

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Gestion de la Caisse" breadcrumb="Encaissement / Caisse direct">
      <div className="space-y-6 animate-in fade-in duration-500">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Encaissement rapide</h2>
          <p className="text-slate-500">Enregistrez un paiement reçu en caisse.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulaire */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-5">
            <div>
              <label className="text-sm font-bold text-slate-700 block mb-2">Locataire ou Client Parcelle</label>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                <input type="text" placeholder="Rechercher par nom, téléphone..." className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/>
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700 block mb-2">Maison / Parcelle concernée</label>
              <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white">
                <option>Villa Cocotier, Cotonou</option>
                <option>Appt. 3B, Akpakpa</option>
                <option>Parcelle C12, Calavi</option>
                <option>Maison R+1, Calavi</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-bold text-slate-700 block mb-2">Montant (FCFA)</label>
                <input type="number" placeholder="150 000" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"/>
              </div>
              <div>
                <label className="text-sm font-bold text-slate-700 block mb-2">Date</label>
                <input type="date" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"/>
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700 block mb-2">Mode de paiement</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {modePaiement.map(m => (
                  <button key={m.label} onClick={() => setMode(m.label)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all text-sm font-medium ${
                      mode === m.label ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-500 hover:border-slate-300"
                    }`}>
                    {m.icon}
                    <span className="text-xs">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700 block mb-2">Référence transaction</label>
              <input type="text" placeholder="Ex: TXN-2025-0412" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>

            <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all shadow-lg">
              Encaisser maintenant
            </button>
          </div>

          {/* Aperçu reçu */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 mb-4">Aperçu du reçu</h3>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-5 space-y-3 text-sm">
              <div className="text-center mb-4">
                <p className="font-black text-slate-800">CANAL CICA IMMO</p>
                <p className="text-xs text-slate-400">Reçu de paiement</p>
              </div>
              <div className="flex justify-between"><span className="text-slate-500">Client :</span><span className="font-bold">—</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Bien :</span><span className="font-bold">—</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Montant :</span><span className="font-bold">—</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Mode :</span><span className="font-bold">{mode}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Référence :</span><span className="font-bold">—</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Date :</span><span className="font-bold">—</span></div>
              <div className="border-t border-slate-200 pt-3 mt-3 text-center text-xs text-slate-400">Remplissez le formulaire pour générer l'aperçu</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CaisseDirecte;
