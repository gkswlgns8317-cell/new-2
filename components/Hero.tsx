import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onNavigate: (page: string, subTab?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact, onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background with the requested Hugging Family Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1920"
          alt="Warm hug between child and elderly parents"
          className="w-full h-full object-cover"
        />
        {/* Softening overlays to match the clean corporate look */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-primary px-4 py-1.5 rounded-full text-[13px] font-bold tracking-tight mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            HUGNICS INVISIBLE CARE
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-secondary leading-[1.15] mb-8">
            "지켜드리고 싶지만,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              훔쳐볼 순 없으니까."
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed font-medium max-w-2xl">
            가장 개인적인 공간에서의 낙상사고, 이제 카메라 없이 지키세요.<br />
            <strong>허그닉스 mmWave 레이더</strong>가 부모님의 존엄과 안전을 동시에 안아드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-orange-700 transition-all shadow-2xl shadow-primary/30 transform hover:-translate-y-1"
            >
              무료 체험단 신청하기
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
            </button>

            <button
              onClick={() => window.open('https://hugnics-web-926013440113.us-west1.run.app/', '_blank')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-black transition-all shadow-xl"
            >
              <Settings size={20} />
              무료 체험 미리보기
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;