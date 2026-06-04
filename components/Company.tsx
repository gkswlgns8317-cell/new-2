import React from 'react';

const Company: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 p-12 opacity-5">
            <svg width="400" height="400" viewBox="0 0 200 200">
                <path fill="currentColor" d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.3,-41.2C83.5,-26.8,87.7,-11.7,85.3,2.4C82.9,16.5,73.9,29.7,64.6,41.9C55.3,54.1,45.7,65.3,33.5,73.1C21.3,80.9,6.5,85.3,-7.4,83.9C-21.3,82.5,-34.3,75.3,-46.8,67.2C-59.3,59.1,-71.3,50.1,-79.8,38.2C-88.3,26.3,-93.3,11.5,-89.6,-1.6C-85.9,-14.7,-73.5,-26.1,-62.4,-36.5C-51.3,-46.9,-41.5,-56.3,-30.3,-64.5C-19.1,-72.7,-6.5,-79.7,7.8,-81.2L22.1,-82.7Z" transform="translate(100 100)" />
            </svg>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Our Mission</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              데이터로 <br/>
              노후의 존엄을 <br/>
              지킵니다.
            </h2>
          </div>
          <div>
             <p className="text-xl text-gray-300 leading-relaxed font-light border-l-4 border-primary pl-6">
              "우리는 누구나 안심하고 나이 들 수 있는 세상을 만듭니다." <br/><br/>
              허그닉스는 단순한 센서 제조사가 아닙니다. 
              돌봄의 공백을 기술로 채우고, 사람의 손길이 더 가치 있는 곳에 쓰이도록 돕는 
              에이징 테크(Aging-Tech) 스타트업입니다.
             </p>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-gray-800">
            <h3 className="text-2xl font-bold mb-10">History & Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                {/* Partner Logos Placeholders */}
                <div className="h-16 bg-white/10 rounded flex items-center justify-center font-bold text-lg hover:bg-white/20 transition-colors">KOREA Gov.</div>
                <div className="h-16 bg-white/10 rounded flex items-center justify-center font-bold text-lg hover:bg-white/20 transition-colors">Startup Nest</div>
                <div className="h-16 bg-white/10 rounded flex items-center justify-center font-bold text-lg hover:bg-white/20 transition-colors">S University Hospital</div>
                <div className="h-16 bg-white/10 rounded flex items-center justify-center font-bold text-lg hover:bg-white/20 transition-colors">Silver Care Assn.</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Company;