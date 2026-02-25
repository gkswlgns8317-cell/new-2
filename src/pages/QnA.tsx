import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle, Lock, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const QnA = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Form state
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    content: '',
    author: '',
    password: '',
    isSecret: true
  });

  const [questions, setQuestions] = useState([
    { id: 1, status: '답변완료', title: 'SaaS 통합 관리 솔루션 견적 문의드립니다.', author: '김**', date: '2024.03.15', isSecret: true },
    { id: 2, status: '답변완료', title: '스타트업 패키지 구성 변경이 가능한가요?', author: '이**', date: '2024.03.14', isSecret: false },
    { id: 3, status: '대기중', title: 'ISMS-P 인증 컨설팅 기간 문의', author: '박**', date: '2024.03.14', isSecret: true },
    { id: 4, status: '답변완료', title: '기존 AD 서버 마이그레이션 지원 여부', author: '최**', date: '2024.03.12', isSecret: false },
    { id: 5, status: '답변완료', title: '네트워크 유지보수 SLA 기준이 궁금합니다.', author: '정**', date: '2024.03.10', isSecret: true },
  ]);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewQuestion(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuestion(prev => ({ ...prev, isSecret: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.title || !newQuestion.author || !newQuestion.password) {
      alert('필수 항목을 입력해주세요.');
      return;
    }

    const question = {
      id: questions.length + 1,
      status: '대기중',
      title: newQuestion.title,
      author: newQuestion.author.substring(0, 1) + '**',
      date: new Date().toLocaleDateString('ko-KR').replace(/\.$/, ''), // YYYY. MM. DD format
      isSecret: newQuestion.isSecret
    };

    setQuestions([question, ...questions]);
    setNewQuestion({
      title: '',
      content: '',
      author: '',
      password: '',
      isSecret: true
    });
    setIsModalOpen(false);
    alert('질문이 등록되었습니다.');
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
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-bold text-sm transition-colors flex items-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            질문하기
          </button>
        </div>
        
        <div className="space-y-0 border-t border-gray-200 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full py-6 text-left flex justify-between items-center focus:outline-none group"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                    <span className="text-orange-500 font-bold mr-2">Q.</span>
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
                        <span className="text-blue-600 font-bold mr-2">A.</span>
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

        {/* Answer List Section */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-gray-900">최근 답변 목록</h2>
            <button 
              onClick={() => setIsAdmin(!isAdmin)}
              className={`text-xs px-3 py-1 rounded border transition-colors ${isAdmin ? 'bg-gray-800 text-white border-gray-800' : 'text-gray-400 border-gray-200 hover:border-gray-400'}`}
            >
              {isAdmin ? '관리자 모드 ON' : '관리자 모드 OFF'}
            </button>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-gray-50 py-3 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
              <div className="col-span-2 md:col-span-1 text-center">상태</div>
              <div className="col-span-6 md:col-span-7">제목</div>
              <div className="col-span-2 text-center">작성자</div>
              <div className="col-span-2 text-center">날짜</div>
            </div>
            <div className="divide-y divide-gray-100">
              {questions.map((item) => (
                <div key={item.id} className="grid grid-cols-12 py-4 px-6 text-sm hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="col-span-2 md:col-span-1 text-center flex justify-center items-center">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                      item.status === '답변완료' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="col-span-6 md:col-span-7 text-gray-900 font-medium truncate pr-4 flex items-center">
                    {item.isSecret && !isAdmin ? (
                      <span className="flex items-center text-gray-400">
                        <Lock className="w-3 h-3 mr-2" />
                        비공개 글입니다.
                      </span>
                    ) : (
                      <>
                        {item.isSecret && <Lock className="w-3 h-3 mr-2 text-orange-500" />}
                        {item.title}
                      </>
                    )}
                  </div>
                  <div className="col-span-2 text-center text-gray-500 flex items-center justify-center">
                    {item.author}
                  </div>
                  <div className="col-span-2 text-center text-gray-400 text-xs flex items-center justify-center">
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">
              더 많은 질문 보기
            </button>
          </div>
        </div>
      </div>

      {/* Question Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                  <h3 className="font-bold text-lg text-gray-900">문의하기</h3>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">제목 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="title"
                      value={newQuestion.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="문의 제목을 입력해주세요"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">작성자 <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        name="author"
                        value={newQuestion.author}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="이름"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">비밀번호 <span className="text-red-500">*</span></label>
                      <input 
                        type="password" 
                        name="password"
                        value={newQuestion.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="비밀번호"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">내용</label>
                    <textarea 
                      name="content"
                      value={newQuestion.content}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                      placeholder="문의하실 내용을 자세히 적어주세요."
                    />
                  </div>

                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="isSecret"
                      name="isSecret"
                      checked={newQuestion.isSecret}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor="isSecret" className="ml-2 text-sm text-gray-600 flex items-center">
                      <Lock className="w-3 h-3 mr-1" /> 비밀글로 작성 (관리자만 볼 수 있습니다)
                    </label>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition-colors shadow-md"
                    >
                      문의 등록하기
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
