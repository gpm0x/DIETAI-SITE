import { Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="font-outfit text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-1 mb-8">
              <div className="w-8 h-8 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xs">AI</div>
              diet<span className="text-emerald-600">AI</span>
            </Link>
            <p className="text-gray-500 leading-relaxed mb-8 font-medium">
              Potencializando profissionais de saúde com inteligência artificial para criar dietas precisas em segundos.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <a href="https://www.instagram.com/dietal_oficial/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all transform hover:-translate-y-1">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <a href="https://play.google.com/store/apps/details?id=com.dietia.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 active:scale-95">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Disponível no Google Play"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-black text-lg mb-8 font-outfit">Produto</h3>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="/#como-funciona" className="hover:text-emerald-600 transition-colors">Como Funciona</a></li>
              <li><a href="/#funcionalidades" className="hover:text-emerald-600 transition-colors">Funcionalidades</a></li>
              <li><a href="/#faq" className="hover:text-emerald-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-black text-lg mb-8 font-outfit">Suporte</h3>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Comunidade</a></li>
              <li><a href="https://www.instagram.com/dietal_oficial/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-black text-lg mb-8 font-outfit">News</h3>
            <p className="text-sm text-gray-500 font-medium mb-4">Receba novidades sobre IA e nutrição.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Seu email" className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-sm w-full focus:outline-none focus:border-emerald-600 transition-all" />
              <button className="bg-emerald-600 text-white p-2 rounded-xl hover:bg-emerald-700 transition-all">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm font-medium">
              © {currentYear} dietAI. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap gap-8 text-sm font-bold">
              <Link to="/privacidade" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">Privacidade</Link>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Termos</a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Status</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
