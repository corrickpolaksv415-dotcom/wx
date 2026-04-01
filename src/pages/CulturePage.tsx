import React from 'react';
import { PlayCircle, BookOpen, Clock } from 'lucide-react';

export default function CulturePage() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-serif font-bold text-[#2C1E16] mb-4">文化传播</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          深入了解西藏饮食文化、民俗风情与传统历史，感受这片神圣土地的文化底蕴。
        </p>
      </div>

      {/* Featured Video */}
      <div className="mb-16 relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=2072&auto=format&fit=crop" 
          alt="Tibetan Culture Video" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
          <PlayCircle className="w-20 h-20 mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-center">《寻味藏地：从青稞到酥油的千年传承》</h2>
          <p className="text-lg text-white/90">大型人文纪录片 · 智游藏地独家首发</p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: '藏族饮食文化的历史演变',
            category: '历史溯源',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop',
            desc: '探讨藏族先民如何在极端高寒环境下，创造出独特且营养丰富的饮食体系。'
          },
          {
            title: '酥油茶：高原上的生命之饮',
            category: '美食故事',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop',
            desc: '揭秘酥油茶的制作工艺及其在藏族人民日常生活与宗教仪式中的重要地位。'
          },
          {
            title: '藏历新年的传统美食习俗',
            category: '民俗风情',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
            desc: '从“古突”到“卡塞”，带您了解藏历新年期间丰富多彩的饮食习俗与寓意。'
          }
        ].map((article, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="h-48 overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#8B2500] bg-red-50 px-2 py-1 rounded-md">{article.category}</span>
                <span className="text-xs text-gray-500 flex items-center"><Clock className="w-3 h-3 mr-1" /> {article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-[#2C1E16] mb-3 line-clamp-2 hover:text-[#8B2500] cursor-pointer transition-colors">{article.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">{article.desc}</p>
              <button className="text-[#8B2500] font-medium text-sm flex items-center hover:underline">
                阅读全文 <BookOpen className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
