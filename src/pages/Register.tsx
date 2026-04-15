import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Building2, Eye, EyeOff, UserPlus, Home, Key, Briefcase, Users, ShieldCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth, redirectAfterLogin, UserRole } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

// Import de tes composants de structure
import SiteHeader from "@/components/SiteHeader"; 
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import heroBg from "@/assets/hero-bg.jpg"; 

const ROLES_CONFIG: { value: UserRole; label: string; icon: React.ReactNode; description: string; open: boolean }[] = [
  {
    value: "client_parcelle",
    label: "Client Parcelle",
    icon: <Home className="w-5 h-5" />,
    description: "Achat de terrains",
    open: true,
  },
  {
    value: "proprietaire",
    label: "Propriétaire",
    icon: <Key className="w-5 h-5" />,
    description: "Gérer vos biens",
    open: true,
  },
  {
    value: "locataire",
    label: "Locataire",
    icon: <Users className="w-5 h-5" />,
    description: "Accéder au logement",
    open: false,
  },
  {
    value: "gestionnaire_vente",
    label: "Admin Vente",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Réservé staff",
    open: false,
  },
  {
    value: "gestionnaire_location",
    label: "Admin Loca.",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Réservé staff",
    open: false,
  },
  {
    value: "tresorer",
    label: "Trésorier",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Réservé staff",
    open: false,
  },
];

const Register = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<UserRole>("client_parcelle");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    const selectedRole = ROLES_CONFIG.find((r) => r.value === role);
    if (selectedRole && !selectedRole.open) {
      setError("Ce rôle requiert une inscription par l'administrateur.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const mockUser = {
        id: "new-" + Date.now(),
        nom,
        email,
        telephone,
        role,
      };
      login(mockUser, "demo-token-new");
      navigate(redirectAfterLogin(role));
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      <SiteHeader />
      <SiteNavbar />  

      {/* SECTION PRINCIPALE AVEC IMAGE DE FOND */}
      <main className="flex-1 relative flex items-center justify-center py-16 px-4">
        {/* Background Image avec Overlay Sombre */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Fond Immobilier" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[3px]" />
        </div>

        {/* CONTENEUR DU FORMULAIRE (Légèrement plus large que le login pour le grid) */}
        <div className="w-full max-w-xl z-10 animate-in fade-in zoom-in duration-500">
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden">
            
            {/* Header du Formulaire */}
            <div className="bg-gradient-to-br from-primary via-primary to-primary/90 px-8 py-8 text-center relative">
              <div className="absolute top-4 right-6 opacity-20 text-white">
                <ShieldCheck className="w-10 h-10" />
              </div>
              
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md mb-3">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              
              <h1 className="text-2xl font-black text-white tracking-tighter uppercase leading-none">
                CRÉER UN COMPTE<span className="text-secondary">.</span>
              </h1>
              <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                Rejoignez CANAL CICA IMMO
              </p>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-xl p-3 flex items-center gap-3">
                  <AlertCircle className="w-4 h-4" /> {error}
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="nom" className="text-slate-700 font-bold ml-1">Nom complet</Label>
                <Input id="nom" placeholder="Jean Dupont" value={nom} onChange={(e) => setNom(e.target.value)} required className="h-11 rounded-xl bg-slate-50/50" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-slate-700 font-bold ml-1">Email</Label>
                  <Input id="email" type="email" placeholder="exemple@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-11 rounded-xl bg-slate-50/50" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="telephone" className="text-slate-700 font-bold ml-1">Téléphone</Label>
                  <Input id="telephone" type="tel" placeholder="+229 90 00 00 00" value={telephone} onChange={(e) => setTelephone(e.target.value)} required className="h-11 rounded-xl bg-slate-50/50" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="password" className="text-slate-700 font-bold ml-1">Mot de passe</Label>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required className="h-11 rounded-xl bg-slate-50/50 pr-10" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="confirmPassword" className="text-slate-700 font-bold ml-1">Confirmation</Label>
                  <Input id="confirmPassword" type="password" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="h-11 rounded-xl bg-slate-50/50" />
                </div>
              </div>

              {/* Role Selection */}
              <div className="space-y-3">
                <Label className="text-slate-700 font-bold ml-1">Sélectionnez votre profil</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {ROLES_CONFIG.map((r) => (
                    <button
                      key={r.value}
                      type="button"
                      disabled={!r.open}
                      onClick={() => r.open && setRole(r.value)}
                      className={cn(
                        "relative flex flex-col items-center gap-1.5 p-3 rounded-2xl border-2 text-center transition-all",
                        role === r.value
                          ? "border-secondary bg-secondary/5 text-secondary shadow-sm"
                          : "border-slate-100 bg-white hover:border-slate-200 text-slate-500",
                        !r.open && "opacity-40 grayscale cursor-not-allowed"
                      )}
                    >
                      <div className={cn("p-2 rounded-xl", role === r.value ? "bg-secondary/10" : "bg-slate-50")}>
                        {r.icon}
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-tight">{r.label}</span>
                      {!r.open && (
                        <span className="absolute -top-1 -right-1 bg-slate-800 text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold">
                          ADMIN
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-2xl text-base font-black gap-3 shadow-lg shadow-secondary/20 bg-secondary hover:bg-secondary/90 text-white mt-4"
              >
                {loading ? (
                  <div className="flex items-center gap-2 italic">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Création du profil...
                  </div>
                ) : (
                  <>
                    <span>CRÉER MON COMPTE</span>
                    <UserPlus className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            <div className="px-8 pb-8 text-center">
              <div className="h-[1px] bg-slate-100 w-full mb-6" />
              <p className="text-sm text-slate-500 font-medium">
                Déjà inscrit ? <Link to="/login" className="text-primary font-bold hover:underline">Se connecter ici</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Register;