import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';

interface ProductProps {
  onOpenContact: () => void;
}

const Product: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-primary rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-orange-800 rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              지금, 부모님의 안전을 위한<br />첫 걸음을 시작하세요.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
              허그닉스는 현재 무료 체험단 및 사전 예약 신청을 받고 있습니다.<br />
              가장 먼저 특별한 혜택을 받아보세요.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-10 py-5 rounded-2xl text-base md:text-lg font-bold hover:bg-orange-700 transition-all shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1"
              >
                무료 체험단/사전 알림 신청하기
                <ArrowRight size={20} />
              </button>
              
              <button
                onClick={() => window.open('https://hugnics-web-926013440113.us-west1.run.app/', '_blank')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-base md:text-lg font-bold hover:bg-white/20 transition-all"
              >
                <Settings size={20} />
                무료 체험 미리보기
              </button>
            </div>

            <p className="text-gray-400 text-sm italic">
              * 신청 후 2~3일 이내에 개별 안내 연락을 드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;