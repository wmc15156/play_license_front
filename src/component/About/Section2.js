import styled from "styled-components";
import color from "../../../styles/colors";

const Section2 = () => {
  return (
    <Container>
      <HeadSection>
        <ImgBox>
          <img src="/assets/image/SI_section2.png" />
        </ImgBox>
        <TextSection>
          <TextBox>
            <Text1>
              대본, 연극음악, 공연소품까지! 다양한 공연 라이선스 창작물을?
            </Text1>
            <Text2>
              <p>
                모든 라이선스 이용 시 중계 수수료가 발생하며, 수수료의 일부는
                창작 공연 발전 기금으로 사용됩니다.
              </p>
              <p>
                상업적 라이선스 중개 서비스는 추후 제공 예정으로, 현재는 교육,
                공적, 2차 저작물 창작 목적의 라이선스 서비스만 제공합니다.
              </p>
            </Text2>
          </TextBox>
        </TextSection>
      </HeadSection>
      <BtnBox>
        <Btn>
          <img src="/assets/image/SI_PL login.png" />
          <BtnText>
            다양한 공연 라이선스 창작물들을 구매하고 싶다면? 지금 바로
            ‘구매할래요!’ 버튼을 통해 &lt;PLAY LICENSE&gt;에 로그인하여, 정당한
            거래 서비스를 이용해보세요!
          </BtnText>
        </Btn>
        <Btn>
          <img src="/assets/image/SI_PL provider.png" />
          <BtnText>
            다양한 공연 라이선스 창작물들을 판매하고 싶다면? 지금 바로
            ‘판매할래요!’ 버튼을 통해 &lt;PL 제작사 센터&gt;로 이동하여, 정당한
            거래 서비스를 이용해보세요!
          </BtnText>
        </Btn>
      </BtnBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;
const HeadSection = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
  & > img {
    margin-bottom: auto;
    position: absolute;
    max-width: 100%;
    height: auto;
    z-index: 10;
  }
`;

const TextSection = styled.div`
  width: 100%;
  max-width: 924px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7% 0;
`;

const TextBox = styled.div`
  width: 100%;
  z-index: 11;
  background-color: ${color.white};
  border-radius: 30px;
  box-shadow: 10px 17px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 5%;
  margin: 0 1rem;

  &::after {
    position: absolute;
    border-bottom: 0px solid transparent;
    border-left: 28px solid transparent;
    border-right: 28px solid transparent;
    border-top: 38px solid ${color.white};
    content: "";
    bottom: -38px;
  }
`;

const Text1 = styled.div`
  width: 100%;
  margin: 0 auto;
  display: inline-block;
  font-family: "NotoSansCJKkr-Regular";
  font-size: 2.2vw;
  line-height: 2.2vw;
  margin-bottom: 26px;
`;

const Text2 = styled.div`
  width: 100%;
  color: ${color.black3};
  & > p {
    font-family: "NotoSansCJKkr-Regular";
    font-size: 1.1vw;
    line-height: 2vw;
    margin: 0;
  }
`;

const BtnBox = styled.div`
  display: flex;
  max-width: 924px;
  margin: 0 auto;
  padding: 0 1rem;
`;
const Btn = styled.div`
  margin-right: 6%;

  &:last-child {
    margin-right: 0;
  }
  & > img {
    width: 100%;
    cursor: pointer;
  }
`;
const BtnText = styled.p`
  font-family: "NotoSansCJKkr-Regular";
  font-size: 1.5vw;
  line-height: 2.2vw;
  margin: 0;
  color: ${color.black2};
  margin-top: 27px;
`;

export default Section2;
