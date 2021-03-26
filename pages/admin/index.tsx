import AdminMenu from "@src/component/admin/AdminMenu/AdminMenu";
import { useEffect, useState } from "react";
import BannerListHeader from "@src/component/admin/AdminBannerListHeader/BannerListHeader";
import AdminHomeBannerTitle from "@src/component/admin/AdminHomeBannerTitle/AdminHomeBannerTitle";
import AdminBannerList, {
  BannerList,
} from "@src/component/admin/AdminBannerList/AdminBannerList";

const menus = [
  "홈 배너 관리",
  "큐레이션 관리",
  "작품관리",
  "구매문의",
  "자주 묻는 질문",
  "1:1 문의 관리",
];

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

function AdminIndex() {
  const [currentMenu, setCurrentMenu] = useState("홈 배너 관리");
  const [bannerList, setBannerList] = useState<BannerList[] | null>(dummyData);

  // useEffect(() => {
  //   setBannerList(dummyData);
  // },[]);

  return (
    <>
      <AdminMenu
        menus={menus}
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
      />
      <BannerListHeader />
      <AdminHomeBannerTitle titles={bannerTitle} marginRight={marginRight} />
      <AdminBannerList lists={bannerList} setBannerList={setBannerList} />
    </>
  );
}

export default AdminIndex;
