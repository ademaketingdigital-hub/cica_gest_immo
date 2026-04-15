import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "./sidebarItems";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { FileText, Download, CalendarDays, BarChart3, ArrowRight } from "lucide-react";

const performanceData = [
  { periode: "Jan", ventes: 28, locations: 22 },
  { periode: "Fév", ventes: 31, locations: 26 },
  { periode: "Mar", ventes: 34, locations: 28 },
  { periode: "Avr", ventes: 40, locations: 33 },
  { periode: "Mai", ventes: 38, locations: 30 },
  { periode: "Juin", ventes: 45, locations: 36 },
];

const conversionData = [
  { name: "Visites → Ventes", value: 18 },
  { name: "Visites → Locations", value: 24 },
];

const RapportsGlobaux: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Rapports Globaux" breadcrumb="Superviseur / Rapports">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Rapports globaux</h2>
          <p className="text-slate-500">Synthèse croisée des performances vente, location et finance.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="bg-slate-100 text-slate-800 px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-slate-200 transition">Mois</button>
          <button className="bg-slate-100 text-slate-800 px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-slate-200 transition">Trimestre</button>
          <button className="bg-slate-100 text-slate-800 px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-slate-200 transition">Année</button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <FileText size={20} className="text-blue-600" />
            <div>
              <p className="text-sm text-slate-500">Rapport combiné</p>
              <p className="text-3xl font-black text-slate-900">Vente + Location</p>
            </div>
          </div>
          <p className="text-sm text-slate-600">Vue consolidée des indicateurs d’activité sur la période sélectionnée.</p>
        </div>
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 size={20} className="text-emerald-600" />
            <div>
              <p className="text-sm text-slate-500">Rapport financier</p>
              <p className="text-3xl font-black text-slate-900">Total 18.4M</p>
            </div>
          </div>
          <p className="text-sm text-slate-600">Revenus cumulés pour le mois et projection.</p>
        </div>
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <CalendarDays size={20} className="text-amber-600" />
            <div>
              <p className="text-sm text-slate-500">Taux conversion</p>
              <p className="text-3xl font-black text-slate-900">21%</p>
            </div>
          </div>
          <p className="text-sm text-slate-600">Visites transformées en ventes ou locations.</p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-3xl bg-blue-600 text-white px-6 py-5 text-sm font-semibold hover:bg-blue-700 transition">
          <Download size={16} /> Export PDF / Excel
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Comparatif Vente / Location</h3>
              <p className="text-sm text-slate-500">Volume de dossiers par période.</p>
            </div>
            <ArrowRight size={18} className="text-slate-500" />
          </div>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="periode" stroke="#64748b" axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }} />
                <Bar dataKey="ventes" fill="#2563eb" radius={[10, 10, 0, 0]} />
                <Bar dataKey="locations" fill="#10b981" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-5">Taux de conversion</h3>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={conversionData} dataKey="value" innerRadius={70} outerRadius={100} paddingAngle={4}>
                  {conversionData.map((entry, index) => (
                    <Cell key={entry.name} fill={index === 0 ? "#2563eb" : "#10b981"} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-5 text-sm text-slate-600 space-y-3">
            <div className="flex items-center justify-between rounded-3xl bg-slate-50 p-3">
              <span>Visites → Ventes</span>
              <span className="font-semibold">18%</span>
            </div>
            <div className="flex items-center justify-between rounded-3xl bg-slate-50 p-3">
              <span>Visites → Locations</span>
              <span className="font-semibold">24%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default RapportsGlobaux;
