/**
 * Page Info par maison - Location (ARCHITECTURE MULTI-UNITÉS)
 * Fiche détaillée d'une maison avec ses unités locatives
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3, Home, Users, DollarSign, FileText, Bed, Bath, Car, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const InfoMaison: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMaison, setSelectedMaison] = useState("1");
  const [selectedUnite, setSelectedUnite] = useState<string | null>(null);

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
        { label: "Unité locative", href: "/location/ajout-unite-locative" },
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

  // Données mockées avec architecture multi-unités
  const mockMaisons = [
    {
      id: "1",
      nom: "Villa Espoir A1",
      adresse: "PK8, Libreville",
      quartier: "PK8",
      superficieTotale: 250,
      nombreEtages: 2,
      nombreUnites: 5,
      proprietaire: "M. Dupont Jean",
      statut: "active"
    },
    {
      id: "2",
      nom: "Résidence Soleil",
      adresse: "Alibandeng, Libreville",
      quartier: "Alibandeng",
      superficieTotale: 180,
      nombreEtages: 1,
      nombreUnites: 3,
      proprietaire: "Mme. Martin Sophie",
      statut: "active"
    }
  ];

  // Unités locatives par maison
  const unitesLocatives = {
    "1": [ // Villa Espoir A1
      {
        id: "1-101",
        numero: "101",
        designation: "Chambre climatisée vue jardin",
        type: "chambre_simple",
        categorie: "standard",
        surface: 20,
        etage: 1,
        loyerBase: 80000,
        chargesMensuelles: 12000,
        statut: "occupee",
        meubles: true,
        climatisation: true,
        parking: false,
        balcon: false,
        cuisinePrivee: false,
        salleDeBainPrivee: true,
        locataire: "Jean Sossa",
        dateEntree: "2024-01-01",
        dateFinContrat: "2025-12-31"
      },
      {
        id: "1-102",
        numero: "102",
        designation: "Chambre double avec balcon",
        type: "chambre_double",
        categorie: "premium",
        surface: 35,
        etage: 1,
        loyerBase: 120000,
        chargesMensuelles: 15000,
        statut: "occupee",
        meubles: true,
        climatisation: true,
        parking: true,
        balcon: true,
        cuisinePrivee: false,
        salleDeBainPrivee: true,
        locataire: "Marie Martin",
        dateEntree: "2024-02-01",
        dateFinContrat: "2025-01-31"
      },
      {
        id: "1-103",
        numero: "103",
        designation: "Chambre simple économique",
        type: "chambre_simple",
        categorie: "economique",
        surface: 18,
        etage: 1,
        loyerBase: 60000,
        chargesMensuelles: 10000,
        statut: "disponible",
        meubles: false,
        climatisation: false,
        parking: false,
        balcon: false,
        cuisinePrivee: false,
        salleDeBainPrivee: true,
        locataire: null,
        dateEntree: null,
        dateFinContrat: null
      },
      {
        id: "1-201",
        numero: "201",
        designation: "Studio meublé indépendant",
        type: "studio",
        categorie: "standard",
        surface: 28,
        etage: 2,
        loyerBase: 95000,
        chargesMensuelles: 13000,
        statut: "occupee",
        meubles: true,
        climatisation: false,
        parking: true,
        balcon: true,
        cuisinePrivee: true,
        salleDeBainPrivee: true,
        locataire: "Paul Dubois",
        dateEntree: "2024-03-01",
        dateFinContrat: "2024-08-31"
      },
      {
        id: "1-202",
        numero: "202-203",
        designation: "Duplex familial 2 étages",
        type: "duplex",
        categorie: "premium",
        surface: 65,
        etage: 2,
        loyerBase: 180000,
        chargesMensuelles: 20000,
        statut: "maintenance",
        motifMaintenance: "Rénovation salle de bain",
        meubles: true,
        climatisation: true,
        parking: true,
        balcon: true,
        cuisinePrivee: true,
        salleDeBainPrivee: true,
        locataire: null,
        dateEntree: null,
        dateFinContrat: null
      }
    ],
    "2": [ // Résidence Soleil
      {
        id: "2-101",
        numero: "101",
        designation: "Appartement F2 centre-ville",
        type: "appartement_2ch",
        categorie: "premium",
        surface: 65,
        etage: 1,
        loyerBase: 150000,
        chargesMensuelles: 18000,
        statut: "occupee",
        meubles: true,
        climatisation: true,
        parking: true,
        balcon: true,
        cuisinePrivee: true,
        salleDeBainPrivee: true,
        locataire: "Alice Bernard",
        dateEntree: "2023-09-01",
        dateFinContrat: "2025-08-31"
      },
      {
        id: "2-102",
        numero: "102",
        designation: "Studio moderne",
        type: "studio",
        categorie: "standard",
        surface: 30,
        etage: 1,
        loyerBase: 85000,
        chargesMensuelles: 12000,
        statut: "disponible",
        meubles: true,
        climatisation: true,
        parking: false,
        balcon: false,
        cuisinePrivee: true,
        salleDeBainPrivee: true,
        locataire: null,
        dateEntree: null,
        dateFinContrat: null
      }
    ]
  };

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case "occupee":
        return <Badge className="bg-green-100 text-green-800">Occupée</Badge>;
      case "disponible":
        return <Badge className="bg-blue-100 text-blue-800">Disponible</Badge>;
      case "maintenance":
        return <Badge className="bg-orange-100 text-orange-800">Maintenance</Badge>;
      case "reserve":
        return <Badge className="bg-yellow-100 text-yellow-800">Réservée</Badge>;
      default:
        return <Badge variant="secondary">{statut}</Badge>;
    }
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      "chambre_simple": "Chambre simple",
      "chambre_double": "Chambre double",
      "studio": "Studio",
      "appartement_1ch": "Appartement 1ch",
      "appartement_2ch": "Appartement 2ch",
      "appartement_3ch": "Appartement 3ch",
      "duplex": "Duplex",
      "penthouse": "Penthouse"
    };
    return labels[type] || type;
  };

  const currentMaison = mockMaisons.find(m => m.id === selectedMaison);
  const unitesMaison = unitesLocatives[selectedMaison as keyof typeof unitesLocatives] || [];

  // Statistiques de la maison
  const statsMaison = {
    totalUnites: unitesMaison.length,
    unitesOccupees: unitesMaison.filter(u => u.statut === "occupee").length,
    unitesDisponibles: unitesMaison.filter(u => u.statut === "disponible").length,
    unitesMaintenance: unitesMaison.filter(u => u.statut === "maintenance").length,
    tauxOccupation: Math.round((unitesMaison.filter(u => u.statut === "occupee").length / unitesMaison.length) * 100),
    revenusTotaux: unitesMaison.filter(u => u.statut === "occupee").reduce((sum, u) => sum + u.loyerBase + u.chargesMensuelles, 0),
    loyerMoyen: unitesMaison.filter(u => u.statut === "occupee").length > 0
      ? Math.round(unitesMaison.filter(u => u.statut === "occupee").reduce((sum, u) => sum + u.loyerBase, 0) / unitesMaison.filter(u => u.statut === "occupee").length)
      : 0
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Info par maison"
      breadcrumb="Location / Consulter états / Info par maison"
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Gestion des maisons et unités locatives</h2>
            <p className="text-sm text-slate-500">Informations détaillées par maison et suivi des unités</p>
          </div>
        </div>

        {/* Sélection de la maison */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home size={20} />
              Sélectionner une maison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockMaisons.map((maison) => (
                <div
                  key={maison.id}
                  onClick={() => {
                    setSelectedMaison(maison.id);
                    setSelectedUnite(null);
                  }}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                    selectedMaison === maison.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{maison.nom}</p>
                      <p className="text-sm text-slate-500">{maison.adresse}</p>
                      <p className="text-xs text-slate-400 mt-2">
                        {maison.nombreUnites} unités • {maison.superficieTotale}m² • {maison.nombreEtages} étage{maison.nombreEtages > 1 ? 's' : ''}
                      </p>
                    </div>
                    <Badge variant="outline">{maison.statut}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {currentMaison && (
          <>
            {/* Statistiques de la maison */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Total unités</p>
                      <p className="text-2xl font-bold">{statsMaison.totalUnites}</p>
                    </div>
                    <Home className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Taux occupation</p>
                      <p className="text-2xl font-bold text-green-600">{statsMaison.tauxOccupation}%</p>
                    </div>
                    <Users className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Revenus mensuels</p>
                      <p className="text-2xl font-bold text-indigo-600">{statsMaison.revenusTotaux.toLocaleString()} FCFA</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-indigo-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Loyer moyen</p>
                      <p className="text-2xl font-bold text-purple-600">{statsMaison.loyerMoyen.toLocaleString()} FCFA</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Liste des unités locatives */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bed size={20} />
                  Unités locatives - {currentMaison.nom}
                </CardTitle>
                <CardDescription>
                  {statsMaison.unitesOccupees} occupée{statsMaison.unitesOccupees > 1 ? 's' : ''} •
                  {statsMaison.unitesDisponibles} disponible{statsMaison.unitesDisponibles > 1 ? 's' : ''} •
                  {statsMaison.unitesMaintenance} en maintenance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {unitesMaison.map((unite) => (
                    <div
                      key={unite.id}
                      onClick={() => setSelectedUnite(unite.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                        selectedUnite === unite.id
                          ? "border-indigo-500 bg-indigo-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-semibold text-lg">{unite.numero}</p>
                          <p className="text-sm text-slate-600">{getTypeLabel(unite.type)}</p>
                        </div>
                        {getStatusBadge(unite.statut)}
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm text-slate-600 line-clamp-2">{unite.designation}</p>

                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Home size={12} />
                            {unite.surface}m²
                          </span>
                          <span>Étage {unite.etage}</span>
                        </div>

                        <div className="flex items-center gap-2 text-xs">
                          {unite.climatisation && <Zap size={12} className="text-blue-500" />}
                          {unite.meubles && <Bed size={12} className="text-green-500" />}
                          {unite.parking && <Car size={12} className="text-purple-500" />}
                          {unite.balcon && <span className="text-orange-500">🌅</span>}
                        </div>

                        {unite.locataire ? (
                          <div className="mt-3 pt-3 border-t">
                            <p className="text-sm font-medium text-slate-900">{unite.locataire}</p>
                            <p className="text-xs text-slate-500">
                              Depuis le {new Date(unite.dateEntree!).toLocaleDateString('fr-FR')}
                            </p>
                            <p className="text-sm font-bold text-indigo-600 mt-1">
                              {(unite.loyerBase + unite.chargesMensuelles).toLocaleString()} FCFA/mois
                            </p>
                          </div>
                        ) : (
                          <div className="mt-3 pt-3 border-t">
                            <p className="text-sm font-bold text-green-600">
                              {(unite.loyerBase + unite.chargesMensuelles).toLocaleString()} FCFA/mois
                            </p>
                            <p className="text-xs text-slate-500">Disponible à la location</p>
                          </div>
                        )}

                        {unite.statut === "maintenance" && unite.motifMaintenance && (
                          <div className="mt-2 p-2 bg-orange-50 rounded text-xs text-orange-700">
                            {unite.motifMaintenance}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Détails de l'unité sélectionnée */}
            {selectedUnite && (
              <Card>
                <CardHeader>
                  <CardTitle>Détails de l'unité {selectedUnite.split('-')[1]}</CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const unite = unitesMaison.find(u => u.id === selectedUnite);
                    if (!unite) return null;

                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Caractéristiques</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-slate-600">Type</p>
                                <p className="font-medium">{getTypeLabel(unite.type)}</p>
                              </div>
                              <div>
                                <p className="text-slate-600">Surface</p>
                                <p className="font-medium">{unite.surface} m²</p>
                              </div>
                              <div>
                                <p className="text-slate-600">Étage</p>
                                <p className="font-medium">{unite.etage}</p>
                              </div>
                              <div>
                                <p className="text-slate-600">Catégorie</p>
                                <p className="font-medium capitalize">{unite.categorie}</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Équipements</h4>
                            <div className="flex flex-wrap gap-2">
                              {unite.meubles && <Badge variant="outline">Meublé</Badge>}
                              {unite.climatisation && <Badge variant="outline">Climatisé</Badge>}
                              {unite.parking && <Badge variant="outline">Parking</Badge>}
                              {unite.balcon && <Badge variant="outline">Balcon</Badge>}
                              {unite.cuisinePrivee && <Badge variant="outline">Cuisine privative</Badge>}
                              {unite.salleDeBainPrivee && <Badge variant="outline">Sdb privative</Badge>}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Tarification</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>Loyer de base</span>
                                <span>{unite.loyerBase.toLocaleString()} FCFA</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Charges mensuelles</span>
                                <span>{unite.chargesMensuelles.toLocaleString()} FCFA</span>
                              </div>
                              <div className="flex justify-between font-semibold border-t pt-2">
                                <span>Total mensuel</span>
                                <span>{(unite.loyerBase + unite.chargesMensuelles).toLocaleString()} FCFA</span>
                              </div>
                            </div>
                          </div>

                          {unite.locataire && (
                            <div>
                              <h4 className="font-semibold mb-2">Location actuelle</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span>Locataire</span>
                                  <span className="font-medium">{unite.locataire}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Date d'entrée</span>
                                  <span>{new Date(unite.dateEntree!).toLocaleDateString('fr-FR')}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Fin du contrat</span>
                                  <span>{new Date(unite.dateFinContrat!).toLocaleDateString('fr-FR')}</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default InfoMaison;
