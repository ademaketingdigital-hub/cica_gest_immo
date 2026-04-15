/**
 * Page Ajout Locataire - Location
 * Formulaire d'ajout de locataire avec assignation maison
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
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Upload, User, Home, CalendarIcon, FileText, CreditCard } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { format } from "date-fns";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3 } from "lucide-react";

const AjoutLocataire: React.FC = () => {
  const navigate = useNavigate();
  const [dateEntree, setDateEntree] = useState<Date | undefined>(new Date());
  const [contratFile, setContratFile] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nomComplet: "",
    telephone: "",
    email: "",
    profession: "",
    pieceId: null as FileList | null,
    maisonId: "",
    loyerMensuel: "",
    caution: "",
    dureeBail: "",
    avanceLoyer: false,
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

  const mockMaisons = [
    { id: "1", nom: "Maison Espoir A1", adresse: "PK8" },
    { id: "2", nom: "Villa Lumière B2", adresse: "Alibandeng" },
    { id: "3", nom: "Appart Centre C3", adresse: "Centre-ville" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      pieceId: e.target.files,
    }));
  };

  const handleContratChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContratFile(e.target.files);
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      avanceLoyer: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const submitData = {
      ...formData,
      dateEntree: dateEntree ? format(dateEntree, 'yyyy-MM-dd') : '',
      pieceId: formData.pieceId ? Array.from(formData.pieceId) : [],
      contratFile: Array.from(contratFile || []),
    };
    
    console.log("Nouveau locataire:", submitData);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate("/location/dashboard");
    }, 2000);
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Ajouter un Locataire"
      breadcrumb="Location / Ajout / Locataire"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <Button variant="outline" onClick={() => navigate("/location/dashboard")} className="gap-2">
          <ArrowLeft size={18} />
          Retour
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <User className="h-7 w-7" />
              Nouveau Locataire
            </CardTitle>
            <CardDescription>
              Informations + assignation maison + contrat
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Informations personnelles */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2 border-b pb-3">
                  <User className="h-5 w-5" />
                  Informations personnelles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nomComplet">Nom complet *</Label>
                    <Input
                      id="nomComplet"
                      name="nomComplet"
                      value={formData.nomComplet}
                      onChange={handleInputChange}
                      placeholder="Martin Koffi"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone *</Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      placeholder="07 89 01 23 45"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="martin@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profession">Profession</Label>
                    <Input
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      placeholder="Enseignant"
                    />
                  </div>
                </div>
              </div>

              {/* Pièce d'identité */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2 border-b pb-3">
                  <FileText className="h-5 w-5" />
                  Pièce d'identité *
                </h3>
                <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-blue-400">
                  <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                  <p className="text-sm text-slate-500 mb-2">Carte d'identité ou passeport</p>
                  <Input
                    id="pieceId"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    required
                  />
                  {formData.pieceId && (
                    <p className="text-green-600 text-sm font-medium mt-4">
                      Fichier sélectionné
                    </p>
                  )}
                </div>
              </div>

              {/* Assignation maison et finances */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2 border-b pb-3 mb-4">
                    <Home className="h-5 w-5" />
                    Maison assignée *
                  </h3>
                  <Select value={formData.maisonId} onValueChange={(value) => setFormData(prev => ({...prev, maisonId: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une maison disponible" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockMaisons.map((maison) => (
                        <SelectItem key={maison.id} value={maison.id}>
                          {maison.nom} - {maison.adresse}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 border-b pb-3">
                    <CreditCard className="h-5 w-5" />
                    Finances
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="loyerMensuel">Loyer mensuel * (FCFA)</Label>
                      <Input
                        id="loyerMensuel"
                        name="loyerMensuel"
                        type="number"
                        value={formData.loyerMensuel}
                        onChange={handleInputChange}
                        placeholder="500000"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="caution">Caution (mois de loyer)</Label>
                      <Input
                        id="caution"
                        name="caution"
                        type="number"
                        value={formData.caution}
                        onChange={handleInputChange}
                        placeholder="1"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dureeBail">Durée du bail (mois)</Label>
                    <Input
                      id="dureeBail"
                      name="dureeBail"
                      type="number"
                      value={formData.dureeBail}
                      onChange={handleInputChange}
                      placeholder="12"
                    />
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-xl">
                    <Switch id="avanceLoyer" checked={formData.avanceLoyer} onCheckedChange={handleSwitchChange} />
                    <Label htmlFor="avanceLoyer" className="font-medium">
                      Loyer d'avance payé
                    </Label>
                  </div>
                  <div className="space-y-2">
                    <Label>Date d'entrée</Label>
                    <div className="border rounded-lg p-3">
                      <Calendar 
                        mode="single" 
                        selected={dateEntree} 
                        onSelect={setDateEntree}
                        className="rounded-md border-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contrat signé */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2 border-b pb-3">
                  <FileText className="h-5 w-5" />
                  Contrat de location signé *
                </h3>
                <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-emerald-400">
                  <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                  <p className="text-sm text-slate-500 mb-2">Upload contrat signé</p>
                  <Input
                    id="contrat"
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleContratChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    required
                  />
                  {contratFile && (
                    <Badge variant="secondary" className="mt-2">
                      Contrat sélectionné
                    </Badge>
                  )}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (visite, état des lieux...)</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Remarques état des lieux, cautions supplémentaires..."
                  rows={3}
                />
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-8 border-t">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 gap-2 h-14"
                  onClick={() => navigate("/location/dashboard")}
                  disabled={isLoading}
                >
                  <ArrowLeft size={20} />
                  Annuler
                </Button>
                <Button
                  type="submit"
                  className="flex-1 gap-2 h-14 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-lg shadow-xl"
                  disabled={isLoading}
                >
                  <Save size={20} />
                  {isLoading ? "Ajout en cours..." : "Ajouter locataire"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AjoutLocataire;
