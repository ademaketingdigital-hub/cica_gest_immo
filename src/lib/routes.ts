/**
 * Configuration des routes pour chaque rôle utilisateur
 * Ce fichier centralise toutes les routes d'accès du système CANAL CICA
 */

export const ROUTES = {
  // Pages publiques
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",

  // Dashboards
  VENTE: {
    DASHBOARD: "/vente/dashboard",
    GESTION: "/vente/gestion",
    VALIDATION_PROPRIO: "/vente/validation-proprio",
    PUBLIER: "/vente/publier",
    PRE_VALIDATION: "/vente/pre-validation",
    CONTRAT: "/vente/contrat",
    VALIDER: "/vente/valider",
    AJOUTER_PROPRIO: "/vente/ajouter-proprio",
    AJOUTER_DOMAINE: "/vente/ajouter-domaine",
    ETAT_VENTES: "/vente/etat-ventes",
    ETAT_FACTURES: "/vente/etat-factures",
    ETAT_ARRIERES: "/vente/etat-arrieres",
    ETAT_PAIEMENTS: "/vente/etat-paiements",
    ECHEANCIER: "/vente/echeancier",
    DOMAINES_DISPO: "/vente/domaines-dispo",
    DOMAINES_RESERVES: "/vente/domaines-reserves",
    VENDUS: "/vente/vendus",
    ETAT_PROPRIO: "/vente/etat-proprio",
    MARGES: "/vente/marges",
  },

  LOCATION: {
    DASHBOARD: "/location/dashboard",
    GESTION: "/location/gestion",
    VALIDATION_EVENT: "/location/validation-event",
    CONFIRMER_DEPENSE: "/location/confirmer-depense",
    VALIDER_MOIS: "/location/valider-mois",
    CLOTURE: "/location/cloture",
    AJOUTER_PROPRIO: "/location/ajouter-proprio",
    AJOUTER_MAISON: "/location/ajouter-maison",
    AJOUTER_LOCATAIRE: "/location/ajouter-locataire",
    DEMANDER_DEPENSE: "/location/demander-depense",
    AJOUTER_EVENT: "/location/ajouter-event",
    INFO_MAISON: "/location/info-maison",
    SITUATION_CAISSE: "/location/situation-caisse",
    ETAT_RECETTES: "/location/etat-recettes",
    ETAT_PAYE: "/location/etat-paye",
    ETAT_CAUTION: "/location/etat-caution",
    ETAT_IMPAYE: "/location/etat-impaye",
    ETAT_AVANCE: "/location/etat-avance",
    ETAT_DEPENSE: "/location/etat-depense",
    RAPPORT_PERIODIQUE: "/location/rapport-periodique",
  },

  CAISSE: {
    DASHBOARD: "/caisse/dashboard",
    ENCAISSEMENTS: "/caisse/encaissements",
    DEPENSES: "/caisse/depenses",
    ETATS: "/caisse/etats",
    PAIEMENTS: "/caisse/paiements",
    CAISSE_DIRECT: "/caisse/caisse-direct",
    VALIDATION_PAIEMENT: "/caisse/validation-paiement",
    EDITER_FACTURE: "/caisse/editer-facture",
    DEPENSE_PROPRIO: "/caisse/depense-proprio",
    PAIEMENT_PROPRIO: "/caisse/paiement-proprio",
    SITUATION: "/caisse/situation",
    ETAT_PAIEMENT: "/caisse/etat-paiement",
  },

  PROPRIETAIRE: {
    DASHBOARD: "/proprietaire/dashboard",
    MES_PROPRIETES: "/proprietaire/mes-proprietes",
    REVENUS: "/proprietaire/revenus",
    HISTORIQUE: "/proprietaire/historique",
    RAPPORTS: "/proprietaire/rapports",
    VALIDER_DEPENSE: "/proprietaire/valider-depense",
    ACQUITTER_PAIEMENT: "/proprietaire/acquitter-paiement",
    INFO_MAISON: "/proprietaire/info-maison",
    ETAT_CAUTION: "/proprietaire/etat-caution",
    ETAT_IMPAYE: "/proprietaire/etat-impaye",
    ETAT_AVANCE: "/proprietaire/etat-avance",
    ETAT_DEPENSE: "/proprietaire/etat-depense",
    RAPPORT_PERIODIQUE: "/proprietaire/rapport-periodique",
  },

  LOCATAIRE: {
    DASHBOARD: "/locataire/dashboard",
    MES_LOCATIONS: "/locataire/mes-locations",
    QUITTANCES: "/locataire/quittances",
    CONTRATS: "/locataire/contrats",
    PAIEMENTS: "/locataire/paiements",
    MES_VISITES: "/locataire/mes-visites",
    VALIDER_CHOIX: "/locataire/valider-choix",
    PAIEMENT: "/locataire/paiement",
    ECHEANCIER: "/locataire/echeancier",
    CONTRAT: "/locataire/contrat",
  },

  CLIENT_PARCELLE: {
    DASHBOARD: "/client-parcelle/dashboard",
    MES_ACHATS: "/client-parcelle/mes-achats",
    PAIEMENTS: "/client-parcelle/paiements",
    CONTRATS: "/client-parcelle/contrats",
    FACTURES: "/client-parcelle/factures",
    VISITER: "/client-parcelle/visiter",
    VALIDER_CHOIX: "/client-parcelle/valider-choix",
    PAIEMENT: "/client-parcelle/paiement",
    ECHEANCIER: "/client-parcelle/echeancier",
    ETAT_PAIEMENT: "/client-parcelle/etat-paiement",
    CONTRAT: "/client-parcelle/contrat",
    FACTURE: "/client-parcelle/facture",
    HISTORIQUE: "/client-parcelle/historique",
  },

  SUPERVISEUR: {
    DASHBOARD: "/superviseur/dashboard",
    VENTES: "/superviseur/ventes",
    LOCATIONS: "/superviseur/locations",
    CAISSE: "/superviseur/caisse",
    RAPPORTS: "/superviseur/rapports",
    UTILISATEURS: "/superviseur/utilisateurs",
    SUIVI_VENTES: "/superviseur/suivi-ventes",
    SUIVI_LOCATIONS: "/superviseur/suivi-locations",
    SUIVI_CAISSE: "/superviseur/suivi-caisse",
    SUIVI_PAIEMENTS: "/superviseur/suivi-paiements",
    RAPPORT_QUOTIDIEN: "/superviseur/rapport-quotidien",
    RAPPORT_HEBDO: "/superviseur/rapport-hebdo",
    RAPPORT_MENSUEL: "/superviseur/rapport-mensuel",
    PERFORMANCE: "/superviseur/performance",
    ALERTES: "/superviseur/alertes",
    VOIR_UTILISATEURS: "/superviseur/voir-utilisateurs",
    ACTIVITE: "/superviseur/activite",
  },

  GERANT: {
    DASHBOARD: "/gerant/dashboard",
    OPERATIONS: "/gerant/operations",
    EQUIPE: "/gerant/equipe",
    FINANCE: "/gerant/finance",
    RAPPORTS: "/gerant/rapports",
    PARAMETRES: "/gerant/parametres",
    PROCESSUS_VENTE: "/gerant/processus-vente",
    PROCESSUS_LOCATION: "/gerant/processus-location",
    REGLES: "/gerant/regles",
    ALERTES: "/gerant/alertes",
    VOIR_EQUIPE: "/gerant/voir-equipe",
    AJOUTER_USER: "/gerant/ajouter-user",
    ASSIGNER_ROLES: "/gerant/assigner-roles",
    PERFORMANCE: "/gerant/performance",
    BUDGET: "/gerant/budget",
    BILAN: "/gerant/bilan",
    APPROBATIONS: "/gerant/approbations",
    RAPPORT_MENSUEL: "/gerant/rapport-mensuel",
    RAPPORT_ACTIVITE: "/gerant/rapport-activite",
    KPI: "/gerant/kpi",
  },

  COMMERCIAL: {
    DASHBOARD: "/commercial/dashboard",
    PROSPECTS: "/commercial/prospects",
    MES_VENTES: "/commercial/mes-ventes",
    MES_LOCATIONS: "/commercial/mes-locations",
    COMMISSIONS: "/commercial/commissions",
    RAPPORTS: "/commercial/rapports",
    AJOUTER_PROSPECT: "/commercial/ajouter-prospect",
    VOIR_PROSPECTS: "/commercial/voir-prospects",
    SUIVRE_PROSPECTS: "/commercial/suivre-prospects",
    QUALIFIER_LEADS: "/commercial/qualifier-leads",
    NOUVELLES_VENTES: "/commercial/nouvelles-ventes",
    VENTES_EN_COURS: "/commercial/ventes-en-cours",
    VENTES_FERMEES: "/commercial/ventes-fermees",
    HISTORIQUE_VENTES: "/commercial/historique-ventes",
    PROPOSITIONS_LOCATION: "/commercial/propositions-location",
    LOCATIONS_ACTIVES: "/commercial/locations-actives",
    HISTORIQUE_LOCATION: "/commercial/historique-location",
    MES_COMMISSIONS: "/commercial/mes-commissions",
    DETAIL_COMMISSIONS: "/commercial/detail-commissions",
    RELEVE_PAIEMENTS: "/commercial/relevé-paiements",
    MA_PERFORMANCE: "/commercial/performance",
    STATS_VENTES: "/commercial/stats-ventes",
    RAPPORT_MENSUEL: "/commercial/rapport-mensuel",
  },

  ADMINISTRATEUR: {
    DASHBOARD: "/administrateur/dashboard",
    UTILISATEURS: "/administrateur/utilisateurs",
    PERMISSIONS: "/administrateur/permissions",
    SYSTEME: "/administrateur/systeme",
    LOGS: "/administrateur/logs",
    BACKUPS: "/administrateur/backups",
    VOIR_USERS: "/administrateur/voir-users",
    CREER_USER: "/administrateur/creer-user",
    MODIFIER_USER: "/administrateur/modifier-user",
    DESACTIVER_USER: "/administrateur/desactiver-user",
    REINIT_MDP: "/administrateur/reinit-mdp",
    GERER_ROLES: "/administrateur/gerer-roles",
    ASSIGNER_PERMS: "/administrateur/assigner-perms",
    AUDIT_TRAIL: "/administrateur/audit-trail",
    PARAMETRES: "/administrateur/parametres",
    EMAIL_CONFIG: "/administrateur/email-config",
    INTEGRATIONS: "/administrateur/integrations",
    TAXES: "/administrateur/taxes",
    LOGS_SYSTEME: "/administrateur/logs-systeme",
    LOGS_ACTIVITES: "/administrateur/logs-activites",
    ERREURS_ALERTES: "/administrateur/erreurs-alertes",
    PERFORMANCE: "/administrateur/performance",
    BACKUPS_FOLDER: "/administrateur/backups",
    RESTAURATION: "/administrateur/restauration",
    NETTOYAGE_BD: "/administrateur/nettoyage-bd",
    CACHE: "/administrateur/cache",
  },

  SUPER_ADMIN: {
    DASHBOARD: "/super-admin/dashboard",
    ADMINISTRATION: "/super-admin/administration",
    ENTREPRISES: "/super-admin/entreprises",
    UTILISATEURS: "/super-admin/utilisateurs",
    SECURITE: "/super-admin/securite",
    RAPPORTS: "/super-admin/rapports",
    INFRASTRUCTURE: "/super-admin/infrastructure",
    VOIR_ENTREPRISES: "/super-admin/voir-entreprises",
    CREER_ENTREPRISE: "/super-admin/creer-entreprise",
    MODIFIER_ENTREPRISE: "/super-admin/modifier-entreprise",
    LICENCES: "/super-admin/licences",
    TOUS_USERS: "/super-admin/tous-users",
    CREER_SUPERADMIN: "/super-admin/creer-superadmin",
    GESTION_ACCES: "/super-admin/gestion-acces",
    AUDIT_COMPLET: "/super-admin/audit-complet",
    CERTIFICATS: "/super-admin/certificats",
    DEUX_FA: "/super-admin/2fa",
    LOGS_SECURITE: "/super-admin/logs-securite",
    ALERTES_SECURITE: "/super-admin/alertes-securite",
    SERVEURS: "/super-admin/serveurs",
    BASES_DONNEES: "/super-admin/bases-donnees",
    BACKUPS_GLOBAUX: "/super-admin/backups-globaux",
    DISASTER_RECOVERY: "/super-admin/disaster-recovery",
    RAPPORT_GENERAL: "/super-admin/rapport-general",
    ANALYTICS: "/super-admin/analytics",
    RAPPORTS_FINANCIERS: "/super-admin/rapports-financiers",
    KPI_GLOBAUX: "/super-admin/kpi-globaux",
    PARAMETRES_SYSTEME: "/super-admin/parametres-systeme",
    API_MANAGEMENT: "/super-admin/api-management",
    WEBHOOKS: "/super-admin/webhooks",
    MISES_A_JOUR: "/super-admin/mises-a-jour",
  },
};

export const getRoleDashboard = (role: string): string => {
  switch (role) {
    case "gestionnaire_vente":
      return ROUTES.VENTE.DASHBOARD;
    case "gestionnaire_location":
      return ROUTES.LOCATION.DASHBOARD;
    case "tresorer":
      return ROUTES.CAISSE.DASHBOARD;
    case "proprietaire":
      return ROUTES.PROPRIETAIRE.DASHBOARD;
    case "locataire":
      return ROUTES.LOCATAIRE.DASHBOARD;
    case "client_parcelle":
      return ROUTES.CLIENT_PARCELLE.DASHBOARD;
    case "superviseur":
      return ROUTES.SUPERVISEUR.DASHBOARD;
    case "gerant":
      return ROUTES.GERANT.DASHBOARD;
    case "commercial":
      return ROUTES.COMMERCIAL.DASHBOARD;
    case "administrateur":
      return ROUTES.ADMINISTRATEUR.DASHBOARD;
    case "super_admin":
      return ROUTES.SUPER_ADMIN.DASHBOARD;
    default:
      return ROUTES.HOME;
  }
};
