export const TRANSLATIONS = {
  ko: {
    locale: 'ko',
    langName: 'KOR',
    common: {
      contact: 'B2B 도입 문의',
      preview: '체험 미리보기',
      inquiry: '문의하기',
      more: '더 보기',
      development: '개발 진행중',
      hiring: '채용 중'
    },
    nav: {
      solution: 'SOLUTION',
      product: 'PRODUCT',
      company: 'COMPANY',
      support: 'SUPPORT'
    },
    hero: {
      badge: 'HUGNICS INVISIBLE CARE',
      title: '지켜드리고 싶지만,\n훔쳐볼 순 없으니까.',
      desc: '카메라 없는 mmWave 레이더 기술로 부모님의 존엄을 지킵니다.\n허그닉스가 가장 위험한 곳을 가장 따뜻하게 돌봅니다.'
    },
    features: {
      title: '왜 허그닉스가 \n돌봄의 새로운 표준인가요?',
      subtitle: '기술이 보이지 않을 때 돌봄은 비로소 완성됩니다.',
      f1_t: '프라이버시 보호',
      f1_d: '렌즈 없는 레이더 센싱으로 욕실, 안방 어디든 사생활 침해 걱정 없이 안심하고 설치하세요.',
      f2_t: '정교한 낙상 감지',
      f2_d: '단순 움직임을 넘어 독자적인 파형 분석 AI로 낙상 사고를 99.8% 정확도로 즉각 식별합니다.',
      f3_t: '24/7 전천후 작동',
      f3_d: '완전한 어둠, 습기 가득한 환경에서도 레이더는 멈추지 않고 소중한 분의 안위를 살핍니다.',
      f4_t: '보호자 즉각 알림',
      f4_d: '사고 감지 시 보호자의 스마트폰으로 위급 상황을 즉각 전달하여 골든타임을 완벽히 지킵니다.'
    }
  },
  en: {
    locale: 'en',
    langName: 'ENG',
    common: {
      contact: 'Contact B2B',
      preview: 'Live Demo',
      inquiry: 'Inquiry',
      more: 'Learn More',
      development: 'In Development',
      hiring: 'Hiring'
    },
    nav: {
      solution: 'SOLUTION',
      product: 'PRODUCT',
      company: 'COMPANY',
      support: 'SUPPORT'
    },
    hero: {
      badge: 'HUGNICS INVISIBLE CARE',
      title: 'Watching Over Them,\nWithout Watching Them.',
      desc: 'Protecting the dignity of seniors with lens-free mmWave radar technology.\nHugnics cares for the most private spaces with the warmest technology.'
    },
    features: {
      title: 'Why Hugnics is the \nNew Standard for Care?',
      subtitle: 'Care is truly complete when technology remains invisible.',
      f1_t: 'Privacy-First',
      f1_d: 'Our camera-free radar sensing ensures safety in private spaces like bathrooms and bedrooms without any privacy concerns.',
      f2_t: 'Precision Fall Detection',
      f2_d: 'Beyond simple motion, our proprietary wave-analysis AI identifies falls with 99.8% accuracy.',
      f3_t: '24/7 All-Weather',
      f3_d: 'Our radar never stops monitoring, even in complete darkness or humid environments where cameras fail.',
      f4_t: 'Instant Alerts',
      f4_d: 'Immediate notifications are sent to guardians’ smartphones upon accident detection to protect the golden hour.'
    }
  }
};

export type TranslationType = typeof TRANSLATIONS.ko;
