import styled from "styled-components";
import { useRouter } from "next/router";

const Buying = () => {
  const router = useRouter();

  const back = () => router.back();
  const next = () => router.push("/performances/[id]/buy/2");

  return (
    <Container>
      <HeadSection>
        <T1>작품 구매를 위해 구매문의를 작성해주세요</T1>
        <T2>
          <span>어떤 목적</span>으로 작품을 구매하시나요?
        </T2>
        <Num>1/2</Num>
      </HeadSection>
      <Divider>
        <Div1 />
        <Div2 />
      </Divider>
      <Section></Section>
      <BtnSection></BtnSection>
    </Container>
  );
};

const Container = styled.div`
  max-width: 790px;
  padding: 0 1rem;
  margin: 0 auto;

  font-family: "NotoSansCJKkr-Medium";
`;

const HeadSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const T1 = styled.div`
  opacity: 0.3;
  font-size: 21px;
  line-height: 36px;
`;
const T2 = styled.div`
  font-size: 36px;
  line-height: 55px;

  & > span {
    color: #ff6f69;
  }
`;
const Num = styled.div`
  margin-left: auto;
  /* margin-top: 31px; */
  line-height: 48px;
  font-size: 14px;
`;
const Divider = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 89px;
`;

const Div1 = styled.div`
  background-color: #ffcc5c;
  opacity: 0.3;
  height: 3px;
  width: 100%;
`;
const Div2 = styled.div`
  background-color: #000000;
  opacity: 0.3;
  height: 3px;
  width: 100%;
`;
const Section = styled.div``;
const BtnSection = styled.div``;
export default Buying;
