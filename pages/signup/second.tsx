import useInput from "../../utils/useInput";
import { memo, useCallback, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import ContainerWrapper from "@src/component/ContainerWrapper/TopToBottom";
import ProcessCircle from "@src/component/molecules/ProcessCircle/ProcessCircle";
import Comment from "@src/component/Comment/Comment";
import InputAndBtn from "@src/component/molecules/InputAndBtn/InputAndBtn";
import OriginalButton from "@src/component/Button/OriginalButton";
import axios from "axios";
import styled from "styled-components";

export const ValidationCheck = styled.div`
  width: 100%;
  color: #51cf66;
  font-size: 15px;
  margin-top: 20px;
`;

function SignUpSecond() {
  const { data, error } = useSWR("/user/me", fetcher, {
    refreshInterval: 1000000,
  });
  const router = useRouter();

  const [phone, setPhone] = useInput("");
  const [code, setCode] = useInput("");
  const [timer, setTimer] = useState(false);
  const [completedValidation, setCompletedValidation] = useState(false);

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

  // 비교로직
  const validateCode = () => {
    if (code) {
      axios
        .get("/user/phone-validation", { params: { phone, code } })
        .then((res) => {
          setCompletedValidation(true);
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

  const onChangePage = () => {
    if (completedValidation) {
    router.push("/signup/third");
    }
  };

  if (data) {
    router.push("/");
  }

  return (
    <ContainerWrapper width={"580px"}>
      <ProcessCircle process={2} lineWidth={'100px'} />
      <Comment font={"24px"} margin={"64px"}>
        본인인증을 위한 <span>휴대폰 번호</span>를 입력해주세요
      </Comment>
      <InputAndBtn
        inputWidth={"580px"}
        inputPlaceholder={"휴대폰번호를 입력해주세요"}
        btnFontSize={"14px"}
        marginTop={"44px"}
        btnBackground={phone.length > 0}
        onChange={setPhone}
        value={phone}
        onClick={requestPhoneValidation}
      >
        인증번호 전송
      </InputAndBtn>
      <InputAndBtn
        inputWidth={"580px"}
        inputPlaceholder={"인증번호를 입력해주세요"}
        btnFontSize={"14px"}
        marginTop={"12px"}
        btnBackground={code.length > 0}
        onChange={setCode}
        value={code}
        timer={timer}
        onClick={validateCode}
      >
        인증번호 확인
      </InputAndBtn>
      {completedValidation && (
        <ValidationCheck>인증에 성공했습니다.</ValidationCheck>
      )}
      <OriginalButton
        width={"100%"}
        position={false}
        height={"60px"}
        size={"21px"}
        margin={"84px"}
        background={completedValidation}
        onClick={onChangePage}
      >
        다음 단계로
      </OriginalButton>
    </ContainerWrapper>
  );
}

export default memo(SignUpSecond);
