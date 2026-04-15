/**
 * Types et Interfaces pour CANAL CICA
 * Fichier centralisé pour tous les modèles de données
 */

import { UserRole } from "@/contexts/AuthContext";

/**
 * ============================================
 * UTILISATEURS & AUTHENTIFICATION
 * ============================================
 */

export interface User {
  id: string;
  nom: string;
  prenom?: string;
  email: string;
  telephone: string;
  role: UserRole;
  statut: "actif" | "inactif" | "suspendu";
  dateCreation: Date;
  dateModification: Date;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

/**
 * ============================================
 * VENTE DE PARCELLES
 * ============================================
 */

export interface Domaine {
  id: string;
  nom: string;
  surface: number; // en m²
  prix: number;
  localisation: string;
  statut: "disponible" | "reserve" | "vendu";
  proprietaire: Proprietaire;
  acheteur?: Client;
  dateCreation: Date;
  dateVente?: Date;
  contratPreVente?: ContratPreVente;
}

export interface Proprietaire {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  nif?: string;
  dateCreation: Date;
  domaines: Domaine[];
}

export interface Client {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  nif?: string;
  dateCreation: Date;
}

export interface ContratPreVente {
  id: string;
  domaine: Domaine;
  client: Client;
  montantTotal: number;
  montantVerse: number;
  dateSignature: Date;
  statut: "en_attente" | "valide" | "termine";
  echeancier: Echeancier[];
}

export interface Echeancier {
  id: string;
  contrat: ContratPreVente;
  dateEcheance: Date;
  montantDu: number;
  montantVerse: number;
  statut: "en_attente" | "paye" | "retard";
}

export interface Facture {
  id: string;
  numero: string;
  montant: number;
  dateCreation: Date;
  dateEcheance: Date;
  statut: "impayee" | "payee" | "partielle";
  client: Client;
  domaine: Domaine;
}

/**
 * ============================================
 * GESTION LOCATIVE
 * ============================================
 */

export interface Maison {
  id: string;
  adresse: string;
  surface: number; // en m²
  nombrePieces: number;
  proprietaire: Proprietaire;
  locataire?: Locataire;
  loyer: number;
  caution: number;
  charges?: number;
  statut: "disponible" | "louee" | "maintenance";
  dateCreation: Date;
}

export interface Locataire {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  nif?: string;
  dateCreation: Date;
}

export interface ContratLocation {
  id: string;
  maison: Maison;
  locataire: Locataire;
  dateDebut: Date;
  dateFin?: Date;
  loyer: number;
  caution: number;
  statut: "actif" | "termine" | "resilié";
}

export interface Paiement {
  id: string;
  montant: number;
  type: "loyer" | "charge" | "depense" | "restitution_caution";
  dateEcheance: Date;
  datePayement?: Date;
  statut: "impaye" | "paye" | "partiel";
  contrat: ContratLocation;
}

export interface Depense {
  id: string;
  maison: Maison;
  montant: number;
  categorie: string;
  description: string;
  dateCreation: Date;
  statut: "demandee" | "validee" | "payee";
  justificatif?: string;
}

export interface Evenement {
  id: string;
  maison: Maison;
  titre: string;
  description: string;
  date: Date;
  montantEstime?: number;
  type: "maintenance" | "reparation" | "nettoyage" | "visite" | "autre";
  statut: "planifie" | "en_cours" | "termine";
}

/**
 * ============================================
 * OPÉRATIONS DE CAISSE
 * ============================================
 */

export interface Caisse {
  id: string;
  solde: number;
  dateCreation: Date;
  dateModification: Date;
}

export interface Transaction {
  id: string;
  type: "encaissement" | "depense";
  montant: number;
  date: Date;
  description: string;
  reference?: string;
  document?: string;
  statut: "en_attente" | "validee" | "rejetee";
}

export interface Encaissement {
  id: string;
  montant: number;
  source: "vente" | "location" | "autre";
  reference: string;
  date: Date;
  statut: "en_attente" | "valide" | "refuse";
  validated_by?: User;
}

export interface DepenseCaisse {
  id: string;
  montant: number;
  beneficiaire: string;
  motif: string;
  date: Date;
  statut: "en_attente" | "approuvee" | "payee";
  justificatif?: string;
}

/**
 * ============================================
 * RAPPORTS & ÉTATS
 * ============================================
 */

export interface EtatVentes {
  periodeDebut: Date;
  periodeFin: Date;
  totalVentes: number;
  totalMontant: number;
  ventesPendantes: number;
  ventesTerminees: number;
}

export interface EtatFactures {
  periodeDebut: Date;
  periodeFin: Date;
  totalEmises: number;
  totalPaye: number;
  totalImpayee: number;
  montantDu: number;
}

export interface RapportPeriodique {
  id: string;
  periode: "mensuel" | "trimestriel" | "annuel";
  dateDebut: Date;
  dateFin: Date;
  ventes: EtatVentes;
  factures: EtatFactures;
  caisse: {
    soldeDebut: number;
    entrées: number;
    sorties: number;
    soldeFin: number;
  };
  generePar: User;
  dateGeneration: Date;
}

/**
 * ============================================
 * API RESPONSES
 * ============================================
 */

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, string>;
  };
  meta?: {
    page?: number;
    pageSize?: number;
    total?: number;
  };
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

/**
 * ============================================
 * FILTRES & REQUÊTES
 * ============================================
 */

export interface QueryFilters {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  search?: string;
  filters?: Record<string, any>;
}

export interface DomaineFilters extends QueryFilters {
  statut?: Domaine["statut"];
  prixMin?: number;
  prixMax?: number;
  proprietaire?: string;
  localisation?: string;
}

export interface MaisonFilters extends QueryFilters {
  statut?: Maison["statut"];
  loyerMin?: number;
  loyerMax?: number;
  proprietaire?: string;
  locataire?: string;
}

export interface TransactionFilters extends QueryFilters {
  type?: "encaissement" | "depense";
  statut?: "en_attente" | "validee" | "rejetee";
  montantMin?: number;
  montantMax?: number;
  dateDebut?: Date;
  dateFin?: Date;
}

/**
 * ============================================
 * FORMULAIRES & INPUTS
 * ============================================
 */

export interface FormState {
  isSubmitting: boolean;
  isValidating: boolean;
  hasErrors: boolean;
  errors: Record<string, string>;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
}

export interface DomaineFormData {
  nom: string;
  surface: number;
  prix: number;
  localisation: string;
  proprietaireId: string;
}

export interface MaisonFormData {
  adresse: string;
  surface: number;
  nombrePieces: number;
  loyer: number;
  caution: number;
  charges?: number;
  proprietaireId: string;
}

export interface DepenseFormData {
  maisonId: string;
  montant: number;
  categorie: string;
  description: string;
  justificatif?: File;
}

/**
 * ============================================
 * SIDEBAR & NAVIGATION
 * ============================================
 */

export interface SidebarItem {
  label: string;
  href: string;
  icon?: string | React.ReactNode;
  badge?: number;
  children?: SidebarItem[];
}

/**
 * ============================================
 * NOTIFICATIONS
 * ============================================
 */

export interface Notification {
  id: string;
  titre: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  dateCreation: Date;
  lue: boolean;
  action?: {
    label: string;
    href: string;
  };
}

/**
 * ============================================
 * STATISTIQUES & MÉTRIQUES
 * ============================================
 */

export interface KPI {
  label: string;
  value: number | string;
  unit?: string;
  change?: number; // pourcentage
  trend?: "up" | "down" | "stable";
}

export interface Dashboard {
  kpis: KPI[];
  chartsData?: any[];
  recentActivities?: Activity[];
}

export interface Activity {
  id: string;
  titre: string;
  description: string;
  type: string;
  user: User;
  date: Date;
}
