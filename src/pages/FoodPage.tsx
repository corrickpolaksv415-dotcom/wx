import React from 'react';
import { ShoppingCart, Info, MapPin } from 'lucide-react';

const foods = [
  {
    id: 1,
    name: '风干牦牛肉干',
    category: '传统肉制品',
    origin: '那曲市',
    story: '源自高寒牧区的传统保存工艺，精选散养牦牛后腿肉，自然风干，保留最原始的肉香与营养。',
    method: '开袋即食，或搭配酥油茶、青稞酒食用风味更佳。',
    price: 128.00,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    name: '精酿青稞酒',
    category: '特色饮品',
    origin: '日喀则市',
    story: '藏族人民逢年过节必备的传统佳酿，以高原特产青稞为原料，采用古法酿制，酒精度低，口感清甜。',
    method: '冷藏后饮用口感更佳，适合聚会佐餐。',
    price: 88.00,
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    name: '手工酥油茶',
    category: '特色饮品',
    origin: '拉萨市',
    story: '高原人民的日常饮品，能有效缓解高原反应，补充热量。选用优质牦牛奶提炼的酥油与浓茶熬制。',
    method: '加热后饮用，可搭配糌粑一同食用。',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    name: '有机黑青稞糌粑',
    category: '主食谷物',
    origin: '山南市',
    story: '藏族传统主食，将青稞炒熟后磨成粉。富含膳食纤维与微量元素，是健康粗粮的代表。',
    method: '加入少量酥油茶或热水，用手捏成团状即可食用。',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    name: '藏香猪肉酱',
    category: '调味佐餐',
    origin: '林芝市',
    story: '选用林芝特产放养藏香猪，肉质鲜美，脂肪含量低，配以多种藏地香料熬制而成。',
    method: '拌饭、拌面或作为蘸料使用。',
    price: 56.00,
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    name: '高原雪菊茶',
    category: '养生茶饮',
    origin: '阿里地区',
    story: '生长于海拔3000米以上的雪域高原，纯天然无污染，具有清热解毒、降压降脂的功效。',
    method: '取3-5朵雪菊，用90度以上热水冲泡，可反复冲泡3-4次。',
    price: 168.00,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function FoodPage() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-serif font-bold text-[#2C1E16] mb-4">特色美食选购</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          品味雪域高原的纯净馈赠。我们为您精选改良后的西藏传统食品与特色特产，每一口都是地道的藏地风情。
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['全部', '传统肉制品', '特色饮品', '主食谷物', '调味佐餐', '养生茶饮'].map((cat, idx) => (
          <button 
            key={idx}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              idx === 0 ? 'bg-[#8B2500] text-white' : 'bg-white text-gray-600 hover:bg-red-50 hover:text-[#8B2500] border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foods.map((food) => (
          <div key={food.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
            <div className="h-56 overflow-hidden relative group">
              <img src={food.image} alt={food.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#8B2500]">
                {food.category}
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-[#2C1E16]">{food.name}</h3>
                <span className="text-lg font-bold text-[#8B2500]">¥{food.price.toFixed(2)}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                产地：{food.origin}
              </div>
              
              <div className="space-y-3 mb-6 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">文化故事</h4>
                  <p className="text-sm text-gray-600 line-clamp-2">{food.story}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">食用方法</h4>
                  <p className="text-sm text-gray-600 line-clamp-2">{food.method}</p>
                </div>
              </div>
              
              <div className="flex gap-3 mt-auto">
                <button className="flex-1 bg-[#8B2500] hover:bg-[#6A1C00] text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  加入购物车
                </button>
                <button className="p-3 border border-gray-200 hover:border-[#8B2500] hover:text-[#8B2500] rounded-xl text-gray-600 transition-colors">
                  <Info className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
