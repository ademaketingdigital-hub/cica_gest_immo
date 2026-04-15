/**
 * Page Situation caisse - Location (ARCHITECTURE MULTI-UNITÉS)
 * Situation financière par maison et unités locatives
 */

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
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
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3, TrendingUp, TrendingDown, DollarSign, Home, Building, PieChart as PieChartIcon } from "lucide-react";

const SituationCaisse: React.FC = () => {
  const [selectedMaison, setSelectedMaison] = useState("1");

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
      proprietaire: "M. Dupont Jean",
      soldeMaison: 2850000,
      totalEncaisse: 420000,
      totalDuProprietaire: 135000,
      totalCharges: 45000
    },
    {
      id: "2",
      nom: "Résidence Soleil",
      proprietaire: "Mme. Martin Sophie",
      soldeMaison: 1950000,
      totalEncaisse: 280000,
      totalDuProprietaire: 95000,
      totalCharges: 35000
    }
  ];

  // Unités locatives avec données financières
  const unitesFinancieres = {
    "1": [ // Villa Espoir A1
      {
        id: "1-101",
        numero: "101",
        locataire: "Jean Sossa",
        loyerMensuel: 80000,
        chargesMensuelles: 12000,
        totalMensuel: 92000,
        statutPaiement: "paye",
        dernierPaiement: "2024-06-01",
        montantDernierPaiement: 92000,
        detteCumulee: 0,
        proprietairePart: 60000,
        agencePart: 32000
      },
      {
        id: "1-102",
        numero: "102",
        locataire: "Marie Martin",
        loyerMensuel: 120000,
        chargesMensuelles: 15000,
        totalMensuel: 135000,
        statutPaiement: "paye",
        dernierPaiement: "2024-06-02",
        montantDernierPaiement: 135000,
        detteCumulee: 0,
        proprietairePart: 90000,
        agencePart: 45000
      },
      {
        id: "1-103",
        numero: "103",
        locataire: null,
        loyerMensuel: 60000,
        chargesMensuelles: 10000,
        totalMensuel: 70000,
        statutPaiement: "disponible",
        dernierPaiement: null,
        montantDernierPaiement: 0,
        detteCumulee: 0,
        proprietairePart: 45000,
        agencePart: 25000
      },
      {
        id: "1-201",
        numero: "201",
        locataire: "Paul Dubois",
        loyerMensuel: 95000,
        chargesMensuelles: 13000,
        totalMensuel: 108000,
        statutPaiement: "retard",
        dernierPaiement: "2024-05-15",
        montantDernierPaiement: 108000,
        detteCumulee: 108000,
        proprietairePart: 71250,
        agencePart: 36750
      },
      {
        id: "1-202",
        numero: "202-203",
        locataire: null,
        loyerMensuel: 180000,
        chargesMensuelles: 20000,
        totalMensuel: 200000,
        statutPaiement: "maintenance",
        dernierPaiement: null,
        montantDernierPaiement: 0,
        detteCumulee: 0,
        proprietairePart: 135000,
        agencePart: 65000
      }
    ],
    "2": [ // Résidence Soleil
      {
        id: "2-101",
        numero: "101",
        locataire: "Alice Bernard",
        loyerMensuel: 150000,
        chargesMensuelles: 18000,
        totalMensuel: 168000,
        statutPaiement: "paye",
        dernierPaiement: "2024-06-01",
        montantDernierPaiement: 168000,
        detteCumulee: 0,
        proprietairePart: 112500,
        agencePart: 55500
      },
      {
        id: "2-102",
        numero: "102",
        locataire: null,
        loyerMensuel: 85000,
        chargesMensuelles: 12000,
        totalMensuel: 97000,
        statutPaiement: "disponible",
        dernierPaiement: null,
        montantDernierPaiement: 0,
        detteCumulee: 0,
        proprietairePart: 63750,
        agencePart: 33250
      }
    ]
  };

  // Évolution mensuelle par maison
  const evolutionMensuelle = {
    "1": [
      { mois: "Jan", encaisse: 380000, depenses: 135000, soldeMaison: 245000 },
      { mois: "Fév", encaisse: 395000, depenses: 140000, soldeMaison: 255000 },
      { mois: "Mar", encaisse: 410000, depenses: 138000, soldeMaison: 272000 },
      { mois: "Avr", encaisse: 405000, depenses: 142000, soldeMaison: 263000 },
      { mois: "Mai", encaisse: 420000, depenses: 145000, soldeMaison: 275000 },
      { mois: "Juin", encaisse: 420000, depenses: 135000, soldeMaison: 285000 }
    ],
    "2": [
      { mois: "Jan", encaisse: 250000, depenses: 95000, soldeMaison: 155000 },
      { mois: "Fév", encaisse: 265000, depenses: 98000, soldeMaison: 167000 },
      { mois: "Mar", encaisse: 270000, depenses: 96000, soldeMaison: 174000 },
      { mois: "Avr", encaisse: 275000, depenses: 97000, soldeMaison: 178000 },
      { mois: "Mai", encaisse: 280000, depenses: 95000, soldeMaison: 185000 },
      { mois: "Juin", encaisse: 280000, depenses: 95000, soldeMaison: 195000 }
    ]
  };

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case "paye":
        return <Badge className="bg-green-100 text-green-800">Payé</Badge>;
      case "retard":
        return <Badge className="bg-red-100 text-red-800">En retard</Badge>;
      case "disponible":
        return <Badge className="bg-blue-100 text-blue-800">Disponible</Badge>;
      case "maintenance":
        return <Badge className="bg-orange-100 text-orange-800">Maintenance</Badge>;
      default:
        return <Badge variant="secondary">{statut}</Badge>;
    }
  };

  const currentMaison = mockMaisons.find(m => m.id === selectedMaison);
  const unitesMaison = unitesFinancieres[selectedMaison as keyof typeof unitesFinancieres] || [];
  const evolutionMaison = evolutionMensuelle[selectedMaison as keyof typeof evolutionMensuelle] || [];

  // Calculs pour la maison sélectionnée
  const statsMaison = {
    totalEncaisse: unitesMaison.filter(u => u.statutPaiement === "paye").reduce((sum, u) => sum + u.montantDernierPaiement, 0),
    totalDu: unitesMaison.reduce((sum, u) => sum + u.proprietairePart, 0),
    totalCharges: unitesMaison.reduce((sum, u) => sum + u.chargesMensuelles, 0),
    detteTotale: unitesMaison.reduce((sum, u) => sum + u.detteCumulee, 0),
    unitesPayees: unitesMaison.filter(u => u.statutPaiement === "paye").length,
    unitesRetard: unitesMaison.filter(u => u.statutPaiement === "retard").length,
    unitesDisponibles: unitesMaison.filter(u => u.statutPaiement === "disponible").length
  };

  // Données pour le graphique camembert
  const repartitionData = [
    { name: "Part propriétaire", value: statsMaison.totalDu, color: "#3b82f6" },
    { name: "Part agence", value: statsMaison.totalEncaisse - statsMaison.totalDu, color: "#10b981" },
    { name: "Charges", value: statsMaison.totalCharges, color: "#f59e0b" }
  ];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Situation caisse"
      breadcrumb="Location / Consulter états / Situation caisse"
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Situation caisse par maison</h2>
            <p className="text-sm text-slate-500">Situation financière détaillée par unités locatives</p>
          </div>
        </div>

        {/* Sélection de la maison */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building size={20} />
              Sélectionner une maison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockMaisons.map((maison) => (
                <div
                  key={maison.id}
                  onClick={() => setSelectedMaison(maison.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                    selectedMaison === maison.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{maison.nom}</p>
                      <p className="text-sm text-slate-500">{maison.proprietaire}</p>
                      <p className="text-sm font-bold text-green-600 mt-2">
                        {maison.soldeMaison.toLocaleString()} FCFA
                      </p>
                    </div>
                    <Badge variant="outline">Solde maison</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {currentMaison && (
          <>
            {/* Statistiques globales de la maison */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Encaissé ce mois</p>
                      <p className="text-2xl font-bold text-green-600">{statsMaison.totalEncaisse.toLocaleString()} FCFA</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Du propriétaire</p>
                      <p className="text-2xl font-bold text-blue-600">{statsMaison.totalDu.toLocaleString()} FCFA</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Charges mensuelles</p>
                      <p className="text-2xl font-bold text-orange-600">{statsMaison.totalCharges.toLocaleString()} FCFA</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Dettes cumulées</p>
                      <p className="text-2xl font-bold text-red-600">{statsMaison.detteTotale.toLocaleString()} FCFA</p>
                    </div>
                    <TrendingDown className="h-8 w-8 text-red-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Onglets pour différentes vues */}
            <Tabs defaultValue="unites" className="space-y-4">
              <TabsList>
                <TabsTrigger value="unites">Par unités locatives</TabsTrigger>
                <TabsTrigger value="evolution">Évolution mensuelle</TabsTrigger>
                <TabsTrigger value="repartition">Répartition des revenus</TabsTrigger>
              </TabsList>

              <TabsContent value="unites" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home size={20} />
                      Situation par unité - {currentMaison.nom}
                    </CardTitle>
                    <CardDescription>
                      {statsMaison.unitesPayees} payée{statsMaison.unitesPayees > 1 ? 's' : ''} •
                      {statsMaison.unitesRetard} en retard •
                      {statsMaison.unitesDisponibles} disponible{statsMaison.unitesDisponibles > 1 ? 's' : ''}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Unité</TableHead>
                            <TableHead>Locataire</TableHead>
                            <TableHead>Loyer + Charges</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead>Dernier paiement</TableHead>
                            <TableHead>Part propriétaire</TableHead>
                            <TableHead>Part agence</TableHead>
                            <TableHead>Dette</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {unitesMaison.map((unite) => (
                            <TableRow key={unite.id}>
                              <TableCell className="font-semibold">{unite.numero}</TableCell>
                              <TableCell>{unite.locataire || "Non occupé"}</TableCell>
                              <TableCell className="font-semibold">
                                {unite.totalMensuel.toLocaleString()} FCFA
                              </TableCell>
                              <TableCell>{getStatusBadge(unite.statutPaiement)}</TableCell>
                              <TableCell>
                                {unite.dernierPaiement ? (
                                  <div>
                                    <p className="text-sm">{new Date(unite.dernierPaiement).toLocaleDateString('fr-FR')}</p>
                                    <p className="text-xs text-slate-500">{unite.montantDernierPaiement.toLocaleString()} FCFA</p>
                                  </div>
                                ) : (
                                  <span className="text-slate-400">-</span>
                                )}
                              </TableCell>
                              <TableCell className="text-blue-600 font-semibold">
                                {unite.proprietairePart.toLocaleString()} FCFA
                              </TableCell>
                              <TableCell className="text-green-600 font-semibold">
                                {unite.agencePart.toLocaleString()} FCFA
                              </TableCell>
                              <TableCell className={unite.detteCumulee > 0 ? "text-red-600 font-semibold" : "text-slate-400"}>
                                {unite.detteCumulee > 0 ? unite.detteCumulee.toLocaleString() + " FCFA" : "-"}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="evolution" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Évolution mensuelle - {currentMaison.nom}</CardTitle>
                    <CardDescription>Encaissements et dépenses sur 6 mois</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <AreaChart data={evolutionMaison}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mois" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value.toLocaleString()} FCFA`} />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="encaisse"
                          stackId="1"
                          stroke="#10b981"
                          fill="#d1fae5"
                          name="Encaissé"
                        />
                        <Area
                          type="monotone"
                          dataKey="depenses"
                          stackId="1"
                          stroke="#ef4444"
                          fill="#fee2e2"
                          name="Dépenses"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Solde maison - {currentMaison.nom}</CardTitle>
                    <CardDescription>Évolution du solde disponible</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={evolutionMaison}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mois" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value.toLocaleString()} FCFA`} />
                        <Legend />
                        <Bar dataKey="soldeMaison" fill="#3b82f6" name="Solde maison" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="repartition" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PieChartIcon size={20} />
                        Répartition des revenus - {currentMaison.nom}
                      </CardTitle>
                      <CardDescription>Mois en cours</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={repartitionData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {repartitionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value.toLocaleString()} FCFA`} />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Détail de répartition</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {repartitionData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-4 h-4 rounded"
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span className="font-bold">{item.value.toLocaleString()} FCFA</span>
                        </div>
                      ))}
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center font-bold text-lg">
                          <span>Total mensuel</span>
                          <span>{(statsMaison.totalEncaisse + statsMaison.totalCharges).toLocaleString()} FCFA</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SituationCaisse;
