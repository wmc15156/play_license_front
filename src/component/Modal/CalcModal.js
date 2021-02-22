import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import Performance from "../Form/Est_Performance";
import Educate from "../Form/Est_Educate";

const CalcModal = ({ text }) => {
  const router = useRouter();
  const [purpose, setPurpose] = useState(0);
  const purposeObj = {
    0: <Performance />,
    1: <Educate />,
  };
  const switchPurpose = (e) => {
    setPurpose(e.target.attributes[0].value);
  };
  return (
    <Container>
      <HeadSection>
        <Title>{text}</Title>
        <Menu>
          <Subtitle>
            <Sub name={0} purposeState={purpose} onClick={switchPurpose}>
              공연목적
            </Sub>
            <Sub name={1} purposeState={purpose} onClick={switchPurpose}>
              교육목적
            </Sub>
          </Subtitle>
          <Divider />
        </Menu>
      </HeadSection>
      <BodySection>{purposeObj[purpose]}</BodySection>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  width: 840px;
  z-index: 11;
  border-radius: 14px;
  padding: 60px 40px 46px 40px;
  display: flex;
  flex-direction: column;
  /* overflow: auto; */
`;
const HeadSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 24px;
  color: #0d0d0c;
  margin: 0 auto 52px auto;
`;

const Menu = styled.div``;
const Subtitle = styled.div`
  display: flex;
  width: 100%;
`;
const Sub = styled.div`
  height: 60px;
  font-family: "NotoSansCJKkr-Medium";
  font-size: 21px;
  line-height: 0.86;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: ${(props) => {
    if (props.name === Number(props.purposeState)) {
      return "#ffcc5c";
    } else {
      return "#ffffff";
    }
  }};
`;
const Divider = styled.div`
  height: 3px;
  background: #ffcc5c;
`;
const BodySection = styled.div``;

export default CalcModal;
