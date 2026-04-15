import heroBg from "@/assets/hero-bg.jpg";
import { Search, MapPin } from "lucide-react";

const HeroSection = () => (
  <section className="relative h-[520px] md:h-[600px] overflow-hidden">
    <img src={heroBg} alt="Vue aérienne immobilière au Bénin" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
              <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight max-w-4xl animate-fade-in-up drop-shadow-lg bg-gradient-to-r from-white to-primary-foreground/20 bg-clip-text text-transparent hover:scale-[1.02] transition-all duration-500">
        Trouvez votre terrain ou votre logement idéal au Bénin
      </h2>
      <p className="mt-4 text-primary-foreground/80 text-lg md:text-xl max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        CANAL CICA IMMO — Votre partenaire de confiance pour la vente de parcelles et la gestion locative
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <button className="btn-pill-secondary flex items-center gap-2 text-base hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <Search className="w-5 h-5" /> Rechercher un bien
        </button>
        <button className="btn-pill bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/30 flex items-center gap-2 text-base backdrop-blur-sm">
          <MapPin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" /> Voir les offres
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
