import React, { useState } from "react";
import { 
  MessageSquare, CheckCircle2, XCircle, Eye, 
  Search, Filter, MoreHorizontal, FileText, 
  UserCheck, AlertCircle, Clock, ArrowUpDown,
  User, Calendar, Shield
} from "lucide-react";
import { VentePageWrapper } from "./VentePageTemplate";

// Composant local pour des Badges de statut plus "SaaS"
const DynamicStatus = ({ status }: { status: string }) => {
  const styles: any = {
    "En attente": "bg-amber-50 text-amber-600 border-amber-100",
    "Validé": "bg-emerald-50 text-emerald-600 border-emerald-100",
    "Rejeté": "bg-rose-50 text-rose-600 border-rose-100",
  };
  const icons: any = {
    "En attente": <Clock size={12} />,
    "Validé": <CheckCircle2 size={12} />,
    "Rejeté": <AlertCircle size={12} />,
  };

  return (
    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider ${styles[status]}`}>
      {icons[status]}
      {status}
    </span>
  );
};

const ValidationProprio: React.FC = () => {
  const [selectedOwner, setSelectedOwner] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  
  // Nouveaux états pour la recherche, le tri et les détails
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' | null }>({ key: 'name', direction: 'asc' });
  const [detailsOwner, setDetailsOwner] = useState<any | null>(null);

  const [owners, setOwners] = useState([
    { id: 1, name: "Aïssatou K.", email: "a.koffi@email.com", type: "CNI", number: "BK-20123", date: "12/04/2026", status: "En attente" },
    { id: 2, name: "Idriss H.", email: "i.houngbo@email.com", type: "Passeport", number: "PC-95432", date: "11/04/2026", status: "Validé" },
    { id: 3, name: "SARL Akoss", email: "contact@akoss.bj", type: "Registre", number: "RC-33411", date: "10/04/2026", status: "Rejeté" },
  ]);

  // Logique de tri
  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Filtrage et Tri combinés
  const processedOwners = React.useMemo(() => {
    let result = owners.filter(owner => 
      owner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      owner.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      owner.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortConfig.key && sortConfig.direction) {
      result.sort((a: any, b: any) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return result;
  }, [owners, searchTerm, sortConfig]);

  return (
    <VentePageWrapper
      title="Diligence Propriétaires"
      breadcrumb="Compliance / Validation"
      subtitle="Examinez, triez et validez les identités des propriétaires en temps réel."
    >
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
        
        {/* BARRE D'ACTIONS & FILTRES */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Filtrage instantané (nom, email, numéro)..." 
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-transparent rounded-2xl text-sm focus:bg-white focus:border-blue-500 transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button 
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition"
              onClick={() => handleSort('status')}
            >
              <ArrowUpDown size={18} /> Trier par statut
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-2xl hover:bg-slate-800 shadow-lg shadow-slate-200 transition">
              Rapport complet
            </button>
          </div>
        </div>

        {/* TABLEAU AMÉLIORÉ */}
        <div className="overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-slate-50/50 border-b border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <tr>
                <th className="px-8 py-5 cursor-pointer hover:text-blue-600 transition-colors" onClick={() => handleSort('name')}>
                  <div className="flex items-center gap-2">Identité Propriétaire <ArrowUpDown size={12}/></div>
                </th>
                <th className="px-6 py-5 cursor-pointer hover:text-blue-600 transition-colors" onClick={() => handleSort('type')}>
                  <div className="flex items-center gap-2">Document <ArrowUpDown size={12}/></div>
                </th>
                <th className="px-6 py-5 cursor-pointer hover:text-blue-600 transition-colors" onClick={() => handleSort('date')}>
                  <div className="flex items-center gap-2">Date Soumission <ArrowUpDown size={12}/></div>
                </th>
                <th className="px-6 py-5 cursor-pointer hover:text-blue-600 transition-colors" onClick={() => handleSort('status')}>
                  <div className="flex items-center gap-2">Statut de Compliance <ArrowUpDown size={12}/></div>
                </th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {processedOwners.length > 0 ? processedOwners.map((owner) => (
                <tr key={owner.id} className="group hover:bg-blue-50/30 transition-colors">
                  <td className="px-8 py-5" onClick={() => setDetailsOwner(owner)}>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-slate-100 to-slate-200 border-2 border-white shadow-sm flex items-center justify-center font-bold text-slate-600">
                        {owner.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-slate-800 leading-none">{owner.name}</p>
                        <p className="text-xs text-slate-400 mt-1">{owner.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-slate-400" />
                      <div>
                        <p className="font-bold text-slate-700 leading-none uppercase text-[11px]">{owner.type}</p>
                        <p className="text-[11px] text-slate-400 mt-1 font-mono tracking-tighter">{owner.number}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-slate-500 font-medium">{owner.date}</td>
                  <td className="px-6 py-5">
                    <DynamicStatus status={owner.status} />
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition" 
                        title="Voir détails"
                        onClick={() => setDetailsOwner(owner)}
                      >
                        <Eye size={18} />
                      </button>
                      <button className="p-2.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition" title="Valider">
                        <CheckCircle2 size={18} />
                      </button>
                      <button 
                        className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition"
                        onClick={() => { setSelectedOwner(owner.name); setModalOpen(true); }}
                        title="Rejeter"
                      >
                        <XCircle size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="px-8 py-12 text-center text-slate-400 font-medium italic">Aucun résultat ne correspond à votre recherche.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* BANNIÈRE DE COMMUNICATION */}
        <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl shadow-blue-100">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <MessageSquare size={28} />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight">Besoin d'informations complémentaires ?</h3>
                <p className="text-blue-100 text-sm mt-1 max-w-lg">
                  Envoyez un message direct au propriétaire pour demander une pièce manquante ou clarifier une information.
                </p>
              </div>
            </div>
            <button
              className="whitespace-nowrap rounded-2xl bg-white px-6 py-3 text-sm font-black text-blue-600 hover:bg-blue-50 transition shadow-lg shadow-black/10"
              onClick={() => { setSelectedOwner(owners[0].name); setModalOpen(true); }}
            >
              Envoyer un message
            </button>
          </div>
          {/* Décoration de fond */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
        </div>
      </div>

      {/* MODAL REDESIGNÉ */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-xl rounded-[2.5rem] bg-white p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-8">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <UserCheck size={24} />
              </div>
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 transition" onClick={() => setModalOpen(false)}>
                ✕
              </button>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Rédiger une instruction</h3>
              <p className="text-slate-500 mt-2 text-sm font-medium">
                Propriétaire : <span className="text-blue-600 font-bold">{selectedOwner}</span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Type de décision</label>
                <select className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-bold text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none appearance-none">
                  <option>⚠️ Documents illisibles</option>
                  <option>❌ Rejet définitif</option>
                  <option>🔍 Complément d'enquête</option>
                  <option>✅ Demande de signature</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Message au propriétaire</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none resize-none"
                  placeholder="Expliquez clairement ce que le propriétaire doit modifier..."
                />
              </div>
            </div>

            <div className="mt-10 flex gap-3">
              <button 
                className="flex-1 rounded-2xl bg-slate-100 px-6 py-4 text-sm font-black text-slate-600 hover:bg-slate-200 transition" 
                onClick={() => setModalOpen(false)}
              >
                Annuler
              </button>
              <button 
                className="flex-[2] rounded-2xl bg-blue-600 px-6 py-4 text-sm font-black text-white hover:bg-blue-700 shadow-lg shadow-blue-200 transition" 
                onClick={() => setModalOpen(false)}
              >
                Transmettre la décision
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE DÉTAILS UTILISATEUR */}
      {detailsOwner && (
        <div className="fixed inset-0 z-[110] grid place-items-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-2xl rounded-[3rem] bg-white overflow-hidden shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
            <div className="relative h-32 bg-gradient-to-r from-blue-600 to-indigo-700">
              <button 
                className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/40 transition" 
                onClick={() => setDetailsOwner(null)}
              >✕</button>
            </div>
            <div className="px-10 pb-10">
              <div className="relative -mt-12 flex items-end gap-6 mb-8">
                <div className="h-24 w-24 rounded-[2rem] bg-white p-1 shadow-xl">
                  <div className="h-full w-full rounded-[1.8rem] bg-slate-100 flex items-center justify-center text-3xl font-black text-slate-400 border border-slate-200">
                    {detailsOwner.name.charAt(0)}
                  </div>
                </div>
                <div className="pb-2">
                  <h3 className="text-2xl font-black text-slate-900">{detailsOwner.name}</h3>
                  <p className="text-slate-500 font-medium">{detailsOwner.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Shield size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Document d'identité</p>
                      <p className="text-sm font-bold text-slate-700 mt-1">{detailsOwner.type} — {detailsOwner.number}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl"><Calendar size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inscrit le</p>
                      <p className="text-sm font-bold text-slate-700 mt-1">{detailsOwner.date}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl border-2 border-dashed border-slate-100 p-4 bg-slate-50 flex flex-col items-center justify-center text-center">
                    <FileText size={32} className="text-slate-300 mb-2" />
                    <p className="text-[10px] font-black text-slate-400 uppercase">Aperçu du document</p>
                    <button className="mt-2 text-xs font-bold text-blue-600 hover:underline">Ouvrir le fichier</button>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-3">
                <button className="flex-1 py-4 rounded-2xl bg-slate-900 text-white font-black text-sm hover:bg-slate-800 transition shadow-lg shadow-slate-200">
                  Valider l'identité
                </button>
                <button className="px-8 py-4 rounded-2xl bg-slate-100 text-slate-600 font-black text-sm hover:bg-slate-200 transition">
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

export default ValidationProprio;