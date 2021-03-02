import ContainerWrapper from "@src/component/ContainerWrapper/ContainerWrapper";
import ProcessCircle from "@src/component/molecules/ProcessCircle/ProcessCircle";
import TextAndInput from "@src/component/molecules/TextAndInput/TextAndInput";
import styles from "@styles/colors";
import useInput from "@utils/useInput";
import TextAndInputAndBtn from "@src/component/molecules/TextAndInputAndBtn/TextAndInputAndBtn";
import { useCallback, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import OriginalButton from "@src/component/Button/OriginalButton";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@utils/fetcher";

const EmailError = styled.div`
  width: 100%;
  display: flex;
  color: ${styles.pink};
  font-family: "NotoSansCJKkr-Bold";
  font-size: 14px;
  margin: 15px 0 0 110px;
`;

function SignupThird() {
  const { data, error } = useSWR("/auth/me", fetcher, {
    refreshInterval: 1000000,
  });
  const router = useRouter();
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [phone, setPhone] = useInput("");
  const [validation, setValidation] = useState("");
  const [checkEmail, setCheckEmail] = useState("");

  const emailValidation = useCallback(() => {
    // 이메일 검증
    if (!email) {
      setValidation("");
      setCheckEmail("");
      return;
    }
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (email.match(regExp) === null) {
      return setValidation("이메일 형식에 맞게 작성해주세요");
    }
    return setValidation("");
  }, [email, validation]);

  const DuplicatedEmail = useCallback(() => {
    // 이메일 중복확인
    if (email && !validation) {
      const data = { email, provider: "user" };
      axios
        .post("/auth/email/duplicate", data)
        .then((res) => {
          setCheckEmail("사용가능한 이메일입니다.");
        })
        .catch((error) => {
          setCheckEmail("중복된 이메일입니다.");
        });
    }
  }, [email, validation, checkEmail]);

  const finalCheck = name && email && checkEmail && password && phone;

  const onSubmit = () => {
    if (finalCheck) {
      const data = {
        provider: "local",
        email,
        password,
        fullName: name,
        phone,
        role: "user",
      };

      axios
        .post("/auth/signup", data)
        .then((res) => {
          router.push("/signup/done");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };
  if (data) {
    return router.push("/login");
  }
  return (
    <ContainerWrapper width={"580px"}>
      <ProcessCircle process={3} />
      <TextAndInput
        textFontSize={"21px"}
        textWidth={"78px"}
        textColor={styles.orange}
        textMargin={"30px"}
        inputWidth={"472px"}
        placeholder={"이름을 입력해주세요"}
        onChange={setName}
        value={name}
        wrapperMargin={"64px"}
        number={false}
      >
        이름
      </TextAndInput>
      <TextAndInputAndBtn
        textFontSize={"21px"}
        textWidth={"78px"}
        textColor={styles.orange}
        textMargin={"30px"}
        inputWidth={"472px"}
        placeholder={"이메일을 입력해주세요"}
        onChange={setEmail}
        value={email}
        wrapperMargin={"12px"}
        text={"이메일"}
        btnFontSize={"14px"}
        onClick={DuplicatedEmail}
        onBlur={emailValidation}
        number={false}
      >
        {checkEmail === "사용가능한 이메일입니다."
          ? "이메일 인증완료"
          : "이메일 중복확인"}
      </TextAndInputAndBtn>
      {validation.length > 0 && (
        <EmailError>이메일을 올바르게 작성해주세요.</EmailError>
      )}
      <TextAndInput
        textFontSize={"21px"}
        textWidth={"78px"}
        textColor={styles.orange}
        textMargin={"30px"}
        inputWidth={"472px"}
        placeholder={"비밀번호를 입력해주세요"}
        onChange={setPassword}
        value={password}
        wrapperMargin={"12px"}
        number={false}
      >
        비밀번호
      </TextAndInput>

      <TextAndInput
        textFontSize={"21px"}
        textWidth={"78px"}
        textColor={styles.orange}
        textMargin={"30px"}
        inputWidth={"472px"}
        placeholder={"연락처를 입력해주세요"}
        onChange={setPhone}
        value={phone}
        wrapperMargin={"12px"}
        number={true}
      >
        연락처
      </TextAndInput>
      <OriginalButton
        margin={"64px"}
        width={"580px"}
        background={finalCheck}
        height={"60px"}
        size={"21px"}
        onClick={onSubmit}
      >
        회원가입 완료
      </OriginalButton>
    </ContainerWrapper>
  );
}

export default SignupThird;
