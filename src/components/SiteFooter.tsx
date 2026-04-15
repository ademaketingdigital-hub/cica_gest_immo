import { Building2, Phone, Mail, MapPin } from "lucide-react";

const SiteFooter = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-6 h-6" />
            <span className="font-heading font-bold text-lg">CANAL CICA IMMO</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Société béninoise spécialisée dans la vente de parcelles et la gestion locative.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Nos Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Vente de parcelles</li>
            <li>Gestion locative</li>
            <li>Conseil en législation foncière</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /> Godomey, route de Ouidah, Bénin</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> +229 01 90 30 62 30</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> contact.canalcica.net</li>
          </ul>
        </div>
      </div>
      <hr className="my-8 border-primary-foreground/20" />
      <p className="text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} CANAL CICA SARL — RCCM : RB/ABC/18 - B - 2425 — Tous droits réservés
      </p>
    </div>
  </footer>
);

export default SiteFooter;
