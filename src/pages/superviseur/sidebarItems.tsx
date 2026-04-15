import React from "react";
import { LayoutDashboard, TrendingUp, Map, Users, BarChart3, ShieldCheck, ClipboardCheck, CalendarDays } from "lucide-react";

export const superviseurSidebarItems = [
  {
    label: "Tableau de Bord",
    href: "/superviseur/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: "Supervision Vente",
    href: "#",
    icon: <TrendingUp size={20} />,
    children: [
      { label: "Vue d'ensemble", href: "/superviseur/vente/overview" },
      { label: "Validation Proprio", href: "/superviseur/vente/validation-proprio" },
      { label: "Domaines en attente", href: "/superviseur/vente/domaines-attente" },
      { label: "État des ventes", href: "/superviseur/vente/etat-ventes" },
    ],
  },
  {
    label: "Supervision Location",
    href: "#",
    icon: <Map size={20} />,
    children: [
      { label: "Vue d'ensemble locative", href: "/superviseur/location/overview" },
      { label: "Validation d'événement", href: "/superviseur/location/validation-evenement" },
      { label: "État du mois", href: "/superviseur/location/etat-mois" },
      { label: "Clôture mensuelle", href: "/superviseur/location/cloture-mensuelle" },
    ],
  },
  {
    label: "Équipes & Performance",
    href: "#",
    icon: <Users size={20} />,
    children: [
      { label: "Gestionnaires Vente", href: "/superviseur/equipes/vente" },
      { label: "Gestionnaires Location", href: "/superviseur/equipes/location" },
      { label: "Indicateurs Performance", href: "/superviseur/equipes/performance" },
    ],
  },
  {
    label: "Rapports & États",
    href: "#",
    icon: <BarChart3 size={20} />,
    children: [
      { label: "Rapport global", href: "/superviseur/rapports/global" },
      { label: "Statistiques annuelles", href: "/superviseur/statistiques" },
      { label: "Situation caisse globale", href: "/superviseur/situation-caisse" },
    ],
  },
];
