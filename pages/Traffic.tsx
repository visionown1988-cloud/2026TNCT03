import React from 'react';
import { MapPin, Train, Bus, Car } from 'lucide-react';

const TrafficCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-xiangqi-red hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-red-100 text-xiangqi-red rounded-full">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="text-gray-600 leading-relaxed pl-2 md:pl-16 space-y-3">
      {children}
    </div>
  </div>
);

const Traffic: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">交通資訊</h1>
        <p className="text-gray-500">輕鬆抵達比賽會場，準時參賽</p>
      </div>

      <div className="mb-12 bg-neutral-900 text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div>
           <h2 className="text-2xl font-bold text-xiangqi-gold mb-2">比賽場地：桃園鉑宴會館</h2>
           <p className="flex items-center gap-2 text-gray-300">
             <MapPin size={18} /> 
             桃園市桃園區德華街128號
           </p>
        </div>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=桃園鉑宴會館" 
          target="_blank" 
          rel="noreferrer"
          className="bg-xiangqi-gold text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-yellow-500/50"
        >
          開啟 Google 導航
        </a>
      </div>

      <div className="space-y-8">
        
        {/* Public Transport */}
        <TrafficCard icon={<Bus size={32} />} title="大眾運輸">
           <div className="space-y-4">
             <div>
                <span className="font-bold text-black block mb-1">【公車】</span>
                <p>建議搭乘市區公車至「龍安街口」或「國強一街口」附近站牌下車，步行約 5-10 分鐘即可抵達。</p>
             </div>
           </div>
        </TrafficCard>

        {/* HSR / Train */}
        <TrafficCard icon={<Train size={32} />} title="高鐵 / 火車轉乘">
            <div className="space-y-4">
             <div>
                <span className="font-bold text-black block mb-1">【台鐵桃園站】</span>
                <p>出站後轉乘計程車（約 15 分鐘車程）或轉乘市區公車。</p>
             </div>
              <div>
                <span className="font-bold text-black block mb-1">【高鐵桃園站】</span>
                <p>建議轉乘計程車或公車至桃園市區再轉乘。</p>
             </div>
           </div>
        </TrafficCard>

        {/* Driving */}
        <TrafficCard icon={<Car size={32} />} title="自行開車 & 停車資訊">
           <div className="space-y-4">
             <div>
                <span className="font-bold text-black block mb-1">【國道二號】</span>
                <p>下「南桃園交流道」→ 往桃園方向行駛 → 經文中路 → 轉德華街即可抵達。</p>
             </div>
             <div className="bg-gray-100 p-4 rounded mt-2">
                <p className="font-bold text-red-800 mb-1">停車資訊：</p>
                <ul className="list-disc pl-5 text-sm">
                    <li>鉑宴會館附設停車場</li>
                    <li>周邊收費停車場</li>
                </ul>
             </div>
           </div>
        </TrafficCard>

      </div>
    </div>
  );
};

export default Traffic;