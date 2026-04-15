/**
 * Page Rapport périodique - Location
 * Rapports mensuels générés en PDF, comparaison plusieurs mois, rapport moral
 */

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
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
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3, Download, FileText, Eye } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface Rapport {
  id: string;
  mois: string;
  annee: string;
  dateGeneration: string;
  statut: 'brouillon' | 'finalisé' | 'signé';
  totalRecettes: number;
  totalDepenses: number;
  nombreMaisons: number;
}

const RapportPeriodique: React.FC = () => {
  const [selectedMois, setSelectedMois] = useState("juin");
  const [selectedAnnee, setSelectedAnnee] = useState("2024");
  const [rapportMoral, setRapportMoral] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

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

  const mockRapports: Rapport[] = [
    { id: "1", mois: "Juin", annee: "2024", dateGeneration: "30/06/2024", statut: "signé", totalRecettes: 1710000, totalDepenses: 480000, nombreMaisons: 3 },
    { id: "2", mois: "Mai", annee: "2024", dateGeneration: "31/05/2024", statut: "signé", totalRecettes: 1650000, totalDepenses: 420000, nombreMaisons: 3 },
    { id: "3", mois: "Avril", annee: "2024", dateGeneration: "30/04/2024", statut: "finalisé", totalRecettes: 1630000, totalDepenses: 450000, nombreMaisons: 3 },
    { id: "4", mois: "Mars", annee: "2024", dateGeneration: "31/03/2024", statut: "signé", totalRecettes: 1580000, totalDepenses: 380000, nombreMaisons: 3 },
  ];

  const chartData = [
    { mois: "Mars", recettes: 1580000, depenses: 380000, solde: 1200000 },
    { mois: "Avril", recettes: 1630000, depenses: 450000, solde: 1180000 },
    { mois: "Mai", recettes: 1650000, depenses: 420000, solde: 1230000 },
    { mois: "Juin", recettes: 1710000, depenses: 480000, solde: 1230000 },
  ];

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case 'brouillon':
        return <Badge className="bg-gray-100 text-gray-800">Brouillon</Badge>;
      case 'finalisé':
        return <Badge className="bg-blue-100 text-blue-800">Finalisé</Badge>;
      case 'signé':
        return <Badge className="bg-green-100 text-green-800">Signé</Badge>;
    }
  };

  const handleGenererRapport = () => {
    console.log(`Générer rapport pour ${selectedMois} ${selectedAnnee}`);
    console.log(`Rapport moral: ${rapportMoral}`);
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Rapport périodique"
      breadcrumb="Location / Consulter états / Rapport périodique"
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Rapports périodiques</h2>
            <p className="text-sm text-slate-500">Rapports mensuels et comparaisons</p>
          </div>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <FileText size={18} />
                Générer rapport
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Générer un nouveau rapport</DialogTitle>
                <DialogDescription>Créer un rapport mensuel pour la gestion locative</DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Mois</label>
                    <Select value={selectedMois} onValueChange={setSelectedMois}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="janvier">Janvier</SelectItem>
                        <SelectItem value="fevrier">Février</SelectItem>
                        <SelectItem value="mars">Mars</SelectItem>
                        <SelectItem value="avril">Avril</SelectItem>
                        <SelectItem value="mai">Mai</SelectItem>
                        <SelectItem value="juin">Juin</SelectItem>
                        <SelectItem value="juillet">Juillet</SelectItem>
                        <SelectItem value="aout">Août</SelectItem>
                        <SelectItem value="septembre">Septembre</SelectItem>
                        <SelectItem value="octobre">Octobre</SelectItem>
                        <SelectItem value="novembre">Novembre</SelectItem>
                        <SelectItem value="decembre">Décembre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Année</label>
                    <Select value={selectedAnnee} onValueChange={setSelectedAnnee}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 block">Rapport moral (optionnel)</label>
                  <Textarea
                    placeholder="Commentaires du gestionnaire sur la gestion du mois..."
                    value={rapportMoral}
                    onChange={(e) => setRapportMoral(e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>
              </div>

              <DialogFooter className="gap-2">
                <Button variant="outline" onClick={() => setOpenDialog(false)}>Annuler</Button>
                <Button onClick={handleGenererRapport}>Générer et télécharger</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Comparaison sur 4 mois</CardTitle>
            <CardDescription>Évolution des recettes, dépenses et solde</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mois" />
                <YAxis />
                <Tooltip formatter={(value) => `${value.toLocaleString()} FCFA`} />
                <Legend />
                <Line type="monotone" dataKey="recettes" stroke="#10b981" name="Recettes" strokeWidth={2} />
                <Line type="monotone" dataKey="depenses" stroke="#ef4444" name="Dépenses" strokeWidth={2} />
                <Line type="monotone" dataKey="solde" stroke="#3b82f6" name="Solde net" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Résumé comparatif</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-slate-600 font-semibold">Moyenne recettes</p>
                <p className="text-xl font-bold text-green-600">1,642,500 FCFA</p>
              </div>
              <div>
                <p className="text-slate-600 font-semibold">Moyenne dépenses</p>
                <p className="text-xl font-bold text-red-600">432,500 FCFA</p>
              </div>
              <div>
                <p className="text-slate-600 font-semibold">Solde moyen</p>
                <p className="text-xl font-bold text-blue-600">1,210,000 FCFA</p>
              </div>
              <div>
                <p className="text-slate-600 font-semibold">Commission moyenne</p>
                <p className="text-xl font-bold text-orange-600">246,375 FCFA</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Liste des rapports générés</CardTitle>
            <CardDescription>Historique des rapports mensuels</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Période</TableHead>
                  <TableHead>Date génération</TableHead>
                  <TableHead className="text-right">Recettes</TableHead>
                  <TableHead className="text-right">Dépenses</TableHead>
                  <TableHead>Maisons</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockRapports.map((rapport) => (
                  <TableRow key={rapport.id}>
                    <TableCell className="font-semibold">{rapport.mois} {rapport.annee}</TableCell>
                    <TableCell>{rapport.dateGeneration}</TableCell>
                    <TableCell className="text-right font-mono text-green-600">{rapport.totalRecettes.toLocaleString()} FCFA</TableCell>
                    <TableCell className="text-right font-mono text-red-600">{rapport.totalDepenses.toLocaleString()} FCFA</TableCell>
                    <TableCell>{rapport.nombreMaisons}</TableCell>
                    <TableCell>{getStatusBadge(rapport.statut)}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex gap-1 justify-center">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0" title="Consulter">
                          <Eye size={16} />
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0" title="Télécharger">
                          <Download size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notes du gestionnaire - Juin 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-slate-700">
              Mois régulier avec une bonne rentrée des loyers. Augmentation notable des dépenses liée aux réparations de maintenance récurrentes.
              La situation des cautions est stable. Un cas d'impayé à suivre pour le locataire de la Maison Espoir A1.
              Les revenus nets restent satisfaisants avec une commission de 15% retenue selon les accords établis.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RapportPeriodique;
