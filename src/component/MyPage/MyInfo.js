import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import useSWR from "swr";
import { memo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import fetcher from "../../../utils/fetcher";
import useModal from "../../../utils/useModal";
import EmailType from "../Tag/EmailType";
import MP_ChangePhoneNum from "../Modal/MP_ChangePhoneNum";
import MP_ChangePassword from "../Modal/MP_ChangePassword";
import MP_Unsubscribe from "../Modal/AlertModal2Btns";

const dummies = {
  fullName: "권보경",
  phone: "01012345678",
  email: "abc@abc.com",
  password: "******",
};

const MyInfo = () => {
  // const { data, error, mutate } = useSWR("/auth/me", fetcher);
  const { ModalPortal, openModal, closeModal } = useModal();
  const [userData, setUserData] = useState({});
  const [modal, setModal] = useState("");
  const router = useRouter();

  const getUserData = () => {
    axios
      .get("/auth/me")
      .then((res) => setUserData(res.data))
      .catch((err) => console.error(err));
  };
  console.log(userData);
  useEffect(() => {
    getUserData();
  }, []);

  const onLogOut = () => {
    axios.post("/auth/logout").then((res) => {
      // mutate(false, false);
      router.push("/");
    });
  };

  const unSubscribeHandler = () => {
    axios
      .delete("/auth/unregister")
      .then((res) => {
        if (res.status === 200) {
          closeModal();
          router.push("/");
        }
      })
      .catch((err) => console.error(err));
  };

  const changeModalHandler = (name) => {
    if (name === "phone") {
      setModal("phone");
      openModal();
    }
    if (name === "password") {
      setModal("password");
      openModal();
    }
    if (name === "unsubscribe") {
      setModal("unsubscribe");
      openModal();
    }
  };

  // if (!data) {
  //   router.push("/login");
  // }

  return (
    <Container>
      <Box>
        <List>
          <SubTitles>
            <SubTitle>이름</SubTitle>
            <SubTitle>연락처</SubTitle>
            <SubTitle>이메일</SubTitle>
            <SubTitle>비밀번호</SubTitle>
          </SubTitles>
          <Item>
            <Content>
              <Data>{userData.fullName}</Data>
              <BtnContainer>
                <Btn onClick={onLogOut}>로그아웃</Btn>
              </BtnContainer>
            </Content>
            <Content>
              <Data>{userData.phone}</Data>
              <BtnContainer>
                <ChangeBtn onClick={() => changeModalHandler("phone")}>
                  변경
                </ChangeBtn>
              </BtnContainer>
            </Content>
            <Content>
              <Data>{userData.email}</Data>
              <BtnContainer>
                <EmailType type={dummies.email.split("@")[1]} />
              </BtnContainer>
            </Content>
            <Content>
              <Data>{dummies.password}</Data>
              <BtnContainer>
                <ChangeBtn onClick={() => changeModalHandler("password")}>
                  변경
                </ChangeBtn>
              </BtnContainer>
            </Content>
          </Item>
        </List>
      </Box>
      <Unsubscribe onClick={() => changeModalHandler("unsubscribe")}>
        회원탈퇴하기
      </Unsubscribe>
      <ModalPortal>
        {modal === "phone" && <MP_ChangePhoneNum onClickHandler={closeModal} />}
        {modal === "password" && (
          <MP_ChangePassword onClickHandler={closeModal} />
        )}
        {modal === "unsubscribe" && (
          <MP_Unsubscribe
            text={"회원 탈퇴를 진행하시겠습니까?"}
            content1={
              "탈퇴시 계정이 삭제됨과 동시에 서비스를 이용하실 수 없습니다."
            }
            content2={"그래도 탈퇴를 진행할까요?"}
            onClickBtn1={unSubscribeHandler}
            onClickBtn2={closeModal}
          />
        )}
      </ModalPortal>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 410px);
  width: 100%;
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  border-top-left-radius: 14px;
`;

const SubTitles = styled.li`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  line-height: 30px;
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black1};
  background-color: ${color.gray1};
  padding: 21px 0;
  /* height: 56px; */
  border-bottom: 1px solid ${color.black5};
  :first-child {
    border-top-left-radius: 14px;
  }
  :last-child {
    border: none;
    border-bottom-left-radius: 14px;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 21px 0;
  border-bottom: 1px solid ${color.black5};
  :last-child {
    border: none;
  }
`;

const Data = styled.div`
  display: flex;
  line-height: 30px;
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black1};
  max-width: 384px;
  padding-left: 13%;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 13%;
`;

const BtnStyle = css`
  border-radius: 4px;
  padding: 8px 8.14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.white};
  font-family: "NotoSansCJKkr-Bold";
  font-size: 12px;
  letter-spacing: -0.5px;
  line-height: 12px;
  cursor: pointer;
`;

const Btn = styled.div`
  ${BtnStyle};
  background-color: ${color.blue_2};
`;

const ChangeBtn = styled.div`
  ${BtnStyle};
  background-color: ${color.orange};
  padding: 8px 8px;
`;

const Unsubscribe = styled.div`
  display: inline-block;
  font-family: "NotoSansCJKkr-Regular";
  font-size: 14px;
  line-height: 14px;
  color: ${color.black3};
  text-decoration: underline;
  opacity: 0.4;
  margin-top: 30px;
  margin-bottom: 67px;
  cursor: pointer;
`;
export default memo(MyInfo);
