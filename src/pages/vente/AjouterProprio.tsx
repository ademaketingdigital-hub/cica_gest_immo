import React, { useState } from "react";
import { UserPlus, Camera, FileText, User, Phone, Mail, MapPin, Shield, Save, X } from "lucide-react";
import { VentePageWrapper } from "./VentePageTemplate";

const AjouterProprio: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    idType: "CNI",
    idNumber: "",
    signature: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Propriétaire ajouté avec succès !");
  };

  return (
    <VentePageWrapper
      title="Ajout Propriétaire"
      breadcrumb="Gestion / Nouveau Propriétaire"
      subtitle="Enregistrez un nouveau propriétaire et sécurisez les documents d'identification."
    >
      <div className="grid gap-8 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* FORMULAIRE PRINCIPAL */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-[2.5rem] bg-white border border-slate-100 p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Informations Personnelles</h3>
                  <p className="text-sm text-slate-500 font-medium">Identité complète du nouveau propriétaire</p>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nom complet</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                      placeholder="Ex: Jean Kouassi"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Téléphone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none font-mono"
                        placeholder="+229 00 00 00 00"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                        placeholder="jean@exemple.bj"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Adresse de résidence</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                      placeholder="Commune, Quartier, Repère"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-50">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Type de pièce</label>
                      <div className="relative">
                        <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select
                          value={form.idType}
                          onChange={(e) => setForm({ ...form, idType: e.target.value })}
                          className="w-full pl-12 pr-10 py-4 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold text-slate-700 appearance-none focus:bg-white focus:border-blue-500 transition-all outline-none"
                        >
                          <option>CNI</option>
                          <option>Passeport</option>
                          <option>Permis de conduire</option>
                          <option>Registre de commerce</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Numéro de pièce</label>
                      <input
                        value={form.idNumber}
                        onChange={(e) => setForm({ ...form, idNumber: e.target.value })}
                        className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:border-blue-500 transition-all outline-none font-mono"
                        placeholder="BK-000000"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button type="button" className="flex-1 py-4 rounded-2xl bg-slate-100 text-slate-600 font-black text-sm hover:bg-slate-200 transition">
                  Effacer
                </button>
                <button type="submit" className="flex-[2] py-4 rounded-2xl bg-blue-600 text-white font-black text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                  <Save size={18} /> Enregistrer le Propriétaire
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* SIDEBAR - DOCUMENTS */}
        <div className="space-y-6">
          <div className="rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 text-slate-900 mb-8">
              <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black tracking-tight">Documents</h3>
                <p className="text-xs text-slate-500 font-medium">Justificatifs d'identité</p>
              </div>
            </div>

            <div className="space-y-5">
              <label className="block rounded-3xl border-2 border-dashed border-slate-100 bg-slate-50/50 p-8 text-center text-slate-500 hover:border-blue-300 hover:bg-white transition-all cursor-pointer group">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                  <Camera size={32} />
                </div>
                <p className="font-black text-slate-700 text-sm">Pièce d'identité</p>
                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">PDF, JPG ou PNG (Max 5Mo)</p>
                <input type="file" className="hidden" />
              </label>

              <label className="block rounded-3xl border-2 border-dashed border-slate-100 bg-slate-50/50 p-8 text-center text-slate-500 hover:border-indigo-300 hover:bg-white transition-all cursor-pointer group">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm group-hover:scale-110 transition-transform">
                  <FileText size={32} />
                </div>
                <p className="font-black text-slate-700 text-sm">Signature Numérisée</p>
                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">Optionnel</p>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-xl shadow-slate-200 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-black text-lg tracking-tight mb-2">Conformité</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                Chaque propriétaire doit fournir une pièce valide. Les documents sont cryptés et stockés conformément aux normes de protection des données.
              </p>
            </div>
            <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </VentePageWrapper>
  );
};
            

export default AjouterProprio;
