/**
 * Page Clôture mensuel - Location
 * Liste des maisons non clôturées du mois
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, Lock, DollarSign, FileText, Calendar, Search } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3 } from "lucide-react";
import { DialogTrigger } from "@radix-ui/react-dialog";

interface MaisonCloture {
  id: string;
  nom: string;
  locataire: string;
  recettes: number;
  depenses: number;
  solde: number;
  commission: number;
  aVerserProprio: number;
  statut: 'ouverte' | 'cloturee';
  dernierEvenement: string;
}

const ClotureMensuel: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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

  const mockMaisons: MaisonCloture[] = [
    {
      id: "1",
      nom: "Maison Espoir A1",
      locataire: "Martin K.",
      recettes: 500000,
      depenses: 120000,
      solde: 380000,
      commission: 57000,
      aVerserProprio: 323000,
      statut: 'ouverte',
      dernierEvenement: "Validation locataire 2024-06-20",
    },
    {
      id: "2",
      nom: "Villa Lumière B2",
      locataire: "Sophie N.",
      recettes: 750000,
      depenses: 200000,
      solde: 550000,
      commission: 82500,
      aVerserProprio: 467500,
      statut: 'ouverte',
      dernierEvenement: "Réparation peinture 2024-06-18",
    },
    {
      id: "3",
      nom: "Appart Centre C3",
      locataire: "Paul M.",
      recettes: 450000,
      depenses: 80000,
      solde: 370000,
      commission: 45000,
      aVerserProprio: 325000,
      statut: 'cloturee',
      dernierEvenement: "Clôture 2024-06-15",
    },
  ];

  const filteredData = mockMaisons.filter((item) =>
    item.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.locataire.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCloturer = (id: string) => {
    // TODO: API call - action irréversible
    console.log('Clôturer maison', id);
  };

  const getStatusBadge = (statut: MaisonCloture['statut']) => {
    if (statut === 'cloturee') {
      return <Badge variant="secondary" className="bg-green-100 text-green-800">Clôturée</Badge>;
    }
    return <Badge variant="destructive" className="bg-orange-100 text-orange-800">Ouverte</Badge>;
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Clôture mensuel"
      breadcrumb="Location / Diligences / Clôture mensuel"
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Clôtures en attente</h2>
            <p className="text-sm text-slate-500 mb-2">Juin 2024 - Action irréversible</p>
            <p className="text-orange-600 font-semibold">⚠️ {filteredData.filter(m => m.statut === 'ouverte').length} maisons à clôturer</p>
          </div>
          <Button onClick={() => navigate("/location/dashboard")} variant="outline">
            <ArrowLeft size={18} className="mr-2" />
            Retour
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recherche</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Search className="text-slate-400 mt-3" size={18} />
              <Input
                placeholder="Rechercher maison ou locataire..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ma maisons du mois</CardTitle>
            <CardDescription>Récapitulatif global avant clôture définitive</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Maison</TableHead>
                    <TableHead>Locataire</TableHead>
                    <TableHead className="text-right">Recettes</TableHead>
                    <TableHead className="text-right">Dépenses</TableHead>
                    <TableHead className="text-right">Solde</TableHead>
                    <TableHead className="text-right">Commission</TableHead>
                    <TableHead className="text-right">Proprio</TableHead>
                    <TableHead>Dernier événement</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-semibold">{item.nom}</TableCell>
                      <TableCell>{item.locataire}</TableCell>
                      <TableCell className="text-right font-mono text-green-600">
                        {item.recettes.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right font-mono text-orange-600">
                        {item.depenses.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right font-bold">
                        {item.solde.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right font-mono text-blue-600">
                        {item.commission.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right font-mono text-indigo-600">
                        {item.aVerserProprio.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-sm text-slate-500">{item.dernierEvenement}</TableCell>
                      <TableCell>{getStatusBadge(item.statut)}</TableCell>
                      <TableCell className="text-center">
                        {item.statut === 'ouverte' && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="destructive" className="gap-1 h-9">
                                <Lock size={16} />
                                Clôturer
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>⚠️ Clôturer définitivement</DialogTitle>
                                <DialogDescription>
                                  Cette action est <strong>irréversible</strong>. Le propriétaire sera payé et le mois archivé.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-lg">
                                <div>
                                  <p className="font-semibold">À verser proprio:</p>
                                  <p className="text-2xl font-bold text-indigo-600">{item.aVerserProprio.toLocaleString()} FCFA</p>
                                </div>
                                <div>
                                  <p className="font-semibold">Votre commission:</p>
                                  <p className="text-2xl font-bold text-blue-600">{item.commission.toLocaleString()} FCFA</p>
                                </div>
                              </div>
                              <DialogFooter>
                                <Button type="button" variant="outline">Annuler</Button>
                                <Button onClick={() => handleCloturer(item.id)} variant="destructive">
                                  <Lock className="mr-2 h-4 w-4" />
                                  Clôturer le mois
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {filteredData.length === 0 && (
              <div className="text-center py-12">
                <Lock className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Toutes les maisons clôturées</h3>
                <p className="text-slate-500">Aucune clôture en attente ce mois.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ClotureMensuel;
