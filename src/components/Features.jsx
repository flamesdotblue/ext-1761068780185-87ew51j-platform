import React from 'react';
import { Utensils, Store, Barcode, Bot, Printer, MessageSquare, BarChart3 } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 mt-24">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">Built to sell smarter, faster, profitably</h2>
        <p className="text-white/70 mt-3">From counter to kitchen to cloud. Modular features for every business category.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <Card
          icon={<Utensils className="h-5 w-5" />}
          title="Restaurant Mode"
          points={[
            'Table & KOT management (kitchen, bar printers)',
            'Dine-in, takeaway, delivery tracking',
            'QR menu, waiter app, split bills & taxes',
            'Sales by waiter with smart reports',
          ]}
        />
        <Card
          icon={<Store className="h-5 w-5" />}
          title="Retail Mode"
          points={[
            'Barcode billing & fast checkout',
            'Inventory & supplier tracking with GST billing',
            'Refunds, exchanges, loyalty points',
            'Multi-store with roles & permissions',
          ]}
        />
        <Card
          icon={<Bot className="h-5 w-5" />}
          title="AI Business Assistant"
          points={[
            'Demand prediction & sales forecasting',
            'Idle/slow stock detection, combo suggestions',
            'Festival-based stock alerts & Health Score',
            'WhatsApp daily summaries & insights',
          ]}
        />
        <Card
          icon={<Barcode className="h-5 w-5" />}
          title="AI Inventory Intelligence"
          points={[
            'Auto low-stock detection with out-of-stock dates',
            'Supplier performance scoring',
            'Auto-generate restock POs',
            'Offline-first with seamless sync',
          ]}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <MiniCard icon={<MessageSquare className="h-4 w-4" />} title="Smart CRM" desc="WhatsApp/SMS campaigns, loyalty, birthdays, inactive user win-backs, feedback collection." />
        <MiniCard icon={<BarChart3 className="h-4 w-4" />} title="AI Analytics" desc="Visual trends, profit breakdowns, staff insights, daily WhatsApp KPI snapshot." />
        <MiniCard icon={<Printer className="h-4 w-4" />} title="Auto Receipts" desc="Logo + QR code receipts, discounts, taxes, multi-pay support and KOT printing." />
      </div>
    </section>
  );
}

function Card({ icon, title, points }) {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500/30 via-indigo-500/30 to-cyan-500/30 grid place-items-center text-white">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-white/80 text-sm list-disc list-inside">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function MiniCard({ icon, title, desc }) {
  return (
    <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-white/5 grid place-items-center text-white/90">
          {icon}
        </div>
        <h4 className="font-medium">{title}</h4>
      </div>
      <p className="text-sm text-white/70 mt-2">{desc}</p>
    </div>
  );
}
