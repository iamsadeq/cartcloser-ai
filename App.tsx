import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { HowItWorks } from './components/HowItWorks';
import { DemoPreview } from './components/DemoPreview';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [productUrl, setProductUrl] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleUrlSubmit = (url: string) => {
    setProductUrl(url);
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900 dark:selection:bg-emerald-900 dark:selection:text-emerald-100 transition-colors duration-300">
      {/* Global Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-300">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:opacity-20"></div>
        <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40"></div>
      </div>
      
      <div className="relative z-10">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero onUrlSubmit={handleUrlSubmit} />
          <Comparison />
          <HowItWorks />
          <DemoPreview />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;