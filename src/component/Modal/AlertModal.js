import styled from "styled-components";
import Btn from "../Button/SignUpButton";

const AlertModal = ({ text, onClickBtn }) => {
  return (
    <Container>
      <Title>{text}</Title>
      <BtnSection>
        <Btn text={"확인"} onClickHandler={onClickBtn} />
      </BtnSection>
    </Container>
  );
};

const Container = styled.div`
  width: 520px;
  border-radius: 14px;
  background-color: #fff;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 24px;
  color: #0d0d0c;
  margin: 60px 22% 73px 22%;
`;

const BtnSection = styled.div`
  width: 240px;
  height: 56px;
  margin: 0 22% 55px 22%;
`;

export default AlertModal;
