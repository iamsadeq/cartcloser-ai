import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 transition-colors">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-slate-900 dark:text-white pr-8">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mb-6' : 'max-h-0'}`}
      >
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do I need to know how to code?",
      answer: "Absolutely not. We provide a simple snippet (just like Google Analytics) that you copy and paste into your store's header or footer. It takes less than 2 minutes."
    },
    {
      question: "How much does the AI cost (OpenAI/Gemini)?",
      answer: "Since you bring your own key (BYOK), you pay the provider directly. For an average store with 1,000 visitors/month, OpenAI costs are usually under $5. This is far cheaper than paying a $300/mo markup to other tools."
    },
    {
      question: "Can I customize the discount logic?",
      answer: "Yes! You can set rules like 'Only offer 10% if cart value is over $50' or 'Only offer free shipping if they are on the checkout page for more than 30 seconds'."
    },
    {
      question: "Does it work on platforms other than Shopify?",
      answer: "We support Shopify, WooCommerce, and any custom site where you can add a JavaScript tag. We scrape the visible product data from the page, so it's platform-agnostic."
    },
    {
      question: "What happens if the AI says something wrong?",
      answer: "You can set a 'Strictness' level and provide a 'Knowledge Base' text file. The AI will strictly adhere to your policies. If it doesn't know an answer, it can be configured to ask for an email address for human follow-up."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 px-8 transition-colors">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};