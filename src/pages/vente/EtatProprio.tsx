import React, { useState } from "react";
import { Users, Home, X, Phone, Mail, MapPin, User, ArrowRight, Layers } from "lucide-react";
import { VentePageWrapper } from "./VentePageTemplate";

const EtatProprio: React.FC = () => {
  const [proprietaires] = useState([
    { id: 1, name: "Mme Aïssatou K.", domains: 3, phone: "+229 90 00 11 22", email: "a.koffi@email.com", address: "Cotonou, Fidjrossè" },
    { id: 2, name: "M. Idriss H.", domains: 5, phone: "+229 90 00 33 44", email: "i.houngbo@email.com", address: "Abomey-Calavi, IITA" },
    { id: 3, name: "SARL Akoss", domains: 8, phone: "+229 90 00 55 66", email: "contact@akoss.bj", address: "Porto-Novo, Tokpota" },
  ]);

  const [selectedOwner, setSelectedOwner] = useState<any | null>(null);

  return (
    <VentePageWrapper
      title="Etat propriétaire"
      breadcrumb="Consulter états / Etat propriétaire"
      subtitle="Liste de tous les propriétaires et le nombre de domaines associés."
    >
      <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100 shadow-sm">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-[12px] uppercase tracking-[0.18em]">
            <tr>
              <th className="px-6 py-4">Nom</th>
              <th className="px-6 py-4">Domaines</th>
              <th className="px-6 py-4">Téléphone</th>
              <th className="px-6 py-4">Détails</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            {proprietaires.map((owner) => (
              <tr key={owner.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">{owner.name}</td>
                <td className="px-6 py-4">{owner.domains}</td>
                <td className="px-6 py-4">{owner.phone}</td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => setSelectedOwner(owner)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                  >
                    <Users size={14} /> Voir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL DE DÉTAILS DU PROPRIÉTAIRE */}
      {selectedOwner && (
        <div className="fixed inset-0 z-[110] grid place-items-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-2xl rounded-[3rem] bg-white overflow-hidden shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
            <div className="relative h-32 bg-gradient-to-r from-blue-600 to-indigo-700">
              <button 
                className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/40 transition" 
                onClick={() => setSelectedOwner(null)}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="px-10 pb-10">
              <div className="relative -mt-12 flex items-end gap-6 mb-8">
                <div className="h-24 w-24 rounded-[2rem] bg-white p-1 shadow-xl">
                  <div className="h-full w-full rounded-[1.8rem] bg-slate-100 flex items-center justify-center text-3xl font-black text-slate-400 border border-slate-200 uppercase">
                    {selectedOwner.name.charAt(0)}
                  </div>
                </div>
                <div className="pb-2">
                  <h3 className="text-2xl font-black text-slate-900">{selectedOwner.name}</h3>
                  <p className="text-slate-500 font-medium tracking-tight">Propriétaire Partenaire</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Phone size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Téléphone</p>
                      <p className="text-sm font-bold text-slate-700 mt-1">{selectedOwner.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl"><Mail size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email professionnel</p>
                      <p className="text-sm font-bold text-slate-700 mt-1">{selectedOwner.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl"><MapPin size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Localisation</p>
                      <p className="text-sm font-bold text-slate-700 mt-1">{selectedOwner.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl"><Layers size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Patrimoine</p>
                      <p className="text-sm font-bold text-slate-700 mt-1">{selectedOwner.domains} domaines enregistrés</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-black text-sm hover:bg-blue-600 transition shadow-lg shadow-slate-200" onClick={() => setSelectedOwner(null)}>
                  Fermer la fiche
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </VentePageWrapper>
  );
};

export default EtatProprio;
