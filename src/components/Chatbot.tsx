import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, Send, Menu, MessageCircle, ArrowUp, Minus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

type Message = {
  id: number;
  type: 'bot' | 'user';
  text?: string;
  component?: React.ReactNode;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showKakaoMessage, setShowKakaoMessage] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      text: '안녕하세요.\n코레이즈 서비스 이용에 도움이 필요하신가요?\n메뉴에서 원하시는 문의사항을 선택해 주세요.'
    },
    {
      id: 2,
      type: 'bot',
      text: '원하시는 문의사항이 없는 경우,\n\'직접 질문 입력하기\' 버튼을 이용해 주세요.'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showQuickMenu, setShowQuickMenu] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showQuickMenu]);

  const handleKakaoClick = () => {
    setShowKakaoMessage(true);
    setTimeout(() => {
      setShowKakaoMessage(false);
    }, 3000);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newUserMsg: Message = {
      id: Date.now(),
      type: 'user',
      text: text
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    
    // Simulate bot response
    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        type: 'bot',
        text: '문의 내용이 접수되었습니다. 담당자가 확인 후 빠르게 답변 드리겠습니다.'
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  const handleQuickMenuClick = (menu: string) => {
    // Add user selection message
    // setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: menu }]);

    if (menu === '무료 IT 진단 신청') {
      navigate('/diagnosis');
      setIsOpen(false);
      return;
    }

    let subOptions: string[] = [];
    let title = menu;

    switch (menu) {
      case '서비스 안내':
        subOptions = ['네트워크 구축', '보안 시스템', '인프라 설계', '장비·소프트웨어 납품', '통합 IT 운영'];
        break;
      case '기술지원 / 운영 문의':
        subOptions = ['장애 접수', '원격 지원 요청', '유지보수 문의', '긴급 지원 요청'];
        break;
      case '견적·도입 문의':
        subOptions = ['신규 구축 문의', '기존 환경 개선', '유지보수 전환 문의', '빠른 견적 요청'];
        break;
      case '자료·회사 소개':
        subOptions = ['회사 소개서 다운로드', '포트폴리오 보기', '레퍼런스 문의', '인증·보유 기술'];
        break;
    }

    if (subOptions.length > 0) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now(),
          type: 'bot',
          component: (
            <div className="bg-gray-100 p-4 rounded-lg max-w-[85%]">
              <div className="font-bold text-sm mb-3 text-gray-800">□ {title}</div>
              <div className="space-y-2">
                {subOptions.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSubOptionClick(option)}
                    className="block w-full text-left bg-white px-4 py-3 rounded-md text-sm text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
        }]);
      }, 300);
    }
  };

  const handleSubOptionClick = (option: string) => {
    // Show form for specific options
    const formOptions = ['신규 구축 문의', '기존 환경 개선', '유지보수 전환 문의', '빠른 견적 요청', '장애 접수'];
    
    if (formOptions.includes(option)) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        component: <ContactForm title={option} onSubmit={() => {
           setMessages(p => [...p, { id: Date.now(), type: 'bot', text: '문의가 성공적으로 접수되었습니다.' }]);
        }} />
      }]);
    } else {
       setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        text: `'${option}'에 대한 상세 정보를 준비 중입니다. 상담원 연결을 원하시면 메시지를 남겨주세요.`
      }]);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-4">
      {/* Floating Buttons */}
      {!isOpen && (
        <div className="flex flex-col items-center space-y-3 relative">
          {/* Kakao Button */}
          <button 
            onClick={handleKakaoClick}
            className="w-14 h-14 bg-[#FEE500] rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-7 h-7 text-[#3C1E1E] fill-current" />
          </button>
          
          {/* Tooltip for Kakao Button */}
          <AnimatePresence>
            {showKakaoMessage && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute right-16 top-2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-xl whitespace-nowrap z-50 flex items-center"
              >
                <div className="absolute right-[-4px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                <span>아직 구축중입니다. 챗봇을 이용해주세요.</span>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Chatbot Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-white border-2 border-orange-500 rounded-full shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform overflow-hidden"
          >
             <span className="text-orange-600 font-bold text-xs mt-0.5">챗봇</span>
          </button>
        </div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white w-[380px] h-[600px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 font-sans"
          >
            {/* Header */}
            <div className="bg-gray-100 px-5 py-4 flex justify-between items-center border-b border-gray-200">
              <div>
                <h2 className="font-bold text-lg text-gray-800">챗봇 서비스</h2>
                <div className="flex items-center text-xs text-gray-500 mt-0.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                  봇과 대화중
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <Minus className="w-6 h-6" />
                </button>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto bg-white p-5 space-y-4 relative">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 mr-3 flex items-center justify-center border border-gray-300">
                       <span className="text-xs font-bold text-gray-600">Bot</span>
                    </div>
                  )}
                  <div className={`max-w-[85%] ${msg.component ? 'w-full' : ''}`}>
                    {msg.text && (
                      <div 
                        className={`p-3.5 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${
                          msg.type === 'user' 
                            ? 'bg-gray-800 text-white rounded-tr-none' 
                            : 'bg-gray-100 text-gray-800 rounded-tl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    )}
                    {msg.component}
                  </div>
                </div>
              ))}
              
              {/* Direct Question Button in Chat Stream */}
              {messages.length === 2 && (
                <div className="flex justify-end">
                   <button 
                    onClick={() => {
                        // Focus input or just scroll
                        document.getElementById('chat-input')?.focus();
                    }}
                    className="border border-orange-500 text-orange-600 bg-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 transition-colors"
                   >
                     직접 질문 입력하기
                   </button>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Menu (Persistent Footer) */}
            {showQuickMenu && (
              <div className="bg-white border-t border-gray-100">
                <div className="grid grid-cols-2 gap-px bg-gray-200 border-b border-gray-200">
                   {/* Top Row: 3 items? No, grid is 2x2 or custom. Let's do custom grid */}
                </div>
                <div className="flex flex-col">
                    <div className="flex border-b border-gray-200">
                        <button 
                            onClick={() => handleQuickMenuClick('무료 IT 진단 신청')}
                            className="flex-1 bg-[#D98C68] hover:bg-[#C57A56] text-white py-4 text-xs font-medium transition-colors border-r border-white/20"
                        >
                            무료 IT 진단 신청
                        </button>
                        <button 
                            onClick={() => handleQuickMenuClick('서비스 안내')}
                            className="flex-1 bg-[#D98C68] hover:bg-[#C57A56] text-white py-4 text-xs font-medium transition-colors border-r border-white/20"
                        >
                            서비스 안내
                        </button>
                        <button 
                            onClick={() => handleQuickMenuClick('견적·도입 문의')}
                            className="flex-1 bg-[#D98C68] hover:bg-[#C57A56] text-white py-4 text-xs font-medium transition-colors"
                        >
                            견적·도입 문의
                        </button>
                    </div>
                    <div className="flex">
                        <button 
                            onClick={() => handleQuickMenuClick('기술지원 / 운영 문의')}
                            className="flex-1 bg-[#D98C68] hover:bg-[#C57A56] text-white py-4 text-xs font-medium transition-colors border-r border-white/20"
                        >
                            기술지원 / 운영 문의
                        </button>
                        <button 
                            onClick={() => handleQuickMenuClick('자료·회사 소개')}
                            className="flex-1 bg-[#D98C68] hover:bg-[#C57A56] text-white py-4 text-xs font-medium transition-colors"
                        >
                            자료·회사 소개
                        </button>
                    </div>
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="bg-white p-3 border-t border-gray-200 flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Menu className="w-6 h-6" />
              </button>
              <input
                id="chat-input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                placeholder="메시지를 입력해 주세요."
                className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
              />
              <button 
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  inputValue.trim() ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-400'
                }`}
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactForm = ({ title, onSubmit }: { title: string, onSubmit: () => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
        onSubmit();
    }, 1000);
  };

  if (isSubmitted) {
    return (
        <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ArrowUp className="w-5 h-5 text-green-600 rotate-45" /> {/* Check icon replacement */}
            </div>
            <p className="text-sm font-bold text-gray-800">접수가 완료되었습니다.</p>
        </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
      <div className="bg-gray-100 py-2 px-3 -mx-5 -mt-5 mb-4 border-b border-gray-200">
        <span className="text-xs font-bold text-gray-600">카드 작성을 시작합니다.</span>
      </div>
      
      <h3 className="font-bold text-sm text-gray-800 mb-4">{title}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input 
            type="text" 
            placeholder="성함" 
            required
            className="w-full bg-gray-100 border-none rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <div>
          <input 
            type="tel" 
            placeholder="전화번호" 
            required
            className="w-full bg-gray-100 border-none rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="이메일" 
            required
            className="w-full bg-gray-100 border-none rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500"
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-[#D98C68] hover:bg-[#C57A56] text-white py-2 rounded-md text-sm font-bold transition-colors mt-2"
        >
          완료
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
