import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Network, 
  Server, 
  ShieldCheck, 
  Cloud, 
  ChevronRight, 
  CheckCircle2,
  Download,
  ExternalLink
} from 'lucide-react';

const Services = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tab || '');

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    } else if (category && servicesData[category]?.subCategories?.length > 0) {
      setActiveTab(servicesData[category].subCategories[0].id);
    }
  }, [category, tab]);

  const servicesData: any = {
    network: {
      title: "Network",
      icon: <Network className="w-6 h-6" />,
      description: "기업 환경에 최적화된 안정적이고 보안성이 뛰어난 네트워크 인프라를 구축합니다.",
      subCategories: [
        { 
          id: 'fortinet', 
          name: 'Fortinet', 
          title: "Fortinet Security Fabric",
          description: "글로벌 1위 보안 네트워크 솔루션. 방화벽부터 엔드포인트까지 통합 보안을 제공합니다.",
          features: ["FortiGate (차세대 방화벽)", "FortiSwitch & FortiAP (보안 스위치/무선)", "FortiClient (ZTNA/VPN)", "FortiSASE (클라우드 보안)"],
          image: "https://picsum.photos/800/400?random=1"
        },
        { 
          id: 'axgate', 
          name: 'AXGATE', 
          title: "AXGATE UTM",
          description: "국내 환경에 최적화된 CC인증 차세대 방화벽. 강력한 애플리케이션 제어와 사용자별 정책 관리를 지원합니다.",
          features: ["App 제어 및 사용자 인증", "VPN (IPSec/SSL)", "유해 사이트 차단", "실시간 모니터링"],
          image: "https://picsum.photos/800/400?random=2"
        },
        { 
          id: 'netgear', 
          name: 'NETGEAR', 
          title: "NETGEAR Business",
          description: "중소기업(SMB)을 위한 합리적이고 강력한 네트워크 스위치 및 무선 솔루션.",
          features: ["ProSAFE 평생 품질 보증", "Insight 클라우드 관리", "PoE/PoE+ 지원 스위치", "Orbi Pro 메쉬 와이파이"],
          image: "https://picsum.photos/800/400?random=3"
        },
        { 
          id: 'aruba', 
          name: 'ARUBA', 
          title: "HPE Aruba Networking",
          description: "엔터프라이즈급 성능과 안정성을 제공하는 유무선 네트워크 솔루션.",
          features: ["AI 기반 네트워크 운영", "Aruba Central 클라우드 관리", "Dynamic Segmentation", "Wi-Fi 6/6E 고성능 AP"],
          image: "https://picsum.photos/800/400?random=4"
        },
        { 
          id: 'ruckus', 
          name: 'Ruckus', 
          title: "Ruckus Networks",
          description: "고밀도 환경에서도 끊김 없는 최상의 Wi-Fi 성능을 제공하는 프리미엄 무선 솔루션.",
          features: ["BeamFlex+ 적응형 안테나", "SmartMesh 기술", "IoT 통합 지원", "Cloud / Unleashed 관리"],
          image: "https://picsum.photos/800/400?random=5"
        },
        { 
          id: 'zyxel', 
          name: 'ZyXEL', 
          title: "ZyXEL Networks",
          description: "통합 보안과 네트워크를 클라우드(Nebula)로 간편하게 관리하는 올인원 솔루션.",
          features: ["Nebula 클라우드 매니지먼트", "USG FLEX 방화벽", "GS1920 스마트 스위치", "Wi-Fi 6 AP"],
          image: "https://picsum.photos/800/400?random=6"
        },
        { 
          id: 'maintenance', 
          name: 'Maintenance', 
          title: "Network Maintenance (SLA)",
          description: "24/7 모니터링과 정기 점검을 통해 네트워크 장애를 예방하고 신속하게 대응합니다.",
          features: ["SLA 기반 장애 대응", "정기 방문 점검", "펌웨어 업데이트 관리", "COMON 모니터링 서비스 제공"],
          image: "https://picsum.photos/800/400?random=7"
        }
      ]
    },
    'it-infra': {
      title: "IT Infra",
      icon: <Server className="w-6 h-6" />,
      description: "효율적인 계정 관리와 시스템 운영을 위한 스마트한 IT 인프라 솔루션.",
      subCategories: [
        { 
          id: 'adpac', 
          name: 'ADPaC', 
          title: "ADPaC (Active Directory Package)",
          description: "GS인증 1등급을 획득한 한국형 AD 계정 관리 솔루션. 인사 시스템과 AD를 완벽하게 연동합니다.",
          features: ["SyncManager (인사 연동)", "PassChanger (비밀번호 관리)", "ADManager (웹 기반 관리)", "Teams 조직도 연동"],
          image: "https://picsum.photos/800/400?random=8"
        },
        { 
          id: 'idpac', 
          name: 'ID PaC', 
          title: "ID PaC (Identity Package)",
          description: "SaaS(Google Workspace, M365) 계정과 인사 정보를 자동 동기화하여 관리 효율을 높입니다.",
          features: ["Google Workspace 계정 자동 생성/삭제", "M365 라이선스 자동 할당", "부서/직책 정보 동기화", "퇴사자 계정 자동 비활성화"],
          image: "https://picsum.photos/800/400?random=9"
        },
        { 
          id: 'ad', 
          name: 'Active Directory', 
          title: "Active Directory 구축 및 운영",
          description: "기업의 중앙 집중식 인증 및 정책 관리를 위한 AD 인프라를 설계하고 구축합니다.",
          features: ["On-Premise AD 구축", "Azure AD (Entra ID) 하이브리드 구성", "GPO (그룹 정책) 최적화", "CloudAD 구독 서비스"],
          image: "https://picsum.photos/800/400?random=10"
        }
      ]
    },
    security: {
      title: "Security (SASE)",
      icon: <ShieldCheck className="w-6 h-6" />,
      description: "제로 트러스트 기반의 통합 보안으로 기업의 소중한 자산을 보호합니다.",
      subCategories: [
        { 
          id: 'sase', 
          name: 'SASE / ZTNA', 
          title: "SASE & Zero Trust Network Access",
          description: "어디서나 안전하게 사내망에 접속할 수 있는 클라우드 기반 보안 접근 제어.",
          features: ["FortiSASE", "Cato Networks", "Zscaler", "VPN 없는 안전한 접속"],
          image: "https://picsum.photos/800/400?random=11"
        },
        { 
          id: 'iam', 
          name: 'IAM (OKTA)', 
          title: "Identity & Access Management",
          description: "Okta를 통한 통합 인증(SSO) 및 다중 인증(MFA)으로 계정 보안을 강화합니다.",
          features: ["Single Sign-On (SSO)", "Multi-Factor Authentication (MFA)", "Lifecycle Management", "Universal Directory"],
          image: "https://picsum.photos/800/400?random=12"
        },
        { 
          id: 'edr', 
          name: 'EPP / EDR', 
          title: "Endpoint Protection & Response",
          description: "AI 기반의 차세대 백신으로 랜섬웨어와 신종 위협을 실시간으로 탐지하고 차단합니다.",
          features: ["SentinelOne (AI EDR)", "ESET Endpoint Security", "랜섬웨어 롤백 기능", "위협 가시화 및 분석"],
          image: "https://picsum.photos/800/400?random=13"
        },
        { 
          id: 'dlp', 
          name: 'DLP', 
          title: "Data Loss Prevention",
          description: "Endpoint Protector를 통해 개인정보 및 중요 기업 데이터의 유출을 원천 차단합니다.",
          features: ["매체 제어 (USB, 외장하드)", "콘텐츠 인식 보호", "개인정보 검출 및 암호화", "Mac/Windows/Linux 지원"],
          image: "https://picsum.photos/800/400?random=14"
        },
        { 
          id: 'casb', 
          name: 'CASB', 
          title: "Cloud Access Security Broker",
          description: "클라우드 서비스(SaaS) 이용 시 발생할 수 있는 보안 위협을 가시화하고 통제합니다.",
          features: ["SaaS 애플리케이션 사용 현황 분석", "데이터 공유 정책 제어", "비인가 앱 차단 (Shadow IT)", "규제 준수 모니터링"],
          image: "https://picsum.photos/800/400?random=15"
        },
        { 
          id: 'email', 
          name: 'Email Security', 
          title: "Email Security (Proofpoint)",
          description: "지능형 이메일 공격(BEC, 피싱, 악성 첨부파일)으로부터 사용자를 보호합니다.",
          features: ["스팸 및 피싱 차단", "URL/첨부파일 샌드박스 분석", "이메일 암호화", "사칭 메일 방지"],
          image: "https://picsum.photos/800/400?random=16"
        },
        { 
          id: 'nac', 
          name: 'NAC', 
          title: "Network Access Control (Genian)",
          description: "네트워크에 접속하는 모든 단말을 식별하고, 보안 정책에 따라 접근을 제어합니다.",
          features: ["단말 가시성 확보 (IoT 포함)", "비인가 단말 차단", "필수 SW 설치 강제", "IP 관리 (IPAM)"],
          image: "https://picsum.photos/800/400?random=17"
        }
      ]
    },
    software: {
      title: "Software (Cloud)",
      icon: <Cloud className="w-6 h-6" />,
      description: "업무 생산성을 높이는 최적의 클라우드 소프트웨어와 인프라를 제공합니다.",
      subCategories: [
        { 
          id: 'saas', 
          name: 'SaaS', 
          title: "Productivity SaaS",
          description: "Google Workspace, Microsoft 365 등 협업 도구의 라이선스 공급 및 기술 지원.",
          features: ["Google Workspace (Reseller)", "Microsoft 365 (CSP)", "Dropbox Business", "Slack / Notion"],
          image: "https://picsum.photos/800/400?random=18"
        },
        { 
          id: 'iaas', 
          name: 'IaaS', 
          title: "Cloud Infrastructure",
          description: "NAVER Cloud Platform, AWS 등 클라우드 인프라 구축 및 매니지드 서비스.",
          features: ["NAVER Cloud Platform (MSP)", "AWS Architecture Design", "Hybrid Cloud 구성", "비용 최적화 컨설팅"],
          image: "https://picsum.photos/800/400?random=19"
        },
        { 
          id: 'backup', 
          name: 'Backup', 
          title: "Cloud Backup (Acronis)",
          description: "랜섬웨어 방어 기능이 통합된 클라우드 백업 솔루션으로 데이터를 안전하게 보호합니다.",
          features: ["서버/PC/모바일 전체 백업", "M365/Google Workspace 백업", "랜섬웨어 탐지 및 차단", "재해 복구 (DR)"],
          image: "https://picsum.photos/800/400?random=20"
        },
        { 
          id: 'design', 
          name: 'Design', 
          title: "Creative Software",
          description: "Adobe Creative Cloud, Unity, Autodesk 등 크리에이티브 전문가를 위한 소프트웨어.",
          features: ["Adobe CC 기업용 라이선스", "Unity Pro / Enterprise", "Autodesk AEC/PDM Collection", "폰트 및 이미지 라이선스"],
          image: "https://picsum.photos/800/400?random=21"
        },
        { 
          id: 'gotsales', 
          name: 'GotSales', 
          title: "GotSales (CRM & Asset)",
          description: "영업 기회 관리부터 IT 자산 실물 추적까지, B2B 비즈니스에 최적화된 올인원 솔루션.",
          features: ["영업 파이프라인 시각화", "견적/계약 자동화", "IT 자산 실물 추적 (QR/Barcode)", "유지보수 계약 관리"],
          image: "https://picsum.photos/800/400?random=22"
        },
        { 
          id: 'cowork', 
          name: 'CoWork.Day', 
          title: "CoWork.Day (Groupware)",
          description: "메일, 결재, 일정, 근태 관리를 통합한 차세대 스마트 워크플레이스.",
          features: ["전자결재 (주 52시간 근태 연동)", "프로젝트/태스크 관리", "화상회의 & 메신저", "Google/M365 계정 연동"],
          image: "https://picsum.photos/800/400?random=23"
        }
      ]
    }
  };

  const currentCategory = servicesData[category || 'network'];
  const currentSubCategory = currentCategory?.subCategories.find((sub: any) => sub.id === activeTab) || currentCategory?.subCategories[0];

  if (!currentCategory) {
    return <div className="p-20 text-center">Category not found</div>;
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4 text-orange-500">
            {currentCategory.icon}
            <span className="font-bold text-lg tracking-wider uppercase">{currentCategory.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{currentCategory.title} Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {currentCategory.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-1">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-3">
              {currentCategory.title} Menu
            </h3>
            {currentCategory.subCategories.map((sub: any) => (
              <button
                key={sub.id}
                onClick={() => setActiveTab(sub.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                  activeTab === sub.id 
                    ? 'bg-orange-50 text-orange-700 shadow-sm ring-1 ring-orange-200' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {sub.name}
                {activeTab === sub.id && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <span className="text-orange-600 font-bold text-sm mb-2 block tracking-wider uppercase">
                  {currentCategory.title} &gt; {currentSubCategory.name}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentSubCategory.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-orange-500 pl-4">
                  {currentSubCategory.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {currentSubCategory.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-auto">
                  <img 
                    src={currentSubCategory.image} 
                    alt={currentSubCategory.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">도입 문의 및 상담</h3>
                  <p className="text-sm text-gray-600">
                    {currentSubCategory.name} 솔루션에 대해 더 자세히 알고 싶으신가요? 전문 컨설턴트가 도와드립니다.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link 
                    to="/diagnosis"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-md whitespace-nowrap"
                  >
                    상담 신청하기
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Services;
