import styled, { css } from "styled-components";
import color from "../../../../styles/colors";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import axios from "axios";
import OrangeShortBtn from "../../../../src/component/Button/OrangeShortBtn";
import GrayShortBtn from "../../../../src/component/Button/GrayShortBtn";

export async function getServerSideProps(context) {
  const performanceId = context.params.id;
  const url = `/product/info/${performanceId}`;
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
          <img src={image.poster} alt={image.title} />
        </ItemImg>
        <SelectList>
          <Item_Per
            color={usage}
            onClick={() => {
              setIsClicked(true);
              setUsage("perform");
              console.log(usage, isClicked);
            }}
          >
            <Sub>공연목적</Sub>
            <Text>공연을 위해 구매하고 싶어요!</Text>
          </Item_Per>
          <Item_Edu
            color={usage}
            onClick={() => {
              setIsClicked(true);
              setUsage("edu");
            }}
          >
            <Sub>교육목적</Sub>
            <Text>교육을 위해 구매하고 싶어요!</Text>
          </Item_Edu>
          <Item_Etc
            color={usage}
            onClick={() => {
              setIsClicked(true);
              setUsage("etc");
            }}
          >
            <Sub>기타목적</Sub>
            <Text>그외 목적으로 구매하고 싶어요!</Text>
          </Item_Etc>
        </SelectList>
      </Section>
      <BtnSection>
        <Gray>
          <GrayShortBtn
            text={"이전"}
            onClickHandler={back}
            fontColor={color.black3}
          />
        </Gray>
        <Orange>
          <OrangeShortBtn text={"다음"} onClickHandler={next} />
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
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 20px;
  color: ${color.black3};
`;
const T2 = styled.div`
  font-size: 24px;
  line-height: 26px;
  color: ${color.black1};
  & > span {
    color: ${color.orange};
  }
`;
const Num = styled.div`
  margin-left: auto;
  line-height: 28px;
  font-size: 14px;
`;
const Divider = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
`;

const Div1 = styled.div`
  background-color: ${color.yellow};
  height: 3px;
  width: 100%;
`;
const Div2 = styled.div`
  background-color: ${color.black5};
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

const ItemStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 110px;
  border-radius: 8px;
  margin-bottom: 25px;
  background-color: ${color.gray1};
  color: ${color.black1};

  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: ${color.yellow};
    color: ${color.white};
  }
`;

const Item_Per = styled.li`
  ${ItemStyle};
  ${(props) =>
    props.color === "perform" &&
    css`
      background-color: ${color.yellow};
      color: ${color.white};
    `};
`;
const Item_Edu = styled.li`
  ${ItemStyle};
  ${(props) =>
    props.color === "edu" &&
    css`
      background-color: ${color.yellow};
      color: ${color.white};
    `};
`;
const Item_Etc = styled.li`
  ${ItemStyle};
  ${(props) =>
    props.color === "etc" &&
    css`
      background-color: ${color.yellow};
      color: ${color.white};
    `};
`;

const Sub = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  line-height: 48px;
  font-size: 16px;
  padding-left: 46px;
`;
const Text = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  line-height: 48px;
  font-size: 16px;
  padding-left: 46px;
  opacity: 0.65;
`;
const BtnSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  margin-bottom: 61px;
`;

const Gray = styled.div`
  width: 30%;
`;
const Orange = styled.div`
  width: 30%;
`;
const ItemImg = styled.div`
  max-width: 276px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
  margin-right: 33px;

  & > img {
    max-width: 100%;
    height: auto;
  }
`;

export default Buying;
