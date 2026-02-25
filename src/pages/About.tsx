import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, MessageCircle, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const About = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const solutions = [
    {
      title: "ID PaC (Identity Package)",
      subtitle: "SaaS & Cloud 인사 연동 솔루션",
      desc: "Google Workspace, Microsoft 365 등 다양한 SaaS 계정과 인사 정보를 자동으로 동기화하여 관리 효율을 극대화합니다.",
      details: [
        "Google Workspace 계정 자동 생성/삭제/수정",
        "M365 라이선스 자동 할당 및 회수",
        "부서/직책 정보 실시간 동기화",
        "퇴사자 계정 자동 비활성화 및 데이터 이관",
        "다양한 HR 시스템(e-HR)과 연동 지원"
      ],
      process: [
        { step: "01. 연동 설정", desc: "HR 데이터베이스 및 SaaS(Google/M365) API 연동" },
        { step: "02. 정책 수립", desc: "부서/직책별 라이선스 할당 및 권한 정책 정의" },
        { step: "03. 자동화", desc: "입사/퇴사/인사이동 발생 시 계정 라이프사이클 자동 처리" },
        { step: "04. 모니터링", desc: "동기화 로그 및 라이선스 사용 현황 리포팅" }
      ],
      target: "적합 고객: Google Workspace/M365 사용 기업, 입퇴사자가 많은 성장 기업"
    },
    {
      title: "ADPaC (Active Directory Package)",
      subtitle: "한국형 AD 계정 관리 솔루션",
      desc: "GS인증 1등급을 획득한 솔루션으로, Active Directory와 인사 시스템을 완벽하게 연동하고 패스워드 관리 기능을 제공합니다.",
      details: [
        "SyncManager: 인사 DB와 AD 계정 자동 동기화",
        "PassChanger: AD 패스워드 변경 웹 포털 제공",
        "ADManager: 웹 기반의 손쉬운 AD 관리 도구",
        "Teams Org: Microsoft Teams 조직도 연동 지원"
      ],
      process: [
        { step: "01. 인사 연동", desc: "인사 시스템(DB/Excel)의 조직도 및 사원 정보 수집" },
        { step: "02. AD 동기화", desc: "수집된 정보를 바탕으로 AD 계정 생성/수정/비활성화" },
        { step: "03. 포털 제공", desc: "사용자용 패스워드 변경 및 관리자용 웹 콘솔 제공" },
        { step: "04. 확장 연동", desc: "Exchange, Teams, SSO 등 연계 시스템에 정보 전파" }
      ],
      target: "적합 고객: Windows 기반 조직, AD 도입/운영 기업, 보안 감사 대응 필요 기업"
    },
    {
      title: "GotSales",
      subtitle: "올인원 영업/자산 관리 CRM",
      desc: "영업 기회 관리부터 견적, 계약, 그리고 하드웨어 자산 관리까지 하나의 플랫폼에서 통합 관리합니다.",
      details: [
        "직관적인 파이프라인 관리 및 영업 현황 대시보드",
        "견적서/계약서 자동 생성 및 이력 관리",
        "IT 자산(노트북, 모니터 등) 실물 자산 추적 관리",
        "유지보수 계약 및 정기 점검 일정 관리"
      ],
      process: [
        { step: "01. 리드 관리", desc: "잠재 고객 발굴 및 영업 기회(Opportunity) 등록" },
        { step: "02. 영업 활동", desc: "견적 발행, 미팅 로그, 파이프라인 단계별 관리" },
        { step: "03. 계약/수주", desc: "계약 체결 및 매출 확정, 세금계산서 발행 연동" },
        { step: "04. 자산/유지보수", desc: "납품된 하드웨어 자산 등록 및 유지보수 계약 관리" }
      ],
      target: "적합 고객: B2B 영업 조직, IT 자산 관리가 필요한 기업"
    },
    {
      title: "CoWork.Day",
      subtitle: "차세대 그룹웨어 (Beta)",
      desc: "메일, 결재, 일정, 근태 관리를 넘어 진정한 협업을 위한 올인원 워크플레이스를 제공합니다.",
      details: [
        "전자결재 및 근태 관리 (주 52시간 대응)",
        "프로젝트 및 태스크 관리",
        "사내 메신저 및 화상 회의 통합",
        "Google Workspace / M365 완벽 연동"
      ],
      process: [
        { step: "01. 워크스페이스 생성", desc: "회사/팀별 워크스페이스 생성 및 구성원 초대" },
        { step: "02. 업무 도구 통합", desc: "메일, 캘린더, 드라이브 등 기존 업무 도구 연동" },
        { step: "03. 협업 프로세스", desc: "프로젝트 생성, 태스크 할당, 메신저 소통" },
        { step: "04. 경영 지원", desc: "전자결재 승인, 근태 관리, 리소스 분석" }
      ],
      target: "적합 고객: 스마트워크 환경 도입을 원하는 기업"
    }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-400 to-slate-900 text-white py-32 text-center px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            기업 IT 환경의<br />
            최고 파트너, 코레이즈
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-100 opacity-90 leading-relaxed"
          >
            14년 이상의 경험으로 2,600+ 기업의<br />
            IT 인프라를 책임지고 있습니다
          </motion.p>
        </div>
      </section>

      {/* About Us Text Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>
          <p className="text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto">
            코레이즈는 2016년 설립 이후 기업의 IT 환경을 전문적으로 진단하고 최적화하는 IT 컨설팅 전문 기업입니다.<br className="hidden md:block" />
            네트워크, 보안, 클라우드 등 IT 전 영역에서 기업의 성장 단계와 산업 특성에 맞는 맞춤형 솔루션을 제공합니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">14+</div>
              <div className="text-gray-500 text-sm font-medium">Years of Experience</div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,600+</div>
              <div className="text-gray-500 text-sm font-medium">Satisfied Clients</div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-500 text-sm font-medium">IT Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Consulting Company Section */}
      <section className="py-24 bg-slate-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">IT Consulting Company</h2>
          <p className="text-gray-400 mb-12 text-sm uppercase tracking-wider">- We can help you! -</p>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p>
              코레이즈는 윤리적인 기업으로 정직과 신뢰를 가장 큰 중요성을 생각하고 있습니다.<br className="hidden md:block" />
              고객과의 신뢰를 최우선 가치로 생각하며, 함께 성장하는 비즈니스 파트너입니다.<br className="hidden md:block" />
              코레이즈와 함께하는 기간은 직원과 파트너의 신뢰, 양심, 윤리적인 파트너로 함께 합니다.
            </p>
            <p>
              또한, 기술지향적인 회사로서 고객에게 먼저 만족감을 드리기 위해 배우고 또 공부합니다.<br className="hidden md:block" />
              고객에 대한 최적의 IT 인프라 컨설팅을 책임지겠습니다.<br className="hidden md:block" />
              고객의 다양한 사업영역 확장과 발전에 발 맞추어 임직원 모두 글로벌 IT의 핵심 역량으로 성장해 나가겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Coraise Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coraise 자사 솔루션</h2>
            <p className="text-gray-600">컨설팅만 하는 게 아닙니다. 자체 개발 역량으로 최적화된 솔루션을 제공합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol, idx) => (
              <motion.div 
                key={idx} 
                layout
                onClick={() => setExpandedSolution(expandedSolution === idx ? null : idx)}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer overflow-hidden"
              >
                <motion.div layout className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3 layout className="text-xl font-bold text-gray-900">{sol.title}</motion.h3>
                    <motion.p layout className="text-sm text-orange-600 font-medium mt-1">{sol.subtitle}</motion.p>
                  </div>
                  {expandedSolution === idx ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </motion.div>
                
                <motion.div layout className="space-y-3 mb-4">
                  <p className="text-sm text-gray-800 font-medium leading-relaxed">{sol.desc}</p>
                </motion.div>

                <AnimatePresence>
                  {expandedSolution === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-100 pt-4 mt-4"
                    >
                      <h4 className="text-sm font-bold text-gray-900 mb-2">주요 기능</h4>
                      <ul className="space-y-2 mb-6">
                        {sol.details.map((detail, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="text-sm font-bold text-gray-900 mb-2">프로세스</h4>
                      <div className="grid grid-cols-1 gap-2 mb-6">
                        {sol.process.map((step, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded border border-gray-100 flex flex-col">
                            <span className="text-xs font-bold text-orange-600 mb-1">{step.step}</span>
                            <span className="text-xs text-gray-600">{step.desc}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs text-gray-500 bg-blue-50 p-3 rounded">{sol.target}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {expandedSolution !== idx && (
                  <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-gray-400 text-center mt-2">
                    클릭하여 자세히 보기
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">파트너사</h2>
          <p className="text-gray-600 mb-12">글로벌 IT 기업들과의 파트너십으로 최고의 솔루션을 제공합니다</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8 items-center justify-items-center">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="w-full h-24 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={`/images/logo${i + 1}.png`} 
                  alt={`Partner ${i + 1}`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Header of CORAISE */}
      <section className="py-24 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-gray-500 uppercase tracking-widest mb-4">The Header of CORAISE</h2>
              <p className="text-gray-600">
                코레이즈를 이끄는 리더십을 소개합니다.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/images/ceo1.png" 
                  alt="CEO 1" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/images/ceo2.png" 
                  alt="CEO 2" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Workplace</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-xl shadow-md group">
              <img src="/images/company1.png" alt="Company 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-md group h-64 lg:h-auto">
              <img src="/images/company2.png" alt="Company 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-md group h-64 lg:h-auto">
              <img src="/images/company3.png" alt="Company 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-md group h-64">
              <img src="/images/company4.png" alt="Company 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="lg:col-span-2 relative overflow-hidden rounded-xl shadow-md group h-64">
              <img src="/images/company5.png" alt="Company 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-slate-800"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 바로 무료 IT 진단을<br />받아보세요
          </h2>
          <p className="text-lg text-orange-100 mb-10 opacity-90">
            전문 컨설턴트가 우리 회사에 맞는 IT 전략을 제시해드립니다
          </p>
          <Link
            to="/diagnosis"
            className="inline-flex items-center bg-white text-gray-900 px-10 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition-transform hover:scale-105"
          >
            무료 IT 진단 시작하기 <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </button>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default About;
