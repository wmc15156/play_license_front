import AdminMenu from "@src/component/admin/AdminMenu/AdminMenu";
import { useEffect, useState } from "react";
import BannerListHeader from "@src/component/admin/AdminBannerListHeader/BannerListHeader";
import AdminHomeBannerTitle from "@src/component/admin/AdminHomeBannerTitle/AdminHomeBannerTitle";
import AdminBannerList, {
  BannerList,
} from "@src/component/admin/AdminBannerList/AdminBannerList";
import color from "@styles/colors";
import URLpage from "@src/component/admin/layout/PR/URL/Url"
import RegisterRequest from "@src/component/admin/layout/PR/RegisterRequest/RegisterRequest"

const buyerMenus = [
  "홈 배너 관리",
  "큐레이션 관리",
  "작품관리",
  "구매문의",
  "자주 묻는 질문",
  "1:1 문의 관리",
];

const providerMenus = [
  '작품 및 제작사 등록 문의 URL',
  '작품 등록 문의 관리',
  '공지사항',
  '자주 묻는 질문',
  "1:1 문의 관리",
]

const bannerTitle = [
  "순서조정",
  "배너명",
  "Desktop",
  "Mobile",
  "홈노출",
  "URL",
  "삭제",
];

const dummyData: BannerList[] = [
  {
    id: 1,
    title: "서비스 소개 바로가기",
    exposure: false,
    desktopUrl: "http://url.com",
    mobileUrl: "http://mobile.com",
    url: "http://sangsangmaru.com",
  },
  {
    id: 2,
    title: "인기작품 바로가기",
    exposure: false,
    desktopUrl: "http://url.com",
    mobileUrl: "http://mobile.com",
    url: "http://sangsangmaru.com",
  },
  {
    id: 3,
    title: "요즘 가장 핫한 작품",
    exposure: false,
    desktopUrl: "http://url.com",
    mobileUrl: "http://mobile.com",
    url: "http://sangsangmaru.com",
  },
  {
    id: 4,
    title: "새로 등록된 작품",
    exposure: true,
    desktopUrl: "http://url.com",
    mobileUrl: "http://mobile.com",
    url: "http://sangsangmaru.com",
  },
  {
    id: 5,
    title: "공개예정 작품",
    exposure: false,
    desktopUrl: "http://url.com",
    mobileUrl: "http://mobile.com",
    url: "http://sangsangmaru.com",
  },
  {
    id: 6,
    title: "예술교육을 위한 작품",
    exposure: true,
    desktopUrl: "http://url.com",
    mobileUrl: "http://mobile.com",
    url: "http://sangsangmaru.com",
  },
];

const marginRight = ["102px", "250px", "198px", "89px", "139px", "136px"];
// dummy Data

const providerTabs = {
  
"작품 및 제작사 등록 문의 URL": <URLpage />,
"작품 등록 문의 관리": <RegisterRequest />,
// "공지사항": ,
// "자주 묻는 질문": ,
// "1:1 문의 관리": ,
}


function AdminIndex({ adminMode }) {
  const [currentMenu, setCurrentMenu] = useState(buyerMenus[0]);
  const [bannerList, setBannerList] = useState<BannerList[] | null>(dummyData);

  useEffect(() => {
    adminMode === 'buyer' ? setCurrentMenu(buyerMenus[0]) : setCurrentMenu(providerMenus[0])
    // setBannerList(dummyData);
  },[adminMode]);

  return (
    <>
      {adminMode === "buyer" && (
        <>
          <AdminMenu
            menus={buyerMenus}
            currentMenu={currentMenu}
            setCurrentMenu={setCurrentMenu}
            color={color.orange}
          />
          <BannerListHeader />
          <AdminHomeBannerTitle titles={bannerTitle} marginRight={marginRight} />
          <AdminBannerList lists={bannerList} setBannerList={setBannerList} />
        </>
      )}
      {adminMode === "provider" && (
        <>
          <AdminMenu
            menus={providerMenus}
            currentMenu={currentMenu}
            setCurrentMenu={setCurrentMenu}
            color={color.blue}
          />
          {providerTabs[currentMenu]}
        </>
      )}
    </>
  );
}

export default AdminIndex;
