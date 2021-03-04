import styles from "../../styles/Signup.module.css";
import { useRouter } from "next/router";
import SignUpButton from "../../src/component/Button/SignUpButton";
import useInput from "../../utils/useInput";
import { useDispatch } from "react-redux";
import { STORE_FIRST_SIGNUP_DATA } from "../../reducers/user";
import { memo, useState, VFC } from "react";
import axios from "axios";
import ContainerWrapper from "@src/component/ContainerWrapper/ContainerWrapper";
import ProcessCircle from "@src/component/molecules/ProcessCircle/ProcessCircle";
import Comment from "@src/component/Comment/Comment";
import TextBox from "@src/component/TextBox/TextBox";
import { FaCheck } from "react-icons/fa";
import CheckBoxWrapper from "@src/component/CheckBoxWrapper/CheckBoxWrapper";
import styled from "styled-components";
import OriginalButton from "@src/component/Button/OriginalButton";
import useSWR from "swr";
import fetcher from "@utils/fetcher";

const CheckBoxContainer = styled.div`
  width: 580px;
  margin-top: 16px;
  font-family: "NotoSansCJKkr-Regular";
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.5px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpFirst: VFC = () => {
  const router = useRouter();
  const [term, setTerm] = useState(false);
  const { data, error } = useSWR("/user/me", fetcher);

  if (data) {
    router.push("/");
  }

  const onChangeTerm = () => {
    setTerm((prev) => !prev);
  };

  const onChangePage = () => {
    router.push("/signup/second");
  };

  return (
    <ContainerWrapper width={"580px"}>
      <ProcessCircle process={1} lineWidth={'100px'} />
      <Comment font={"24px"} margin={"64px"}>
        <span>개인정보 수집 및 활용</span>에 동의해주세요
      </Comment>
      <TextBox margin={"22px"}>개인정보 수집 및 활용에 대한 내용</TextBox>
      <CheckBoxContainer>
        <CheckBoxWrapper
          width={"24px"}
          height={"24px"}
          onChange={onChangeTerm}
          value={term}
        >
          <FaCheck size={"15px"} color={term ? "white" : "gray"} />
        </CheckBoxWrapper>
        <span>위 사항에 대하여 모두 동의합니다</span>
      </CheckBoxContainer>
      <ButtonContainer onClick={onChangePage}>
        <OriginalButton
          width={"580px"}
          margin={"68px"}
          background={term}
          height={"60px"}
          size={"21px"}
        >
          다음 단계로
        </OriginalButton>
      </ButtonContainer>
    </ContainerWrapper>
  );
};

export default memo(SignUpFirst);

// const router = useRouter();
// const dispatch = useDispatch();
//
// const [email, onChangeEmail] = useInput("");
// const [password, onChangePassword] = useInput("");
// const [emailError, setEmailError] = useState("");
// const [checkPassword, onChangeCheckPassword] = useInput("");
// const [passwordError, setPasswordError] = useState(false);
// const [passwordLengthError, setPasswordLengthError] = useState(false);
//
// const confirmPassword = () => {
//   if (password && checkPassword && checkPassword !== password) {
//     setPasswordError(true);
//   } else {
//     setPasswordError(false);
//   }
// };
//
// const duplicatedEmail = () => {
//   if (email) {
//     axios
//       .post("/auth/email/duplicate", { email, provider: "user" })
//       .then((res) => {
//         if (res.status === 200) {
//           setEmailError("");
//         }
//       })
//       .catch((err) => {
//         if (err.response.status === 400) {
//           setEmailError("이메일형식으로 작성해주세요.");
//         }
//         if (err.response.status === 409) {
//           setEmailError("중복된 이메일입니다.");
//         }
//       });
//   } else {
//     setEmailError("");
//   }
// };

//   if (passwordError) {
//     return (
//       <span
//         className={styles.PasswordCheckComment}
//         style={{ color: "red", fontWeight: "bold" }}
//       >
//         불일치
//       </span>
//     );
//   } else if (
//     checkPassword &&
//     password &&
//     checkPassword === password &&
//     !passwordError
//   ) {
//     return (
//       <span
//         className={styles.PasswordCheckComment}
//         style={{ color: "#20c997", fontWeight: "bold" }}
//       >
//         일치
//       </span>
//     );
//   } else {
//     return <span className={styles.PasswordCheckComment}>일치</span>;
//   }
// };
//
// const checkPasswordLength = () => {
//   if (checkPassword) {
//     if (password !== checkPassword) {
//       setPasswordError(true);
//     } else {
//       setPasswordError(false);
//       checkPasswordComment();
//     }
//   }
//   if (password.length < 6) {
//     setPasswordLengthError(true);
//   } else {
//     setPasswordLengthError(false);
//   }
// };
//
// const moveNextPage = (e) => {
//   e.preventDefault();
//   if (
//     !passwordError &&
//     !emailError &&
//     !passwordLengthError &&
//     email &&
//     password
//   ) {
//     dispatch({
//       type: STORE_FIRST_SIGNUP_DATA,
//       payload: { email, password },
//     });
//     router.push("/signup/second");
//   } else {
//     alert("입력값을 확인해주세요!");
//   }
// };
// return (
//   <div className={styles.Parent}>
//     <div className={styles.Title}>
//       <strong className={styles.SubTitle}>BUYER </strong>간편가입
//     </div>
//     <hr className={styles.GrayLine} />
//     <hr className={styles.YellowLine} />
//     <div>
//       <form>
//         <div>
//           로그인에 사용할{" "}
//           <span className={styles.RedColor}>아이디(이메일)</span>를
//           입력해주세요.
//         </div>
//         <div>
//           <input
//             className={styles.LoginInput}
//             placeholder={"아이디를 입력해주세요 (example@playlicense.com)"}
//             value={email}
//             onChange={onChangeEmail}
//             onBlur={duplicatedEmail}
//           />
//           <div className={styles.CheckValidation}>{emailError}</div>
//         </div>
//
//         <div className={styles.PasswordMargin}>
//           로그인에 사용할{" "}
//           <span className={`${styles.RedColor}`}>비밀번호</span>를
//           입력해주세요.
//         </div>
//         <div>
//           <input
//             className={styles.LoginInput}
//             placeholder={"6자리 이상의 비밀번호를 입력해주세요"}
//             value={password}
//             onChange={onChangePassword}
//             type={"password"}
//             onBlur={checkPasswordLength}
//           />
//           {passwordLengthError ? (
//             <div className={styles.CheckValidation}>
//               비밀번호를 6자리 이상으로 작성해주세요
//             </div>
//           ) : null}
//         </div>
//         <div>
//           <input
//             className={`${styles.LoginInput} ${styles.PasswordCheck}`}
//             placeholder={"확인을 위해 다시 한번 입력해주세요"}
//             value={checkPassword}
//             onChange={onChangeCheckPassword}
//             onBlur={confirmPassword}
//             type={"password"}
//           />
//           {checkPasswordComment()}
//         </div>
//         <SignUpButton text={"다음"} onClickHandler={moveNextPage} />
//       </form>
//     </div>
//   </div>
