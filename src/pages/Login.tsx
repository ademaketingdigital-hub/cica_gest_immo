import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Building2, Eye, EyeOff, LogIn, ShieldCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth, redirectAfterLogin } from "@/contexts/AuthContext";

// Import de tes composants de structure
import SiteHeader from "@/components/SiteHeader"; 
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import heroBg from "@/assets/hero-bg.jpg"; // On réutilise ton image de fond

const Login = () => {
  const [identifiant, setIdentifiant] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const mockUser = {
        id: "1",
        nom: "Utilisateur Test",
        email: identifiant.includes("@") ? identifiant : "",
        telephone: !identifiant.includes("@") ? identifiant : "",
        role: "client_parcelle" as const,
      };
      const mockToken = "demo-token-123";

      login(mockUser, mockToken);
      navigate(redirectAfterLogin(mockUser.role));
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      {/* HEADER IMPORTÉ */}
      <SiteHeader />
      {/* NAVBAR IMPORTÉ */}
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
          {/* Overlay sombre pour faire ressortir le formulaire */}
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />
        </div>

        {/* CONTENEUR DU FORMULAIRE */}
        <div className="w-full max-w-[440px] z-10 animate-in fade-in zoom-in duration-500">
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden">
            
            {/* Header du Formulaire */}
            <div className="bg-gradient-to-br from-primary via-primary to-primary/90 px-8 py-10 text-center relative">
              <div className="absolute top-4 right-6 opacity-20 text-white">
                <ShieldCheck className="w-10 h-10" />
              </div>
              
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md mb-4 shadow-inner">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-2xl font-black text-white tracking-tighter uppercase">
                CANAL CICA<span className="text-secondary">.</span>
              </h1>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mt-1">
                Espace Sécurisé
              </p>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-xl p-4 flex items-center gap-3">
                  <AlertCircle className="w-4 h-4" /> {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="identifiant" className="text-slate-700 font-bold ml-1">Identifiant</Label>
                <Input
                  id="identifiant"
                  placeholder="Email ou Téléphone"
                  value={identifiant}
                  onChange={(e) => setIdentifiant(e.target.value)}
                  required
                  className="h-12 rounded-xl border-slate-200 focus:ring-primary bg-slate-50/50"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <Label htmlFor="password" text-slate-700 font-bold>Mot de passe</Label>
                  <Link to="/forgot-password"  className="text-primary font-bold hover:underline">
                    Oublié ?
                  </Link>
                </div>
                <div className="relative group">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 rounded-xl border-slate-200 pr-12 bg-slate-50/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 px-1">
                <Checkbox
                  id="remember"
                  checked={remember}
                  onCheckedChange={(v) => setRemember(v as boolean)}
                />
                <Label htmlFor="remember" className="text-sm font-semibold text-slate-600 cursor-pointer">
                  Rester connecté
                </Label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-2xl text-base font-black gap-3 shadow-lg hover:shadow-primary/40 transition-all active:scale-[0.98]"
              >
                {loading ? (
                  <div className="flex items-center gap-2 italic">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Authentification...
                  </div>
                ) : (
                  <>
                    <span>SE CONNECTER</span>
                    <LogIn className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            <div className="px-8 pb-8 text-center">
              <div className="h-[1px] bg-slate-100 w-full mb-6" />
              <p className="text-sm text-slate-500 font-medium">
                Nouveau ? <Link to="/register" className="text-secondary font-bold hover:underline">Créer un compte</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* SiteFooter IMPORTÉ */}
      <SiteFooter />
    </div>
  );
};

export default Login;