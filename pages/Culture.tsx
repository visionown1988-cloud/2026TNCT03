import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Building, Landmark, Droplets, Mountain } from 'lucide-react';

interface Attraction {
  id: number;
  name: string;
  category: string;
  description: string;
  details: string;
  image: string;
  icon: React.ReactNode;
}

const attractions: Attraction[] = [
  {
    id: 1,
    name: "桃園市立圖書館新總館",
    category: "特色建築",
    description: "全台最美圖書館，以「生命樹」為設計概念，結合環保與美學的綠建築。",
    details: "位於桃園藝文特區，建築外觀有如金屬與木質交織的螺旋，內部設有通風採光井（生命樹）。不僅是圖書館，更是結合電影院與餐飲的複合式文化地標。",
    image: "https://www.dropbox.com/scl/fi/s7e4is2aoowsym0w16kzj/.webp?rlkey=p9zs0w3k16ensfuapuyipz7gs&dl=0&raw=1", 
    icon: <Building size={16} />
  },
  {
    id: 2,
    name: "橫山書法藝術館",
    category: "博物館",
    description: "全臺首座由官方經營之書藝主題館，建築本身如五方篆印散落於硯池之上。",
    details: "位於青埔地區，建築設計榮獲多項大獎。以公園基地為「硯台」、陂塘為「墨池」、建築主體為「以石為印」，展現東方美學與現代建築的完美對話。",
    image: "https://www.dropbox.com/scl/fi/t853genewkwwm4f5un3hy/.jpg?rlkey=p3hwcbr1aoxlqcmucbdriqjto&dl=0&raw=1", 
    icon: <Landmark size={16} />
  },
  {
    id: 11,
    name: "桃園景福宮",
    category: "歷史古蹟",
    description: "桃園市區的信仰中心，俗稱「大廟」，見證了桃園的發展歷史。",
    details: "列為市定古蹟，主祀開漳聖王。建築融合了傳統閩南式與廣東式風格，擁有精緻的木雕、石雕與交趾陶。廟前的商圈更是桃園早期的經濟中心。",
    image: "https://www.dropbox.com/scl/fi/fz8tw05efccgusqhoemfg/.jpg?rlkey=galy6iop1g3l08p5811r6chao&dl=0&raw=1", 
    icon: <Landmark size={16} />
  },
  {
    id: 12,
    name: "南崁五福宮",
    category: "歷史古蹟",
    description: "全臺歷史最悠久的武財神廟，也是桃園最早的市定古蹟。",
    details: "主祀玄壇元帥（武財神），廟內保留了許多珍貴的文物，如道光年間的石爐。著名的「鎮廟之寶」天爐，據說摸了能帶來財氣，吸引眾多信徒參拜。",
    image: "https://www.dropbox.com/scl/fi/uaxbwi06xcooztlmgzgc5/.jpg?rlkey=rayh14vqtuosiwgntlbbitq6u&dl=0&raw=1",
    icon: <Landmark size={16} />
  },
  {
    id: 3,
    name: "大溪老街",
    category: "歷史古蹟",
    description: "巴洛克式建築與傳統豆干美食的完美結合，感受老街風華。",
    details: "大溪老街主要範圍涵蓋和平路、中山路、中央路三條歷史街屋，是由店面形成的商街，建築外觀與牌樓立面也保留得相當完整。漫步在此，可以欣賞精細的石雕與木雕。",
    image: "https://www.dropbox.com/scl/fi/wd9r5pg7kxew3z0ulqivk/.jpg?rlkey=nromxo0mx0enwz51uyxjg5iin&dl=0&raw=1", 
    icon: <MapPin size={16} />
  },
  {
    id: 4,
    name: "桃園神社 (昭和拾參)",
    category: "歷史古蹟",
    description: "台灣保存最完整的日治時代神社建築，現為忠烈祠暨神社文化園區。",
    details: "以「昭和拾參」為名活化經營，保留了完整的鳥居、手水舍與本殿。園區內氣氛寧靜，常舉辦市集與文化活動，是體驗日式風情與歷史建築的最佳去處。",
    image: "https://www.dropbox.com/scl/fi/z9gtpdulbnlm1rjuo21z6/.jpg?rlkey=15tr79jgzky154ce6wo8vl759&dl=0&raw=1", 
    icon: <Landmark size={16} />
  },
  {
    id: 5,
    name: "李騰芳古宅",
    category: "國定古蹟",
    description: "桃園市唯一的國定古蹟，典型詔安客家建築，見證大家族的榮耀。",
    details: "位於大溪月眉，精緻的木雕、剪黏與繪畫展現了當時工藝的高超。古宅保存完整，格局嚴謹，是研究台灣傳統民居與客家建築的重要資產。",
    image: "https://www.dropbox.com/scl/fi/m6bt0l3vwtgdmcyyy6ggi/.jpg?rlkey=yf08k1aempygwjebow6qo7sat&dl=0&raw=1", 
    icon: <Landmark size={16} />
  },
  {
    id: 6,
    name: "桃園展演中心",
    category: "現代藝文",
    description: "桃園市的藝文地標，其流線型的現代建築外觀極具特色。",
    details: "位於桃園中正藝文特區，是舉辦各種大型展覽、表演活動的核心場地。其外觀以「由下而上、盤旋而起」的生命螺旋為設計概念。",
    image: "https://www.dropbox.com/scl/fi/5wowuaa90k5jxy7qmr56d/.jpg?rlkey=88gs6q7itdmc7fdoy8136abt5&dl=0&raw=1", 
    icon: <Building size={16} />
  },
  {
    id: 7,
    name: "青埔 Xpark",
    category: "觀光景點",
    description: "日本八景島海島樂園海外首館，都會型水生公園。",
    details: "位於桃園高鐵站旁，結合數位科技與海洋生物展示。知名的「癒見水母」區與企鵝咖啡館是必訪亮點，適合親子同遊與拍照打卡。",
    image: "https://www.dropbox.com/scl/fi/e9lbieo88dn2u2bkqdznz/Xpark.jpg?rlkey=ncr0vn27p3yx40rsv3c54hrz4&dl=0&raw=1",
    icon: <Droplets size={16} />
  },
  {
    id: 8,
    name: "石門水庫",
    category: "自然風景",
    description: "北台灣重要水庫，四季皆有不同風情，賞楓、吃活魚的好去處。",
    details: "除了壯觀的洩洪景觀，周邊還有完善的環湖步道與自行車道。秋季的楓紅與當地的活魚多吃料理，是石門水庫最吸引人的特色。",
    image: "https://www.dropbox.com/scl/fi/u1eu4tjlxpo8prvo5c88r/.jpg?rlkey=i8skw2pz1tvbfaw39zbho59l9&dl=0&raw=1",
    icon: <Droplets size={16} />
  },
  {
    id: 9,
    name: "蘆竹五酒桶山",
    category: "自然風景",
    description: "輕鬆好走的親山步道，登高可遠眺桃園機場飛機起降。",
    details: "步道平緩完善，適合全家大小健行。山頂視野開闊，可以欣賞到壯觀的桃園夜景與飛機起降的畫面，是桃園人熱門的休閒後花園。",
    image: "https://www.dropbox.com/scl/fi/r4nslg2mf8aqopsr2rfa0/.jpg?rlkey=xfm2glrixmbigb2b54imzab33&dl=0&raw=1",
    icon: <Mountain size={16} />
  },
  {
    id: 10,
    name: "虎頭山環保公園",
    category: "自然風景",
    description: "擁有無敵夜景的環保公園，是俯瞰桃園市區的最佳地點。",
    details: "原為垃圾掩埋場，經復育後搖身一變成為綠地公園。園區內設有景觀涼亭與大草坪，視野遼闊，白天可見飛機起降，夜晚則是桃園最熱門的賞夜景勝地，著名的裝置藝術「桃機一號」也坐落於此。",
    image: "https://www.dropbox.com/scl/fi/7zqj3cgwzph9589mkr08b/.jpg?rlkey=2t4ib7rb1nr4j2khjkzcrha0r&dl=0&raw=1",
    icon: <Mountain size={16} />
  }
];

const AttractionCard: React.FC<{ data: Attraction }> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-xiangqi-gold flex flex-col">
      <div className="relative h-48 overflow-hidden group">
        <img src={data.image} alt={data.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
        <span className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1">
          {data.icon}
          {data.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-xiangqi-red mb-2 flex items-center gap-2">
           {data.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{data.description}</p>
        
        <div className="mt-auto">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center text-sm font-medium text-xiangqi-gold hover:text-yellow-600 transition-colors"
          >
            {expanded ? '收起詳細資訊' : '查看更多介紹'}
            {expanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
          </button>

          {expanded && (
            <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg leading-relaxed animate-fade-in">
              {data.details}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Culture: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">藝文資訊</h1>
        <p className="text-gray-500">探索桃園的博物館、特色建築、古蹟與自然景觀</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map(attraction => (
          <AttractionCard key={attraction.id} data={attraction} />
        ))}
      </div>
    </div>
  );
};

export default Culture;