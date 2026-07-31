import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const LETTERS_SNBT = 'SNBT'.split('');
const LETTERS_LIBRARY = 'SEKAI'.split('');

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    // Start the exit animation after 2.2s
    const exit = setTimeout(() => setPhase('out'), 2200);
    // Notify parent after curtain is fully gone (~3.1s total)
    const done = setTimeout(onComplete, 3100);
    return () => {
      clearTimeout(exit);
      clearTimeout(done);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase === 'in' && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f0808] overflow-hidden"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* SNBT word */}
          <div className="flex overflow-hidden">
            {LETTERS_SNBT.map((letter, i) => (
              <motion.span
                key={i}
                className="font-display font-bold text-7xl sm:text-9xl text-[#f5ede0] tracking-tight leading-none"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  delay: 0.15 + i * 0.06,
                  duration: 0.55,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* LIBRARY word */}
          <div className="flex overflow-hidden mt-1">
            {LETTERS_LIBRARY.map((letter, i) => (
              <motion.span
                key={i}
                className="font-display font-bold text-7xl sm:text-9xl text-[#c0392b] tracking-tight leading-none"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  delay: 0.35 + i * 0.055,
                  duration: 0.55,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Underline that draws itself */}
          <motion.div
            className="h-[2px] bg-[#c0392b] mt-6 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            style={{ maxWidth: '420px' }}
            transition={{
              delay: 1.1,
              duration: 0.6,
              ease: [0.33, 1, 0.68, 1],
            }}
          />

          {/* Tagline */}
          <motion.p
            className="mt-4 text-sm tracking-[0.25em] text-[#f5ede0]/40 font-sans uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Materi gratis · Langsung download
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
