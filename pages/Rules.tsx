import React from 'react';
import { Download, FileText, CheckCircle, AlertTriangle, Trophy, Clock, MapPin, Users, Info } from 'lucide-react';

const SectionTitle: React.FC<{ title: string; icon?: React.ReactNode }> = ({ title, icon }) => (
  <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-serif font-bold text-xiangqi-red border-b-2 border-xiangqi-gold pb-2 mb-6 mt-12 first:mt-0">
    {icon && <span className="text-xiangqi-gold">{icon}</span>}
    {title}
  </h2>
);

const Rules: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">2026『大桃園盃』<br/>全國象棋團體錦標賽</h1>
        <div className="inline-block bg-xiangqi-red text-white px-4 py-1 rounded-full text-lg font-medium mb-4">
            3人團體賽
        </div>
        <p className="text-gray-500 text-lg">宣揚現代建設與優良傳統文化，倡導智力活動及提升人文素養</p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-t-4 border-xiangqi-red">
        
        {/* 1. Basic Info */}
        <SectionTitle title="一、賽事資訊" icon={<Info />} />
        <div className="grid md:grid-cols-2 gap-6 text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg">
          <div className="space-y-3">
             <p><span className="font-bold text-black flex items-center gap-2"><MapPin size={16}/> 指導機關：</span> 桃園市市政府</p>
             <p><span className="font-bold text-black flex items-center gap-2"><Users size={16}/> 主辦單位：</span> 社團法人桃園市象棋發展協會</p>
             <p><span className="font-bold text-black flex items-center gap-2"><Users size={16}/> 協辦單位：</span> 桃園市議員 林政賢服務處、桃園市蘆竹區山鼻社區發展協會</p>
          </div>
          <div className="space-y-3">
             <p><span className="font-bold text-black flex items-center gap-2"><MapPin size={16}/> 比賽地點：</span> 桃園鉑宴會館</p>
             <p><span className="font-bold text-black flex items-center gap-2"><Clock size={16}/> 比賽時間：</span> 115年3月29日（星期六）08:00 - 18:00</p>
             <p><span className="font-bold text-black flex items-center gap-2"><FileText size={16}/> 報名截止：</span> 114年12月26日</p>
          </div>
        </div>

        {/* 2. Schedule */}
        <SectionTitle title="二、當日流程" icon={<Clock />} />
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium bg-gray-800 text-white">
              <tr>
                <th scope="col" className="px-6 py-4 w-1/4">時間</th>
                <th scope="col" className="px-6 py-4 w-1/3">項目</th>
                <th scope="col" className="px-6 py-4">內容說明</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">08:00 ~ 08:45</td>
                <td className="px-6 py-4 font-bold">全體報到</td>
                <td className="px-6 py-4">活動人員報到</td>
              </tr>
              <tr className="border-b bg-yellow-50 hover:bg-yellow-100">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">08:45 ~ 09:30</td>
                <td className="px-6 py-4 font-bold">最佳團體服裝獎 比賽</td>
                <td className="px-6 py-4">評選隊標、隊服與整體觀感</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">09:30 ~ 10:00</td>
                <td className="px-6 py-4 font-bold">開幕典禮</td>
                <td className="px-6 py-4">長官致詞、裁判長宣佈規則、禮成開賽</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">10:00 ~ 12:00</td>
                <td className="px-6 py-4 font-bold">第 1、2 輪比賽</td>
                <td className="px-6 py-4">上午賽程</td>
              </tr>
              <tr className="border-b bg-gray-100">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">12:00 ~ 13:00</td>
                <td className="px-6 py-4 font-bold">午膳休息</td>
                <td className="px-6 py-4">午餐時間</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">13:00 ~ 16:00</td>
                <td className="px-6 py-4 font-bold">第 3、4、5 輪比賽</td>
                <td className="px-6 py-4">下午賽程</td>
              </tr>
               <tr className="border-b bg-red-50 hover:bg-red-100">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">16:00 ~ </td>
                <td className="px-6 py-4 font-bold">頒獎閉幕</td>
                <td className="px-6 py-4">頒發獎金與獎盃</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3. Qualifications & Rules */}
        <SectionTitle title="三、參賽資格與組別" icon={<Users />} />
        <div className="space-y-6 text-gray-700 leading-loose">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="font-bold text-blue-900 text-lg mb-2">隊伍組成</h3>
            <p>本次比賽為 <span className="font-bold text-red-600">3人團體賽</span>。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>每隊成員：選手 3 人 + (領隊/教練/候補 最多1人)，全隊最多 5 人。</li>
                <li>賽場上任三人 <span className="font-bold bg-yellow-200 px-1">總段數最高為 15 段</span>。</li>
                <li>每一團隊之選手若換下後不得再上場比賽。</li>
                <li><span className="font-bold text-red-600">必要條件：</span>團隊選手中必須包含至少 1 名學生或女性選手。</li>
            </ul>
          </div>

          <div className="pl-2 border-l-2 border-gray-200">
             <p className="mb-2"><span className="font-bold text-black">資格認定：</span> 全國各地有政府頒發【證照】的象棋組織、學校象棋社團選派之代表團隊。</p>
             <p className="mb-2"><span className="font-bold text-black">段位證明：</span> 選手須具備公信力棋會組織頒發之 1 段以上證書。主辦單位有權查驗。</p>
             <p><span className="font-bold text-black">編排規定：</span> 
                總段數 14、15 段者，選手編號須依段位高低按順序 1.2.3 號編排；
                13 段(含)以下者可任意編排。須於報名截止日時排定。
             </p>
          </div>
        </div>

        {/* 4. Competition Method */}
        <SectionTitle title="四、比賽方式與規則" icon={<CheckCircle />} />
        <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-loose">
            <li><span className="font-bold text-black">分區對弈：</span> 依報名編號分三區比賽（A區 1號對1號、B區 2號對2號、C區 3號對3號）。</li>
            <li><span className="font-bold text-black">賽制：</span> 採瑞士積分編排制比賽五輪（早上2輪，下午3輪）。</li>
            <li><span className="font-bold text-black">用時：</span> 每局基本用時 20 分鐘，每走 1 步加 5 秒。</li>
            <li><span className="font-bold text-black">規則：</span> 採中華民國象棋規則 96 年修訂版。</li>
        </ul>

        {/* 5. Rewards */}
        <SectionTitle title="五、獎勵辦法" icon={<Trophy />} />
        
        {/* Team Prizes */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 pl-4 border-l-4 border-xiangqi-gold">1. 團隊棋藝成績獎勵</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-yellow-100 rounded-lg border border-yellow-300 text-center shadow-sm">
                <div className="text-2xl font-serif font-bold text-yellow-800">冠軍</div>
                <div className="text-3xl font-black text-red-600 mt-1">30,000</div>
                <div className="text-xs text-gray-600 mt-1">新台幣/元</div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg border border-gray-300 text-center shadow-sm">
                <div className="text-xl font-serif font-bold text-gray-700">亞軍</div>
                <div className="text-2xl font-black text-red-600 mt-1">15,000</div>
                <div className="text-xs text-gray-600 mt-1">新台幣/元</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 text-center shadow-sm">
                <div className="text-xl font-serif font-bold text-orange-800">季軍</div>
                <div className="text-2xl font-black text-red-600 mt-1">12,000</div>
                <div className="text-xs text-gray-600 mt-1">新台幣/元</div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 text-center shadow-sm">
                <div className="text-lg font-bold text-gray-600">殿軍 (第4名)</div>
                <div className="text-xl font-black text-red-600 mt-1">9,000</div>
                <div className="text-xs text-gray-500 mt-1">新台幣/元</div>
            </div>
        </div>
        
        {/* Other Prizes Table */}
        <div className="overflow-x-auto mb-8">
             <table className="min-w-full text-sm text-left border">
                <thead className="bg-gray-100 font-bold text-gray-700">
                    <tr>
                        <th className="px-4 py-2 border">名次</th>
                        <th className="px-4 py-2 border">獎金 (新台幣)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="px-4 py-2">第 5 名</td>
                        <td className="px-4 py-2 font-bold text-red-600">7,500 元</td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-4 py-2">第 6 名</td>
                        <td className="px-4 py-2 font-bold text-red-600">6,000 元</td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-4 py-2">第 7 ~ 10 名</td>
                        <td className="px-4 py-2 font-bold text-red-600">4,500 元</td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-4 py-2">第 11 ~ 15 名</td>
                        <td className="px-4 py-2 font-bold text-red-600">3,000 元</td>
                    </tr>
                    <tr className="bg-red-50">
                        <td className="px-4 py-2 font-bold text-red-800">個人全勝獎</td>
                        <td className="px-4 py-2 font-bold text-red-600">1,000 元</td>
                    </tr>
                </tbody>
             </table>
        </div>

        {/* Costume Prize */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 pl-4 border-l-4 border-xiangqi-gold">2. 團隊最佳服裝獎</h3>
        <div className="bg-pink-50 p-6 rounded-lg border border-pink-200 mb-8">
             <p className="mb-2 text-pink-900 font-bold">聘請社會公平人士現場評分：</p>
             <div className="flex flex-wrap gap-4 mb-3">
                <span className="bg-white px-3 py-1 rounded shadow-sm text-sm">隊標 30%</span>
                <span className="bg-white px-3 py-1 rounded shadow-sm text-sm">隊服 30%</span>
                <span className="bg-white px-3 py-1 rounded shadow-sm text-sm">整體觀感 40%</span>
             </div>
             <p className="text-red-700 font-bold text-lg">
                累計分數前 5 高之團隊，每隊獎勵新台幣 3,000 元整！
             </p>
        </div>


        {/* 6. Registration */}
        <SectionTitle title="六、報名方式" icon={<FileText />} />
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm space-y-4">
             <p className="text-lg font-bold text-red-800">
                報名費：免報名費！
             </p>
             <p className="text-gray-600">
                (金門馬祖、澎湖、花蓮、台東每隊補助車資三千元整，全國限制最多40隊，額滿為止)
             </p>
             <hr />
             <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                 <div className="flex-1">
                    <p className="font-bold mb-1">報名管道：</p>
                    <p>請於 Line【社群-桃園象棋】群組或【社群-大桃園盃】群組報名。</p>
                 </div>
                 <div className="flex-1">
                    <p className="font-bold mb-1">聯絡人：</p>
                    <p>黃宏仁 0911-608-845</p>
                 </div>
             </div>
        </div>

        {/* 7. Notices */}
        <SectionTitle title="七、注意事項 (必讀)" icon={<AlertTriangle />} />
        <div className="bg-gray-50 p-6 rounded-lg text-sm text-gray-700 leading-relaxed border border-gray-200">
            <ol className="list-decimal pl-5 space-y-2">
                <li>參賽選手必須穿著整齊【代表性之隊服】；<span className="text-red-600 font-bold">禁止穿拖鞋、涼鞋與短褲</span>進場。</li>
                <li>嚴禁在比賽現場喝酒、抽菸、嚼檳榔、飆髒話。</li>
                <li>每一參賽隊伍都必須各自準備一支【代表性之隊標】參賽。</li>
                <li>計時鐘操作：[先手]左邊，[後手]右邊。摸子走子，並以走子的手輕按鐘，不得大力拍鐘。</li>
                <li>每輪棋賽前需相互行禮；賽後將棋子擺回原位，並快速離開選手賽區。賽區觀棋逗留或喧嘩者，當輪團隊成績以零分計算。</li>
                <li>賽前應確認先後手、計時鐘及成績分數；賽後勝方或和局方需送對陣單並簽名確認。未確認導致登錄錯誤不得異議。</li>
                <li><span className="text-red-600 font-bold">手機規範：</span>比賽開始時需關閉手機並置於賽桌上。對弈中手機響起、螢幕亮者、接聽電話一律判負。上廁所不得攜帶手機。</li>
                <li>嚴禁高段低報，違者依規定取消資格、追回獎勵。</li>
                <li>遇棋規問題：按暫停 -> 保持局面 -> 舉手請裁判。</li>
                <li>凡讓棋、蓄意媾和或無故未完成賽事者，取消資格以零分計算。</li>
                <li>遲到逾 10 分鐘者，直接判負。</li>
                <li>現場免費提供礦泉水，<span className="font-bold">午餐自理</span> (註：依最新文案更新為午餐自理，原條文為含午餐請注意)。<br/><span className="text-xs text-gray-500">(備註：根據提供的文案第13點為「午餐自理」，請參賽者留意)</span></li>
                <li>請攜帶【身份證】以便核對身份資料領取獎金。</li>
            </ol>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
            主辦單位保有最終修改、變更及活動解釋之權利。
        </div>

      </div>
    </div>
  );
};

export default Rules;