import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Quick, elegant 1.2s reveal that doesn't hold the user back
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 1300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setVisible(false);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          onClick={handleSkip}
          title="Click anywhere to skip"
        >
          <div className="intro-center">
            <motion.div
              className="intro-brand"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/auratects-logo.png"
                alt="AurAtects Leaf Logo"
                className="intro-logo-img"
              />
              <h1 className="intro-title">AurAtects</h1>
            </motion.div>
            <motion.div
              className="intro-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.p
              className="intro-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ARCHITECTURE &amp; BESPOKE INTERIORS
            </motion.p>
          </div>
          <button type="button" className="intro-skip-btn" onClick={handleSkip}>
            Skip [Esc]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
