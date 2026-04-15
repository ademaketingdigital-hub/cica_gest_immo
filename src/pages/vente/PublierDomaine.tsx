import React, { useState } from "react";
import { 
  Filter, Download, MapPin, Search, 
  Globe, Eye, CheckCircle, MoreVertical, 
  TrendingUp, Layers, Tag, EyeOff,
  Pencil, Trash2, X, Image as ImageIcon,
  FileText, AlertTriangle, Save
} from "lucide-react";
import { VentePageWrapper } from "./VentePageTemplate";

// Composant de badge stylisé
const TypeBadge = ({ type }: { type: string }) => {
  const styles: any = {
    "Agricole": "bg-emerald-50 text-emerald-700 border-emerald-100",
    "Bâti": "bg-amber-50 text-amber-700 border-amber-100",
    "Vide": "bg-slate-100 text-slate-700 border-slate-200",
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-lg border text-[10px] font-black uppercase tracking-tighter ${styles[type]}`}>
      {type}
    </span>
  );
};

const PublierDomaine: React.FC = () => {
  const [type, setType] = useState("Tous");
  const [location, setLocation] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [detailsDomain, setDetailsDomain] = useState<any | null>(null);
  const [editDomain, setEditDomain] = useState<any | null>(null);
  const [deleteDomainId, setDeleteDomainId] = useState<number | null>(null);

  const [domains, setDomains] = useState([
    { id: 1, photo: "/src/assets/placeholder-land.png", title: "Domaine Agon", type: "Agricole", location: "Abomey-Calavi", price: "18.500.000", status: "En attente" },
    { id: 2, photo: "/src/assets/placeholder-land.png", title: "Parcelle C10", type: "Bâti", location: "Cotonou", price: "35.000.000", status: "Publié" },
    { id: 3, photo: "/src/assets/placeholder-land.png", title: "Lot 12", type: "Vide", location: "Porto-Novo", price: "12.900.000", status: "En attente" },
  ]);

  const filtered = domains.filter((domain) => 
    (type === "Tous" || domain.type === type) && 
    (location === "Tous" || domain.location === location) &&
    (domain.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const togglePublication = (id: number) => {
    setDomains(prev => prev.map(d => 
      d.id === id ? { ...d, status: d.status === "Publié" ? "En attente" : "Publié" } : d
    ));
  };

  const handleUpdateDomain = (e: React.FormEvent) => {
    e.preventDefault();
    setDomains(prev => prev.map(d => d.id === editDomain.id ? editDomain : d));
    setEditDomain(null);
    alert("Domaine mis à jour avec succès !");
  };

  const handleDeleteDomain = () => {
    if (deleteDomainId) {
      setDomains(prev => prev.filter(d => d.id !== deleteDomainId));
      setDeleteDomainId(null);
    }
  };

  return (
    <VentePageWrapper
      title="Catalogue des Domaines"
      breadcrumb="Diligence / Publication"
      subtitle="Gérez la visibilité de vos actifs immobiliers sur le site vitrine."
      rightAction={
        <button className="group flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-black text-white hover:bg-slate-800 transition-all shadow-xl shadow-slate-200" onClick={() => alert('Exportation CSV lancée...')}>
          <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
          Exporter CSV
        </button>
      }
    >
      <div className="space-y-8 animate-in fade-in duration-700">
        
        {/* BARRE DE FILTRES AVANCÉE */}
        <div className="flex flex-col xl:flex-row gap-4 items-end bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Recherche</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Recherche instantanée..." 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none font-bold text-slate-700" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Type de sol</label>
              <div className="relative">
                <Layers className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <select 
                  value={type} 
                  onChange={(e) => setType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 appearance-none outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option>Tous</option>
                  <option>Vide</option>
                  <option>Agricole</option>
                  <option>Bâti</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Zone Géographique</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <select 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 appearance-none outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option>Tous</option>
                  <option>Abomey-Calavi</option>
                  <option>Cotonou</option>
                  <option>Porto-Novo</option>
                </select>
              </div>
            </div>
          </div>
          <button className="bg-slate-100 p-3.5 rounded-2xl text-slate-600 hover:bg-slate-200 transition">
            <Filter size={20} />
          </button>
        </div>

        {/* TABLEAU DE GESTION IMMOBILIÈRE */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Détails du domaine</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Évaluation</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Visibilité</th>
                <th className="px-8 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((domain) => (
                <tr key={domain.id} className="group hover:bg-slate-50/80 transition-all">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-5">
                      {/* Preview Image Stylisée */}
                      <div className="relative h-20 w-24 rounded-2xl bg-slate-200 overflow-hidden border border-white shadow-inner flex-shrink-0">
                         <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-slate-400 uppercase tracking-tighter bg-gradient-to-br from-slate-100 to-slate-200">
                           No Image
                         </div>
                         <div className="absolute top-1 left-1">
                           <TypeBadge type={domain.type} />
                         </div>
                      </div>
                      <div>
                        <p className="font-black text-slate-900 text-lg leading-tight mb-1">{domain.title}</p>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-xs font-bold text-slate-400">
                            <MapPin size={12} className="text-blue-500" /> {domain.location}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                          <span className="text-xs font-bold text-slate-400 lowercase italic">réf: dom-00{domain.id}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="space-y-1">
                      <p className="text-lg font-black text-slate-900 leading-none">{domain.price} <span className="text-[10px] text-slate-400">XOF</span></p>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 w-fit px-2 py-0.5 rounded-md">
                        <TrendingUp size={10} /> Prix du marché
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                       <div className={`h-2 w-2 rounded-full ${domain.status === 'Publié' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></div>
                       <span className="text-xs font-black text-slate-700 uppercase tracking-tight">{domain.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition" title="Détails" onClick={() => setDetailsDomain(domain)}>
                        <Eye size={18} />
                      </button>
                      
                      <button className="p-2.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition" title="Modifier" onClick={() => setEditDomain(domain)}>
                        <Pencil size={18} />
                      </button>

                      <button className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition" title="Supprimer" onClick={() => setDeleteDomainId(domain.id)}>
                        <Trash2 size={18} />
                      </button>

                      <div className="w-px h-6 bg-slate-100 mx-1"></div>

                      {domain.status === "Publié" ? (
                        <button className="flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-100 transition-all active:scale-95" onClick={() => togglePublication(domain.id)}>
                          <EyeOff size={14} /> Masquer
                        </button>
                      ) : (
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95" onClick={() => togglePublication(domain.id)}>
                          <Globe size={14} /> Publier
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL DE DÉTAILS DU DOMAINE */}
      {detailsDomain && (
        <div className="fixed inset-0 z-[110] grid place-items-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-2xl rounded-[3rem] bg-white overflow-hidden shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
            <div className="relative h-48 bg-slate-200">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-gradient-to-br from-slate-100 to-slate-200">
                <ImageIcon size={48} strokeWidth={1} />
              </div>
              <button 
                className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/40 transition" 
                onClick={() => setDetailsDomain(null)}
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-4 left-8">
                <TypeBadge type={detailsDomain.type} />
              </div>
            </div>
            
            <div className="px-10 py-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{detailsDomain.title}</h3>
                  <p className="flex items-center gap-2 text-slate-500 font-bold mt-1 uppercase text-xs tracking-widest">
                    <MapPin size={14} className="text-blue-600" /> {detailsDomain.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-blue-600 leading-none">{detailsDomain.price} <span className="text-xs uppercase">Xof</span></p>
                  <p className="text-[10px] font-black text-slate-400 mt-1 uppercase tracking-tighter">Prix catalogue</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-5 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Caractéristiques</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between text-sm"><span className="text-slate-500">Superficie</span> <span className="font-bold text-slate-800">500 m²</span></li>
                    <li className="flex justify-between text-sm"><span className="text-slate-500">Document</span> <span className="font-bold text-slate-800 tracking-tighter">Titre Foncier</span></li>
                  </ul>
                </div>
                <div className="p-5 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Visibilité site</p>
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${detailsDomain.status === 'Publié' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-amber-500'}`}></div>
                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight">{detailsDomain.status}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  className="flex-1 py-4 rounded-2xl bg-blue-600 text-white font-black text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                  onClick={() => togglePublication(detailsDomain.id)}
                >
                  {detailsDomain.status === "Publié" ? "Retirer de la vente" : "Publier maintenant"}
                </button>
                <button className="flex-1 py-4 rounded-2xl bg-slate-100 text-slate-600 font-black text-sm hover:bg-slate-200 transition">
                  Modifier la fiche
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE MODIFICATION */}
      {editDomain && (
        <div className="fixed inset-0 z-[110] grid place-items-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-xl rounded-[3rem] bg-white overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <form onSubmit={handleUpdateDomain}>
              <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl"><Pencil size={20}/></div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Modifier le domaine</h3>
                </div>
                <button type="button" onClick={() => setEditDomain(null)} className="text-slate-400 hover:text-slate-600 transition">
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-8 space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nom du domaine</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                    value={editDomain.title}
                    onChange={(e) => setEditDomain({...editDomain, title: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Type</label>
                    <select 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none appearance-none"
                      value={editDomain.type}
                      onChange={(e) => setEditDomain({...editDomain, type: e.target.value})}
                    >
                      <option>Vide</option>
                      <option>Agricole</option>
                      <option>Bâti</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Prix (XOF)</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                      value={editDomain.price}
                      onChange={(e) => setEditDomain({...editDomain, price: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Localisation</label>
                  <select 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none appearance-none"
                    value={editDomain.location}
                    onChange={(e) => setEditDomain({...editDomain, location: e.target.value})}
                  >
                    <option>Abomey-Calavi</option>
                    <option>Cotonou</option>
                    <option>Porto-Novo</option>
                  </select>
                </div>
              </div>

              <div className="p-8 bg-slate-50 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setEditDomain(null)}
                  className="flex-1 py-4 rounded-2xl bg-white border border-slate-200 text-slate-600 font-black text-sm hover:bg-slate-100 transition"
                >
                  Annuler
                </button>
                <button 
                  type="submit"
                  className="flex-[2] py-4 rounded-2xl bg-slate-900 text-white font-black text-sm hover:bg-slate-800 transition shadow-lg shadow-slate-200 flex items-center justify-center gap-2"
                >
                  <Save size={18} /> Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ALERTE DE CONFIRMATION DE SUPPRESSION */}
      {deleteDomainId && (
        <div className="fixed inset-0 z-[120] grid place-items-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-sm rounded-[2.5rem] bg-white p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-300 text-center">
            <div className="mx-auto h-20 w-20 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
              <AlertTriangle size={40} />
            </div>
            
            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Attention !</h3>
            <p className="text-slate-500 text-sm font-medium mb-8">
              Êtes-vous sûr de vouloir supprimer ce domaine ? Cette action retirera définitivement l'actif de la base de données.
            </p>

            <div className="flex flex-col gap-3">
              <button 
                onClick={handleDeleteDomain}
                className="w-full py-4 rounded-2xl bg-rose-600 text-white font-black text-sm hover:bg-rose-700 transition shadow-lg shadow-rose-200"
              >
                Oui, supprimer définitivement
              </button>
              <button 
                onClick={() => setDeleteDomainId(null)}
                className="w-full py-4 rounded-2xl bg-slate-100 text-slate-600 font-black text-sm hover:bg-slate-200 transition"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </VentePageWrapper>
  );
};

export default PublierDomaine;