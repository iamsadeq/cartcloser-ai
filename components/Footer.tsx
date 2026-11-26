import React from 'react';
import { Bot, Github, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-12 border-t border-slate-800 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4 group cursor-default">
              <div className="relative">
                 <div className="absolute inset-0 bg-emerald-500 blur-lg opacity-20"></div>
                 <div className="relative bg-gradient-to-tr from-emerald-600 to-teal-500 p-2 rounded-xl shadow-lg shadow-emerald-500/10 ring-1 ring-white/10">
                   <Bot className="w-6 h-6 text-white" strokeWidth={2} />
                 </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-lg tracking-tight text-white leading-none">
                  CartCloser
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="h-0.5 w-3 bg-emerald-500 rounded-full"></span>
                  <span className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest leading-none">AI Agent</span>
                </div>
              </div>
            </div>
            <p className="text-sm">The sales-first AI salesperson for modern e-commerce brands.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How it works</a></li>
              <li><a href="#demo" className="hover:text-emerald-400 transition-colors">Demo</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-4">About this project</h4>
            <p className="text-sm leading-relaxed">
              CartCloser AI is a micro-SaaS concept: a landing page and product demo for an AI sales assistant. Designed and
              built by{' '}
              <a href="https://iamsadeq.dev" className="text-emerald-400 hover:text-emerald-300 transition-colors">M. Sadeq Shahnavazi</a>.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} CartCloser AI · a concept by M. Sadeq Shahnavazi</p>
          <div className="flex gap-4">
            <a href="https://iamsadeq.dev" aria-label="Portfolio" className="hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="https://github.com/iamsadeq/cartcloser-ai" aria-label="Source on GitHub" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/m-sadeq-shahnavazi" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};