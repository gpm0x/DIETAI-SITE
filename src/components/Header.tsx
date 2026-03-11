import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="font-outfit text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-1 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xs"
              >AI</motion.div>
              diet<span className="text-emerald-600">AI</span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {['Como Funciona', 'Funcionalidades', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(' ', '-')}`}
                className="text-gray-600 hover:text-emerald-600 font-bold text-sm transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Botões CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.dietia.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
            >
              Baixar App
            </a>
          </div>

          {/* Menu Mobile */}
          <button
            className="md:hidden p-2 rounded-xl bg-gray-50 border border-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col gap-6">
                {['Como Funciona', 'Funcionalidades', 'FAQ'].map((item, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item}
                    href={`/#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(' ', '-')}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-900 font-bold text-lg"
                  >
                    {item}
                  </motion.a>
                ))}
                <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.dietia.app&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-lg"
                  >
                    Baixar App
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
