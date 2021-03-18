import ContainerWrapper from "@src/component/ContainerWrapper/ContainerWrapper";
import ProviderHeader from "@src/component/Provider/Header";
import Comment from "@src/component/Comment/Comment";
import Line from "@src/component/Line/Line";
import styles from "@styles/colors";
import TextAndInput from "@src/component/molecules/TextAndInput/TextAndInput";
import useInput from "@utils/useInput";
import axios from "axios";
import { useCallback, useState } from "react";
import { validEmail } from "@utils/signupHelper";
import TextAndInputAndBtn from "@src/component/molecules/TextAndInputAndBtn/TextAndInputAndBtn";
import { useRouter } from "next/router";
import OriginalButton from "@src/component/Button/OriginalButton";
import { SAVE_PASSWORD_CHECK, SAVE_USER_EMAIL } from "@reducers/types/types";
import { useDispatch } from "react-redux";
import { useGlobalDispatch } from "@store/homeStore";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import { ValidationCheck } from "../../signup/second";

function ProviderFindPassword() {
  const { data } = useSWR("/user/provider/me", fetcher);
  const router = useRouter();
  const dispatch = useGlobalDispatch();
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [code, setCode] = useInput("");
  const [phone, setPhone] = useInput("");
  const [completedValidation, setCompletedValidation] = useState(false);
  const [timer, setTimer] = useState(false);
  const [validation, setValidation] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
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

  const emailValidation = useCallback(() => {
    // 이메일 검증
    if (!email) {
      setValidation("");
      setCheckEmail("");
      return;
    }
    const isValid = validEmail(email);
    // 유효성 검사 실패
    if (isValid) {
      return setValidation("이메일 형식에 맞게 작성해주세요");
    }
    return setValidation("");
  }, [email, validation, validEmail]);

  const requestPhoneValidation = useCallback(() => {
    if (phone) {
      axios
        .post(`/user/phone-validation/provider/${phone}`)
        .then((res) => {
          alert("인증번호가 발송됐습니다.");
          setTimer(true);
        })
        .catch((err) => {
          if (err.response.status === 400) {
            alert("이미 존재하는 유저입니다.");
            router.push("/provider/exist/account");
          }
        });
    }
  }, [phone]);

  const finalCheck = email && name && phone && code && completedValidation;
  const onSubmit = () => {
    if (finalCheck) {
      dispatch({ type: SAVE_PASSWORD_CHECK, payload: true });
      dispatch({ type: SAVE_USER_EMAIL, payload: email });
      axios
        .get("/user/forgot-password/by-email/provider", { params: { email } })
        .then((res) => {
          console.log("here", res.data);
          router.push("/provider/find/getAccount");
        })
        .catch((err) => {
          alert("존재하지 않는 유저입니다.");
        });
    }
  };

  if (data) {
    router.push("/provider/home");
  }

  return (
    <ContainerWrapper width={"580px"}>
      <ProviderHeader />
      <Comment font={"24px"} margin={"113px"}>
        비밀번호 찾기
      </Comment>
      <Line background={true} width={"580px"} marginTop={"44px"} />
      <TextAndInput
        textFontSize={"21px"}
        textWidth={"78px"}
        textColor={styles.black3}
        textMargin={"30px"}
        inputWidth={"472px"}
        placeholder={"실명을 입력해주세요"}
        onChange={setName}
        value={name}
        wrapperMargin={"22px"}
        number={false}
      >
        이름
      </TextAndInput>
      <TextAndInput
        textFontSize={"21px"}
        textWidth={"78px"}
        textColor={styles.black3}
        textMargin={"30px"}
        inputWidth={"472px"}
        placeholder={"이메일을 입력해주세요"}
        onChange={setEmail}
        value={email}
        wrapperMargin={"22px"}
        number={false}
        onBlur={emailValidation}
      >
        이메일
      </TextAndInput>

      <TextAndInputAndBtn
        text={"연락처"}
        textFontSize={"21px"}
        textWidth={"78px"}
        textColor={styles.black3}
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
        textColor={styles.black3}
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
      {completedValidation && (
        <ValidationCheck>인증에 성공했습니다.</ValidationCheck>
      )}
      <OriginalButton
        width={"100%"}
        position={false}
        height={"60px"}
        size={"21px"}
        margin={"64px"}
        background={completedValidation}
        onClick={onSubmit}
      >
        이메일찾기
      </OriginalButton>
    </ContainerWrapper>
  );
}

export default ProviderFindPassword;
