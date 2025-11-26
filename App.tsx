import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pujas from './pages/Pujas';
import Vastu from './pages/Vastu';
import EPuja from './pages/EPuja';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Loader from './components/Loader';
import BackgroundSymbols from './components/BackgroundSymbols';
import { LanguageProvider } from './LanguageContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout component to handle loader logic
const Layout: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Initial Load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s initial load for Mantra reading
    return () => clearTimeout(timer);
  }, []);

  // Route Change Loader (optional, keep it brief)
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // Quick transition
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Loader isVisible={loading} />
      <BackgroundSymbols />
      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pujas" element={<Pujas />} />
            <Route path="/vastu" element={<Vastu />} />
            <Route path="/e-puja" element={<EPuja />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Layout />
      </Router>
    </LanguageProvider>
  );
};

export default App;
