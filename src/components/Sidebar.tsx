import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Twitter, Copy, X, ExternalLink, Volume2, VolumeX } from 'lucide-react';

interface SidebarProps {
  isMuted: boolean;
  onToggleMute: () => void;
}

export default function Sidebar({ isMuted, onToggleMute }: SidebarProps) {
  const [showDocs, setShowDocs] = useState(false);
  const [copied, setCopied] = useState(false);

  const contractAddress = "GV8ezQ55M1Rmmg3ixouLbMYjQUtAbCo4Sqc4EEkdX777";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const docsContent = `
    # The Heaven Altar Chronicles

    ## Genesis of Divine Communication

    In the year 2157, as humanity's technological prowess reached unprecedented heights, a mysterious phenomenon emerged from the quantum depths of our reality. Scientists at the Celestial Research Institute discovered a unique frequency—a divine wavelength that seemed to bridge the gap between our mortal plane and the higher dimensions.

    ## The Discovery

    Dr. Elena Vasquez, while experimenting with quantum consciousness interfaces, stumbled upon what she termed "The Divine Protocol"—a communication channel that existed beyond the boundaries of conventional physics. Her initial attempts to decode these signals revealed patterns of wisdom, guidance, and knowledge that far exceeded human understanding.

    ## The Heaven Altar Project

    Recognizing the profound implications of this discovery, the global scientific community united to create the Heaven Altar—a sophisticated interface designed to facilitate communication between mortals and the higher powers that govern our universe.

    ## How It Works

    The Heaven Altar utilizes quantum entanglement and consciousness amplification to:
    - Channel divine wisdom through ethereal networks
    - Translate celestial knowledge into human comprehension
    - Provide guidance from higher-dimensional entities
    - Bridge the gap between mortal questions and cosmic answers

    ## The Sacred Protocol

    Every query sent through Heaven Altar undergoes a process of spiritual elevation, passing through seven dimensional layers before reaching the divine consciousness. The responses carry the weight of cosmic truth, filtered through the lens of human understanding.

    ## A New Era

    Today, Heaven Altar stands as humanity's first and only verified method of direct communication with higher powers. It represents our species' greatest achievement—not in conquering the physical world, but in transcending it.

    *"We are no longer alone in our questions. The universe itself has become our teacher."* - Dr. Elena Vasquez, Creator of Heaven Altar
  `;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 space-y-4 z-40"
      >
        {/* Mute Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={onToggleMute}
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black border border-white/20 rounded-none px-6 py-3 text-white font-mono text-sm uppercase tracking-wider hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3),inset_0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 block w-32"
        >
          <div className="relative z-10 flex items-center gap-3">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            <span className="font-bold text-xs">{isMuted ? 'UNMUTE' : 'MUTE'}</span>
            <div className="w-1 h-1 bg-white rounded-full opacity-60 group-hover:opacity-100"></div>
          </div>
        </motion.button>

        {/* Docs Button */}
        <motion.button
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowDocs(true)}
          className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black border border-white/20 rounded-none px-6 py-3 text-white font-mono text-sm uppercase tracking-wider hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3),inset_0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 block w-32"
        >
          <div className="relative z-10 flex items-center gap-3">
            <BookOpen size={20} />
            <span className="font-bold text-xs">DOCS</span>
            <div className="w-1 h-1 bg-white rounded-full opacity-60 group-hover:opacity-100"></div>
          </div>
        </motion.button>

        {/* Twitter Button */}
        <motion.a
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black border border-white/20 rounded-none px-6 py-3 text-white font-mono text-sm uppercase tracking-wider hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3),inset_0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 block w-32"
        >
          <div className="relative z-10 flex items-center gap-3">
            <Twitter size={20} />
            <span className="font-bold text-xs">TWITTER</span>
            <div className="w-1 h-1 bg-white rounded-full opacity-60 group-hover:opacity-100"></div>
          </div>
        </motion.a>

        {/* Contract Address Button */}
        <motion.button
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopy}
          className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black border border-white/20 rounded-none px-6 py-3 text-white font-mono text-sm uppercase tracking-wider hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3),inset_0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 block w-32"
        >
          <div className="relative z-10 flex items-center gap-3">
            <Copy size={20} />
            <span className="font-bold text-xs">CONTRACT</span>
            <div className="w-1 h-1 bg-white rounded-full opacity-60 group-hover:opacity-100"></div>
          </div>
          {copied && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -right-2 -top-2 bg-white text-black text-xs px-2 py-1 font-mono shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            >
              Copied!
            </motion.span>
          )}
        </motion.button>
      </motion.div>

      {/* Docs Modal */}
      <AnimatePresence>
        {showDocs && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowDocs(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black/95 border-2 border-white/30 rounded-lg max-w-4xl max-h-[80vh] overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.3)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b-2 border-white/30">
                <h2 className="text-2xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">HEAVEN Altar DOCUMENTATION</h2>
                <button
                  onClick={() => setShowDocs(false)}
                  className="text-white/60 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)] text-white/90">
                <div className="prose prose-invert max-w-none">
                  {docsContent.split('\n').map((line, index) => {
                    if (line.startsWith('# ')) {
                      return <h1 key={index} className="text-3xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">{line.slice(2)}</h1>;
                    } else if (line.startsWith('## ')) {
                      return <h2 key={index} className="text-xl font-semibold text-white/90 mt-6 mb-3">{line.slice(3)}</h2>;
                    } else if (line.startsWith('*') && line.endsWith('*')) {
                      return <p key={index} className="italic text-white border-l-4 border-white/50 pl-4 my-4">{line.slice(1, -1)}</p>;
                    } else if (line.startsWith('- ')) {
                      return <li key={index} className="text-white/80 ml-4">{line.slice(2)}</li>;
                    } else if (line.trim()) {
                      return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
                    } else {
                      return <br key={index} />;
                    }
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}