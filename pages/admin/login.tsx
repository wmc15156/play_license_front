import React, { useCallback, useState } from "react";
import ContainerWrapper from "../../src/component/ContainerWrapper/CenterWrapper";
import styled from "styled-components";
import { Wrapper } from "@src/component/molecules/TextAndInput/TextAndInput";
import InputBox from "@src/component/BasicInput/BasicInput";
import useInput from "@utils/useInput";
import CheckBoxWrapper from "@src/component/CheckBoxWrapper/CheckBoxWrapper";
import color from "@styles/colors";
import { FaCheck } from "react-icons/fa";
import OriginalButton from "@src/component/Button/OriginalButton";
import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
// import { ReactCompoent as AdminLogo }from '../../public/assets/image/title.svg'

export const ImageWrapper = styled.div`
  max-width: 770px;
  width: 100%;
  display:flex;
  justify-content:center;
  /* margin-top: 126px; */

  & > img {
    display: inline-block;
    width: 746px;
    height: 188px;
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

function AdminLogin() {
  const { data, error } = useSWR("/admin/me", fetcher);
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
        .post("/admin/login", data)
        .then((res) => {
          router.push("/admin");
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    }
  };

  if (data) {
    router.push("/admin");
    return null;
  }
  return (
    <>
      {/* {data === false ? ( */}
      {!data ? ( 
        <>
          <ContainerWrapper width="580px">
            <ImageWrapper>
              <img src={"/assets/image/title.svg"} />
            </ImageWrapper>
            <Wrapper margin={"86px"}>
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
                value={loginSave ? color.orange : ""}
              >
                <FaCheck size={"15px"} color={loginSave ? "white" : "gray"} />
              </CheckBoxWrapper>
              <span>이메일 저장</span>
            </IconWrapper>

            <OriginalButton
              margin={"26px"}
              width={"580px"}
              background={color.orange}
              height={"60px"}
              size={"21px"}
              onClick={onSubmit}
            >
              로그인하기
            </OriginalButton>
          </ContainerWrapper>
        </>
      ) : null}
    </>
  );
}

export default AdminLogin;
