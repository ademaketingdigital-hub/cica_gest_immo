import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Wallet, ArrowDownCircle, ArrowUpCircle, ClipboardCheck, Banknote, AlertCircle } from "lucide-react";

const summary = [
  { title: "Solde caisse", value: "9.2M", color: "bg-blue-700" },
  { title: "Encaissements", value: "+3.1M", color: "bg-emerald-600" },
  { title: "Dépenses", value: "-650k", color: "bg-rose-500" },
  { title: "À verser proprio", value: "1.7M", color: "bg-amber-500" },
];

const evolution = [
  { jour: "01", montant: 7.2 },
  { jour: "08", montant: 7.8 },
  { jour: "15", montant: 8.4 },
  { jour: "22", montant: 9.1 },
  { jour: "29", montant: 9.5 },
];

const pending = [
  { label: "Paiements en attente", count: 4 },
  { label: "Mouvements importants", count: 2 },
];

const SupervisionCaisse: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Supervision Caisse" breadcrumb="Gérant / Supervision Globale / Supervision Caisse">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {summary.map((item) => (
          <div key={item.title} className={`${item.color} rounded-3xl p-6 text-white shadow-lg`}>
            <p className="text-xs uppercase tracking-[0.2em] text-white/80 font-bold">{item.title}</p>
            <p className="text-3xl font-black mt-4">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Évolution caisse</h3>
              <p className="text-sm text-slate-500">Solde sur le mois.</p>
            </div>
            <Wallet size={18} className="text-blue-600" />
          </div>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={evolution} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="jour" stroke="#64748b" axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }} />
                <Line type="monotone" dataKey="montant" stroke="#2563eb" strokeWidth={3} dot={{ fill: "#2563eb" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <AlertCircle size={18} className="text-rose-500" />
            <h3 className="text-lg font-bold text-slate-900">Paiements en attente</h3>
          </div>
          <div className="space-y-4">
            {pending.map((row) => (
              <div key={row.label} className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{row.label}</p>
                <p className="text-sm text-slate-500">{row.count} éléments</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default SupervisionCaisse;
