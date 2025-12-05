import React from 'react';
import { CheckCircle, AlertTriangle, Trophy, Clock, MapPin, Users, FileText, Utensils } from 'lucide-react';

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
        <div className="inline-flex gap-4 justify-center mb-6">
            <span className="bg-xiangqi-red text-white px-4 py-1 rounded-full text-lg font-medium">3人團體賽</span>
            <span className="bg-xiangqi-gold text-black px-4 py-1 rounded-full text-lg font-medium">總獎金逾 18 萬</span>
        </div>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            宣揚大桃園市智慧科技化的新現代都會，倡導正當智力活動及提升象棋人文素養。
        </p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-t-4 border-xiangqi-red">
        
        {/* 1. Basic Info */}
        <SectionTitle title="一、賽事資訊" icon={<Users />} />
        <div className="grid md:grid-cols-2 gap-6 text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg border border-gray-100">
          <div className="space-y-4">
             <p><span className="font-bold text-black flex items-center gap-2"><MapPin size={16}/> 指導/補助：</span> 桃園市市政府</p>
             <p><span className="font-bold text-black flex items-center gap-2"><Users size={16}/> 主辦單位：</span> 社團法人桃園市象棋發展協會</p>
             <p><span className="font-bold text-black flex items-center gap-2"><Users size={16}/> 協辦單位：</span> <br/><span className="pl-6 block text-sm">桃園市議會副議長 李曉鐘服務處、桃園市議員 林政賢服務處、桃園市議員 黃家齊服務處</span></p>
          </div>
          <div className="space-y-4">
             <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0"/> 
                <div>
                    <span className="font-bold text-black">比賽地點：</span> 
                    <p>桃園區德華街128號【鉑宴會館】</p>
                    <p className="text-sm text-gray-500 mt-1">開幕/比賽：鉑金廳｜頒獎/晚宴：皇家廳</p>
                </div>
             </div>
             <p><span className="font-bold text-black flex items-center gap-2"><Clock size={16}/> 比賽時間：</span> 115年02月28日（星期六）09:00 - 20:00</p>
             <p><span className="font-bold text-black flex items-center gap-2"><FileText size={16}/> 報名截止：</span> 115年01月31日</p>
          </div>
        </div>

        {/* 2. Schedule */}
        <SectionTitle title="二、當日流程" icon={<Clock />} />
        <div className="overflow-x-auto border rounded-lg shadow-sm">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium bg-gray-800 text-white">
              <tr>
                <th scope="col" className="px-6 py-4 w-1/4">時間</th>
                <th scope="col" className="px-6 py-4 w-1/3">項目</th>
                <th scope="col" className="px-6 py-4">地點 / 內容</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">09:00 ~ 09:45</td>
                <td className="px-6 py-4 font-bold">全體報到</td>
                <td className="px-6 py-4">活動人員報到</td>
              </tr>
              <tr className="border-b bg-yellow-50 hover:bg-yellow-100">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">09:45 ~ 10:30</td>
                <td className="px-6 py-4 font-bold">最佳團體服裝獎 比賽</td>
                <td className="px-6 py-4">現場評選</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">10:30 ~ 11:00</td>
                <td className="px-6 py-4 font-bold">開幕典禮</td>
                <td className="px-6 py-4">長官致詞、宣佈規則、開賽 (鉑金廳)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">11:00 ~ 12:00</td>
                <td className="px-6 py-4 font-bold">第 1 輪比賽</td>
                <td className="px-6 py-4">鉑金廳</td>
              </tr>
              <tr className="border-b bg-gray-100">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">12:00 ~ 13:00</td>
                <td className="px-6 py-4 font-bold">午膳休息</td>
                <td className="px-6 py-4">主辦單位供應便當</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">13:00 ~ 17:30</td>
                <td className="px-6 py-4 font-bold">第 2、3、4、5 輪比賽</td>
                <td className="px-6 py-4">鉑金廳</td>
              </tr>
               <tr className="border-b bg-red-50 hover:bg-red-100">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">17:30 ~ 18:00</td>
                <td className="px-6 py-4 font-bold">頒獎典禮</td>
                <td className="px-6 py-4">鉑金廳</td>
              </tr>
              <tr className="bg-purple-50 hover:bg-purple-100">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-red-800">18:00 ~ 20:00</td>
                <td className="px-6 py-4 font-bold">晚宴聯誼</td>
                <td className="px-6 py-4 font-bold text-purple-900">皇家廳</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3. Qualifications & Rules */}
        <SectionTitle title="三、比賽組別與資格" icon={<Users />} />
        <div className="space-y-6 text-gray-700 leading-loose">
          
          <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-6 rounded-lg border-t-4 border-red-600 shadow-sm">
                <h3 className="font-bold text-2xl text-red-800 mb-2">A 組</h3>
                <p className="text-gray-600 mb-3">高段組競賽</p>
                <div className="bg-white p-3 rounded border border-red-100">
                    <p className="font-bold">賽場上任三人</p>
                    <p className="text-xl font-black text-red-600">總段數最高 20 段</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">若為滿段(20段)者，選手編號須按高低段順序1.2.3號編排。</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-600 shadow-sm">
                <h3 className="font-bold text-2xl text-blue-800 mb-2">B 組</h3>
                <p className="text-gray-600 mb-3">推廣組競賽</p>
                 <div className="bg-white p-3 rounded border border-blue-100">
                    <p className="font-bold">賽場上任三人</p>
                    <p className="text-xl font-black text-blue-600">總段數最高 10 段</p>
                </div>
                 <p className="text-xs text-gray-500 mt-2">若為滿段(10段)者，選手編號須按高低段順序1.2.3號編排。</p>
              </div>
          </div>

          <div className="pl-4 border-l-4 border-gray-200 bg-gray-50 p-4 rounded-r-lg">
             <h4 className="font-bold text-lg mb-2">共同規範：</h4>
             <ul className="list-disc pl-5 space-y-1">
                <li>每隊成員：領隊 1 人 + 選手 3 人 + 候補 1 人 (最多 5 人)。</li>
                <li>每一團隊之選手若換下後不得再上場比賽。</li>
                <li><span className="font-bold text-red-600 bg-yellow-100 px-1">必要條件</span>：團隊選手中必須包含至少 1 名學生或女性選手。(學生=有學生證之在學學生)</li>
                <li>選手需有公信力棋會頒發之 1 段以上證書。</li>
             </ul>
          </div>
        </div>

        {/* 4. Competition Method */}
        <SectionTitle title="四、比賽方式與規則" icon={<CheckCircle />} />
        <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-loose">
            <li><span className="font-bold text-black">分組對弈：</span> A、B 二組分開比賽。兩隊對弈分別 1號對1號、 2號對2號、 3號對3號。</li>
            <li><span className="font-bold text-black">先後手：</span> 團隊先手時，選手 1、3 號執先，2 號執後；反之亦然。</li>
            <li><span className="font-bold text-black">賽制：</span> 採瑞士積分編排制比賽五輪（早上 1 輪，下午 4 輪）。</li>
            <li><span className="font-bold text-black">用時：</span> 每局基本用時 15 分鐘，每走 1 步加 5 秒。</li>
            <li><span className="font-bold text-black">規則：</span> 採中華民國象棋規則 113 年修訂版。</li>
        </ul>

        {/* 5. Rewards */}
        <SectionTitle title="五、獎勵辦法" icon={<Trophy />} />
        
        <div className="space-y-8">
            {/* Group A */}
            <div>
                <h3 className="text-xl font-bold text-white bg-red-800 px-4 py-2 inline-block rounded-t-lg">A 組 獎勵</h3>
                <div className="border-2 border-red-800 rounded-b-lg rounded-tr-lg p-6 bg-red-50">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-center">
                        <div className="bg-white p-3 rounded shadow-sm border border-red-100 relative overflow-hidden">
                            <div className="text-gray-500 text-sm">冠軍</div>
                            <div className="text-2xl font-black text-red-600">50,000</div>
                            <div className="text-xs font-bold text-amber-600 flex items-center justify-center gap-1 mt-1 bg-amber-50 py-1 rounded">
                                <Trophy size={12} className="fill-amber-600" /> 獎盃
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm border border-red-100 relative overflow-hidden">
                            <div className="text-gray-500 text-sm">亞軍</div>
                            <div className="text-2xl font-black text-red-600">24,000</div>
                            <div className="text-xs font-bold text-amber-600 flex items-center justify-center gap-1 mt-1 bg-amber-50 py-1 rounded">
                                <Trophy size={12} className="fill-amber-600" /> 獎盃
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm border border-red-100 relative overflow-hidden">
                            <div className="text-gray-500 text-sm">季軍</div>
                            <div className="text-2xl font-black text-red-600">12,000</div>
                            <div className="text-xs font-bold text-amber-600 flex items-center justify-center gap-1 mt-1 bg-amber-50 py-1 rounded">
                                <Trophy size={12} className="fill-amber-600" /> 獎盃
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm border border-red-100 relative overflow-hidden">
                            <div className="text-gray-500 text-sm">殿軍</div>
                            <div className="text-2xl font-black text-red-600">6,000</div>
                            <div className="text-xs font-bold text-amber-600 flex items-center justify-center gap-1 mt-1 bg-amber-50 py-1 rounded">
                                <Trophy size={12} className="fill-amber-600" /> 獎盃
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-700">
                        第 5~7 名：4,500元｜第 8~10 名：3,000元｜個人全勝：1,000元
                    </p>
                </div>
            </div>

            {/* Group B */}
            <div>
                <h3 className="text-xl font-bold text-white bg-blue-800 px-4 py-2 inline-block rounded-t-lg">B 組 獎勵</h3>
                <div className="border-2 border-blue-800 rounded-b-lg rounded-tr-lg p-6 bg-blue-50">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-center">
                        <div className="bg-white p-3 rounded shadow-sm border border-blue-100 relative overflow-hidden">
                            <div className="text-gray-500 text-sm">冠軍</div>
                            <div className="text-2xl font-black text-blue-600">15,000</div>
                            <div className="text-xs font-bold text-amber-600 flex items-center justify-center gap-1 mt-1 bg-amber-50 py-1 rounded">
                                <Trophy size={12} className="fill-amber-600" /> 獎盃
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm border border-blue-100 relative overflow-hidden">
                            <div className="text-gray-500 text-sm">亞軍</div>
                            <div className="text-2xl font-black text-blue-600">7,500</div>
                            <div className="text-xs font-bold text-amber-600 flex items-center justify-center gap-1 mt-1 bg-amber-50 py-1 rounded">
                                <Trophy size={12} className="fill-amber-600" /> 獎盃
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm border border-blue-100 relative overflow-hidden">
                            <div className="text-gray-500 text-sm">季軍</div>
                            <div className="text-2xl font-black text-blue-600">6,000</div>
                            <div className="text-xs font-bold text-amber-600 flex items-center justify-center gap-1 mt-1 bg-amber-50 py-1 rounded">
                                <Trophy size={12} className="fill-amber-600" /> 獎盃
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm border border-blue-100 relative overflow-hidden">
                            <div className="text-gray-500 text-sm">殿軍</div>
                            <div className="text-2xl font-black text-blue-600">4,500</div>
                            <div className="text-xs font-bold text-amber-600 flex items-center justify-center gap-1 mt-1 bg-amber-50 py-1 rounded">
                                <Trophy size={12} className="fill-amber-600" /> 獎盃
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-700">
                        第 5~7 名：3,000元｜第 8~10 名：1,500元｜個人全勝：500元
                    </p>
                </div>
            </div>

            {/* Special Awards */}
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-lg font-bold text-pink-900 mb-2 flex items-center gap-2">
                    <Trophy size={20} /> 團隊最佳服裝獎 & 參加獎
                </h3>
                <p className="mb-2">聘請公正人士評分 (隊標30%, 隊服30%, 整體40%)，前 5 高分團隊，每隊獎勵 <span className="font-bold text-red-600">3,000 元</span>。</p>
                <p className="text-sm text-gray-500">每一參賽團隊皆贈送精美禮品乙份。</p>
            </div>
        </div>


        {/* 6. Registration */}
        <SectionTitle title="六、報名資訊" icon={<FileText />} />
        <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm space-y-4">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                 <div>
                    <p className="text-xl font-bold text-green-800 mb-1">免報名費</p>
                    <p className="text-sm text-gray-500">金門馬祖、澎湖、花東每隊補助車資 3,000 元</p>
                 </div>
                 <div className="text-right">
                    <p className="font-bold text-gray-700">A、B 二組各限 32 隊</p>
                    <p className="text-sm text-gray-500">額滿為止</p>
                 </div>
             </div>
             <hr className="border-dashed" />
             <div className="grid md:grid-cols-2 gap-4">
                 <div>
                    <p className="font-bold mb-1 text-gray-700">報名方式：</p>
                    <p className="text-gray-600">請於 Line【社群-桃園象棋】群組報名。</p>
                 </div>
                 <div>
                    <p className="font-bold mb-1 text-gray-700">聯絡人：</p>
                    <p className="text-gray-600">黃宏仁 0911-608-845</p>
                 </div>
             </div>
        </div>

        {/* 7. Notices */}
        <SectionTitle title="七、注意事項 (必讀)" icon={<AlertTriangle />} />
        <div className="bg-gray-50 p-6 rounded-lg text-sm text-gray-700 leading-relaxed border border-gray-200">
            <ol className="list-decimal pl-5 space-y-3">
                <li>為提升【象棋界之社會形象】，參賽隊伍之選手必須穿著整齊【代表性之隊服】參賽；且禁止穿[拖鞋、涼鞋與短褲]進場，並嚴禁在比賽現場[喝酒、抽菸、嚼檳榔、飆髒話]。</li>
                
                <li>每一參賽隊伍都必須各自準備一支【代表性之隊標】參賽。</li>
                
                <li>為保持會場秩序，請全員絕對遵守主辦單位規定、裁判判決及服務人員指揮。</li>
                
                <li>
                    計時鐘放在長桌兩頭，[先手]的左邊，[後手]的右邊。摸子走子，並以走子的手輕按鐘，不得大力拍鐘。<br/>
                    <span className="text-red-700">若發現「大力拍鐘」或「走子與按鐘為不同手」之該選手，第一次犯判：警告，再犯則該局判負。</span>
                </li>
                
                <li>選手每輪棋賽前需相互行禮後開始比賽，賽後須將棋子擺回原位，並快速離開選手賽區；如在賽區觀棋逗留，或在賽場內外大聲喧嘩吵鬧，一經[棋證、裁判]查證屬實，當輪團隊成績一律以零分計算，不得異議。</li>
                
                <li>
                    賽前雙方棋手每輪應即時確認：[先後手]、[計時鐘之用時及加秒]、[成績加總分]，是否正確？若不正確，必須立即反應，否則開賽後，視同默認，一律不予更改，任一方都不得異議。<br/>
                    賽後雙方應[簽名確認]自己[勝負得分]，由勝方或任一和方送[對陣單]，若因沒[簽名確認]或[沒寫好勝負得分] 致使單方面成績填錯，因而導致主辦單位成績登錄有誤，事後一律不得要求更改，任一方都不得異議。
                </li>
                
                <li>
                    賽前，選手的所有手機需開啟[飛航模式或靜音模式]，蓋於賽桌上。賽中 <span className="font-bold text-red-600">[觀看螢幕、接聽電話、把玩手機] 一律判負</span>，其他具有類似手機通訊功能之智慧手錶、通訊裝置，均在規範內。<br/>
                    又選手在比賽中，不得無故離開座位，如有需要上廁所，必須告知裁判且不得攜帶手機，<span className="font-bold text-red-600">違者 一律判負。</span>
                </li>
                
                <li className="space-y-1">
                    參賽者必須以正確[棋力段數]報名參賽，若[高段低報]經檢舉查證屬實者：
                    <ul className="list-[upper-alpha] pl-5 space-y-1 text-gray-600">
                        <li>賽前：依參賽選手實際實力更改其[棋力段數]</li>
                        <li>賽中：取消比賽資格</li>
                        <li>賽後：若已獲得獎勵者，取消得獎資格並追回獎金、獎品，參賽者不得異議。</li>
                    </ul>
                </li>
                
                <li className="space-y-1">
                    選手在比賽時遇到 [棋規] 問題時：
                    <ul className="list-[upper-alpha] pl-5 space-y-1 text-gray-600">
                         <li>計時鐘馬上按[暫停]</li>
                         <li>保持棋局成[待判局面]</li>
                         <li>舉手告知裁判，靜待裁判前來判決。</li>
                    </ul>
                </li>
                
                <li>凡讓棋、蓄意媾和或無故未完成賽事者，經查證屬實，取消本次比賽資格，以零分計算，不得異議。</li>
                
                <li>一盤棋犯規 2 次判負，若對手有犯規，需立即提出，若繼續行棋，應視為同意對方的行為，犯規之事不得再提。</li>
                
                <li>因故遲到請先向主辦單位報備，遲到逾 10 分鐘者，直接判負論處。</li>
                
                <li className="flex items-start gap-1">
                    <div className="mt-1"><Utensils size={14} className="text-green-600" /></div>
                    <span>現場免費提供茶水，午餐由主辦單位供應每人便當一個。</span>
                </li>
                
                <li>參賽選手，請攜帶[身份證]，以便核對身份資料領取獎金。</li>
                
                <li>如有未盡事宜，主辦單位得於開賽前或當天修正公佈之。</li>
                <li>相關規範條文及內容，主辦單位保有最終修改、變更及活動解釋之權利。</li>
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