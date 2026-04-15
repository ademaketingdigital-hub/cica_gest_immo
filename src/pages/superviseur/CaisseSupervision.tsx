import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { superviseurSidebarItems } from "./sidebarItems";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";
import { Wallet, ArrowDownCircle, ArrowUpCircle, ClipboardCheck, Banknote, Zap, Receipt, AlertCircle } from "lucide-react";

const summary = [
  { title: "Solde caisse", value: "9.2M", icon: <Wallet size={20} />, color: "bg-blue-700" },
  { title: "Encaissements", value: "+3.1M", icon: <ArrowDownCircle size={20} />, color: "bg-emerald-600" },
  { title: "Dépenses", value: "-650k", icon: <ArrowUpCircle size={20} />, color: "bg-rose-500" },
  { title: "À verser proprio", value: "1.7M", icon: <Banknote size={20} />, color: "bg-amber-500" },
];

const evolution = [
  { jour: "01", montant: 7200000 },
  { jour: "06", montant: 7600000 },
  { jour: "11", montant: 8000000 },
  { jour: "16", montant: 8500000 },
  { jour: "21", montant: 9000000 },
  { jour: "26", montant: 9300000 },
  { jour: "31", montant: 9500000 },
];

const transactions = [
  { label: "Paiement loyer Appt. 5C", montant: "+210k", date: "Il y a 1h", type: "encaissement" },
  { label: "Remboursement fournisseur", montant: "-450k", date: "Aujourd’hui", type: "depense" },
  { label: "Encaissement vente parcelle", montant: "+2.7M", date: "Hier", type: "encaissement" },
];

const validations = [
  { label: "Validation paiement trésorier", amount: "3", status: "Urgent" },
  { label: "Montants à verser aux propriétaires", amount: "1.7M", status: "Horaire" },
];

const CaisseSupervision: React.FC = () => (
  <DashboardLayout sidebarItems={superviseurSidebarItems} title="Supervision Caisse" breadcrumb="Superviseur / Caisse">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Situation globale de la caisse</h2>
          <p className="text-slate-500">Suivi des encaissements, dépenses et validations financières.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="bg-slate-100 text-slate-800 px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-slate-200 transition">Nouvelle entrée</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-blue-700 transition">Recalculer</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {summary.map((item) => (
          <div key={item.title} className={`${item.color} rounded-3xl p-6 text-white shadow-lg shadow-slate-200`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/80 font-bold">{item.title}</p>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl">{item.icon}</div>
            </div>
            <p className="text-3xl font-black">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Évolution de la caisse</h3>
              <p className="text-sm text-slate-500">Montant journalier sur le mois.</p>
            </div>
            <Zap size={20} className="text-emerald-600" />
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

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Paiements en attente</h3>
              <p className="text-sm text-slate-500">Validation nécessaire par le trésorier.</p>
            </div>
            <ClipboardCheck size={20} className="text-blue-600" />
          </div>
          <div className="space-y-4">
            {validations.map((item) => (
              <div key={item.label} className="rounded-3xl bg-slate-50 p-4 border border-slate-200">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{item.label}</p>
                    <p className="text-sm text-slate-500">{item.amount}</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Encaissements et dépenses récents</h3>
              <p className="text-sm text-slate-500">Les dernières opérations de la caisse.</p>
            </div>
            <Receipt size={20} className="text-slate-600" />
          </div>
          <div className="space-y-3">
            {transactions.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-500">{item.date}</p>
                </div>
                <p className={`font-bold ${item.type === "encaissement" ? "text-emerald-600" : "text-rose-600"}`}>{item.montant}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Alertes caisse</h3>
              <p className="text-sm text-slate-500">Points de vigilance immédiats.</p>
            </div>
            <AlertCircle size={20} className="text-rose-500" />
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="rounded-3xl bg-rose-50 p-4">Paiements en attente de validation depuis plus de 48h.</div>
            <div className="rounded-3xl bg-amber-50 p-4">Revue des montants à verser aux propriétaires demain.</div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default CaisseSupervision;
