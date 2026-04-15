/**
 * Page Etat paye propriétaire - Location
 * Liste des paiements aux propriétaires avec montants et commissions
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

interface PayeProprio {
  id: string;
  proprietaire: string;
  maison: string;
  periodeLoyers: string;
  montantRecettes: number;
  commission: number;
  montantVerse: number;
  dateVersement: string;
  statut: 'versé' | 'en_attente' | 'en_preparation';
  methode: string;
}

const EtatPayeProprio: React.FC = () => {
  const [filterStatut, setFilterStatut] = useState("all");
  const [searchProprio, setSearchProprio] = useState("");

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

  const mockPaiements: PayeProprio[] = [
    { id: "1", proprietaire: "Jean Dupont", maison: "Maison Espoir A1", periodeLoyers: "Juin 2024", montantRecettes: 500000, commission: 75000, montantVerse: 425000, dateVersement: "30/06/2024", statut: "versé", methode: "Virement" },
    { id: "2", proprietaire: "Marie Claude", maison: "Villa Lumière B2", periodeLoyers: "Juin 2024", montantRecettes: 480000, commission: 72000, montantVerse: 408000, dateVersement: "30/06/2024", statut: "versé", methode: "Virement" },
    { id: "3", proprietaire: "Pierre Martin", maison: "Appart Centre C3", periodeLoyers: "Juin 2024", montantRecettes: 430000, commission: 64500, montantVerse: 365500, dateVersement: "en_attente", statut: "en_attente", methode: "Chèque" },
    { id: "4", proprietaire: "Jean Dupont", maison: "Maison Espoir A1", periodeLoyers: "Mai 2024", montantRecettes: 500000, commission: 75000, montantVerse: 425000, dateVersement: "31/05/2024", statut: "versé", methode: "Virement" },
    { id: "5", proprietaire: "Marie Claude", maison: "Villa Lumière B2", periodeLoyers: "Mai 2024", montantRecettes: 480000, commission: 72000, montantVerse: 408000, dateVersement: "31/05/2024", statut: "versé", methode: "Virement" },
  ];

  const filteredPaiements = mockPaiements.filter((paiement) => {
    const matchStatut = filterStatut === "all" || paiement.statut === filterStatut;
    const matchProprio = !searchProprio || paiement.proprietaire.toLowerCase().includes(searchProprio.toLowerCase());
    return matchStatut && matchProprio;
  });

  const totalVerse = filteredPaiements.filter(p => p.statut === "versé").reduce((sum, p) => sum + p.montantVerse, 0);
  const totalEnAttente = filteredPaiements.filter(p => p.statut === "en_attente").reduce((sum, p) => sum + p.montantVerse, 0);

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case 'versé':
        return <Badge className="bg-green-100 text-green-800">Versé</Badge>;
      case 'en_attente':
        return <Badge className="bg-yellow-100 text-yellow-800">En attente</Badge>;
      case 'en_preparation':
        return <Badge className="bg-blue-100 text-blue-800">En préparation</Badge>;
    }
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Etat paye propriétaire"
      breadcrumb="Location / Consulter états / Etat paye propriétaire"
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Paiements propriétaires</h2>
            <p className="text-sm text-slate-500">Historique des versements</p>
          </div>
          <Button className="gap-2">
            <Download size={18} />
            Exporter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Total versé</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">{totalVerse.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">Paiements complétés</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">En attente</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-yellow-600">{totalEnAttente.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">À verser</p>
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
                    <SelectItem value="versé">Versé</SelectItem>
                    <SelectItem value="en_attente">En attente</SelectItem>
                    <SelectItem value="en_preparation">En préparation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">Propriétaire</label>
                <div className="flex gap-2">
                  <Search className="text-slate-400 mt-3" size={18} />
                  <Input
                    placeholder="Rechercher..."
                    value={searchProprio}
                    onChange={(e) => setSearchProprio(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Liste des paiements</CardTitle>
            <CardDescription>Versements aux propriétaires</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Propriétaire</TableHead>
                  <TableHead>Maison</TableHead>
                  <TableHead>Période</TableHead>
                  <TableHead className="text-right">Recettes</TableHead>
                  <TableHead className="text-right">Commission</TableHead>
                  <TableHead className="text-right">Versé</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPaiements.map((paiement) => (
                  <TableRow key={paiement.id}>
                    <TableCell className="font-semibold">{paiement.proprietaire}</TableCell>
                    <TableCell>{paiement.maison}</TableCell>
                    <TableCell>{paiement.periodeLoyers}</TableCell>
                    <TableCell className="text-right font-mono">{paiement.montantRecettes.toLocaleString()} FCFA</TableCell>
                    <TableCell className="text-right font-mono text-red-600">-{paiement.commission.toLocaleString()} FCFA</TableCell>
                    <TableCell className="text-right font-mono text-green-600 font-semibold">{paiement.montantVerse.toLocaleString()} FCFA</TableCell>
                    <TableCell>{paiement.dateVersement}</TableCell>
                    <TableCell>{getStatusBadge(paiement.statut)}</TableCell>
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

export default EtatPayeProprio;
