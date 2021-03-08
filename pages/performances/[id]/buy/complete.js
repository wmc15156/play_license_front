import styled from "styled-components";
import color from "../../../../styles/colors";
import axios from "axios";
import GrayBtn from "../../../../src/component/Button/GrayShortBtn";
import OrangeBtn from "../../../../src/component/Button/OrangeShortBtn";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const performanceId = context.params.id;
  const url = `/product/info/${performanceId}`;
  const res = await axios.get(url);
  const data = res.data;
  return {
    props: { image: data },
  };
}

const Complete = ({ image }) => {
  const router = useRouter();
  const goMyPage = () => {
    router.push("/mypage/01");
  };
  const goMarket = () => {
    router.push("/market");
  };

  return (
    <Container>
      <HeadSection>
        <T1>작품 &lt;{image.title}&gt;의 구매문의가 완료되었습니다</T1>
        <T2>
          <span>구매문의</span>가 완료되었습니다!
        </T2>
      </HeadSection>
      <Divider>
        <Div1 />
      </Divider>
      <Section>
        <ItemImg>
          <img src={image.poster} alt={image.title} />
        </ItemImg>
      </Section>
      <BtnSection>
        <Gray>
          <GrayBtn
            text={"쇼핑 이어하기"}
            onClickHandler={goMarket}
            fontColor={color.black3}
          />
        </Gray>
        <Orange>
          <OrangeBtn
            text={"마이페이지에서 확인하기"}
            onClickHandler={goMyPage}
          />
        </Orange>
      </BtnSection>
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
  margin-bottom: 31px;
`;

const T1 = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: ${color.black3};
  margin-bottom: 20px;
`;
const T2 = styled.div`
  font-size: 24px;
  line-height: 26px;

  & > span {
    color: ${color.orange};
  }
`;
const Divider = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 34px;
`;

const Div1 = styled.div`
  background-color: ${color.yellow};
  border-radius: 100px;
  height: 3px;
  width: 100%;
`;

const Section = styled.div`
  max-width: 94%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(/assets/image/purchase_background.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-bottom: 35px;
`;
const ItemImg = styled.div`
  width: 276px;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
  /* margin-bottom: 91px; */
  margin-right: 33px;

  & > img {
    min-width: 100%;
    height: auto;
  }
`;
const BtnSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const Gray = styled.div`
  width: 46%;
`;
const Orange = styled.div`
  width: 46%;
`;
export default Complete;
