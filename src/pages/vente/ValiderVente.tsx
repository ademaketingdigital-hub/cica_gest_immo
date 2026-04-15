import React, { useState } from "react";
import { 
  CheckCircle2, ShieldCheck, Eye, 
  User, MapPin, Banknote, ArrowRight,
  TrendingUp, Award, X, Calendar, CreditCard, FileText
} from "lucide-react";
import { VentePageWrapper } from "./VentePageTemplate";

// Badge de statut haute fidélité
const SaleStatus = ({ status }: { status: string }) => {
  const styles: any = {
    "À vérifier": "bg-blue-50 text-blue-600 border-blue-100",
    "Prêt": "bg-purple-50 text-purple-600 border-purple-100",
    "Vendu": "bg-emerald-50 text-emerald-600 border-emerald-100",
  };
  return (
    <span className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 w-fit ${styles[status]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${status === 'Vendu' ? 'bg-emerald-500' : 'bg-current animate-pulse'}`}></span>
      {status}
    </span>
  );
};

const ValiderVente: React.FC = () => {
  const [sales, setSales] = useState([
    { id: 1, client: "Patrick L.", email: "p.legrand@email.com", parcel: "Villa A1", price: "28.000.000", status: "À vérifier" },
    { id: 2, client: "Dorine S.", email: "d.souman@email.com", parcel: "Lot H3", price: "13.500.000", status: "À vérifier" },
    { id: 3, client: "SARL AgroBénin", email: "contact@agrobenin.bj", parcel: "Zone Agricole P11", price: "39.200.000", status: "Prêt" },
  ]);
  const [selectedSale, setSelectedSale] = useState<any | null>(null);

  const validateSale = (id: number) => {
    setSales((current) => current.map((item) => (item.id === id ? { ...item, status: "Vendu" } : item)));
  };

  return (
    <VentePageWrapper
      title="Clôture des Ventes"
      breadcrumb="Diligence / Validation Finale"
      subtitle="Dernière étape de vérification. La validation marquera le domaine comme définitivement vendu."
    >
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
        
        {/* STATS DE CLÔTURE RAPIDES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Volume en attente</p>
              <p className="text-xl font-black text-slate-900">80.7M XOF</p>
            </div>
          </div>
          <div className="bg-slate-900 p-6 rounded-[2rem] text-white flex items-center gap-4 shadow-xl shadow-slate-200">
            <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Award size={24} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Objectif Mensuel</p>
              <p className="text-xl font-black">74% Atteint</p>
            </div>
          </div>
        </div>

        {/* LISTE DES VENTES */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Acheteur</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Bien Immobilier</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Statut</th>
                <th className="px-8 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {sales.map((sale) => (
                <tr key={sale.id} className="group hover:bg-slate-50/50 transition-all">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 font-bold group-hover:bg-white group-hover:shadow-sm transition-all">
                        {sale.client.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-slate-800 leading-none">{sale.client}</p>
                        <p className="text-[10px] text-slate-400 mt-1.5 font-medium">{sale.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-blue-500" />
                      <span className="font-bold text-slate-700">{sale.parcel}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      <Banknote size={16} className="text-emerald-500" />
                      <p className="font-black text-slate-900">{sale.price} <span className="text-[10px] text-slate-400">XOF</span></p>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <SaleStatus status={sale.status} />
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button 
                        onClick={() => setSelectedSale(sale)}
                        className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-xl border border-transparent hover:border-blue-100 transition shadow-sm hover:shadow-md"
                      >
                        <Eye size={18} />
                      </button>
                      
                      {sale.status !== "Vendu" && (
                        <button 
                          onClick={() => validateSale(sale.id)}
                          className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-slate-200"
                        >
                          <CheckCircle2 size={14} /> Clôturer la vente
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MESSAGE DE SÉCURITÉ */}
        <div className="flex items-start gap-4 p-6 bg-blue-50/50 border border-blue-100 rounded-[2rem]">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h4 className="text-sm font-black text-blue-900 uppercase tracking-tight">Protocole de Validation Sécurisée</h4>
            <p className="text-xs text-blue-700/80 mt-1 leading-relaxed">
              En cliquant sur "Clôturer", vous confirmez avoir reçu les fonds ou les garanties nécessaires. Cette action est irréversible et déclenchera la mise à jour automatique des stocks et la notification au client.
            </p>
          </div>
        </div>
      </div>

      {/* MODAL DE DÉTAILS DE LA VENTE */}
      {selectedSale && (
        <div className="fixed inset-0 z-[110] grid place-items-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-2xl rounded-[3rem] bg-white overflow-hidden shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
            <div className="relative h-32 bg-gradient-to-r from-slate-900 to-slate-800">
              <button 
                className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition" 
                onClick={() => setSelectedSale(null)}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="px-10 pb-10">
              <div className="relative -mt-12 flex items-end gap-6 mb-8">
                <div className="h-24 w-24 rounded-[2rem] bg-white p-1 shadow-xl">
                  <div className="h-full w-full rounded-[1.8rem] bg-slate-100 flex items-center justify-center text-3xl font-black text-slate-400 border border-slate-200 uppercase">
                    {selectedSale.client.charAt(0)}
                  </div>
                </div>
                <div className="pb-2">
                  <h3 className="text-2xl font-black text-slate-900">{selectedSale.client}</h3>
                  <p className="text-slate-500 font-medium">{selectedSale.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><MapPin size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bien Concerné</p>
                      <p className="text-sm font-bold text-slate-700 mt-1">{selectedSale.parcel}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl"><Banknote size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Montant de la transaction</p>
                      <p className="text-sm font-bold text-slate-700 mt-1">{selectedSale.price} XOF</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl"><Calendar size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date prévue de clôture</p>
                      <p className="text-sm font-bold text-slate-700 mt-1">15 Avril 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl"><CreditCard size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mode de Paiement</p>
                      <p className="text-sm font-bold text-slate-700 mt-1">Virement Bancaire</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-3">
                {selectedSale.status !== "Vendu" && (
                  <button 
                    className="flex-1 py-4 rounded-2xl bg-slate-900 text-white font-black text-sm hover:bg-emerald-600 transition shadow-lg shadow-slate-200"
                    onClick={() => { validateSale(selectedSale.id); setSelectedSale(null); }}
                  >
                    Confirmer la clôture
                  </button>
                )}
                <button className="px-8 py-4 rounded-2xl bg-slate-100 text-slate-600 font-black text-sm hover:bg-slate-200 transition" onClick={() => setSelectedSale(null)}>
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </VentePageWrapper>
  );
};

export default ValiderVente;