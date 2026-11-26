import React, { useState, useEffect } from 'react';
import { Bot, Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-slate-200 dark:border-slate-800 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-tr from-emerald-600 to-teal-500 p-2.5 rounded-xl shadow-lg shadow-emerald-500/20 ring-1 ring-white/20 group-hover:scale-105 transition-transform duration-300">
              <Bot className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white leading-none">
              CartCloser
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
               <span className="h-0.5 w-3 bg-emerald-500 rounded-full"></span>
               <span className="text-[0.65rem] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">AI Agent</span>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">How it Works</button>
          <button onClick={() => scrollToSection('demo')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Demo</button>
          <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Pricing</button>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button onClick={() => scrollToSection('pricing')} className="bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Actions */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button 
            className="p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 p-4 shadow-xl animate-fade-in-up">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('how-it-works')} className="text-left font-medium text-slate-600 dark:text-slate-300 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">How it Works</button>
            <button onClick={() => scrollToSection('demo')} className="text-left font-medium text-slate-600 dark:text-slate-300 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Demo</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left font-medium text-slate-600 dark:text-slate-300 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Pricing</button>
            <button onClick={() => scrollToSection('pricing')} className="bg-emerald-600 text-white p-3 rounded-lg font-bold text-center hover:bg-emerald-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}