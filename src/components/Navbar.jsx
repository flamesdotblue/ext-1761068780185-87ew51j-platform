import React from 'react';
import { Rocket, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-500" />
          <span className="font-semibold tracking-tight">Aivio POS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white flex items-center gap-1"><Settings className="h-4 w-4" /> Admin</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 text-sm rounded-lg border border-white/15 hover:border-white/30 transition">Sign in</button>
          <button className="px-3 py-2 text-sm rounded-lg bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 hover:brightness-110 transition shadow-lg shadow-fuchsia-500/20">Get started</button>
        </div>
      </div>
    </header>
  );
}
