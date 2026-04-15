import { useState } from "react";
import { Home, ChevronDown, Menu, X } from "lucide-react";

interface MenuItem {
  label: string;
  submenu?: { heading?: string; items: string[] }[];
}

const menuItems: MenuItem[] = [
  { label: "ACCUEIL" },
  {
    label: "À VENDRE",
    submenu: [{ items: ["Parcelle vide", "Terrain agricole", "Terrain bâti", "Recherche spécifique"] }],
  },
  {
    label: "À LOUER",
    submenu: [
      { heading: "Habitations", items: ["Studio", "Chambre salon", "Appartement", "Boutique", "Résidence meublée"] },
      { heading: "Domaines", items: ["Terrain vide", "Domaine vide", "Terrain agricole"] },
    ],
  },
  {
    label: "LÉGISLATION",
    submenu: [{ items: ["Aperçu sur le code foncier", "Formalité d'achat", "Formalité de titre de foncier", "Zoom sur les impôts"] }],
  },
  {
    label: "À PROPOS",
    submenu: [{ items: ["Historique", "Vision", "Nous contacter"] }],
  },
];

const SiteNavbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary" style={{ boxShadow: "var(--nav-shadow)" }}>
      <div className="container mx-auto px-4">
        {/* Mobile toggle */}
        <div className="flex md:hidden items-center justify-between py-3">
          <span className="font-heading font-bold text-primary-foreground text-sm">Menu</span>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-primary-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop nav */}
        <ul className={`${mobileOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-stretch md:items-center justify-center`}>
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.submenu && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="nav-link flex items-center gap-1 w-full md:w-auto">
                {item.label === "ACCUEIL" && <Home className="w-4 h-4" />}
                {item.label}
                {item.submenu && <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {item.submenu && openMenu === item.label && (
                <div className="md:absolute left-0 top-full bg-card rounded-lg shadow-xl border border-border min-w-[220px] py-2 z-50 animate-fade-in-up"
                  style={{ animationDuration: "0.2s" }}>
                  {item.submenu.map((group, gi) => (
                    <div key={gi}>
                      {group.heading && <span className="dropdown-label">{group.heading}</span>}
                      {group.items.map((sub) => (
                        <a key={sub} className="dropdown-item">{sub}</a>
                      ))}
                      {gi < item.submenu!.length - 1 && <hr className="my-1 border-border" />}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SiteNavbar;
