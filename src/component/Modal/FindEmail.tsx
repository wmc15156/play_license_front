import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import FindEmailInput from "@src/component/Input/FindEmailInput";
import Label from "@src/component/Label/Laebel";
import InputBoxWrapper from "@src/component/Wrapper/InputBoxWrapper";

const Container = styled.div`
  width: 600px;
  height: 762px;
  background-color: #fff;
  z-index: 11;
  font-size: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 16px 16px 0;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  font-size: 16px;
  & > div > span {
    font-size: 16px;
    font-weight: bold;
    font-family: "NanumGothic";
  }
`;

const SpanWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-left: 60px;
  align-items: center;
  margin-bottom: 24px;
`;

function FindEMail() {
  console.log("이메일 모달창");
  return (
    <Container>
      <IconWrapper>
        <RiCloseLine size="24px" />
      </IconWrapper>
      <FormWrapper>
        <SpanWrapper style={{ width: "100%" }}>
          <h2>이메일(아이디)찾기</h2>
        </SpanWrapper>
        <InputBoxWrapper
          paddingLeft={"60px"}
          marginBottom={"40px"}
          labelText={"이름"}
          labelWidth={"74px"}
          placeholder={"이름을 입력해주세요."}
          labelFont={"NanumGothic"}
          labelFontSize={"16px"}
          inputWidth={"388px"}
          inputHeight={"56px"}
        />
        <InputBoxWrapper
          paddingLeft={"60px"}
          marginBottom={"40px"}
          labelText={"휴대폰 번호"}
          labelWidth={"74px"}
          placeholder={"휴대폰 번호를 입력해주세요."}
          labelFont={"NanumGothic"}
          labelFontSize={"16px"}
          inputWidth={"388px"}
          inputHeight={"56px"}
          onlyNumber={true}
          buttonText={"인증"}
        />
        <InputBoxWrapper
          paddingLeft={"60px"}
          marginBottom={"40px"}
          labelText={"인증번호"}
          labelWidth={"74px"}
          placeholder={"안증번호를 입력해주세요."}
          labelFont={"NanumGothic"}
          labelFontSize={"16px"}
          inputWidth={"388px"}
          inputHeight={"56px"}
          onlyNumber={true}
          buttonText={"확인"}
        />
      </FormWrapper>
    </Container>
  );
}

export default FindEMail;
