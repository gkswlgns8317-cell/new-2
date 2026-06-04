import React from 'react';
import { Users, Target, Briefcase } from 'lucide-react';

interface CompanyPageProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const CompanyPage: React.FC<CompanyPageProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'team', label: 'Team', icon: <Users size={18} /> },
    { id: 'vision', label: 'Vision', icon: <Target size={18} /> },
    { id: 'careers', label: 'Careers', icon: <Briefcase size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'team':
        return (
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-secondary mb-6">Team Introduction</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl">
              허그닉스는 레이더 하드웨어 전문가, 임베디드 AI 엔지니어, 헬스케어 데이터 분석가가 모인 팀입니다.
              기술로 더 안전한 세상을 만들기 위해 각 분야의 전문가들이 모였습니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* CEO */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                 <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary mb-4 shadow-inner">JH</div>
                 <div>
                    <div className="font-bold text-xl text-gray-900">CEO 한지훈</div>
                    <div className="text-primary font-medium mb-4">반도체 전공 / 임베디드 전문가</div>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      반도체 설계 및 임베디드 시스템 분야의 깊은 전문성을 바탕으로, 허그닉스의 고성능 레이더 하드웨어 아키텍처를 총괄합니다.
                    </p>
                 </div>
              </div>
              
              {/* CTO */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                 <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mb-4 shadow-inner">SH</div>
                 <div>
                    <div className="font-bold text-xl text-gray-900">CTO 박성호</div>
                    <div className="text-blue-600 font-medium mb-4">AI 알고리즘 및 AI 수학 전문가</div>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      고급 수학적 모델링을 기반으로 레이더 신호를 정밀 분석하는 독자적인 딥러닝 알고리즘을 개발하며 기술 혁신을 주도합니다.
                    </p>
                 </div>
              </div>

              {/* CISO */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                 <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 mb-4 shadow-inner">KB</div>
                 <div>
                    <div className="font-bold text-xl text-gray-900">CISO 정기보</div>
                    <div className="text-gray-600 font-medium mb-4">헬스케어 개인정보보호 전문가</div>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      헬스케어 데이터 보안 및 컴플라이언스 전문가로서, 사용자들의 민감한 생체 정보를 철저하게 보호하고 관리합니다.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        );
      case 'vision':
        return (
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-secondary mb-6">Our Vision</h2>
            
            <div className="bg-gray-900 text-white p-12 rounded-3xl relative overflow-hidden mb-12">
               <div className="absolute top-0 right-0 opacity-10">
                  <Target size={300} />
               </div>
               <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    "Invisible Safety,<br/> Warm Care"
                  </h3>
                  <p className="text-xl text-gray-300 max-w-2xl font-light">
                    우리는 기술이 드러나지 않을 때 가장 인간적이라고 믿습니다.<br/>
                    감시가 아닌 보살핌을, 구속이 아닌 자유를 제공하는 것이 우리의 비전입니다.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-lg text-primary mb-2">Respect Privacy</h4>
                  <p className="text-gray-600">카메라 없는 센싱으로 개인의 사생활을 존중하고 보호합니다.</p>
               </div>
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-lg text-secondary mb-2">Preventive Care</h4>
                  <p className="text-gray-600">사고 발생 후 조치가 아닌, 데이터 기반의 예방적 건강 관리를 지향합니다.</p>
               </div>
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-lg text-secondary mb-2">Accessibility</h4>
                  <p className="text-gray-600">누구나 누릴 수 있는 합리적인 비용의 안전 시스템을 만듭니다.</p>
               </div>
            </div>
          </div>
        );
      case 'careers':
        return (
           <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-secondary mb-6">Careers</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              허그닉스와 함께 에이징 테크(Aging Tech) 시장을 혁신할 인재를 찾습니다.
              우리는 자율과 책임을 중시하며, 최고의 동료들과 함께 성장합니다.
            </p>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors bg-white hover:shadow-md cursor-pointer group">
                <div className="flex justify-between items-start">
                   <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">Tiny AI 개발자</h3>
                      <p className="text-gray-500 mt-1">R&D Center · 서울</p>
                   </div>
                   <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">채용중</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600">
                   <p>• 레이더 센서용 경량화 AI 모델 개발 및 최적화 (TensorFlow Lite for Microcontrollers)</p>
                   <p>• 실시간 신호 처리 및 임베디드 환경(C/C++) 배포</p>
                </div>
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
           <span className="text-primary font-bold tracking-wider text-sm uppercase">Company</span>
           <h1 className="text-4xl font-bold text-gray-900 mt-2">We are Hugnics.</h1>
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

export default CompanyPage;