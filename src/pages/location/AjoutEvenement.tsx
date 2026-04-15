/**
 * Page Ajout d'événement - Location
 * Formulaire déclaration événement du mois
 */
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Upload, Home, AlertTriangle, CalendarIcon, Plus } from "lucide-react";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3 } from "lucide-react";

const AjoutEvenement: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    maisonId: "",
    typeEvenement: "",
    dateEvenement: "",
    description: "",
    montantEstime: "",
    photos: null as FileList | null,
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
    { id: "1", nom: "Maison Espoir A1" },
    { id: "2", nom: "Villa Lumière B2" },
    { id: "3", nom: "Appart Centre C3" },
  ];

  const typesEvenement = [
    "Fuite d'eau",
    "Panne électricité",
    "Réparation serrure",
    "Problème climatisation",
    "Peinture nécessaire",
    "Nettoyage urgent",
    "Sinistre majeur",
    "Autres",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      photos: e.target.files,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("Nouvel événement:", formData);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate("/location/dashboard");
    }, 1500);
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Déclarer un événement"
      breadcrumb="Location / Ajout / Événement"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="outline" onClick={() => navigate("/location/dashboard")} className="gap-2">
          <ArrowLeft size={18} />
          Retour
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-yellow-500" />
              Nouvel événement
            </CardTitle>
            <CardDescription>
              Déclarer incident/maintenance pour validation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Maison */}
              <div className="space-y-2">
                <Label htmlFor="maisonId">Maison concernée *</Label>
                <Select value={formData.maisonId} onValueChange={(value) => handleSelectChange('maisonId', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner maison" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockMaisons.map((maison) => (
                      <SelectItem key={maison.id} value={maison.id}>
                        {maison.nom}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Type événement */}
              <div className="space-y-2">
                <Label htmlFor="typeEvenement">Type d'événement *</Label>
                <Select value={formData.typeEvenement} onValueChange={(value) => handleSelectChange('typeEvenement', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir type" />
                  </SelectTrigger>
                  <SelectContent>
                    {typesEvenement.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label>Date de l'événement *</Label>
                <Input
                  id="dateEvenement"
                  name="dateEvenement"
                  type="date"
                  value={formData.dateEvenement}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description détaillée *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Décrivez précisément le problème (localisation dans la maison, circonstances, dommages observés...)"
                  rows={6}
                  required
                />
              </div>

              {/* Montant estimé */}
              <div className="space-y-2">
                <Label htmlFor="montantEstime">Montant estimé (FCFA)</Label>
                <Input
                  id="montantEstime"
                  name="montantEstime"
                  type="number"
                  value={formData.montantEstime}
                  onChange={handleInputChange}
                  placeholder="150000"
                />
              </div>

              {/* Photos */}
              <div className="space-y-4">
                <Label>Photos du problème (recommandé)</Label>
                <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-yellow-400">
                  <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                  <p className="text-sm text-slate-500 mb-2">Photos avant/après ou du problème</p>
                  <Input
                    id="photos"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotosChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {formData.photos && (
                    <Badge variant="secondary" className="mt-4">
                      {formData.photos.length} photo(s)
                    </Badge>
                  )}
                </div>
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
                  className="flex-1 gap-2 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-lg shadow-xl"
                  disabled={isLoading}
                >
                  <Save size={20} />
                  {isLoading ? "Déclaration..." : "Déclarer l'événement"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AjoutEvenement;
