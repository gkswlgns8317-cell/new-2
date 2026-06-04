import React from 'react';
import { Wifi, Smartphone, CheckCircle, Download } from 'lucide-react';

interface ProductPageProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'hardware', label: 'Hardware', icon: <Wifi size={18} /> },
    { id: 'software', label: 'Software', icon: <Smartphone size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'hardware':
        return (
           <div className="animate-fade-in-up">
              <div className="flex flex-col lg:flex-row gap-12 mb-16">
                  <div className="w-full lg:w-1/2">
                      <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center aspect-square shadow-inner">
                          {/* CSS Generated Device Graphic - Larger */}
                          <div className="relative w-64 h-64 bg-white rounded-[3rem] shadow-2xl flex flex-col items-center justify-center border border-gray-100">
                             <div className="absolute top-8 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-pulse"></div>
                             <Wifi className="w-24 h-24 text-primary opacity-90 mb-4" strokeWidth={1} />
                             <span className="text-sm font-bold text-gray-400 tracking-[0.2em]">HUGNICS</span>
                          </div>
                      </div>
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                      <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">Model: HUG-S100</div>
                      <h2 className="text-4xl font-bold text-secondary mb-6">Hugnics Sensor</h2>
                      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                          어느 공간에나 자연스럽게 녹아드는 미니멀한 디자인. 
                          복잡한 배선 공사 없이 전원만 연결하면 바로 사용 가능합니다.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6">
                          <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                             <div className="text-sm text-gray-400 mb-1">설치 방식</div>
                             <div className="font-bold text-gray-800">천장형 / 벽면형</div>
                          </div>
                          <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                             <div className="text-sm text-gray-400 mb-1">통신 규격</div>
                             <div className="font-bold text-gray-800">Wi-Fi 2.4GHz / LTE</div>
                          </div>
                          <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                             <div className="text-sm text-gray-400 mb-1">전원</div>
                             <div className="font-bold text-gray-800">USB-C Type (5V)</div>
                          </div>
                          <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                             <div className="text-sm text-gray-400 mb-1">방수 등급</div>
                             <div className="font-bold text-gray-800">IPX4 생활 방수</div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
        );
      case 'software':
        return (
            <div className="animate-fade-in-up">
               <div className="text-center mb-16 max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold text-secondary mb-6">Hugnics Care Platform</h2>
                  <p className="text-lg text-gray-600">
                     보호자를 위한 모바일 알림 서비스부터 요양 시설 관리자를 위한 통합 관제 대시보드까지.
                     상황에 맞는 최적의 소프트웨어를 제공합니다.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Guardian App */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                     <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 text-yellow-600">
                        <Smartphone size={24} />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-4">For Guardians</h3>
                     <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-gray-600">
                           <CheckCircle size={18} className="text-primary mr-2 mt-1 shrink-0" />
                           <span>카카오톡 알림톡으로 긴급 상황 즉시 수신</span>
                        </li>
                        <li className="flex items-start text-gray-600">
                           <CheckCircle size={18} className="text-primary mr-2 mt-1 shrink-0" />
                           <span>별도 앱 설치 없이 웹 리포트 확인 가능</span>
                        </li>
                        <li className="flex items-start text-gray-600">
                           <CheckCircle size={18} className="text-primary mr-2 mt-1 shrink-0" />
                           <span>가족 간 돌봄 내역 공유 기능</span>
                        </li>
                     </ul>
                  </div>

                  {/* Manager Dashboard */}
                  <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-sm text-white">
                     <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-6 text-gray-300">
                        <Download size={24} />
                     </div>
                     <h3 className="text-2xl font-bold mb-4">For Managers (B2B)</h3>
                     <ul className="space-y-3 mb-8">
                        <li className="flex items-start text-gray-400">
                           <CheckCircle size={18} className="text-primary mr-2 mt-1 shrink-0" />
                           <span>다수의 센서를 한눈에 보는 통합 관제 대시보드</span>
                        </li>
                        <li className="flex items-start text-gray-400">
                           <CheckCircle size={18} className="text-primary mr-2 mt-1 shrink-0" />
                           <span>병실/호실별 상태 실시간 모니터링</span>
                        </li>
                        <li className="flex items-start text-gray-400">
                           <CheckCircle size={18} className="text-primary mr-2 mt-1 shrink-0" />
                           <span>데이터 엑셀 다운로드 및 API 연동 지원</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12">
           <span className="text-primary font-bold tracking-wider text-sm uppercase">Products</span>
           <h1 className="text-4xl font-bold text-gray-900 mt-2">Simple yet Powerful.</h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-12 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-8 py-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {renderContent()}

      </div>
    </div>
  );
};

export default ProductPage;