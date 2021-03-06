import styled from "styled-components";
import color from "../../../styles/colors";
import Btn from "../Button/OriginalButton";
import useInput from "../../../utils/useInput";
import Input from "../molecules/InputAndBtn/InputAndBtn";
import axios from "axios";
import { memo, useState, useCallback } from "react";

const MP_ChangePhoneNum = () => {
  const [phone, setPhone] = useInput("");
  const [code, setCode] = useInput("");
  const [timer, setTimer] = useState(false);
  const [completedValidation, setCompletedValidation] = useState(false);
  const [btnStatus, setBtnStatus] = useState(false);

  // 휴대폰 번호 변경 patch요청
  const postHandler = useCallback(() => {
    console.log("폰번호변경 적용하기 버튼 클릭");
  });

  // 휴대폰 인증번호 전송
  const requestPhoneValidation = useCallback(() => {
    if (phone) {
      axios
        .post(`/user/phone-validation/${phone}`)
        .then((res) => {
          alert("인증번호가 발송됐습니다.");
          setTimer(true);
        })
        .catch((err) => {
          if (err.response.status === 400) {
            alert("이미 존재하는 유저입니다.");
            router.push("/exist/account");
          }
        });
    }
  }, [phone]);

  return (
    <Container>
      <Title>휴대폰 번호 변경</Title>
      <BodySection>
        <Content>
          <SubTitle>연락처</SubTitle>
          <InputArea>
            <Input
              inputWidth={"472px"}
              inputPlaceholder={"휴대폰번호를 입력해주세요"}
              btnFontSize={"14px"}
              marginTop={"10.5px"}
              btnBackground={phone.length > 10}
              onChange={setPhone}
              value={phone}
              onClick={requestPhoneValidation}
            >
              인증번호 전송
            </Input>
          </InputArea>
        </Content>
        <Content>
          <SubTitle>인증번호</SubTitle>
          <InputArea></InputArea>
        </Content>
      </BodySection>
      <BtnSection>
        <Btn
          width={"100%"}
          background={btnStatus}
          margin={"36px"}
          height={"60px"}
          size={"21px"}
          position={false}
          onClick={postHandler}
        >
          적용하기
        </Btn>
      </BtnSection>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${color.white};
  z-index: 10;
  padding: 44px 44px;
  border-radius: 14px;
`;
const Title = styled.div``;
const BodySection = styled.div``;
const Content = styled.div``;
const SubTitle = styled.div``;
const InputArea = styled.div``;
const BtnSection = styled.div``;

export default MP_ChangePhoneNum;
