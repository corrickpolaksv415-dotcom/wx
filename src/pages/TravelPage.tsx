import React from 'react';
import { MapPin, Navigation, Ticket, Utensils } from 'lucide-react';

export default function TravelPage() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-serif font-bold text-[#2C1E16] mb-4">旅游服务与美食地图</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          以美食为引，探索藏区美景。提供景区门票预订、旅游攻略与周边特色美食推荐，实现文旅深度融合。
        </p>
      </div>

      {/* Interactive Map Placeholder */}
      <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 mb-16 relative">
        <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
          <h3 className="font-bold text-[#2C1E16] mb-2 flex items-center"><MapPin className="w-5 h-5 text-[#8B2500] mr-2" /> 智游藏地美食地图</h3>
          <p className="text-sm text-gray-600 mb-3">点击地图上的标记，探索各地景区与对应特色美食。</p>
          <div className="flex gap-2">
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100">景区</span>
            <span className="text-xs bg-red-50 text-[#8B2500] px-2 py-1 rounded border border-red-100">美食打卡点</span>
          </div>
        </div>
        
        <div className="w-full h-[500px] bg-gray-100 rounded-2xl overflow-hidden relative flex items-center justify-center">
          {/* Simulated Map Background */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
            alt="Map Background" 
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          
          {/* Map Pins */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
            <div className="bg-white p-2 rounded-lg shadow-lg mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
              <p className="font-bold text-sm">布达拉宫</p>
              <p className="text-xs text-gray-500">周边美食：甜茶、藏面</p>
            </div>
            <MapPin className="w-8 h-8 text-[#8B2500] drop-shadow-md animate-bounce" />
          </div>
          
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
            <div className="bg-white p-2 rounded-lg shadow-lg mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
              <p className="font-bold text-sm">日喀则扎什伦布寺</p>
              <p className="text-xs text-gray-500">周边美食：青稞酒、朋必</p>
            </div>
            <MapPin className="w-8 h-8 text-[#8B2500] drop-shadow-md" />
          </div>
        </div>
      </div>

      {/* Destinations List */}
      <h2 className="text-2xl font-serif font-bold text-[#2C1E16] mb-6">热门路线与门票预订</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          {
            name: '拉萨圣城文化之旅',
            spots: '布达拉宫 - 大昭寺 - 八廓街',
            food: '光明港琼甜茶馆、玛吉阿米藏餐',
            price: 299,
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop'
          },
          {
            name: '林芝江南生态之旅',
            spots: '雅鲁藏布大峡谷 - 鲁朗林海 - 巴松措',
            food: '鲁朗石锅鸡、藏香猪烤肉',
            price: 359,
            image: 'https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=2072&auto=format&fit=crop'
          }
        ].map((route, idx) => (
          <div key={idx} className="bg-white rounded-2xl flex flex-col sm:flex-row overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="sm:w-2/5 h-48 sm:h-auto">
              <img src={route.image} alt={route.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:w-3/5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#2C1E16] mb-2">{route.name}</h3>
                <div className="space-y-2 mb-4 text-sm">
                  <p className="flex items-start text-gray-600">
                    <Navigation className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><span className="font-medium text-gray-900">包含景点：</span>{route.spots}</span>
                  </p>
                  <p className="flex items-start text-gray-600">
                    <Utensils className="w-4 h-4 mr-2 text-[#8B2500] mt-0.5 flex-shrink-0" />
                    <span><span className="font-medium text-gray-900">必吃美食：</span>{route.food}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-2xl font-bold text-[#8B2500]">¥{route.price}<span className="text-sm text-gray-500 font-normal">/人起</span></span>
                <button className="bg-[#2C1E16] hover:bg-black text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                  <Ticket className="w-4 h-4 mr-1" /> 预订门票
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
