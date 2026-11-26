import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, Sparkles, RefreshCw, Smartphone } from 'lucide-react';

interface Message {
  id: number;
  role: 'user' | 'bot';
  text: string;
  isOffer?: boolean;
}

export const DemoPreview: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false); // Controls animation start
  
  // Scripted conversation for the demo
  const script = [
    { role: 'user', text: "Does this come with a warranty?", delay: 500 },
    { role: 'bot', text: "Yes! Every order includes a 1-year full replacement warranty. We stand by our quality.", delay: 1500 },
    { role: 'user', text: "Okay, thanks. I'll think about it.", delay: 3000 },
    { role: 'bot', text: "I totally understand taking your time. But hey, I see you're eyeing the Premium model...", delay: 4500 },
    { role: 'bot', text: "If you order in the next 10 minutes, I can authorize a 15% discount code (SAVE15) and upgrade you to Express Shipping for free. Want to lock that in?", isOffer: true, delay: 6500 },
    { role: 'user', text: "Wow, really? Okay, I'm in!", delay: 8000 },
    { role: 'bot', text: "Fantastic! I've applied code SAVE15 to your cart. Click 'Checkout' whenever you're ready!", delay: 9500 }
  ];

  const [scriptIndex, setScriptIndex] = useState(0);

  // Auto-start when component mounts (or via intersection observer in real app)
  useEffect(() => {
    const t = setTimeout(() => setIsActive(true), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isActive) return;
    if (scriptIndex >= script.length) return;

    const currentLine = script[scriptIndex];
    
    const timer = setTimeout(() => {
      if (currentLine.role === 'bot') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          addMessage(currentLine);
          setScriptIndex(prev => prev + 1);
        }, 1200); // Simulate typing duration
      } else {
        addMessage(currentLine);
        setScriptIndex(prev => prev + 1);
      }
    }, currentLine.delay - (scriptIndex > 0 ? script[scriptIndex-1].delay : 0));

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptIndex, isActive]);

  const addMessage = (line: any) => {
    setMessages(prev => [...prev, { id: Date.now(), role: line.role, text: line.text, isOffer: line.isOffer }]);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const restartDemo = () => {
    setMessages([]);
    setScriptIndex(0);
    setIsActive(false);
    setTimeout(() => setIsActive(true), 100);
  };

  return (
    <section id="demo" className="py-24 bg-slate-900 dark:bg-black text-white relative overflow-hidden transition-colors duration-300">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Copy */}
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
            <Sparkles className="w-3 h-3" /> 
            Killer Feature
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">The "Closer" Instinct</h2>
          <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Most visitors leave because of a tiny doubt. CartCloser monitors hesitation (scroll depth, idle time, exit intent) and intervenes with the perfect incentive to save the sale.
          </p>
          <button onClick={restartDemo} className="group flex items-center gap-2 text-white font-semibold bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg transition-all mx-auto lg:mx-0">
            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            Replay Conversation
          </button>
        </div>

        {/* Right: Chat Interface */}
        <div className="flex-1 w-full max-w-sm lg:max-w-md relative">
           {/* Phone Border/Glow Effect */}
           <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-[3rem] blur-xl opacity-75"></div>
           
           <div className="bg-slate-950 rounded-[2.5rem] border-8 border-slate-800 dark:border-slate-800 shadow-2xl overflow-hidden relative z-10 aspect-[9/16] flex flex-col">
             
             {/* Notch/Status Bar */}
             <div className="h-8 bg-slate-950 flex items-center justify-center relative z-20">
               <div className="w-24 h-4 bg-slate-800 rounded-b-xl"></div>
             </div>

            {/* Chat Header */}
            <div className="bg-slate-900 p-4 border-b border-slate-800 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Sales Assistant</h4>
                  <p className="text-xs text-emerald-400 font-medium">Online Now</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 bg-slate-950 overflow-y-auto p-4 flex flex-col gap-4 scroll-smooth">
              <div className="text-center text-xs text-slate-600 font-medium my-2">Today 2:42 PM</div>
              
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                  <div 
                    className={`
                      max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm
                      ${msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : msg.isOffer 
                          ? 'bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-bl-none border border-emerald-500/30' 
                          : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                      }
                    `}
                  >
                    {msg.text}
                    {msg.isOffer && (
                       <div className="mt-3 pt-3 border-t border-emerald-500/30">
                          <button className="w-full bg-white text-emerald-700 font-bold py-2.5 rounded-lg text-xs uppercase hover:bg-emerald-50 transition-colors shadow-sm">
                            Apply Code: SAVE15
                          </button>
                       </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start animate-fade-in-up">
                  <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-none p-4 flex items-center gap-1.5 w-16 h-10">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
              <div className="flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2.5 border border-slate-700">
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="bg-transparent border-none focus:outline-none flex-1 text-sm text-slate-300 placeholder:text-slate-600" 
                  disabled
                />
                <button className="text-emerald-500 p-1.5 rounded-full hover:bg-emerald-500/10 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Home Bar */}
             <div className="h-6 bg-slate-900 flex justify-center pt-2">
                <div className="w-32 h-1 bg-slate-700 rounded-full"></div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};