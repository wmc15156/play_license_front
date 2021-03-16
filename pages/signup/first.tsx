import styles from "../../styles/Signup.module.css";
import { useRouter } from "next/router";
import color from "@styles/colors";
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
      <ProcessCircle process={1} lineWidth={"100px"} />
      <Comment font={"24px"} margin={"64px"}>
        <span>개인정보 수집 및 활용</span>에 동의해주세요
      </Comment>
      <TextBox margin={"22px"} height={"156px"}>
        <Title>
          PLAY LICENSE <span>개인정보처리방침</span>
        </Title>
        <Contents>
          <SubTitle>1. 개인정보의 수집범위</SubTitle>
          <Text1>
            ① Play License는 회원가입 및 작품 등록과 구매 등의 서비스 제공을
            위해 일반 회원 가입 당시 아래와 같은 개인정보를 수집하고 있습니다.
          </Text1>
          <Text2>
            &lt;일반 회원 가입 시 수집하는 개인정보의 범위&gt; 필수항목 : 이름,
            비밀번호, 전화번호, e-mail
          </Text2>
          <SubTitle>2. 개인정보의 수집목적 및 이용목적</SubTitle>
          <Text1>
            ① Play License는 회원님께 최대한으로 최적화되고 맞춤화된 서비스를
            제공하기 위하여 다음과 같은 목적으로 개인정보를 수집하고 있습니다.
          </Text1>
          <Text2>
            e-mail, 전화번호, 비밀번호 : 회원제 서비스 이용에 따른 본인 식별
            절차에 이용
          </Text2>
          <Text2>
            e-mail, 전화번호 : 공지사항 전달, 구매 문의 및 수락 여부 등에 대한
            본인 의사 확인, 불만 처리 등 원활한 의사소통 경로의 확보, 새로운
            서비스 안내 등에 이용
          </Text2>
          <Text1>
            ② Play License는 회원의 개인정보를 개인정보의 수집목적 및
            이용목적에서 고지한 범위 내에서만 사용하며 이용자의 사전 동의 없이는
            동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에
            공개하지 않습니다. 단, 이용자들이 사전에 공개에 동의한 경우 법령의
            규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라
            수사기관의 요구가 있는 경우는 예외입니다.
          </Text1>
          <SubTitle>3. 개인정보의 보유기간 및 이용기간</SubTitle>
          <Text1>
            ① 귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은
            목적이 달성되면 파기됩니다. 단, 상법 등 관련법령의 규정에 의하여
            다음과 같이 거래 관련 권리 의무 관계의 확인 등을 이유로 일정기간
            보유하여야 할 필요가 있을 경우에는 일정기간 보유합니다.
          </Text1>
          <Text2>라이선스 부정 이용 및 등록 기록 : 3년</Text2>
          <Text2>계약 및 철회 등에 관한 기록 : 3년</Text2>
          <Text2>대금결제 및 재화등의 공급에 관한 기록 : 3년</Text2>
          <Text2>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</Text2>
          <Text2>3년 간 미접속 및 회원 탈퇴 시 회원 정보 삭제</Text2>
        </Contents>
      </TextBox>
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
const Title = styled.div`
  font-family: "FreightSansBlackSC";
  letter-spacing: 0.86px;
  color: ${color.black4};
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 44px;
  & > span {
    font-family: "NotoSansCJKkr-Bold";
    color: ${color.black2};
    letter-spacing: 0.86px;
    font-size: 22px;
    line-height: 24px;
  }
`;

const Contents = styled.div`
  margin-bottom: 80px;
`;

const SubTitle = styled.p`
  margin: 0;
  margin-top: 28px;
  font-family: "NotoSansCJKkr-Bold";
  &:nth-child(1) {
    margin: 0;
  }
`;
const Text1 = styled.p`
  margin: 0;
  margin: 10px 0;
  font-family: "NotoSansCJKkr-Regular";
`;
const Text2 = styled.p`
  margin: 0;
  margin: 10px 0;
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black3};
  margin-left: 14px;
`;
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
