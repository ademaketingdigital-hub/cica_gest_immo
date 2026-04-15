/**
 * Page Etat avance - Location
 * Suivi des avances de loyer et cautions
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

interface Avance {
  id: string;
  locataire: string;
  maison: string;
  type: 'avance_loyer' | 'avance_caution';
  montant: number;
  dateVersement: string;
  periode: string;
  statut: 'utilisée' | 'encours' | 'dépassée';
  montantUtilise?: number;
}

const EtatAvance: React.FC = () => {
  const [filterType, setFilterType] = useState("all");
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

  const mockAvances: Avance[] = [
    { id: "1", locataire: "Martin K.", maison: "Maison Espoir A1", type: "avance_loyer", montant: 500000, dateVersement: "01/06/2024", periode: "Juin 2024", statut: "utilisée", montantUtilise: 500000 },
    { id: "2", locataire: "Sophie N.", maison: "Villa Lumière B2", type: "avance_caution", montant: 960000, dateVersement: "10/06/2022", periode: "Juillet-Août", statut: "dépassée", montantUtilise: 980000 },
    { id: "3", locataire: "Paul M.", maison: "Appart Centre C3", type: "avance_loyer", montant: 430000, dateVersement: "20/05/2024", periode: "Mai 2024", statut: "encours", montantUtilise: 200000 },
    { id: "4", locataire: "Anne Leclerc", maison: "Maison Espoir A1", type: "avance_loyer", montant: 1000000, dateVersement: "01/07/2023", periode: "Juillet 2023", statut: "utilisée", montantUtilise: 1000000 },
    { id: "5", locataire: "Thomas D.", maison: "Villa Lumière B2", type: "avance_caution", montant: 960000, dateVersement: "15/04/2024", periode: "Juillet-Septembre", statut: "encours", montantUtilise: 450000 },
  ];

  const filteredAvances = mockAvances.filter((avance) => {
    const matchType = filterType === "all" || avance.type === filterType;
    const matchStatut = filterStatut === "all" || avance.statut === filterStatut;
    const matchLocataire = !searchLocataire || avance.locataire.toLowerCase().includes(searchLocataire.toLowerCase());
    return matchType && matchStatut && matchLocataire;
  });

  const totalAvances = filteredAvances.reduce((sum, a) => sum + a.montant, 0);
  const totalUtilise = filteredAvances.reduce((sum, a) => sum + (a.montantUtilise || 0), 0);
  const totalRestant = totalAvances - totalUtilise;

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case 'utilisée':
        return <Badge className="bg-green-100 text-green-800">Utilisée</Badge>;
      case 'encours':
        return <Badge className="bg-blue-100 text-blue-800">En cours</Badge>;
      case 'dépassée':
        return <Badge className="bg-red-100 text-red-800">Dépassée</Badge>;
    }
  };

  const getTypeLabel = (type: string) => {
    return type === 'avance_loyer' ? "Avance de loyer" : "Avance caution";
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Etat avance"
      breadcrumb="Location / Consulter états / Etat avance"
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Suivi des avances</h2>
            <p className="text-sm text-slate-500">Avances de loyer et cautions</p>
          </div>
          <Button className="gap-2">
            <Download size={18} />
            Exporter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Total avances</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalAvances.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">{filteredAvances.length} avances</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Utilisé</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600">{totalUtilise.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">{((totalUtilise / totalAvances) * 100).toFixed(0)}% utilisé</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Restant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">{totalRestant.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">Non utilisé</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filtres et recherche</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-semibold mb-2 block">Type</label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tous les types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les types</SelectItem>
                    <SelectItem value="avance_loyer">Avance de loyer</SelectItem>
                    <SelectItem value="avance_caution">Avance caution</SelectItem>
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
                    <SelectItem value="utilisée">Utilisée</SelectItem>
                    <SelectItem value="encours">En cours</SelectItem>
                    <SelectItem value="dépassée">Dépassée</SelectItem>
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
            <CardTitle>Liste des avances</CardTitle>
            <CardDescription>Suivi détaillé des avances</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Locataire</TableHead>
                  <TableHead>Maison</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Période couverte</TableHead>
                  <TableHead className="text-right">Montant initial</TableHead>
                  <TableHead className="text-right">Utilisé</TableHead>
                  <TableHead className="text-right">Restant</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAvances.map((avance) => (
                  <TableRow key={avance.id}>
                    <TableCell className="font-semibold">{avance.locataire}</TableCell>
                    <TableCell>{avance.maison}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {getTypeLabel(avance.type)}
                      </Badge>
                    </TableCell>
                    <TableCell>{avance.periode}</TableCell>
                    <TableCell className="text-right font-mono">{avance.montant.toLocaleString()} FCFA</TableCell>
                    <TableCell className="text-right font-mono">{(avance.montantUtilise || 0).toLocaleString()} FCFA</TableCell>
                    <TableCell className="text-right font-mono">
                      {(avance.montant - (avance.montantUtilise || 0)).toLocaleString()} FCFA
                    </TableCell>
                    <TableCell>{getStatusBadge(avance.statut)}</TableCell>
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

export default EtatAvance;
