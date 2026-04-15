import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, MapPin, Euro, Clock, CheckCircle } from "lucide-react";

const ContratLocation: React.FC = () => {

  const sidebarItems = [
    { label: "Tableau de Bord", href: "/locataire/dashboard", icon: <FileText size={20}/> },
    {
      label: "Diligence",
      href: "#",
      icon: <Download size={20} />,
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

  // Mock contract data
  const contratDetails = {
    numero: "CONTRAT-2024-001",
    statut: "Actif",
    dateSignature: "2024-01-15",
    dateEntree: "2024-01-15",
    dateFin: "2025-12-31",
    duree: "24 mois",
    loyerMensuel: 85000,
    chargesMensuelles: 15000,
    caution: 170000,
    adresseBien: "Villa Espoir A1, Quartier PK8, Libreville",
    typeBien: "Appartement F3",
    superficie: "75 m²",
    proprietaire: "M. Jean Dupont",
    locataire: "M. Sossa",
    etatDesLieux: "Conforme",
    dernierRenouvellement: null,
    conditionsSpeciales: [
      "Animaux interdits sans autorisation préalable",
      "Sous-location interdite",
      "Jardin privatif à entretenir par le locataire",
      "Parking réservé numéro 3"
    ]
  };

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case "Actif":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Actif</Badge>;
      case "En cours de renouvellement":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">En cours de renouvellement</Badge>;
      case "Terminé":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Terminé</Badge>;
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

  const handleDownloadContrat = () => {
    // In a real app, this would download the PDF
    alert("Téléchargement du contrat de location en cours...");
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Contrat de Location"
      breadcrumb="Accueil / Consulter états / Contrat de Location"
    >
      <div className="space-y-8 animate-in fade-in duration-700">

        {/* Header */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Contrat de Location</h2>
              <p className="text-slate-500 mt-2 font-medium">Consultez les détails complets de votre bail</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400 font-medium">Numéro de contrat</p>
              <p className="text-lg font-black text-slate-900">{contratDetails.numero}</p>
            </div>
          </div>
        </div>

        {/* Contract Status */}
        <Card className="rounded-[2rem] border-slate-100">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-slate-900">Statut du contrat</h3>
                <p className="text-slate-600 mt-1">Contrat signé et en cours de validité</p>
              </div>
              {getStatusBadge(contratDetails.statut)}
            </div>
          </CardContent>
        </Card>

        {/* Contract Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Property Information */}
          <Card className="rounded-[2rem] border-slate-100">
            <CardHeader className="bg-slate-50/50 pb-4">
              <CardTitle className="text-lg font-black text-slate-800 flex items-center gap-2">
                <MapPin size={20} />
                Informations du bien
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Type de bien</p>
                <p className="text-lg font-black text-slate-900">{contratDetails.typeBien}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Adresse</p>
                <p className="text-lg font-black text-slate-900">{contratDetails.adresseBien}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Superficie</p>
                <p className="text-lg font-black text-slate-900">{contratDetails.superficie}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">État des lieux</p>
                <p className="text-lg font-black text-green-600">{contratDetails.etatDesLieux}</p>
              </div>
            </CardContent>
          </Card>

          {/* Financial Information */}
          <Card className="rounded-[2rem] border-slate-100">
            <CardHeader className="bg-slate-50/50 pb-4">
              <CardTitle className="text-lg font-black text-slate-800 flex items-center gap-2">
                <Euro size={20} />
                Informations financières
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Loyer mensuel</p>
                <p className="text-lg font-black text-indigo-600">{contratDetails.loyerMensuel.toLocaleString()} FCFA</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Charges mensuelles</p>
                <p className="text-lg font-black text-slate-900">{contratDetails.chargesMensuelles.toLocaleString()} FCFA</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Caution</p>
                <p className="text-lg font-black text-slate-900">{contratDetails.caution.toLocaleString()} FCFA</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Total mensuel</p>
                <p className="text-lg font-black text-slate-900">
                  {(contratDetails.loyerMensuel + contratDetails.chargesMensuelles).toLocaleString()} FCFA
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contract Duration */}
          <Card className="rounded-[2rem] border-slate-100">
            <CardHeader className="bg-slate-50/50 pb-4">
              <CardTitle className="text-lg font-black text-slate-800 flex items-center gap-2">
                <Calendar size={20} />
                Durée du bail
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Date de signature</p>
                <p className="text-lg font-black text-slate-900">{formatDate(contratDetails.dateSignature)}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Date d'entrée</p>
                <p className="text-lg font-black text-slate-900">{formatDate(contratDetails.dateEntree)}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Date de fin</p>
                <p className="text-lg font-black text-slate-900">{formatDate(contratDetails.dateFin)}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Durée totale</p>
                <p className="text-lg font-black text-slate-900">{contratDetails.duree}</p>
              </div>
            </CardContent>
          </Card>

          {/* Parties Involved */}
          <Card className="rounded-[2rem] border-slate-100">
            <CardHeader className="bg-slate-50/50 pb-4">
              <CardTitle className="text-lg font-black text-slate-800 flex items-center gap-2">
                <CheckCircle size={20} />
                Parties contractantes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Propriétaire</p>
                <p className="text-lg font-black text-slate-900">{contratDetails.proprietaire}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Locataire</p>
                <p className="text-lg font-black text-slate-900">{contratDetails.locataire}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Dernier renouvellement</p>
                <p className="text-lg font-black text-slate-900">
                  {contratDetails.dernierRenouvellement ? formatDate(contratDetails.dernierRenouvellement) : "Aucun"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Conditions */}
        <Card className="rounded-[2rem] border-slate-100">
          <CardHeader className="bg-slate-50/50 pb-4">
            <CardTitle className="text-lg font-black text-slate-800">Conditions spéciales</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3">
              {contratDetails.conditionsSpeciales.map((condition, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{condition}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* PDF Viewer / Download Section */}
        <Card className="rounded-[2rem] border-slate-100">
          <CardHeader className="bg-slate-50/50 pb-4">
            <CardTitle className="text-lg font-black text-slate-800">Document contractuel</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-slate-100 rounded-2xl p-8 text-center">
                <FileText size={48} className="text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 mb-4">Contrat de location - {contratDetails.numero}</p>
                <p className="text-sm text-slate-500">PDF - 2.4 MB - Dernière modification: {formatDate(contratDetails.dateSignature)}</p>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={handleDownloadContrat}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-bold text-lg"
                >
                  <Download size={20} className="mr-2" />
                  Télécharger le contrat
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ContratLocation;