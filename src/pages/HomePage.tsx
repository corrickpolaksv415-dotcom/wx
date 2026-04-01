import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, ShoppingBag, Video } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop" 
            alt="Tibet Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wider"
          >
            探索雪域高原的<br/><span className="text-[#DAA520]">美食与文化</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            智游藏地为您提供一站式西藏特色美食选购、深度旅游攻略、文化科普与文创周边，开启您的寻梦之旅。
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-4 bg-[#8B2500] hover:bg-[#6A1C00] text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              选购特色美食
            </button>
            <button className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/50 text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              开启旅游路线
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-[#2C1E16] mb-4">平台特色服务</h2>
          <div className="w-24 h-1 bg-[#8B2500] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: '地道美食 一站选购',
              desc: '精选改良西藏传统食品，标注产地与文化故事，解决“不知道买什么”的痛点。',
              icon: ShoppingBag,
              img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop'
            },
            {
              title: '文旅融合 深度体验',
              desc: '搭载西藏美食地图，提供旅游攻略与景区推荐，实现美食引流旅游。',
              icon: MapPin,
              img: 'https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=2072&auto=format&fit=crop'
            },
            {
              title: 'AI主播 趣味科普',
              desc: '专属西藏文化AI虚拟主播，全天候产品讲解与文化科普，提升品牌辨识度。',
              icon: Video,
              img: 'https://images.unsplash.com/photo-1516280440502-61f53f3a1f33?q=80&w=2070&auto=format&fit=crop'
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={feature.img} alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-[#8B2500]">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C1E16] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
