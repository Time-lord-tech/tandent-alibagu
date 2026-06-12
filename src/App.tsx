import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import HomePage from './pages/HomePage';
import EmergencyRelief from './pages/services/EmergencyRelief';
import ComfortFirst from './pages/services/ComfortFirst';
import SmileRestoration from './pages/services/SmileRestoration';
import DentalImplants from './pages/services/DentalImplants';

// Module-level Lenis instance so ScrollToTop can reach it
let lenisInstance: InstanceType<typeof Lenis> | null = null;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisInstance = lenis;
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/emergency-relief" element={<EmergencyRelief />} />
        <Route path="/services/comfort-first" element={<ComfortFirst />} />
        <Route path="/services/smile-restoration" element={<SmileRestoration />} />
        <Route path="/services/dental-implants" element={<DentalImplants />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LenisProvider />
      <ScrollToTop />
      <div className="noise-overlay" style={{ minHeight: '100vh' }}>
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
