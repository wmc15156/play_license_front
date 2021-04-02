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
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import AdminCurationLists from "@src/component/admin/AdminCurationList/CurationLists";
import AddCuration from "@src/component/admin/AdminAddCuration/AddCuration";

const buyerMenus = [
  "홈 배너 관리",
  "큐레이션 관리",
  "작품관리",
  "구매문의",
  "자주 묻는 질문",
  "1:1 문의 관리",
];

const providerMenus = [
  "작품 및 제작사 등록 문의 URL",
  "작품 등록 문의 관리",
  "공지사항",
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

export const curationTitle = [
  "순서조정",
  "큐레이션 명",
  "종류",
  "홈 노출",
  "설정한 작품수",
  "수정",
  "삭제",
];

const dummyCurationData = [
  {
    id: 1,
    curationName: "요즘 가장 핫한 작품",
    kinds: "디폴트",
    exposure: true,
    productCount: 10,
    order: 1,
  },
  {
    id: 2,
    curationName: "새로 등록된 작품",
    kinds: "디폴트",
    exposure: true,
    productCount: 10,
    order: 2,
  },
  {
    id: 3,
    curationName: "공개예정 작품",
    kinds: "디폴트",
    exposure: false,
    productCount: 10,
    order: 3,
  },
  {
    id: 4,
    curationName: "예술교육을 위한 작품",
    kinds: "스페셜",
    exposure: false,
    productCount: 10,
    order: 4,
  },
  {
    id: 5,
    curationName: "겨울에 딱 어울리는 작품",
    kinds: "스페셜",
    exposure: false,
    productCount: 10,
    order: 5,
  },
  {
    id: 6,
    curationName: "귀호강 고막멜팅 작품",
    kinds: "스페셜",
    exposure: false,
    productCount: 10,
    order: 6,
  },
  {
    id: 7,
    curationName: "아이들을 위한 작품",
    kinds: "스페셜",
    exposure: false,
    productCount: 10,
    order: 7,
  },
  {
    id: 8,
    curationName: "메소드 연기가 빛나는 작품",
    kinds: "스페셜",
    exposure: false,
    productCount: 10,
    order: 8,
  },
  {
    id: 9,
    curationName: "의상이 매력적인 작품",
    kinds: "스페셜",
    exposure: false,
    productCount: 10,
    order: 9,
  },
  {
    id: 10,
    curationName: "의상이 매력적인 작품",
    kinds: "스페셜",
    exposure: false,
    productCount: 10,
    order: 10,
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
};

export type CurationList = {
  id: number;
  curationName: string;
  kinds: string;
  exposure: boolean;
  productCount: number;
  order: number;
};

function AdminIndex({ adminMode }) {
  const { data, error, revalidate, mutate } = useSWR(
    "/admin/home-banner",
    fetcher,
    {
      dedupingInterval: 100000,
    }
  );

  const [open, setOpen] = useState(false);

  const [currentMenu, setCurrentMenu] = useState(buyerMenus[0]);
  const [bannerList, setBannerList] = useState<BannerList[] | null>([]);
  const [subContainer, setSubContainer] = useState(true);
  const [curationList, setCurationList] = useState<CurationList[] | null>(
    dummyCurationData
  );
  const nextId = useRef(1);

  const toggle = () => {
    setOpen(() => !open);
  };

  const contentsList = {
    "홈 배너 관리": (
      <AdminBannerList
        lists={bannerList}
        setBannerList={setBannerList}
        revalidate={revalidate}
        subContainer={subContainer}
      />
    ),
    "큐레이션 관리": (
      <AdminCurationLists
        lists={curationList}
        setCurationList={setCurationList}
        subContainer={subContainer}
      />
    ),
    "배너 추가하기": <AddCuration />,
  };
  useEffect(() => {
    if (!data) return;
    if (!data.length) return;
    setBannerList(data);
    nextId.current = data.length;
  }, [data && data.length]);

  useEffect(() => {
    adminMode === "buyer"
      ? setCurrentMenu(buyerMenus[0])
      : setCurrentMenu(providerMenus[0]);
    // setBannerList(dummyData);
  }, [adminMode]);

  if (!data) return <div>loading</div>;

  return (
    <>
      {adminMode === "buyer" && (
        <>
          <AdminMenu
            menus={buyerMenus}
            currentMenu={currentMenu}
            setCurrentMenu={setCurrentMenu}
            color={color.orange}
            setSubContainer={setSubContainer}
          />
          <BannerListHeader
            revalidate={revalidate}
            data={data}
            currentMenu={currentMenu}
            curationList={curationList}
            isValid={buyerMenus.includes(currentMenu)}
            setCurrentMenu={setCurrentMenu}
            subContainer={subContainer}
            setSubContainer={setSubContainer}
          />
          <AdminHomeBannerTitle
            titles={bannerTitle}
            currentMenu={currentMenu}
            subContainer={subContainer}
          />
          {!subContainer ? (
            <AddCuration setSubContainer={setSubContainer} />
          ) : (
            contentsList[currentMenu]
          )}
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
