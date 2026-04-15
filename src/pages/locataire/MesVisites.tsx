import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, MapPin, X, RotateCcw, Eye } from "lucide-react";

const MesVisites: React.FC = () => {

  const sidebarItems = [
    { label: "Tableau de Bord", href: "/locataire/dashboard", icon: <Calendar size={20}/> },
    {
      label: "Diligence",
      href: "#",
      icon: <MapPin size={20} />,
      children: [
        { label: "Mes Visites", href: "/locataire/visites" },
        { label: "Valider Choix", href: "/locataire/valider-choix" },
        { label: "Paiement", href: "/locataire/paiement" },
      ]
    },
    {
      label: "Consulter états",
      href: "#",
      icon: <Clock size={20} />,
      children: [
        { label: "Echéancier", href: "/locataire/echeancier" },
        { label: "Mes quittances", href: "/locataire/quittances" },
        { label: "Contrat de location", href: "/locataire/contrat" },
      ]
    }
  ];

  // Mock data for visits
  const visites = [
    {
      id: 1,
      date: "2024-04-15",
      heure: "10:00",
      typeBien: "Appartement F3",
      adresse: "Villa Espoir A1, PK8",
      statut: "Programmée",
      agent: "M. Dupont"
    },
    {
      id: 2,
      date: "2024-04-10",
      heure: "14:30",
      typeBien: "Studio B4",
      adresse: "Résidence Soleil, PK12",
      statut: "Effectuée",
      agent: "Mme. Martin"
    },
    {
      id: 3,
      date: "2024-04-08",
      heure: "09:00",
      typeBien: "Duplex F4",
      adresse: "Quartier Louis, Centre-ville",
      statut: "Annulée",
      agent: "M. Leroy"
    },
    {
      id: 4,
      date: "2024-04-05",
      heure: "16:00",
      typeBien: "Villa T3",
      adresse: "Zone Oloumi, PK18",
      statut: "Effectuée",
      agent: "Mme. Bernard"
    }
  ];

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case "Programmée":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Programmée</Badge>;
      case "Effectuée":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Effectuée</Badge>;
      case "Annulée":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Annulée</Badge>;
      default:
        return <Badge variant="secondary">{statut}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Mes Visites"
      breadcrumb="Accueil / Diligence / Mes Visites"
    >
      <div className="space-y-8 animate-in fade-in duration-700">

        {/* Header */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Mes Visites</h2>
              <p className="text-slate-500 mt-2 font-medium">Historique et gestion de vos visites de logements</p>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-bold">
              Programmer une visite
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="rounded-[2rem] border-slate-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase">Visites Programmées</p>
                  <p className="text-3xl font-black text-blue-600 mt-1">1</p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Calendar className="text-blue-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-slate-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase">Visites Effectuées</p>
                  <p className="text-3xl font-black text-green-600 mt-1">2</p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Clock className="text-green-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-slate-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase">Visites Annulées</p>
                  <p className="text-3xl font-black text-red-600 mt-1">1</p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-red-100 flex items-center justify-center">
                  <X className="text-red-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visits Table */}
        <Card className="rounded-[2rem] border-slate-100 overflow-hidden">
          <CardHeader className="bg-slate-50/50 pb-4">
            <CardTitle className="text-lg font-black text-slate-800">Historique des Visites</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-100 hover:bg-slate-50/50">
                  <TableHead className="font-bold text-slate-600">Date</TableHead>
                  <TableHead className="font-bold text-slate-600">Heure</TableHead>
                  <TableHead className="font-bold text-slate-600">Type de bien</TableHead>
                  <TableHead className="font-bold text-slate-600">Adresse</TableHead>
                  <TableHead className="font-bold text-slate-600">Statut</TableHead>
                  <TableHead className="font-bold text-slate-600">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visites.map((visite) => (
                  <TableRow key={visite.id} className="border-slate-100 hover:bg-slate-50/50">
                    <TableCell className="font-medium">
                      {formatDate(visite.date)}
                    </TableCell>
                    <TableCell className="font-medium">{visite.heure}</TableCell>
                    <TableCell className="font-medium">{visite.typeBien}</TableCell>
                    <TableCell className="font-medium">{visite.adresse}</TableCell>
                    <TableCell>{getStatusBadge(visite.statut)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="rounded-xl">
                              <Eye size={16} />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="rounded-2xl">
                            <DialogHeader>
                              <DialogTitle>Détails de la visite</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <p className="text-sm font-bold text-slate-600">Date et heure</p>
                                <p className="text-lg font-black">{formatDate(visite.date)} à {visite.heure}</p>
                              </div>
                              <div>
                                <p className="text-sm font-bold text-slate-600">Bien visité</p>
                                <p className="text-lg font-black">{visite.typeBien}</p>
                                <p className="text-sm text-slate-600">{visite.adresse}</p>
                              </div>
                              <div>
                                <p className="text-sm font-bold text-slate-600">Agent immobilier</p>
                                <p className="text-lg font-black">{visite.agent}</p>
                              </div>
                              <div>
                                <p className="text-sm font-bold text-slate-600">Statut</p>
                                {getStatusBadge(visite.statut)}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        {visite.statut === "Programmée" && (
                          <>
                            <Button variant="outline" size="sm" className="rounded-xl text-red-600 hover:text-red-700">
                              <X size={16} />
                            </Button>
                            <Button variant="outline" size="sm" className="rounded-xl text-blue-600 hover:text-blue-700">
                              <RotateCcw size={16} />
                            </Button>
                          </>
                        )}
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

export default MesVisites;