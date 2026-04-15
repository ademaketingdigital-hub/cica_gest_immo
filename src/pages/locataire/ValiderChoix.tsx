import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Home, Euro, Calendar, CheckCircle, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

const ValiderChoix: React.FC = () => {

  const sidebarItems = [
    { label: "Tableau de Bord", href: "/locataire/dashboard", icon: <Home size={20}/> },
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
      icon: <Calendar size={20} />,
      children: [
        { label: "Echéancier", href: "/locataire/echeancier" },
        { label: "Mes quittances", href: "/locataire/quittances" },
        { label: "Contrat de location", href: "/locataire/contrat" },
      ]
    }
  ];

  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [dureeBail, setDureeBail] = useState("");
  const [dateEntree, setDateEntree] = useState("");

  // Mock data for visited properties
  const proprietes = [
    {
      id: 1,
      type: "Appartement F3",
      adresse: "Villa Espoir A1, PK8, Libreville",
      loyer: 85000,
      charges: 15000,
      superficie: "75 m²",
      chambres: 3,
      photos: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"],
      description: "Magnifique appartement F3 en bon état, proche des commodités.",
      visiteDate: "2024-04-10"
    },
    {
      id: 2,
      type: "Studio B4",
      adresse: "Résidence Soleil, PK12, Libreville",
      loyer: 65000,
      charges: 10000,
      superficie: "35 m²",
      chambres: 1,
      photos: ["/api/placeholder/300/200", "/api/placeholder/300/200"],
      description: "Studio moderne et lumineux, idéal pour étudiant ou jeune professionnel.",
      visiteDate: "2024-04-08"
    },
    {
      id: 3,
      type: "Duplex F4",
      adresse: "Quartier Louis, Centre-ville, Libreville",
      loyer: 120000,
      charges: 20000,
      superficie: "95 m²",
      chambres: 4,
      photos: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"],
      description: "Superbe duplex familial avec jardin privatif.",
      visiteDate: "2024-04-05"
    }
  ];

  const handleChooseProperty = (property: any) => {
    setSelectedProperty(property);
  };

  const handleConfirmChoice = () => {
    // Here we would normally submit the form and redirect to payment
    alert(`Choix confirmé pour ${selectedProperty.type} - Durée: ${dureeBail} mois, Entrée: ${dateEntree}`);
    setSelectedProperty(null);
    setDureeBail("");
    setDateEntree("");
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="Valider mon Choix"
      breadcrumb="Accueil / Diligence / Valider Choix"
    >
      <div className="space-y-8 animate-in fade-in duration-700">

        {/* Header */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Valider mon Choix</h2>
              <p className="text-slate-500 mt-2 font-medium">Choisissez le logement qui vous convient parmi vos visites</p>
            </div>
            <Badge className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-xl">
              {proprietes.length} propriétés visitées
            </Badge>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {proprietes.map((propriete) => (
            <Card key={propriete.id} className="rounded-[2rem] border-slate-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <div className="aspect-video bg-slate-100 flex items-center justify-center">
                  <ImageIcon size={48} className="text-slate-400" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-100 text-green-800">Visité</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{propriete.type}</h3>
                    <p className="text-sm text-slate-600 flex items-center gap-1 mt-1">
                      <MapPin size={16} />
                      {propriete.adresse}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400 font-medium">Superficie</p>
                      <p className="font-bold text-slate-900">{propriete.superficie}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">Chambres</p>
                      <p className="font-bold text-slate-900">{propriete.chambres}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400 font-medium">Loyer mensuel</p>
                        <p className="text-2xl font-black text-indigo-600">{propriete.loyer.toLocaleString()} FCFA</p>
                        <p className="text-xs text-slate-500">+ {propriete.charges.toLocaleString()} FCFA charges</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 line-clamp-2">{propriete.description}</p>

                  <div className="flex gap-2 pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1 rounded-xl">
                          Voir détails
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="rounded-2xl max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-black">{propriete.type}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-bold text-slate-600">Adresse</p>
                              <p className="text-lg">{propriete.adresse}</p>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-600">Superficie</p>
                              <p className="text-lg font-black">{propriete.superficie}</p>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-600">Chambres</p>
                              <p className="text-lg font-black">{propriete.chambres}</p>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-600">Date de visite</p>
                              <p className="text-lg">{new Date(propriete.visiteDate).toLocaleDateString('fr-FR')}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-bold text-slate-600 mb-2">Description</p>
                            <p className="text-slate-700">{propriete.description}</p>
                          </div>

                          <div className="bg-slate-50 p-4 rounded-xl">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-sm font-bold text-slate-600">Loyer mensuel</p>
                                <p className="text-2xl font-black text-indigo-600">{propriete.loyer.toLocaleString()} FCFA</p>
                              </div>
                              <div>
                                <p className="text-sm font-bold text-slate-600">Charges</p>
                                <p className="text-2xl font-black text-slate-600">{propriete.charges.toLocaleString()} FCFA</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      onClick={() => handleChooseProperty(propriete)}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold"
                    >
                      Je choisis ce logement
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Confirmation Dialog */}
        <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
          <DialogContent className="rounded-2xl max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black">Confirmer votre choix</DialogTitle>
            </DialogHeader>

            {selectedProperty && (
              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h4 className="font-bold text-slate-900">{selectedProperty.type}</h4>
                  <p className="text-sm text-slate-600 mt-1">{selectedProperty.adresse}</p>
                  <p className="text-lg font-black text-indigo-600 mt-2">
                    {selectedProperty.loyer.toLocaleString()} FCFA/mois
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="duree" className="text-sm font-bold text-slate-700">
                      Durée du bail (en mois)
                    </Label>
                    <Select value={dureeBail} onValueChange={setDureeBail}>
                      <SelectTrigger className="mt-1 rounded-xl">
                        <SelectValue placeholder="Sélectionnez la durée" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12">12 mois</SelectItem>
                        <SelectItem value="24">24 mois</SelectItem>
                        <SelectItem value="36">36 mois</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="dateEntree" className="text-sm font-bold text-slate-700">
                      Date d'entrée souhaitée
                    </Label>
                    <Input
                      id="dateEntree"
                      type="date"
                      value={dateEntree}
                      onChange={(e) => setDateEntree(e.target.value)}
                      className="mt-1 rounded-xl"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <p className="text-sm text-blue-800 font-medium">
                    Une fois validé, vous serez redirigé vers le paiement de la caution + premier loyer.
                  </p>
                </div>

                <DialogFooter className="gap-2">
                  <Button variant="outline" onClick={() => setSelectedProperty(null)} className="rounded-xl">
                    Annuler
                  </Button>
                  <Button
                    onClick={handleConfirmChoice}
                    disabled={!dureeBail || !dateEntree}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold"
                  >
                    <CheckCircle size={16} className="mr-2" />
                    Confirmer mon choix
                  </Button>
                </DialogFooter>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default ValiderChoix;