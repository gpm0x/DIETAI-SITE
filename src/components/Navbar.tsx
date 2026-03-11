
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Times', path: '/times' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="fixed top-6 w-full z-50 px-4 flex justify-center">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-6xl transition-all duration-700 rounded-full border border-white/10 flex items-center justify-between px-6 py-2 ${
          scrolled ? 'bg-black/90 backdrop-blur-3xl py-2 shadow-2xl' : 'bg-black/40 backdrop-blur-md py-3'
        }`}
      >
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative w-10 h-10 overflow-hidden rounded-xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.1)] group-hover:shadow-purple-500/20 transition-all duration-500"
            >
            <img src='/image/logo-shadows.png'/>
            </motion.div>
            <span className="font-syne font-bold text-xs tracking-widest uppercase text-white hidden sm:block">
              Shadows<span className="text-purple-500 ml-1">®</span>
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:text-purple-400 relative group ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}
              >
                {link.name}
                <motion.div 
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-purple-500 rounded-full ${isActive ? 'nav-active-glow' : ''}`}
                  initial={false}
                  animate={{ width: isActive ? '100%' : '0%', opacity: isActive ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </Link>
            );
          })}
        </div>


        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 40 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-black border-l border-white/10 p-12 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-12">
                <div className="flex items-center justify-between mb-16">
                  <div className="flex items-center gap-4">
                    <img src="/image/logo-shadows.png" className="w-16 h-16 rounded-2xl border border-white/10 shadow-xl" />
                    <div>
                      <h3 className="text-white font-syne font-bold uppercase tracking-widest">Shadows</h3>
                    </div>
                  </div>
                  <button 
                    className="text-white p-2 hover:bg-white/5 rounded-full transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-8">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.1) }}
                    >
                      <Link
                        to={link.path}
                        className={`text-2xl font-syne font-bold uppercase tracking-tighter ${
                          location.pathname === link.path ? 'text-purple-500' : 'text-white hover:text-purple-400 transition-colors'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="h-px bg-white/10 w-full" />
                <Link to="/contato">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-5 purple-gradient text-white rounded-3xl font-bold uppercase tracking-widest text-[10px]"
                  >
                    Torne-se Elite
                  </motion.button>
                </Link>
                <p className="text-center text-[8px] text-gray-600 font-bold uppercase tracking-widest">
                  © 2025 Shadows E-Sport Protocol
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
