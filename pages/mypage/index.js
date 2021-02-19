import styled from "styled-components";
import MyPageHeader from "../../src/component/MyPageHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import MyInfo from "../../src/component/MyPage/MyInfo";
import QAList from "../../src/component/MyPage/QAList";
import PurchaseRequest from "../../src/component/MyPage/PurchaseRequest";
import Favorites from "../../src/component/MyPage/Favorites";

const MyPage = () => {
  const tabs = {
    작품구매문의: <PurchaseRequest />,
    찜한공연: <Favorites />,
    "1:1 문의": <QAList />,
    계정정보: <MyInfo />,
  };
  const [active, setActive] = useState(0);

  const switchTabNumber = (e) => {
    // console.log(e.target.innerText, "target??");
    setActive(e.target.innerText);
  };

  return (
    <Background>
      <HeadSection>
        <MyPageHeader currTabNum={active} onClickHandler={switchTabNumber} />
      </HeadSection>
      <Divider />
      <Container>{tabs[active]}</Container>
    </Background>
  );
};
const Background = styled.div`
  padding: 0 1rem;
`;

const Divider = styled.div`
  margin-top: 16px;
  margin-bottom: 64px;
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
