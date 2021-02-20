import styles from "../styles/Login.module.css";
import useInput from "../utils/useInput";
import { useDispatch, useSelector } from "react-redux";
import { isLoginCheckRequest, loginThunk } from "../reducers/user";
import { login } from "../core/api/user";
import { RootState } from "../reducers";
import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { url } from "../utils/url";
import { Root } from "postcss";

function Login() {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [emailInputError, setEmailInutError] = useState(false);
  const [passwordInputError, setPasswordInputError] = useState(false);
  const [loginCheck, stLoginCheck] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const loginError = useSelector((state: RootState) => state.users?.me?.error);
  const me = useSelector((state: RootState) => state.users?.me?.data);
  const isLogin = useSelector((state: RootState) => state.users?.isLogin);
  console.log(me, "me");
  useEffect(() => {
    isLoginCheckRequest(dispatch);
  }, [isLogin]);

  useEffect(() => {
    if (isLogin) {
      alert("로그인이 되어 있습니다. 로그아웃 후 시도 해주세여");
      router.replace("/");
      return;
    }
  }, [isLogin]);

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
      dispatch(loginThunk(data));
      router.push("/");
    }
  };

  return (
    <div className={styles.Parent}>
      {me ? null : (
        <>
          <div style={{ marginBottom: "22px" }}>
            <strong>BUYER </strong>
            로그인
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
            className={styles.Email}
            style={{ width: "100%", fontSize: "14px" }}
          >
            <div className={styles.Para}>
              <Link href="/signup/first">
                <a>이메일로 간편가입하기</a>
              </Link>
            </div>
            <div
              style={{
                display: "inline-block",
                position: "relative",
                left: "212px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  marginRight: "19.5px",
                  cursor: "pointer",
                }}
              >
                <Link href="/user/help">
                  <a>아아디(이메일) 찾기</a>
                </Link>
              </div>
              <div
                style={{
                  display: "inline-block",
                  borderLeft: "1px solid #9E9E9E",
                  height: "22.5px",
                  opacity: "0,3",
                  position: "relative",
                  top: "9px",
                }}
              ></div>
              <div
                style={{
                  display: "inline-block",
                  marginLeft: "19.5px",
                }}
              >
                <Link href="/user/help">
                  <a>비밀번호 찾기</a>
                </Link>
              </div>
            </div>
          </div>
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
              <a href={`${url}/api/auth/naver/callback`}>
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
        </>
      )}
    </div>
  );
}

export default Login;
