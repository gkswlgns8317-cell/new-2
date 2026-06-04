import React, { useEffect } from 'react';
import { X, Users, Target, Briefcase, Radio, Cpu, Activity, Smartphone, Wifi } from 'lucide-react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: 'company' | 'product' | 'solution' | null;
  tab: string | null;
}

const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, category, tab }) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !category || !tab) return null;

  // Content Data
  const getContent = () => {
    switch (category) {
      case 'company':
        switch (tab) {
          case 'team':
            return {
              title: 'Team Introduction',
              subtitle: '세상을 바꾸는 사람들',
              icon: <Users className="w-12 h-12 text-primary" />,
              body: (
                <div className="space-y-4 text-gray-600">
                  <p>허그닉스는 레이더 하드웨어 전문가, 임베디드 AI 엔지니어, 헬스케어 데이터 보안 전문가가 모인 팀입니다.</p>
                  <div className="grid grid-cols-1 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-lg text-gray-800">CEO 한지훈</div>
                        <div className="text-sm text-gray-500">반도체 전공 / 임베디드 전문가</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-lg text-gray-800">CTO 박성호</div>
                        <div className="text-sm text-gray-500">AI 알고리즘 개발 및 AI 수학 전문가</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-lg text-gray-800">CISO 정기보</div>
                        <div className="text-sm text-gray-500">헬스케어 개인정보보호 전문가</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            };
          case 'vision':
            return {
              title: 'Our Vision',
              subtitle: '존엄한 노후를 위한 기술',
              icon: <Target className="w-12 h-12 text-primary" />,
              body: (
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg font-medium text-gray-800">"Invisible Safety, Warm Care"</p>
                  <p>우리는 기술이 드러나지 않을 때 가장 인간적이라고 믿습니다. 감시가 아닌 보살핌을, 구속이 아닌 자유를 제공하는 것이 우리의 비전입니다.</p>
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li>프라이버시 침해 없는 안전 모니터링</li>
                    <li>데이터 기반의 예방적 건강 관리</li>
                    <li>모두가 접근 가능한 합리적인 비용</li>
                  </ul>
                </div>
              )
            };
          case 'careers':
            return {
              title: 'Careers',
              subtitle: '함께 성장할 동료를 찾습니다',
              icon: <Briefcase className="w-12 h-12 text-primary" />,
              body: (
                <div className="space-y-4 text-gray-600">
                  <p>허그닉스와 함께 에이징 테크(Aging Tech) 시장을 혁신할 인재를 모십니다.</p>
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                      <span className="font-bold">임베디드 SW 개발자</span>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600">채용중</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                      <span className="font-bold">백엔드 엔지니어 (Python)</span>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600">채용중</span>
                    </div>
                  </div>
                </div>
              )
            };
          default: return null;
        }
      case 'solution':
        switch(tab) {
          case 'radar':
             return {
              title: 'mmWave Radar',
              subtitle: '초정밀 레이더 센싱',
              icon: <Radio className="w-12 h-12 text-primary" />,
              body: (
                <div className="space-y-4 text-gray-600">
                   <p>60GHz 대역의 mmWave 레이더를 사용하여 호흡, 심박 등 미세한 움직임까지 감지합니다. 연기나 수증기가 가득한 환경에서도 정확하게 동작합니다.</p>
                   <div className="bg-orange-50 p-4 rounded-lg mt-4">
                     <p className="font-bold text-primary">Key Specs</p>
                     <p className="text-sm mt-1">Distance: up to 10m / FOV: 120° x 120°</p>
                   </div>
                </div>
              )
             };
          case 'ai':
             return {
              title: 'Edge AI',
              subtitle: '온디바이스 인공지능',
              icon: <Cpu className="w-12 h-12 text-primary" />,
              body: (
                <div className="space-y-4 text-gray-600">
                   <p>클라우드로 데이터를 전송하지 않고, 센서 내 MCU에서 직접 AI 추론을 수행합니다. 이를 통해 네트워크 비용을 절감하고 보안성을 극대화했습니다.</p>
                </div>
              )
             };
          case 'data':
             return {
              title: 'Data Insight',
              subtitle: '행동 패턴 분석',
              icon: <Activity className="w-12 h-12 text-primary" />,
              body: (
                <div className="space-y-4 text-gray-600">
                   <p>수면 시간, 화장실 이용 빈도, 활동량 추이를 분석하여 건강 리포트를 제공합니다. 단순 사고 감지를 넘어 예방 의학적 가치를 제공합니다.</p>
                </div>
              )
             };
          default: return null;
        }
      case 'product':
        switch(tab) {
            case 'hardware':
               return {
                title: 'Sensor Module',
                subtitle: 'HUG-S100',
                icon: <Wifi className="w-12 h-12 text-primary" />,
                body: (
                  <div className="space-y-4 text-gray-600">
                     <p>어느 공간에나 자연스럽게 녹아드는 미니멀한 디자인. 천장이나 벽면 상단에 부착하여 사각지대 없이 공간을 케어합니다.</p>
                     <img src="https://picsum.photos/seed/device/600/300" alt="Hardware" className="w-full rounded-lg shadow-sm mt-4 object-cover h-48" />
                  </div>
                )
               };
            case 'software':
               return {
                title: 'Care Platform',
                subtitle: 'Web Dashboard & App',
                icon: <Smartphone className="w-12 h-12 text-primary" />,
                body: (
                  <div className="space-y-4 text-gray-600">
                     <p>시설 관리자를 위한 통합 관제 대시보드와 보호자를 위한 모바일 알림 서비스를 제공합니다. 카카오톡 알림톡으로 긴급 상황을 즉시 수신할 수 있습니다.</p>
                     <img src="https://picsum.photos/seed/app/600/300" alt="Software" className="w-full rounded-lg shadow-sm mt-4 object-cover h-48" />
                  </div>
                )
               };
            default: return null;
        }
      default:
        return null;
    }
  };

  const content = getContent();
  if (!content) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative z-10 animate-fade-in-up">
        {/* Header */}
        <div className="bg-light px-8 py-6 border-b border-gray-100 flex justify-between items-start">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
               {content.icon}
             </div>
             <div>
               <h2 className="text-2xl font-bold text-secondary">{content.title}</h2>
               <p className="text-primary font-medium text-sm mt-0.5">{content.subtitle}</p>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
           {content.body}
        </div>

        {/* Footer Action */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button onClick={onClose} className="px-6 py-2 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-colors">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;