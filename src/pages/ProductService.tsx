import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Shield, 
  Wifi, 
  Server, 
  Cloud, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Battery,
  Monitor,
  Lock
} from 'lucide-react';

// Data for all services
const productData: Record<string, any> = {
  // Network & Security
  'fortinet': {
    title: 'Fortinet',
    category: 'Network & Security',
    description: '글로벌 No.1 보안 패브릭 플랫폼. 차세대 방화벽(NGFW)부터 SD-WAN, 보안 스위치 및 무선 AP까지 통합 보안을 제공합니다.',
    icon: <Shield className="w-12 h-12 text-red-600" />,
    features: [
      'FortiGate: 고성능 차세대 방화벽 (NGFW)',
      'FortiSwitch & FortiAP: 보안이 내재된 네트워크 접근 계층',
      'FortiSASE: 클라우드 기반 보안 서비스',
      'AI 기반 위협 인텔리전스 및 자동화된 대응'
    ],
    color: 'red'
  },
  'aruba': {
    title: 'Aruba / HPE',
    category: 'Network & Security',
    description: '유무선 네트워크의 절대 강자. AI 기반의 네트워크 운영 및 관리를 통해 최상의 연결 경험을 제공합니다.',
    icon: <Wifi className="w-12 h-12 text-orange-500" />,
    features: [
      'Aruba ESP: 엣지 서비스 플랫폼',
      'Wi-Fi 6/6E 고성능 무선 AP',
      'CX 스위칭: 차세대 클라우드 네이티브 스위치',
      'ClearPass: 네트워크 접근 제어 및 정책 관리'
    ],
    color: 'orange'
  },
  'zyxel': {
    title: 'ZyXEL',
    category: 'Network & Security',
    description: '합리적인 가격과 강력한 성능의 네트워크 솔루션. 클라우드 관리형 네트워킹(Nebula)으로 어디서나 쉽고 간편하게 관리하세요.',
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    features: [
      'Nebula Cloud: 언제 어디서나 네트워크 통합 관리',
      'USG FLEX: 클라우드 기반 보안 방화벽',
      '고성능 무선 AP 및 스마트 스위치',
      '중소기업(SMB)에 최적화된 올인원 네트워크'
    ],
    color: 'blue'
  },
  'axgate': {
    title: 'AXGATE',
    category: 'Network & Security',
    description: '대한민국 대표 네트워크 보안 솔루션. 차세대 방화벽과 VPN으로 안전한 네트워크 환경을 구축합니다.',
    icon: <Lock className="w-12 h-12 text-indigo-600" />,
    features: [
      'AXGATE Series: 고성능 차세대 방화벽',
      'SSL VPN: 안전한 원격 접속 환경 제공',
      '통합 위협 관리 (UTM)',
      '국내 컴플라이언스 완벽 대응'
    ],
    color: 'indigo'
  },

  // System & Infra
  'synology': {
    title: 'Synology',
    category: 'System & Infra',
    description: '데이터 관리의 표준 NAS 솔루션. 파일 공유, 백업, 가상화 스토리지까지 모든 데이터를 안전하게 관리합니다.',
    icon: <Database className="w-12 h-12 text-gray-700" />,
    features: [
      'DiskStation: 강력한 성능의 타워형 NAS',
      'Active Backup: PC, 서버, 가상머신 무제한 백업',
      'Synology Drive: 프라이빗 클라우드 파일 공유',
      'Surveillance Station: 지능형 영상 보안 감시'
    ],
    color: 'gray'
  },
  'apc': {
    title: 'APC by Schneider',
    category: 'System & Infra',
    description: '전원 보호 및 관리 솔루션의 글로벌 리더. 정전 시에도 시스템을 안전하게 보호하는 UPS 솔루션입니다.',
    icon: <Battery className="w-12 h-12 text-green-600" />,
    features: [
      'Smart-UPS: 서버 및 네트워크 장비 보호',
      'Back-UPS: PC 및 주변기기 전원 보호',
      '서지 보호 및 전력 조절',
      'PowerChute: 전원 관리 소프트웨어'
    ],
    color: 'green'
  },
  'server-pc': {
    title: 'Server & PC',
    category: 'System & Infra',
    description: '기업 환경에 최적화된 서버 및 워크스테이션, 업무용 PC를 맞춤형으로 제안하고 구축합니다.',
    icon: <Monitor className="w-12 h-12 text-slate-700" />,
    features: [
      'Dell / HP / Lenovo 엔터프라이즈 서버 구축',
      '고성능 워크스테이션 및 업무용 PC 납품',
      '커스텀 조립 서버 및 PC 제작',
      '초기 세팅 및 기술 지원 서비스'
    ],
    color: 'slate'
  },

  // Cloud & Software
  'google-workspace': {
    title: 'Google Workspace',
    category: 'Cloud & Software',
    description: '클라우드 협업의 시작. Gmail, Drive, Meet 등 비즈니스에 필요한 모든 도구를 하나로 통합했습니다.',
    icon: <Cloud className="w-12 h-12 text-blue-500" />,
    features: [
      '기업용 Gmail 및 캘린더',
      'Google Drive: 안전한 클라우드 저장소',
      'Google Meet: 끊김 없는 화상 회의',
      'Docs, Sheets, Slides 실시간 협업'
    ],
    color: 'blue'
  },
  'microsoft-365': {
    title: 'Microsoft 365',
    category: 'Cloud & Software',
    description: '가장 익숙하고 강력한 오피스 솔루션. Office 앱과 클라우드 서비스로 업무 생산성을 극대화하세요.',
    icon: <Cloud className="w-12 h-12 text-blue-700" />,
    features: [
      'Word, Excel, PowerPoint 데스크톱/웹 앱',
      'Teams: 팀 협업 및 커뮤니케이션 허브',
      'OneDrive: 1TB 클라우드 스토리지',
      'Exchange Online: 기업용 이메일 호스팅'
    ],
    color: 'blue'
  },
  'adobe': {
    title: 'Adobe',
    category: 'Cloud & Software',
    description: '크리에이티브의 완성. Photoshop, Illustrator 등 세계 최고의 창작 도구를 기업 라이선스로 제공합니다.',
    icon: <Monitor className="w-12 h-12 text-red-600" />,
    features: [
      'Creative Cloud for Teams',
      'Photoshop, Illustrator, Premiere Pro',
      'Acrobat DC: PDF 문서 솔루션',
      '라이선스 관리 및 기술 지원'
    ],
    color: 'red'
  },

  // Maintenance
  'maintenance': {
    title: 'IT 유지보수',
    category: 'Maintenance',
    description: '전문 엔지니어의 체계적인 관리. 정기 점검과 신속한 장애 대응으로 IT 인프라를 최상의 상태로 유지합니다.',
    icon: <Settings className="w-12 h-12 text-orange-600" />,
    features: [
      '정기 방문 점검 및 리포트 제공',
      '장애 발생 시 긴급 출동 및 원격 지원',
      '하드웨어/소프트웨어 통합 유지보수',
      '전담 엔지니어 배정 및 이력 관리'
    ],
    color: 'orange'
  },
  'crn': {
    title: 'CRN (구독형 네트워크)',
    category: 'Maintenance',
    description: 'Coraise Rental Network. 초기 도입 비용 없이 월 구독료로 최신 네트워크 장비와 유지보수를 한 번에 이용하세요.',
    icon: <CheckCircle2 className="w-12 h-12 text-teal-600" />,
    features: [
      '초기 구축 비용 0원 (월 구독 방식)',
      '프리미엄 네트워크 장비 무상 임대',
      '무상 유지보수 및 장애 대응 포함',
      '계약 기간 종료 후 소유권 이전 옵션'
    ],
    color: 'teal'
  }
};

const ProductService = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productData[productId || 'fortinet'];

  if (!product) {
    return <div className="p-20 text-center">Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Compact Hero */}
      <div className={`bg-${product.color}-900 text-white py-16 px-4`}>
        <div className="max-w-4xl mx-auto flex items-center gap-6">
          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
            {product.icon}
          </div>
          <div>
            <div className="text-sm font-medium text-white/70 mb-1 uppercase tracking-wider">{product.category}</div>
            <h1 className="text-3xl md:text-4xl font-bold">{product.title}</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 -mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
            {product.description}
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">주요 특징</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <CheckCircle2 className={`w-5 h-5 text-${product.color}-600 mr-3 flex-shrink-0 mt-0.5`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-8 border-t border-gray-100">
            <Link 
              to="/diagnosis"
              className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-${product.color}-600 hover:bg-${product.color}-700 transition-colors`}
            >
              도입 문의하기
            </Link>
            <Link 
              to="/cases"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              관련 사례 보기
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductService;
