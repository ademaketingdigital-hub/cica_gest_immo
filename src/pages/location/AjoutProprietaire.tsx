/**
 * Page Ajout Propriétaire - Location
 * Formulaire détaillé pour nouveau propriétaire
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Upload, User, Smartphone, Mail, MapPin, Banknote, FileText, LayoutDashboard, FileCheck, PlusCircle, BarChart3, ShieldCheck, Info, Landmark, CheckCircle2, Camera } from "lucide-react";

const AjoutProprietaire: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nomComplet: "",
    telephone: "",
    email: "",
    adresse: "",
    pieceIdentite: null as FileList | null,
    rib: "",
    banque: "",
    titulaireCompte: "",
    notes: "",
  });

  const sidebarItems = [
    { label: "Tableau de Bord", href: "/location/dashboard", icon: <LayoutDashboard size={20}/> },
    {
      label: "Diligence",
      href: "#",
      icon: <FileCheck size={20} />,
      children: [
        { label: "Validation d'événement", href: "/location/validation-evenement" },
        { label: "Confirmer une dépense", href: "/location/confirmer-depense" },
        { label: "Valider état du mois", href: "/location/valider-etat-mois" },
        { label: "Clôture mensuel", href: "/location/cloture-mensuel" },
      ]
    },
    {
      label: "Ajout",
      href: "#",
      icon: <PlusCircle size={20} />,
      children: [
        { label: "Propriétaire", href: "/location/ajout-proprietaire" },
        { label: "Maison", href: "/location/ajout-maison" },
        { label: "Locataire", href: "/location/ajout-locataire" },
        { label: "Demander une dépense", href: "/location/demander-depense" },
        { label: "Ajout d'événement", href: "/location/ajout-evenement" },
      ]
    },
    {
      label: "Consulter états",
      href: "#",
      icon: <BarChart3 size={20} />,
      children: [
        { label: "Info par maison", href: "/location/info-maison" },
        { label: "Situation caisse", href: "/location/situation-caisse" },
        { label: "Etat des recettes", href: "/location/etat-recettes" },
        { label: "Etat paye propriétaire", href: "/location/etat-paye-proprietaire" },
        { label: "Etat Caution", href: "/location/etat-caution" },
        { label: "Etat Impayé", href: "/location/etat-impaye" },
        { label: "Etat avance", href: "/location/etat-avance" },
        { label: "Etat dépense", href: "/location/etat-depense" },
        { label: "Rapport périodique", href: "/location/rapport-periodique" },
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Specific handler for file input
    setFormData((prev) => ({
      ...prev,
      pieceIdentite: e.target.files,
    }));
  };

  const handleSelectChange = (name: keyof typeof formData, value: string) => { // Generic handler for Select components
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock submit
    console.log("Nouveau propriétaire:", formData);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate("/location/dashboard");
    }, 1500); // Consistent with AjoutEvenement.tsx
  };

  const banques = ["BGFIBank", "BICIG", "BIDC", "CICG", "Coris Bank", "UBA", "Ecobank"];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Ajouter un Propriétaire"
      breadcrumb="Location / Ajout / Propriétaire"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        aside::-webkit-scrollbar, 
        .sidebar::-webkit-scrollbar, 
        [data-sidebar]::-webkit-scrollbar {
          display: none !important;
        }
        aside, .sidebar, [data-sidebar] {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />

      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-10">
        
        {/* Header de la page */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Fiche Propriétaire</h2>
            <p className="text-sm text-slate-500 font-medium">Enregistrez les coordonnées et les informations de paiement.</p>
          </div>
        <Button
            variant="ghost"
          onClick={() => navigate("/location/dashboard")}
            className="w-fit rounded-xl hover:bg-slate-100 text-slate-500 font-bold text-xs uppercase tracking-widest gap-2"
        >
            <ArrowLeft size={16} /> Retour
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne Gauche: Formulaire principal */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="rounded-[2rem] border-slate-100 shadow-xl shadow-slate-200/40 p-2 overflow-hidden">
              <div className="p-6 md:p-8 space-y-8">
                
                {/* Section 1: Identité */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <User size={20} />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-[0.15em] text-slate-400">Identité Civile</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Nom Complet *</Label>
                      {/* Input styling applied */}
                    <Input
                      id="nomComplet"
                      name="nomComplet"
                      value={formData.nomComplet}
                      onChange={handleInputChange}
                        className="rounded-xl border-slate-100 bg-slate-50/50 py-6 font-bold focus:bg-white transition-all"
                        placeholder="ex: FADONOUGBO Rodolphe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                      <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Téléphone mobile *</Label>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        {/* Input styling applied */}
                        <Input
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleInputChange}
                          className="pl-10 rounded-xl border-slate-100 bg-slate-50/50 py-6 font-bold focus:bg-white"
                          placeholder="+229 01 00 00 00 00"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Adresse Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      {/* Input styling applied */}
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 rounded-xl border-slate-100 bg-slate-50/50 py-6 font-bold focus:bg-white"
                        placeholder="proprietaire@domaine.bj"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Adresse de résidence</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-4 text-slate-300" size={18} />
                      {/* Textarea styling applied */}
                      <Textarea
                        name="adresse"
                        value={formData.adresse}
                        onChange={handleInputChange}
                        className="pl-10 rounded-xl border-slate-100 bg-slate-50/50 py-3 font-bold focus:bg-white min-h-[100px]"
                        placeholder="Quartier, Rue, Ville..."
                      />
                    </div>
                  </div>
                </section>

                {/* Section 2: Banque */}
                <section className="space-y-6 pt-4">
                  <div className="flex items-center gap-3 border-t border-slate-50 pt-8">
                    <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Landmark size={20} />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-[0.15em] text-slate-400">Détails de Paiement</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Institution Bancaire *</Label>
                      {/* Select styling applied */}
                      <Select value={formData.banque} onValueChange={(v) => handleSelectChange('banque', v)}>
                        <SelectTrigger className="rounded-xl border-slate-100 bg-slate-50/50 py-6 font-bold focus:bg-white">
                          <SelectValue placeholder="Choisir une banque" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-100 shadow-2xl">
                          {banques.map((bank) => (
                            <SelectItem key={bank} value={bank}>{bank}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Titulaire du compte</Label>
                      {/* Input styling applied */}
                      <Input
                        name="titulaireCompte"
                        value={formData.titulaireCompte}
                        onChange={handleInputChange}
                        className="rounded-xl border-slate-100 bg-slate-50/50 py-6 font-bold focus:bg-white"
                        placeholder="Identique au nom complet ?"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">RIB / Numéro de compte *</Label>
                    <div className="relative">
                      <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      {/* Input styling applied */}
                      <Input
                        name="rib"
                        value={formData.rib}
                        onChange={handleInputChange}
                        className="pl-10 rounded-xl border-slate-100 bg-slate-50/50 py-6 font-mono font-bold text-slate-700 tracking-wider focus:bg-white"
                        placeholder="0000 0000 0000 0000 0000"
                        required
                      />
                    </div>
                  </div>
                </section>
              </div>
            </Card>

            {/* "Sécurité des données" Banner */}
            <div className="flex items-center justify-between p-6 bg-slate-900 rounded-3xl text-white shadow-xl shadow-slate-200">
               <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest">Sécurité des données</p>
                    <p className="text-[10px] opacity-60">Informations confidentielles cryptées.</p>
                  </div>
               </div>
               <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl px-8 h-12 font-black uppercase tracking-[0.1em] transition-all active:scale-95"
                >
                  {isLoading ? "Enregistrement..." : "Enregistrer"}
                </Button>
            </div>
          </div>

          {/* Colonne Droite: Upload & Notes */}
          <div className="space-y-6">
            <Card className="rounded-[2rem] border-slate-100 p-8 space-y-6">
              <div className="flex items-center gap-2">
                 <FileText className="text-indigo-600" size={20} />
                 <h3 className="font-black text-slate-900 tracking-tight">Documents</h3>
              </div>

              {/* Pièce d'identité Upload */}
              <Label htmlFor="pieceIdentite" className="group block cursor-pointer">
                <div className="border-2 border-dashed border-slate-100 bg-slate-50/50 rounded-3xl p-8 text-center transition-all group-hover:border-indigo-400 group-hover:bg-indigo-50/30">
                  <div className="mx-auto h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600 mb-3 group-hover:-translate-y-1 transition-transform">
                    <Camera size={24} /> {/* Changed to Camera icon for ID */}
                  </div>
                  <p className="font-black text-slate-700 text-sm">Pièce d'identité</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase">Recto / Verso</p>
                  <Input
                    id="pieceIdentite"
                    name="pieceIdentite"
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={handleFileChange}
                    required
                  />
                  {formData.pieceIdentite && formData.pieceIdentite.length > 0 && (
                    <div className="mt-4 flex items-center justify-center gap-2 text-emerald-600 bg-white py-1.5 px-3 rounded-lg border border-emerald-100 animate-in zoom-in-95">
                      <CheckCircle2 size={14} />
                      <span className="text-[10px] font-black uppercase">Document prêt</span>
                    </div>
                  )}
                </div>
              </Label>

              {/* Notes */}
              <div className="space-y-2">
                <Label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Observations</Label>
                <Textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="rounded-2xl border-slate-100 bg-slate-50/50 p-4 font-bold text-sm focus:bg-white min-h-[120px]"
                  placeholder="Notes internes..."
                />
              </div>

              {/* IBAN/RIB Info Banner */}
              <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-2xl flex gap-3">
                <Info size={18} className="text-blue-600 shrink-0" />
                <p className="text-[10px] font-bold text-blue-700/80 leading-relaxed">
                  L'IBAN et le RIB doivent être vérifiés avant le premier virement de loyer.
                </p>
              </div>
            </Card>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AjoutProprietaire;
