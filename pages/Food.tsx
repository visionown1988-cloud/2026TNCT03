import React from 'react';
import { MapPin, Clock, Utensils } from 'lucide-react';

interface FoodItem {
  name: string;
  description: string;
  address: string;
  hours: string;
  image: string;
  tags: string[];
}

interface FoodCategory {
  title: string;
  items: FoodItem[];
}

// Mock Data
const foodData: FoodCategory[] = [
  {
    title: "在地人氣小吃",
    items: [
      {
        name: "老賊壽司",
        description: "桃園老字號平價壽司，口味多樣創新，是當地人從小吃到大的美味記憶。特別推薦蒲燒鯛魚壽司與蒸蛋。",
        address: "桃園市桃園區中正路328號",
        hours: "06:00 - 20:00 (週一公休)",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop",
        tags: ["壽司", "平價", "排隊名店"]
      },
      {
        name: "佳樂精緻蛋糕專賣店",
        description: "桃園波士頓派的始祖，鮮奶油甜而不膩，蓬鬆蛋糕體入口即化。是比賽結束後帶回家最棒的伴手禮。",
        address: "桃園市桃園區民生路124號",
        hours: "08:00 - 22:00",
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&auto=format&fit=crop",
        tags: ["伴手禮", "甜點", "波士頓派"]
      },
      {
          name: "永川牛肉麵",
          description: "中壢知名的川味牛肉麵，湯頭濃郁香辣，也是24小時營業的宵夜好選擇。",
          address: "桃園市中壢區民權路61號",
          hours: "24小時營業",
          image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800&auto=format&fit=crop",
          tags: ["牛肉麵", "宵夜", "辣味"]
      }
    ]
  },
  {
    title: "中壢夜市必吃",
    items: [
      {
        name: "簡師傅麻辣臭豆腐",
        description: "中壢夜市排隊名店，湯頭濃郁，豆腐滷得相當入味，辣度可依個人喜好調整。",
        address: "桃園市中壢區新明路 (中壢夜市內)",
        hours: "17:30 - 00:30",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop",
        tags: ["夜市", "麻辣", "臭豆腐"]
      },
      {
        name: "溫記豆花",
        description: "傳承多年的古早味豆花，配料豐富，粉圓、花生口感綿密，是夜市解膩的最佳甜品。",
        address: "桃園市中壢區新明路 (中壢夜市內)",
        hours: "18:00 - 00:00",
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800&auto=format&fit=crop",
        tags: ["甜湯", "古早味", "豆花"]
      }
    ]
  },
  {
     title: "大溪老街風味",
     items: [
         {
             name: "老阿伯現滷豆干",
             description: "大溪最知名的現滷豆干，獨門醬汁滷製，香氣四溢。必點招牌黑豆干與溏心蛋。",
             address: "桃園市大溪區中正路37號",
             hours: "08:00 - 19:00",
             image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
             tags: ["老街", "豆干", "排隊美食"]
         },
         {
             name: "賴媽媽豆花",
             description: "大溪在地傳統豆花店，口感滑順，配上Q彈的芋圓與地瓜圓，是逛老街時的休憩首選。",
             address: "桃園市大溪區登龍路22號",
             hours: "09:00 - 18:00",
             image: "https://images.unsplash.com/photo-1574926054530-540288c8e678?q=80&w=800&auto=format&fit=crop",
             tags: ["甜點", "豆花", "老街"]
         }
     ]
  }
];

const FoodCard: React.FC<{ item: FoodItem }> = ({ item }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
    <div className="relative h-56 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute top-3 right-3 flex gap-1 flex-wrap justify-end">
            {item.tags.map(tag => (
                <span key={tag} className="bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full shadow-sm">{tag}</span>
            ))}
        </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{item.description}</p>
        
        <div className="mt-auto space-y-3 pt-4 border-t border-gray-100">
            <div className="flex items-start gap-2 text-sm text-gray-500">
                <MapPin size={16} className="mt-0.5 text-orange-500 shrink-0" />
                <span>{item.address}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock size={16} className="text-orange-500 shrink-0" />
                <span>{item.hours}</span>
            </div>
        </div>
    </div>
  </div>
);

const Food: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Header Section */}
      <div className="bg-orange-900 text-white py-16 px-4 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-wider flex items-center justify-center gap-3">
                 <Utensils className="text-xiangqi-gold" /> 美食攻略
            </h1>
            <p className="text-lg md:text-xl text-orange-100 font-light">
                比賽之餘，絕不能錯過的桃園在地好滋味
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {foodData.map((category, index) => (
            <div key={index}>
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-8 w-1.5 bg-xiangqi-gold rounded-full"></div>
                    <h2 className="text-3xl font-serif font-bold text-gray-800">{category.title}</h2>
                    <div className="h-px flex-grow bg-gray-200 ml-4"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((item, idx) => (
                        <FoodCard key={idx} item={item} />
                    ))}
                </div>
            </div>
        ))}

        {/* Disclaimer */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
                * 以上資訊僅供參考，店家營業時間與價格可能隨時變動，建議前往前再次確認。
            </p>
        </div>

      </div>
    </div>
  );
};

export default Food;