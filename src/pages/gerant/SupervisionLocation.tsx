import { DashboardLayout } from "@/components/DashboardLayout";
import { gerantSidebarItems } from "./sidebarItems";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Home, AlertTriangle, CalendarDays, ShieldCheck } from "lucide-react";

const locationData = [
  { semaine: "S1", occupation: 82, impayes: 7 },
  { semaine: "S2", occupation: 85, impayes: 6 },
  { semaine: "S3", occupation: 88, impayes: 5 },
  { semaine: "S4", occupation: 92, impayes: 4 },
];

const validations = [
  { label: "Validation d'événement", value: 4 },
  { label: "Confirmation dépense", value: 3 },
  { label: "Validation état du mois", value: 6 },
  { label: "Clôture mensuelle", value: 2 },
];

const SupervisionLocation: React.FC = () => (
  <DashboardLayout sidebarItems={gerantSidebarItems} title="Supervision Location" breadcrumb="Gérant / Supervision Globale / Supervision Location">
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid gap-6 xl:grid-cols-3">
        {validations.map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-slate-700">{item.label}</p>
              <ShieldCheck size={18} className="text-blue-600" />
            </div>
            <p className="text-3xl font-black text-slate-900">{item.value}</p>
            <p className="text-sm text-slate-500 mt-2">Items en attente</p>
          </div>
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Taux d’occupation</h3>
              <p className="text-sm text-slate-500">Recettes vs dépenses locatives.</p>
            </div>
            <CalendarDays size={18} className="text-slate-500" />
          </div>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={locationData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="semaine" stroke="#64748b" axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }} />
                <Line type="monotone" dataKey="occupation" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981" }} />
                <Line type="monotone" dataKey="impayes" stroke="#ef4444" strokeWidth={3} dot={{ fill: "#ef4444" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <AlertTriangle size={18} className="text-amber-500" />
            <h3 className="text-lg font-bold text-slate-900">Alertes locatives</h3>
          </div>
          <div className="space-y-4 text-slate-600">
            <div className="rounded-3xl bg-rose-50 p-4">Loyer impayé 30 jours • App. B3</div>
            <div className="rounded-3xl bg-amber-50 p-4">Validation état du mois manquante • Villa A1</div>
            <div className="rounded-3xl bg-slate-50 p-4">Clôture mensuelle à planifier • Duplex C7</div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default SupervisionLocation;
