import React, { useState, useEffect, useRef } from 'react';
import { Send, Phone, Mail, X, CheckCircle } from 'lucide-react';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    type: '요양시설 도입 (B2B)',
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  /**
   * Google Form 연동 설정
   * 보내주신 링크를 기반으로 ID와 Entry 번호를 정확히 매핑했습니다.
   */
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfkq6iutiOTRYnxy2MydIwe66MMGM7E664_AcjBMxNkk0wMxg/formResponse";
  
  const ENTRY_IDS = {
    type: "entry.485313090",      // 문의유형 (추가됨)
    name: "entry.2005620554",     // 성명 / 기업명
    contact: "entry.1166974658",  // 연락처
    email: "entry.1045781291",    // 이메일
    message: "entry.839337160"    // 문의내용
  };

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    // 폼은 hidden_iframe을 통해 제출됩니다.
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Hidden Iframe: To prevent page redirect after submission */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
        ref={iframeRef}
      ></iframe>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors z-20"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Left Side: Branding & Info */}
          <div className="bg-light p-8 md:p-10 md:w-1/3 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                도입 문의
              </h2>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                허그닉스 솔루션 도입을 원하시거나 <br/>
                제휴를 희망하신다면 문의를 남겨주세요. <br/>
                담당자가 확인 후 즉시 연락드립니다.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3 text-gray-600">
                <div className="p-2 bg-white rounded-full shadow-sm shrink-0">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-bold">CS Center</div>
                  <div className="font-bold text-sm">02-1234-5678</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600">
                <div className="p-2 bg-white rounded-full shadow-sm shrink-0">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-bold">Email</div>
                  <div className="font-bold text-sm">contact@hugnics.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="p-8 md:p-10 md:w-2/3 bg-white flex items-center justify-center">
            {!isSubmitted ? (
              <form 
                action={GOOGLE_FORM_ACTION_URL}
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit} 
                className="w-full space-y-5"
              >
                {/* 1. 문의 유형 (Hidden input for actual submission + Custom buttons for UI) */}
                <input type="hidden" name={ENTRY_IDS.type} value={formState.type} />
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">문의 유형</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['요양시설 도입 (B2B)', '개인 구매 (B2C)', '투자 및 제휴'].map((typeOption) => (
                      <button
                        type="button"
                        key={typeOption}
                        onClick={() => setFormState({ ...formState, type: typeOption })}
                        className={`py-2 px-1 text-xs sm:text-sm border rounded-lg transition-colors ${
                          formState.type === typeOption
                            ? 'border-primary bg-orange-50 text-primary font-bold shadow-sm'
                            : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {typeOption}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 2. 성명 / 기업명 */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름 / 기업명</label>
                    <input
                      type="text"
                      name={ENTRY_IDS.name}
                      id="name"
                      required
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                      placeholder="홍길동 / (주)기업명"
                      onChange={handleChange}
                    />
                  </div>
                  {/* 3. 연락처 */}
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                    <input
                      type="text"
                      name={ENTRY_IDS.contact}
                      id="contact"
                      required
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                      placeholder="010-1234-5678"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* 4. 이메일 */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                  <input
                    type="email"
                    name={ENTRY_IDS.email}
                    id="email"
                    required
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                    placeholder="example@hugnics.com"
                    onChange={handleChange}
                  />
                </div>

                {/* 5. 문의 내용 */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                  <textarea
                    id="message"
                    name={ENTRY_IDS.message}
                    rows={4}
                    required
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-sm"
                    placeholder="문의 내용을 입력해주세요."
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold text-base py-3.5 rounded-lg hover:bg-orange-700 transition-all shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>문의하기</span>
                    <Send size={18} />
                  </button>
                </div>
                
                <p className="text-[10px] text-gray-400 text-center">
                  개인정보는 문의 처리 목적으로만 사용됩니다.
                </p>
              </form>
            ) : (
              /* Success Message View */
              <div className="text-center animate-fade-in py-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full text-green-600 mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">문의가 접수되었습니다!</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  소중한 문의 감사합니다.<br/>
                  담당자가 내용을 확인한 후 <br/>
                  최대한 빠르게 연락드리겠습니다.
                </p>
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-secondary text-white rounded-lg font-bold hover:bg-black transition-colors"
                >
                  확인
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;