import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Server, Shield, Users, Globe, BarChart, ShieldCheck, Settings, AlertCircle, Zap, Lock, TrendingUp, Wifi, UserCheck, Key, ShoppingCart, CreditCard, Activity, Building, Rocket, Cloud, Monitor, FileText, Database, Network, Briefcase } from 'lucide-react';

const Service = () => {
  const { type } = useParams();

  // Define types for the data structure
  interface ServiceContent {
    title: string;
    heroTitle: string;
    heroSubtitle: string;
    color: string;
    textColor: string;
    gradient: string;
    layoutType: 'problem-solution' | 'specialized' | 'growth-stage';
    
    // For Problem-Solution Layout (Startup, SME)
    problemsTitle?: string;
    problems?: { icon: React.ReactNode; title: string; desc: string }[];
    solutionsTitle?: string;
    solutions?: { id: string; title: string; desc: string }[];
    caseStudy?: {
      tag: string;
      title: string;
      subtitle: string;
      desc: string;
      quote: string;
      stats: { value: string; label: string }[];
    };

    // For Specialized Layout (Education, Ecommerce, Enterprise)
    specializedTitle?: string;
    specializedFeatures?: { icon: React.ReactNode; title: string; desc: string; list?: string[] }[];

    // For Growth Stage Layout
    growthTitle?: string;
    growthFeatures?: { title: string; desc: string; list?: string[] }[];
    featureCardBg?: string;
    featureCardBorder?: string;

    ctaTitle: string;
    ctaButton: string;
    icon?: React.ReactNode;
  }

  const serviceData: Record<string, ServiceContent> = {
    startup: {
      title: 'Startup',
      heroTitle: '빠르게 성장 중인데,\nIT 인프라가 불안정하신가요?',
      heroSubtitle: '스타트업 특화 IT 솔루션으로\n안정적인 성장 기반을 만들어드립니다',
      color: 'bg-blue-600',
      textColor: 'text-blue-600',
      gradient: 'from-blue-600 to-blue-800',
      layoutType: 'problem-solution',
      problemsTitle: '스타트업이 겪는 IT 문제들',
      problems: [
        { icon: <Users className="w-8 h-8 text-red-500" />, title: 'IT 담당 인력 부족', desc: '"개발자는 있는데 IT 인프라를 관리할 사람이 없어요"' },
        { icon: <AlertCircle className="w-8 h-8 text-red-500" />, title: '보안 취약점', desc: '"개인정보보호법 대응이 필요한데 어디서부터 시작해야 할지..."' },
        { icon: <Settings className="w-8 h-8 text-red-500" />, title: 'SaaS 계정 관리 혼란', desc: '"각 팀이 제각각 SaaS를 쓰고 있어서 비용도 관리도 엉망이에요"' },
        { icon: <TrendingUp className="w-8 h-8 text-red-500" />, title: '확장성 부족', desc: '"직원이 늘어날 때마다 네트워크가 느려지고 문제가 생겨요"' }
      ],
      solutionsTitle: '스타트업 맞춤형 IT 솔루션',
      solutions: [
        { id: '01', title: 'Google Workspace 구축 및 최적화', desc: 'Gmail, Drive, Calendar 통합 설정\n인사 DB 연동 자동화 (AD/SaaS)\n모바일 기기 관리 (MDM)' },
        { id: '02', title: '기본 네트워크 설계', desc: '안정적인 유무선 네트워크 구성\nUTM (통합 위협 관리) 도입\n확장 가능한 스위치 및 AP 구성' },
        { id: '03', title: '보안 베이스라인 구축', desc: 'EDR (Endpoint Detection & Response) 도입\n이메일 보안 (Proofpoint)\n개인정보보호법 대응 컨설팅' },
        { id: '04', title: '성장 단계 확장 전략', desc: '직원 증가에 대비한 인프라 설계\nSaaS 통합 관리 시스템\n유지보수 및 기술 지원 (SLA)' }
      ],
      caseStudy: {
        tag: '고객 사례',
        title: 'LVE코리아',
        subtitle: '산업: SaaS 스타트업   •   규모: 직원 25명',
        desc: 'IT 인프라 부재, 급격한 성장으로 인한 네트워크 불안정',
        quote: '"코레이즈 덕분에 IT 걱정 없이 비즈니스에만 집중할 수 있게 되었습니다. 업무 효율이 눈에 띄게 상승했어요."',
        stats: [
          { value: '200%', label: '업무 효율 향상' },
          { value: '2주', label: '구축 완료' },
          { value: '0건', label: '보안 사고' }
        ]
      },
      ctaTitle: '우리 스타트업에 맞는\nIT 전략이 궁금하신가요?',
      ctaButton: '스타트업 전용 IT 진단 받기'
    },
    sme: {
      title: 'SME',
      heroTitle: '안정적인 성장을 위한\n통합 IT 관리 솔루션',
      heroSubtitle: '중소기업의 IT 환경을 체계적으로 관리하고\n비즈니스 성장을 지원합니다',
      color: 'bg-green-600',
      textColor: 'text-green-600',
      gradient: 'from-green-600 to-green-800',
      layoutType: 'problem-solution',
      problemsTitle: '중소기업이 겪는 IT 문제들',
      problems: [
        { icon: <Activity className="w-8 h-8 text-red-500" />, title: '네트워크 병목 현상', desc: '"급격한 성장으로 네트워크가 자주 느려지고 업무 효율이 떨어져요"' },
        { icon: <Lock className="w-8 h-8 text-red-500" />, title: '보안 사고 우려', desc: '"각종 규제와 인증이 필요한데 보안 체계가 제대로 갖춰지지 않았어요"' },
        { icon: <Settings className="w-8 h-8 text-red-500" />, title: 'SaaS 관리 부재', desc: '"각 부서가 제각각 SaaS를 쓰고 있어서 통합 관리가 안돼요"' },
        { icon: <AlertCircle className="w-8 h-8 text-red-500" />, title: '확장 계획 부재', desc: '"앞으로 더 커질 텐데 IT 인프라가 확장 가능한지 모르겠어요"' }
      ],
      solutionsTitle: '중소기업 맞춤형 IT 솔루션',
      solutions: [
        { id: '01', title: '네트워크 재설계 및 최적화', desc: '병목 구간 분석 및 네트워크 재설계\n고성능 스위치 및 라우터 도입\nVLAN 설계로 부서별 네트워크 분리\n네트워크 모니터링 시스템 구축' },
        { id: '02', title: '통합 보안 체계 구축', desc: '차세대 방화벽 (NGFW) 도입\n통합 위협 관리 (UTM) 시스템\nNAC (Network Access Control)\nISMS-P 인증 컨설팅' },
        { id: '03', title: 'SaaS 통합 관리', desc: 'SaaS 통합 관리 솔루션 도입\nSSO (Single Sign-On) 구축\nSaaS 비용 최적화\n통합 계정 관리 시스템' },
        { id: '04', title: '확장 가능한 인프라 설계', desc: '클라우드 하이브리드 전략\n확장 가능한 네트워크 아키텍처\nIT 자산 관리 시스템 (ITAM)\nSLA 기반 운영 체계' }
      ],
      caseStudy: {
        tag: '고객 사례',
        title: '디지캡',
        subtitle: '산업: 제조업   •   규모: 직원 60명',
        desc: '급격한 성장으로 네트워크 병목 현상 발생, 보안 사고 우려 증가',
        quote: '"전사 보안 체계 재정비로 ISMS-P 인증을 통과했고, 네트워크 병목 현상도 완전히 해결되었습니다."',
        stats: [
          { value: '100%', label: '보안 인증 통과' },
          { value: '80%', label: '네트워크 속도 개선' },
          { value: '3주', label: '구축 완료' }
        ]
      },
      ctaTitle: '우리 회사에 맞는\nIT 전략을 지금 확인하세요',
      ctaButton: '중소기업 전용 IT 진단 받기'
    },
    education: {
      title: 'Education',
      heroTitle: '교육기관을 위한\n안정적인 IT 인프라',
      heroSubtitle: '대규모 사용자 환경에 최적화된\n캠퍼스 네트워크 & 보안 솔루션',
      color: 'bg-orange-500',
      textColor: 'text-orange-500',
      gradient: 'from-orange-400 to-orange-600',
      layoutType: 'specialized',
      specializedTitle: '교육기관 특화 솔루션',
      specializedFeatures: [
        { 
          icon: <Wifi className="w-10 h-10 text-orange-500" />, 
          title: '캠퍼스 Wi-Fi', 
          desc: '전역 무선 네트워크 구축\n대용량 트래픽 처리\n안정적인 연결 보장',
          list: ['전역 무선 네트워크 구축', '대용량 트래픽 처리', '안정적인 연결 보장']
        },
        { 
          icon: <ShieldCheck className="w-10 h-10 text-orange-500" />, 
          title: '보안 & 인증', 
          desc: 'ISMS-P 인증 컨설팅\nNAC 도입\n개인정보보호',
          list: ['ISMS-P 인증 컨설팅', 'NAC 도입', '개인정보보호']
        },
        { 
          icon: <UserCheck className="w-10 h-10 text-orange-500" />, 
          title: '계정 관리', 
          desc: '학생/교직원 통합 인증\nSSO 구축\n자동 계정 발급',
          list: ['학생/교직원 통합 인증', 'SSO 구축', '자동 계정 발급']
        }
      ],
      ctaTitle: '교육기관 IT 환경 진단받기',
      ctaButton: '무료 IT 진단 시작'
    },
    ecommerce: {
      title: 'E-commerce',
      heroTitle: '24/7 운영을 위한\n이커머스 IT 솔루션',
      heroSubtitle: '중단 없는 서비스와 안전한 거래를 위한\n고가용성 & 보안 인프라',
      color: 'bg-purple-600',
      textColor: 'text-purple-600',
      gradient: 'from-purple-600 to-purple-800',
      layoutType: 'specialized',
      specializedTitle: '이커머스 특화 솔루션',
      specializedFeatures: [
        { 
          icon: <Zap className="w-10 h-10 text-purple-600" />, 
          title: '고가용성', 
          desc: '24/7 무중단 서비스\n로드밸런싱\n자동 장애 복구',
          list: ['24/7 무중단 서비스', '로드밸런싱', '자동 장애 복구']
        },
        { 
          icon: <Shield className="w-10 h-10 text-purple-600" />, 
          title: 'DDoS 방어', 
          desc: 'DDoS 공격 차단\nWAF 구축\n실시간 모니터링',
          list: ['DDoS 공격 차단', 'WAF 구축', '실시간 모니터링']
        },
        { 
          icon: <CreditCard className="w-10 h-10 text-purple-600" />, 
          title: '결제 보안', 
          desc: 'PCI-DSS 준수\n결제 데이터 암호화\n개인정보보호',
          list: ['PCI-DSS 준수', '결제 데이터 암호화', '개인정보보호']
        }
      ],
      ctaTitle: '이커머스 IT 환경 진단받기',
      ctaButton: '무료 IT 진단 시작'
    },
    enterprise: {
      title: 'Enterprise',
      heroTitle: '대규모 조직을 위한\n엔터프라이즈 IT 전략',
      heroSubtitle: '글로벌 수준의 IT 거버넌스와\n통합 인프라 관리',
      color: 'bg-slate-800',
      textColor: 'text-slate-800',
      gradient: 'from-slate-700 to-slate-900',
      layoutType: 'specialized',
      specializedTitle: '엔터프라이즈 솔루션',
      specializedFeatures: [
        { 
          icon: <Building className="w-10 h-10 text-slate-700" />, 
          title: 'IT 거버넌스', 
          desc: '전사 IT 정책 수립\nIT 자산 통합 관리\n표준화 및 최적화',
          list: ['전사 IT 정책 수립', 'IT 자산 통합 관리', '표준화 및 최적화']
        },
        { 
          icon: <Globe className="w-10 h-10 text-slate-700" />, 
          title: '글로벌 인프라', 
          desc: '다국적 네트워크\n글로벌 데이터센터\n통합 보안 체계',
          list: ['다국적 네트워크', '글로벌 데이터센터', '통합 보안 체계']
        },
        { 
          icon: <ShieldCheck className="w-10 h-10 text-slate-700" />, 
          title: '컴플라이언스', 
          desc: 'ISO 27001 인증\nGDPR 대응\n규제 준수',
          list: ['ISO 27001 인증', 'GDPR 대응', '규제 준수']
        }
      ],
      ctaTitle: '엔터프라이즈 IT 환경 진단받기',
      ctaButton: '무료 IT 진단 시작'
    },
    'early-stage': {
      title: 'Early Stage',
      heroTitle: '창업 초기 단계',
      heroSubtitle: '빠른 시작을 위한 필수 IT 인프라\n직원 1~20명 규모에 최적화',
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      gradient: 'from-blue-500 to-blue-700',
      layoutType: 'growth-stage',
      icon: <Rocket className="w-16 h-16 text-white mb-6" />,
      growthTitle: '필수 IT 구성 요소',
      growthFeatures: [
        {
          title: '협업 도구',
          desc: 'Google Workspace 또는 Microsoft 365로 이메일, 문서, 일정 관리'
        },
        {
          title: '기본 보안',
          desc: '엔드포인트 보안과 이메일 보안으로 기본적인 위협 차단'
        },
        {
          title: '클라우드 인프라',
          desc: 'AWS, GCP 또는 Azure로 확장 가능한 서버 환경 구축'
        }
      ],
      featureCardBg: 'bg-blue-50',
      featureCardBorder: 'border-blue-100',
      ctaTitle: '창업 초기 IT 진단 받기',
      ctaButton: '창업 초기 IT 진단 받기'
    },
    'growth-stage': {
      title: 'Growth Stage',
      heroTitle: '성장 단계',
      heroSubtitle: '확장 가능한 IT 인프라 구축\n직원 20~100명 규모에 최적화',
      color: 'bg-emerald-500',
      textColor: 'text-emerald-500',
      gradient: 'from-emerald-500 to-emerald-700',
      layoutType: 'growth-stage',
      icon: <TrendingUp className="w-16 h-16 text-white mb-6" />,
      growthTitle: '성장 단계 IT 전략',
      growthFeatures: [
        {
          title: '네트워크 재설계',
          desc: '증가하는 트래픽을 처리할 수 있는 확장 가능한 네트워크 구조'
        },
        {
          title: '보안 강화',
          desc: 'UTM, EDR, NAC 등 통합 보안 체계 구축'
        },
        {
          title: 'IT 관리 체계',
          desc: '자산 관리, 모니터링, SLA 기반 운영 체계 수립'
        }
      ],
      featureCardBg: 'bg-emerald-50',
      featureCardBorder: 'border-emerald-100',
      ctaTitle: '성장 단계 IT 진단 받기',
      ctaButton: '성장 단계 IT 진단 받기'
    },
    'expansion-stage': {
      title: 'Expansion Stage',
      heroTitle: '확장 단계',
      heroSubtitle: '엔터프라이즈급 IT 인프라\n직원 100명 이상 규모에 최적화',
      color: 'bg-purple-600',
      textColor: 'text-purple-600',
      gradient: 'from-purple-600 to-purple-800',
      layoutType: 'growth-stage',
      icon: <Building className="w-16 h-16 text-white mb-6" />,
      growthTitle: '확장 단계 IT 전략',
      growthFeatures: [
        {
          title: 'IT 거버넌스',
          desc: '전사 IT 정책 수립 및 통합 관리 체계'
        },
        {
          title: '글로벌 인프라',
          desc: '다국적 네트워크 및 글로벌 데이터센터 구축'
        },
        {
          title: '컴플라이언스',
          desc: 'ISO 27001, GDPR 등 국제 규제 준수'
        }
      ],
      featureCardBg: 'bg-purple-50',
      featureCardBorder: 'border-purple-100',
      ctaTitle: '확장 단계 IT 진단 받기',
      ctaButton: '확장 단계 IT 진단 받기'
    }
  };

  const currentService = serviceData[type as keyof typeof serviceData] || serviceData.startup;

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-b ${currentService.gradient} text-white py-32 text-center px-4 overflow-hidden`}>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          {currentService.icon}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight whitespace-pre-line">
            {currentService.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-0 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
            {currentService.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Problem-Solution Layout (Startup, SME) */}
      {currentService.layoutType === 'problem-solution' && (
        <>
          {/* Problems Section */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
                {currentService.problemsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentService.problems?.map((problem, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start">
                    <div className="mr-6 bg-red-50 p-3 rounded-full flex-shrink-0">
                      {problem.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                      <p className="text-gray-600 text-sm">{problem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
                {currentService.solutionsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentService.solutions?.map((sol, idx) => (
                  <div key={idx} className={`border border-gray-200 rounded-xl p-8 hover:border-${currentService.color.split('-')[1]}-500 transition-colors`}>
                    <div className={`text-2xl font-bold ${currentService.textColor} mb-4`}>{sol.id}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{sol.title}</h3>
                    <ul className="space-y-2">
                      {sol.desc.split('\n').map((line, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className={`w-4 h-4 mr-2 ${currentService.textColor}`} />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Study Section */}
          {currentService.caseStudy && (
            <section className="py-24 bg-gray-50">
              <div className="max-w-5xl mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className={`p-10 ${currentService.color} text-white flex flex-col justify-center`}>
                      <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-6 w-fit">
                        {currentService.caseStudy.tag}
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{currentService.caseStudy.title}</h3>
                      <p className="text-white/80 text-sm mb-8">{currentService.caseStudy.subtitle}</p>
                      
                      <div className="mb-6">
                        <p className="font-bold mb-2 opacity-80">문제</p>
                        <p className="text-sm opacity-90">{currentService.caseStudy.desc}</p>
                      </div>
                      
                      <div>
                        <p className="font-bold mb-2 opacity-80">솔루션</p>
                        <p className="text-sm opacity-90">Google Workspace + Fortinet UTM + Aruba 무선AP 구축</p>
                      </div>
                    </div>
                    
                    <div className="p-10 flex flex-col justify-center">
                      <blockquote className="text-lg text-gray-600 italic mb-10 leading-relaxed">
                        {currentService.caseStudy.quote}
                      </blockquote>
                      
                      <div className="grid grid-cols-3 gap-4 text-center border-t border-gray-100 pt-8">
                        {currentService.caseStudy.stats.map((stat, idx) => (
                          <div key={idx}>
                            <div className={`text-2xl font-bold ${currentService.textColor} mb-1`}>{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Specialized Layout (Education, Ecommerce, Enterprise) */}
      {currentService.layoutType === 'specialized' && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              {currentService.specializedTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentService.specializedFeatures?.map((feature, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.list?.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-gray-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Growth Stage Layout (Early, Growth, Expansion) */}
      {currentService.layoutType === 'growth-stage' && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-16">
              {currentService.growthTitle}
            </h2>
            <div className="space-y-6">
              {currentService.growthFeatures?.map((feature, idx) => (
                <div 
                  key={idx} 
                  className={`p-8 rounded-lg flex flex-col md:flex-row md:items-center gap-4 border ${currentService.featureCardBg} ${currentService.featureCardBorder}`}
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link
                to="/diagnosis"
                className={`inline-flex items-center px-8 py-4 rounded-md text-white font-bold shadow-lg transition-transform hover:scale-105 ${currentService.color}`}
              >
                {currentService.ctaButton} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Partners Section (Common) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-10">관련 영역 파트너사</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Microsoft', 'Aruba Networks', 'Cisco', 'AWS', 'Palo Alto'].map((partner, idx) => (
              <div key={idx} className="px-6 py-3 bg-gray-50 rounded-lg text-gray-500 font-bold text-sm border border-gray-100">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA (Only for non-growth-stage layouts as they have their own CTA) */}
      {currentService.layoutType !== 'growth-stage' && (
        <section className={`relative py-24 overflow-hidden bg-gradient-to-r ${currentService.gradient}`}>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 whitespace-pre-line">
              {currentService.ctaTitle}
            </h2>
            <Link
              to="/diagnosis"
              className="inline-flex items-center bg-white text-gray-900 px-10 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-transform hover:scale-105"
            >
              {currentService.ctaButton} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Service;
