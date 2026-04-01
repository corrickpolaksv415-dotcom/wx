import React, { useState } from 'react';
import { ShoppingBag, BookOpen, Map, Gift, Video, Home as HomeIcon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import HomePage from './pages/HomePage';
import FoodPage from './pages/FoodPage';
import CulturePage from './pages/CulturePage';
import TravelPage from './pages/TravelPage';
import CreativePage from './pages/CreativePage';
import AILivePage from './pages/AILivePage';

const tabs = [
  { id: 'home', label: '首页', icon: HomeIcon, component: HomePage },
  { id: 'food', label: '美食选购', icon: ShoppingBag, component: FoodPage },
  { id: 'culture', label: '文化传播', icon: BookOpen, component: CulturePage },
  { id: 'travel', label: '旅游服务', icon: Map, component: TravelPage },
  { id: 'creative', label: '文创周边', icon: Gift, component: CreativePage },
  { id: 'ailive', label: 'AI虚拟主播', icon: Video, component: AILivePage },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || HomePage;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FDFBF7]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
              <span className="text-2xl font-bold text-[#8B2500] font-serif tracking-wider">智游藏地</span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-[#8B2500] bg-red-50'
                      : 'text-gray-600 hover:text-[#8B2500] hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-[#8B2500]"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-gray-100"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-3 rounded-md text-base font-medium ${
                      activeTab === tab.id
                        ? 'text-[#8B2500] bg-red-50'
                        : 'text-gray-600 hover:text-[#8B2500] hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C1E16] text-white/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif text-[#DAA520] mb-4">智游藏地</h3>
            <p className="text-sm leading-relaxed max-w-md">
              致力于传播西藏优秀传统文化，提供一站式特色美食选购、旅游服务与文创产品。让世界了解西藏，让西藏走向世界。
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setActiveTab('food')} className="hover:text-[#DAA520]">美食选购</button></li>
              <li><button onClick={() => setActiveTab('travel')} className="hover:text-[#DAA520]">旅游服务</button></li>
              <li><button onClick={() => setActiveTab('ailive')} className="hover:text-[#DAA520]">AI虚拟主播</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">
              <li>线下体验店：拉萨市城关区八廓街XX号</li>
              <li>合作邮箱：contact@zhiyouzangdi.com</li>
              <li>服务热线：400-XXX-XXXX</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-sm text-center">
          &copy; {new Date().getFullYear()} 智游藏地. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
