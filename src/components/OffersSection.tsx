import cardVente from "@/assets/card-vente.jpg";
import cardLocation from "@/assets/card-location.jpg";
import { ArrowRight } from "lucide-react";

const offers = [
  {
    title: "Vente de parcelles",
    desc: "Parcelles vides, terrains agricoles et terrains bâtis disponibles dans tout le Bénin.",
    img: cardVente,
    tags: ["Parcelle vide", "Terrain agricole", "Terrain bâti"],
  },
  {
    title: "Gestion locative",
    desc: "Studios, appartements, résidences meublées et domaines à louer pour tous vos besoins.",
    img: cardLocation,
    tags: ["Studio", "Appartement", "Résidence meublée", "Domaine"],
  },
];

const OffersSection = () => (
  <section className="py-16 md:py-24 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Nos Offres</h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-secondary" />
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Découvrez nos services spécialisés en immobilier au Bénin
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={640}
                height={512}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl text-foreground">{offer.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{offer.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {offer.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-5 btn-pill-primary text-sm flex items-center gap-2">
                En savoir plus <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OffersSection;
