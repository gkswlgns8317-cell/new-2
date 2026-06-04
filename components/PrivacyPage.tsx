import React from 'react';
import { Shield, Lock, Globe } from 'lucide-react';

interface PrivacyPageProps {
  activeTab: string; // 'kr' or 'gdpr'
  onTabChange: (tab: string) => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
           <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-4">
              <Shield className="text-primary w-8 h-8" />
           </div>
           <h1 className="text-3xl md:text-4xl font-bold text-gray-900">개인정보처리방침</h1>
           <p className="text-gray-500 mt-4">
             허그닉스는 고객님의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.
           </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-xl inline-flex">
            <button
              onClick={() => onTabChange('kr')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'kr'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Lock size={16} />
              국내 (Korea)
            </button>
            <button
              onClick={() => onTabChange('gdpr')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'gdpr'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Globe size={16} />
              유럽 (GDPR)
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-600 bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200">
          {activeTab === 'kr' ? (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">개인정보 처리방침 (국내)</h3>
              
              <div className="space-y-8">
                <section>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">제1조 (개인정보의 처리 목적)</h4>
                  <p className="text-sm leading-relaxed">
                    주식회사 허그닉스(이하 '회사')는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br/>
                    1. 제품 및 서비스 제공 (안심 리포트 발송 등)<br/>
                    2. 고객 문의 응대 및 A/S 처리<br/>
                    3. 마케팅 및 광고 활용 (동의 시)
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">제2조 (처리하는 개인정보의 항목)</h4>
                  <p className="text-sm leading-relaxed">
                    회사는 서비스 제공을 위해 다음의 개인정보 항목을 처리하고 있습니다.<br/>
                    - 필수항목: 성명, 연락처(휴대전화번호), 설치 장소 주소<br/>
                    - 선택항목: 보호자 연락처, 이메일 주소<br/>
                    - 자동수집항목: 센서 감지 데이터(재실 여부, 활동량 등 비식별 데이터), 서비스 이용 기록
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">제3조 (개인정보의 파기)</h4>
                  <p className="text-sm leading-relaxed">
                    회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                  </p>
                </section>
                
                <p className="text-xs text-gray-400 mt-8">
                  본 방침은 2026년 1월 1일부터 시행됩니다.
                </p>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Privacy Policy (GDPR Standard)</h3>
              
              <div className="space-y-8">
                <section>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">1. Data Controller</h4>
                  <p className="text-sm leading-relaxed">
                    Hugnics Inc. is the data controller for the personal data collected through this service.<br/>
                    Address: 30, Pildong-ro 1-gil, Jung-gu, Seoul, Republic of Korea
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">2. Legal Basis for Processing</h4>
                  <p className="text-sm leading-relaxed">
                    We process your personal data based on the following legal grounds under GDPR:<br/>
                    - <strong>Performance of Contract:</strong> To provide the monitoring service and safety alerts.<br/>
                    - <strong>Legitimate Interests:</strong> To improve our sensor algorithms and ensure system security.<br/>
                    - <strong>Consent:</strong> For marketing communications.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">3. Your Rights</h4>
                  <p className="text-sm leading-relaxed">
                    Under the GDPR, you have the following rights:<br/>
                    - Right to access your personal data<br/>
                    - Right to rectification<br/>
                    - Right to erasure ('Right to be forgotten')<br/>
                    - Right to restriction of processing<br/>
                    - Right to data portability
                  </p>
                </section>

                <p className="text-xs text-gray-400 mt-8">
                  Effective Date: January 1, 2026
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default PrivacyPage;