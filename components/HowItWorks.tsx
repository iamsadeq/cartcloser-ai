import React from 'react';
import { Key, Globe, Code2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Paste URL",
      description: "Enter your store URL. Our AI instantly scrapes your product details, shipping policies, and brand voice."
    },
    {
      icon: <Key className="w-8 h-8 text-white" />,
      title: "Add AI Key",
      description: "Plug in your OpenAI or Gemini API key. You pay them directly (pennies per day) so we don't mark it up."
    },
    {
      icon: <Code2 className="w-8 h-8 text-white" />,
      title: "Embed Code",
      description: "Copy 2 lines of JavaScript to your theme.liquid or footer. You are now live and ready to sell."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Launch in minutes, not months</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We kept it simple. No complex flow builders or training manuals required.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-10 transition-colors"></div>

          {steps.map((step, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all relative group">
              <div className="w-16 h-16 bg-slate-900 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-slate-900/20 mx-auto md:mx-0 group-hover:bg-emerald-600 transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center md:text-left">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left">{step.description}</p>
              
              {/* Step Number */}
              <div className="absolute top-4 right-4 text-4xl font-black text-slate-100 dark:text-slate-800 -z-10 pointer-events-none transition-colors">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};