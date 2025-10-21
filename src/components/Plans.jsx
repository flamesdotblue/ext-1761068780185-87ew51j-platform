import React from 'react';
import { Rocket, Shield, CreditCard } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For new stores getting started',
    features: [
      'POS with thermal printer support',
      'Basic inventory & GST billing',
      'Single store, 1 user',
      'Email support',
    ],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29/mo',
    desc: 'For growing retail & cafés',
    features: [
      'Restaurant/Retail modes',
      'Multi-store, roles & access',
      'WhatsApp receipts & KOT',
      'Priority support',
    ],
    cta: 'Upgrade to Pro',
    highlight: false,
  },
  {
    name: 'AI Plus',
    price: '$59/mo',
    desc: 'AI assistant, analytics, CRM',
    features: [
      'AI demand & sales forecasts',
      'Low-stock predictions & auto POs',
      'Smart CRM campaigns & loyalty',
      'Daily WhatsApp insights',
    ],
    cta: 'Go AI Plus',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Large chains & custom workflows',
    features: [
      'SLA, SSO & advanced controls',
      'Dedicated success manager',
      'Custom integrations (Tally, APIs)',
      'On-prem/region data options',
    ],
    cta: 'Contact sales',
    highlight: false,
  },
];

export default function Plans() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 mt-24">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border border-white/15 text-white/80">
          <Rocket className="h-3.5 w-3.5" /> Scale with confidence
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mt-3">Simple, scalable pricing</h2>
        <p className="text-white/70 mt-2">Pay with Razorpay or Stripe. Cancel anytime. No hidden fees.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        {plans.map((p) => (
          <PlanCard key={p.name} plan={p} />
        ))}
      </div>

      <div className="mt-10 p-5 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-emerald-400" />
          <p className="text-sm text-white/80">Future integrations: Swiggy/Zomato, Tally, staff tracking, AI voice alerts, supplier APIs, customer chatbots.</p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 hover:border-white/30 transition text-sm">
          <CreditCard className="h-4 w-4" /> Accept payments your way
        </a>
      </div>
    </section>
  );
}

function PlanCard({ plan }) {
  return (
    <div className={`p-6 rounded-2xl border ${plan.highlight ? 'border-fuchsia-400/40 bg-gradient-to-br from-fuchsia-500/10 via-indigo-500/10 to-cyan-500/10' : 'border-white/10 bg-white/[0.03]'}`}>
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold">{plan.name}</h3>
        {plan.highlight && (
          <span className="text-xs px-2 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-200">Best value</span>
        )}
      </div>
      <p className="text-3xl font-semibold mt-2">{plan.price}</p>
      <p className="text-white/70 text-sm mt-1">{plan.desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc list-inside">
        {plan.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button className={`mt-6 w-full px-4 py-2.5 rounded-xl text-sm font-medium transition ${plan.highlight ? 'bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 hover:brightness-110' : 'border border-white/15 hover:border-white/30'}`}>
        {plan.cta}
      </button>
    </div>
  );
}
