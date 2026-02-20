import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Activity, 
  Truck, 
  ShieldCheck, 
  ClipboardList, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

const Cases = () => {
  const scenarios = [
    {
      id: 1,
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "시나리오 1 : 성장하는 스타트업/스케일업",
      quote: "\"시리즈 A~B 단계에서 조직이 커지면서 IT 인프라가 필요해졌어요\"",
      problems: [
        "직원이 늘면서 계정/권한 관리가 혼란스러움",
        "클라우드/SaaS만 쓰다가 온프레미스 필요",
        "그룹웨어, ERP, 보안 도구 선택과 연동이 복잡"
      ],
      solutions: {
        design: "규모에 맞는 네트워크/인프라 설계",
        build: "클라우드+온프레미스 하이브리드 구축, 그룹웨어/ERP 도입",
        operate: "계정 생명주기 관리, 자산 추적, 유지보수"
      },
      effect: "성장에 맞춰 확장 가능한 IT 기반 구축. 초기 투자 최소화하면서도 미래 대비 가능한 아키텍처 확보.",
      link: "/services/startup"
    },
    {
      id: 2,
      icon: <Activity className="w-8 h-8 text-green-600" />,
      title: "시나리오 2 : 의료기관/기존 시스템 업그레이드",
      quote: "\"레거시 시스템을 업그레이드하면서 기존 운영에 영향을 최소화하고 싶어요\"",
      problems: [
        "노후 인프라 교체 필요하지만 중단 불가",
        "기존 의료 시스템과의 연동 보장 필요",
        "환자 정보 보안 및 컴플라이언스 대응"
      ],
      solutions: {
        design: "무중단 마이그레이션 계획 수립",
        build: "단계별 시스템 교체, 레거시 연동 보장",
        operate: "24/7 모니터링, 백업/재해 복구 체계"
      },
      effect: "운영 중단 없이 최신 인프라로 전환. 보안 강화 및 규제 준수로 리스크 최소화.",
      link: "/services/sme"
    },
    {
      id: 3,
      icon: <Truck className="w-8 h-8 text-orange-600" />,
      title: "시나리오 3 : 중견/대기업 사옥 이전 및 확장",
      quote: "\"오피스 이전하거나 확장하면서 IT 인프라를 재구축해야 해요\"",
      problems: [
        "새 건물에 맞는 네트워크/전산실 설계 필요",
        "기존 장비 이전 vs 신규 도입 판단 어려움",
        "이전 일정 타이트하고 다운타임 최소화 필요"
      ],
      solutions: {
        design: "신규 공간 네트워크 설계, 장비 재사용/교체 계획",
        build: "물리적 이전, 네트워크 구축, 시스템 재구성",
        operate: "이전 후 안정화, 자산 재등록/관리"
      },
      effect: "이전 프로젝트 일정 준수 및 비즈니스 중단 최소화. 새 공간에 최적화된 IT 환경 확보.",
      link: "/services/expansion-stage"
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
      title: "시나리오 4 : 보안인증 대응",
      quote: "\"ISMS-P, ISO, 또는 고객사 보안 요구사항을 충족해야 해요\"",
      problems: [
        "보안 인증 준비 과정이 복잡하고 막막함",
        "IAM, EDR, ZTNA, SASE 등 보안 솔루션 선택 어려움",
        "감사 대응 및 문서화 부담"
      ],
      solutions: {
        design: "보안 아키텍처 설계, 인증 준비 로드맵",
        build: "보안 솔루션 도입, 정책 수립 및 적용",
        operate: "지속적 모니터링, 감사 지원, 정책 업데이트"
      },
      effect: "보안 인증 취득 및 유지. 고객신뢰도 향상 및 규제 리스크 해소.",
      link: "/services/security"
    },
    {
      id: 5,
      icon: <ClipboardList className="w-8 h-8 text-gray-600" />,
      title: "시나리오 5 : 자산/유지보수 운영",
      quote: "\"하드웨어 조달부터 자산 추적, 지속적인 유지보수까지 통합 관리가 필요해요\"",
      problems: [
        "장비 구매 후 추적이 안되고 방치됨",
        "고장/업그레이드 시점 놓쳐서 비용 증가",
        "자산 대장, 라이선스 관리가 수작업"
      ],
      solutions: {
        design: "자산 생명주기 관리 프로세스 설계",
        build: "자산 관리 시스템 도입 (DotSales 등)",
        operate: "정기 점검, 교체 계획, 라이선스 갱신 관리"
      },
      effect: "자산 가시성 확보. 예방적 유지보수로 돌발 비용 감소. 컴플라이언스 대응 용이.",
      link: "/services/maintenance"
    }
  ];

  const customerCases = [
    {
      id: 1,
      name: "LVE코리아",
      type: "스타트업 • 29명",
      quote: "\"Google Workspace와 네트워크 구축으로 업무 효율 대폭 상승\"",
      result: "IT 인프라 안정화 및 생산성 향상",
      services: ["Network", "Security", "Google WS", "SaaS", "Helpdesk", "Maintenance"]
    },
    {
      id: 2,
      name: "디지캡",
      type: "중소기업 • 60명",
      quote: "\"전사 보안 체계 재정비로 ISMS 인증 통과\"",
      result: "보안 인증 획득 및 신뢰도 상승",
      services: ["Security Audit", "ISMS-P", "Firewall", "VPN", "Endpoint", "Monitoring"]
    },
    {
      id: 3,
      name: "서울대학교",
      type: "교육기관 • 5,000명",
      quote: "\"캠퍼스 전역 Wi-Fi 안정화 및 보안 강화\"",
      result: "학생 만족도 40% 증가",
      services: ["Wireless", "Network", "Auth", "Security", "Maintenance", "Support"]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero / Scenario Header */}
      <div id="scenarios" className="bg-gradient-to-b from-orange-900 to-orange-800 py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">시나리오</h1>
          <p className="text-xl opacity-90 mb-8">우리 회사 상황에 맞는 IT 전략을 찾아보세요</p>
          <button 
            onClick={() => scrollToSection('cases')}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors backdrop-blur-sm border border-white/30"
          >
            실제 사례 더 보기
          </button>
        </div>
      </div>

      {/* Scenarios Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {scenarios.map((scenario) => (
            <motion.div 
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {scenario.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{scenario.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{scenario.quote}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 mb-3 border-b border-gray-100 pb-2">이런 문제가 있나요?</h4>
                    <ul className="space-y-2">
                      {scenario.problems.map((prob, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {prob}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 mb-3 border-b border-gray-100 pb-2">Coraise가 해드리는 것</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><span className="font-bold text-gray-800">Design:</span> {scenario.solutions.design}</li>
                      <li><span className="font-bold text-gray-800">Build:</span> {scenario.solutions.build}</li>
                      <li><span className="font-bold text-gray-800">Operate:</span> {scenario.solutions.operate}</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-sm text-gray-900 mb-1">기대 효과</h4>
                  <p className="text-sm text-gray-600">{scenario.effect}</p>
                </div>

                <Link 
                  to={scenario.link}
                  className="inline-flex items-center text-blue-600 font-bold text-sm hover:underline"
                >
                  이 상황으로 상담받기 <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Customer Cases Header */}
      <div id="cases" className="bg-gradient-to-b from-orange-800 to-orange-700 py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">실제 고객사 사례</h2>
          <button 
            onClick={() => scrollToSection('scenarios')}
            className="mt-8 bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors backdrop-blur-sm border border-white/30"
          >
            시나리오로 돌아가기
          </button>
        </div>
      </div>

      {/* Customer Cases List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20 space-y-6">
        {customerCases.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-8 items-start border border-gray-100"
          >
            {/* Logo Area */}
            <div className="w-full md:w-48 flex-shrink-0">
              <div className="bg-gray-200 w-full h-32 rounded-lg flex items-center justify-center text-gray-500 font-bold text-sm">
                로고 아이콘
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow">
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                <span className="text-sm text-gray-500">{item.type}</span>
              </div>
              <p className="text-orange-600 font-medium mb-6">{item.quote}</p>
              
              <div className="flex items-center text-sm text-green-600 font-medium bg-green-50 px-3 py-2 rounded-md inline-block">
                <Check className="w-4 h-4 mr-2" />
                {item.result}
              </div>
            </div>

            {/* Services Grid */}
            <div className="w-full md:w-64 flex-shrink-0">
              <h4 className="text-xs font-bold text-gray-900 mb-3">구독 프로그램 / 서비스</h4>
              <div className="grid grid-cols-3 gap-2">
                {item.services.map((service, idx) => (
                  <div key={idx} className="bg-gray-100 h-16 rounded-md flex items-center justify-center p-1 text-center">
                    <span className="text-[10px] text-gray-500 font-medium leading-tight">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#4A4036] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">지금 우리 회사 IT 상태를 점검해보세요</h2>
        <p className="text-gray-300 mb-8">3분 진단으로 맞춤형 IT 전략을 받아보세요</p>
        <Link 
          to="/diagnosis"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
        >
          무료 IT 진단 시작하기
        </Link>
      </div>
    </div>
  );
};

export default Cases;
