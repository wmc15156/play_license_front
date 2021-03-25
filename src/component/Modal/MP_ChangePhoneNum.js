import styled from "styled-components";
import color from "../../../styles/colors";
import Btn from "../Button/OriginalButton";
import useInput from "../../../utils/useInput";
import Input from "../molecules/InputAndBtn/InputAndBtn";
import axios from "axios";
import { useState, useCallback } from "react";
import { IoClose } from "react-icons/io5";

const MP_ChangePhoneNum = ({ onClickHandler, role }) => {
  const [phone, setPhone] = useInput("");
  const [code, setCode] = useInput("");
  const [timer, setTimer] = useState(false);
  const [completedValidation, setCompletedValidation] = useState(false);
  const [btnStatus, setBtnStatus] = useState(false);

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
            alert("인증번호 발송이 실패했습니다");
            setTimer(true);
          }
        });
    }
  }, [phone]);

  // 비교로직
  const validateCode = () => {
    if (code) {
      axios
        .get("/user/phone-validation", { params: { phone, code } })
        .then((res) => {
          setCompletedValidation(true);
          setBtnStatus(true);
        })
        .catch((err) => {
          setCompletedValidation(false);
          if (err.response.status === 400 && err.response.data?.fail) {
            alert("인증코드를 정확히 입력해주세요");
          }

          if (err.response.status === 403) {
            alert("인증시간 3분이 지났습니다. 다시 시도해주세요");
          }
        });
    }
  };

  // 휴대폰 번호 변경 patch요청
  const postHandler = useCallback(() => {
    const param = { phone: phone };
    if (completedValidation) {
      const PATCH_URL = role ? `/user/update/${role}` : "/user/update";
      axios
        .patch(PATCH_URL, param)
        .then((res) => {
          alert("연락처가 변경되었습니다");
          onClickHandler();
        })
        .catch((err) => console.log(err));
    }
  });

  return (
    <Container>
      <HeadSection>
        <Title>휴대폰 번호 변경</Title>
        <Icon onClick={onClickHandler}>
          <IoClose size="32px" color={color.black3} />
        </Icon>
      </HeadSection>
      <BodySection>
        <Content>
          <SubTitle>연락처</SubTitle>
          <InputArea>
            <Input
              inputWidth={"472px"}
              inputPlaceholder={"- 없이 숫자만 입력해주세요"}
              btnFontSize={"14px"}
              marginTop={"0px"}
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
          <InputArea>
            <Input
              inputWidth={"472px"}
              inputPlaceholder={"인증번호를 입력해주세요"}
              btnFontSize={"14px"}
              marginTop={"0px"}
              btnBackground={code.length > 0}
              onChange={setCode}
              value={code}
              timer={timer}
              onClick={validateCode}
              bigBtn={true}
            >
              인증번호 확인
            </Input>
          </InputArea>
        </Content>
      </BodySection>
      <div>
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
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${color.white};
  z-index: 10;
  padding: 44px 44px;
  border-radius: 14px;
  margin: 0 1rem;
`;
const HeadSection = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;
const Icon = styled.span`
  cursor: pointer;
  position: absolute;
  right: 0;
`;
const Title = styled.div`
  display: inline-block;
  width: 100%;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 21px;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
  color: ${color.black1};
`;
const BodySection = styled.div`
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 21px;
`;
const SubTitle = styled.div`
  display: flex;
  width: 20%;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 21px;
  align-items: center;
  color: ${color.orange};
`;
const InputArea = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

export default MP_ChangePhoneNum;
