import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

export default function CreativePage() {
  const products = [
    {
      name: '「智游藏地」定制藏式手工银碗',
      desc: '传承百年打制工艺，雕刻吉祥八宝图案，兼具实用与极高收藏价值。',
      price: 599,
      image: 'https://images.unsplash.com/photo-1610986603166-f78428624e76?q=80&w=2058&auto=format&fit=crop'
    },
    {
      name: '手绘唐卡书签套装',
      desc: '提取传统唐卡艺术元素，精美印刷，让阅读时光充满静谧与智慧。',
      price: 68,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: '尼木藏香文化礼盒',
      desc: '非物质文化遗产，精选多种名贵藏药材古法调配，安神助眠，净化空气。',
      price: 198,
      image: 'https://images.unsplash.com/photo-1608506173574-811c137e5554?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: '牦牛绒保暖围巾',
      desc: '取自高寒地带牦牛底层细绒，轻薄保暖，触感柔软，冬季御寒佳品。',
      price: 328,
      image: 'https://images.unsplash.com/photo-1520903073618-34eb5697d05f?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-serif font-bold text-[#2C1E16] mb-4">品牌孵化与文创周边</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          为西藏传统食品与文化打造“智游藏地”专属品牌，开发高附加值文创产品，让藏地文化融入现代生活。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="h-48 rounded-xl overflow-hidden mb-4 relative bg-gray-50">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-2 right-2 bg-white/90 p-1 rounded-full">
                <Star className="w-4 h-4 text-[#DAA520] fill-[#DAA520]" />
              </div>
            </div>
            <h3 className="font-bold text-[#2C1E16] mb-2 line-clamp-1">{product.name}</h3>
            <p className="text-xs text-gray-500 mb-4 line-clamp-2 h-8">{product.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-[#8B2500]">¥{product.price}</span>
              <button className="bg-gray-100 hover:bg-[#8B2500] hover:text-white p-2 rounded-lg transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Offline Store Promo */}
      <div className="mt-20 bg-[#2C1E16] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
        <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <span className="text-[#DAA520] font-bold tracking-widest text-sm mb-2 uppercase">线下体验</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">景区合作与线下试卖点</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            我们已与布达拉宫、大昭寺等各大景区达成合作，设立“智游藏地”线下体验试卖点。在这里，您可以免费品尝特色美食，亲手触摸文创产品，更有专业讲解员为您讲述背后的文化故事。实现线上线下联动，为您提供最极致的文旅体验。
          </p>
          <button className="bg-[#DAA520] hover:bg-[#B8860B] text-[#2C1E16] px-6 py-3 rounded-xl font-bold w-fit transition-colors">
            查看附近体验店
          </button>
        </div>
        <div className="md:w-1/2 h-64 md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" 
            alt="Offline Store" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
