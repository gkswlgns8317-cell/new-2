import React from 'react';
import { HelpCircle, MessageCircle, FileText } from 'lucide-react';

interface SupportPageProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenContact: () => void;
}

const SupportPage: React.FC<SupportPageProps> = ({ activeTab, onTabChange, onOpenContact }) => {
  const faqs = [
    {
      q: "카메라가 정말 없나요?",
      a: "네, 허그닉스 센서는 광학 카메라가 아닌 전파(Radar)를 사용합니다. 따라서 영상 촬영이나 녹화가 불가능하며, 사생활 침해 걱정이 없습니다."
    },
    {
      q: "반려동물도 감지하나요?",
      a: "AI 알고리즘이 사람의 호흡과 움직임 패턴만을 선별하여 감지합니다. 강아지나 고양이의 움직임으로 인한 오작동을 최소화했습니다."
    }
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
           <span className="text-primary font-bold tracking-wider text-sm uppercase">Support</span>
           <h1 className="text-4xl font-bold text-gray-900 mt-2">무엇을 도와드릴까요?</h1>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
           <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer" onClick={onOpenContact}>
              <div className="bg-white p-3 rounded-xl shadow-sm mb-4 text-primary">
                 <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1:1 문의하기</h3>
              <p className="text-gray-600 mb-4">
                 제품 도입이나 제휴 관련하여 궁금한 점이 있으신가요?<br/>담당자가 신속하게 답변해 드립니다.
              </p>
              <span className="text-primary font-bold text-sm">문의 남기기 &rarr;</span>
           </div>
           
           <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="bg-white p-3 rounded-xl shadow-sm mb-4 text-secondary">
                 <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">사용자 매뉴얼</h3>
              <p className="text-gray-600 mb-4">
                 제품 설치 방법부터 앱 연동까지,<br/>자세한 사용 방법을 확인해보세요.
              </p>
              <span className="text-secondary font-bold text-sm cursor-pointer hover:underline">다운로드 (PDF) &rarr;</span>
           </div>
        </div>

        {/* FAQ Section */}
        <div>
           <div className="flex items-center gap-2 mb-8">
              <HelpCircle className="text-primary" />
              <h2 className="text-2xl font-bold text-secondary">자주 묻는 질문 (FAQ)</h2>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                 <div key={idx} className="border border-gray-200 rounded-xl p-6 bg-white hover:border-gray-300 transition-colors">
                    <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-start">
                       <span className="text-primary mr-2">Q.</span>
                       {faq.q}
                    </h4>
                    <p className="text-gray-600 pl-6 leading-relaxed">
                       {faq.a}
                    </p>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default SupportPage;