import React from "react";
import { CreditCard, Wallet, DollarSign, CircleDollarSign } from "lucide-react";
import { ClientParcellePageWrapper, StatusPill } from "./ClientParcellePageTemplate";

const Paiement: React.FC = () => {
  const chosenParcel = {
    title: "Lot 5 - Cotonou",
    price: "23 000 000 XOF",
    schedule: [
      { month: "Mai 2026", amount: "2 300 000 XOF" },
      { month: "Juin 2026", amount: "2 300 000 XOF" },
      { month: "Juil 2026", amount: "2 300 000 XOF" },
    ],
    paid: "5 500 000 XOF",
    remaining: "17 500 000 XOF",
  };

  const history = [
    { id: 1, date: "02/04/2026", amount: "1 500 000 XOF", method: "Mobile Money", status: "Payé" },
    { id: 2, date: "15/04/2026", amount: "2 000 000 XOF", method: "Virement", status: "Payé" },
  ];

  return (
    <ClientParcellePageWrapper
      title="Paiement"
      breadcrumb="Client / Paiement"
      subtitle="Gérez le paiement de votre parcelle choisie avec des options de versement ou paiement complet."
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Parcelle choisie</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">{chosenParcel.title}</h3>
              <p className="mt-1 text-slate-500">Montant total {chosenParcel.price}</p>
            </div>
            <StatusPill status="Réservée" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Montant déjà payé</p>
              <p className="mt-3 text-2xl font-black text-slate-900">{chosenParcel.paid}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Reste à payer</p>
              <p className="mt-3 text-2xl font-black text-slate-900">{chosenParcel.remaining}</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-black text-slate-900">Échéancier proposé</h4>
            <div className="mt-4 space-y-3">
              {chosenParcel.schedule.map((item) => (
                <div key={item.month} className="rounded-3xl border border-slate-100 bg-slate-50 p-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{item.month}</p>
                    <p className="text-sm text-slate-500">Versement mensuel</p>
                  </div>
                  <p className="font-black text-slate-900">{item.amount}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-3xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 transition">
              <CircleDollarSign size={16} /> Paiement par tranche
            </button>
            <button className="inline-flex items-center gap-2 rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700 transition">
              <Wallet size={16} /> Paiement complet
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
          <div className="flex items-center gap-3 text-slate-900">
            <div className="rounded-3xl bg-slate-50 p-3 text-slate-700"><CreditCard size={24} /></div>
            <div>
              <h3 className="text-lg font-black">Historique des paiements</h3>
              <p className="text-sm text-slate-500">Suivez les versements déjà effectués sur cette parcelle.</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {history.map((item) => (
              <div key={item.id} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{item.amount}</p>
                    <p className="text-sm text-slate-500">{item.date} · {item.method}</p>
                  </div>
                  <StatusPill status={item.status} />
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 inline-flex items-center gap-2 rounded-3xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800 transition">
            <DollarSign size={16} /> Payer maintenant
          </button>
        </div>
      </div>
    </ClientParcellePageWrapper>
  );
};

export default Paiement;
