import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onEnter: () => void;
}

export default function LoadingScreen({ onEnter }: LoadingScreenProps) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setLoadingComplete(true);
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-8">
          {/* Logo/Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12 text-center"
          >
            <h1 className="text-6xl font-bold text-white mb-4">
              <span className="text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.8)]">
                HEAVEN
              </span>
            </h1>
            <h2 className="text-2xl text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">Altar</h2>
            <p className="text-white/70 mt-4 text-sm">Connecting mortals with the divine</p>
          </motion.div>

          {/* Loading Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-80 mx-auto"
          >
            <div className="bg-gray-800 rounded-full h-2 mb-4">
              <motion.div
                className="bg-white h-2 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-white text-sm">{progress}% - Establishing divine connection...</p>
          </motion.div>

          {/* Enter Button */}
          <AnimatePresence>
            {loadingComplete && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                onClick={onEnter}
                className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black border border-white/40 text-white font-mono text-lg uppercase tracking-widest px-16 py-5 transition-all duration-500 hover:border-white hover:shadow-[0_0_60px_rgba(255,255,255,0.4),inset_0_0_60px_rgba(255,255,255,0.1)] transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <span className="font-bold">ENTER</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse delay-400"></div>
                  </div>
                </div>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}