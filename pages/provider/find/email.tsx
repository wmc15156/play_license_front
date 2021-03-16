import ContainerWrapper from "@src/component/ContainerWrapper/ContainerWrapper";
import ProviderHeader from "@src/component/Provider/Header";
import Comment from "@src/component/Comment/Comment";
import Line from "@src/component/Line/Line";
import TextAndInput from "@src/component/molecules/TextAndInput/TextAndInput";
import styles from "@styles/colors";
import useInput from "@utils/useInput";
import TextAndInputAndBtn from "@src/component/molecules/TextAndInputAndBtn/TextAndInputAndBtn";
import { useCallback, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import OriginalButton from "@src/component/Button/OriginalButton";
import { SAVE_USER_EMAIL } from "@reducers/types/types";
import { useGlobalDispatch } from "@store/homeStore";

function ProviderFindEmail() {
  const router = useRouter();

  const [name, setName] = useInput("");
  const [phone, setPhone] = useInput("");
  const [timer, setTimer] = useState(false);
  const [code, setCode] = useInput("");
  const [completedValidation, setCompletedValidation] = useState(false);
  const dispatch = useGlobalDispatch();

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
      axios
        .get(`/user/find/${phone}`)
        .then((res) => {
          dispatch({ type: SAVE_USER_EMAIL, payload: res.data });
          router.push("/find/getEmail");
          return;
        })
        .catch((err) => {
          console.log(err);
        });
      router.push("/find/getEmail");
    }
  };

  return (
    <ContainerWrapper width={"580px"}>
      <ProviderHeader />
      <Comment font={"24px"} margin={"135px"}>
        이메일 찾기
      </Comment>
      <Line background={true} width={"580px"} marginTop={"24px"} />
      <TextAndInput
        textFontSize={"21px"}
        textWidth={"78px"}
        textColor={styles.black1}
        textMargin={"25px"}
        inputWidth={"472px"}
        placeholder={"실명을 입력해주세요"}
        onChange={setName}
        value={name}
        wrapperMargin={"22px"}
        number={false}
      >
        이름
      </TextAndInput>
      <TextAndInputAndBtn
        text={"연락처"}
        textFontSize={"21px"}
        textWidth={"78px"}
        textColor={styles.black1}
        textMargin={"25px"}
        inputWidth={"472px"}
        placeholder={"-없이 숫자만 입력해주세요"}
        onChange={setPhone}
        value={phone}
        wrapperMargin={"12px"}
        btnFontSize={"14px"}
        onClick={requestPhoneValidation}
        provider={true}
      >
        인증번호 전송
      </TextAndInputAndBtn>
      <TextAndInputAndBtn
        text={"인증번호"}
        textFontSize={"21px"}
        textWidth={"100%"}
        textColor={styles.black1}
        textMargin={"25px"}
        inputWidth={"472px"}
        placeholder={"인증번호를 입력해주세요."}
        onChange={setCode}
        value={code}
        wrapperMargin={"12px"}
        btnFontSize={"14px"}
        onClick={validateCode}
        bigBtn={timer}
        provider={true}
      >
        인증번호 확인
      </TextAndInputAndBtn>
      <OriginalButton
        width={"100%"}
        position={false}
        height={"60px"}
        size={"21px"}
        margin={"64px"}
        background={completedValidation}
        onClick={onChangePage}
      >
        이메일찾기
      </OriginalButton>
    </ContainerWrapper>
  );
}

export default ProviderFindEmail;
