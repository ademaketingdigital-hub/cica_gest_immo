import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import NotFound from "./pages/NotFound.tsx";

// Vente pages
import VenteDashboard from "./pages/vente/VenteDashboard";
import ValidationProprio from "./pages/vente/ValidationProprio";
import PublierDomaine from "./pages/vente/PublierDomaine";
import PreValidationEcheancier from "./pages/vente/PreValidationEcheancier";
import ContratPrevente from "./pages/vente/ContratPrevente";
import ValiderVente from "./pages/vente/ValiderVente";
import AjouterProprio from "./pages/vente/AjouterProprio";
import AjouterDomaine from "./pages/vente/AjouterDomaine";
import EtatVentes from "./pages/vente/EtatVentes";
import EtatFactures from "./pages/vente/EtatFactures";
import EtatArrieres from "./pages/vente/EtatArrieres";
import EtatPaiements from "./pages/vente/EtatPaiements";
import Echeancier from "./pages/vente/Echeancier";
import DomainesDispo from "./pages/vente/DomainesDispo";
import DomainesReserves from "./pages/vente/DomainesReserves";
import Vendus from "./pages/vente/Vendus";
import EtatProprio from "./pages/vente/EtatProprio";
import Marges from "./pages/vente/Marges";

// Client parcelles
import Visiter from "./pages/client-parcelle/Visiter";
import ValiderChoix from "./pages/client-parcelle/ValiderChoix";
import Paiement from "./pages/client-parcelle/Paiement";
import EcheancierClient from "./pages/client-parcelle/Echeancier";
import HistoriquePaiement from "./pages/client-parcelle/HistoriquePaiement";
import ContratClient from "./pages/client-parcelle/Contrat";
import Factures from "./pages/client-parcelle/Factures";
import HistoriqueDomaines from "./pages/client-parcelle/HistoriqueDomaines";
import ClientParcellesDashboard from "./pages/client-parcelle/ClientParcellesDashboard";

// Location pages
import LocationDashboard from "./pages/location/LocationDashboard";
import ValidationEvenement from "./pages/location/ValidationEvenement";
import ConfirmerDepense from "./pages/location/ConfirmerDepense";
import ValiderEtatMois from "./pages/location/ValiderEtatMois";
import ClotureMensuel from "./pages/location/ClotureMensuel";
import AjoutProprietaire from "./pages/location/AjoutProprietaire";
import AjoutMaison from "./pages/location/AjoutMaison";
import AjoutLocataire from "./pages/location/AjoutLocataire";
import DemanderDepense from "./pages/location/DemanderDepense";
import AjoutEvenement from "./pages/location/AjoutEvenement";
import InfoMaisonLocation from "./pages/location/InfoMaison";
import SituationCaisse from "./pages/location/SituationCaisse";
import EtatRecettes from "./pages/location/EtatRecettes";
import EtatPayeProprio from "./pages/location/EtatPayeProprio";
import EtatCautionLocation from "./pages/location/EtatCaution";
import EtatImpayeLocation from "./pages/location/EtatImpaye";
import EtatAvanceLocation from "./pages/location/EtatAvance";
import EtatDepenseLocation from "./pages/location/EtatDepense";
import RapportPeriodiqueLocation from "./pages/location/RapportPeriodique";

// Proprietaire pages
import ProprietaireDashboard from "./pages/proprietaire/ProprietaireDashboard";
import ValiderDepense from "./pages/proprietaire/ValiderDepense";
import AcquitterPaiement from "./pages/proprietaire/AcquitterPaiement";
import InfoMaisonProprio from "./pages/proprietaire/InfoMaison";
import EtatCautionProprio from "./pages/proprietaire/EtatCaution";
import EtatImpayeProprio from "./pages/proprietaire/EtatImpaye";
import EtatAvanceProprio from "./pages/proprietaire/EtatAvance";
import EtatDepenseProprio from "./pages/proprietaire/EtatDepense";
import RapportPeriodiqueProprio from "./pages/proprietaire/RapportPeriodique";

// Caisse pages
import CaisseDashboard from "./pages/caisse/CaisseDashboard";
import CaisseDirecte from "./pages/caisse/CaisseDirecte";
import ValidationPaiement from "./pages/caisse/ValidationPaiement";
import EditerFacture from "./pages/caisse/EditerFacture";
import DepenseProprietaire from "./pages/caisse/DepenseProprietaire";
import PaiementProprietaire from "./pages/caisse/PaiementProprietaire";
import SituationCaissePage from "./pages/caisse/SituationCaissePage";
import EtatPaiement from "./pages/caisse/EtatPaiement";

// Other dashboards
import LocataireDashboard from "./pages/locataire/LocataireDashboard";
import MesVisites from "./pages/locataire/MesVisites";
import ValiderChoixLocataire from "./pages/locataire/ValiderChoix";
import PaiementLocataire from "./pages/locataire/Paiement";
import EcheancierLocataire from "./pages/locataire/Echeancier";
import MesQuittances from "./pages/locataire/MesQuittances";
import ContratLocation from "./pages/locataire/ContratLocation";
import SuperviseurDashboard from "./pages/superviseur/SuperviseurDashboard";
import VenteOverview from "./pages/superviseur/VenteOverview";
import ValidationProprioSuperviseur from "./pages/superviseur/vente/ValidationProprio";
import DomainesAttenteSuperviseur from "./pages/superviseur/vente/DomainesAttente";
import EtatVentesSuperviseur from "./pages/superviseur/vente/EtatVentes";
import LocationOverview from "./pages/superviseur/LocationOverview";
import ValidationEvenementSuperviseur from "./pages/superviseur/location/ValidationEvenement";
import EtatMoisSuperviseur from "./pages/superviseur/location/EtatMois";
import ClotureMensuelleSuperviseur from "./pages/superviseur/location/ClotureMensuelle";
import CaisseSupervision from "./pages/superviseur/CaisseSupervision";
import GestionnairesVente from "./pages/superviseur/equipes/Vente";
import GestionnairesLocation from "./pages/superviseur/equipes/Location";
import IndicateursPerformance from "./pages/superviseur/equipes/Performance";
import RapportsGlobaux from "./pages/superviseur/RapportsGlobaux";
import StatistiquesSuperviseur from "./pages/superviseur/rapports/Statistiques";
import GerantDashboard from "./pages/gerant/GerantDashboard";
import Utilisateurs from "./pages/gerant/Utilisateurs";
import GestionRoles from "./pages/gerant/GestionRoles";
import AssignerRoles from "./pages/gerant/AssignerRoles";
import NouvelUtilisateur from "./pages/gerant/NouvelUtilisateur";
import Overview from "./pages/gerant/Overview";
import SupervisionVente from "./pages/gerant/SupervisionVente";
import SupervisionLocation from "./pages/gerant/SupervisionLocation";
import SupervisionCaisse from "./pages/gerant/SupervisionCaisse";
import EtatVentesGerant from "./pages/gerant/EtatVentes";
import EtatLocatif from "./pages/gerant/EtatLocatif";
import SituationCaisseGlobale from "./pages/gerant/SituationCaisseGlobale";
import RapportPeriodique from "./pages/gerant/RapportPeriodique";
import EtatProprietaires from "./pages/gerant/EtatProprietaires";
import EtatLocataires from "./pages/gerant/EtatLocataires";
import Statistiques from "./pages/gerant/Statistiques";
import ChiffreAffaires from "./pages/gerant/ChiffreAffaires";
import Performance from "./pages/gerant/Performance";
import TauxOccupation from "./pages/gerant/TauxOccupation";
import MargeGlobale from "./pages/gerant/MargeGlobale";
import ParametresGerant from "./pages/gerant/ParametresGerant";
import HistoriqueActions from "./pages/gerant/HistoriqueActions";
import CommercialDashboard from "./pages/commercial/CommercialDashboard";
import AdministrateurDashboard from "./pages/administrateur/AdministrateurDashboard";
import SuperAdminDashboard from "./pages/super-admin/SuperAdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Vente */}
            <Route path="/vente/dashboard" element={<VenteDashboard />} />
            <Route path="/vente/validation-proprio" element={<ValidationProprio />} />
            <Route path="/vente/publier" element={<PublierDomaine />} />
            <Route path="/vente/pre-validation" element={<PreValidationEcheancier />} />
            <Route path="/vente/contrat" element={<ContratPrevente />} />
            <Route path="/vente/valider" element={<ValiderVente />} />
            <Route path="/vente/ajouter-proprio" element={<AjouterProprio />} />
            <Route path="/vente/ajouter-domaine" element={<AjouterDomaine />} />
            <Route path="/vente/etat-ventes" element={<EtatVentes />} />
            <Route path="/vente/etat-factures" element={<EtatFactures />} />
            <Route path="/vente/etat-arrieres" element={<EtatArrieres />} />
            <Route path="/vente/etat-paiements" element={<EtatPaiements />} />
            <Route path="/vente/echeancier" element={<Echeancier />} />
            <Route path="/vente/domaines-dispo" element={<DomainesDispo />} />
            <Route path="/vente/domaines-reserves" element={<DomainesReserves />} />
            <Route path="/vente/vendus" element={<Vendus />} />
            <Route path="/vente/etat-proprio" element={<EtatProprio />} />
            <Route path="/vente/marges" element={<Marges />} />

            {/* Client parcelles */}
            <Route path="/client-parcelle/visiter" element={<Visiter />} />
            <Route path="/client-parcelle/valider-choix" element={<ValiderChoix />} />
            <Route path="/client-parcelle/paiement" element={<Paiement />} />
            <Route path="/client-parcelle/echeancier" element={<EcheancierClient />} />
            <Route path="/client-parcelle/historique-paiement" element={<HistoriquePaiement />} />
            <Route path="/client-parcelle/contrat" element={<ContratClient />} />
            <Route path="/client-parcelle/factures" element={<Factures />} />
            <Route path="/client-parcelle/historique-domaines" element={<HistoriqueDomaines />} />
            <Route path="/client-parcelle/dashboard" element={<ClientParcellesDashboard />} />

            {/* Location */}
            <Route path="/location/dashboard" element={<LocationDashboard />} />
            <Route path="/location/validation-evenement" element={<ValidationEvenement />} />
            <Route path="/location/confirmer-depense" element={<ConfirmerDepense />} />
            <Route path="/location/valider-etat-mois" element={<ValiderEtatMois />} />
            <Route path="/location/cloture-mensuel" element={<ClotureMensuel />} />
            <Route path="/location/ajout-proprietaire" element={<AjoutProprietaire />} />
            <Route path="/location/ajout-maison" element={<AjoutMaison />} />
            <Route path="/location/ajout-locataire" element={<AjoutLocataire />} />
            <Route path="/location/demander-depense" element={<DemanderDepense />} />
            <Route path="/location/ajout-evenement" element={<AjoutEvenement />} />
            <Route path="/location/info-maison" element={<InfoMaisonLocation />} />
            <Route path="/location/situation-caisse" element={<SituationCaisse />} />
            <Route path="/location/etat-recettes" element={<EtatRecettes />} />
            <Route path="/location/etat-paye-proprietaire" element={<EtatPayeProprio />} />
            <Route path="/location/etat-caution" element={<EtatCautionLocation />} />
            <Route path="/location/etat-impaye" element={<EtatImpayeLocation />} />
            <Route path="/location/etat-avance" element={<EtatAvanceLocation />} />
            <Route path="/location/etat-depense" element={<EtatDepenseLocation />} />
            <Route path="/location/rapport-periodique" element={<RapportPeriodiqueLocation />} />

            {/* Propriétaire */}
            <Route path="/proprietaire/dashboard" element={<ProprietaireDashboard />} />
            <Route path="/proprietaire/valider-depense" element={<ValiderDepense />} />
            <Route path="/proprietaire/acquitter-paiement" element={<AcquitterPaiement />} />
            <Route path="/proprietaire/info-maison" element={<InfoMaisonProprio />} />
            <Route path="/proprietaire/etat-caution" element={<EtatCautionProprio />} />
            <Route path="/proprietaire/etat-impaye" element={<EtatImpayeProprio />} />
            <Route path="/proprietaire/etat-avance" element={<EtatAvanceProprio />} />
            <Route path="/proprietaire/etat-depense" element={<EtatDepenseProprio />} />
            <Route path="/proprietaire/rapport/mois-n" element={<RapportPeriodiqueProprio />} />
            <Route path="/proprietaire/rapport/mois-1" element={<RapportPeriodiqueProprio />} />
            <Route path="/proprietaire/rapport/mois-2" element={<RapportPeriodiqueProprio />} />
            <Route path="/proprietaire/rapport/mois-3" element={<RapportPeriodiqueProprio />} />

            {/* Caisse / Trésorier */}
            <Route path="/caisse/dashboard" element={<CaisseDashboard />} />
            <Route path="/caisse/encaissement-direct" element={<CaisseDirecte />} />
            <Route path="/caisse/validation-paiement" element={<ValidationPaiement />} />
            <Route path="/caisse/editer-facture" element={<EditerFacture />} />
            <Route path="/caisse/depense-proprietaire" element={<DepenseProprietaire />} />
            <Route path="/caisse/paiement-proprietaire" element={<PaiementProprietaire />} />
            <Route path="/caisse/situation-caisse" element={<SituationCaissePage />} />
            <Route path="/caisse/etat-paiement" element={<EtatPaiement />} />

            {/* Locataire */}
            <Route path="/locataire/dashboard" element={<LocataireDashboard />} />
            <Route path="/locataire/visites" element={<MesVisites />} />
            <Route path="/locataire/valider-choix" element={<ValiderChoixLocataire />} />
            <Route path="/locataire/paiement" element={<PaiementLocataire />} />
            <Route path="/locataire/echeancier" element={<EcheancierLocataire />} />
            <Route path="/locataire/quittances" element={<MesQuittances />} />
            <Route path="/locataire/contrat" element={<ContratLocation />} />

            <Route path="/superviseur/dashboard" element={<SuperviseurDashboard />} />
            <Route path="/superviseur/vente" element={<VenteOverview />} />
            <Route path="/superviseur/vente/overview" element={<VenteOverview />} />
            <Route path="/superviseur/vente/validation-proprio" element={<ValidationProprioSuperviseur />} />
            <Route path="/superviseur/vente/domaines-attente" element={<DomainesAttenteSuperviseur />} />
            <Route path="/superviseur/vente/etat-ventes" element={<EtatVentesSuperviseur />} />
            <Route path="/superviseur/location" element={<LocationOverview />} />
            <Route path="/superviseur/location/overview" element={<LocationOverview />} />
            <Route path="/superviseur/location/validation-evenement" element={<ValidationEvenementSuperviseur />} />
            <Route path="/superviseur/location/etat-mois" element={<EtatMoisSuperviseur />} />
            <Route path="/superviseur/location/cloture-mensuelle" element={<ClotureMensuelleSuperviseur />} />
            <Route path="/superviseur/equipes/vente" element={<GestionnairesVente />} />
            <Route path="/superviseur/equipes/location" element={<GestionnairesLocation />} />
            <Route path="/superviseur/equipes/performance" element={<IndicateursPerformance />} />
            <Route path="/superviseur/rapports" element={<RapportsGlobaux />} />
            <Route path="/superviseur/rapports/global" element={<RapportsGlobaux />} />
            <Route path="/superviseur/statistiques" element={<StatistiquesSuperviseur />} />
            <Route path="/superviseur/situation-caisse" element={<CaisseSupervision />} />

            {/* Gérant */}
            <Route path="/gerant/dashboard" element={<GerantDashboard />} />
            <Route path="/gerant/utilisateurs" element={<Utilisateurs />} />
            <Route path="/gerant/gestion-roles" element={<GestionRoles />} />
            <Route path="/gerant/assigner-roles" element={<AssignerRoles />} />
            <Route path="/gerant/nouvel-utilisateur" element={<NouvelUtilisateur />} />
            <Route path="/gerant/overview" element={<Overview />} />
            <Route path="/gerant/supervision-vente" element={<SupervisionVente />} />
            <Route path="/gerant/supervision-location" element={<SupervisionLocation />} />
            <Route path="/gerant/supervision-caisse" element={<SupervisionCaisse />} />
            <Route path="/gerant/etat-ventes" element={<EtatVentesGerant />} />
            <Route path="/gerant/etat-locatifs" element={<EtatLocatif />} />
            <Route path="/gerant/situation-caisse-globale" element={<SituationCaisseGlobale />} />
            <Route path="/gerant/rapport-periodique" element={<RapportPeriodique />} />
            <Route path="/gerant/etat-proprietaires" element={<EtatProprietaires />} />
            <Route path="/gerant/etat-locataires" element={<EtatLocataires />} />
            <Route path="/gerant/statistiques" element={<Statistiques />} />
            <Route path="/gerant/chiffre-affaires" element={<ChiffreAffaires />} />
            <Route path="/gerant/performance" element={<Performance />} />
            <Route path="/gerant/taux-occupation" element={<TauxOccupation />} />
            <Route path="/gerant/marge-globale" element={<MargeGlobale />} />
            <Route path="/gerant/parametres" element={<ParametresGerant />} />
            <Route path="/gerant/historique-actions" element={<HistoriqueActions />} />

            {/* Other dashboards */}
            <Route path="/commercial/dashboard" element={<CommercialDashboard />} />
            <Route path="/administrateur/dashboard" element={<AdministrateurDashboard />} />
            <Route path="/super-admin/dashboard" element={<SuperAdminDashboard />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
