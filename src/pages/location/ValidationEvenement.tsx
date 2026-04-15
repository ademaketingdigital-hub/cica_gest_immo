/**
 * Page Validation d'événement - Location
 * Tableau des événements déclarés par propriétaires/locataires
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, ArrowLeft, Download, CheckCircle, XCircle, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3 } from "lucide-react";

interface EventItem {
  id: string;
  date: string;
  maison: string;
  type: string;
  description: string;
  montant: number;
  statut: 'en_attente' | 'valide' | 'rejete';
  declarant: string;
}

const ValidationEvenement: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [comment, setComment] = useState("");

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

  const mockEvents: EventItem[] = [
    {
      id: "1",
      date: "2024-06-15",
      maison: "Maison Espoir A1",
      type: "Réparation",
      description: "Fuite d'eau dans la salle de bain",
      montant: 150000,
      statut: 'en_attente',
      declarant: "Martin K. (locataire)",
    },
    {
      id: "2",
      date: "2024-06-12",
      maison: "Villa Lumière B2",
      type: "Maintenance",
      description: "Changement serrure porte d'entrée",
      montant: 85000,
      statut: 'en_attente',
      declarant: "Sophie N. (propriétaire)",
    },
    {
      id: "3",
      date: "2024-06-10",
      maison: "Appart Centre C3",
      type: "Sinistre",
      description: "Panne électricité générale",
      montant: 250000,
      statut: 'valide',
      declarant: "Locataire actuel",
    },
  ];

  const filteredData = mockEvents.filter((item) =>
    item.maison.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.declarant.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (statut: EventItem['statut']) => {
    switch (statut) {
      case 'en_attente':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">En attente ({filteredData.filter(e => e.statut === 'en_attente').length})</Badge>;
      case 'valide':
        return <Badge className="bg-green-100 text-green-800">Validé</Badge>;
      case 'rejete':
        return <Badge variant="destructive">Rejeté</Badge>;
    }
  };

  const handleValider = (id: string) => {
    // TODO: API call
    console.log('Valider event', id);
  };

  const handleRejeter = (id: string) => {
    // TODO: API call
    console.log('Rejeter event', id);
  };

  const handleComment = (id: string) => {
    // TODO: API call with comment
    console.log('Comment on event', id, comment);
    setComment('');
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Validation d'événement"
      breadcrumb="Location / Diligences / Validation événement"
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Événements à valider</h2>
            <p className="text-sm text-slate-500">Total: {filteredData.length} événements</p>
          </div>
          <Button onClick={() => navigate("/location/dashboard")} className="gap-2">
            <ArrowLeft size={18} />
            Retour Dashboard
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
                placeholder="Rechercher maison, locataire, description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Liste des événements</CardTitle>
            <CardDescription>Cliquez sur Valider ou Rejeter pour traiter</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Maison</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Montant estimé</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.date}</TableCell>
                    <TableCell className="font-semibold">{item.maison}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">{item.type}</Badge>
                    </TableCell>
                    <TableCell className="max-w-md">{item.description}</TableCell>
                    <TableCell className="text-right font-mono">
                      {item.montant.toLocaleString()} FCFA
                    </TableCell>
                    <TableCell>{getStatusBadge(item.statut)}</TableCell>
                    <TableCell className="flex gap-2">
                      {item.statut === 'en_attente' && (
                        <>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline" className="gap-1 h-8">
                                <CheckCircle size={16} />
                                Valider
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Valider événement</DialogTitle>
                                <DialogDescription>Confirmez la validation</DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <Button onClick={() => handleValider(item.id)}>Valider</Button>
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
                                <DialogTitle>Rejeter événement</DialogTitle>
                                <DialogDescription>Ajoutez un commentaire pour le rejet</DialogDescription>
                              </DialogHeader>
                              <Textarea 
                                placeholder="Raison du rejet..." 
                                value={comment} 
                                onChange={(e) => setComment(e.target.value)}
                              />
                              <DialogFooter>
                                <Button variant="destructive" onClick={() => handleRejeter(item.id)}>
                                  Rejeter
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="secondary" className="gap-1 h-8">
                                <MessageCircle size={16} />
                                Comment
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Ajouter un commentaire</DialogTitle>
                                <DialogDescription>Ajoutez un commentaire sur cet événement</DialogDescription>
                              </DialogHeader>
                              <Textarea 
                                placeholder="Votre commentaire..." 
                                value={comment} 
                                onChange={(e) => setComment(e.target.value)}
                              />
                              <DialogFooter>
                                <Button onClick={() => handleComment(item.id)}>
                                  Envoyer
                                </Button>
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

export default ValidationEvenement;

