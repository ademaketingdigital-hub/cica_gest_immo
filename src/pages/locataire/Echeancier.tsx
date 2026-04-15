import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

const Echeancier: React.FC = () => {

  const sidebarItems = [
    { label: "Tableau de Bord", href: "/locataire/dashboard", icon: <Calendar size={20}/> },
    {
      label: "Diligence",
      href: "#",
      icon: <TrendingUp size={20} />,
      children: [
        { label: "Mes Visites", href: "/locataire/visites" },
        { label: "Valider Choix", href: "/locataire/valider-choix" },
        { label: "Paiement", href: "/locataire/paiement" },
      ]
    },
    {
      label: "Consulter états",
      href: "#",
      icon: <CheckCircle size={20} />,
      children: [
        { label: "Echéancier", href: "/locataire/echeancier" },
        { label: "Mes quittances", href: "/locataire/quittances" },
        { label: "Contrat de location", href: "/locataire/contrat" },
      ]
    }
  ];

  // Mock payment schedule data
  const echeancier = [
    { mois: "Janvier 2024", echeance: "2024-01-05", montant: 100000, statut: "Payé" },
    { mois: "Février 2024", echeance: "2024-02-05", montant: 100000, statut: "Payé" },
    { mois: "Mars 2024", echeance: "2024-03-05", montant: 100000, statut: "Payé" },
    { mois: "Avril 2024", echeance: "2024-04-05", montant: 100000, statut: "Payé" },
    { mois: "Mai 2024", echeance: "2024-05-05", montant: 100000, statut: "Payé" },
    { mois: "Juin 2024", echeance: "2024-06-05", montant: 100000, statut: "Payé" },
    { mois: "Juillet 2024", echeance: "2024-07-05", montant: 100000, statut: "Impayé" },
    { mois: "Août 2024", echeance: "2024-08-05", montant: 100000, statut: "À venir" },
    { mois: "Septembre 2024", echeance: "2024-09-05", montant: 100000, statut: "À venir" },
    { mois: "Octobre 2024", echeance: "2024-10-05", montant: 100000, statut: "À venir" },
    { mois: "Novembre 2024", echeance: "2024-11-05", montant: 100000, statut: "À venir" },
    { mois: "Décembre 2024", echeance: "2024-12-05", montant: 100000, statut: "À venir" },
    { mois: "Janvier 2025", echeance: "2025-01-05", montant: 100000, statut: "À venir" },
    { mois: "Février 2025", echeance: "2025-02-05", montant: 100000, statut: "À venir" },
    { mois: "Mars 2025", echeance: "2025-03-05", montant: 100000, statut: "À venir" },
    { mois: "Avril 2025", echeance: "2025-04-05", montant: 100000, statut: "À venir" },
    { mois: "Mai 2025", echeance: "2025-05-05", montant: 100000, statut: "À venir" },
    { mois: "Juin 2025", echeance: "2025-06-05", montant: 100000, statut: "À venir" },
    { mois: "Juillet 2025", echeance: "2025-07-05", montant: 100000, statut: "À venir" },
    { mois: "Août 2025", echeance: "2025-08-05", montant: 100000, statut: "À venir" },
    { mois: "Septembre 2025", echeance: "2025-09-05", montant: 100000, statut: "À venir" },
    { mois: "Octobre 2025", echeance: "2025-10-05", montant: 100000, statut: "À venir" },
    { mois: "Novembre 2025", echeance: "2025-11-05", montant: 100000, statut: "À venir" },
    { mois: "Décembre 2025", echeance: "2025-12-05", montant: 100000, statut: "À venir" }
  ];

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case "Payé":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Payé</Badge>;
      case "Impayé":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Impayé</Badge>;
      case "À venir":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">À venir</Badge>;
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

  // Calculate totals
  const totalPaye = echeancier.filter(item => item.statut === "Payé").reduce((sum, item) => sum + item.montant, 0);
  const totalImpaye = echeancier.filter(item => item.statut === "Impayé").reduce((sum, item) => sum + item.montant, 0);
  const totalAvenir = echeancier.filter(item => item.statut === "À venir").reduce((sum, item) => sum + item.montant, 0);
  const totalRestant = totalImpaye + totalAvenir;

  // Calculate progress
  const totalMois = echeancier.length;
  const moisEcoules = echeancier.filter(item => item.statut === "Payé").length;
  const progressPercentage = (moisEcoules / totalMois) * 100;

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Échéancier"
      breadcrumb="Accueil / Consulter états / Échéancier"
    >
      <div className="space-y-8 animate-in fade-in duration-700">

        {/* Header */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Échéancier de paiement</h2>
              <p className="text-slate-500 mt-2 font-medium">Planning complet de vos loyers sur la durée du bail</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400 font-medium">Bail en cours</p>
              <p className="text-lg font-black text-slate-900">Janvier 2024 - Décembre 2025</p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="rounded-[2rem] border-slate-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase">Total payé</p>
                  <p className="text-2xl font-black text-green-600 mt-1">{totalPaye.toLocaleString()} FCFA</p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-slate-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase">Impayé</p>
                  <p className="text-2xl font-black text-red-600 mt-1">{totalImpaye.toLocaleString()} FCFA</p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-red-100 flex items-center justify-center">
                  <AlertTriangle className="text-red-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-slate-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase">À venir</p>
                  <p className="text-2xl font-black text-blue-600 mt-1">{totalAvenir.toLocaleString()} FCFA</p>
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
                  <p className="text-sm font-bold text-slate-400 uppercase">Restant à payer</p>
                  <p className="text-2xl font-black text-slate-900 mt-1">{totalRestant.toLocaleString()} FCFA</p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <TrendingUp className="text-slate-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Global Progress */}
        <Card className="rounded-[2rem] border-slate-100">
          <CardHeader className="bg-slate-50/50 pb-4">
            <CardTitle className="text-lg font-black text-slate-800">Progression globale du bail</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold text-slate-600">Avancement du contrat de location</p>
                <p className="text-lg font-black text-indigo-600">{Math.round(progressPercentage)}%</p>
              </div>
              <Progress value={progressPercentage} className="h-4 rounded-full" />
              <div className="flex justify-between text-sm text-slate-500">
                <span>Début: Janvier 2024</span>
                <span>{moisEcoules} mois sur {totalMois} écoulés</span>
                <span>Fin: Décembre 2025</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Schedule Table */}
        <Card className="rounded-[2rem] border-slate-100 overflow-hidden">
          <CardHeader className="bg-slate-50/50 pb-4">
            <CardTitle className="text-lg font-black text-slate-800">Planning des paiements</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-100 hover:bg-slate-50/50">
                  <TableHead className="font-bold text-slate-600">Mois</TableHead>
                  <TableHead className="font-bold text-slate-600">Date d'échéance</TableHead>
                  <TableHead className="font-bold text-slate-600">Montant du loyer</TableHead>
                  <TableHead className="font-bold text-slate-600">Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {echeancier.map((item, index) => (
                  <TableRow key={index} className="border-slate-100 hover:bg-slate-50/50">
                    <TableCell className="font-medium">{item.mois}</TableCell>
                    <TableCell className="font-medium">{formatDate(item.echeance)}</TableCell>
                    <TableCell className="font-bold text-slate-900">
                      {item.montant.toLocaleString()} FCFA
                    </TableCell>
                    <TableCell>{getStatusBadge(item.statut)}</TableCell>
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

export default Echeancier;