import React, { useState } from "react";
import { MapPin, Camera, FileText, Info, Save, Layers, Landmark, Tag, Maximize } from "lucide-react";
import { VentePageWrapper } from "./VentePageTemplate";

const AjouterDomaine: React.FC = () => {
  const [form, setForm] = useState({
    title: "",
    ownerId: "",
    type: "Vide",
    area: "",
    commune: "",
    quartier: "",
    repere: "",
    price: "",
    description: "",
  });

  // Données fictives des propriétaires
  const proprietaires = [
    { id: "1", name: "Mme Aïssatou K.", phone: "+229 90 00 11 22" },
    { id: "2", name: "M. Idriss H.", phone: "+229 90 00 33 44" },
    { id: "3", name: "SARL Akoss", phone: "+229 90 00 55 66" },
  ];

  return (
    <VentePageWrapper
      title="Ajout domaine"
      breadcrumb="Ajout / Ajout domaine"
      subtitle="Ajoutez une nouvelle parcelle avec ses informations détaillées, photos et documents."
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl bg-white border border-slate-100 p-8 shadow-sm">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm text-slate-700">
              Titre foncier / référence
              <input
                value={form.title}
                onChange={(event) => setForm({ ...form, title: event.target.value })}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Ex: Lot 32 - Abomey-Calavi"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-700">
              Propriétaire
              <select
                value={form.ownerId}
                onChange={(event) => setForm({ ...form, ownerId: event.target.value })}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Sélectionner un propriétaire</option>
                {proprietaires.map((prop) => (
                  <option key={prop.id} value={prop.id}>
                    {prop.name} - {prop.phone}
                  </option>
                ))}
              </select>
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-700">
                Type
                <select
                  value={form.type}
                  onChange={(event) => setForm({ ...form, type: event.target.value })}
                  className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option>Vide</option>
                  <option>Agricole</option>
                  <option>Bâti</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm text-slate-700">
                Superficie (m²)
                <input
                  value={form.area}
                  onChange={(event) => setForm({ ...form, area: event.target.value })}
                  className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="500"
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              <label className="grid gap-2 text-sm text-slate-700">
                Commune
                <input
                  value={form.commune}
                  onChange={(event) => setForm({ ...form, commune: event.target.value })}
                  className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Commune"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-700">
                Quartier
                <input
                  value={form.quartier}
                  onChange={(event) => setForm({ ...form, quartier: event.target.value })}
                  className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Quartier"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-700">
                Repère
                <input
                  value={form.repere}
                  onChange={(event) => setForm({ ...form, repere: event.target.value })}
                  className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Repère"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm text-slate-700">
              Prix de vente
              <input
                value={form.price}
                onChange={(event) => setForm({ ...form, price: event.target.value })}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="XX XXX XXX XOF"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-700">
              Description
              <textarea
                value={form.description}
                onChange={(event) => setForm({ ...form, description: event.target.value })}
                rows={4}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Décrire le domaine, ses avantages et son environnement."
              />
            </label>
            <button className="w-full rounded-3xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 transition">
              Ajouter le domaine
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-slate-100 p-8 shadow-sm">
          <div className="flex items-center gap-3 text-slate-900">
            <div className="rounded-3xl bg-blue-50 p-3 text-blue-600">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black">Documents & photos</h3>
              <p className="text-sm text-slate-500">Ajoutez des images et des documents de titre foncier ou de plan.</p>
            </div>
          </div>
          <div className="mt-8 space-y-5">
            <label className="block rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-slate-500 hover:border-blue-300 hover:bg-slate-100 transition">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                <Camera size={28} />
              </div>
              <p className="font-semibold">Uploader plusieurs photos</p>
              <p className="text-xs text-slate-400">JPG, PNG</p>
              <input type="file" multiple className="hidden" />
            </label>
            <label className="block rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-slate-500 hover:border-blue-300 hover:bg-slate-100 transition">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                <FileText size={28} />
              </div>
              <p className="font-semibold">Uploader les documents</p>
              <p className="text-xs text-slate-400">Titre foncier, plan, autorisations</p>
              <input type="file" multiple className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </VentePageWrapper>
  );
};

export default AjouterDomaine;
