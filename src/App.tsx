import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import SplineBackground from './components/SplineBackground';
import Terminal from './components/Terminal';
import Sidebar from './components/Sidebar';

function App() {
  const [showMain, setShowMain] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    setShowMain(true);
    
    // Start background music
    const backgroundMusic = new Audio('/music.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3; // Set to 30% volume
    backgroundMusic.play().catch(console.error);
    setAudio(backgroundMusic);
  };

  const toggleMute = () => {
    if (audio) {
      if (isMuted) {
        audio.volume = 0.3;
        setIsMuted(false);
      } else {
        audio.volume = 0;
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-black">
      {/* Loading Screen */}
      <AnimatePresence>
        {!showMain && <LoadingScreen onEnter={handleEnter} />}
      </AnimatePresence>

      {/* Main Application */}
      <AnimatePresence>
        {showMain && (
          <>
            {/* 3D Background */}
            <SplineBackground />

            {/* Overlay Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="relative z-10 min-h-screen"
            >
              {/* Header Title */}
              <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute top-8 left-0 right-0 text-center z-30"
              >
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                    HEAVEN
                  </h1>
                  <h2 className="text-lg md:text-xl text-white/90 tracking-widest font-light">
                    Altar
                  </h2>
                </div>
              </motion.header>

              {/* Sidebar */}
              <Sidebar isMuted={isMuted} onToggleMute={toggleMute} />

              {/* Terminal Interface */}
              <div className="flex items-center justify-end h-screen px-4 pr-8">
                {/* Terminal Area */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="max-w-2xl w-full mr-4"
                >
                  <Terminal />
                </motion.div>
              </div>

              {/* Ambient Glow Effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>

              {/* Mobile Responsiveness Overlay */}
              <div className="md:hidden absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                <div className="bg-black/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-6 text-center text-white">
                  <h3 className="text-xl font-bold mb-4 text-white">Mobile Access</h3>
                  <p className="text-gray-300 mb-4">
                    Heaven Altar is optimized for desktop experience.
                  </p>
                  <p className="text-sm text-white/60">
                    Please visit on a larger screen for the full divine interface.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;