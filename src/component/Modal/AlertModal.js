import styled from "styled-components";
import color from "../../../styles/colors";
import Btn from "../Button/OriginalButton";

const AlertModal = ({ text, content1, content2, onClickBtn, fontSize }) => {
  return (
    <Container>
      <Title fontSize={fontSize}>{text}</Title>
      {content1 && (
        <Content>
          {content1}
          <br />
          {content2}
        </Content>
      )}
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
  max-width: 340px;
  border-radius: 14px;
  background-color: ${color.white};
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 44px 8%;
`;

const Title = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: ${(p) => (p.fontSize ? p.fontSize : "16px")};
  color: ${color.black1};
  /* margin: 44px 12% 36px 12%; */
`;

const Content = styled.div`
  color: ${color.black1};
  display: inline-block;
  max-width: 220px;
  width: 100%;
  margin-top: 36px;
  font-size: 16px;
  line-height: 30px;
  font-family: "NotoSansCJKkr-Regular";
`;
const BtnSection = styled.div`
  width: 100%;
`;

export default AlertModal;
