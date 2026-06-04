import React from 'react';

interface FooterProps {
  onNavigate: (page: string, subTab?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-100 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
             <span className="text-xl font-bold text-gray-800">HUGNICS</span>
             <p className="text-sm text-gray-500 mt-2">
               Invisible Safety, Warm Care.
             </p>
          </div>
          <div className="col-span-1 md:col-span-3">
             <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
               <div>
                 <h5 className="font-bold text-gray-700 mb-3">회사</h5>
                 <ul className="space-y-2 text-gray-500">
                   <li><button onClick={() => onNavigate('company', 'team')} className="hover:text-primary text-left">팀 소개</button></li>
                   <li><button onClick={() => onNavigate('company', 'vision')} className="hover:text-primary text-left">비전</button></li>
                   <li><button onClick={() => onNavigate('company', 'careers')} className="hover:text-primary text-left">채용</button></li>
                 </ul>
               </div>
               <div>
                 <h5 className="font-bold text-gray-700 mb-3">제품</h5>
                 <ul className="space-y-2 text-gray-500">
                   <li><button onClick={() => onNavigate('product', 'hardware')} className="hover:text-primary text-left">센서 모듈</button></li>
                   <li><button onClick={() => onNavigate('product', 'software')} className="hover:text-primary text-left">케어 플랫폼</button></li>
                 </ul>
               </div>
               <div>
                 <h5 className="font-bold text-gray-700 mb-3">고객지원</h5>
                 <ul className="space-y-2 text-gray-500">
                   <li><button onClick={() => onNavigate('support', 'faq')} className="hover:text-primary text-left">FAQ</button></li>
                   <li><button onClick={() => onNavigate('privacy', 'kr')} className="hover:text-primary text-left">개인정보처리방침</button></li>
                 </ul>
               </div>
             </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 Hugnics Inc. All rights reserved.</p>
          <div className="mt-2 md:mt-0 text-right">
             <p>서울특별시 중구 필동로 1길 30, 동국대학교 창업진흥센터</p>
             <p className="mt-1">대표이사: 한지훈 | 사업자등록번호: 123-45-67890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;