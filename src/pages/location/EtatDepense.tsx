/**
 * Page Etat dépense - Location
 * Historique de toutes les dépenses validées par maison et catégorie
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
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface Depense {
  id: string;
  maison: string;
  categorie: string;
  description: string;
  montant: number;
  dateValidation: string;
  validePar: string;
  statut: 'validée' | 'payée';
}

const EtatDepense: React.FC = () => {
  const [filterMaison, setFilterMaison] = useState("all");
  const [filterCategorie, setFilterCategorie] = useState("all");
  const [searchDescription, setSearchDescription] = useState("");

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

  const mockDepenses: Depense[] = [
    { id: "1", maison: "Maison Espoir A1", categorie: "Plomberie", description: "Fuite tuyauterie salle bain", montant: 65000, dateValidation: "12/06/2024", validePar: "Admin", statut: "payée" },
    { id: "2", maison: "Villa Lumière B2", categorie: "Électricité", description: "Réparation disjoncteur général", montant: 45000, dateValidation: "10/06/2024", validePar: "Admin", statut: "payée" },
    { id: "3", maison: "Appart Centre C3", categorie: "Maintenance", description: "Remplacement filtre climatisation", montant: 25000, dateValidation: "08/06/2024", validePar: "Admin", statut: "payée" },
    { id: "4", maison: "Maison Espoir A1", categorie: "Serrurerie", description: "Changement serrure porte entrée", montant: 35000, dateValidation: "05/06/2024", validePar: "Admin", statut: "payée" },
    { id: "5", maison: "Villa Lumière B2", categorie: "Peinture", description: "Repaint cuisine et salle bain", montant: 120000, dateValidation: "01/06/2024", validePar: "Admin", statut: "validée" },
    { id: "6", maison: "Appart Centre C3", categorie: "Nettoyage", description: "Nettoyage approfondi post-sinistre", montant: 40000, dateValidation: "30/05/2024", validePar: "Admin", statut: "payée" },
  ];

  const filteredDepenses = mockDepenses.filter((depense) => {
    const matchMaison = filterMaison === "all" || depense.maison === filterMaison;
    const matchCategorie = filterCategorie === "all" || depense.categorie === filterCategorie;
    const matchDescription = !searchDescription || depense.description.toLowerCase().includes(searchDescription.toLowerCase());
    return matchMaison && matchCategorie && matchDescription;
  });

  const totalDepenses = filteredDepenses.reduce((sum, d) => sum + d.montant, 0);
  const totalPayees = filteredDepenses.filter(d => d.statut === "payée").reduce((sum, d) => sum + d.montant, 0);

  const chartDataByCategory = [
    { categorie: "Plomberie", montant: 65000 },
    { categorie: "Électricité", montant: 45000 },
    { categorie: "Maintenance", montant: 25000 },
    { categorie: "Serrurerie", montant: 35000 },
    { categorie: "Peinture", montant: 120000 },
    { categorie: "Nettoyage", montant: 40000 },
  ];

  const chartDataByMaison = [
    { maison: "Maison Espoir A1", montant: 100000 },
    { maison: "Villa Lumière B2", montant: 165000 },
    { maison: "Appart Centre C3", montant: 65000 },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Etat dépense"
      breadcrumb="Location / Consulter états / Etat dépense"
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Historique des dépenses</h2>
            <p className="text-sm text-slate-500">Toutes les dépenses validées</p>
          </div>
          <Button className="gap-2">
            <Download size={18} />
            Exporter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Total dépenses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalDepenses.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">{filteredDepenses.length} dépenses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-600">Payées</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">{totalPayees.toLocaleString()} FCFA</p>
              <p className="text-xs text-slate-500">{filteredDepenses.filter(d => d.statut === "payée").length} exécutées</p>
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
                <label className="text-sm font-semibold mb-2 block">Maison</label>
                <Select value={filterMaison} onValueChange={setFilterMaison}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes les maisons" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les maisons</SelectItem>
                    <SelectItem value="Maison Espoir A1">Maison Espoir A1</SelectItem>
                    <SelectItem value="Villa Lumière B2">Villa Lumière B2</SelectItem>
                    <SelectItem value="Appart Centre C3">Appart Centre C3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">Catégorie</label>
                <Select value={filterCategorie} onValueChange={setFilterCategorie}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes les catégories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    <SelectItem value="Plomberie">Plomberie</SelectItem>
                    <SelectItem value="Électricité">Électricité</SelectItem>
                    <SelectItem value="Maintenance">Maintenance</SelectItem>
                    <SelectItem value="Serrurerie">Serrurerie</SelectItem>
                    <SelectItem value="Peinture">Peinture</SelectItem>
                    <SelectItem value="Nettoyage">Nettoyage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">Description</label>
                <div className="flex gap-2">
                  <Search className="text-slate-400 mt-3" size={18} />
                  <Input
                    placeholder="Rechercher..."
                    value={searchDescription}
                    onChange={(e) => setSearchDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Dépenses par catégorie</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={chartDataByCategory} cx="50%" cy="50%" labelLine={false} label={({ categorie, montant }) => `${categorie}: ${(montant / 1000).toFixed(0)}k`} outerRadius={80} fill="#8884d8" dataKey="montant">
                    {chartDataByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value.toLocaleString()} FCFA`} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Dépenses par maison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartDataByMaison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="maison" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value.toLocaleString()} FCFA`} />
                  <Bar dataKey="montant" fill="#3b82f6" name="Montant" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Liste des dépenses</CardTitle>
            <CardDescription>Historique complet validées</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Maison</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Montant</TableHead>
                  <TableHead>Date validation</TableHead>
                  <TableHead>Validé par</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDepenses.map((depense) => (
                  <TableRow key={depense.id}>
                    <TableCell className="font-semibold">{depense.maison}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">{depense.categorie}</Badge>
                    </TableCell>
                    <TableCell className="text-sm">{depense.description}</TableCell>
                    <TableCell className="text-right font-mono font-semibold">{depense.montant.toLocaleString()} FCFA</TableCell>
                    <TableCell>{depense.dateValidation}</TableCell>
                    <TableCell>{depense.validePar}</TableCell>
                    <TableCell>
                      {depense.statut === "payée" ? (
                        <Badge className="bg-green-100 text-green-800">Payée</Badge>
                      ) : (
                        <Badge className="bg-blue-100 text-blue-800">Validée</Badge>
                      )}
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

export default EtatDepense;
