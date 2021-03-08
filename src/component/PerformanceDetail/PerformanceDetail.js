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
  const [savedStatus, setSavedStatus] = useState(false);

  useEffect(() => {
    // 찜여부 get
    axios
      .get(url)
      .then((res) => {
        // console.log(res, "res??");
        const data = res.data.filter(
          (item) => item.productId === Number(router.query.id)
        );
        if (data.length > 0) {
          setSavedStatus(true);
          console.log(savedStatus);
        } else {
          setSavedStatus(false);
          console.log(savedStatus);
        }
      })
      .catch((error) => console.error("로그인하지 않은 사용자", error));
  }, [savedStatus]);
  return (
    <Container>
      <Section1Container>
        <Background></Background>
        <Wrapper>
          <Section1 item={item} savedStatus={savedStatus} />
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
  max-width: 924px;
  margin: 0 auto;
  padding: 0 1rem;
`;
const Section2 = styled.div`
  display: flex;
  max-width: 924px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 41px;
  margin-bottom: 44px;
  width: 100%;
`;

const Section3 = styled.div`
  display: flex;
  max-width: 924px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export default PerformanceDetail;
