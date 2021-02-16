import styles from "../../styles/UserHelp.module.css";
import styled, { css } from "styled-components";

import { useState } from "react";
import SignUpButton from "../../src/component/Button/SignUpButton";
import useInput from "../../utils/useInput";
import axios from "axios";
import { useRouter } from "next/router";

const EmailOrPAsswordBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  align-items: center;
  border-radius: 8px;
  font-size: 21px;
  font-weight: bold;
  background-color: ${(props) => props.color || "none"};
  ${(props) => {
    if (props.color) {
      return css`
        color: #ffffff;
      `;
    }
  }}
  &:hover {
    cursor: pointer;
  }
`;

const AuthenticationButton = styled.button`
  width: 580px;
  height: 60px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.color};
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 21px;
  margin-top: 35px;
  opacity: ${(props) => (props.color === "#979797" ? 0.2 : 1)};
  &:hover {
    cursor: pointer;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 8px;
  text-indent: 22px;
  margin-top: 12px;
  font-size: 16px;
`;

function UserHelp() {
  const [clcikEmail, setClickEmail] = useState("#FF6F69");
  const [clickPassword, setClickPasswrod] = useState("");
  const [emailInputDone, setEmailInputDone] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [emailValidationError, setEmailValidationError] = useState(false);
  const router = useRouter();

  const onClickEmail = () => {
    setClickEmail("#FF6F69");
    setClickPasswrod("");
  };

  const onClickPassword = () => {
    setClickPasswrod("#FF6F69");
    setClickEmail("");
  };

  const onClickHandler = () => {
    console.log("here");
    if (clickPassword) {
      console.log("request");
      axios
        .get("/user/forgot-password/by-email", { params: { email } })
        .then((res) => {
          if (res.status === 200) {
            router.replace("/login");
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            alert("가입하신 이메일을 작성해주세요.");
          }
        });
    }
  };

  const onBlurHandler = () => {
    console.log("check");
    const regExp = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (email && email.match(regExp)) {
      setEmailInputDone(true);
      setEmailValidationError(false);
    } else {
      setEmailInputDone(false);
      setEmailValidationError(true);
    }
  };

  return (
    <div className={styles.Parent}>
      <div className={styles.Title}>
        <strong>BUYER </strong>
        계정찾기
      </div>
      <hr className={styles.Line} />
      <div className={styles.EmailPasswordBox}>
        <EmailOrPAsswordBox color={clcikEmail} onClick={onClickEmail}>
          아이디
        </EmailOrPAsswordBox>
        <EmailOrPAsswordBox color={clickPassword} onClick={onClickPassword}>
          패스워드
        </EmailOrPAsswordBox>
      </div>
      <hr className={styles.BorderBottom} />
      <div className={styles.Comment}>
        <p>
          가입시 등록한 <span>휴대폰번호 본인인증</span>을 통해
          <br /> 아이디(이메일)확인 및 비밀번호를 <br /> 변경하실 수 있습니다.
        </p>
      </div>
      {clickPassword && (
        <EmailInput
          onBlur={onBlurHandler}
          placeholder={"아이디(이메일)을 입력해주세요."}
          value={email}
          onChange={onChangeEmail}
        />
      )}
      <div className={styles.ValidationComment}>
        {email && emailValidationError && (
          <span>이메일 형식에 맞게 작성해주세요.</span>
        )}
      </div>

      <AuthenticationButton
        disabled={!emailInputDone}
        onClick={onClickHandler}
        color={emailInputDone ? "#FF6F69" : "#979797"}
      >
        본인인증하기
      </AuthenticationButton>
    </div>
  );
}

export default UserHelp;
