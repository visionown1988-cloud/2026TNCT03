import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ScrollText, Landmark, MapPin, Car } from 'lucide-react';

interface QuickAccessProps {
  to: string;
  label: string;
  enLabel: string;
  icon: React.ReactNode;
  colorClass: string;
}

const QuickAccessCard: React.FC<QuickAccessProps> = ({ to, label, enLabel, icon, colorClass }) => (
  <Link 
    to={to} 
    className="group flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-black/5 border border-gray-50 transition-all duration-500 transform hover:-translate-y-2"
  >
    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${colorClass}`}>
      <div className="text-white drop-shadow-md">
        {icon}
      </div>
    </div>
    
    <div className="text-center">
      <h3 className="text-xl font-bold text-gray-800 font-serif tracking-wider mb-1 group-hover:text-xiangqi-red transition-colors">
        {label}
      </h3>
      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
        {enLabel}
      </p>
    </div>

    <div className="w-8 h-1 bg-gray-100 rounded-full group-hover:w-16 group-hover:bg-xiangqi-gold transition-all duration-300"></div>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 bg-neutral-50">
      <Hero />
      
      {/* Intro Text */}
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-red-50 text-xiangqi-red rounded-full text-sm font-bold tracking-wider">
          2026 TAOYUAN CUP
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 leading-normal">
          傳承千年智慧<br />
          <span className="text-xiangqi-gold">對弈桃園古城</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-loose font-light">
          歡迎來到2026大桃園盃全國象棋團體錦標賽官方網站。
          <br className="hidden md:block" />
          在桃園這座融合傳統與現代的城市，讓我們以棋會友，共譜精彩賽局。
        </p>
      </div>

      {/* Quick Access Section */}
      <div className="relative z-10 -mt-8 mb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            <QuickAccessCard 
              to="/rules" 
              label="比賽辦法"
              enLabel="Rules"
              colorClass="bg-gradient-to-br from-red-700 to-red-900"
              icon={<ScrollText size={36} />}
            />

            <QuickAccessCard 
              to="/culture" 
              label="藝文資訊"
              enLabel="Culture"
              colorClass="bg-gradient-to-br from-neutral-700 to-neutral-900"
              icon={<Landmark size={36} />}
            />

            <QuickAccessCard 
              to="/food" 
              label="美食攻略"
              enLabel="Food Guide"
              colorClass="bg-gradient-to-br from-orange-500 to-orange-700"
              icon={<MapPin size={36} />}
            />

            <QuickAccessCard 
              to="/traffic" 
              label="交通資訊"
              enLabel="Traffic"
              colorClass="bg-gradient-to-br from-slate-600 to-slate-800"
              icon={<Car size={36} />}
            />

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;