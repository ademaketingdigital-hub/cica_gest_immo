import React, { useState } from "react";
import { CalendarDays, Globe, MapPin, Clock, Eye } from "lucide-react";
import { ClientParcellePageWrapper, StatusPill } from "./ClientParcellePageTemplate";

const Visiter: React.FC = () => {
  const [filters, setFilters] = useState({ price: "Tous", area: "Tous", type: "Tous", location: "Tous" });
  const [selectedDate, setSelectedDate] = useState("2026-05-12");
  const [visited, setVisited] = useState<number[]>([2]);

  const parcels = [
    { id: 1, title: "Lot 5 - Cotonou", type: "Bâti", area: "420 m²", location: "Cotonou", price: "23 000 000 XOF", status: "Disponible" },
    { id: 2, title: "Zone Agricole A2", type: "Agricole", area: "1800 m²", location: "Ouidah", price: "15 500 000 XOF", status: "Visité" },
    { id: 3, title: "Parcelle Vide B9", type: "Vide", area: "950 m²", location: "Abomey-Calavi", price: "11 200 000 XOF", status: "Disponible" },
  ];

  const filtered = parcels.filter((parcel) =>
    (filters.type === "Tous" || parcel.type === filters.type) &&
    (filters.location === "Tous" || parcel.location === filters.location) &&
    (filters.price === "Tous" || (filters.price === "< 15M" ? parseInt(parcel.price.replace(/\D/g, "")) < 15000000 : filters.price === ">= 15M" ? parseInt(parcel.price.replace(/\D/g, "")) >= 15000000 : true))
  );

  return (
    <ClientParcellePageWrapper
      title="Visiter"
      breadcrumb="Client / Visiter"
      subtitle="Découvrez les parcelles disponibles et planifiez votre visite ou une visite virtuelle."
    >
      <div className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Prix</span>
            <select
              value={filters.price}
              onChange={(event) => setFilters({ ...filters, price: event.target.value })}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option>Tous</option>
              <option value="<15M">&lt; 15M</option>
              <option value=">=15M">&gt;= 15M</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Superficie</span>
            <select
              value={filters.area}
              onChange={(event) => setFilters({ ...filters, area: event.target.value })}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option>Tous</option>
              <option value="0-500">0-500 m²</option>
              <option value="500-1500">500-1500 m²</option>
              <option value=">1500">&gt; 1500 m²</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Type</span>
            <select
              value={filters.type}
              onChange={(event) => setFilters({ ...filters, type: event.target.value })}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option>Tous</option>
              <option>Vide</option>
              <option>Agricole</option>
              <option>Bâti</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Localisation</span>
            <select
              value={filters.location}
              onChange={(event) => setFilters({ ...filters, location: event.target.value })}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option>Tous</option>
              <option>Cotonou</option>
              <option>Abomey-Calavi</option>
              <option>Ouidah</option>
            </select>
          </label>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {filtered.map((parcel) => (
            <div key={parcel.id} className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
              <div className="h-52 bg-slate-200 flex items-center justify-center text-slate-500 text-sm uppercase tracking-[0.24em]">Photo</div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{parcel.title}</h3>
                    <p className="text-sm text-slate-500">{parcel.type} · {parcel.area}</p>
                  </div>
                  <StatusPill status={parcel.status} />
                </div>
                <p className="text-slate-600">{parcel.location}</p>
                <p className="text-2xl font-black text-slate-900">{parcel.price}</p>
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700 transition">
                    <CalendarDays size={16} /> Programmer une visite
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100 transition">
                    <Globe size={16} /> Visiter virtuellement
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h3 className="text-lg font-black text-slate-900">Calendrier de visite</h3>
              <p className="mt-1 text-sm text-slate-500">Choisissez la date qui vous convient et confirmez votre présence.</p>
            </div>
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
              <Clock size={16} /> Date sélectionnée : {selectedDate}
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {['2026-05-12', '2026-05-14', '2026-05-18'].map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`rounded-3xl border px-4 py-4 text-left transition ${selectedDate === date ? 'border-blue-600 bg-blue-50 text-blue-900' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:bg-slate-50'}`}
              >
                <p className="text-sm font-semibold">{date}</p>
                <p className="text-xs text-slate-400">10h - 14h</p>
              </button>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700 transition">Marquer visite effectuée</button>
            <button className="rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition">Demander une nouvelle date</button>
          </div>
        </div>
      </div>
    </ClientParcellePageWrapper>
  );
};

export default Visiter;
