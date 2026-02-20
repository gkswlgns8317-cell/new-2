import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Server, Building2, ShieldCheck, Settings, ChevronDown, ChevronUp, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Home = () => {
  const scenarios = [
    {
      id: 1,
      title: '시나리오1\n: 성장하는 스타트업/스케일업',
      desc: '창업자 1-2명에서 조직이 커지면서 IT 인프라가 필요해졌어요',
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      path: '/services/startup'
    },
    {
      id: 2,
      title: '시나리오2\n: 기존 시스템 고도화/이전',
      desc: '레거시 시스템을 업그레이드 하면서 기존 운영에 영향을 최소화하고 싶어요',
      icon: <Server className="w-6 h-6 text-green-500" />,
      path: '/services/sme'
    },
    {
      id: 3,
      title: '시나리오3\n: 중견/대기업 사옥 이전 및 확장',
      desc: '오피스 이전하거나 확장하면서 IT 인프라를 재구축해야 해요',
      icon: <Building2 className="w-6 h-6 text-orange-500" />,
      path: '/services/enterprise'
    },
    {
      id: 4,
      title: '시나리오4\n: 보안/인증 대응',
      desc: 'ISMS-P, ISO, 또는 고객사 보안 요구사항을 충족해야 해요',
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
      path: '/services/security'
    },
    {
      id: 5,
      title: '시나리오5\n: 자산/유지보수 운영',
      desc: '하드웨어 조달부터 자산 추적, 지속적 유지보수까지 통합 관리가 필요해요',
      icon: <Settings className="w-6 h-6 text-gray-500" />,
      path: '/services/maintenance'
    }
  ];

  const faqs = [
    { q: "IT 진단은 정말 무료인가요?", a: "네, 초기 진단 및 상담은 전액 무료로 진행됩니다." },
    { q: "진단 결과는 언제 받아볼 수 있나요?", a: "온라인 진단은 즉시 결과를 확인하실 수 있으며, 상세 리포트는 전문가 검토 후 24시간 이내에 발송됩니다." },
    { q: "어떤 규모의 기업이 서비스를 이용하나요?", a: "5인 미만의 스타트업부터 1,000명 이상의 중견/대기업까지 다양한 규모의 기업이 이용하고 있습니다." },
    { q: "기존 시스템을 유지하면서 부분 도입이 가능한가요?", a: "네, 가능합니다. 현재 환경을 분석하여 필요한 부분만 단계적으로 도입할 수 있도록 제안해 드립니다." },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#2c3e50] to-[#e67e22] text-white py-32 text-center px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            우리 기업 IT 환경에<br />
            도움이 필요하신가요?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            네트워크부터 IT인프라/보안, 클라우드 소프트웨어, 하드웨어까지<br className="hidden md:block" />
            우리 회사에 맞는 IT 전략을 무료로 진단 받아보세요
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/diagnosis"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-transform hover:scale-105"
            >
              무료 IT 진단 받기 (3분 소요)
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                우리 회사 상황에 맞는<br />
                IT 전략을 찾아보세요
              </h2>
            </div>
            <Link to="/cases" className="hidden md:inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
              실제 사례 더 보기
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario) => (
              <Link 
                key={scenario.id}
                to={scenario.path}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
                  {scenario.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 whitespace-pre-line">{scenario.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  "{scenario.desc}"
                </p>
                <div className="flex items-center text-sm text-blue-600 font-medium mt-auto">
                  자세히 보기 <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-10">2,600+ 기업이 선택한 IT 파트너</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logo placeholders using text for now as per instructions to not use external images unless necessary */}
            <span className="text-xl font-bold text-gray-800">Microsoft</span>
            <span className="text-xl font-bold text-gray-800">Aruba Networks</span>
            <span className="text-xl font-bold text-gray-800">Cisco</span>
            <span className="text-xl font-bold text-gray-800">AWS</span>
            <span className="text-xl font-bold text-gray-800">Palo Alto</span>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-16">
            코레이즈를 지속적으로<br />찾아주시는 이유
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Competitor */}
            <div className="bg-gray-200 rounded-3xl p-10 flex flex-col items-center justify-center min-h-[300px] opacity-70">
              <h3 className="text-2xl font-bold text-gray-500 mb-4">타사</h3>
              <ul className="text-gray-500 space-y-2 text-left text-sm">
                <li>• 단순 하드웨어/소프트웨어 판매</li>
                <li>• 문제 발생 시 제조사로 책임 전가</li>
                <li>• 파편화된 계약 관리</li>
              </ul>
            </div>

            {/* Coraise */}
            <div className="bg-white rounded-3xl p-10 flex flex-col items-center justify-center min-h-[300px] shadow-xl border-2 border-orange-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-orange-500"></div>
              <h3 className="text-2xl font-bold text-orange-600 mb-4">코레이즈</h3>
              <ul className="text-gray-800 space-y-3 text-left font-medium">
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>컨설팅 기반의 맞춤형 제안</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>전담 엔지니어의 책임 기술지원</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>통합 유지보수 및 자산관리</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-gray-50 px-6 py-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-slate-800"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 우리 회사 IT 상태를<br />점검해보세요
          </h2>
          <p className="text-lg text-orange-100 mb-10 opacity-90">
            3분 진단으로 맞춤형 IT 전략을 받아보세요
          </p>
          <Link
            to="/diagnosis"
            className="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition-transform hover:scale-105"
          >
            무료 IT 진단 시작하기
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

export default Home;
