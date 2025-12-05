import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ScrollText } from 'lucide-react';

const Invitation: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-100 py-12 px-4 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]">
      
      {/* Invitation Card Container */}
      <div className="max-w-4xl w-full bg-red-900 rounded-lg shadow-2xl overflow-hidden relative border-8 border-double border-yellow-600">
        
        {/* Decorative Corner Patterns (CSS shapes) */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-yellow-400 rounded-tl-3xl m-4 opacity-50"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-yellow-400 rounded-tr-3xl m-4 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-yellow-400 rounded-bl-3xl m-4 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-yellow-400 rounded-br-3xl m-4 opacity-50"></div>

        <div className="p-8 md:p-16 text-center text-yellow-50 relative z-10">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-serif text-yellow-400 tracking-[0.5em] mb-4 uppercase opacity-80">Invitation</h2>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2 tracking-wider leading-snug drop-shadow-lg">
              誠摯邀請
            </h1>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          {/* Salutation */}
          <div className="mb-10 text-left md:text-center">
            <p className="text-xl md:text-2xl font-serif leading-loose">
              親愛的棋友、先進 鈞鑒：
            </p>
          </div>

          {/* Body Text */}
          <div className="mb-12 space-y-6 font-light text-lg md:text-xl leading-relaxed text-yellow-50/90 max-w-2xl mx-auto text-justify md:text-center">
            <p>
              欣逢大桃園市邁向智慧科技與文化共融的新時代，
              <br className="hidden md:block"/>
              我們將於 2026 年舉辦一場盛大的象棋饗宴。
            </p>
            <p>
              這不僅是一場智力的角逐，更是一次情誼的交流。
              <br className="hidden md:block"/>
              本次賽事總獎金逾 <span className="text-yellow-400 font-bold text-2xl mx-1">180,000</span> 元，
              <br className="hidden md:block"/>
              特設高段組與推廣組，期待全國各路英雄共襄盛舉。
            </p>
            <p>
              誠摯邀請貴團隊撥冗蒞臨，
              <br className="hidden md:block"/>
              於桃園古城以棋會友，共譜精彩篇章。
            </p>
          </div>

          {/* Key Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16 border-t border-b border-yellow-500/30 py-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center text-yellow-400">
                <Calendar size={24} />
              </div>
              <h3 className="font-bold text-lg text-yellow-200">日期</h3>
              <p className="text-white">115年02月28日 (六)</p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center text-yellow-400">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-lg text-yellow-200">地點</h3>
              <p className="text-white">桃園鉑宴會館</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center text-yellow-400">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-lg text-yellow-200">賽制</h3>
              <p className="text-white">3人團體賽 (A/B組)</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mb-16">
            <Link 
              to="/rules" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-red-900 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300"
            >
              <ScrollText size={20} />
              詳閱比賽辦法與報名
            </Link>
          </div>

          {/* Signature / Seal */}
          <div className="flex flex-col items-end mr-4 md:mr-12 opacity-90">
            <div className="text-right font-serif">
              <p className="mb-2 text-yellow-200 text-sm tracking-widest uppercase">主辦單位</p>
              <p className="text-xl md:text-2xl font-bold mb-4">社團法人桃園市象棋發展協會</p>
              <p className="text-lg">理事長 敬邀</p>
            </div>
            {/* Digital Seal Effect */}
            <div className="mt-4 w-24 h-24 border-4 border-red-500 rounded-lg flex items-center justify-center rotate-[-12deg] opacity-80 mix-blend-screen bg-red-800/20">
              <div className="text-red-500 font-serif font-black text-xs grid grid-cols-2 gap-1 p-2 leading-none text-center border border-red-500">
                <span>桃園</span><span>象棋</span>
                <span>發展</span><span>協會</span>
              </div>
            </div>
          </div>

        </div>

        {/* Background Texture Overlay (Subtle Pattern) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>
      
    </div>
  );
};

export default Invitation;