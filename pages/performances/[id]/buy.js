import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { API_URL } from "../../../config/API_URL";
import axios from "axios";
import OrangeShortBtn from "../../../src/component/Button/OrangeShortBtn";
import GrayShortBtn from "../../../src/component/Button/GrayShortBtn";

export async function getServerSideProps(context) {
  const performanceId = context.params.id;
  const url = `${API_URL.market.item}/${performanceId}.json`;
  const res = await axios.get(url);
  const data = res.data;
  return {
    props: { image: data },
  };
}

const Buying = ({ image }) => {
  const [usage, setUsage] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const back = () => router.back();
  const next = () => {
    router.push(`/performances/${router.query.id}/buy/${usage}`);
  };

  const selectHandler = (e) => {
    console.log(e);
    // if(){
    // setUsage("performance");}
    // if(){setUsage("edu");}
    // if(){setUsage("etc");}
  };
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
      <Section>
        <ItemImg>
          <img src={image.image_link} alt={image.name} />
        </ItemImg>
        <SelectList>
          <Item
            onClick={() => {
              setIsClicked(true);
              setUsage("perform");
              console.log(usage, isClicked);
            }}
          >
            <Sub>공연목적</Sub>
            <Text>공연을 위해 구매하고 싶어요!</Text>
          </Item>
          <Item
            onClick={() => {
              setIsClicked(true);
              setUsage("edu");
            }}
          >
            <Sub>교육목적</Sub>
            <Text>교육을 위해 구매하고 싶어요!</Text>
          </Item>
          <Item
            onClick={() => {
              setIsClicked(true);
              setUsage("etc");
            }}
          >
            <Sub>기타목적</Sub>
            <Text>그외 목적으로 구매하고 싶어요!</Text>
          </Item>
        </SelectList>
      </Section>
      <BtnSection>
        <Gray>
          <GrayShortBtn text={"이전"} goPrevPage={back} />
        </Gray>
        <Orange>
          <OrangeShortBtn text={"다음"} goNextPage={next} />
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
const Section = styled.div`
  width: 100%;
  display: flex;
`;

const SelectList = styled.ul`
  width: 481px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 110px;
  border-radius: 8px;
  margin-bottom: 25px;
  background-color: #f5f5f5;
  color: #000;

  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: #ff6f69;
    color: #ffffff;
  }
`;

const Sub = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  line-height: 48px;
  font-size: 16px;
  padding-left: 46px;
`;
const Text = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  opacity: 0.4;
  line-height: 48px;
  font-size: 16px;
  padding-left: 46px;
  &:hover {
    opacity: 1;
  }
`;
const BtnSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 155px;
`;

const Gray = styled.div`
  width: 40%;
`;
const Orange = styled.div`
  width: 40%;
`;
const ItemImg = styled.div`
  width: 276px;
  height: 386px;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 91px;
  margin-right: 33px;

  & > img {
    min-width: 276px;
    width: 100%;
    height: auto;
  }
`;

export default Buying;
