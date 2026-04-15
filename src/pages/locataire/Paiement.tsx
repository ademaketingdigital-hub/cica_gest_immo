import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CreditCard, Smartphone, Banknote, CheckCircle, Clock, AlertCircle } from "lucide-react";

const Paiement: React.FC = () => {

  const sidebarItems = [
    { label: "Tableau de Bord", href: "/locataire/dashboard", icon: <CreditCard size={20}/> },
    {
      label: "Diligence",
      href: "#",
      icon: <Smartphone size={20} />,
      children: [
        { label: "Mes Visites", href: "/locataire/visites" },
        { label: "Valider Choix", href: "/locataire/valider-choix" },
        { label: "Paiement", href: "/locataire/paiement" },
      ]
    },
    {
      label: "Consulter états",
      href: "#",
      icon: <Banknote size={20} />,
      children: [
        { label: "Echéancier", href: "/locataire/echeancier" },
        { label: "Mes quittances", href: "/locataire/quittances" },
        { label: "Contrat de location", href: "/locataire/contrat" },
      ]
    }
  ];

  // Mock payment data
  const montantAPayer = {
    loyer: 85000,
    charges: 15000,
    caution: 170000, // 2 months rent
    frais: 5000,
    total: 255000
  };

  const historiquePaiements = [
    {
      id: 1,
      date: "2024-03-01",
      montant: 100000,
      type: "Loyer Mars",
      methode: "Mobile Money",
      statut: "Payé",
      reference: "REF-2024-03-001"
    },
    {
      id: 2,
      date: "2024-02-01",
      montant: 100000,
      type: "Loyer Février",
      methode: "Carte bancaire",
      statut: "Payé",
      reference: "REF-2024-02-001"
    },
    {
      id: 3,
      date: "2024-01-15",
      montant: 170000,
      type: "Caution + Loyer Janvier",
      methode: "Virement bancaire",
      statut: "Payé",
      reference: "REF-2024-01-001"
    },
    {
      id: 4,
      date: "2024-01-01",
      montant: 100000,
      type: "Loyer Décembre",
      methode: "Mobile Money",
      statut: "Payé",
      reference: "REF-2023-12-001"
    }
  ];

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case "Payé":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Payé</Badge>;
      case "En attente":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">En attente</Badge>;
      case "Échec":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Échec</Badge>;
      default:
        return <Badge variant="secondary">{statut}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Paiement"
      breadcrumb="Accueil / Diligence / Paiement"
    >
      <div className="space-y-8 animate-in fade-in duration-700">

        {/* Header */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Paiement</h2>
              <p className="text-slate-500 mt-2 font-medium">Régler votre loyer et consulter l'historique des paiements</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400 font-medium">Échéance</p>
              <p className="text-2xl font-black text-red-600">05 Juillet 2024</p>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <Card className="rounded-[2rem] border-slate-100">
          <CardHeader className="bg-slate-50/50 pb-4">
            <CardTitle className="text-lg font-black text-slate-800">Récapitulatif du paiement</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <p className="text-sm font-bold text-slate-400 uppercase">Loyer mensuel</p>
                <p className="text-2xl font-black text-slate-900">{montantAPayer.loyer.toLocaleString()} FCFA</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-bold text-slate-400 uppercase">Charges locatives</p>
                <p className="text-2xl font-black text-slate-900">{montantAPayer.charges.toLocaleString()} FCFA</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-bold text-slate-400 uppercase">Caution (si applicable)</p>
                <p className="text-2xl font-black text-slate-900">{montantAPayer.caution.toLocaleString()} FCFA</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-bold text-slate-400 uppercase">Frais divers</p>
                <p className="text-2xl font-black text-slate-900">{montantAPayer.frais.toLocaleString()} FCFA</p>
              </div>
            </div>

            <div className="border-t border-slate-200 mt-8 pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-bold text-slate-600">Total à payer</p>
                  <p className="text-sm text-slate-500">Caution + Loyer du mois + Charges</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-black text-indigo-600">{montantAPayer.total.toLocaleString()} FCFA</p>
                  <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-bold text-lg">
                    Payer maintenant
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="rounded-[2rem] border-slate-100">
          <CardHeader className="bg-slate-50/50 pb-4">
            <CardTitle className="text-lg font-black text-slate-800">Mode de paiement</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <RadioGroup defaultValue="mobile-money" className="space-y-4">
              <div className="flex items-center space-x-4 p-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                <RadioGroupItem value="mobile-money" id="mobile-money" />
                <Label htmlFor="mobile-money" className="flex items-center gap-4 flex-1 cursor-pointer">
                  <div className="h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center">
                    <Smartphone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Mobile Money</p>
                    <p className="text-sm text-slate-600">Orange Money, MTN Mobile Money, etc.</p>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                <RadioGroupItem value="carte-bancaire" id="carte-bancaire" />
                <Label htmlFor="carte-bancaire" className="flex items-center gap-4 flex-1 cursor-pointer">
                  <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <CreditCard className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Carte bancaire</p>
                    <p className="text-sm text-slate-600">Visa, Mastercard, American Express</p>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-4 p-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                <RadioGroupItem value="virement" id="virement" />
                <Label htmlFor="virement" className="flex items-center gap-4 flex-1 cursor-pointer">
                  <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                    <Banknote className="text-slate-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Virement bancaire</p>
                    <p className="text-sm text-slate-600">Transfert depuis votre compte bancaire</p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Payment History */}
        <Card className="rounded-[2rem] border-slate-100 overflow-hidden">
          <CardHeader className="bg-slate-50/50 pb-4">
            <CardTitle className="text-lg font-black text-slate-800">Historique des paiements</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-100 hover:bg-slate-50/50">
                  <TableHead className="font-bold text-slate-600">Date</TableHead>
                  <TableHead className="font-bold text-slate-600">Type</TableHead>
                  <TableHead className="font-bold text-slate-600">Montant</TableHead>
                  <TableHead className="font-bold text-slate-600">Méthode</TableHead>
                  <TableHead className="font-bold text-slate-600">Statut</TableHead>
                  <TableHead className="font-bold text-slate-600">Référence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {historiquePaiements.map((paiement) => (
                  <TableRow key={paiement.id} className="border-slate-100 hover:bg-slate-50/50">
                    <TableCell className="font-medium">
                      {formatDate(paiement.date)}
                    </TableCell>
                    <TableCell className="font-medium">{paiement.type}</TableCell>
                    <TableCell className="font-bold text-slate-900">
                      {paiement.montant.toLocaleString()} FCFA
                    </TableCell>
                    <TableCell className="font-medium">{paiement.methode}</TableCell>
                    <TableCell>{getStatusBadge(paiement.statut)}</TableCell>
                    <TableCell className="font-mono text-sm text-slate-600">
                      {paiement.reference}
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

export default Paiement;