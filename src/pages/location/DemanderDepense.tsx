/**
 * Page Demander une dépense - Location
 * Formulaire demande de dépense (réparation etc.)
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
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save, Upload, Home, DollarSign, FileText, AlertTriangle } from "lucide-react";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3 } from "lucide-react";

const DemanderDepense: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [justificatifs, setJustificatifs] = useState<FileList | null>(null);
  const [formData, setFormData] = useState({
    maisonId: "",
    montantEstime: "",
    description: "",
    typeDepense: "",
    urgence: false,
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

  const typesDepense = [
    "Réparation plomberie",
    "Réparation électricité",
    "Peinture/Rénovation",
    "Serrurerie",
    "Climatisation",
    "Nettoyage",
    "Autres maintenance",
  ];

  const mockMaisons = [
    { id: "1", nom: "Maison Espoir A1" },
    { id: "2", nom: "Villa Lumière B2" },
    { id: "3", nom: "Appart Centre C3" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJustificatifs(e.target.files);
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSwitchUrgence = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      urgence: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const submitData = {
      ...formData,
      justificatifs: Array.from(justificatifs || []),
    };
    console.log("Demande dépense:", submitData);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate("/location/dashboard");
    }, 1500);
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Demander une dépense"
      breadcrumb="Location / Ajout / Demander dépense"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="outline" onClick={() => navigate("/location/dashboard")} className="gap-2">
          <ArrowLeft size={18} />
          Retour
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-orange-500" />
              Demande de dépense
            </CardTitle>
            <CardDescription>
              Créer demande pour réparation/maintenance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Maison concernée */}
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

              {/* Type dépense */}
              <div className="space-y-2">
                <Label htmlFor="typeDepense">Nature de la dépense *</Label>
                <Select value={formData.typeDepense} onValueChange={(value) => handleSelectChange('typeDepense', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner type" />
                  </SelectTrigger>
                  <SelectContent>
                    {typesDepense.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase().replace(/ /g, '-')}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Montant estimé */}
              <div className="space-y-2">
                <Label htmlFor="montantEstime">Montant estimé (FCFA) *</Label>
                <Input
                  id="montantEstime"
                  name="montantEstime"
                  type="number"
                  value={formData.montantEstime}
                  onChange={handleInputChange}
                  placeholder="150000"
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
                  placeholder="Détails du problème, localisation dans la maison, photos si possible..."
                  rows={5}
                  required
                />
              </div>

              {/* Urgence */}
              <div className="flex items-center space-x-3 p-4 bg-orange-50 border border-orange-200 rounded-xl">
                <Switch id="urgence" checked={formData.urgence} onCheckedChange={handleSwitchUrgence} />
                <div>
                  <Label htmlFor="urgence" className="font-semibold text-orange-800">
                    URGENCE
                  </Label>
                  <p className="text-sm text-orange-700">Traitement prioritaire (48h)</p>
                </div>
              </div>

              {/* Justificatifs */}
              <div className="space-y-4">
                <Label>Justificatifs (facultatif)</Label>
                <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                  <p className="text-sm text-slate-500 mb-2">Photos du problème / Devis</p>
                  <Input
                    id="justificatifs"
                    type="file"
                    accept="image/*,.pdf"
                    multiple
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {justificatifs && (
                    <Badge variant="secondary" className="mt-4">
                      {justificatifs.length} fichier(s)
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
                  className="flex-1 gap-2 h-14 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg shadow-xl"
                  disabled={isLoading}
                >
                  <Save size={20} />
                  {isLoading ? "Soumission..." : "Envoyer demande"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DemanderDepense;
