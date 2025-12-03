import React from 'react';
import { Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-8 border-t-4 border-xiangqi-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Organizer */}
          <div>
            <h3 className="text-xl font-serif font-bold text-xiangqi-gold mb-6 relative inline-block">
              活動主辦單位
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-xiangqi-gold transform translate-y-2"></span>
            </h3>
            <div className="space-y-3">
              <p className="text-gray-200 font-medium text-lg">社團法人桃園市象棋發展協會</p>
              <p className="text-gray-400">指導機關：桃園市政府</p>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-xl font-serif font-bold text-xiangqi-gold mb-6 relative inline-block">
              聯絡資訊
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-xiangqi-gold transform translate-y-2"></span>
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="text-gray-500 text-sm uppercase tracking-wider">總幹事</span>
                <span className="text-white font-medium">黃宏仁 0911 608 845</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gray-500 text-sm uppercase tracking-wider min-w-[3rem]">市話</span>
                <span>03-3700-456</span>
              </p>
            </div>
          </div>

          {/* Column 3: Social / Links */}
          <div>
            <h3 className="text-xl font-serif font-bold text-xiangqi-gold mb-6 relative inline-block">
              社群關注
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-xiangqi-gold transform translate-y-2"></span>
            </h3>
            <a 
              href="https://www.facebook.com/TYXQ.2019/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-blue-900/30 hover:bg-blue-800 p-4 rounded-lg border border-blue-800/50 hover:border-blue-500 transition-all duration-300"
            >
              <div className="bg-blue-600 text-white p-2 rounded-full group-hover:scale-110 transition-transform">
                <Facebook size={24} />
              </div>
              <div>
                <p className="font-bold text-white group-hover:text-blue-200 transition-colors">桃展粉絲專頁</p>
                <p className="text-xs text-blue-300">追蹤最新賽事動態</p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-gray-500 text-sm">
          <p>&copy; 2026 大桃園盃全國象棋團體錦標賽. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;