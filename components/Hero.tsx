import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Link2, Loader2, Sparkles, Zap } from 'lucide-react';

interface HeroProps {
  onUrlSubmit: (url: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onUrlSubmit }) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    // Simulate analysis
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        onUrlSubmit(url);
      }, 800);
    }, 1500);
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 mb-8 animate-fade-in-up shadow-sm hover:shadow-md transition-shadow cursor-default backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          New: Now compatible with WooCommerce 8.0+
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1] drop-shadow-sm transition-colors">
          Stop Losing Sales at 2 AM.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">The AI Closer That Never Sleeps.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed transition-colors">
          Most bots are librarians. Ours is a <span className="text-slate-900 dark:text-slate-200 font-semibold underline decoration-emerald-400/50 decoration-2">closer</span>. It auto-scrapes your store, answers objections, and drops a discount code only when it seals the deal.
        </p>

        {/* Action Input */}
        <div className="max-w-xl mx-auto mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500 group-hover:duration-200 animate-tilt"></div>
          <form onSubmit={handleSubmit} className="relative flex items-center p-2 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 focus-within:ring-4 focus-within:ring-emerald-500/20 transition-all">
            <div className="pl-4 text-slate-400">
              <Link2 className="w-5 h-5" />
            </div>
            <input 
              type="url" 
              placeholder="Paste your Product URL to test..." 
              className="flex-1 p-4 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-transparent font-medium"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <button 
              type="submit"
              disabled={isLoading || isSuccess}
              className={`
                px-6 py-3.5 rounded-lg font-bold text-white transition-all duration-300 flex items-center gap-2 shadow-lg
                ${isSuccess ? 'bg-emerald-500 scale-105' : 'bg-slate-900 dark:bg-emerald-600 dark:hover:bg-emerald-500 hover:bg-slate-800 hover:scale-[1.02]'}
                ${isLoading ? 'opacity-90 cursor-wait' : ''}
              `}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Analyzing...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 className="w-5 h-5" /> Ready!
                </>
              ) : (
                <>
                  Generate My Bot <Zap className="w-4 h-4 fill-current" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Micro copy */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-slate-500 dark:text-slate-400 font-medium">
          <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required
          </span>
          <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Setup in 90 seconds
          </span>
        </div>

        {/* Social Proof / Trust */}
        <div className="mt-20">
          <p className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-[0.2em]">Built for stores on</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 dark:opacity-30 grayscale hover:grayscale-0 dark:hover:grayscale-0 transition-all duration-500">
            {['Shopify', 'WooCommerce'].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 hover:text-emerald-800 dark:hover:text-emerald-400 cursor-default transition-colors">{brand}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};