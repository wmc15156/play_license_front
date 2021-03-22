import styled from "styled-components";
import color from "../../../styles/colors";
import ProviderInfo from "./Form_ProviderInfo";
import PerformanceInfo_Check from "./Form_CheckPerformanceInfo(1+2)";
import PerformanceInfo_Modify from "./Form_ModifyPerformanceInfo(1+2)";
import Btn_Left from "../../component/Button/GrayShortBtn";
import Btn_Right from "../../component/Button/OriginalButton";
import { useState } from "react";

const CheckPage = ({
  userInfo,
  setUserInfo,
  perfInfo,
  setPerfInfo,
  preventChanges,
  back,
  next,
}) => {
  const [mode, setMode] = useState("check");

  const changeMode = (modeName) => {
    setMode(modeName);
    console.log(modeName);
  };
  return (
    <Container>
      <BodySection>
        {mode === "check" && (
          <>
            <ProviderInfo
              userInfo={userInfo}
              setUserInfo={preventChanges}
              readOnly={true}
            />
            <PerformanceInfo_Check
              perfInfo={perfInfo}
              setPerfInfo={preventChanges}
              readOnly={true}
            />
          </>
        )}
        {mode === "modify" && (
          <>
            <ProviderInfo
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              readOnly={false}
            />
            <PerformanceInfo_Modify
              perfInfo={perfInfo}
              setPerfInfo={setPerfInfo}
              readOnly={false}
            />
          </>
        )}
      </BodySection>
      <BtnContainer>
        {mode === "check" && (
          <>
            <BtnWrapper>
              <Btn_Left
                text={"이전"}
                size={"12px"}
                height={"36px"}
                fontColor={color.black2}
                onClickHandler={back}
              />
            </BtnWrapper>
            <BtnWrapper>
              <Btn_Right
                width={"100%"}
                background={true}
                margin={"0px"}
                height={"36px"}
                size={"12px"}
                onClick={() => changeMode("modify")}
              >
                편집하기
              </Btn_Right>
            </BtnWrapper>
          </>
        )}
        {mode === "modify" && (
          <>
            <BtnWrapper>
              <Btn_Left
                text={"이전"}
                size={"12px"}
                height={"36px"}
                fontColor={color.black2}
                onClickHandler={() => changeMode("check")}
              />
            </BtnWrapper>
            <BtnWrapper>
              <Btn_Right
                width={"100%"}
                background={true}
                margin={"0px"}
                height={"36px"}
                size={"12px"}
                onClick={() => {
                  console.log("편집 저장하기");
                  changeMode("check");
                  next();
                }}
              >
                편집저장
              </Btn_Right>
            </BtnWrapper>
          </>
        )}
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div``;
const BodySection = styled.div``;
const BtnContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;
const BtnWrapper = styled.div`
  width: 12.5%;
`;

export default CheckPage;
