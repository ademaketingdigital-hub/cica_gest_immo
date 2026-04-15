import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LogOut, ChevronDown, ChevronRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

interface SidebarItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
}

interface SidebarProps {
  items: SidebarItem[];
  title: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ items, title }) => {
  const location = useLocation();
  const { logout, user } = useAuth();
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const isItemActive = (item: SidebarItem): boolean => {
    if (location.pathname === item.href) return true;
    if (item.children) {
      return item.children.some(child => location.pathname === child.href);
    }
    return false;
  };

  const renderItem = (item: SidebarItem, index: number, level: number = 0) => {
    const isActive = isItemActive(item);
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(index);
    const paddingLeft = level * 16 + 16; // 16px per level

    return (
      <li key={index}>
        {hasChildren ? (
          <button
            onClick={() => toggleExpanded(index)}
            className={cn(
              "flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200 text-left",
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            )}
            style={{ paddingLeft }}
          >
            {item.icon && <span className="mr-3">{item.icon}</span>}
            <span className="font-medium flex-1">{item.label}</span>
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        ) : (
          <Link
            to={item.href}
            className={cn(
              "flex items-center px-4 py-3 rounded-lg transition-colors duration-200",
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            )}
            style={{ paddingLeft }}
          >
            {item.icon && <span className="mr-3">{item.icon}</span>}
            <span className="font-medium">{item.label}</span>
          </Link>
        )}
        {hasChildren && isExpanded && (
          <ul className="mt-1 space-y-1">
            {item.children.map((child, childIndex) => (
              <li key={childIndex}>
                {renderItem(child, index * 100 + childIndex, level + 1)}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
      <aside className="w-64 bg-slate-900 text-white h-screen flex flex-col">
      {/* Header */}      <div className="p-6 border-b border-slate-700 shrink-0">
        <h1 className="text-xl font-bold">CANAL CICA</h1>
        <p className="text-sm text-slate-400 mt-2">{title}</p>
      </div>

      {/* User Info */}
      {user && (
        <div className="p-4 bg-slate-800 mx-3 rounded-lg my-4">
          <p className="text-sm font-semibold">{user.nom}</p>
          <p className="text-xs text-slate-400">{user.email}</p>
        </div>
      )}

      {/* Navigation */}      <nav className="flex-1 px-4 py-6 overflow-hidden">        <div className="h-full overflow-y-auto sidebar-scroll">          <ul className="space-y-2">            {items.map((item, index) => renderItem(item, index))}          </ul>        </div>      </nav>

      {/* Logout Button */}      <div className="p-4 border-t border-slate-700 shrink-0">
        <Button
          onClick={handleLogout}
          variant="destructive"
          className="w-full flex items-center justify-center gap-2"
        >
          <LogOut size={18} />
          Déconnexion
        </Button>
      </div>
    </aside>
  );
};
