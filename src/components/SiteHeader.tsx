import { Building2, LogIn } from "lucide-react";

const SiteHeader = () => (
  <header className="bg-background border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-3 px-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <Building2 className="w-6 h-6 text-primary-foreground" />
        </div>
        <span className="font-heading font-bold text-lg text-primary">CANAL CICA</span>
      </div>

      {/* Title */}
      <h1 className="hidden md:block font-heading font-bold text-xl tracking-wide text-primary">
        CANAL CICA IMMO.COM
      </h1>

      {/* Login */}
      <button className="btn-pill-outline text-sm flex items-center gap-2">
        <LogIn className="w-4 h-4" />
        S'IDENTIFIER
      </button>
    </div>
  </header>
);

export default SiteHeader;
