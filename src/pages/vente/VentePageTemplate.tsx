import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, FileCheck, PlusCircle, BarChart3 } from "lucide-react";

interface SidebarItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
}

export const venteSidebarItems: SidebarItem[] = [
  { label: "Tableau de Bord", href: "/vente/dashboard", icon: <LayoutDashboard size={20}/> },
  {
    label: "Diligence",
    href: "#",
    icon: <FileCheck size={20} />,
    children: [
      { label: "Validation Proprio", href: "/vente/validation-proprio" },
      { label: "Publier domaine", href: "/vente/publier" },
      { label: "Pré-validation échéancier", href: "/vente/pre-validation" },
      { label: "Contrat de Prévente", href: "/vente/contrat" },
      { label: "Valider vente", href: "/vente/valider" },
    ],
  },
  {
    label: "Ajout",
    href: "#",
    icon: <PlusCircle size={20} />,
    children: [
      { label: "Ajout propriétaire", href: "/vente/ajouter-proprio" },
      { label: "Ajout domaine", href: "/vente/ajouter-domaine" },
    ],
  },
  {
    label: "Consulter états",
    href: "#",
    icon: <BarChart3 size={20} />,
    children: [
      { label: "Etat des ventes", href: "/vente/etat-ventes" },
      { label: "Etats de Factures", href: "/vente/etat-factures" },
      { label: "Etat des arrièrés", href: "/vente/etat-arrieres" },
      { label: "Etat des paiements", href: "/vente/etat-paiements" },
      { label: "Échéancier", href: "/vente/echeancier" },
      { label: "Domaine disponible", href: "/vente/domaines-dispo" },
      { label: "Domaine réservé", href: "/vente/domaines-reserves" },
      { label: "Domaine vendu", href: "/vente/vendus" },
      { label: "Etat propriétaire", href: "/vente/etat-proprio" },
      { label: "Marge", href: "/vente/marges" },
    ],
  },
];

interface VentePageWrapperProps {
  title: string;
  breadcrumb: string;
  subtitle?: string;
  rightAction?: React.ReactNode;
  children: React.ReactNode;
}

export const VentePageWrapper: React.FC<VentePageWrapperProps> = ({
  title,
  breadcrumb,
  subtitle,
  rightAction,
  children,
}) => {
  return (
    <DashboardLayout
      sidebarItems={venteSidebarItems}
      title="Gestion Vente de Parcelles"
      breadcrumb={`Espace Gestionnaire / ${breadcrumb}`}
    >
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">{title}</h2>
            {subtitle && <p className="mt-2 text-slate-500 font-medium max-w-2xl">{subtitle}</p>}
          </div>
          {rightAction && <div className="flex flex-wrap gap-3">{rightAction}</div>}
        </div>
        {children}
      </div>
    </DashboardLayout>
  );
};

export const CardBox: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">{children}</div>
);

export const StatusPill: React.FC<{ status: string }> = ({ status }) => {
  const statusMap: Record<string, string> = {
    "En attente": "bg-amber-100 text-amber-700",
    "Publié": "bg-emerald-100 text-emerald-700",
    "Rejeté": "bg-rose-100 text-rose-700",
    "Signé": "bg-emerald-100 text-emerald-700",
    "Impayée": "bg-rose-100 text-rose-700",
    "Payée": "bg-emerald-100 text-emerald-700",
    "Partiellement payée": "bg-amber-100 text-amber-700",
    "En retard": "bg-rose-100 text-rose-700",
    "Disponible": "bg-slate-100 text-slate-700",
    "Réservé": "bg-amber-100 text-amber-700",
    "Vendu": "bg-emerald-100 text-emerald-700",
  };

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${statusMap[status] ?? "bg-slate-100 text-slate-700"}`}>
      {status}
    </span>
  );
};
