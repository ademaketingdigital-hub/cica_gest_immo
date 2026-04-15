/**
 * Template pour créer une nouvelle page détaillée dans l'application
 * 
 * Cas d'usage: Créer des pages pour les différentes actions
 * Exemple: /vente/validation-proprio, /location/demander-depense, etc.
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Save, X } from "lucide-react";

/**
 * TEMPLATE PAGE DÉTAILLÉE
 * 
 * Remplacez les valeurs suivantes:
 * - [TITLE]: Titre de la page
 * - [DESCRIPTION]: Description
 * - [SIDEBAR_ITEMS]: Items du sidebar
 * - [FORM_FIELDS]: Champs du formulaire
 */

const DetailPageTemplate: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
  });

  const sidebarItems = [
    { label: "Retour", href: "/vente/dashboard", icon: "⬅️" },
    { label: "Dashboard", href: "/vente/dashboard", icon: "📊" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // TODO: Appel API pour soumettre les données
      console.log("Données soumises:", formData);
      
      // Redirection après succès
      navigate("/vente/dashboard");
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title="[TITLE]"
      breadcrumb="[DESCRIPTION]"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Bouton retour */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft size={18} />
            Retour
          </Button>
        </div>

        {/* Card principal */}
        <Card>
          <CardHeader>
            <CardTitle>[TITLE]</CardTitle>
            <CardDescription>[DESCRIPTION]</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Champs du formulaire */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="field1">Label Field 1</Label>
                  <Input
                    id="field1"
                    name="field1"
                    value={formData.field1}
                    onChange={handleInputChange}
                    placeholder="Entrez..."
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="field2">Label Field 2</Label>
                  <Input
                    id="field2"
                    name="field2"
                    value={formData.field2}
                    onChange={handleInputChange}
                    placeholder="Entrez..."
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="field3">Label Field 3</Label>
                <Input
                  id="field3"
                  name="field3"
                  value={formData.field3}
                  onChange={handleInputChange}
                  placeholder="Entrez..."
                  disabled={isLoading}
                />
              </div>

              {/* Boutons d'action */}
              <div className="flex gap-3 justify-end pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate(-1)}
                  disabled={isLoading}
                  className="gap-2"
                >
                  <X size={18} />
                  Annuler
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="gap-2"
                >
                  <Save size={18} />
                  {isLoading ? "En cours..." : "Soumettre"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Section d'informations supplémentaires */}
        <Card>
          <CardHeader>
            <CardTitle>Informations Supplémentaires</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-600">Info 1</p>
                <p className="text-lg font-bold">Valeur</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600">Info 2</p>
                <p className="text-lg font-bold">Valeur</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DetailPageTemplate;
