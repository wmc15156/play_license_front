import styled from "styled-components";
import useInput from "../utils/useInput";
import { useSelector } from "react-redux";
import color from "@styles/colors";
import { RootState } from "../reducers";
import { useEffect, useState, FormEvent, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { url } from "../utils/url";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import axios from "axios";
import CheckBoxWrapper from "@src/component/CheckBoxWrapper/CheckBoxWrapper";
import { FaCheck } from "react-icons/fa";
function Login() {
  const { data, error, revalidate, mutate } = useSWR("/user/me", fetcher);

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [emailInputError, setEmailInutError] = useState(false);
  const [passwordInputError, setPasswordInputError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginSave, setLoginSave] = useState(false);
  const router = useRouter();
  const isLogin = useSelector((state: RootState) => state.users?.isLogin);

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setEmailInutError(true);
      return;
    }

    if (!password) {
      setPasswordInputError(true);
      return;
    }
    if (email && password) {
      const data = { email, password };
      // dispatch(loginThunk(data));
      axios
        .post("/auth/login", data)
        .then((res) => {
          mutate(true, false);
          router.push("/");
        })
        .catch((err) => {
          // console.dir(err);
          setLoginError(true);
        });
    }
  };

  const onSaveEmail = useCallback(() => {
    setLoginSave((prev) => !prev);
  }, [loginSave]);

  if (data) {
    router.push("/");
    // alert("로그인이 되어 있습니다.");
  }

  return (
    <Container>
      {isLogin && !error ? null : (
        <>
          <HeadSection>
            <strong>PLAY LICENSE </strong>
            <span>로그인</span>
          </HeadSection>
          <Line />
          <Form onSubmit={onSubmitHandler}>
            <div>
              <LoginInput
                placeholder={"아이디(이메일)을 입력해주세요"}
                value={email}
                onChange={onChangeEmail}
              />
            </div>
            {emailInputError && (
              <EmailErr>이메일을 입력해주세요.</EmailErr>
            )}
            <div>
              <LoginInput
                placeholder={"비밀번호를 입력해주세요."}
                value={password}
                onChange={onChangePassword}
                type="password"
              />
            </div>
            <CheckSection>
              <CheckBoxWrapper
                width={"24px"}
                height={"24px"}
                onChange={onSaveEmail}
                value={loginSave ? color.orange : false}
              >
                <FaCheck size={"15px"} color={loginSave ? "white" : "gray"} />
              </CheckBoxWrapper>
              <span>아이디 저장</span>
            </CheckSection>
            {loginError && (
              <LoginErr>
                가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.
              </LoginErr>
            )}
            {passwordInputError && (
              <EmailErr>비밀번호를 입력해주세요.</EmailErr>
            )}
            <LoginButton> 로그인하기 </LoginButton>
          </Form>

          <SNSsection>
            <SNS>SNS 계정으로 로그인하기</SNS>
            <SNS_Logo>
              <a href={`${url}/api/auth/google/callback`}>
                <img
                  src="https://user-images.githubusercontent.com/60249156/107981737-03280080-7006-11eb-9536-1c26c58f5c04.png"
                />
              </a>
              <a href={`${url}/api/auth/naver/callback`}>
                <img
                  src="https://user-images.githubusercontent.com/60249156/107981747-058a5a80-7006-11eb-80c1-c8bfa6fed440.png"
                />
              </a>
              <a href={`${url}/api/auth/kakao/callback`}>
                <img
                  src="https://user-images.githubusercontent.com/60249156/107981743-04f1c400-7006-11eb-9332-dae6db0b9411.png"
                />
              </a>
            </SNS_Logo>
          </SNSsection>
          <FindAccount>
            <Link href="/signup/first">
              <a>회원가입하기</a>
            </Link>
            <span>|</span>
            <Link href="/find/email">
              <a>아이디(이메일) 찾기</a>
            </Link>
            <span>|</span>
            <Link href="/find/password">
              <a>비밀번호 찾기</a>
            </Link>
          </FindAccount>
        </>
      )}
    </Container>
  );
}


const Container = styled.div`
  margin-top: 52px;
  max-width: 580px;
  margin:auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: "NotoSansCJKkr-Medium";
`

const HeadSection = styled.div`
  margin-bottom: 44px;
  font-size: 36px;
  & > strong {
    font-family: "FreightSansBlackSC";
  }
  & > span {
    font-size: 24px;
  }
`

const Line = styled.hr`
  width: 100%;
  border: none;
  background-color: ${color.yellow};
  height: 3px;
  margin-bottom: 22px;
`

const Form = styled.form`
  width: 100%;
`

const LoginInput = styled.input`
  width: 100%;
  height: 60px;
  background-color: ${color.gray1};
  border: none;
  border-radius: 8px;
  margin-bottom: 12px;
  text-indent: 22px;
  font-size: 16px;
  font-family: "NotoSansCJKkr-Medium";
`

const CheckSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: "NotoSansCJKkr-Regular";
`

const EmailErr = styled.div`
  position: relative;
  bottom: 10px;
  color: red;
`

const LoginErr = styled.div`
  margin-top: 10px;
  color: red;
  font-size: 16px;
  padding-bottom:10px;
`

const LoginButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  border: none;
  background-color: ${color.orange};
  color: ${color.white};
  font-family: "NotoSansCJKkr-Medium";
  font-size: 21px;
  margin-bottom: 50px;
  margin-top: 20px;

  &:hover{
    cursor: pointer;
  }
`

const SNSsection = styled.div`
  display:flex;
  justify-content: center;
  flex-wrap: wrap;
`

const SNS = styled.div`
  font-size: 18px;
  color: ${color.black3};
  width: 100%;
  text-align: center;
  margin-bottom: 22px;
`


const SNS_Logo = styled.div`
  display: flex;
  position: relative;
  left: 16px;

  & > a > img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-right: 64px;

    &:hover {
      cursor: pointer;
    }
  }
`
const FindAccount = styled.div`
  width: 100%;
  font-size: 14px;
  color: ${color.black3};
  display: flex;
  justify-content: center;
  margin-top: 50px;

  & > span {
    margin-left: 20px;
  }
  & > a {
    margin-left: 20px;
  }
`

export default Login;
