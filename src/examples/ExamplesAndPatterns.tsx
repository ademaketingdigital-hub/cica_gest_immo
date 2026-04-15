/**
 * Exemples d'utilisation des types et de la structure des pages
 * Ce fichier montre des patterns et bonnes pratiques
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { MenuSection } from "@/components/MenuSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { ROUTES } from "@/lib/routes";
import type { Domaine, DomaineFormData, ApiResponse } from "@/types";

/**
 * ============================================
 * EXEMPLE 1: PAGE DE LISTE AVEC API
 * ============================================
 */

export const ExampleListPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [domaines, setDomaines] = useState<Domaine[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDomaines = async () => {
      setLoading(true);
      try {
        // Appel API
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/domaines`);
        const data: ApiResponse<Domaine[]> = await response.json();

        if (data.success && data.data) {
          setDomaines(data.data);
        } else {
          setError(data.error?.message || "Erreur lors du chargement");
        }
      } catch (err) {
        setError("Erreur réseau");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDomaines();
  }, []);

  return (
    <div>
      <h1>Domaines</h1>
      {error && <div className="text-red-600">{error}</div>}
      {loading && <div>Chargement...</div>}
      {domaines.map((domaine) => (
        <div key={domaine.id} className="p-4 border">
          {domaine.nom} - {domaine.prix.toLocaleString()}
        </div>
      ))}
    </div>
  );
};

/**
 * ============================================
 * EXEMPLE 2: FORMULAIRE DE CRÉATION
 * ============================================
 */

export const ExampleFormPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState<DomaineFormData>({
    nom: "",
    surface: 0,
    prix: 0,
    localisation: "",
    proprietaireId: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis";
    }
    if (formData.surface <= 0) {
      newErrors.surface = "La surface doit être positive";
    }
    if (formData.prix <= 0) {
      newErrors.prix = "Le prix doit être positif";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumettre
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Appel API POST
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/domaines`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("cica_token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse<Domaine> = await response.json();

      if (data.success) {
        // Redirection
        navigate(ROUTES.VENTE.ETAT_VENTES);
      } else {
        setErrors({ submit: data.error?.message || "Erreur lors de la création" });
      }
    } catch (err) {
      setErrors({ submit: "Erreur réseau" });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="nom">Nom du Domaine</Label>
        <Input
          id="nom"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          disabled={isSubmitting}
        />
        {errors.nom && <span className="text-red-600 text-sm">{errors.nom}</span>}
      </div>

      <div>
        <Label htmlFor="surface">Surface (m²)</Label>
        <Input
          id="surface"
          type="number"
          value={formData.surface}
          onChange={(e) => setFormData({ ...formData, surface: Number(e.target.value) })}
          disabled={isSubmitting}
        />
        {errors.surface && <span className="text-red-600 text-sm">{errors.surface}</span>}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "En cours..." : "Créer"}
      </Button>
    </form>
  );
};

/**
 * ============================================
 * EXEMPLE 3: FETCH AVEC QUERY PARAMETERS
 * ============================================
 */

export const fetchWithFilters = async (filters: {
  page?: number;
  search?: string;
  statut?: string;
}): Promise<Domaine[]> => {
  const params = new URLSearchParams();

  if (filters.page) params.append("page", filters.page.toString());
  if (filters.search) params.append("search", filters.search);
  if (filters.statut) params.append("statut", filters.statut);

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/domaines?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("cica_token")}`,
      },
    }
  );

  const data: ApiResponse<Domaine[]> = await response.json();
  return data.data || [];
};

/**
 * ============================================
 * EXEMPLE 4: PAGE DE SUPERVISION/RAPPORTS
 * ============================================
 */

interface DashboardStats {
  totalVentes: number;
  totalRevenu: number;
  ventesEnCours: number;
  utilisateursActifs: number;
}

export const ExampleDashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Appel API pour les stats
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/dashboard/stats`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("cica_token")}`,
          },
        });

        const data: ApiResponse<DashboardStats> = await response.json();
        if (data.success && data.data) {
          setStats(data.data);
        }
      } catch (err) {
        console.error("Erreur lors du chargement des stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user?.role]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <Card>
        <CardContent className="pt-6">
          <div className="text-3xl font-bold">{stats?.totalVentes}</div>
          <p className="text-sm text-slate-500">Total Ventes</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="text-3xl font-bold">{(stats?.totalRevenu ?? 0) / 1000000}M</div>
          <p className="text-sm text-slate-500">Revenu Total</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="text-3xl font-bold">{stats?.ventesEnCours}</div>
          <p className="text-sm text-slate-500">En Cours</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="text-3xl font-bold">{stats?.utilisateursActifs}</div>
          <p className="text-sm text-slate-500">Utilisateurs Actifs</p>
        </CardContent>
      </Card>
    </div>
  );
};

/**
 * ============================================
 * EXEMPLE 5: COMPOSANT DE MODAL/DIALOG
 * ============================================
 */

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const ExampleModalExample: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [domainId, setDomainId] = useState<string>("");

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/domaines/${domainId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("cica_token")}`,
          },
        }
      );

      if (response.ok) {
        setOpen(false);
        // Actualiser la liste
      }
    } catch (err) {
      console.error("Erreur de suppression:", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Supprimer</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmation de suppression</DialogTitle>
          <DialogDescription>
            Êtes-vous sûr de vouloir supprimer ce domaine? Cette action est irréversible.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Supprimer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

/**
 * ============================================
 * EXEMPLE 6: UTILISATION DU ROUTING
 * ============================================
 */

export const ExampleRouting: React.FC = () => {
  const navigate = useNavigate();

  // Navigation simple
  const goToDashboard = () => {
    navigate(ROUTES.VENTE.DASHBOARD);
  };

  // Navigation avec état
  const goToDetailPage = (id: string) => {
    navigate(`/vente/detail/${id}`, {
      state: { backTo: ROUTES.VENTE.ETAT_VENTES },
    });
  };

  // Retour à la page précédente
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex gap-4">
      <Button onClick={goToDashboard}>Dashboard</Button>
      <Button onClick={() => goToDetailPage("123")}>Voir Détail</Button>
      <Button onClick={goBack}>Retour</Button>
    </div>
  );
};

/**
 * ============================================
 * EXEMPLE 7: CONDITIONNELS PAR RÔLE
 * ============================================
 */

export const ExampleRoleConditional: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      {user?.role === "gestionnaire_vente" && (
        <Button>Ajouter un domaine</Button>
      )}

      {user?.role === "tresorer" && (
        <Button>Encaisser un paiement</Button>
      )}

      {["admin", "super_admin"].includes(user?.role || "") && (
        <Button variant="destructive">Supprimer l'utilisateur</Button>
      )}
    </div>
  );
};

/**
 * ============================================
 * UTILS HELPER FUNCTIONS
 * ============================================
 */

// Format monétaire
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
  }).format(value);
};

// Format date
export const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleDateString("fr-FR");
};

// Format date et heure
export const formatDateTime = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleString("fr-FR");
};

// Vérifier permissions
export const hasPermission = (userRole: string, requiredRole: string | string[]): boolean => {
  if (typeof requiredRole === "string") {
    return userRole === requiredRole;
  }
  return requiredRole.includes(userRole);
};
