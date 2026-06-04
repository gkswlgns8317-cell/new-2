import React from 'react';
import { Shield, Zap, EyeOff, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <EyeOff size={32} />,
      title: "100% 프라이버시 보호",
      desc: "렌즈가 없는 레이더 센서 방식으로 화장실, 안방 등 사적인 공간에도 거부감 없이 설치 가능합니다."
    },
    {
      icon: <Zap size={32} />,
      title: "정교한 낙상 감지",
      desc: "단순한 움직임 감지를 넘어, 레이더 파형 분석을 통해 실제 낙상 사고를 99% 정확도로 식별합니다."
    },
    {
      icon: <Shield size={32} />,
      title: "24/7 실시간 모니터링",
      desc: "어두운 밤에도, 습기가 가득한 욕실에서도 레이더는 멈추지 않고 부모님의 안위를 살핍니다."
    },
    {
      icon: <Smartphone size={32} />,
      title: "즉각적인 알림 발송",
      desc: "이상이 감지되는 즉시 보호자의 스마트폰으로 알림을 보내어 골든타임을 지켜드립니다."
    }
  ];

  return (
    <section className="bg-white py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">왜 허그닉스인가요?</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            소중한 부모님을 위한 가장 배려 깊은 안전 기술을 경험해보세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-start transition-all duration-300 hover:shadow-xl hover:bg-white hover:border-primary/20 group"
            >
              <div className="text-primary mb-6 bg-white p-4 rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;