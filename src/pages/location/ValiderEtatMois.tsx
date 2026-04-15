/**
 * Page Valider état du mois - Location
 * Validation finale de l'état mensuel d'une maison
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { ArrowLeft, CheckCircle, FileText, DollarSign, Wallet } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3 } from "lucide-react";
import { DialogTrigger } from "@radix-ui/react-dialog";

interface EtatMois {
  maison: string;
  mois: string;
  recettes: number;
  depenses: number;
  solde: number;
  commission: number;
  aVerserProprio: number;
  statut: 'brouillon' | 'valide';
}

const ValiderEtatMois: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMaison, setSelectedMaison] = useState("");

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

  // Mock data pour maison sélectionnée
  const mockEtats: EtatMois[] = [
    {
      maison: "Maison Espoir A1",
      mois: "Juin 2024",
      recettes: 500000,
      depenses: 120000,
      solde: 380000,
      commission: 57000,
      aVerserProprio: 323000,
      statut: 'brouillon',
    },
    {
      maison: "Villa Lumière B2",
      mois: "Juin 2024",
      recettes: 750000,
      depenses: 200000,
      solde: 550000,
      commission: 82500,
      aVerserProprio: 467500,
      statut: 'valide',
    },
  ];

  const currentEtat = mockEtats.find(e => e.maison === selectedMaison) || mockEtats[0];

  const handleValider = () => {
    // TODO: API validation
    console.log('Valider état mois', currentEtat);
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Valider état du mois"
      breadcrumb="Location / Diligences / Valider état mois"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Validation état mensuel</h1>
            <p className="text-slate-500 mt-2">Récapitulatif final avant validation</p>
          </div>
          <Button onClick={() => navigate("/location/dashboard")} variant="outline" className="gap-2">
            <ArrowLeft size={18} />
            Retour
          </Button>
        </div>

        {/* Sélection maison */}
        <Card>
          <CardHeader>
            <CardTitle>Sélectionner une maison</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedMaison} onValueChange={setSelectedMaison}>
              <SelectTrigger>
                <SelectValue placeholder="Choisir une maison" />
              </SelectTrigger>
              <SelectContent>
                {mockEtats.map((etat) => (
                  <SelectItem key={etat.maison} value={etat.maison}>
                    {etat.maison} - {etat.mois}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {currentEtat && (
          <>
            {/* Récapitulatif KPI */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Recettes</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    {currentEtat.recettes.toLocaleString()} FCFA
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Dépenses</CardTitle>
                  <Wallet className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">
                    {currentEtat.depenses.toLocaleString()} FCFA
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Solde</CardTitle>
                  <DollarSign className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">
                    {currentEtat.solde.toLocaleString()} FCFA
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">À verser proprio</CardTitle>
                  <DollarSign className="h-4 w-4 text-indigo-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-indigo-600">
                    {currentEtat.aVerserProprio.toLocaleString()} FCFA
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Détails complets */}
            <Card>
              <CardHeader>
                <CardTitle>Récapitulatif {currentEtat.mois} - {currentEtat.maison}</CardTitle>
                <CardDescription>Validation finale avant clôture</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Informations générales</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Mois:</span>
                        <span className="font-mono">{currentEtat.mois}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Commission gestionnaire:</span>
                        <span className="font-mono">{currentEtat.commission.toLocaleString()} FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Statut actuel:</span>
                        <Badge variant={currentEtat.statut === 'valide' ? "default" : "secondary"}>
                          {currentEtat.statut === 'valide' ? 'Validé' : 'Brouillon'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bouton validation finale */}
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-lg h-14 shadow-xl">
                  <CheckCircle className="mr-3 h-6 w-6" />
                  ✅ Valider l'état du mois
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Confirmation validation</DialogTitle>
                  <DialogDescription>
                    Cette action finalise l'état mensuel pour <strong>{currentEtat.maison}</strong>. 
                    Le propriétaire sera notifié et la commission calculée.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>Montant à verser: <strong>{currentEtat.aVerserProprio.toLocaleString()} FCFA</strong></p>
                    <p>Commission: <strong>{currentEtat.commission.toLocaleString()} FCFA</strong></p>
                  </div>
                  <div>
                    <p>Solde caisse: <strong>{currentEtat.solde.toLocaleString()} FCFA</strong></p>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline">Annuler</Button>
                  <Button onClick={handleValider} className="bg-green-600 hover:bg-green-700">
                    <FileText className="mr-2 h-4 w-4" />
                    Valider définitivement
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        )}

        {(!currentEtat || currentEtat.statut === 'valide') && (
          <Card>
            <CardContent className="text-center py-12">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Aucun état à valider</h3>
              <p className="text-slate-500">Sélectionnez une maison ou revenez plus tard.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ValiderEtatMois;

