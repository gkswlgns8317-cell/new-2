import React, { memo, useState } from 'react';
import { Users, Target, Briefcase, Radio, Cpu, Activity, Wifi, Smartphone, CheckCircle, Shield, Lock, Globe, HelpCircle, MessageCircle, FileText, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from './LanguageContext';

// --- Solution Page ---
export const SolutionPage: React.FC<{ activeTab: string; onTabChange: (t: string) => void }> = memo(({ activeTab, onTabChange }) => {
  const { t, locale } = useTranslation();
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="mb-10">
        <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Solution</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">The Technology.</h1>
      </div>
      
      {/* Clean Tab Bar */}
      <div className="flex gap-4 md:gap-8 border-b border-gray-100 mb-12">
        {[
          { id: 'radar', label: 'Radar', icon: <Radio size={14}/> },
          { id: 'ai', label: 'Edge AI', icon: <Cpu size={14}/> },
          { id: 'data', label: 'Data', icon: <Activity size={14}/> }
        ].map(tab => (
          <button 
            key={tab.id} 
            onClick={() => onTabChange(tab.id)} 
            className={`flex items-center gap-2 py-4 px-4 text-xs md:text-sm font-bold border-b-2 transition-all uppercase tracking-wider ${activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="animate-fade-in-up">
        {activeTab === 'radar' && (
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mb-6 tracking-tight">mmWave Radar Tech</h2>
              <p className="text-sm md:text-base text-gray-500 mb-8 leading-relaxed font-medium">
                {locale === 'en' 
                  ? 'Our core technology is 60GHz mmWave radar. It works in complete darkness, high humidity, and smoke, unlike conventional optical sensors.'
                  : '허그닉스의 핵심 기술은 60GHz 대역의 mmWave(밀리미터파) 레이더입니다. 빛이 아닌 전파를 사용하기 때문에 완전한 어둠 속에서도 동작하며, 습기가 많은 욕실에서도 정확하게 사람을 감지합니다.'}
              </p>
              <div className="space-y-4 mb-8">
                {(locale === 'en' 
                  ? ["100% Privacy-preserving (No Camera)", "Sense vital signs (Respiration/Heartbeat)", "10m Range / 120° Field of View"]
                  : ["프라이버시 100% 보호 (카메라 없음)", "호흡, 심박 등 미세 생체 신호 감지", "최대 10m 감지 거리 / 120도 광시야각"]
                ).map((txt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="font-bold text-xs md:text-sm text-gray-700">{txt}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Real ceiling installation photo */}
            <div className="relative border border-gray-100 p-4 bg-white shadow-xl rounded-2xl">
              <div className="overflow-hidden rounded-xl aspect-[4/3] bg-gray-50">
                <img 
                  src="/radar-bathroom.jpg.png" 
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" 
                  alt="mmWave Radar Ceiling Installation" 
                />
              </div>
              <div className="absolute -bottom-4 right-6 bg-secondary text-white text-[10px] font-bold tracking-wider uppercase px-4 py-2 rounded shadow-lg border border-white/10">
                {locale === 'en' ? 'Ceiling Installation Preview' : '실제 천장 설치 작동 예시'}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Data Privacy Flow Diagram */}
            <div className="order-2 lg:order-1 bg-gray-50 border border-gray-100 rounded-xl p-8 flex flex-col justify-center gap-6 h-[400px] shadow-sm">
              <div className="text-center mb-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Data Privacy Flow Diagram</span>
              </div>
              
              {/* Step 1 */}
              <div className="bg-white border border-gray-150 p-4 rounded shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Radio className="text-primary" size={16} />
                  <div>
                    <div className="text-xs font-bold text-secondary">1. Raw mmWave Signal</div>
                    <div className="text-[9px] text-gray-400">{locale === 'en' ? 'Reflected radio waves (No image format)' : '반사된 밀리미터파 신호 (이미지 없음)'}</div>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 px-2 py-1 rounded">Sensor</span>
              </div>
              
              {/* Divider Line */}
              <div className="flex justify-center -my-3">
                <div className="w-[1px] h-4 bg-gray-200"></div>
              </div>
              
              {/* Step 2 */}
              <div className="bg-secondary border border-white/5 p-4 rounded shadow-md flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <Cpu className="text-primary animate-pulse" size={16} />
                  <div>
                    <div className="text-xs font-bold">{locale === 'en' ? '2. Local Edge AI Computation' : '2. 로컬 고성능 MCU 연산'}</div>
                    <div className="text-[9px] text-gray-400">{locale === 'en' ? 'Deep learning model processed locally on chip' : '기기 자체 탑재 딥러닝 알고리즘 분석'}</div>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">Edge AI</span>
              </div>
              
              {/* Divider Line */}
              <div className="flex justify-center -my-3">
                <div className="w-[1px] h-4 bg-gray-200"></div>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white border border-gray-150 p-4 rounded shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="text-green-600" size={16} />
                  <div>
                    <div className="text-xs font-bold text-secondary">{locale === 'en' ? '3. Instant Event Alert' : '3. 실시간 위험 이벤트 알림'}</div>
                    <div className="text-[9px] text-gray-400">{locale === 'en' ? 'Transmit event metadata only when emergency is verified' : '사고 감지 시에만 위급 이벤트 데이터 전송'}</div>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-green-600 uppercase tracking-wider bg-green-50 px-2 py-1 rounded">Guardian</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mb-6 tracking-tight">Edge AI Computing</h2>
              <p className="text-sm md:text-base text-gray-500 mb-8 leading-relaxed font-medium">
                {locale === 'en' 
                  ? 'We do not send sensitive sensor data to the cloud. Deep learning algorithms run directly on the high-performance MCU inside the sensor to identify emergencies instantly.'
                  : '민감한 센서 데이터를 클라우드로 전송하지 않습니다. 허그닉스 센서 내부의 고성능 MCU에서 딥러닝 알고리즘이 직접 동작하여 낙상, 실신 등의 위급 상황을 즉시 판단합니다.'}
              </p>
              <div className="bg-white border border-gray-150 border-l-4 border-l-primary p-6 rounded-r-lg shadow-sm">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Why Edge AI?</p>
                <p className="text-gray-600 text-xs md:text-sm font-semibold leading-relaxed">
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mb-8 tracking-tight">Data Analytics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { color: 'blue', title: locale === 'en' ? 'Activity' : '활동량 분석', desc: locale === 'en' ? 'Detect health decline by monitoring daily and weekly activity patterns.' : '일간/주간 활동량을 측정하여 건강 악화를 조기에 감지합니다.' },
                { color: 'green', title: locale === 'en' ? 'Sleep' : '수면 리포트', desc: locale === 'en' ? 'Analyze tossing and breathing rate during sleep to generate quality reports.' : '수면 중 뒤척임과 호흡수를 분석하여 수면의 질을 데이터화합니다.' },
                { color: 'red', title: locale === 'en' ? 'Duration' : '이상 체류 알림', desc: locale === 'en' ? 'Alert guardians if someone stays in the bathroom longer than usual.' : '화장실 체류 시간이 평소보다 길어지면 즉각 보호자에게 알립니다.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col justify-between min-h-[280px]">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">{locale === 'en' ? 'Data Insight' : '수집 데이터'}</span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${item.color === 'blue' ? 'bg-blue-50 text-blue-600' : item.color === 'green' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                        {item.color.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                  
                  {/* Dashboard Graphic Mock */}
                  <div className="border-t border-gray-50 pt-4 flex items-center justify-between text-xs text-gray-400 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.color === 'blue' ? 'bg-blue-500 animate-pulse' : item.color === 'green' ? 'bg-green-500 animate-pulse' : 'bg-red-500 animate-pulse'}`}></span>
                      <span>{locale === 'en' ? 'Live System' : '실시간 모니터링'}</span>
                    </div>
                    <span className="text-secondary font-bold text-[10px] uppercase tracking-wider">{locale === 'en' ? 'Verified' : '검증됨'}</span>
                  </div>
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
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="mb-10">
        <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Product</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">The Platform.</h1>
      </div>
      
      {/* Tab bar */}
      <div className="flex gap-4 md:gap-8 border-b border-gray-100 mb-12">
        {['hardware', 'software'].map(id => (
          <button 
            key={id} 
            onClick={() => onTabChange(id)} 
            className={`py-4 px-4 text-xs md:text-sm font-bold border-b-2 transition-all uppercase tracking-wider ${activeTab === id ? 'border-primary text-primary' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            {id}
          </button>
        ))}
      </div>
      
      <div className="animate-fade-in-up">
        {activeTab === 'hardware' && (
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Col: Device Display Frame (Plug and Arm Types) */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-100 p-4 bg-white shadow-sm rounded-xl">
                  <div className="overflow-hidden rounded-lg aspect-square bg-gray-50 flex items-center justify-center">
                    <img src="/hardware-plug.png" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" alt="Hugnics Care Sensor Plug Type" />
                  </div>
                  <div className="text-center mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Plug Type</div>
                </div>
                <div className="border border-gray-100 p-4 bg-white shadow-sm rounded-xl">
                  <div className="overflow-hidden rounded-lg aspect-square bg-gray-50 flex items-center justify-center">
                    <img src="/hardware-arm.png" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" alt="Hugnics Care Sensor Arm Type" />
                  </div>
                  <div className="text-center mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Adjustable Arm Type</div>
                </div>
              </div>
            </div>
            
            {/* Right Col: Product Spec Grid Table */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-xs font-bold tracking-wider mb-4 uppercase">Model: HUG-S100</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mb-6 tracking-tight">Hugnics Care Sensor</h2>
              
              <div className="border-t border-gray-100 divide-y divide-gray-100 mt-6">
                {[
                  { 
                    label: locale === 'en' ? 'Installation' : '설치 방식', 
                    val: locale === 'en' ? 'Direct 220V wall plug' : '220V 콘센트 직접 플러그인' 
                  },
                  { 
                    label: locale === 'en' ? 'Connectivity' : '통신 규격', 
                    val: locale === 'en' ? 'Under selection' : '개발 및 선정 중' 
                  },
                  { 
                    label: locale === 'en' ? 'Power' : '전원 공급', 
                    val: locale === 'en' ? '220V AC (Compatible with 5V DC adapter)' : '220V AC (5V DC 어댑터 지원 예정)' 
                  },
                  { 
                    label: locale === 'en' ? 'Waterproof' : '방수 등급', 
                    val: locale === 'en' ? 'IP66 (In development)' : 'IP66 (개발 진행 중)' 
                  }
                ].map((item, i) => (
                  <div key={i} className="py-4 flex justify-between items-center text-sm font-medium">
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-xs">{item.label}</span>
                    <span className="text-secondary font-bold text-right">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'software' && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mobile App Section */}
            <div className="p-8 bg-white border border-gray-150 rounded-xl shadow-sm flex flex-col justify-between min-h-[350px]">
              <div>
                <div className="flex items-center gap-3 text-primary mb-6">
                  <Smartphone size={28} />
                  <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">Mobile App</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">Guardian App</h3>
                <ul className="space-y-3.5 text-xs text-gray-600 font-semibold mt-6">
                  <li className="flex items-center gap-2.5"><CheckCircle size={16} className="text-primary"/> {locale === 'en' ? 'Instant Kakao/SMS Alerts' : '긴급 상황 알림톡 발송'}</li>
                  <li className="flex items-center gap-2.5"><CheckCircle size={16} className="text-primary"/> {locale === 'en' ? 'Sleep & Activity Reports' : '수면/활동량 리포트'}</li>
                </ul>
              </div>
              <div className="text-[10px] font-bold text-gray-400 tracking-wide pt-6 border-t border-gray-50 uppercase">
                {locale === 'en' ? 'Platforms: iOS / Android' : '플랫폼: iOS / Android 정식 서비스 지원'}
              </div>
            </div>
            
            {/* Web Dashboard Section */}
            <div className="p-8 bg-secondary text-white rounded-xl shadow-lg flex flex-col justify-between min-h-[350px] border border-white/5">
              <div>
                <div className="flex items-center gap-3 text-primary mb-6">
                  <Activity size={28} />
                  <span className="text-[9px] font-bold text-gray-500 tracking-wider uppercase">Web Platform</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Admin Dashboard</h3>
                <ul className="space-y-3.5 text-xs text-gray-300 font-semibold mt-6">
                  <li className="flex items-center gap-2.5"><CheckCircle size={16} className="text-primary"/> {locale === 'en' ? 'Multi-room Monitoring' : '호실별 통합 관제 모니터링'}</li>
                  <li className="flex items-center gap-2.5"><CheckCircle size={16} className="text-primary"/> {locale === 'en' ? 'API Data Integration' : 'API 데이터 연동 지원'}</li>
                </ul>
              </div>
              <div className="text-[10px] font-bold text-gray-500 tracking-wide pt-6 border-t border-white/5 uppercase">
                {locale === 'en' ? 'Secured Corporate Network System' : '보안이 적용된 통합 B2B 관제 시스템'}
              </div>
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
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="mb-10">
        <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Company</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">With People.</h1>
      </div>
      
      {/* Clean Tab bar */}
      <div className="flex gap-4 md:gap-8 border-b border-gray-100 mb-12">
        {['team', 'vision', 'careers'].map(id => (
          <button 
            key={id} 
            onClick={() => onTabChange(id)} 
            className={`py-4 px-4 text-xs md:text-sm font-bold border-b-2 transition-all uppercase tracking-wider ${activeTab === id ? 'border-primary text-primary' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            {id}
          </button>
        ))}
      </div>
      
      <div className="animate-fade-in-up">
        {activeTab === 'team' && (
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: locale === 'en' ? 'Jihun Han' : '한지훈', role: 'CEO', specialty: locale === 'en' ? 'Embedded Expert' : '반도체 전공 / 임베디드 전문가', desc: locale === 'en' ? 'Directs hardware architecture based on semiconductor expertise.' : '반도체 설계 및 시스템 분야의 전문성을 바탕으로, 허그닉스의 레이더 아키텍처를 총괄합니다.', color: 'orange', code: 'JH' },
              { name: locale === 'en' ? 'Sungho Park' : '박성호', role: 'CTO', specialty: locale === 'en' ? 'AI Algorithm Expert' : 'AI 알고리즘 및 수학 전문가', desc: locale === 'en' ? 'Develops precision deep learning algorithms for signal analysis.' : '수학적 모델링을 기반으로 레이더 신호를 정밀 분석하는 독자적인 딥러닝 알고리즘을 개발합니다.', color: 'blue', code: 'SP' },
              { name: locale === 'en' ? 'Gibo Jung' : '정기보', role: 'CISO', specialty: locale === 'en' ? 'Security Expert' : '헬스케어 개인정보보호 전문가', desc: locale === 'en' ? 'Protects sensitive biometric data as a security specialist.' : '데이터 보안 전문가로서, 사용자들의 민감한 생체 정보를 철저하게 보호하고 관리합니다.', color: 'gray', code: 'GJ' }
            ].map((m, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  {/* Square monogram avatar badge instead of round colored circles */}
                  <div className="w-12 h-12 bg-gray-50 border border-gray-150 flex items-center justify-center font-bold text-secondary text-sm rounded">
                    {m.code}
                  </div>
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-orange-50 px-2.5 py-1 rounded">
                    {m.role}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-1 tracking-tight">{m.name}</h3>
                <p className="text-gray-400 font-bold text-xs mb-4 uppercase tracking-wider">{m.specialty}</p>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">{m.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'vision' && (
          <div className="p-12 md:p-20 bg-secondary text-white rounded-xl shadow-lg relative overflow-hidden border border-white/5">
            <div className="max-w-3xl">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-6 block">Vision & Mission</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
                Invisible Safety,<br />
                <span className="text-primary italic font-serif font-semibold">Warm Care.</span>
              </h2>
              <div className="h-[1px] w-20 bg-primary mb-8 animate-pulse"></div>
              <p className="text-base md:text-xl text-gray-400 font-medium leading-relaxed">
                {locale === 'en' 
                  ? 'We believe technology is most human when it remains invisible. Our vision is to provide care without surveillance, and freedom without restriction.'
                  : '우리는 기술이 드러나지 않을 때 가장 인간적이라고 믿습니다. 감시가 아닌 보살핌을, 구속이 아닌 자유를 제공하는 것이 허그닉스의 비전입니다.'}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'careers' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 tracking-tight">{locale === 'en' ? 'Join Our Mission' : '함께 성장할 동료를 찾습니다.'}</h3>
            {[
              { job: 'Tiny AI Engineer', dept: 'R&D Center', loc: 'Seoul' }
            ].map((j, i) => (
              <div key={i} className="p-6 border border-gray-100 rounded-lg hover:border-primary bg-white hover:shadow-sm transition-all flex justify-between items-center group cursor-pointer">
                <div>
                  <h4 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{j.job}</h4>
                  <p className="text-gray-400 font-bold text-xs mt-1">{j.dept} | {j.loc}</p>
                </div>
                <span className="bg-orange-50 text-primary font-bold px-4 py-1.5 rounded text-xs uppercase tracking-wider">{t.common.hiring}</span>
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
    <div className="pt-32 pb-20 max-w-5xl mx-auto px-6 lg:px-12 animate-fade-in-up">
      <div className="mb-12">
        <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Support Center</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">How can we help?</h1>
      </div>

      {/* Action Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div onClick={onOpenContact} className="p-10 bg-orange-50/50 border border-orange-100 rounded-xl cursor-pointer hover:shadow-sm transition-all group">
          <MessageCircle className="text-primary mb-6 transition-transform group-hover:scale-105" size={36}/>
          <h3 className="text-xl font-bold text-secondary mb-3 tracking-tight">{locale === 'en' ? 'B2B Inquiry' : '1:1 도입 문의'}</h3>
          <p className="text-gray-500 text-xs md:text-sm font-semibold mb-6 leading-relaxed">{locale === 'en' ? 'Our experts will respond to your business needs.' : '전문가가 도입 목적에 맞는 최적의 솔루션을 안내해 드립니다.'}</p>
          <p className="text-primary text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider">{t.common.inquiry} <ArrowRight size={14}/></p>
        </div>
        
        <div className="p-10 bg-gray-50/50 border border-gray-100 rounded-xl group cursor-pointer hover:bg-gray-100/50 transition-all">
          <FileText className="text-secondary mb-6 transition-transform group-hover:scale-105" size={36}/>
          <h3 className="text-xl font-bold text-secondary mb-3 tracking-tight">{locale === 'en' ? 'User Manual' : '사용자 매뉴얼'}</h3>
          <p className="text-gray-500 text-xs md:text-sm font-semibold mb-6 leading-relaxed">{locale === 'en' ? 'Check the detailed setup guide for HUG-S100.' : 'HUG-S100 설치 및 앱 연동 방법이 상세히 설명되어 있습니다.'}</p>
          <p className="text-secondary text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider">Download (PDF) <Download size={14}/></p>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-12 shadow-sm">
        <div className="flex items-center gap-3.5 mb-10">
          <HelpCircle size={24} className="text-primary"/>
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">Frequently Asked Questions</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-2">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center py-5 text-left group"
              >
                <span className="text-base font-bold text-secondary group-hover:text-primary transition-colors flex gap-3">
                  <span className="text-primary/45 font-mono">Q.</span> {faq.q}
                </span>
                {openIndex === idx ? <ChevronUp className="text-primary" size={18}/> : <ChevronDown className="text-gray-300" size={18}/>}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 bg-gray-50 border border-gray-100 rounded-lg text-xs md:text-sm text-gray-500 font-semibold leading-relaxed flex gap-3">
                  <span className="text-secondary/25 font-mono">A.</span> {faq.a}
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
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 lg:px-12 animate-fade-in-up">
      <div className="text-center mb-12">
        <Shield className="text-primary mx-auto mb-4" size={48}/>
        <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Privacy Policy</h1>
      </div>
      
      {/* Flat pill toggle switch */}
      <div className="flex justify-center gap-1.5 mb-12 bg-gray-50 p-1 border border-gray-150 rounded-lg w-fit mx-auto shadow-sm">
        {['kr', 'gdpr'].map(id => (
          <button 
            key={id} 
            onClick={() => onTabChange(id)} 
            className={`px-6 py-2 text-xs font-bold rounded transition-all uppercase tracking-wider ${activeTab === id ? 'bg-white text-primary shadow-sm border border-gray-100' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {id}
          </button>
        ))}
      </div>
      
      <div className="p-8 bg-gray-50/50 border border-gray-100 rounded-xl text-xs md:text-sm text-gray-500 leading-relaxed font-semibold shadow-sm">
        <section>
          <h3 className="text-lg font-bold text-secondary mb-3 tracking-tight">{activeTab === 'kr' ? '제1조 (개인정보의 처리 목적)' : '1. Purpose of Processing'}</h3>
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
