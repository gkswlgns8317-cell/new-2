import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronRight, ArrowRight, RefreshCw, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Diagnosis = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const totalQuestions = 6;

  const questions = [
    {
      id: 1,
      question: "현재 직원 수는 어떻게 되나요?",
      options: ["1-20명", "21-100명", "101-500명", "500명 이상"],
      type: "select"
    },
    {
      id: 2,
      question: "현재 클라우드 서비스를 사용 중이신가요?",
      options: ["사용 중이며 체계적으로 관리됨", "사용 중이나 관리가 안 됨", "일부만 사용 중", "사용하지 않음"],
      type: "select"
    },
    {
      id: 3,
      question: "보안 솔루션을 도입하셨나요?",
      options: ["포괄적인 보안 체계 구축됨", "기본적인 보안만 있음", "최소한의 보안만 있음", "없음"],
      type: "select"
    },
    {
      id: 4,
      question: "IT 예산 규모는 어떻게 되나요?",
      options: ["월 500만원 미만", "월 500-2,000만원", "월 2,000만원 이상", "필요에 따라 조정 가능"],
      type: "select"
    },
    {
      id: 5,
      question: "IT 인프라 구축/개선이 필요한 시기는?",
      options: ["즉시 (1개월 이내)", "빠른 시일 내 (1-3개월)", "계획 중 (3-6개월)", "탐색 단계"],
      type: "select"
    },
    {
      id: 6,
      question: "업종/업태/도메인",
      placeholder: "귀사의 업종, 업태, 또는 도메인을 기재해주세요",
      type: "input"
    }
  ];

  const handleAnswer = (answer: any) => {
    setAnswers({ ...answers, [step]: answer });
    if (step < totalQuestions) {
      setStep(step + 1);
      setInputValue(''); // Reset input for next step if needed
    } else {
      analyzeResult();
    }
  };

  const handleInputSubmit = () => {
    if (inputValue.trim()) {
      handleAnswer(inputValue);
    }
  };

  const analyzeResult = () => {
    setIsSubmitting(true);
    // Simulate analysis
    setTimeout(() => {
      setIsSubmitting(false);
      setShowResult(true);
    }, 1500);
  };

  const getDiagnosisResult = () => {
    const employeeCount = answers[1];
    let stage = "성장 단계";
    let description = "체계적인 IT 관리와 보안 강화가 필요한 시점입니다.";
    let color = "text-emerald-600";
    let bg = "bg-emerald-600";
    let percent = 50;

    if (employeeCount === "1-20명") {
      stage = "창업 초기";
      description = "빠른 비즈니스 전개를 위한 기초 IT 환경 구축이 필요합니다.";
      color = "text-blue-600";
      bg = "bg-blue-600";
      percent = 15;
    } else if (employeeCount === "500명 이상" || employeeCount === "101-500명") {
      stage = "확장 단계";
      description = "대규모 조직에 맞는 통합 IT 관리 체계와 엔터프라이즈급 솔루션이 필요합니다.";
      color = "text-purple-600";
      bg = "bg-purple-600";
      percent = 85;
    }

    return { stage, description, color, bg, percent };
  };

  const resultData = getDiagnosisResult();

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConsultation(false);
    setShowComplete(true);
  };

  // Render Functions
  const renderProgressBar = () => (
    <div className="w-full max-w-3xl mb-12">
      <div className="flex justify-between text-xs font-medium text-gray-400 mb-2">
        <span>{step} / {totalQuestions}</span>
        <span>{Math.round(((step - 1) / totalQuestions) * 100)}% 완료</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <motion.div 
          className="bg-teal-500 h-1.5 rounded-full" 
          initial={{ width: 0 }}
          animate={{ width: `${((step - 1) / totalQuestions) * 100}%` }}
        />
      </div>
    </div>
  );

  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <RefreshCw className="w-12 h-12 text-orange-600 animate-spin mb-6" />
        <h2 className="text-2xl font-bold text-gray-900">진단 결과를 분석 중입니다...</h2>
        <p className="text-gray-500 mt-2">잠시만 기다려주세요.</p>
      </div>
    );
  }

  if (showComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 px-4 flex items-center justify-center font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-10 text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">상담 신청이 완료되었습니다</h2>
          <p className="text-gray-600 mb-8">
            곧 전문 컨설턴트가 연락드리겠습니다.<br/>
            평균 <span className="text-orange-600 font-bold">2시간 이내</span>에 답변드립니다.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 text-left mb-8 border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 text-sm">상담 전 준비하시면 좋은 사항</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-gray-400 mr-2 mt-0.5" />
                현재 사용 중인 IT 자산 목록
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-gray-400 mr-2 mt-0.5" />
                주요 IT 문제점 및 개선 사항
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-gray-400 mr-2 mt-0.5" />
                IT 예산 및 일정
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-left bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h4 className="font-bold text-xs text-gray-500 mb-1">담당자 정보</h4>
              <p className="text-sm text-gray-900">이름: 홍길동</p>
              <p className="text-sm text-gray-900">문의메일: project@coraise.com</p>
              <p className="text-sm text-gray-900">전화번호: 02-1234-5678</p>
            </div>
          </div>

          <Link 
            to="/"
            className="mt-8 inline-block w-full bg-orange-600 text-white py-4 rounded-lg font-bold hover:bg-orange-700 transition-colors"
          >
            메인으로 돌아가기
          </Link>
        </motion.div>
      </div>
    );
  }

  if (showConsultation) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 px-4 flex items-center justify-center font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8 border-b border-gray-100 text-center">
            <h2 className="text-2xl font-bold text-gray-900">상담 신청</h2>
            <p className="text-gray-500 text-sm mt-1">전문 컨설턴트가 상세한 분석과 견적을 제공해드립니다</p>
          </div>
          <form onSubmit={handleConsultationSubmit} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">이메일 *</label>
              <input 
                type="email" 
                required 
                placeholder="example@company.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">전화번호 *</label>
              <input 
                type="tel" 
                required 
                placeholder="010-1234-5678"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">요청사항</label>
              <textarea 
                placeholder="내용을 입력해주세요"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-gray-50 resize-none"
              />
            </div>
            
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-orange-600 text-white py-4 rounded-lg font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200"
              >
                견적 상담 요청하기
              </button>
              <p className="text-xs text-gray-400 text-center mt-4">
                입력하신 정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">진단 결과</h1>
            <p className="text-gray-600">우리 회사의 현재 IT 상태와 개선 방안을 확인하세요</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8"
          >
            <div className="p-10 md:p-14 text-center">
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-6">
                IT 성숙도 평가
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                귀사는 <span className={resultData.color}>{resultData.stage}</span> 입니다
              </h2>
              <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                {resultData.description}
              </p>

              {/* Gauge Visualization */}
              <div className="relative max-w-2xl mx-auto mb-16 pt-8">
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full ${resultData.bg}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${resultData.percent}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <div className="flex justify-between text-xs font-medium text-gray-400 mt-3">
                  <span>창업 초기</span>
                  <span>성장 단계</span>
                  <span>확장 단계</span>
                </div>
                {/* Marker */}
                <motion.div 
                  className="absolute top-0 w-0.5 h-6 bg-gray-900"
                  initial={{ left: 0 }}
                  animate={{ left: `${resultData.percent}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="absolute -top-8 -left-6 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-md whitespace-nowrap">
                    You
                    <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h3 className="flex items-center font-bold text-green-800 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    강점
                  </h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      클라우드를 체계적으로 관리하고 있음
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      보안에 대한 인식이 높음
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h3 className="flex items-center font-bold text-red-800 mb-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    개선 필요 사항
                  </h3>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      성장 단계에 맞는 확장 가능한 인프라 필요
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      IT 거버넌스 체계 수립 필요
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-600 p-10 md:p-14 text-center">
              <h3 className="text-2xl font-bold text-white mb-10">권장 IT 전략</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl text-left shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">하이브리드 클라우드</h4>
                  <p className="text-sm text-gray-500">유연성과 보안을 동시에 확보</p>
                </div>
                <div className="bg-white p-5 rounded-xl text-left shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">제로 트러스트 보안</h4>
                  <p className="text-sm text-gray-500">모든 접근을 검증하여 보안 강화</p>
                </div>
                <div className="bg-white p-5 rounded-xl text-left shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">SaaS 통합 관리</h4>
                  <p className="text-sm text-gray-500">비용 최적화 및 운영 효율성 증대</p>
                </div>
                <div className="bg-white p-5 rounded-xl text-left shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">IT 자산 관리 자동화</h4>
                  <p className="text-sm text-gray-500">실시간 자산 현황 파악 및 관리</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <button 
              onClick={() => setShowConsultation(true)}
              className="inline-flex items-center bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:bg-orange-700 transition-transform hover:scale-105"
            >
              맞춤 견적 상담 신청하기 <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <p className="text-gray-500 text-sm mt-4">전문 컨설턴트가 상세한 분석과 전략을 제공해드립니다</p>
          </div>
        </div>
      </div>
    );
  }

  // Wizard Step
  const currentQuestion = questions[step - 1];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center font-sans">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">3분 IT 진단</h1>
        <p className="text-gray-500">몇 가지 질문으로 우리 회사에 맞는 IT 전략을 추천해드립니다</p>
      </div>

      {renderProgressBar()}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-3xl"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-10 leading-tight">
              {currentQuestion.question}
            </h2>

            {currentQuestion.type === 'select' ? (
              <div className="space-y-3">
                {currentQuestion.options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-5 rounded-xl border border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all group flex items-center justify-between"
                  >
                    <span className="text-lg font-medium text-gray-700 group-hover:text-teal-700">{option}</span>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className="w-full p-5 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-lg transition-all"
                  onKeyDown={(e) => e.key === 'Enter' && handleInputSubmit()}
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleInputSubmit}
                    disabled={!inputValue.trim()}
                    className={`flex items-center px-6 py-3 rounded-lg font-bold transition-colors ${
                      inputValue.trim() 
                        ? 'bg-teal-500 text-white hover:bg-teal-600' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    다음 질문 <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            <div className="mt-10 flex justify-between items-center">
              {step > 1 ? (
                <button 
                  onClick={() => setStep(step - 1)}
                  className="flex items-center text-gray-400 hover:text-gray-600 font-medium px-2 py-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" /> 이전 질문
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400 flex items-center justify-center">
              <Lock className="w-3 h-3 mr-1" /> 입력하신 정보는 안전하게 보호됩니다
            </p>
            <p className="text-xs text-gray-400 mt-1">
              이미 <span className="font-bold text-teal-600">2,600+</span> 기업이 진단을 받았습니다
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Helper icon component for the footer
const Lock = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

export default Diagnosis;

