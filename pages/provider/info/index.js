import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import axios from "axios";
import { useState, useEffect, useReducer, useContext } from "react";
import {
  ProviderInfoContext,
  providerInfoReducer,
  providerInfoInitialState,
} from "../../../reducers/providerInfo";
import { useRouter } from "next/router";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";
import Navi from "../../../src/component/Nav/Navigation";
import LogoBar from "../../../src/component/Nav/LogoBar";
import Info from "../../../src/PL_Component/Info/Info";
import Info_Modify from "../../../src/PL_Component/Info/Info_Modify";
import GrayButton from "../../../src/component/Button/GrayShortBtn";
import OrangeButton from "../../../src/component/Button/OriginalButton";
import ModifyMode_Buttons from "../../../src/PL_Component/Info/Info_ModifyBtns";
import useModal from "../../../utils/useModal";
import Modal_Unsubscribe from "../../../src/component/Modal/AlertModal2Btns";

const pl_info = () => {
  const router = useRouter();
  const [mode, setMode] = useState("default");
  const [modal, setModal] = useState("");
  const { ModalPortal, openModal, closeModal } = useModal();

  const modeComponent = {
    default: <Info />,
    modify: <Info_Modify />,
  };

  const changeMode = (modeName) => {
    setMode(modeName);
    window.scrollTo(0, 0);
  };

  const changeModalHandler = (name) => {
    if (name === "unsubscribe") {
      setModal("unsubscribe");
      openModal();
    }
  };

  const closeModalHandler = () => {
    setModal("");
    closeModal();
  };

  const unSubscribeHandler = () => {
    console.log("pl회원탈퇴");
    // axios
    //   .delete("/auth/unregister")
    //   .then((res) => {
    //     if (res.status === 200) {
    //       closeModal();
    //       router.push("/");
    //     }
    //   })
    //   .catch((err) => console.error(err));
  };
  return (
    <ProviderInfoContext.Provider
      value={useReducer(providerInfoReducer, providerInfoInitialState)}
    >
      <Container>
        <NavContainer>
          <Navi />
        </NavContainer>
        <BodyContainer>
          <LogoBar />
          {modeComponent[mode]}
          <>
            {mode === "default" && (
              <>
                <BtnContainer>
                  <GrayButton
                    text={"편집하기"}
                    size={"12px"}
                    height={"36px"}
                    fontColor={color.black2}
                    onClickHandler={() => changeMode("modify")}
                  />
                </BtnContainer>
                <Unsubscribe onClick={() => changeModalHandler("unsubscribe")}>
                  회원탈퇴하기
                </Unsubscribe>
              </>
            )}
            {mode === "modify" && (
              <>
                <BtnContainer>
                  <ModifyMode_Buttons changeMode={changeMode} />
                </BtnContainer>
              </>
            )}
          </>

          <ModalPortal>
            {mode === "default" && modal === "unsubscribe" && (
              <Modal_Unsubscribe
                text={"회원 탈퇴를 진행하시겠습니까?"}
                content1={
                  "탈퇴시 계정이 삭제됨과 동시에 서비스를 이용하실 수 없습니다."
                }
                content2={"그래도 탈퇴를 진행할까요?"}
                onClickBtn1={unSubscribeHandler}
                onClickBtn2={closeModalHandler}
              />
            )}
          </ModalPortal>
        </BodyContainer>
      </Container>
    </ProviderInfoContext.Provider>
  );
};

const Container = styled.div`
  ${PageContainer};
`;

const NavContainer = styled.div`
  width: 220px;
`;

const BodyContainer = styled.div`
  flex-direction: column;
  ${PageContentContainer};
`;

const BtnContainer = styled.div`
  margin-top: 30px;
  width: 25%;
  display: flex;
  align-items: center;
  margin-left: auto;
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
  margin-left: auto;
  display: flex;
  width: 25%;
  justify-content: flex-end;
`;
export default pl_info;
