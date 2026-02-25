import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Activity, 
  Truck, 
  ShieldCheck, 
  ClipboardList, 
  ArrowRight, 
  Check,
  Building2,
  ExternalLink
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
      link: "/solutions/startup"
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
      link: "/solutions/sme"
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
      link: "/solutions/expansion-stage"
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
      link: "/solutions/security"
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
      link: "/solutions/maintenance"
    }
  ];

  const customerCases = [
    {
      id: 1,
      name: "라이브커넥트",
      type: "스타트업 • 30명",
      quote: "\"Google Workspace와 네트워크 구축으로 업무 효율 대폭 상승\"",
      result: "IT 인프라 안정화 및 생산성 향상",
      services: ["Network", "Security", "Google WS", "SaaS", "Helpdesk", "Maintenance"],
      logoImage: "/images/othercompany1.png",
      blogUrl: "https://blog.naver.com/coraise/224162559812"
    },
    {
      id: 2,
      name: "디지캡",
      type: "중소기업 • 60명",
      quote: "\"전사 보안 체계 재정비로 ISMS 인증 통과\"",
      result: "보안 인증 획득 및 신뢰도 상승",
      services: ["Security Audit", "ISMS-P", "Firewall", "VPN", "Endpoint", "Monitoring"],
      logoImage: "/images/othercompany2.png",
      blogUrl: "https://blog.naver.com/coraise/224110370814"
    },
    {
      id: 3,
      name: "앤트스튜디오",
      type: "콘텐츠/미디어 • 150명",
      quote: "\"오리지널 IP로 완성하는 오래도록 사랑 받는 웹툰\"",
      result: "안정적인 창작 환경 구축 및 협업 효율 증대",
      services: ["Network", "Security", "Google WS", "Adobe", "NAS", "Backup"],
      logoImage: "/images/othercompany3.png",
      blogUrl: "https://blog.naver.com/coraise/224065598476"
    },
    {
      id: 4,
      name: "DSRV",
      type: "핀테크/블록체인 • 50명",
      quote: "\"블록체인 인프라로 안정적인 금융 서비스\"",
      result: "금융 규제 준수 및 무중단 인프라 운영",
      services: ["Blockchain Infra", "Security", "ISMS", "24/7 Monitoring", "Cloud"],
      logoImage: "/images/othercompany4.png",
      blogUrl: "https://blog.naver.com/coraise/224026064331"
    },
    {
      id: 5,
      name: "네오이뮨텍",
      type: "바이오/제약 • 80명",
      quote: "\"면역치료제 개발, 안정적인 네트워크로\"",
      result: "연구 데이터 보호 및 글로벌 협업 환경 조성",
      services: ["Network Rental", "Fortinet", "Security", "Global Network", "Bio-Pharma IT"],
      logoImage: "/images/othercompany5.png",
      blogUrl: "https://blog.naver.com/coraise/223904931342"
    },
    {
      id: 6,
      name: "베이글코드",
      type: "게임 • 200명",
      quote: "\"게임 회사에서 끊김없는 네트워크를\"",
      result: "글로벌 게임 서비스 안정성 확보 및 장애 대응",
      services: ["CRN (Rental)", "COMON (Monitoring)", "Global Network", "AWS", "Gaming Infra"],
      logoImage: "/images/othercompany6.png",
      blogUrl: "https://blog.naver.com/coraise/223848818125"
    },
    {
      id: 7,
      name: "채널코퍼레이션",
      type: "B2B SaaS • 100명",
      quote: "\"SMB 비즈니스의 핵심, 채널톡\"",
      result: "빠른 네트워크 지원으로 업무 효율 극대화",
      services: ["Network", "Helpdesk", "SaaS", "Startup IT", "Global Expansion"],
      logoImage: "/images/othercompany8.png",
      blogUrl: "https://blog.naver.com/coraise/223805123938"
    },
    {
      id: 8,
      name: "아이소이",
      type: "코스메틱/이커머스 • 120명",
      quote: "\"끊김없는 무선 구축, 아이소이\"",
      result: "사무실 이전 및 물류 센터 네트워크 최적화",
      services: ["Wireless", "Network", "Logistics IT", "E-commerce Infra", "Security"],
      logoImage: "/images/othercompany9.png",
      blogUrl: "https://blog.naver.com/coraise/223777958324"
    },
    {
      id: 9,
      name: "올리브인터내셔널",
      type: "글로벌 K뷰티 • 70명",
      quote: "\"글로벌 K뷰티, 올리브인터내셔널\"",
      result: "ERP 구축 및 IT 인프라 통합 관리",
      services: ["ERP", "Network", "NAS", "Global IT", "E-commerce"],
      logoImage: "/images/othercompany7.png",
      blogUrl: "https://blog.naver.com/coraise/223736784716"
    },
    {
      id: 10,
      name: "컨트롤나인",
      type: "게임 • 40명",
      quote: "\"게임회사에서 총무로 살아남는 법\"",
      result: "신사옥 구축 및 IT 인프라 원스톱 세팅",
      services: ["Office Setup", "Network", "Active Directory", "Software Licensing", "PC/Server"],
      logoImage: "/images/othercompany10.png",
      blogUrl: "https://blog.naver.com/coraise/223736782924"
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
                    <motion.h3 
                      whileHover={{ scale: 1.05, color: "#ea580c" }}
                      className="font-bold text-lg text-gray-900 origin-left cursor-default"
                    >
                      {scenario.title}
                    </motion.h3>
                    <motion.p 
                      whileHover={{ scale: 1.02 }}
                      className="text-sm text-gray-500 mt-1 origin-left cursor-default"
                    >
                      {scenario.quote}
                    </motion.p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 mb-3 border-b border-gray-100 pb-2">이런 문제가 있나요?</h4>
                    <ul className="space-y-2">
                      {scenario.problems.map((prob, idx) => (
                        <motion.li 
                          key={idx} 
                          whileHover={{ x: 5, color: "#111827" }}
                          className="text-sm text-gray-600 flex items-start cursor-default"
                        >
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {prob}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 mb-3 border-b border-gray-100 pb-2">Coraise가 해드리는 것</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <motion.li whileHover={{ x: 5 }} className="cursor-default"><span className="font-bold text-gray-800">Design:</span> {scenario.solutions.design}</motion.li>
                      <motion.li whileHover={{ x: 5 }} className="cursor-default"><span className="font-bold text-gray-800">Build:</span> {scenario.solutions.build}</motion.li>
                      <motion.li whileHover={{ x: 5 }} className="cursor-default"><span className="font-bold text-gray-800">Operate:</span> {scenario.solutions.operate}</motion.li>
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
              <div className="bg-white w-full h-32 rounded-lg flex items-center justify-center border border-gray-200 overflow-hidden p-4">
                <img 
                  src={item.logoImage} 
                  alt={`${item.name} Logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow">
              <div className="flex items-baseline gap-3 mb-2">
                <motion.h3 
                  whileHover={{ scale: 1.05, color: "#ea580c" }}
                  className="text-xl font-bold text-gray-900 origin-left cursor-default"
                >
                  {item.name}
                </motion.h3>
                <span className="text-sm text-gray-500">{item.type}</span>
              </div>
              <motion.p 
                whileHover={{ scale: 1.02 }}
                className="text-orange-600 font-medium mb-6 origin-left cursor-default"
              >
                {item.quote}
              </motion.p>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-sm text-green-600 font-medium bg-green-50 px-3 py-2 rounded-md inline-block origin-left cursor-default"
              >
                <Check className="w-4 h-4 mr-2" />
                {item.result}
              </motion.div>
              
              {item.blogUrl && (
                <div className="mt-4">
                  <a 
                    href={item.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    인터뷰 보러가기 <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              )}
            </div>

            {/* Services Grid */}
            <div className="w-full md:w-64 flex-shrink-0">
              <h4 className="text-xs font-bold text-gray-900 mb-3">구독 프로그램 / 서비스</h4>
              <div className="grid grid-cols-3 gap-2">
                {item.services.map((service, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb", color: "#000" }}
                    className="bg-gray-100 h-16 rounded-md flex items-center justify-center p-1 text-center cursor-default"
                  >
                    <span className="text-[10px] text-gray-500 font-medium leading-tight">{service}</span>
                  </motion.div>
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
