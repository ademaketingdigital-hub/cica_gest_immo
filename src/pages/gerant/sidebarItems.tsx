import React from "react";
import { LayoutDashboard, ShieldCheck, Zap, FileText, BarChart3, Settings2 } from "lucide-react";

export const gerantSidebarItems = [
  {
    label: "Tableau de Bord",
    href: "/gerant/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: "Gestion des Rôles",
    href: "#",
    icon: <ShieldCheck size={20} />,
    children: [
      { label: "Liste des utilisateurs", href: "/gerant/utilisateurs" },
      { label: "Gestion des rôles", href: "/gerant/gestion-roles" },
      { label: "Assigner rôles", href: "/gerant/assigner-roles" },
      { label: "Créer nouvel utilisateur", href: "/gerant/nouvel-utilisateur" },
    ],
  },
  {
    label: "Supervision Globale",
    href: "#",
    icon: <Zap size={20} />,
    children: [
      { label: "Vue d'ensemble", href: "/gerant/overview" },
      { label: "Supervision Vente", href: "/gerant/supervision-vente" },
      { label: "Supervision Location", href: "/gerant/supervision-location" },
      { label: "Supervision Caisse", href: "/gerant/supervision-caisse" },
    ],
  },
  {
    label: "États & Rapports",
    href: "#",
    icon: <FileText size={20} />,
    children: [
      { label: "États des ventes", href: "/gerant/etat-ventes" },
      { label: "États locatifs", href: "/gerant/etat-locatifs" },
      { label: "Situation caisse globale", href: "/gerant/situation-caisse-globale" },
      { label: "Rapport périodique", href: "/gerant/rapport-periodique" },
      { label: "État des propriétaires", href: "/gerant/etat-proprietaires" },
      { label: "État des locataires", href: "/gerant/etat-locataires" },
    ],
  },
  {
    label: "Statistiques",
    href: "#",
    icon: <BarChart3 size={20} />,
    children: [
      { label: "Statistiques générales", href: "/gerant/statistiques" },
      { label: "Chiffre d'affaires", href: "/gerant/chiffre-affaires" },
      { label: "Performance par période", href: "/gerant/performance" },
      { label: "Taux d'occupation", href: "/gerant/taux-occupation" },
      { label: "Marge globale", href: "/gerant/marge-globale" },
    ],
  },
  {
    label: "Configuration",
    href: "#",
    icon: <Settings2 size={20} />,
    children: [
      { label: "Paramètres du système", href: "/gerant/parametres" },
      { label: "Historique des actions", href: "/gerant/historique-actions" },
    ],
  },
];
