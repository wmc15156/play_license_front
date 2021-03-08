import styled from "styled-components";
import color from "../../../styles/colors";
import Btn from "../Button/OriginalButton";
import useInput from "../../../utils/useInput";
import Input from "../Input/InputWithCheck";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { debounce } from "lodash";

const MP_ChangePassword = ({ onClickHandler }) => {
  const [password, setPassword] = useInput("");
  const [newPW, setNewPW] = useInput("");
  const [checkNewPW, setCheckNewPW] = useInput("");
  const [checkCurrPW, setCheckCurrPW] = useState(false);
  const [same, setSame] = useState(false);
  const [validate, setValidate] = useState(false);

  // 현재 비밀번호랑 입력한 비밀번호가 같은 지 체크해야함

  useEffect(() => newPWCheckHandler(), [password, newPW, checkNewPW]);
  useEffect(() => validateHandler(), [checkCurrPW, same, validate]);
  // useEffect(() => currentPWCheckHandler(), [checkCurrPW, same, validate]);
  const passwordCheckRequest = debounce(() => currentPWCheckHandler(), 2000);
  const currentPWCheckHandler = () => {
    // 비번 보내기 axios
    axios.get(`/user/check/password/${password}`).then((res) => {
      if (res.status === 200) {
        setCheckCurrPW(true);
        return;
      }
    });
  };
  const validateHandler = () => {
    if (checkCurrPW && same) {
      // setValidate(true);
      return;
    }
  };

  const newPWCheckHandler = () => {
    if (!newPW || !checkNewPW) {
      setSame(false);
    } else if (newPW === checkNewPW) {
      setSame(true);
    } else {
      setSame(false);
    }
  };

  const onClickBtnHandler = ({ onClickHandler }) => {
    const param = { password: checkNewPW };
    if (validate) {
      axios
        .patch("/user/update", param)
        .then((res) => {
          if (res.status === 200) {
            alert("비밀번호가 변경되었습니다");
            password = "";
            newPW = "";
            checkNewPW = "";
            onClickHandler();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container>
      <HeadSection>
        <Title>비밀번호 변경</Title>
        <Icon onClick={onClickHandler}>
          <IoClose size="32px" color={color.black3} />
        </Icon>
      </HeadSection>
      <Content>
        <Input
          inputType={"password"}
          checkType={"확인"}
          checkCurrPW={checkCurrPW}
          placeholder={"현재 비밀번호를 입력해주세요"}
          height={"60px"}
          fontSize={"16px"}
          value={password}
          onChange={setPassword}
          onKeyUp={passwordCheckRequest}
        />
        <Divider />
        <Input
          inputType={"password"}
          placeholder={"새 비밀번호를 입력해주세요"}
          height={"60px"}
          fontSize={"16px"}
          value={newPW}
          onChange={setNewPW}
        />
        <Div />
        <Input
          inputType={"password"}
          checkType={"일치"}
          placeholder={"확인을 위해 다시 한번 입력해주세요"}
          height={"60px"}
          fontSize={"16px"}
          value={checkNewPW}
          onChange={setCheckNewPW}
          checkSame={same}
        />
      </Content>
      <BtnContainer>
        <Btn
          width={"100%"}
          background={validate}
          margin={"0"}
          height={"60px"}
          size={"21px"}
          onClick={onClickBtnHandler}
        >
          적용하기
        </Btn>
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${color.white};
  z-index: 10;
  padding: 44px 44px;
  border-radius: 14px;
  margin: 0 1rem;
`;

const HeadSection = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;
const Icon = styled.span`
  cursor: pointer;
  position: absolute;
  right: 0;
`;
const Title = styled.div`
  display: inline-block;
  width: 100%;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 21px;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
  color: ${color.black1};
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${color.gray1};
  margin: 20.5px 0;
`;

const Div = styled.div`
  width: 100%;
  margin-bottom: 21px;
`;

const BtnContainer = styled.div`
  width: 100%;
  margin-top: 36px;
`;

export default MP_ChangePassword;
