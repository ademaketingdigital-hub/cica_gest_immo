/**
 * Page Ajout Maison - Location
 * Formulaire détaillé pour nouvelle maison/appartement
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
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Upload, Home, MapPin, Ruler, Bed, Image as ImageIcon, FileText, User } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3 } from "lucide-react";

const AjoutMaison: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState<FileList | null>(null);
  const [documents, setDocuments] = useState<FileList | null>(null);
  const [formData, setFormData] = useState({
    adresse: "",
    type: "",
    nbPieces: "",
    superficie: "",
    loyerMensuel: "",
    proprioId: "",
    meublee: false,
    description: "",
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

  const typesMaison = [
    "Studio",
    "Chambre salon", 
    "Appartement F2",
    "Appartement F3",
    "Appartement F4",
    "Boutique",
    "Résidence meublée",
    "Villa",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      meublee: checked,
    }));
  };

  const handlePhotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotos(e.target.files);
  };

  const handleDocumentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocuments(e.target.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock
    const submitData = { ...formData, photos: Array.from(photos || []), documents: Array.from(documents || []) };
    console.log("Nouvelle maison:", submitData);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate("/location/dashboard");
    }, 2000);
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Ajouter une Maison"
      breadcrumb="Location / Ajout / Maison"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <Button variant="outline" onClick={() => navigate("/location/dashboard")} className="gap-2">
          <ArrowLeft size={18} />
          Retour
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Home className="h-7 w-7" />
              Nouvelle Immobilier
            </CardTitle>
            <CardDescription>
              Caractéristiques complètes + documents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Localisation */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2 border-b pb-3">
                  <MapPin className="h-5 w-5" />
                  Localisation
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="adresse">Adresse complète *</Label>
                    <Textarea
                      id="adresse"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleInputChange}
                      placeholder="Quartier Alibandeng, Avenue principale n°45, Libreville..."
                      rows={2}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Caractéristiques */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 border-b pb-3">
                    <Ruler className="h-5 w-5" />
                    Caractéristiques
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="type">Type *</Label>
                      <Select value={formData.type} onValueChange={(value) => handleSelectChange('type', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner type" />
                        </SelectTrigger>
                        <SelectContent>
                          {typesMaison.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(/ /g, '-')}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nbPieces">Nombre de pièces</Label>
                      <Input
                        id="nbPieces"
                        name="nbPieces"
                        type="number"
                        value={formData.nbPieces}
                        onChange={handleInputChange}
                        placeholder="3"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="superficie">Superficie (m²)</Label>
                      <Input
                        id="superficie"
                        name="superficie"
                        type="number"
                        value={formData.superficie}
                        onChange={handleInputChange}
                        placeholder="120"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loyerMensuel">Loyer mensuel (FCFA) *</Label>
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
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl">
                    <Switch id="meublee" checked={formData.meublee} onCheckedChange={handleSwitchChange} />
                    <Label htmlFor="meublee" className="font-medium">
                      Meublée
                    </Label>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 border-b pb-3">
                    <User className="h-5 w-5" />
                    Propriétaire assigné
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="proprioId">Sélectionner propriétaire</Label>
                    <Select value={formData.proprioId} onValueChange={(value) => handleSelectChange('proprioId', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir un propriétaire existant" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="prop1">Jean Dupont (2 maisons)</SelectItem>
                        <SelectItem value="prop2">Marie Durand (1 maison)</SelectItem>
                        <SelectItem value="prop3">Paul Martin (0 maison)</SelectItem>
                        <SelectItem value="new">➕ Nouveau propriétaire</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description détaillée</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="État général, équipements, particularités..."
                  rows={4}
                />
              </div>

              {/* Photos et documents */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <Label>Photos (max 10)</Label>
                  <div className="relative border-2 border-dashed rounded-xl p-8 mt-2 text-center hover:border-indigo-400 transition-all">
                    <ImageIcon className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                    <p className="text-sm text-slate-500 mb-2">Jusqu'à 10 photos</p>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handlePhotosChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {photos && (
                      <Badge variant="secondary" className="mt-2">
                        {photos.length} fichier(s) sélectionné(s)
                      </Badge>
                    )}
                  </div>
                </div>
                <div>
                  <Label>Documents (contrat, état des lieux)</Label>
                  <div className="relative border-2 border-dashed rounded-xl p-8 mt-2 text-center hover:border-green-400 transition-all">
                    <FileText className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                    <p className="text-sm text-slate-500 mb-2">Contrat, état des lieux, diagnostics</p>
                    <Input
                      type="file"
                      accept=".pdf,.docx,image/*"
                      multiple
                      onChange={handleDocumentsChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {documents && (
                      <Badge variant="secondary" className="mt-2">
                        {documents.length} document(s)
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Notes internes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="À faire avant location, points d'attention..."
                  rows={3}
                />
              </div>

              {/* Submit */}
              <div className="flex gap-4 pt-8 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/location/dashboard")}
                  className="flex-1 gap-2 h-12"
                  disabled={isLoading}
                >
                  <ArrowLeft size={18} />
                  Annuler
                </Button>
                <Button
                  type="submit"
                  className="flex-1 gap-2 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-lg shadow-xl"
                  disabled={isLoading}
                >
                  <Save size={18} />
                  {isLoading ? "Ajout en cours..." : "Ajouter la maison"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AjoutMaison;
