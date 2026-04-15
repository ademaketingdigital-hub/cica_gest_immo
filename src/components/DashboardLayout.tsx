import React from "react";
import { Bell, ChevronDown } from "lucide-react";
import { Sidebar } from "./Sidebar";

interface SidebarItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarItems: SidebarItem[];
  title: string;
  breadcrumb?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  sidebarItems,
  title,
  breadcrumb,
}) => {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar items={sidebarItems} title={title} />
      <main className="flex-1 overflow-auto">
        {/* Top Header */}
<div className="bg-white border-b border-slate-200 px-6 lg:px-8 py-4 flex items-center justify-between shadow-sm">          <div>            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>            {breadcrumb && <p className="text-xs md:text-sm text-slate-500 mt-1">{breadcrumb}</p>}          </div>          <div className="flex items-center gap-4">            {/* Notifications */}            <button className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all duration-200">              <Bell size={20} />              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">3</span>            </button>            {/* User Dropdown */}            <div className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-xl transition-all duration-200 cursor-pointer group">              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center font-bold text-white shadow-lg">                JD              </div>              <div className="hidden md:block">                <p className="text-sm font-semibold text-slate-900">Jean Dupont</p>                <p className="text-xs text-slate-500">Gestionnaire Vente</p>              </div>              <ChevronDown size={16} className="text-slate-400 group-hover:rotate-180 transition-transform duration-200" />            </div>          </div>        </div>
        {/* Content */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};
