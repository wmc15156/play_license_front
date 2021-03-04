import styles from "../styles/Login.module.css";
import useInput from "../utils/useInput";
import { useSelector } from "react-redux";

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
    <div className={styles.Parent}>
      {isLogin && !error ? null : (
        <>
          <div style={{ marginBottom: "44px" }}>
            <strong>PLAY LICENSE </strong>
            <span style={{ fontSize: "24px" }}>로그인</span>
          </div>
          <hr className={styles.Line} />
          <form onSubmit={onSubmitHandler}>
            <div>
              <input
                className={styles.LoginInput}
                placeholder={"아이디(이메일)을 입력해주세요"}
                value={email}
                onChange={onChangeEmail}
              />
            </div>
            {emailInputError && (
              <div className={styles.EmailError}>이메일을 입력해주세요.</div>
            )}
            <div>
              <input
                className={styles.LoginInput}
                placeholder={"비밀번호를 입력해주세요."}
                value={password}
                onChange={onChangePassword}
                type="password"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                fontFamily: "NotoSansCJKkr-Regular",
                fontWeight: 400,
              }}
            >
              <CheckBoxWrapper
                width={"24px"}
                height={"24px"}
                onChange={onSaveEmail}
                value={loginSave}
              >
                <FaCheck size={"15px"} color={loginSave ? "white" : "gray"} />
              </CheckBoxWrapper>
              <span>아이디 저장</span>
            </div>
            {loginError && (
              <div className={styles.LoginError}>
                가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.
              </div>
            )}
            {passwordInputError && (
              <div className={styles.EmailError}>비밀번호를 입력해주세요.</div>
            )}
            <button className={styles.LoginButton}> 로그인하기 </button>
          </form>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div className={styles.Sns}>SNS 계정으로 로그인하기</div>
            <div className={styles.Logo}>
              <a href={`${url}/api/auth/google/callback`}>
                <img
                  className={styles.Logo}
                  src="https://user-images.githubusercontent.com/60249156/107981737-03280080-7006-11eb-9536-1c26c58f5c04.png"
                />
              </a>
              <a href={`http://localhost:8000/api/auth/naver/callback`}>
                <img
                  className={styles.Logo}
                  src="https://user-images.githubusercontent.com/60249156/107981747-058a5a80-7006-11eb-80c1-c8bfa6fed440.png"
                />
              </a>
              <a href={`${url}/api/auth/kakao/callback`}>
                <img
                  className={styles.Logo}
                  src="https://user-images.githubusercontent.com/60249156/107981743-04f1c400-7006-11eb-9332-dae6db0b9411.png"
                />
              </a>
            </div>
          </div>
          <div className={styles.FindAccount}>
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
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
