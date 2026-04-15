/**
 * Template pour créer une page de liste/tableau
 * 
 * Cas d'usage: État des ventes, liste des propriétaires, etc.
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, ArrowLeft, Download } from "lucide-react";

/**
 * TEMPLATE PAGE LISTE
 * 
 * Remplacez:
 * - [TITLE]: Titre de la page
 * - [DESCRIPTION]: Description
 * - [TABLE_COLUMNS]: Colonnes du tableau
 * - [TABLE_DATA]: Données d'exemple
 */

interface DataItem {
  id: string;
  name: string;
  email: string;
  status: string;
  amount: number;
  date: string;
}

const ListPageTemplate: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<keyof DataItem>("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const sidebarItems = [
    { label: "Retour", href: "/vente/dashboard", icon: "⬅️" },
    { label: "Dashboard", href: "/vente/dashboard", icon: "📊" },
  ];

  // Données d'exemple
  const mockData: DataItem[] = [
    {
      id: "1",
      name: "Domaine A",
      email: "contact@domaine-a.com",
      status: "Vendu",
      amount: 50000000,
      date: "2026-04-01",
    },
    {
      id: "2",
      name: "Domaine B",
      email: "contact@domaine-b.com",
      status: "Réservé",
      amount: 35000000,
      date: "2026-04-05",
    },
    {
      id: "3",
      name: "Domaine C",
      email: "contact@domaine-c.com",
      status: "Disponible",
      amount: 45000000,
      date: "2026-04-10",
    },
  ];

  // Filtrage des données
  const filteredData = mockData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Tri des données
  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (typeof aValue === "string") {
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue as string)
        : (bValue as string).localeCompare(aValue);
    }

    return sortOrder === "asc"
      ? (aValue as number) - (bValue as number)
      : (bValue as number) - (aValue as number);
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Vendu":
        return "bg-green-100 text-green-800";
      case "Réservé":
        return "bg-orange-100 text-orange-800";
      case "Disponible":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  const handleSort = (field: keyof DataItem) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleExport = () => {
    // TODO: Implémenter l'export CSV/Excel
    console.log("Exporting data...");
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="[TITLE]"
      breadcrumb="[DESCRIPTION]"
    >
      <div className="space-y-6">
        {/* En-tête avec actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Liste des Domaines</h2>
            <p className="text-sm text-slate-500">Total: {sortedData.length} domaines</p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft size={18} />
              Retour
            </Button>
            <Button onClick={handleExport} variant="outline" className="gap-2">
              <Download size={18} />
              Exporter
            </Button>
            <Button onClick={() => navigate("/vente/ajouter-domaine")} className="gap-2">
              <Plus size={18} />
              Ajouter
            </Button>
          </div>
        </div>

        {/* Barre de recherche */}
        <Card>
          <CardHeader>
            <CardTitle>Recherche et Filtrage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Search className="text-slate-400 mt-3" size={18} />
              <Input
                placeholder="Rechercher par nom ou email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Tableau */}
        <Card>
          <CardHeader>
            <CardTitle>Domaines</CardTitle>
            <CardDescription>
              Affichage de {sortedData.length} résultat(s)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSort("name")}
                    >
                      Nom {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSort("email")}
                    >
                      Email
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSort("status")}
                    >
                      Statut
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer text-right"
                      onClick={() => handleSort("amount")}
                    >
                      Montant
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSort("date")}
                    >
                      Date {sortField === "date" && (sortOrder === "asc" ? "↑" : "↓")}
                    </TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-semibold">{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        {(item.amount / 1000000).toFixed(1)}M
                      </TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell className="text-center">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => navigate(`/vente/detail/${item.id}`)}
                        >
                          Voir
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {sortedData.length === 0 && (
              <div className="text-center py-10">
                <p className="text-slate-500">Aucune donnée trouvée</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pied de page avec pagination */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-slate-500">
            Affichage de {sortedData.length} domaine(s)
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Précédent
            </Button>
            <Button variant="outline" size="sm" disabled>
              Suivant
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ListPageTemplate;
