/**
 * Page Etat Caution - Location
 * Suivi des cautions versées avec statuts
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
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3, Search, Download } from "lucide-react";

interface Caution {
  id: string;
  locataire: string;
  maison: string;
  montantCaution: number;
  dateVersement: string;
  statut: 'encaissée' | 'restituée' | 'en_cours' | 'partiellement_retournée';
  montantRetenu?: number;
  dateRestitution?: string;
}

const EtatCaution: React.FC = () => {
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

  const mockCautions: Caution[] = [
    { id: "1", locataire: "Martin K.", maison: "Maison Espoir A1", montantCaution: 1000000, dateVersement: "15/01/2023", statut: "en_cours", montantRetenu: 0 },
    { id: "2", locataire: "Sophie N.", maison: "Villa Lumière B2", montantCaution: 960000, dateVersement: "10/06/2022", statut: "restituée", montantRetenu: 0, dateRestitution: "10/06/2023" },
    { id: "3", locataire: "Paul M.", maison: "Appart Centre C3", montantCaution: 860000, dateVersement: "20/03/2021", statut: "partiellement_retournée", montantRetenu: 150000, dateRestitution: "05/06/2022" },
    { id: "4", locataire: "Anne Leclerc", maison: "Maison Espoir A1", montantCaution: 1000000, dateVersement: "01/07/2023", statut: "encaissée", montantRetenu: 0 },
    { id: "5", locataire: "Thomas D.", maison: "Villa Lumière B2", montantCaution: 960000, dateVersement: "15/08/2023", statut: "en_cours", montantRetenu: 0 },
  ];

  const filteredCautions = mockCautions.filter((caution) => {
    const matchStatut = filterStatut === "all" || caution.statut === filterStatut;
    const matchLocataire = !searchLocataire || caution.locataire.toLowerCase().includes(searchLocataire.toLowerCase());
    return matchStatut && matchLocataire;
  });

  const totalCautions = filteredCautions.reduce((sum, c) => sum + c.montantCaution, 0);
  const totalRestituee = filteredCautions.filter(c => c.statut === "restituée").reduce((sum, c) => sum + c.montantCaution, 0);
  const totalEnCours = filteredCautions.filter(c => c.statut === "en_cours").reduce((sum, c) => sum + c.montantCaution, 0);

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case 'encaissée':
        return <Badge className="bg-blue-100 text-blue-800">Encaissée</Badge>;
      case 'en_cours':
        return <Badge className="bg-yellow-100 text-yellow-800">En cours</Badge>;
      case 'restituée':
        return <Badge className="bg-green-100 text-green-800">Restituée</Badge>;
      case 'partiellement_retournée':
        return <Badge className="bg-orange-100 text-orange-800">Partiellement retournée</Badge>;
    }
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Etat Caution"
      breadcrumb="Location / Consulter états / Etat Caution"
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Suivi des cautions</h2>
            <p className="text-sm text-slate-500">Gestion des dépôts de garantie</p>
          </div>
          <Button className="gap-2">
            <Download size={18} />
            Exporter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Total cautions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalCautions.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">{filteredCautions.length} cautions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Restituées</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">{totalRestituee.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">{filteredCautions.filter(c => c.statut === "restituée").length} retournées</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">En cours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-yellow-600">{totalEnCours.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">{filteredCautions.filter(c => c.statut === "en_cours").length} en attente</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filtres et recherche</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold mb-2 block">Statut</label>
                <Select value={filterStatut} onValueChange={setFilterStatut}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tous les statuts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les statuts</SelectItem>
                    <SelectItem value="encaissée">Encaissée</SelectItem>
                    <SelectItem value="en_cours">En cours</SelectItem>
                    <SelectItem value="restituée">Restituée</SelectItem>
                    <SelectItem value="partiellement_retournée">Partiellement retournée</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">Locataire</label>
                <div className="flex gap-2">
                  <Search className="text-slate-400 mt-3" size={18} />
                  <Input
                    placeholder="Rechercher..."
                    value={searchLocataire}
                    onChange={(e) => setSearchLocataire(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Liste des cautions</CardTitle>
            <CardDescription>Suivi détaillé</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Locataire</TableHead>
                  <TableHead>Maison</TableHead>
                  <TableHead className="text-right">Montant caution</TableHead>
                  <TableHead>Date versement</TableHead>
                  <TableHead className="text-right">Montant retenu</TableHead>
                  <TableHead>Date restitution</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCautions.map((caution) => (
                  <TableRow key={caution.id}>
                    <TableCell className="font-semibold">{caution.locataire}</TableCell>
                    <TableCell>{caution.maison}</TableCell>
                    <TableCell className="text-right font-mono">{caution.montantCaution.toLocaleString()} FCFA</TableCell>
                    <TableCell>{caution.dateVersement}</TableCell>
                    <TableCell className="text-right font-mono">
                      {caution.montantRetenu ? `-${caution.montantRetenu.toLocaleString()} FCFA` : "-"}
                    </TableCell>
                    <TableCell>{caution.dateRestitution || "-"}</TableCell>
                    <TableCell>{getStatusBadge(caution.statut)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default EtatCaution;
