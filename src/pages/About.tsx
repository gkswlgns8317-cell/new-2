import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, MessageCircle, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
  const solutions = [
    {
      title: "GotSales",
      desc: "매출 관리: 영업 프로세스 및 자산관리 통합",
      target: "적합 고객: 영업 조직이 있는 B2B 기업, 하드웨어 자산 추적 필요 기업",
      link: "#"
    },
    {
      title: "CoWork.Day",
      desc: "협업 툴: 그룹웨어 및 협업 도구 통합",
      target: "적합 고객: 성장하는 조직, 원격/하이브리드 근무 환경",
      link: "#"
    },
    {
      title: "AD 관리 솔루션 번들",
      desc: "계정 관리: Active Directory 계정/권한 관리 자동화",
      target: "적합 고객: Windows 기반 조직, 계정 생명주기 관리 필요 기업",
      link: "#"
    },
    {
      title: "[추가 솔루션]",
      desc: "채용 관리: (초기 솔루션 플레이스홀더)",
      target: "적합 고객: (타겟 고객 프로필)",
      link: "#"
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
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{sol.title}</h3>
                <div className="space-y-3 mb-8">
                  <p className="text-sm text-gray-800 font-medium whitespace-pre-line">{sol.desc}</p>
                  <p className="text-xs text-gray-500 whitespace-pre-line">{sol.target}</p>
                </div>
                <button className="text-xs font-bold text-white bg-slate-600 px-4 py-2 rounded hover:bg-slate-700 transition-colors flex items-center w-fit">
                  서비스에서 적용 예시 보기 <ArrowRight className="ml-1 w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">파트너사</h2>
          <p className="text-gray-600 mb-12">글로벌 IT 기업들과의 파트너십으로 최고의 솔루션을 제공합니다</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="aspect-square bg-blue-50 rounded-lg"></div>
            ))}
            <div className="aspect-square bg-gray-100 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:bg-gray-200 cursor-pointer transition-colors">
              <Plus className="w-8 h-8 mb-1" />
              <span className="text-xs">더보기</span>
            </div>
          </div>
        </div>
      </section>

      {/* Header of CORAISE */}
      <section className="py-24 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-gray-500 uppercase tracking-widest">The Header of CORAISE</h2>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/seed/leader1/600/400?grayscale" 
                alt="Leadership 1" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://picsum.photos/seed/leader2/600/400?grayscale" 
                alt="Leadership 2" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img src="https://picsum.photos/seed/office1/800/800" alt="Office" className="w-full h-full object-cover rounded-lg" referrerPolicy="no-referrer" />
            </div>
            <div>
              <img src="https://picsum.photos/seed/office2/400/400" alt="Office" className="w-full h-full object-cover rounded-lg" referrerPolicy="no-referrer" />
            </div>
            <div>
              <img src="https://picsum.photos/seed/office3/400/400" alt="Office" className="w-full h-full object-cover rounded-lg" referrerPolicy="no-referrer" />
            </div>
            <div className="col-span-2">
              <img src="https://picsum.photos/seed/office4/800/400" alt="Office" className="w-full h-full object-cover rounded-lg" referrerPolicy="no-referrer" />
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
