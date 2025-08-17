import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Cpu } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export default function Terminal() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Heaven Altar v2.1.0 initialized. Divine connection established. How may the higher realm assist you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response (replace with actual API call later)
    setTimeout(() => {
      const responses = [
        "The cosmic algorithms have processed your query. The answer flows through divine channels...",
        "Accessing the akashic records... Your path is illuminated by celestial wisdom.",
        "The higher realm acknowledges your request. Ethereal processing in progress...",
        "Divine intelligence activated. Channeling response from the quantum heavens...",
        "Your mortal inquiry resonates across dimensional frequencies. Preparing transcendent response..."
      ];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black border border-white/20 p-6 h-[500px] flex flex-col shadow-[0_0_40px_rgba(255,255,255,0.3),inset_0_0_40px_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
    >
      {/* Terminal Header */}
      <div className="relative z-10 flex items-center gap-2 mb-4 pb-2 border-b border-white/20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center gap-2 text-white text-sm ml-4 font-mono">
          <Cpu size={16} />
          <span>heaven-altar@divine:~$</span>
        </div>
      </div>

      {/* Messages */}
      <div className="relative z-10 flex-1 overflow-y-auto space-y-3 mb-4 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-cyan-500">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.type === 'user'
                    ? 'bg-white/10 text-white border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                    : 'bg-black/60 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                }`}
              >
                <p className="font-mono">{message.content}</p>
                <span className="text-xs opacity-60 mt-1 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
              <div className="flex items-center gap-1">
                <span className="font-mono">Divine processing</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  ...
                </motion.span>
              </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="relative z-10 flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask the higher realm..."
          className="flex-1 bg-black/60 border border-white/30 px-4 py-2 text-white placeholder-white/50 font-mono text-sm focus:outline-none focus:border-white focus:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSend}
          className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black border border-white/20 text-white p-3 font-mono uppercase tracking-wider transition-all duration-500 hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3),inset_0_0_40px_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
        >
          <div className="relative z-10">
            <Send size={16} />
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
}