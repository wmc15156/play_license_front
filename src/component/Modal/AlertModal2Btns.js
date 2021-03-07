import styled from "styled-components";
import color from "../../../styles/colors";
import Btn1 from "../Button/GrayShortBtn";
import Btn2 from "../Button/OriginalButton";

const AlertModal2Btns = ({
  text,
  content1,
  content2,
  onClickBtn1,
  onClickBtn2,
}) => {
  return (
    <Container>
      <Title>{text}</Title>
      {content1 && (
        <Content>
          {content1}
          <br />
          {content2}
        </Content>
      )}
      <BtnSection>
        <Btn1
          size={"14px"}
          height={"40px"}
          text={"네"}
          onClickHandler={onClickBtn1}
          fontColor={color.black3}
        />
        <Div />
        <Btn2
          width={"100%"}
          background={true}
          margin={"0"}
          height={"40px"}
          size={"14px"}
          onClick={onClickBtn2}
        >
          아니오
        </Btn2>
      </BtnSection>
    </Container>
  );
};

const Container = styled.div`
  /* width: 520px; */
  border-radius: 14px;
  background-color: ${color.white};
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 44px 10%;
`;

const Title = styled.div`
  display: inline-block;
  width: 100%;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 21px;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
  color: ${color.black1};
`;

const Content = styled.div`
  color: ${color.black1};
  display: inline-block;
  max-width: 212px;
  width: 100%;

  font-size: 16px;
  line-height: 30px;
  font-family: "NotoSansCJKkr-Regular";
`;
const BtnSection = styled.div`
  width: 100%;
  display: flex;
  margin-top: 36px;
`;
const Div = styled.div`
  width: 15%;
`;

export default AlertModal2Btns;
