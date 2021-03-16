import ContainerWrapper from "@src/component/ContainerWrapper/ContainerWrapper";
import styled from "styled-components";
import Line from "@src/component/Line/Line";
import { Wrapper } from "@src/component/molecules/TextAndInput/TextAndInput";
import InputBox from "@src/component/BasicInput/BasicInput";
import useInput from "@utils/useInput";
import CheckBoxWrapper from "@src/component/CheckBoxWrapper/CheckBoxWrapper";
import { useCallback, useState } from "react";
import { FaCheck } from "react-icons/fa";
import color from "@styles/colors";
import OriginalButton from "@src/component/Button/OriginalButton";
import styles from "@styles/Login.module.css";
import Link from "next/link";

const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 146px;
  margin-bottom: 64px;
  & > img {
    display: inline-block;
    width: 100%;
    height: 131px;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: "NotoSansCJKkr-Regular";
  margin-top: 12px;
`;

function Login() {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [loginSave, setLoginSave] = useState(false);

  const onSaveEmail = useCallback(() => {
    setLoginSave((prev) => !prev);
  }, [loginSave]);

  const onSubmit = () => {};

  return (
    <ContainerWrapper width={"592px"}>
      <ImageWrapper>
        <img src={"/assets/image/title.png"} />
      </ImageWrapper>
      <Line background={true} width={"580px"} />
      <Wrapper margin={"22px"}>
        <InputBox
          width={"100%"}
          placeholder={"이메일을 입력해주세요"}
          onChange={setEmail}
          value={email}
        />
      </Wrapper>
      <Wrapper margin={"12px"}>
        <InputBox
          width={"100%"}
          placeholder={"비밀번호를 입력해주세요"}
          onChange={setEmail}
          value={password}
        />
      </Wrapper>
      <IconWrapper>
        <CheckBoxWrapper
          width={"24px"}
          height={"24px"}
          onChange={onSaveEmail}
          value={loginSave ? color.blue_2 : ""}
        >
          <FaCheck size={"15px"} color={loginSave ? "white" : "gray"} />
        </CheckBoxWrapper>
        <span>이메일 저장</span>
      </IconWrapper>
      <OriginalButton
        margin={"26px"}
        width={"580px"}
        background={color.blue}
        height={"60px"}
        size={"21px"}
        onClick={onSubmit}
      >
        로그인하기
      </OriginalButton>
      <div className={styles.FindAccounts}>
        <Link href="/find/email">
          <a>이메일 찾기</a>
        </Link>
        <span>|</span>
        <Link href="/find/password">
          <a>비밀번호 찾기</a>
        </Link>
      </div>
    </ContainerWrapper>
  );
}

export default Login;
