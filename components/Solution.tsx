import React from 'react';

const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-primary font-black tracking-[0.2em] text-xs uppercase mb-4 block animate-fade-in">Our Philosophy</span>
          <h2 className="text-4xl md:text-6xl font-black text-secondary leading-tight mb-6">
            보이지 않는 곳에서,<br />더 따뜻하게 안아드립니다.
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Philosophy Points: Menu Style Grid - Refined spacing since image is removed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          {/* Philosophy 1 */}
          <div className="flex flex-col group p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
             <div className="text-7xl font-black text-primary/10 mb-6 group-hover:text-primary/20 transition-colors leading-none font-sans">01</div>
             <h3 className="text-2xl font-bold text-secondary mb-5">CCTV는 부담스럽습니다</h3>
             <p className="text-gray-600 text-base leading-relaxed">
                부모님도 자녀가 자신의 일상을 생생하게 지켜보는 것이 불편할 수 있습니다. 
                감시받는 느낌 대신 존중받는 안전을 드리는 것이 허그닉스의 시작입니다.
             </p>
          </div>

          {/* Philosophy 2 */}
          <div className="flex flex-col group p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
             <div className="text-7xl font-black text-primary/10 mb-6 group-hover:text-primary/20 transition-colors leading-none font-sans">02</div>
             <h3 className="text-2xl font-bold text-secondary mb-5">레이더는 '점'으로만 인식합니다</h3>
             <p className="text-gray-600 text-base leading-relaxed">
                이미지나 영상을 남기지 않고 오직 움직임의 궤적만을 데이터로 분석하여 안전을 판별합니다. 
                부모님의 사생활을 지키면서도 보호의 골든타임은 놓치지 않습니다.
             </p>
          </div>

          {/* Philosophy 3 */}
          <div className="flex flex-col group p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
             <div className="text-7xl font-black text-primary/10 mb-6 group-hover:text-primary/20 transition-colors leading-none font-sans">03</div>
             <h3 className="text-2xl font-bold text-secondary mb-5">가장 개인적인 공간이 가장 위험한 공간</h3>
             <p className="text-gray-600 text-base leading-relaxed">
                욕실 낙상 사고는 전체 실내 사고의 40% 이상입니다. 
                이제 프라이버시 침해 걱정 없이 가장 위험한 곳에 가장 따뜻한 기술을 설치하세요.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;