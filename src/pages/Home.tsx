import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Server, Building2, ShieldCheck, Settings, ChevronDown, ChevronUp, MessageCircle, ArrowUp, MousePointer2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scenarios = [
    {
      id: 1,
      title: '시나리오1\n: 성장하는 스타트업/스케일업',
      desc: '창업자 1-2명에서 조직이 커지면서 IT 인프라가 필요해졌어요',
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      path: '/solutions/startup'
    },
    {
      id: 2,
      title: '시나리오2\n: 기존 시스템 고도화/이전',
      desc: '레거시 시스템을 업그레이드 하면서 기존 운영에 영향을 최소화하고 싶어요',
      icon: <Server className="w-6 h-6 text-green-500" />,
      path: '/solutions/sme'
    },
    {
      id: 3,
      title: '시나리오3\n: 중견/대기업 사옥 이전 및 확장',
      desc: '오피스 이전하거나 확장하면서 IT 인프라를 재구축해야 해요',
      icon: <Building2 className="w-6 h-6 text-orange-500" />,
      path: '/solutions/enterprise'
    },
    {
      id: 4,
      title: '시나리오4\n: 보안/인증 대응',
      desc: 'ISMS-P, ISO, 또는 고객사 보안 요구사항을 충족해야 해요',
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
      path: '/solutions/security'
    },
    {
      id: 5,
      title: '시나리오5\n: 자산/유지보수 운영',
      desc: '하드웨어 조달부터 자산 추적, 지속적 유지보수까지 통합 관리가 필요해요',
      icon: <Settings className="w-6 h-6 text-gray-500" />,
      path: '/solutions/maintenance'
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
    <div className="bg-white font-sans overflow-hidden">
      {/* Dynamic Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            style={{ y: y1, x: -50 }} 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ y: y2, x: 100 }} 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          />
          
          {/* Floating Icons */}
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-[20%] opacity-20"
          >
            <Server className="w-16 h-16 text-white" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 30, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-[15%] opacity-20"
          >
            <ShieldCheck className="w-20 h-20 text-white" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/3 left-[10%] opacity-10"
          >
            <Settings className="w-12 h-12 text-white" />
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-200 mb-6 backdrop-blur-sm">
              Total IT Consulting Partner
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Smart IT</span> for<br />
              <span className="text-white">Your Business Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              복잡한 IT 인프라, 보안, 클라우드까지.<br className="hidden md:block" />
              코레이즈가 기업 성장에 필요한 최적의 IT 환경을 구축해 드립니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/diagnosis"
                className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  무료 IT 진단 시작하기 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/services/network"
                className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                서비스 둘러보기
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 text-sm"
        >
          <span className="mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Scenarios Section with Scroll Animation */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              어떤 고민이 있으신가요?
            </h2>
            <p className="text-xl text-gray-600">
              기업의 성장 단계와 상황에 맞는 최적의 솔루션을 제안합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scenarios.map((scenario, idx) => (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link 
                  to={scenario.path}
                  className="block bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-10 -mt-10 transition-colors group-hover:bg-orange-50"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-md transition-all">
                      {scenario.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 whitespace-pre-line leading-snug">{scenario.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-8">
                      {scenario.desc}
                    </p>
                    <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-orange-600 transition-colors">
                      솔루션 확인하기 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">2,600+</div>
              <div className="text-gray-400 font-medium">고객사</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-gray-400 font-medium">재계약률</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-400 font-medium">기술 지원</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              왜 코레이즈여야 할까요?
            </h2>
            <p className="text-xl text-gray-600">
              단순 판매가 아닌, 기업의 성장을 돕는 파트너입니다.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Competitor */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 rounded-3xl p-12 flex flex-col justify-center min-h-[400px]"
            >
              <h3 className="text-2xl font-bold text-gray-500 mb-8 pb-4 border-b border-gray-200">일반적인 IT 업체</h3>
              <ul className="space-y-6">
                <li className="flex items-start text-gray-500">
                  <span className="mr-4 text-xl">❌</span>
                  <span className="text-lg">단순 하드웨어/소프트웨어 판매에 그침</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-4 text-xl">❌</span>
                  <span className="text-lg">문제 발생 시 제조사로 책임 전가 (핑퐁)</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-4 text-xl">❌</span>
                  <span className="text-lg">파편화된 계약 관리로 담당자 업무 가중</span>
                </li>
              </ul>
            </motion.div>

            {/* Coraise */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900 rounded-3xl p-12 flex flex-col justify-center min-h-[400px] relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-white/10 relative z-10">
                <span className="text-blue-400">CORAISE</span>
              </h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start text-white">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <span className="text-lg font-medium">컨설팅 기반의 기업 맞춤형 제안</span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <span className="text-lg font-medium">전담 엔지니어의 책임 기술지원 (One-Stop)</span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <span className="text-lg font-medium">통합 유지보수 및 자산관리 시스템 제공</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-900">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-blue-500" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-blue-50/50 px-8 py-6 text-gray-600 leading-relaxed border-t border-gray-100"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            지금 바로<br />
            <span className="text-blue-400">무료 IT 진단</span>을 받아보세요
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-12"
          >
            전문 컨설턴트가 귀사의 IT 환경을 분석하고 최적의 전략을 제안해 드립니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/diagnosis"
              className="inline-flex items-center bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:bg-blue-500 transition-all hover:scale-105 hover:shadow-blue-500/30"
            >
              무료 진단 시작하기 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <Link to="/qna" className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">문의하기</span>
        </Link>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white hover:bg-gray-100 text-gray-800 p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center border border-gray-200"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Home;
