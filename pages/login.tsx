import styles from "../styles/Login.module.css";
import useInput from "../utils/useInput";
import { useDispatch } from "react-redux";
import { loginThunk } from "../reducers/user";
import { login } from "../core/api/user";

function Login() {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      const data = { email, password };
      dispatch(loginThunk(data));
    }
  };

  return (
    <div
      style={{
        margin: "158px auto auto auto",
        width: "580px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ fontSize: "36px", marginBottom: "22px" }}>
        <strong
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            fontFamily: "Helvetica",
          }}
        >
          BUYER{" "}
        </strong>
        로그인
      </div>
      <hr
        style={{ width: "580px", borderColor: "#FFCC5C", marginBottom: "27px" }}
      />
      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            style={{
              width: "580px",
              height: "60px",
              backgroundColor: "#F5F5F5",
              border: "none",
              borderRadius: "8px",
              marginBottom: "11px",
              textIndent: "22px",
            }}
            placeholder={"아이디(이메일)을 입력해주세요"}
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <input
            style={{
              width: "580px",
              height: "60px",
              backgroundColor: "#F5F5F5",
              border: "none",
              borderRadius: "8px",
              marginBottom: "11px",
              textIndent: "22px",
            }}
            placeholder={"비밀번호를 입력해주세요."}
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <button
          style={{
            width: "580px",
            height: "60px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FF6F69",
            color: "white",
            fontFamily: "Roboto Apple SD Gothic Neo",
            fontSize: "21px",
            marginBottom: "17px",
          }}
        >
          {" "}
          로그인하기{" "}
        </button>
      </form>
      <div
        className={styles.Email}
        style={{ width: "580px", fontSize: "14px" }}
      >
        <div className={styles.Para}>이메일로 간편가입하기</div>
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
              width: "117px",
              cursor: "pointer",
            }}
          >
            아아디(이메일) 찾기
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
              width: "81px",
            }}
          >
            비밀번호 찾기
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "210px",
        }}
      >
        <div className={styles.Sns}>SNS 계정으로 로그인하기</div>
        <div className={styles.Logo}>
          <img
            className={styles.Logo}
            src="https://user-images.githubusercontent.com/60249156/107473831-a2876680-6bb4-11eb-976a-166b32c5f253.png"
          />
          <img
            className={styles.Logo}
            src="https://user-images.githubusercontent.com/60249156/107473421-08bfb980-6bb4-11eb-9dd9-adad9a4221f3.png"
          />
          <img
            className={styles.Logo}
            src="https://user-images.githubusercontent.com/60249156/107471758-f85a0f80-6bb0-11eb-918a-c25463c00651.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
