import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pujas', path: '/pujas' },
    { name: 'Vastu', path: '/vastu' },
    { name: 'E-Puja', path: '/e-puja' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-saffron-900 to-saffron-800 text-saffron-50 text-xs py-2 px-4 flex justify-between items-center hidden md:flex relative z-50"
      >
        <div className="flex items-center space-x-2">
           <Sun size={14} className="text-saffron-300 animate-pulse" />
           <span>Shubh Muhurat Today: {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="font-semibold tracking-wider uppercase text-[10px] opacity-80">Vadodara's Most Trusted Vedic Institute</div>
        <div className="flex items-center space-x-4">
           <a href="tel:+9198XXXXXXXX" className="flex items-center gap-1 hover:text-white transition-colors"><Phone size={12} /> +91 98XXX XXXXX</a>
        </div>
      </motion.div>

      {/* Main Nav */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-xl rotate-3 flex items-center justify-center text-white font-serif font-bold text-2xl group-hover:rotate-6 transition-transform shadow-lg">
              A
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-saffron-900 leading-none group-hover:text-saffron-600 transition-colors">Ambika Jyotish</h1>
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] mt-1">Vedic Wisdom</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => 
                  `relative font-medium text-sm tracking-wide transition-colors duration-200 hover:text-saffron-600 ${isActive ? 'text-saffron-600 font-semibold' : 'text-stone-700'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-saffron-500 rounded-full" 
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <NavLink to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-saffron-600 to-saffron-500 hover:from-saffron-700 hover:to-saffron-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-saffron-500/30"
              >
                Book Now
              </motion.button>
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-stone-700 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <NavLink 
                    key={link.name} 
                    to={link.path}
                    className="text-stone-700 font-medium py-3 border-b border-gray-50 text-lg hover:text-saffron-600 hover:pl-2 transition-all"
                  >
                    {link.name}
                  </NavLink>
                ))}
                <NavLink to="/contact" className="bg-saffron-600 text-white text-center py-3 rounded-lg font-bold mt-4 shadow-md">
                  Book Appointment
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;