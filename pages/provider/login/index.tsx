import ContainerWrapper from "@src/component/ContainerWrapper/CenterWrapper";
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
import axios from "axios";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import { useRouter } from "next/router";

const ImageWrapper = styled.div`
  max-width: 762px;
  width: 100%;
  display:flex;
  justify-content:center;
  margin-bottom: 64px;
  & > img {
    display: inline-block;
    width: 762px;
    height: 188px;
    max-width: 762px;
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
  const { data, error, revalidate, mutate } = useSWR(
    "/user/provider/me",
    fetcher
  );
  const router = useRouter();
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [loginSave, setLoginSave] = useState(false);

  const onSaveEmail = useCallback(() => {
    setLoginSave((prev) => !prev);
  }, [loginSave]);

  const onSubmit = () => {
    if (!email || !password) {
      alert("이메일 또는 패스워드를 입력해주세요.");
      return;
    }
    if (email && password) {
      const data = { email, password };
      axios
        .post("/auth/provider/login", data)
        .then((res) => {
          mutate(true, false);
          router.push("/provider/home");
        })
        .catch((err) => {
          alert("아이디 또는 비밀번호를 다시 확인해주세요.");
        });
    }
  };

  if (data) {
    router.push("/provider/home");
  }

  return (
    <ContainerWrapper width={"592px"}>
      <ImageWrapper>
        <img src={"/assets/image/provider_logo.svg"} />
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
          onChange={setPassword}
          value={password}
          checkPw={true}
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
        <Link href="/provider/find/email">
          <a>이메일 찾기</a>
        </Link>
        <span>|</span>
        <Link href="/provider/find/password">
          <a>비밀번호 찾기</a>
        </Link>
      </div>
    </ContainerWrapper>
  );
}

export default Login;
