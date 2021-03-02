import styled from "styled-components";
import MyPageHeader from "../../src/component/MyPageHeader";
import { useState, useEffect } from "react";
import MyInfo from "../../src/component/MyPage/MyInfo";
import QAList from "../../src/component/MyPage/QAList";
import PurchaseRequest from "../../src/component/MyPage/PurchaseRequest";
import Favorites from "../../src/component/MyPage/Favorites";
import { useRouter } from "next/router";
import useModal from "../../utils/useModal";
import AlertModal from "../../src/component/Modal/AlertModal";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

const MyPage = () => {
  const { data: userData, error: err } = useSWR("/auth/me", fetcher);
  const [currentId, setCurrentId] = useState(null);
  const router = useRouter();
  const { openModal, closeModal, ModalPortal } = useModal();

  const onChangeId = (id) => {
    setCurrentId(id);
  };

  const tabs = {
    작품구매문의: <PurchaseRequest />,
    찜한공연: <Favorites />,
    "1:1 문의": <QAList currentId={currentId} onChangeId={onChangeId} />,
    계정정보: <MyInfo />,
  };
  const [active, setActive] = useState("작품구매문의");

  useEffect(() => {
    if (err) {
      openModal();
      // router.push("/login");
    }
  }, [err]);

  const switchTabName = (e) => {
    setActive(e.target.innerText);
  };

  const redirectHandler = () => {
    router.push("/login");
  };

  if (err) {
    router.push("/login");
  }

  return (
    <>
      {!err && (
        <>
          <Background>
            <HeadSection>
              <MyPageHeader
                currTabNum={active}
                onClickHandler={switchTabName}
              />
            </HeadSection>
            <Divider />
            <Container>{tabs[active]}</Container>
            <ModalPortal>
              <AlertModal
                text={"로그인해주세요"}
                onClickBtn={redirectHandler}
              />
            </ModalPortal>
          </Background>
        </>
      )}
    </>
  );
};
const Background = styled.div`
  padding: 0 1rem;
`;

const Divider = styled.div`
  margin-top: 16px;
  margin-bottom: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  max-width: 924px;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const HeadSection = styled.div``;

export default MyPage;
