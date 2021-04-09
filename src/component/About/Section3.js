import styled, { css } from "styled-components";
import color from "../../../styles/colors";

const Section3 = ({ changeRouteHandler }) => {
  return (
    <Container>
      <img src="/assets/image/SI_section3.svg" />
      <Wrapper>
        <Title_R>
          <Title>
            PLAY LICENSE <Span2>라이선스 구매방법</Span2>
          </Title>
          <Text>
            플레이라이선스 회원 누구나 이용할 수 있으며, 작품 이용금액은 기간,
            제공자료, 라이선스 이용시 발생하는 이익 등을 종합하여 상호 협의하에
            책정됩니다.
            <span onClick={() => changeRouteHandler("/market")}>
              예상비용 알아보러 가기
            </span>
          </Text>
        </Title_R>
        <Title_L>
          <Title>
            PL <Span1>제작자센터</Span1> <Span2>라이선스 판매방법</Span2>
          </Title>
          <Text>
            PL제작사 센터란 플레이라이선스가 인증한 공연 제작사 혹은 창작사만
            작품 판매 등록 및 서비스를 이용할 수 있는 자사 웹사이트 이며, 저작권
            보호와 더불어 정당한 경제적 가치 창출을 보장합니다.
            <span onClick={() => changeRouteHandler("/provider")}>
              PL 제작사센터 바로가기
            </span>
          </Text>
        </Title_L>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(1275.01 / 1920 * 100%);
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

const Title_R = styled.div`
  position: absolute;
  display: flex;
  top: 6%;
  text-align: right;
  margin: 0 1rem;
  right: 0;
  flex-direction: column;
  padding-right: 16.5%;
`;

const Title_L = styled.div`
  position: absolute;
  display: flex;
  bottom: 32%;
  text-align: left;
  margin: 0 1rem;
  left: 0;
  flex-direction: column;
  padding-left: 16.5%;
`;

const Title = styled.div`
  font-family: "FreightSansBlackSC";
  /* font-size: 40px; */
  /* line-height: 40px; */
  font-size: 2.3vw;
  line-height: 2.7vw;
  letter-spacing: 1.4px;
  margin-bottom: 8px;
`;
const TitleSpanStyle = css`
  font-family: "NotoSansCJKkr-Regular";
  /* font-size: 30px; */
  /* line-height: 30px; */
  font-size: 2vw;
  line-height: 2vw;
`;
const Span1 = styled.span`
  ${TitleSpanStyle};
  font-weight: bold;
`;
const Span2 = styled.span`
  ${TitleSpanStyle};
`;

const Text = styled.div`
  max-width: 40vw;
  font-family: "NotoSansCJKkr-Regular";
  /* font-size: 12px; */
  /* line-height: 20px; */
  font-size: 1vw;
  line-height: 1.8vw;
  & > span {
    font-family: "NotoSansCJKkr-Bold";
    /* font-size: 12px; */
    /* line-height: 20px; */
    font-size: 1vw;
    line-height: 1.8vw;
    color: ${color.orange};
    text-decoration: underline;
    margin-left: 5px;
    cursor: pointer;
  }
`;

export default Section3;
