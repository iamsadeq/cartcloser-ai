import React from 'react';
import { Check, X, ShieldCheck, Zap, DollarSign, BrainCircuit } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 dark:bg-emerald-900/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Why pay for "Support" when you need Sales?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Legacy chatbots are designed to deflect tickets and save support costs. We are designed to print money.</p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-12 gap-6 items-center">
          
          {/* Competitors Column (Left) */}
          <div className="md:col-span-5 md:pr-4">
             <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm opacity-80 hover:opacity-100 transition-all">
                <h3 className="text-xl font-bold text-slate-500 dark:text-slate-400 mb-1">Traditional Bots</h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 mb-8">Intercom, Gorgias, Tidio</p>
                
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"><X className="w-5 h-5 text-slate-400" /></div>
                    <span>Passive Support Focused</span>
                  </li>
                  <li className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"><DollarSign className="w-5 h-5 text-red-400" /></div>
                    <span>Expensive Monthly Markups</span>
                  </li>
                   <li className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"><BrainCircuit className="w-5 h-5 text-slate-400" /></div>
                    <span>Generic "I don't know" answers</span>
                  </li>
                  <li className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"><ShieldCheck className="w-5 h-5 text-slate-400" /></div>
                    <span>Static Auto-replies</span>
                  </li>
                </ul>
             </div>
          </div>

          {/* VS Badge (Desktop) */}
          <div className="hidden md:flex md:col-span-2 justify-center z-10">
            <div className="bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold rounded-full p-4 border-4 border-slate-50 dark:border-slate-950 shadow-inner">
              VS
            </div>
          </div>

          {/* CartCloser Column (Right - Highlighted) */}
          <div className="md:col-span-5 md:pl-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-emerald-500 shadow-2xl relative transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                  The Closer
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">CartCloser AI</h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-8">Sales-First Intelligence</p>
                
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-slate-900 dark:text-slate-100 font-medium">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg"><Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /></div>
                    <span>Aggressive Sales Focus</span>
                  </li>
                  <li className="flex items-center gap-4 text-slate-900 dark:text-slate-100 font-medium">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg"><Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /></div>
                    <span>$0 Markup (Wholesale BYOK)</span>
                  </li>
                   <li className="flex items-center gap-4 text-slate-900 dark:text-slate-100 font-medium">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg"><BrainCircuit className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /></div>
                    <span>Scrapes Product Data Instantly</span>
                  </li>
                  <li className="flex items-center gap-4 text-slate-900 dark:text-slate-100 font-medium">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg"><DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /></div>
                    <span>Dynamic Discount Closing</span>
                  </li>
                </ul>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};