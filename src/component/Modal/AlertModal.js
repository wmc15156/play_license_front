import styled from "styled-components";
import color from "../../../styles/colors";
import Btn from "../Button/OriginalButton";

const AlertModal = ({ text, onClickBtn }) => {
  return (
    <Container>
      <Title>{text}</Title>
      <BtnSection onClick={onClickBtn}>
        <Btn
          width={"100%"}
          background={true}
          margin={"44px"}
          height={"40px"}
          size={"14px"}
        >
          확인
        </Btn>
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
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  color: ${color.black1};
  /* margin: 44px 12% 36px 12%; */
`;

const BtnSection = styled.div`
  width: 100%;
`;

export default AlertModal;
