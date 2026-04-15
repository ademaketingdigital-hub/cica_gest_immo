/**
 * Page Etat des recettes - Location (ARCHITECTURE MULTI-UNITÉS)
 * Liste de tous les loyers perçus avec filtres par unités locatives
 */

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3, Search, Download, Home, Building } from "lucide-react";

interface Recette {
  id: string;
  maisonId: string;
  maison: string;
  uniteId: string;
  uniteNumero: string;
  locataire: string;
  montantLoyer: number;
  montantCharges: number;
  montantTotal: number;
  mois: string;
  dateReception: string;
  statut: 'reçu' | 'en_retard' | 'annulé' | 'partiel';
  modePaiement: 'virement' | 'especes' | 'cheque' | 'mobile_money';
}

const EtatRecettes: React.FC = () => {
  const [filterMois, setFilterMois] = useState("all");
  const [filterMaison, setFilterMaison] = useState("all");
  const [filterUnite, setFilterUnite] = useState("all");
  const [filterStatut, setFilterStatut] = useState("all");
  const [searchLocataire, setSearchLocataire] = useState("");

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
  const mockRecettes: Recette[] = [
    // Villa Espoir A1 - Juin 2024
    {
      id: "1",
      maisonId: "1",
      maison: "Villa Espoir A1",
      uniteId: "1-101",
      uniteNumero: "101",
      locataire: "Jean Sossa",
      montantLoyer: 80000,
      montantCharges: 12000,
      montantTotal: 92000,
      mois: "Juin 2024",
      dateReception: "01/06/2024",
      statut: "reçu",
      modePaiement: "mobile_money"
    },
    {
      id: "2",
      maisonId: "1",
      maison: "Villa Espoir A1",
      uniteId: "1-102",
      uniteNumero: "102",
      locataire: "Marie Martin",
      montantLoyer: 120000,
      montantCharges: 15000,
      montantTotal: 135000,
      mois: "Juin 2024",
      dateReception: "02/06/2024",
      statut: "reçu",
      modePaiement: "virement"
    },
    {
      id: "3",
      maisonId: "1",
      maison: "Villa Espoir A1",
      uniteId: "1-201",
      uniteNumero: "201",
      locataire: "Paul Dubois",
      montantLoyer: 95000,
      montantCharges: 13000,
      montantTotal: 108000,
      mois: "Juin 2024",
      dateReception: "15/05/2024",
      statut: "en_retard",
      modePaiement: "especes"
    },

    // Résidence Soleil - Juin 2024
    {
      id: "4",
      maisonId: "2",
      maison: "Résidence Soleil",
      uniteId: "2-101",
      uniteNumero: "101",
      locataire: "Alice Bernard",
      montantLoyer: 150000,
      montantCharges: 18000,
      montantTotal: 168000,
      mois: "Juin 2024",
      dateReception: "01/06/2024",
      statut: "reçu",
      modePaiement: "cheque"
    },

    // Villa Espoir A1 - Mai 2024
    {
      id: "5",
      maisonId: "1",
      maison: "Villa Espoir A1",
      uniteId: "1-101",
      uniteNumero: "101",
      locataire: "Jean Sossa",
      montantLoyer: 80000,
      montantCharges: 12000,
      montantTotal: 92000,
      mois: "Mai 2024",
      dateReception: "01/05/2024",
      statut: "reçu",
      modePaiement: "mobile_money"
    },
    {
      id: "6",
      maisonId: "1",
      maison: "Villa Espoir A1",
      uniteId: "1-102",
      uniteNumero: "102",
      locataire: "Marie Martin",
      montantLoyer: 120000,
      montantCharges: 15000,
      montantTotal: 135000,
      mois: "Mai 2024",
      dateReception: "02/05/2024",
      statut: "reçu",
      modePaiement: "virement"
    },
    {
      id: "7",
      maisonId: "1",
      maison: "Villa Espoir A1",
      uniteId: "1-201",
      uniteNumero: "201",
      locataire: "Paul Dubois",
      montantLoyer: 95000,
      montantCharges: 13000,
      montantTotal: 108000,
      mois: "Mai 2024",
      dateReception: "01/05/2024",
      statut: "reçu",
      modePaiement: "especes"
    },

    // Résidence Soleil - Mai 2024
    {
      id: "8",
      maisonId: "2",
      maison: "Résidence Soleil",
      uniteId: "2-101",
      uniteNumero: "101",
      locataire: "Alice Bernard",
      montantLoyer: 150000,
      montantCharges: 18000,
      montantTotal: 168000,
      mois: "Mai 2024",
      dateReception: "01/05/2024",
      statut: "reçu",
      modePaiement: "cheque"
    }
  ];

  // Liste des maisons et unités pour les filtres
  const maisons = [
    { id: "1", nom: "Villa Espoir A1" },
    { id: "2", nom: "Résidence Soleil" }
  ];

  const unitesParMaison = {
    "1": [
      { id: "1-101", numero: "101", locataire: "Jean Sossa" },
      { id: "1-102", numero: "102", locataire: "Marie Martin" },
      { id: "1-103", numero: "103", locataire: "Disponible" },
      { id: "1-201", numero: "201", locataire: "Paul Dubois" },
      { id: "1-202", numero: "202-203", locataire: "Maintenance" }
    ],
    "2": [
      { id: "2-101", numero: "101", locataire: "Alice Bernard" },
      { id: "2-102", numero: "102", locataire: "Disponible" }
    ]
  };

  const filteredRecettes = mockRecettes.filter((recette) => {
    const matchMois = filterMois === "all" || recette.mois.includes(filterMois);
    const matchMaison = filterMaison === "all" || recette.maisonId === filterMaison;
    const matchUnite = filterUnite === "all" || recette.uniteId === filterUnite;
    const matchStatut = filterStatut === "all" || recette.statut === filterStatut;
    const matchLocataire = !searchLocataire || recette.locataire.toLowerCase().includes(searchLocataire.toLowerCase());
    return matchMois && matchMaison && matchUnite && matchStatut && matchLocataire;
  });

  const totalRecettes = filteredRecettes.reduce((sum, r) => sum + r.montantTotal, 0);
  const totalLoyers = filteredRecettes.reduce((sum, r) => sum + r.montantLoyer, 0);
  const totalCharges = filteredRecettes.reduce((sum, r) => sum + r.montantCharges, 0);

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case 'reçu':
        return <Badge className="bg-green-100 text-green-800">Reçu</Badge>;
      case 'en_retard':
        return <Badge className="bg-red-100 text-red-800">En retard</Badge>;
      case 'partiel':
        return <Badge className="bg-yellow-100 text-yellow-800">Partiel</Badge>;
      case 'annulé':
        return <Badge variant="destructive">Annulé</Badge>;
      default:
        return <Badge variant="secondary">{statut}</Badge>;
    }
  };

  const getModePaiementLabel = (mode: string) => {
    const labels: Record<string, string> = {
      'virement': 'Virement',
      'especes': 'Espèces',
      'cheque': 'Chèque',
      'mobile_money': 'Mobile Money'
    };
    return labels[mode] || mode;
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Etat des recettes"
      breadcrumb="Location / Consulter états / Etat des recettes"
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Recettes par unités locatives</h2>
            <p className="text-sm text-slate-500">Total: {filteredRecettes.length} paiements • {totalRecettes.toLocaleString()} FCFA</p>
          </div>
          <Button className="gap-2">
            <Download size={18} />
            Exporter
          </Button>
        </div>

        {/* Filtres */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search size={20} />
              Filtres et recherche
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-semibold mb-2 block">Mois</label>
                <Select value={filterMois} onValueChange={setFilterMois}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tous les mois" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les mois</SelectItem>
                    <SelectItem value="Juin 2024">Juin 2024</SelectItem>
                    <SelectItem value="Mai 2024">Mai 2024</SelectItem>
                    <SelectItem value="Avril 2024">Avril 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Maison</label>
                <Select value={filterMaison} onValueChange={(value) => {
                  setFilterMaison(value);
                  setFilterUnite("all"); // Reset unité quand maison change
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes les maisons" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les maisons</SelectItem>
                    {maisons.map((maison) => (
                      <SelectItem key={maison.id} value={maison.id}>{maison.nom}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Unité locative</label>
                <Select value={filterUnite} onValueChange={setFilterUnite} disabled={filterMaison === "all"}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes les unités" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les unités</SelectItem>
                    {filterMaison !== "all" && unitesParMaison[filterMaison as keyof typeof unitesParMaison]?.map((unite) => (
                      <SelectItem key={unite.id} value={unite.id}>
                        {unite.numero} - {unite.locataire}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Statut</label>
                <Select value={filterStatut} onValueChange={setFilterStatut}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tous les statuts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les statuts</SelectItem>
                    <SelectItem value="reçu">Reçu</SelectItem>
                    <SelectItem value="en_retard">En retard</SelectItem>
                    <SelectItem value="partiel">Partiel</SelectItem>
                    <SelectItem value="annulé">Annulé</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label className="text-sm font-semibold mb-2 block">Locataire</label>
                <div className="flex gap-2">
                  <Search className="text-slate-400 mt-3" size={18} />
                  <Input
                    placeholder="Rechercher locataire..."
                    value={searchLocataire}
                    onChange={(e) => setSearchLocataire(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Résumé des recettes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Total encaissé</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">{totalRecettes.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">{filteredRecettes.length} paiements</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Loyers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600">{totalLoyers.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">Hors charges</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Charges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-orange-600">{totalCharges.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">Eau, électricité, etc.</p>
            </CardContent>
          </Card>
        </div>

        {/* Liste des recettes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building size={20} />
              Détail des recettes par unité
            </CardTitle>
            <CardDescription>
              {filterMaison !== "all" ? maisons.find(m => m.id === filterMaison)?.nom : "Toutes les maisons"} •
              {filterUnite !== "all" ? ` Unité ${unitesParMaison[filterMaison as keyof typeof unitesParMaison]?.find(u => u.id === filterUnite)?.numero}` : " Toutes les unités"}
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Maison</TableHead>
                  <TableHead>Unité</TableHead>
                  <TableHead>Locataire</TableHead>
                  <TableHead>Loyer</TableHead>
                  <TableHead>Charges</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Mois</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Mode</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRecettes.map((recette) => (
                  <TableRow key={recette.id}>
                    <TableCell className="font-semibold">{recette.maison}</TableCell>
                    <TableCell className="font-mono">{recette.uniteNumero}</TableCell>
                    <TableCell>{recette.locataire}</TableCell>
                    <TableCell className="font-mono text-blue-600">{recette.montantLoyer.toLocaleString()} FCFA</TableCell>
                    <TableCell className="font-mono text-orange-600">{recette.montantCharges.toLocaleString()} FCFA</TableCell>
                    <TableCell className="font-mono font-bold text-green-600">{recette.montantTotal.toLocaleString()} FCFA</TableCell>
                    <TableCell>{recette.mois}</TableCell>
                    <TableCell>{recette.dateReception}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {getModePaiementLabel(recette.modePaiement)}
                      </Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(recette.statut)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {filteredRecettes.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <Home size={48} className="mx-auto mb-4 opacity-50" />
                <p>Aucune recette trouvée avec ces filtres</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default EtatRecettes;
