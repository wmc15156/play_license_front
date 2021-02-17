import styled from "styled-components";
import axios from "axios";
import GrayBtn from "../../../../src/component/Button/GrayShortBtn";
import OrangeBtn from "../../../../src/component/Button/OrangeShortBtn";

export async function getServerSideProps(context) {
  const performanceId = context.params.id;
  const url = "http://makeup-api.herokuapp.com/api/v1/products/495.json";
  const res = await axios.get(url);
  const data = res.data;
  return {
    props: { image: data },
  };
}

const Complete = ({ image }) => {
  // const url = `${API_URL.market.item}/${performanceId}.json`;
  // console.log(image, url);
  return (
    <Container>
      <HeadSection>
        <T1>작품 구매를 위해 구매문의를 작성해주세요</T1>
        <T2>
          <span>구매문의</span>가 완료되었습니다!
        </T2>
      </HeadSection>
      <Divider>
        <Div1 />
      </Divider>
      <Section>
        <ItemImg>
          <img src={image.image_link} alt={image.name} />
        </ItemImg>
      </Section>
      <BtnSection>
        <Gray>
          <GrayBtn text={"쇼핑 이어하기"} />
        </Gray>
        <Orange>
          <OrangeBtn text={"마이페이지에서 확인하기"} />
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
const Divider = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 89px;
`;

const Div1 = styled.div`
  background-color: #ffcc5c;
  border-radius: 100px;
  height: 3px;
  width: 100%;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(/assets/image/purchase_background.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-bottom: 55px;
`;
const ItemImg = styled.div`
  width: 276px;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 91px;
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
  margin-bottom: 155px;
`;

const Gray = styled.div`
  width: 40%;
`;
const Orange = styled.div`
  width: 40%;
`;
export default Complete;
