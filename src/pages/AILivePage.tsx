import React, { useState } from 'react';
import { Play, MessageCircle, Heart, Share2, ShoppingCart, Users, X } from 'lucide-react';

export default function AILivePage() {
  const [likes, setLikes] = useState(1245);
  const [messages, setMessages] = useState([
    { user: '旅行者A', text: '这个牦牛肉干看起来好好吃！' },
    { user: '藏文化爱好者', text: '主播能讲讲酥油茶的历史吗？' },
    { user: '背包客', text: '已下单，期待收货！' },
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMsg.trim()) {
      setMessages([...messages, { user: '我', text: inputMsg }]);
      setInputMsg('');
    }
  };

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-serif font-bold text-[#2C1E16] mb-4">AI虚拟主播直播间</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          专属西藏文化的AI虚拟主播“卓玛”，为您24小时不间断讲解产品、科普文化，带您云游藏地。
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-[700px]">
        {/* Video Area */}
        <div className="lg:w-2/3 bg-black rounded-3xl overflow-hidden relative shadow-2xl flex flex-col">
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-start">
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-full p-1 pr-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#DAA520] to-[#8B2500] p-0.5">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" alt="AI Anchor" className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">AI主播 卓玛</h3>
                <p className="text-white/70 text-xs flex items-center"><Users className="w-3 h-3 mr-1" /> 12.5k 观看</p>
              </div>
              <button className="ml-2 bg-[#8B2500] text-white text-xs px-3 py-1 rounded-full font-medium">关注</button>
            </div>
            <button className="bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/60 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Simulated Video Feed */}
          <div className="flex-grow relative">
            <img 
              src="https://images.unsplash.com/photo-1516280440502-61f53f3a1f33?q=80&w=2070&auto=format&fit=crop" 
              alt="Live Stream Background" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Virtual Anchor Overlay (Simulated) */}
            <div className="absolute bottom-0 right-10 w-64 h-96 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
                alt="AI Anchor Cutout" 
                className="w-full h-full object-cover rounded-t-full"
                style={{ maskImage: 'linear-gradient(to top, transparent, black 20%)', WebkitMaskImage: 'linear-gradient(to top, transparent, black 20%)' }}
              />
            </div>
            
            {/* Live Badge */}
            <div className="absolute top-20 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full"></div> LIVE
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-10 flex justify-between items-end">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 max-w-xs border border-white/10">
              <div className="flex gap-3">
                <img src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070&auto=format&fit=crop" alt="Product" className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h4 className="text-white font-bold text-sm line-clamp-1">风干牦牛肉干 500g</h4>
                  <p className="text-[#DAA520] font-bold">¥128.00</p>
                  <button className="mt-1 bg-[#8B2500] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <ShoppingCart className="w-3 h-3" /> 抢购
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <button className="bg-black/40 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/60 transition-colors flex flex-col items-center">
                <Share2 className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setLikes(l => l + 1)}
                className="bg-black/40 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/60 transition-colors flex flex-col items-center relative group"
              >
                <Heart className={`w-6 h-6 ${likes % 2 === 0 ? 'text-red-500 fill-red-500' : ''} transition-colors`} />
                <span className="absolute -top-6 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {likes}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Chat & Products Area */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          {/* Chat Box */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex-grow flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-100 font-bold text-[#2C1E16] flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#8B2500]" /> 互动交流
            </div>
            <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3 bg-gray-50/50">
              <div className="text-center text-xs text-gray-400 my-2">欢迎来到智游藏地直播间，请文明发言</div>
              {messages.map((msg, idx) => (
                <div key={idx} className="text-sm">
                  <span className={`${msg.user === '我' ? 'text-[#8B2500]' : 'text-blue-600'} font-medium`}>{msg.user}: </span>
                  <span className="text-gray-700">{msg.text}</span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="p-3 border-t border-gray-100 bg-white flex gap-2">
              <input 
                type="text" 
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="和主播聊聊天..." 
                className="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B2500]/50"
              />
              <button type="submit" className="bg-[#8B2500] text-white p-2 rounded-full hover:bg-[#6A1C00] transition-colors">
                <Play className="w-5 h-5 ml-0.5" />
              </button>
            </form>
          </div>

          {/* Live Products List */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 h-1/3 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-100 font-bold text-[#2C1E16] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#8B2500]" /> 直播商品
              </div>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">共 12 件</span>
            </div>
            <div className="flex-grow overflow-y-auto p-2">
              {[
                { name: '风干牦牛肉干 500g', price: 128, img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070&auto=format&fit=crop' },
                { name: '尼木藏香礼盒', price: 198, img: 'https://images.unsplash.com/photo-1608506173574-811c137e5554?q=80&w=2070&auto=format&fit=crop' },
                { name: '手工酥油茶体验装', price: 45, img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop' },
              ].map((prod, idx) => (
                <div key={idx} className="flex gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer border-b border-gray-50 last:border-0">
                  <div className="relative">
                    <img src={prod.img} alt={prod.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="absolute top-0 left-0 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-tl-lg rounded-br-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center flex-grow">
                    <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{prod.name}</h4>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[#8B2500] font-bold text-sm">¥{prod.price}</span>
                      <ShoppingCart className="w-4 h-4 text-gray-400 hover:text-[#8B2500]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
