import React from "react";
import { TrendingUp, PieChart, BarChart3 } from "lucide-react";
import { VentePageWrapper } from "./VentePageTemplate";

const Marges: React.FC = () => {
  const parcels = [
    { id: 1, name: "Domaine Abomey 5", revenue: "32 000 000 XOF", cost: "24 000 000 XOF", margin: "8 000 000 XOF" },
    { id: 2, name: "Lot C12", revenue: "18 500 000 XOF", cost: "13 800 000 XOF", margin: "4 700 000 XOF" },
  ];

  return (
    <VentePageWrapper
      title="Marge"
      breadcrumb="Consulter états / Marge"
      subtitle="Suivi de la marge globale et des marges par parcelle."
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-4">
          <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-slate-900">
              <div className="rounded-3xl bg-blue-50 p-3 text-blue-600">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Marge globale</p>
                <p className="mt-3 text-3xl font-black text-slate-900">12 700 000 XOF</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-slate-900">
              <div className="rounded-3xl bg-slate-50 p-3 text-slate-700">
                <BarChart3 size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Rentabilité estimée</p>
                <p className="mt-3 text-3xl font-black text-slate-900">18%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-black text-slate-900">Marges par parcelle</h3>
              <p className="text-sm text-slate-500">Comparaison des revenus et coûts par domaine.</p>
            </div>
            <div className="rounded-full bg-slate-100 p-3 text-slate-700">
              <PieChart size={20} />
            </div>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-600">
              <thead className="text-slate-500 text-[11px] uppercase tracking-[0.2em]">
                <tr>
                  <th className="px-4 py-3">Parcelle</th>
                  <th className="px-4 py-3">Revenu</th>
                  <th className="px-4 py-3">Coût</th>
                  <th className="px-4 py-3">Marge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {parcels.map((parcel) => (
                  <tr key={parcel.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-800">{parcel.name}</td>
                    <td className="px-4 py-3">{parcel.revenue}</td>
                    <td className="px-4 py-3">{parcel.cost}</td>
                    <td className="px-4 py-3 font-bold text-slate-900">{parcel.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </VentePageWrapper>
  );
};

export default Marges;
