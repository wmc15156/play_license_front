import styles from "../../styles/SignupSecond.module.css";
import styled from "styled-components";
import SignUpInput from "../../src/component/Input/SignUpInput";
import { FaCheck } from "react-icons/fa";
import SignUpButton from "../../src/component/Button/SignUpButton";
import useInput from "../../utils/useInput";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { useRouter } from "next/router";
import { signUp } from "../../reducers/user";
import { userReducerUtils } from "../../utils/asyncUtils";

const ValidationCheck = styled.div`
  color: #51cf66;
  margin-top: 30px;
  font-size: 15px;
`;

export type ReqData = {
  provider: "local" | "google" | "kakao" | "naver";
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: "user" | "provider" | "admin";
  admin: boolean;
};

function SignUpSecond() {
  const [phone, onChangePhone] = useInput("");
  const [code, onChangeCode] = useInput("");
  const [name, onChangeName] = useInput("");
  const [term, setTerm] = useState(false);
  const [countDown, setCountDown] = useState(false);
  const [initialTime, setInitialTime] = useState(180);
  const [completedValidation, setCompletedValidation] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const { data } = useSelector(
    (state: RootState) => state.users?.signUpData || userReducerUtils.initial()
  );
  const { email, password } = data || {};

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!term) {
      alert("약관에 동의해주세요.");
      return;
    }

    if (!completedValidation) {
      alert("휴대전화 인증을 해주세요.");
    }

    try {
      const reqData: ReqData = {
        provider: "local",
        fullName: name,
        email,
        password,
        phone,
        role: "user",
        admin: false,
      };
      if (
        phone &&
        code &&
        name &&
        term &&
        completedValidation &&
        email &&
        password
      ) {
        dispatch(signUp(reqData));
        alert("회원가입에 성공했습니다.");
        router.replace("/login");
      } else {
        alert("모든 입력값을 다 적어주세요.");
      }
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const onChangeTerm = () => {
    setTerm((prevState) => !prevState);
  };

  const requestPhoneValidation = async () => {
    if (phone) {
      axios
        .post(`/user/phone-validation/${phone}`)
        .then((res) => {
          if (res.data) {
            alert("인증번호가 발송되었습니다.");
            setCountDown(true);
            setInitialTime(179);
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            alert("이미 존재하는 유저입니다.");
          }
        });
    } else {
      alert("휴대폰번호를 입력해주세요.");
    }
  };

  const validateCode = () => {
    if (code && countDown) {
      axios
        .get("/user/phone-validation", { params: { phone, code } })
        .then((res) => {
          if (res.data.success === true) {
            setCompletedValidation(true);
          }
        })
        .catch((err) => {
          if (err.response.status === 400 && err.response.data?.fail) {
            alert("인증코드를 정확히 입력해주세요");
          }

          if (err.response.status === 403) {
            alert("인증시간 3분이 지났습니다. 다시 시도해주세요");
          }
        });
    }
  };

  useEffect(() => {
    if (!data) {
      router.replace("/signup/first");
      alert("새로고침 하셨으므로 이전 데이터를 다시 입력해주세요!");
    }
  }, []);

  return (
    <div className={styles.Parent}>
      <div className={styles.Title}>
        <strong>BUYER </strong>간편가입
      </div>
      <hr className={styles.YellowLine} />
      <div className={styles.FormBox}>
        <form>
          <div className={styles.NameComment}>
            <strong className={`${styles.RedColor}`}>이름</strong>을
            입력해주세요.
          </div>
          <div>
            <input
              className={styles.NameInput}
              placeholder={"이름을 입력해주세요"}
              value={name}
              onChange={onChangeName}
            />
          </div>
          <div className={styles.NameComment}>
            본인인증을 위한{" "}
            <strong className={`${styles.RedColor}`}>휴대폰 번호</strong>를
            입력해주세요.
          </div>
          <SignUpInput
            placeHolder={"-없이 숫자만 입력해주세요"}
            text={"인증"}
            value={phone}
            onChangeHandler={onChangePhone}
            onClickHandler={requestPhoneValidation}
          />
          <SignUpInput
            placeHolder={"인증번호를 입력해주세요"}
            text={"확인"}
            value={code}
            onChangeHandler={onChangeCode}
            onClickHandler={validateCode}
            countDown={countDown}
            initialTime={initialTime}
            setInitialTime={setInitialTime}
            time={true}
          />
          {completedValidation && (
            <ValidationCheck>인증에 성공했습니다.</ValidationCheck>
          )}
          <div>
            <span className={styles.CheckBox} onClick={onChangeTerm}>
              <FaCheck
                className={`${term ? styles.CheckIconBlue : styles.CheckIcon}`}
              />
            </span>
            <span style={{ fontSize: "18px" }}>개인정보 수집 및 동의</span>
            <span className={styles.Agreement}>자세히 보기</span>
            <div className={styles.SignupButton}>
            <SignUpButton text={"가입하기"} onClickHandler={onSubmitHandler} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpSecond;
