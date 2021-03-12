import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import HighlightVideo from "../PerformanceDetail/HighlightVideo";
import About from "./About";
import Section1 from "./Section1";

// 들어오자마자 로그인 여부, 찜여부 확인

const PerformanceDetail = ({ item }) => {
  const router = useRouter();

  const url = "/product/cart";
  return (
    <Container>
      <Section1Container>
        <Background></Background>
        <Wrapper>
          <Section1 item={item} />
        </Wrapper>
      </Section1Container>
      {/* 비디오 */}
      <Section2>
        <HighlightVideo item={item} />
      </Section2>
      <Section3>
        <About item={item} />
      </Section3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 82px;
`;

const Section1Container = styled.div`
  position: relative;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  background-color: #d6e1ff;
  width: 100%;
  height: 230px;
`;
const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;
const Section2 = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 41px;
  margin-bottom: 44px;
  width: 100%;
`;

const Section3 = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export default PerformanceDetail;
