const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

/**
 * SEO_DATA: 언어별/페이지별 메타 데이터 정의
 */
const SEO_DATA = {
  ko: {
    lang: 'ko',
    title: 'Hugnics | 존엄을 지키는 비접촉 낙상 감지 솔루션',
    description: '카메라 없이 mmWave 레이더로 부모님의 프라이버시를 지키는 허그닉스. 낙상 감지 및 헬스케어의 새로운 표준을 경험하세요.',
    pages: {
      solution: '기술 솔루션 - Hugnics mmWave Radar',
      product: '제품 소개 - Hugnics Care Sensor',
      company: '회사 소개 - 혁신을 만드는 사람들',
      support: '고객 지원 - 무엇을 도와드릴까요?',
      privacy: '개인정보처리방침 - 허그닉스'
    }
  },
  en: {
    lang: 'en',
    title: 'Hugnics - Privacy-First Fall Detection Radar for Seniors',
    description: 'Hugnics provides camera-free fall detection using mmWave radar technology. Protect the dignity and safety of your loved ones with smart, invisible care.',
    pages: {
      solution: 'Technology Solution - mmWave Radar & AI',
      product: 'Product - Hugnics Care Hardware & Software',
      company: 'Company - Innovation with People',
      support: 'Support - How can we help you?',
      privacy: 'Privacy Policy - Hugnics'
    }
  }
};

/**
 * 사이트맵 (한국어 & 영어 버전 통합)
 */
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.hugnics.com/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.hugnics.com/en"/>
    <xhtml:link rel="alternate" hreflang="ko" href="https://www.hugnics.com/"/>
    <lastmod>2026-01-20</lastmod><priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.hugnics.com/en</loc>
    <xhtml:link rel="alternate" hreflang="ko" href="https://www.hugnics.com/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.hugnics.com/en"/>
    <lastmod>2026-01-20</lastmod><priority>1.0</priority>
  </url>
</urlset>`;

app.get(['/sitemap.xml', '/sitemap_index.xml'], (req, res) => {
  res.header('Content-Type', 'application/xml').send(sitemapContent);
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send("User-agent: *\nAllow: /\nSitemap: https://www.hugnics.com/sitemap.xml");
});

const PORT = process.env.PORT || 8080;
const DIST_PATH = path.join(__dirname, 'dist');

// 정적 자산 서빙 (HTML 제외)
app.use(express.static(DIST_PATH, {
  maxAge: '1d',
  index: false // 우리가 직접 핸들링할 것이므로 끔
}));

/**
 * [핵심] 다국어 SEO 인젝션 핸들러
 */
app.get('*', (req, res) => {
  // 1. 언어 결정
  const isEn = req.path.startsWith('/en');
  const langKey = isEn ? 'en' : 'ko';
  const config = SEO_DATA[langKey];

  // 2. 서브 페이지 결정 (예: /en/product -> product)
  const pathParts = req.path.split('/').filter(Boolean);
  const pageKey = isEn ? (pathParts[1] || 'home') : (pathParts[0] || 'home');
  
  // 3. 메타 데이터 매칭
  const finalTitle = config.pages[pageKey] ? `${config.pages[pageKey]} | Hugnics` : config.title;
  const finalDesc = config.description;

  // 4. Hreflang 헤더 설정
  const baseUrl = 'https://www.hugnics.com';
  res.set('Link', `<${baseUrl}/>; rel="alternate"; hreflang="ko", <${baseUrl}/en>; rel="alternate"; hreflang="en"`);

  // 5. HTML 읽기 및 주입
  const htmlPath = path.join(DIST_PATH, 'index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    html = html
      .replace(/__LANG__/g, config.lang)
      .replace(/__TITLE__/g, finalTitle)
      .replace(/__DESCRIPTION__/g, finalDesc);

    res.send(html);
  } else {
    res.status(404).send('Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`[HUGNICS GLOBAL] Multilingual SEO Server running on port ${PORT}`);
});