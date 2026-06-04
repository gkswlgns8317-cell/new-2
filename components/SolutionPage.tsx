import React from 'react';
import { Radio, Cpu, Activity } from 'lucide-react';
import { IMAGES } from '../utils/images';

interface SolutionPageProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const SolutionPage: React.FC<SolutionPageProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'radar', label: 'mmWave Radar', icon: <Radio size={18} /> },
    { id: 'ai', label: 'On-Device AI', icon: <Cpu size={18} /> },
    { id: 'data', label: 'Data Insight', icon: <Activity size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'radar':
        return (
           <div className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">mmWave Radar Tech</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                   허그닉스의 핵심 기술은 60GHz 대역의 mmWave(밀리미터파) 레이더입니다.
                   빛이 아닌 전파를 사용하기 때문에 <strong>완전한 어둠</strong> 속에서도 동작하며,
                   습기가 많은 욕실이나 연기가 자욱한 화재 상황에서도 정확하게 사람을 감지합니다.
                </p>
                <ul className="space-y-4 mb-8">
                   <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="font-medium text-gray-800">프라이버시 100% 보호 (카메라 없음)</span>
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="font-medium text-gray-800">호흡, 심박 등 미세 생체 신호 감지</span>
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="font-medium text-gray-800">최대 10m 감지 거리 / 120도 광시야각</span>
                   </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-80 flex items-center justify-center relative">
                  {/* Abstract Radar Visualization */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
                  <div className="absolute w-64 h-64 border border-primary/30 rounded-full animate-ping"></div>
                  <div className="absolute w-48 h-48 border border-primary/50 rounded-full animate-ping delay-100"></div>
                  <div className="absolute w-32 h-32 border border-primary/70 rounded-full animate-ping delay-200"></div>
                  <Radio size={64} className="text-white relative z-10" />
              </div>
           </div>
        );
      case 'ai':
        return (
            <div className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-80 flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-white"></div>
                   <div className="grid grid-cols-4 gap-2 opacity-20">
                      {[...Array(16)].map((_, i) => (
                          <div key={i} className="w-12 h-12 bg-primary rounded"></div>
                      ))}
                   </div>
                   <Cpu size={80} className="text-secondary relative z-10" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-secondary mb-6">Edge AI Computing</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                   클라우드로 민감한 센서 데이터를 전송하지 않습니다.
                   허그닉스 센서 내부의 고성능 MCU에서 <strong>딥러닝 알고리즘이 직접 동작</strong>하여
                   낙상, 실신 등의 위급 상황을 즉시 판단합니다.
                </p>
                <div className="bg-orange-50 border-l-4 border-primary p-6 rounded-r-lg">
                   <p className="text-primary font-bold mb-2">Why Edge AI?</p>
                   <p className="text-sm text-gray-700">
                      데이터가 외부로 유출될 걱정이 없으며, 인터넷 연결이 불안정한 환경에서도
                      기본적인 감지 기능이 작동하여 안전을 보장합니다.
                   </p>
                </div>
              </div>
           </div>
        );
      case 'data':
        return (
            <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-secondary mb-6">Data Insight & Analytics</h2>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl">
                   단순한 사고 감지를 넘어, 장기적인 행동 패턴을 분석합니다.
                   수면 시간, 화장실 이용 빈도, 체류 시간 등의 데이터를 통해 건강 이상 징후를 조기에 발견합니다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-primary transition-colors">
                        <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                           <Activity className="text-blue-600" size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">활동량 분석</h3>
                        <p className="text-sm text-gray-500">일간/주간 활동량을 측정하여 무기력증이나 건강 악화를 감지합니다.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-primary transition-colors">
                        <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                           <Activity className="text-green-600" size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">수면 패턴</h3>
                        <p className="text-sm text-gray-500">수면 중 뒤척임과 호흡수를 분석하여 수면의 질을 리포팅합니다.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-primary transition-colors">
                        <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                           <Activity className="text-red-600" size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">이상 징후</h3>
                        <p className="text-sm text-gray-500">화장실 체류 시간이 평소보다 급격히 길어지면 즉시 알림을 보냅니다.</p>
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
           <span className="text-primary font-bold tracking-wider text-sm uppercase">Solution</span>
           <h1 className="text-4xl font-bold text-gray-900 mt-2">Invisible Technology.</h1>
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

export default SolutionPage;