/**
 * Page Etat Impayé - Location
 * Liste des loyers impayés avec actions (relance, mise en demeure)
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
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3, Search, Download, AlertCircle, Mail, FileText } from "lucide-react";

interface Impaye {
  id: string;
  locataire: string;
  maison: string;
  montantLoyer: number;
  moisImpaye: string;
  joursRetard: number;
  dateEcheancePrevue: string;
  statut: 'impayé' | 'relancé' | 'en_mise_en_demeure';
}

const EtatImpaye: React.FC = () => {
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

  const mockImpayes: Impaye[] = [
    { id: "1", locataire: "Martin K.", maison: "Maison Espoir A1", montantLoyer: 500000, moisImpaye: "Juin 2024", joursRetard: 15, dateEcheancePrevue: "30/06/2024", statut: "impayé" },
    { id: "2", locataire: "Sophie N.", maison: "Villa Lumière B2", montantLoyer: 480000, moisImpaye: "Mai 2024", joursRetard: 45, dateEcheancePrevue: "31/05/2024", statut: "relancé" },
    { id: "3", locataire: "Paul M.", maison: "Appart Centre C3", montantLoyer: 430000, moisImpaye: "Avril 2024", joursRetard: 75, dateEcheancePrevue: "30/04/2024", statut: "en_mise_en_demeure" },
    { id: "4", locataire: "Jean B.", maison: "Maison Espoir A1", montantLoyer: 500000, moisImpaye: "Juin 2024", joursRetard: 8, dateEcheancePrevue: "30/06/2024", statut: "impayé" },
  ];

  const filteredImpayes = mockImpayes.filter((impaye) => {
    const matchStatut = filterStatut === "all" || impaye.statut === filterStatut;
    const matchLocataire = !searchLocataire || impaye.locataire.toLowerCase().includes(searchLocataire.toLowerCase());
    return matchStatut && matchLocataire;
  });

  const totalImpaye = filteredImpayes.reduce((sum, i) => sum + i.montantLoyer, 0);
  const critiques = filteredImpayes.filter(i => i.joursRetard > 60).length;

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case 'impayé':
        return <Badge className="bg-red-100 text-red-800">Impayé</Badge>;
      case 'relancé':
        return <Badge className="bg-orange-100 text-orange-800">Relancé</Badge>;
      case 'en_mise_en_demeure':
        return <Badge variant="destructive">En mise en demeure</Badge>;
    }
  };

  const getUrgency = (joursRetard: number) => {
    if (joursRetard > 60) return <Badge className="bg-red-100 text-red-800">CRITIQUE</Badge>;
    if (joursRetard > 30) return <Badge className="bg-orange-100 text-orange-800">Urgent</Badge>;
    return <Badge className="bg-yellow-100 text-yellow-800">Attention</Badge>;
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Etat Impayé"
      breadcrumb="Location / Consulter états / Etat Impayé"
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Loyers impayés</h2>
            <p className="text-sm text-slate-500">Situations à régulariser</p>
          </div>
          <Button className="gap-2">
            <Download size={18} />
            Exporter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Total impayé</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-600">{totalImpaye.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">{filteredImpayes.length} loyers</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Cas critiques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-orange-600">{critiques}</p>
              <p className="text-xs text-slate-500">&gt; 60 jours de retard</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Nombre d'impayes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{filteredImpayes.length}</p>
              <p className="text-xs text-slate-500">À traiter</p>
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
                    <SelectItem value="impayé">Impayé</SelectItem>
                    <SelectItem value="relancé">Relancé</SelectItem>
                    <SelectItem value="en_mise_en_demeure">En mise en demeure</SelectItem>
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
            <CardTitle>Liste des impayes</CardTitle>
            <CardDescription>Actions possibles : Relance, Mise en demeure</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Locataire</TableHead>
                  <TableHead>Maison</TableHead>
                  <TableHead>Mois impayé</TableHead>
                  <TableHead className="text-right">Montant</TableHead>
                  <TableHead className="text-right">Jours retard</TableHead>
                  <TableHead>Urgence</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredImpayes.map((impaye) => (
                  <TableRow key={impaye.id}>
                    <TableCell className="font-semibold">{impaye.locataire}</TableCell>
                    <TableCell>{impaye.maison}</TableCell>
                    <TableCell>{impaye.moisImpaye}</TableCell>
                    <TableCell className="text-right font-mono text-red-600">{impaye.montantLoyer.toLocaleString()} FCFA</TableCell>
                    <TableCell className="text-right font-semibold">{impaye.joursRetard} j</TableCell>
                    <TableCell>{getUrgency(impaye.joursRetard)}</TableCell>
                    <TableCell>{getStatusBadge(impaye.statut)}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex gap-1 justify-center">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <Mail size={16} />
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <FileText size={16} />
                        </Button>
                      </div>
                    </TableCell>
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

export default EtatImpaye;
