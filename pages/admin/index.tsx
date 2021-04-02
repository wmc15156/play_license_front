import AdminMenu from "@src/component/admin/AdminMenu/AdminMenu";
import { useEffect, useRef, useState } from "react";
import BannerListHeader from "@src/component/admin/AdminBannerListHeader/BannerListHeader";
import AdminHomeBannerTitle from "@src/component/admin/AdminHomeBannerTitle/AdminHomeBannerTitle";
import AdminBannerList, {
  BannerList,
} from "@src/component/admin/AdminBannerList/AdminBannerList";
import color from "@styles/colors";
import URLpage from "@src/component/admin/layout/PR/URL/Url";
import RegisterRequest from "@src/component/admin/layout/PR/RegisterRequest/RegisterRequest";
import Notice from "@src/component/admin/layout/PR/Notice/Notice";
import FAQ from "@src/component/admin/layout/PR/FAQ/FAQ";
import Question from "@src/component/admin/layout/PR/1:1/1:1";
import useSWR from "swr";
import fetcher from "@utils/fetcher";

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
]


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

const marginRight = ["102px", "250px", "198px", "89px", "139px", "136px"];
// dummy Data

const providerTabs = {
  
"작품 및 제작사 등록 문의 URL": <URLpage />,
"작품 등록 문의 관리": <RegisterRequest />,
"공지사항": <Notice />,
"자주 묻는 질문": <FAQ /> ,
"1:1 문의 관리": <Question />,
}



function AdminIndex({ adminMode }) {
  // const { data, error, revalidate, mutate } = useSWR("/admin/home-banner", fetcher, {
  //   dedupingInterval: 100000,
  // });
  const [currentMenu, setCurrentMenu] = useState(buyerMenus[0]);
  // const [bannerList, setBannerList] = useState<BannerList[] | null>([]);
  const [bannerList, setBannerList] = useState<BannerList[] | null>(dummyData);
  const nextId = useRef(1);
  
  // useEffect(() => {
  //   if (!data) return;
  //   if (!data.length) return;
  //   setBannerList(data);
  //   nextId.current = data.length;
  // }, [data && data.length]);

  // if (!data) return <div>loading</div>;

  
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
          {/* <BannerListHeader revalidate={revalidate} data={data}/> */}
          <BannerListHeader/>
          <AdminHomeBannerTitle titles={bannerTitle} marginRight={marginRight} />
          {/* <AdminBannerList lists={bannerList} setBannerList={setBannerList} revalidate={revalidate} /> */}
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
