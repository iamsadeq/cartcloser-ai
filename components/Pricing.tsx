import React from 'react';
import { Check, Star } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-950 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Simple, transparent pricing.</h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Choose how you want to pay. No hidden fees. No commissions on your sales.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Monthly Plan */}
          <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm hover:shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Monthly</h3>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">$19</span>
              <span className="text-slate-500 dark:text-slate-400 font-medium">/mo</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">Perfect for testing the waters. Cancel anytime.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              {['Unlimited Products', 'Sales-Focus Prompting', 'Basic Analytics', 'Email Support', '1 Store License'].map(feat => (
                <li key={feat} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                  <div className="p-1 rounded-full bg-slate-100 dark:bg-slate-800">
                    <Check className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 px-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
              Start Monthly Subscription
            </button>
          </div>

          {/* Lifetime Deal - HIGHLIGHTED */}
          <div className="flex-1 relative group">
            {/* Glowing Gradient Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[18px] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div className="relative h-full bg-slate-900 dark:bg-slate-900 rounded-2xl p-8 flex flex-col shadow-2xl overflow-hidden border dark:border-emerald-500/30">
               {/* Background Texture */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

              <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-lg flex items-center gap-1 shadow-lg">
                <Star className="w-3 h-3 fill-white" /> BEST VALUE
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Lifetime Deal</h3>
              <div className="mb-6 flex items-baseline gap-1 relative z-10">
                <span className="text-5xl font-extrabold text-white tracking-tight">$99</span>
                <span className="text-slate-400 font-medium">one-time</span>
              </div>
              <p className="text-sm text-slate-300 mb-8 border-b border-slate-700 pb-8">Pay once, own your salesperson forever. No monthly AI markups.</p>
              
              <ul className="space-y-4 mb-8 flex-1 relative z-10">
                {['Everything in Monthly', 'Lifetime Updates included', 'Priority 24/7 Support', 'Early Access to Beta Features', 'No Recurring Costs'].map(feat => (
                  <li key={feat} className="flex items-center gap-3 text-white text-sm font-medium">
                    <div className="bg-emerald-500/20 p-1 rounded-full">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] relative z-10 transform active:scale-95">
                Get Lifetime Access
              </button>
              <p className="text-center text-xs text-slate-500 mt-4 relative z-10">30-day money-back guarantee.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};