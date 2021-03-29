import AdminMenu from "@src/component/admin/AdminMenu/AdminMenu";
import { useEffect, useRef, useState } from "react";
import BannerListHeader from "@src/component/admin/AdminBannerListHeader/BannerListHeader";
import AdminHomeBannerTitle from "@src/component/admin/AdminHomeBannerTitle/AdminHomeBannerTitle";
import AdminBannerList, {
  BannerList,
} from "@src/component/admin/AdminBannerList/AdminBannerList";
import useSWR from "swr";
import fetcher from "@utils/fetcher";

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

const marginRight = ["102px", "250px", "198px", "89px", "139px", "136px"];
// dummy Data

function AdminIndex() {
  const { data, error, revalidate, mutate } = useSWR("/admin/home-banner", fetcher, {
    dedupingInterval: 100000,
  });
  const [currentMenu, setCurrentMenu] = useState("홈 배너 관리");
  const [bannerList, setBannerList] = useState<BannerList[] | null>([]);
  const nextId = useRef(1);
  useEffect(() => {
    if (!data) return;
    if (!data.length) return;
    setBannerList(data);
    nextId.current = data.length;
  }, [data && data.length]);

  if (!data) return <div>loading</div>;
  return (
    <>
      <AdminMenu
        menus={menus}
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
      />
      <BannerListHeader revalidate={revalidate} data={data}/>
      <AdminHomeBannerTitle titles={bannerTitle} marginRight={marginRight} />
      <AdminBannerList lists={bannerList} setBannerList={setBannerList} revalidate={revalidate} />
    </>
  );
}

export default AdminIndex;
