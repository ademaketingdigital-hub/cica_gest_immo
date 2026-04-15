import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, CheckSquare, BarChart3 } from "lucide-react";

interface SidebarItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
}

export const clientParcelleSidebarItems: SidebarItem[] = [
  { label: "Tableau de Bord", href: "/client-parcelle/dashboard", icon: <LayoutDashboard size={20}/> },
  {
    label: "Diligence",
    href: "#",
    icon: <CheckSquare size={20} />,
    children: [
      { label: "Visiter", href: "/client-parcelle/visiter" },
      { label: "Valider Choix", href: "/client-parcelle/valider-choix" },
      { label: "Paiement", href: "/client-parcelle/paiement" },
    ]
  },
  {
    label: "Consulter états",
    href: "#",
    icon: <BarChart3 size={20} />,
    children: [
      { label: "Echéancier", href: "/client-parcelle/echeancier" },
      { label: "Paiement", href: "/client-parcelle/historique-paiement" },
      { label: "Contrat de pré-vente", href: "/client-parcelle/contrat" },
      { label: "Facture de vente", href: "/client-parcelle/factures" },
      { label: "Historique des domaines", href: "/client-parcelle/historique-domaines" },
    ]
  }
];

interface ClientParcellePageWrapperProps {
  title: string;
  breadcrumb: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const ClientParcellePageWrapper: React.FC<ClientParcellePageWrapperProps> = ({
  title,
  breadcrumb,
  subtitle,
  children,
}) => {
  return (
    <DashboardLayout
      sidebarItems={clientParcelleSidebarItems}
      title="Patrimoine Foncier"
      breadcrumb={breadcrumb}
    >
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-slate-500 font-medium max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </DashboardLayout>
  );
};

export const StatusPill: React.FC<{ status: string }> = ({ status }) => {
  const map: Record<string, string> = {
    "Disponible": "bg-emerald-100 text-emerald-700",
    "Réservée": "bg-amber-100 text-amber-700",
    "Visité": "bg-blue-100 text-blue-700",
    "Choisie": "bg-slate-100 text-slate-700",
    "Payé": "bg-emerald-100 text-emerald-700",
    "À venir": "bg-slate-100 text-slate-700",
    "En retard": "bg-rose-100 text-rose-700",
    "En attente": "bg-amber-100 text-amber-700",
    "Signé": "bg-emerald-100 text-emerald-700",
    "Annulée": "bg-rose-100 text-rose-700",
  };

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${map[status] ?? "bg-slate-100 text-slate-700"}`}>
      {status}
    </span>
  );
};
