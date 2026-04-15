import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download, Receipt, Calendar } from "lucide-react";

const MesQuittances: React.FC = () => {

  const sidebarItems = [
    { label: "Tableau de Bord", href: "/locataire/dashboard", icon: <FileText size={20}/> },
    {
      label: "Diligence",
      href: "#",
      icon: <Receipt size={20} />,
      children: [
        { label: "Mes Visites", href: "/locataire/visites" },
        { label: "Valider Choix", href: "/locataire/valider-choix" },
        { label: "Paiement", href: "/locataire/paiement" },
      ]
    },
    {
      label: "Consulter états",
      href: "#",
      icon: <Download size={20} />,
      children: [
        { label: "Echéancier", href: "/locataire/echeancier" },
        { label: "Mes quittances", href: "/locataire/quittances" },
        { label: "Contrat de location", href: "/locataire/contrat" },
      ]
    }
  ];

  // Mock receipts data (last 6 months)
  const quittances = [
    {
      id: 1,
      mois: "Juin 2024",
      annee: 2024,
      montantPaye: 100000,
      datePaiement: "2024-06-01",
      reference: "REC-2024-06-001",
      statut: "Confirmé"
    },
    {
      id: 2,
      mois: "Mai 2024",
      annee: 2024,
      montantPaye: 100000,
      datePaiement: "2024-05-02",
      reference: "REC-2024-05-001",
      statut: "Confirmé"
    },
    {
      id: 3,
      mois: "Avril 2024",
      annee: 2024,
      montantPaye: 100000,
      datePaiement: "2024-04-01",
      reference: "REC-2024-04-001",
      statut: "Confirmé"
    },
    {
      id: 4,
      mois: "Mars 2024",
      annee: 2024,
      montantPaye: 100000,
      datePaiement: "2024-03-01",
      reference: "REC-2024-03-001",
      statut: "Confirmé"
    },
    {
      id: 5,
      mois: "Février 2024",
      annee: 2024,
      montantPaye: 100000,
      datePaiement: "2024-02-01",
      reference: "REC-2024-02-001",
      statut: "Confirmé"
    },
    {
      id: 6,
      mois: "Janvier 2024",
      annee: 2024,
      montantPaye: 170000, // Caution + loyer
      datePaiement: "2024-01-15",
      reference: "REC-2024-01-001",
      statut: "Confirmé"
    }
  ];

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case "Confirmé":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmé</Badge>;
      case "En attente":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">En attente</Badge>;
      default:
        return <Badge variant="secondary">{statut}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const handleDownloadFacture = (reference: string) => {
    // In a real app, this would download the PDF
    alert(`Téléchargement de la facture ${reference} en cours...`);
  };

  const handleDownloadRecu = (reference: string) => {
    // In a real app, this would download the PDF
    alert(`Téléchargement du reçu ${reference} en cours...`);
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Mes Quittances"
      breadcrumb="Accueil / Consulter états / Mes Quittances"
    >
      <div className="space-y-8 animate-in fade-in duration-700">

        {/* Header */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Mes Quittances</h2>
              <p className="text-slate-500 mt-2 font-medium">Consultez et téléchargez vos reçus de paiement</p>
            </div>
            <Badge className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-xl">
              {quittances.length} quittances disponibles
            </Badge>
          </div>
        </div>

        {/* Summary Card */}
        <Card className="rounded-[2rem] border-slate-100">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-sm font-bold text-slate-400 uppercase">Total payé (6 derniers mois)</p>
                <p className="text-3xl font-black text-indigo-600 mt-2">
                  {quittances.reduce((sum, q) => sum + q.montantPaye, 0).toLocaleString()} FCFA
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-400 uppercase">Moyenne mensuelle</p>
                <p className="text-3xl font-black text-slate-900 mt-2">
                  {Math.round(quittances.reduce((sum, q) => sum + q.montantPaye, 0) / quittances.length).toLocaleString()} FCFA
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-400 uppercase">Quittances confirmées</p>
                <p className="text-3xl font-black text-green-600 mt-2">
                  {quittances.filter(q => q.statut === "Confirmé").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Receipts Table */}
        <Card className="rounded-[2rem] border-slate-100 overflow-hidden">
          <CardHeader className="bg-slate-50/50 pb-4">
            <CardTitle className="text-lg font-black text-slate-800">Historique des quittances</CardTitle>
            <p className="text-sm text-slate-600 mt-1">Derniers 6 mois de paiements</p>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-100 hover:bg-slate-50/50">
                  <TableHead className="font-bold text-slate-600">Mois</TableHead>
                  <TableHead className="font-bold text-slate-600">Montant payé</TableHead>
                  <TableHead className="font-bold text-slate-600">Date de paiement</TableHead>
                  <TableHead className="font-bold text-slate-600">Statut</TableHead>
                  <TableHead className="font-bold text-slate-600">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quittances.map((quittance) => (
                  <TableRow key={quittance.id} className="border-slate-100 hover:bg-slate-50/50">
                    <TableCell className="font-medium">
                      <div>
                        <p className="font-bold text-slate-900">{quittance.mois}</p>
                        <p className="text-sm text-slate-500">Réf: {quittance.reference}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-bold text-slate-900">
                      {quittance.montantPaye.toLocaleString()} FCFA
                    </TableCell>
                    <TableCell className="font-medium">
                      {formatDate(quittance.datePaiement)}
                    </TableCell>
                    <TableCell>{getStatusBadge(quittance.statut)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-xl"
                          onClick={() => handleDownloadFacture(quittance.reference)}
                        >
                          <FileText size={16} className="mr-1" />
                          Facture
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-xl"
                          onClick={() => handleDownloadRecu(quittance.reference)}
                        >
                          <Receipt size={16} className="mr-1" />
                          Reçu
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="rounded-[2rem] border-blue-200 bg-blue-50/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Calendar className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2">À propos des quittances</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Les quittances sont générées automatiquement après confirmation du paiement</li>
                  <li>• La facture détaille les charges comprises dans votre loyer</li>
                  <li>• Le reçu confirme uniquement le paiement effectué</li>
                  <li>• Conservez ces documents pour vos déclarations fiscales</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MesQuittances;