import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import useModal from "../../../utils/useModal";
import ChangePhoneNum from "../../component/Modal/MP_ChangePhoneNum";
import ChangePassword from "../../component/Modal/MP_ChangePassword";
import ImgUploader from "../../component/Input/ProfileImgUploader";
import TextArea from "../../component/BasicInput/TextArea";
import { useRouter } from "next/router";
import axios from "axios";
import { memo, useState, useEffect, useContext } from "react";
import { ProviderInfoContext } from "../../../reducers/providerInfo";
import AlertModal from "../../component/Modal/AlertModal";
import { MdDelete } from "react-icons/md";

const dummies = {
  image: "/assets/image/PL/logo.png",
  aboutProvider: `㈜문화공작소 상상마루는 어린이와 가족을 위한 문화예술분야 소셜벤처기업으로
  ‘우리 이야기로 세계를 감동시키는 문화 상상집단’을 모토로 하고 있습니다.`,
  fullName: "김상상",
  phone: "010-1234-5678",
  email: "abcdefghi@naver.com",
  password: "**********",
};

const InfoBox_Modify = () => {
  const router = useRouter();
  const [state, dispatch] = useContext(ProviderInfoContext);
  const { avatar, comment, company, fullName, phone, email } = state.user;
  const { ModalPortal, openModal, closeModal } = useModal();
  const [modal, setModal] = useState("");

  const getUserData = () => {
    axios
      .get("auth/provider/me")
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_INFO", info: res.data });
        dispatch({
          type: "UPDATE_INFO",
          changed: {
            comment: res.data.comment,
            avatar: res.data.avatar,
          },
        });
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => getUserData(), []);

  const changeModalHandler = (name) => {
    if (name === "phone") {
      setModal("phone");
      openModal();
    }
    if (name === "password") {
      setModal("password");
      openModal();
    }
    if (name === "logout") {
      setModal("logout");
      openModal();
    }
  };

  const onLogOut = () => {
    axios
      .post("/auth/provider/logout")
      .then((res) => {
        changeModalHandler("logout");
        openModal();
      })
      .catch((err) => console.log(err.response));
  };

  const closeModalHandler = () => {
    setModal("");
    closeModal();
  };

  const urlHandler = (url, filename) => {
    // dispatch({
    //   type: "SELECT_IMG",
    //   avatar: { ...state.user, avatar: url},
    // });
    dispatch({
      type: "UPDATE_INFO",
      changed: { ...state.changed, avatar: url },
    });
  };

  const removeImageHandler = () => {
    dispatch({
      type: "UPDATE_INFO",
      changed: { ...state.changed, avatar: "" },
    });
  };

  return (
    <div>
      <Section1>
        <ProfileImageContainer>
          <img
            src={
              !state.changed.avatar
                ? "/assets/image/PL/boy.png"
                : state.changed.avatar
            }
            onClick={removeImageHandler}
          />
          <UploadBtn>
            <ImgUploader urlHandler={urlHandler} />
          </UploadBtn>
        </ProfileImageContainer>

        <ProfileName>
          {company}
          <Btn onClick={onLogOut}>로그아웃</Btn>
        </ProfileName>
        {/* {state.changed.comment && ( */}
        <TextArea
          readOnly={false}
          borderStyle={`2px solid ${color.black5}`}
          background={color.white}
          placeholder={"제작사 설명을 입력하세요"}
          fontSize={"10px"}
          height={"100%"}
          fontColor={color.black1}
          textAlign={"center"}
          padding={"15px 60px"}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_COMMENT_VALUE",
              changed: { ...state.changed, comment: e.target.value },
            })
          }
          value={state.changed.comment}
        />
        {/* )} */}
      </Section1>
      <Section2>
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
                <Data>{fullName}</Data>
              </Content>
              <Content>
                <Data>{phone}</Data>
                <ChangeBtnWrapper>
                  <ChangeBtn onClick={() => changeModalHandler("phone")}>
                    변경
                  </ChangeBtn>
                </ChangeBtnWrapper>
              </Content>
              <Content>
                <Data>{email}</Data>
              </Content>
              <Content>
                <Data>{dummies.password}</Data>
                <ChangeBtnWrapper>
                  <ChangeBtn onClick={() => changeModalHandler("password")}>
                    변경
                  </ChangeBtn>
                </ChangeBtnWrapper>
              </Content>
            </Item>
          </List>
        </Box>
      </Section2>
      <ModalPortal>
        {modal === "phone" && (
          <ChangePhoneNum
            role={"provider"}
            onClickHandler={closeModalHandler}
          />
        )}
        {modal === "password" && (
          <ChangePassword
            role={"provider"}
            onClickHandler={closeModalHandler}
          />
        )}
        {modal === "logout" && (
          <AlertModal
            text={"로그아웃 되었습니다"}
            onClickBtn={() => {
              closeModalHandler();
              router.push("/provider");
            }}
            fontSize={"14px"}
          />
        )}
      </ModalPortal>
    </div>
  );
};

const Section1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${color.white};
  margin-bottom: 32px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  & > img {
    max-width: 80px;
    max-height: 80%;
    height: auto;
    &:hover {
      content: url("/assets/image/PL/removeIcon.png");
    }
  }
`;

const UploadBtn = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const ProfileName = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 32px;
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black2};
`;

const Btn = styled.div`
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
  margin-left: 30px;
  background-color: ${color.blue_2};
`;

const Section2 = styled.div`
  width: 100%;
`;

const Box = styled.div`
  width: 100%;
  height: auto;
  border-radius: 14px;
  border: 2px solid ${color.gray1};
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
    border-top-left-radius: 12px;
  }
  :last-child {
    border: none;
    border-bottom-left-radius: 12px;
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

const ChangeBtnWrapper = styled.div`
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

const ChangeBtn = styled.div`
  ${BtnStyle};
  background-color: ${color.orange};
  padding: 8px 8px;
`;

const BtnContainer = styled.div`
  margin-top: 30px;
  width: 25%;
  display: flex;
  align-items: center;
  margin-left: auto;
`;
const Margin = styled.div`
  width: 20px;
`;
export default memo(InfoBox_Modify);
