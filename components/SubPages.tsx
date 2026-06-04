import React, { memo, useState } from 'react';
import { Users, Target, Briefcase, Radio, Cpu, Activity, Wifi, Smartphone, CheckCircle, Shield, Lock, Globe, HelpCircle, MessageCircle, FileText, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from './LanguageContext';

// --- Solution Page ---
export const SolutionPage: React.FC<{ activeTab: string; onTabChange: (t: string) => void }> = memo(({ activeTab, onTabChange }) => {
  const { t, locale } = useTranslation();
  return (
    <div className="pt-36 pb-24 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <span className="text-primary font-bold text-xs uppercase tracking-widest">Solution</span>
        <h1 className="text-4xl font-black mt-2 text-secondary">The Technology.</h1>
      </div>
      
      <div className="grid grid-cols-3 lg:flex lg:gap-8 border-b border-gray-100 mb-16">
        {[
          { id: 'radar', label: 'Radar', icon: <Radio size={16}/> },
          { id: 'ai', label: 'Edge AI', icon: <Cpu size={16}/> },
          { id: 'data', label: 'Data', icon: <Activity size={16}/> }
        ].map(tab => (
          <button 
            key={tab.id} 
            onClick={() => onTabChange(tab.id)} 
            className={`flex flex-col lg:flex-row items-center justify-center gap-2 py-5 px-1 text-[13px] lg:text-[15px] font-black border-b-2 transition-all ${activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="animate-fade-in-up">
        {activeTab === 'radar' && (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-secondary mb-8">mmWave Radar Tech</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {locale === 'en' 
                  ? 'Our core technology is 60GHz mmWave radar. It works in complete darkness, high humidity, and smoke, unlike conventional optical sensors.'
                  : '허그닉스의 핵심 기술은 60GHz 대역의 mmWave(밀리미터파) 레이더입니다. 빛이 아닌 전파를 사용하기 때문에 완전한 어둠 속에서도 동작하며, 습기가 많은 욕실에서도 정확하게 사람을 감지합니다.'}
              </p>
              <div className="space-y-4 mb-10">
                {(locale === 'en' 
                  ? ["100% Privacy-preserving (No Camera)", "Sense vital signs (Respiration/Heartbeat)", "10m Range / 120° Field of View"]
                  : ["프라이버시 100% 보호 (카메라 없음)", "호흡, 심박 등 미세 생체 신호 감지", "최대 10m 감지 거리 / 120도 광시야각"]
                ).map((txt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="font-bold text-gray-800">{txt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 rounded-[3rem] h-[400px] flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute w-72 h-72 border border-primary/20 rounded-full animate-ping"></div>
              <Radio size={100} className="text-primary relative z-10" strokeWidth={1}/>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gray-50 rounded-[3rem] h-[400px] flex items-center justify-center shadow-inner">
              <Cpu size={120} className="text-secondary opacity-20" strokeWidth={1}/>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-black text-secondary mb-8">Edge AI Computing</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {locale === 'en' 
                  ? 'We do not send sensitive sensor data to the cloud. Deep learning algorithms run directly on the high-performance MCU inside the sensor to identify emergencies instantly.'
                  : '민감한 센서 데이터를 클라우드로 전송하지 않습니다. 허그닉스 센서 내부의 고성능 MCU에서 딥러닝 알고리즘이 직접 동작하여 낙상, 실신 등의 위급 상황을 즉시 판단합니다.'}
              </p>
              <div className="bg-white border-l-4 border-primary p-8 rounded-r-2xl shadow-sm">
                <p className="text-primary font-black mb-3">Why Edge AI?</p>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {locale === 'en' 
                    ? 'Security is guaranteed as data never leaves the device. It even works in offline environments to ensure continuous safety.'
                    : '데이터가 외부로 유출될 걱정이 없으며, 인터넷 연결이 불안정한 환경에서도 기본적인 감지 기능이 실시간으로 작동하여 안전을 보장합니다.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div>
            <h2 className="text-3xl font-black text-secondary mb-8">Data Analytics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { color: 'blue', title: locale === 'en' ? 'Activity' : '활동량 분석', desc: locale === 'en' ? 'Detect health decline by monitoring daily and weekly activity patterns.' : '일간/주간 활동량을 측정하여 건강 악화를 조기에 감지합니다.' },
                { color: 'green', title: locale === 'en' ? 'Sleep' : '수면 리포트', desc: locale === 'en' ? 'Analyze tossing and breathing rate during sleep to generate quality reports.' : '수면 중 뒤척임과 호흡수를 분석하여 수면의 질을 데이터화합니다.' },
                { color: 'red', title: locale === 'en' ? 'Duration' : '이상 체류 알림', desc: locale === 'en' ? 'Alert guardians if someone stays in the bathroom longer than usual.' : '화장실 체류 시간이 평소보다 길어지면 즉각 보호자에게 알립니다.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors ${item.color === 'blue' ? 'bg-blue-50 text-blue-600' : item.color === 'green' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'} group-hover:bg-primary group-hover:text-white`}>
                    <Activity />
                  </div>
                  <h3 className="text-2xl font-black text-secondary mb-4">{item.title}</h3>
                  <p className="text-gray-500 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

// --- Product Page ---
export const ProductPage: React.FC<{ activeTab: string; onTabChange: (t: string) => void }> = memo(({ activeTab, onTabChange }) => {
  const { locale, t } = useTranslation();
  return (
    <div className="pt-36 pb-24 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <span className="text-primary font-bold text-xs uppercase">Product</span>
        <h1 className="text-4xl font-black mt-2 text-secondary">The Platform.</h1>
      </div>
      <div className="flex gap-8 border-b border-gray-100 mb-16">
        {['hardware', 'software'].map(id => (
          <button key={id} onClick={() => onTabChange(id)} className={`py-5 px-6 text-[15px] font-bold border-b-2 transition-all ${activeTab === id ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}>
            {id.toUpperCase()}
          </button>
        ))}
      </div>
      
      <div className="animate-fade-in-up">
        {activeTab === 'hardware' && (
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="bg-gray-50 rounded-[4rem] p-20 flex justify-center shadow-inner relative overflow-hidden">
                <div className="relative w-72 h-72 bg-white rounded-[3rem] shadow-2xl flex flex-col items-center justify-center border border-gray-100">
                  <Wifi className="w-32 h-32 text-primary opacity-90 mb-4" strokeWidth={1} />
                  <span className="text-sm font-black text-gray-400 tracking-[0.3em]">HUGNICS</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[13px] font-black mb-6">Model: HUG-S100</div>
              <h2 className="text-4xl font-black text-secondary mb-8">Hugnics Care Sensor</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: locale === 'en' ? 'Installation' : '설치 방식', val: t.common.development },
                  { label: locale === 'en' ? 'Connectivity' : '통신 규격', val: t.common.development },
                  { label: locale === 'en' ? 'Power' : '전원 공급', val: t.common.development },
                  { label: locale === 'en' ? 'Waterproof' : '방수 등급', val: t.common.development }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                    <div className="text-[12px] font-black text-gray-400 mb-2 uppercase tracking-widest">{item.label}</div>
                    <div className="font-black text-gray-800 text-lg">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'software' && (
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-12 bg-white border border-gray-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
              <Smartphone className="text-primary mb-8" size={48}/>
              <h3 className="text-3xl font-black text-secondary mb-6">Guardian App</h3>
              <ul className="space-y-4 font-bold text-gray-700">
                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-primary"/> {locale === 'en' ? 'Instant Kakao/SMS Alerts' : '긴급 상황 알림톡 발송'}</li>
                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-primary"/> {locale === 'en' ? 'Sleep & Activity Reports' : '수면/활동량 리포트'}</li>
              </ul>
            </div>
            <div className="p-12 bg-secondary text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
              <Activity className="text-primary mb-8" size={48}/>
              <h3 className="text-3xl font-black mb-6">Admin Dashboard</h3>
              <ul className="space-y-4 font-bold text-gray-300">
                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-primary"/> {locale === 'en' ? 'Multi-room Monitoring' : '호실별 통합 관제 모니터링'}</li>
                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-primary"/> {locale === 'en' ? 'API Data Integration' : 'API 데이터 연동 지원'}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

// --- Company Page ---
export const CompanyPage: React.FC<{ activeTab: string; onTabChange: (t: string) => void }> = memo(({ activeTab, onTabChange }) => {
  const { locale, t } = useTranslation();
  return (
    <div className="pt-36 pb-24 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <span className="text-primary font-bold text-xs uppercase">Company</span>
        <h1 className="text-4xl font-black mt-2 text-secondary">With People.</h1>
      </div>
      
      <div className="grid grid-cols-3 lg:flex lg:gap-8 border-b border-gray-100 mb-16">
        {['team', 'vision', 'careers'].map(id => (
          <button key={id} onClick={() => onTabChange(id)} className={`flex items-center justify-center py-5 px-1 text-[13px] lg:text-[15px] font-bold border-b-2 transition-all ${activeTab === id ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}>
            {id.toUpperCase()}
          </button>
        ))}
      </div>
      
      <div className="animate-fade-in-up">
        {activeTab === 'team' && (
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: locale === 'en' ? 'Jihun Han' : '한지훈', role: 'CEO', specialty: locale === 'en' ? 'Embedded Expert' : '반도체 전공 / 임베디드 전문가', desc: locale === 'en' ? 'Directs hardware architecture based on semiconductor expertise.' : '반도체 설계 및 시스템 분야의 전문성을 바탕으로, 허그닉스의 레이더 아키텍처를 총괄합니다.', color: 'orange' },
              { name: locale === 'en' ? 'Sungho Park' : '박성호', role: 'CTO', specialty: locale === 'en' ? 'AI Algorithm Expert' : 'AI 알고리즘 및 수학 전문가', desc: locale === 'en' ? 'Develops precision deep learning algorithms for signal analysis.' : '수학적 모델링을 기반으로 레이더 신호를 정밀 분석하는 독자적인 딥러닝 알고리즘을 개발합니다.', color: 'blue' },
              { name: locale === 'en' ? 'Gibo Jung' : '정기보', role: 'CISO', specialty: locale === 'en' ? 'Security Expert' : '헬스케어 개인정보보호 전문가', desc: locale === 'en' ? 'Protects sensitive biometric data as a security specialist.' : '데이터 보안 전문가로서, 사용자들의 민감한 생체 정보를 철저하게 보호하고 관리합니다.', color: 'gray' }
            ].map((m, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm text-center hover:shadow-xl transition-all">
                <div className={`w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl font-black shadow-inner ${m.color === 'orange' ? 'bg-orange-100 text-primary' : m.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                  {m.name.substring(0, 1)}
                </div>
                <h3 className="text-2xl font-black text-secondary mb-2">{m.name}</h3>
                <p className="text-primary font-bold text-sm mb-6">{m.specialty}</p>
                <p className="text-gray-500 font-bold leading-relaxed text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'vision' && (
          <div className="p-16 bg-secondary text-white rounded-[4rem] shadow-2xl relative overflow-hidden">
            <h2 className="text-5xl font-black mb-10 leading-tight">Invisible Safety,<br/><span className="text-primary italic">Warm Care.</span></h2>
            <p className="text-2xl text-gray-400 font-bold max-w-3xl leading-relaxed">
              {locale === 'en' 
                ? 'We believe technology is most human when it remains invisible. Our vision is to provide care without surveillance, and freedom without restriction.'
                : '우리는 기술이 드러나지 않을 때 가장 인간적이라고 믿습니다. 감시가 아닌 보살핌을, 구속이 아닌 자유를 제공하는 것이 허그닉스의 비전입니다.'}
            </p>
          </div>
        )}

        {activeTab === 'careers' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-black mb-8">{locale === 'en' ? 'Join Our Mission' : '함께 성장할 동료를 찾습니다.'}</h3>
            {[
              { job: 'Tiny AI Engineer', dept: 'R&D Center', loc: 'Seoul' }
            ].map((j, i) => (
              <div key={i} className="p-10 border border-gray-100 rounded-3xl hover:border-primary bg-white hover:shadow-lg transition-all flex justify-between items-center group cursor-pointer">
                <div>
                  <h4 className="text-2xl font-black text-secondary group-hover:text-primary transition-colors">{j.job}</h4>
                  <p className="text-gray-400 font-bold mt-2">{j.dept} | {j.loc}</p>
                </div>
                <span className="bg-orange-50 text-primary font-black px-6 py-2 rounded-full text-sm">{t.common.hiring}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

// --- Support Page ---
export const SupportPage: React.FC<{ activeTab: string; onTabChange: (t: string) => void; onOpenContact: () => void }> = memo(({ activeTab, onTabChange, onOpenContact }) => {
  const { locale, t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: locale === 'en' ? "Is there really no camera?" : "카메라가 정말 없나요?",
      a: locale === 'en' 
        ? "Yes, Hugnics sensors use radio waves (Radar), not optical cameras. Therefore, video recording is impossible, and there are no privacy concerns." 
        : "네, 허그닉스 센서는 광학 카메라가 아닌 전파(Radar)를 사용합니다. 따라서 영상 촬영이나 녹화가 불가능하며, 사생활 침해 걱정이 전혀 없습니다."
    },
    {
      q: locale === 'en' ? "Does it detect pets?" : "반려동물도 감지하나요?",
      a: locale === 'en'
        ? "Our AI algorithm specifically filters for human breathing and movement patterns. We have minimized false alarms from pets like dogs or cats."
        : "AI 알고리즘이 사람의 호흡과 움직임 패턴만을 선별하여 감지합니다. 강아지나 고양이의 움직임으로 인한 오작동을 최소화했습니다."
    },
    {
      q: locale === 'en' ? "Is it difficult to install?" : "설치가 어렵나요?",
      a: locale === 'en'
        ? "It is simple. Just connect it to a power source (USB-C) and attach it to the ceiling or upper wall. We provide a step-by-step guide through our app."
        : "매우 간단합니다. 전원(USB-C)만 연결하고 천장이나 벽면 상단에 부착하면 끝입니다. 전용 앱을 통해 단계별 설치 가이드를 제공해 드립니다."
    },
    {
      q: locale === 'en' ? "Can multiple guardians receive alerts?" : "보호자 여러 명이 알림을 받을 수 있나요?",
      a: locale === 'en'
        ? "Yes, you can register multiple family members or staff in the app to receive instant emergency notifications simultaneously."
        : "네, 가족이나 시설 종사자 등 여러 명을 보호자로 등록할 수 있습니다. 위급 상황 시 등록된 모든 인원에게 실시간 알림이 전송됩니다."
    }
  ];

  return (
    <div className="pt-36 pb-24 max-w-5xl mx-auto px-6">
      <div className="mb-16">
        <span className="text-primary font-bold text-xs uppercase tracking-widest">Support Center</span>
        <h1 className="text-5xl font-black mt-2 text-secondary tracking-tight">How can we help?</h1>
      </div>

      {/* Action Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        <div onClick={onOpenContact} className="p-12 bg-orange-50 border border-orange-100 rounded-[3rem] cursor-pointer hover:shadow-xl transition-all group">
          <MessageCircle className="text-primary mb-8 transition-transform group-hover:scale-110" size={48}/>
          <h3 className="text-3xl font-black text-secondary mb-4">{locale === 'en' ? 'B2B Inquiry' : '1:1 도입 문의'}</h3>
          <p className="text-gray-600 font-bold mb-6">{locale === 'en' ? 'Our experts will respond to your business needs.' : '전문가가 도입 목적에 맞는 최적의 솔루션을 안내해 드립니다.'}</p>
          <p className="text-primary font-black flex items-center gap-2">{t.common.inquiry} <ArrowRight size={20}/></p>
        </div>
        <div className="p-12 bg-gray-50 border border-gray-100 rounded-[3rem] group cursor-pointer hover:bg-gray-100 transition-all">
          <FileText className="text-secondary mb-8 transition-transform group-hover:scale-110" size={48}/>
          <h3 className="text-3xl font-black text-secondary mb-4">{locale === 'en' ? 'User Manual' : '사용자 매뉴얼'}</h3>
          <p className="text-gray-600 font-bold mb-6">{locale === 'en' ? 'Check the detailed setup guide for HUG-S100.' : 'HUG-S100 설치 및 앱 연동 방법이 상세히 설명되어 있습니다.'}</p>
          <p className="text-secondary font-black flex items-center gap-2">Download (PDF) <Download size={20}/></p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-[4rem] border border-gray-100 p-12 lg:p-20 shadow-sm">
        <div className="flex items-center gap-4 mb-12">
          <HelpCircle size={32} className="text-primary"/>
          <h2 className="text-3xl font-black text-secondary">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className="text-xl font-black text-secondary group-hover:text-primary transition-colors flex gap-4">
                  <span className="text-primary/30">Q.</span> {faq.q}
                </span>
                {openIndex === idx ? <ChevronUp className="text-primary"/> : <ChevronDown className="text-gray-300"/>}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 bg-gray-50 rounded-3xl text-lg text-gray-600 font-bold leading-relaxed flex gap-4">
                  <span className="text-secondary/20">A.</span> {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

// --- Privacy Page ---
export const PrivacyPage: React.FC<{ activeTab: string; onTabChange: (t: string) => void }> = memo(({ activeTab, onTabChange }) => {
  const { locale } = useTranslation();
  return (
    <div className="pt-36 pb-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <Shield className="text-primary mx-auto mb-6" size={64}/>
        <h1 className="text-4xl font-black text-secondary">Privacy Policy</h1>
      </div>
      <div className="flex justify-center gap-2 mb-16 bg-gray-100 p-1.5 rounded-2xl w-fit mx-auto shadow-inner">
        {['kr', 'gdpr'].map(id => (
          <button key={id} onClick={() => onTabChange(id)} className={`px-10 py-3 text-[15px] font-black rounded-xl transition-all ${activeTab === id ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>{id.toUpperCase()}</button>
        ))}
      </div>
      <div className="p-12 bg-gray-50 border border-gray-100 rounded-[3rem] text-lg text-gray-600 leading-relaxed font-medium shadow-sm">
        <section>
          <h3 className="text-2xl font-black text-secondary mb-4">{activeTab === 'kr' ? '제1조 (개인정보의 처리 목적)' : '1. Purpose of Processing'}</h3>
          <p>{activeTab === 'kr' 
            ? '주식회사 허그닉스(이하 \'회사\')는 다음의 목적을 위하여 개인정보를 처리합니다. 고객 문의 응대 및 A/S 처리, 안심 리포트 발송 서비스 제공을 목적으로 합니다.'
            : 'Hugnics Inc. processes personal data for responding to inquiries, providing after-sales service, and safety report delivery services.'}
          </p>
        </section>
      </div>
    </div>
  );
});

const ArrowRight = ({ size, className, strokeWidth = 2 }: any) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
