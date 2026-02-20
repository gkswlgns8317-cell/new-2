import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const QnA = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "Coraise는 어떤 서비스를 제공하나요?",
      answer: "Coraise는 스타트업, 중소기업, 엔터프라이즈를 위한 클라우드 마이그레이션, 보안 진단, 인프라 최적화, 디지털 전환 전략 등 다양한 IT 컨설팅 서비스를 제공합니다."
    },
    {
      question: "초기 진단 비용은 얼마인가요?",
      answer: "초기 IT 진단은 전액 무료입니다. 솔루션을 제안하기 전에 고객의 니즈를 파악하는 것이 중요하다고 믿기 때문입니다. 웹사이트에서 바로 진단을 시작할 수 있습니다."
    },
    {
      question: "지속적인 지원을 제공하나요?",
      answer: "네, 24/7 모니터링부터 온디맨드 기술 지원까지 다양한 지원 패키지를 제공합니다. 고객의 IT 인프라가 견고하고 효율적으로 유지되도록 돕는 것이 우리의 목표입니다."
    },
    {
      question: "원격 근무 환경 구축을 도와줄 수 있나요?",
      answer: "물론입니다. VPN, 협업 도구, 엔드포인트 보안을 포함하여 안전하고 효율적인 원격 근무 환경을 구축하는 데 전문성을 가지고 있습니다."
    },
    {
      question: "일반적인 컨설팅 프로젝트 기간은 얼마나 걸리나요?",
      answer: "프로젝트 기간은 범위와 복잡성에 따라 다릅니다. 간단한 진단은 며칠이 걸릴 수 있지만, 대규모 디지털 전환은 몇 달이 걸릴 수 있습니다. 제안 단계에서 상세한 일정을 제공합니다."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#6B6075] to-[#585060] py-24 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Q&A</h1>
          <p className="text-xl text-gray-200 mb-10">How Can We Help?</p>
          
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              className="w-full py-3 px-6 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-lg"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">FAQ</h2>
        
        <div className="space-y-0 border-t border-gray-200">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full py-6 text-left flex justify-between items-center focus:outline-none group"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                  )}
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-lg mb-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              검색 결과가 없습니다: "{searchQuery}"
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#D96B43] text-white px-8 py-3 rounded-md font-bold hover:bg-[#C55A32] transition-colors text-sm">
            자주 묻는 질문 더 보기
          </button>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-b from-[#5E6B88] to-[#4A5568] py-24 px-4 text-center text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            맞춤형 IT 전략을 받아보세요
          </h2>
          <Link 
            to="/diagnosis"
            className="bg-white text-gray-900 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            무료 IT 진단 시작하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QnA;
