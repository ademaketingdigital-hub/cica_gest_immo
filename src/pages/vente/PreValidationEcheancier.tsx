import React, { useState } from "react";
import { 
  CalendarDays, Edit3, CheckCircle2, XCircle, 
  Wallet, ArrowUpRight, Clock, ChevronRight,
  Info, ShieldCheck, X, Save, AlertTriangle
} from "lucide-react";
import { VentePageWrapper } from "./VentePageTemplate";

const PreValidationEcheancier: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, client: "Pierre D.", parcel: "Villa Cotonou", plan: "3 versements", duration: "9 mois", amount: "25.000.000", status: "En attente", progress: 0 },
    { id: 2, client: "Hélène A.", parcel: "Lot A6", plan: "6 versements", duration: "12 mois", amount: "14.500.000", status: "Validé", progress: 100 },
    { id: 3, client: "SARL Bénin", parcel: "Zone Agricole B9", plan: "4 versements", duration: "8 mois", amount: "42.000.000", status: "Rejeté", progress: 0 },
  ]);

  const [selectedItem, setSelectedDossier] = useState<any | null>(null);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  const handleValidate = (id: number) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, status: "Validé" } : item));
    alert("Échéancier validé avec succès !");
  };

  const openRejectModal = (item: any) => {
    setSelectedDossier(item);
    setIsRejectModalOpen(true);
  };

  const confirmReject = () => {
    setItems(prev => prev.map(item => item.id === selectedItem.id ? { ...item, status: "Rejeté" } : item));
    setIsRejectModalOpen(false);
    setRejectionReason("");
    alert("Le dossier a été rejeté avec le motif enregistré.");
  };

  const openEditModal = (item: any) => {
    setSelectedDossier({ ...item });
    setIsEditModalOpen(true);
  };

  const saveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setItems(prev => prev.map(item => item.id === selectedItem.id ? selectedItem : item));
    setIsEditModalOpen(false);
    alert("Modifications enregistrées !");
  };

  return (
    <VentePageWrapper
      title="Validation des Échéanciers"
      breadcrumb="Diligence / Échéanciers"
      subtitle="Examinez la viabilité des plans de paiement échelonnés avant l'approbation finale du contrat."
    >
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* EN-TÊTE RÉCAPITULATIF RAPIDE */}
        <div className="flex gap-4 overflow-x-auto pb-2">
           <div className="flex items-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-[2rem] shadow-lg shadow-blue-100 flex-shrink-0">
              <div className="p-2 bg-white/20 rounded-xl"><Wallet size={20}/></div>
              <div>
                <p className="text-[10px] font-black uppercase opacity-60">À valider</p>
                <p className="text-xl font-black">67.0M XOF</p>
              </div>
           </div>
           <div className="flex items-center gap-3 bg-white border border-slate-100 px-6 py-4 rounded-[2rem] shadow-sm flex-shrink-0">
              <div className="p-2 bg-slate-100 text-slate-600 rounded-xl"><Clock size={20}/></div>
              <div>
                <p className="text-[10px] font-black uppercase text-slate-400">Dossiers</p>
                <p className="text-xl font-black text-slate-800">12 en attente</p>
              </div>
           </div>
        </div>

        {/* LISTE DES DOSSIERS */}
        <div className="grid gap-6">
          {items.map((item) => (
            <div key={item.id} className={`group relative overflow-hidden rounded-[2.5rem] bg-white border p-2 shadow-xl shadow-slate-200/40 transition-all ${item.status === 'Validé' ? 'border-emerald-100' : 'border-slate-100 hover:border-blue-200'}`}>
              <div className="p-6">
                <div className="flex flex-col gap-6 xl:flex-row xl:items-center">
                  
                  {/* SECTION INFOS CLIENT & BIEN */}
                  <div className="flex-1 flex items-start gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">Réf: #00{item.id}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase italic">{item.client}</span>
                      </div>
                      <h3 className="mt-1 text-2xl font-black text-slate-900 tracking-tight">{item.parcel}</h3>
                      <div className="mt-2 flex items-center gap-4 text-sm font-medium text-slate-500">
                        <span className="flex items-center gap-1"><CalendarDays size={14} className="text-slate-400" /> {item.duration}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                        <span className="flex items-center gap-1"><ArrowUpRight size={14} className="text-slate-400" /> {item.plan}</span>
                      </div>
                    </div>
                  </div>

                  {/* SECTION MONTANT & ACTIONS */}
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="text-center sm:text-right">
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">Montant Total</p>
                      <p className="text-2xl font-black text-slate-900 leading-none mt-1">{item.amount} <span className="text-xs text-slate-400 font-bold">XOF</span></p>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-2xl">
                      {item.status !== "Validé" && (
                        <>
                          <button 
                            className="h-11 w-11 flex items-center justify-center rounded-xl bg-white text-slate-400 border border-slate-200 hover:text-blue-600 hover:border-blue-200 transition-all active:scale-90" 
                            title="Modifier"
                            onClick={() => openEditModal(item)}
                          >
                            <Edit3 size={18} />
                          </button>
                          <button 
                            className="h-11 w-11 flex items-center justify-center rounded-xl bg-white text-slate-400 border border-slate-200 hover:text-rose-600 hover:border-rose-200 transition-all active:scale-90" 
                            title="Rejeter"
                            onClick={() => openRejectModal(item)}
                          >
                            <XCircle size={18} />
                          </button>
                          <button onClick={() => handleValidate(item.id)} className="flex items-center gap-2 px-6 h-11 rounded-xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 active:scale-95">
                            <CheckCircle2 size={16} /> Valider
                          </button>
                        </>
                      )}
                      {item.status === "Validé" && (
                        <div className="flex items-center gap-2 px-6 h-11 rounded-xl bg-emerald-50 text-emerald-600 text-xs font-black uppercase">
                          <CheckCircle2 size={16} /> Accordé
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* DÉTAILS ÉCHÉANCES (GRILLE INFÉRIEURE) */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <DetailBox 
                    label="Structure" 
                    value={`${item.plan}`} 
                    sub="Paiement progressif" 
                    icon={<LayersIcon />} 
                  />
                  <DetailBox 
                    label="Prochaine Échéance" 
                    value={item.status === "En attente" ? "15 Mai 2026" : "Déjà activée"} 
                    sub={item.status === "En attente" ? "Sous réserve" : "Cycle en cours"}
                    icon={<ClockIcon />}
                    highlight={item.status === "En attente"}
                  />
                  <DetailBox 
                    label="Niveau de Risque" 
                    value="Faible" 
                    sub="Basé sur l'apport initial"
                    icon={<ShieldIcon />}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DE REJET */}
      {isRejectModalOpen && (
        <div className="fixed inset-0 z-[120] grid place-items-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-md rounded-[2.5rem] bg-white p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 leading-tight">Motif du rejet</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{selectedItem?.parcel}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <textarea 
                rows={4}
                className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 focus:bg-white focus:border-rose-500 transition-all outline-none resize-none"
                placeholder="Précisez pourquoi ce plan de paiement ne convient pas..."
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
              />
              <div className="flex gap-3 pt-2">
                <button onClick={() => setIsRejectModalOpen(false)} className="flex-1 py-4 rounded-2xl bg-slate-50 text-slate-600 font-black text-sm hover:bg-slate-100 transition">
                  Annuler
                </button>
                <button 
                  onClick={confirmReject}
                  disabled={!rejectionReason.trim()}
                  className="flex-[2] py-4 rounded-2xl bg-rose-600 text-white font-black text-sm hover:bg-rose-700 transition shadow-lg shadow-rose-200 disabled:opacity-50"
                >
                  Confirmer le rejet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE MODIFICATION */}
      {isEditModalOpen && selectedItem && (
        <div className="fixed inset-0 z-[120] grid place-items-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-xl rounded-[3rem] bg-white overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <form onSubmit={saveEdit}>
              <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl"><Edit3 size={20}/></div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Ajuster l'échéancier</h3>
                </div>
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition">
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Plan de paiement</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                      value={selectedItem.plan}
                      onChange={(e) => setSelectedDossier({...selectedItem, plan: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Durée totale</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                      value={selectedItem.duration}
                      onChange={(e) => setSelectedDossier({...selectedItem, duration: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Montant global (XOF)</label>
                  <div className="relative">
                    <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-transparent rounded-2xl text-lg font-black text-slate-800 focus:bg-white focus:border-blue-500 transition-all outline-none"
                      value={selectedItem.amount}
                      onChange={(e) => setSelectedDossier({...selectedItem, amount: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-4 flex gap-3">
                  <Info className="text-blue-600 shrink-0" size={18} />
                  <p className="text-xs font-medium text-blue-700 leading-relaxed">
                    Ces modifications seront prises en compte dans le contrat final de prévente après votre validation.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-slate-50 flex gap-3">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="flex-1 py-4 rounded-2xl bg-white border border-slate-200 text-slate-600 font-black text-sm hover:bg-slate-100 transition">
                  Annuler
                </button>
                <button 
                  type="submit"
                  className="flex-[2] py-4 rounded-2xl bg-slate-900 text-white font-black text-sm hover:bg-blue-600 transition shadow-lg shadow-slate-200 flex items-center justify-center gap-2"
                >
                  <Save size={18} /> Sauvegarder les termes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </VentePageWrapper>
  );
};

// COMPOSANTS INTERNES UTILITAIRES
const DetailBox = ({ label, value, sub, icon, highlight }: any) => (
  <div className={`group/box rounded-[2rem] p-5 border transition-all ${highlight ? 'bg-blue-50/30 border-blue-100' : 'bg-slate-50/50 border-slate-100 hover:bg-white hover:border-slate-200'}`}>
    <div className="flex items-center gap-3 mb-3">
      <div className="text-slate-400 group-hover/box:text-blue-600 transition-colors">{icon}</div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>
    </div>
    <p className={`text-lg font-black tracking-tight ${highlight ? 'text-blue-700' : 'text-slate-800'}`}>{value}</p>
    <p className="text-[10px] font-bold text-slate-400 mt-0.5">{sub}</p>
  </div>
);

const LayersIcon = () => <div className="w-4 h-4 border-2 border-current rounded-sm border-t-4" />;
const ClockIcon = () => <Clock size={16} />;
const ShieldIcon = () => <ShieldCheck size={16} />;

export default PreValidationEcheancier;