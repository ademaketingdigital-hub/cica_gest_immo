/**
 * Page Confirmer une dépense - Location
 * Liste des dépenses soumises par propriétaires/locataires
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, CheckCircle, XCircle, Edit3, Image, Search } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input as AmountInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3 } from "lucide-react";

interface DepenseItem {
  id: string;
  maison: string;
  nature: string;
  montant: number;
  justificatif: string; // url img
  declarant: string;
  date: string;
  statut: 'soumis' | 'confirme' | 'rejete' | 'modifie';
}

const ConfirmerDepense: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [modifiedMontant, setModifiedMontant] = useState("");
  const [selectedId, setSelectedId] = useState("");

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

  const mockDepenses: DepenseItem[] = [
    {
      id: "1",
      maison: "Maison Espoir A1",
      nature: "Réparation plomberie",
      montant: 120000,
      justificatif: "/public/placeholder.svg",
      declarant: "Martin K. (locataire)",
      date: "2024-06-18",
      statut: 'soumis',
    },
    {
      id: "2",
      maison: "Villa Lumière B2",
      nature: "Peinture murs extérieurs",
      montant: 450000,
      justificatif: "/public/placeholder.svg",
      declarant: "Sophie N. (propriétaire)",
      date: "2024-06-17",
      statut: 'soumis',
    },
    {
      id: "3",
      maison: "Appart Centre C3",
      nature: "Remplacement climatisation",
      montant: 850000,
      justificatif: "/public/placeholder.svg",
      declarant: "Locataire",
      date: "2024-06-16",
      statut: 'confirme',
    },
  ];

  const filteredData = mockDepenses.filter((item) =>
    item.maison.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.nature.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.declarant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (statut: DepenseItem['statut']) => {
    switch (statut) {
      case 'soumis':
        return <Badge variant="secondary" className="bg-orange-100 text-orange-800">Soumise</Badge>;
      case 'confirme':
        return <Badge className="bg-green-100 text-green-800">Confirmée</Badge>;
      case 'rejete':
        return <Badge variant="destructive">Rejetée</Badge>;
      case 'modifie':
        return <Badge className="bg-blue-100 text-blue-800">Modifiée</Badge>;
    }
  };

  const handleConfirmer = (id: string) => {
    console.log('Confirmer dépense', id);
  };

  const handleRejeter = (id: string) => {
    console.log('Rejeter dépense', id);
  };

  const handleModifier = (id: string, nouveauMontant: string) => {
    console.log('Modifier dépense', id, nouveauMontant);
    setSelectedId('');
  };

  const openModifier = (id: string, montant: number) => {
    setSelectedId(id);
    setModifiedMontant(montant.toString());
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Confirmer une dépense"
      breadcrumb="Location / Diligences / Confirmer dépense"
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Dépenses soumises</h2>
            <p className="text-sm text-slate-500">Traitez les demandes de paiement</p>
          </div>
          <Button onClick={() => navigate("/location/dashboard")} className="gap-2">
            <ArrowLeft size={18} />
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
                placeholder="Rechercher maison, nature, déclarant..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Liste des dépenses</CardTitle>
            <CardDescription>Justificatifs disponibles en pièce jointe</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Maison</TableHead>
                  <TableHead>Nature</TableHead>
                  <TableHead>Déclarant</TableHead>
                  <TableHead className="text-right">Montant</TableHead>
                  <TableHead>Justificatif</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.date}</TableCell>
                    <TableCell className="font-semibold">{item.maison}</TableCell>
                    <TableCell className="capitalize">{item.nature}</TableCell>
                    <TableCell>{item.declarant}</TableCell>
                    <TableCell className="text-right font-mono font-bold">
                      {item.montant.toLocaleString()} FCFA
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Image size={20} className="text-slate-400" />
                        <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                          Voir facture
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(item.statut)}</TableCell>
                    <TableCell className="flex gap-1">
                      {item.statut === 'soumis' && (
                        <>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" className="gap-1 h-8 bg-green-100 hover:bg-green-200 h-8">
                                <CheckCircle size={16} />
                                Confirmer
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Confirmer paiement</DialogTitle>
                                <DialogDescription>Valider et payer la dépense</DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <Button onClick={() => handleConfirmer(item.id)}>Confirmer paiement</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Dialog open={selectedId === item.id} onOpenChange={() => setSelectedId('')}>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline" className="gap-1 h-8">
                                <Edit3 size={16} />
                                Modifier
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Modifier montant</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-2">
                                <Label>Montant modifié (FCFA)</Label>
                                <AmountInput
                                  type="number"
                                  value={modifiedMontant}
                                  onChange={(e) => setModifiedMontant(e.target.value)}
                                />
                              </div>
                              <DialogFooter>
                                <Button variant="outline" onClick={() => setSelectedId('')}>Annuler</Button>
                                <Button onClick={() => handleModifier(item.id, modifiedMontant)}>Modifier et confirmer</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="destructive" className="gap-1 h-8">
                                <XCircle size={16} />
                                Rejeter
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Rejeter dépense</DialogTitle>
                                <DialogDescription>Raison du rejet</DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <Button variant="destructive" onClick={() => handleRejeter(item.id)}>Rejeter</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </>
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

export default ConfirmerDepense;
