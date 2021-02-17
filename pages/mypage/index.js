import styled from "styled-components";
import MyPageHeader from "../../src/component/MyPageHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import MyInfo from "../../src/component/MyPage/MyInfo";
import QAList from "../../src/component/MyPage/QAList";
import PurchaseRequest from "../../src/component/MyPage/PurchaseRequest";
import Favorites from "../../src/component/MyPage/Favorites";

const MyPage = () => {
  return (
    <Background>
      <HeadSection>
        <MyPageHeader />
      </HeadSection>
      <Divider />
      <Container>
        <PurchaseRequest />
        <Favorites />
        <QAList />
        <MyInfo />
      </Container>
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
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const HeadSection = styled.div``;

export default MyPage;
