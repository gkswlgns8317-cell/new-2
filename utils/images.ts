/**
 * Image Asset Management
 * 
 * 모든 이미지 경로는 이 파일에서 관리합니다.
 * 추후 이미지가 변경되거나 CDN을 도입할 때 이 파일만 수정하면 됩니다.
 */

export const IMAGES = {
  // Hero Section (Main Banner)
  HERO: {
    // Root 폴더에 있는 파일은 '/' 로 시작합니다.
    BG: '/radar-bathroom.jpg', 
  },

  // Solution Section
  SOLUTION: {
    // 임시 이미지 (Placeholder) - 나중에 실제 이미지 파일명으로 교체하세요 (예: '/images/solution-radar.jpg')
    RADAR: 'https://picsum.photos/seed/radar/800/400',
    AI: 'https://picsum.photos/seed/ai/800/400',
    DATA: 'https://picsum.photos/seed/data/800/400',
  },

  // Product Section
  PRODUCT: {
    SENSOR: 'https://picsum.photos/seed/device/800/600',
    APP_MOCKUP: 'https://picsum.photos/seed/app/800/600',
  },

  // Company / Partners (나중에 로고 추가 시 사용)
  COMPANY: {
    // LOGO_SAMSUNG: '/images/partners/samsung.png',
  }
};

export default IMAGES;
