import { useState } from 'react';
import { Home, Settings, BarChart3, Users } from 'lucide-react';

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'analytics', label: 'Análise', icon: BarChart3 },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho com Logo e Título */}
        <div className="flex items-center gap-3 py-4 border-b border-gray-100 mb-6">
          <img src="/logo.png" alt="DIETAI" className="h-8 w-auto" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            DIETAI – Dieta Personalizada
          </h1>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-lg font-medium
                  transition-all duration-200 whitespace-nowrap
                  ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/30 scale-105'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:text-emerald-600'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Conteúdo das Tabs */}
        <div className="pb-8">
          {activeTab === 'home' && (
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Bem-vindo ao DIETAI</h2>
              <p className="text-gray-600 mb-6">
                Sua plataforma inteligente para criar, adaptar e acompanhar dietas personalizadas com tecnologia de IA.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-4 border border-emerald-200">
                  <h3 className="font-semibold text-emerald-900 mb-2">Dietas Personalizadas</h3>
                  <p className="text-sm text-emerald-700">Crie planos adaptados ao seu objetivo e rotina</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">IA Inteligente</h3>
                  <p className="text-sm text-blue-700">Ajustes automáticos conforme sua evolução</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">Resultados Reais</h3>
                  <p className="text-sm text-purple-700">Acompanhamento detalhado do seu progresso</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Análise e Progresso</h2>
              <p className="text-gray-600 mb-6">
                Visualize seus dados, acompanhe métricas e veja o progresso de suas dietas em tempo real.
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-lg p-4 border border-emerald-200">
                  <p className="text-emerald-900 font-medium">📊 Gráficos de Progresso</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-lg p-4 border border-emerald-200">
                  <p className="text-emerald-900 font-medium">📈 Estatísticas Detalhadas</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-lg p-4 border border-emerald-200">
                  <p className="text-emerald-900 font-medium">🎯 Metas e Objetivos</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'clients' && (
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Gerenciamento de Clientes</h2>
              <p className="text-gray-600 mb-6">
                Para profissionais: gerencie seus clientes, crie dietas ilimitadas e acompanhe resultados.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Adicionar novo cliente</p>
                    <p className="text-sm text-gray-600">Comece a criar dietas personalizadas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Histórico completo</p>
                    <p className="text-sm text-gray-600">Acompanhe evolução de cada cliente</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Configurações</h2>
              <p className="text-gray-600 mb-6">
                Personalize suas preferências e configure sua conta no DIETAI.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div>
                    <p className="font-medium text-gray-900">Notificações</p>
                    <p className="text-sm text-gray-600">Receba alertas importantes</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5" defaultChecked />
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div>
                    <p className="font-medium text-gray-900">Modo Escuro</p>
                    <p className="text-sm text-gray-600">Interface em modo escuro</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5" />
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div>
                    <p className="font-medium text-gray-900">Privacidade</p>
                    <p className="text-sm text-gray-600">Gerencie seus dados</p>
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">Editar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
