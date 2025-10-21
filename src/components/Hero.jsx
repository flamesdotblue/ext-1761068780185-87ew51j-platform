import React from 'react';
import Spline from '@splinetool/react-spline';
import { Bot, Printer, CreditCard, Wifi } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 pt-16 md:pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border border-white/15 text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Live AI Business Assistant
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            AI-Powered POS & Business Intelligence for Restaurants and Retail
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            One platform for lightning-fast billing, smart inventory, automated CRM, and predictive analytics. Run your business online and offline, with real-time cloud sync across Web, Android, and iOS.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 hover:brightness-110 transition shadow-lg shadow-fuchsia-500/20 text-sm font-medium">Start free</a>
            <a href="#features" className="px-5 py-3 rounded-xl border border-white/15 hover:border-white/30 transition text-sm font-medium">Explore features</a>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <FeaturePill icon={<Printer className="h-4 w-4" />} label="Thermal printers: BT / USB / Wi‑Fi" />
            <FeaturePill icon={<CreditCard className="h-4 w-4" />} label="Split bills & multi-payments" />
            <FeaturePill icon={<Wifi className="h-4 w-4" />} label="Offline sync + cloud backup" />
            <FeaturePill icon={<Bot className="h-4 w-4" />} label="AI forecasts & stock alerts" />
          </div>
        </div>
        <div className="relative h-[420px] md:h-[560px] w-full">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(123,97,255,0.12),_transparent_60%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-white/80 text-xs">
      <span className="text-white/90">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
