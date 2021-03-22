import styled, { css } from "styled-components";
import color from "../../../../styles/colors";
import {
  PageContainer,
  PageContentContainer,
} from "../../../../styles/PL_Frame";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Navi from "../../../../src/component/Nav/Navigation";
import LogoBar from "../../../../src/component/Nav/LogoBar";
import useModal from "../../../../utils/useModal";
import OrangeShortBtn from "../../../../src/component/Button/OriginalButton";
import GrayShortBtn from "../../../../src/component/Button/GrayShortBtn";
import ProviderInfo from "../../../../src/PL_Component/Work/Form_ProviderInfo";
import PerformanceInfo1 from "../../../../src/PL_Component/Work/Form_PerformanceInfo1";
import PerformanceInfo2 from "../../../../src/PL_Component/Work/Form_PerformanceInfo2";

import { FaCheck } from "react-icons/fa";
import CheckBoxWrapper from "../../../../src/component/CheckBoxWrapper/CheckBoxWrapper";
import Notice from "../../../../src/component/GrayNotice";

const notice = {
  title: "안내사항",
  body1:
    "1. 요청하신 작품은 관리자 검토 후에 별도 연락드립니다. 필요시 오프라인 심사가 있을 수 있습니다.",
  body2: "2. 최종 등록자료는 협의 후에 결정됩니다.",
  body3: "3. 문의 내용에 보완이 필요할 경우, 추가 요청을 드릴 수 있습니다.",
};

function pl_workRegister01() {
  const router = useRouter();
  const { openModal, ModalPortal, closeModal } = useModal();
  const [checked, setChecked] = useState(false);
  const [step, setStep] = useState("01");
  const [userInfo, setUserInfo] = useState({
    // TODO: 계정정보 페이지 내용과 동일, 연동해서 미리 입력
    groupName: "",
    introduction: "",
    name: "",
    phone: "",
  });
  // /performances/:id (buyer작품상세)페이지에 뿌려지는 key이름 사용
  const [perfInfo, setPerfInfo] = useState({
    title: "",
    purpose: [],
    year: "",
    // requiredMaterials: [],
    requiredMaterials: {
      select: [],
    },
    selectedMaterials: {
      select: [],
      input: "",
    },
    comment: "",
    category: { select: [], input: "" }, //공연분야
    creativeStaff: { author: {}, composer: {}, writer: {} },
    genre: [],
    mainAudience: [],
    sizeOfPerformance: "",
    runningTime: { hour: "", min: "", intermission: "" },
    castMembers: { women: "", men: "", child: "" },
    isChangedScenario: "", //각색허용여부
    youtubeUrl: "",
    description: "",
    synopsis: "",
    performanceInformationURL: "",
    numberList: "",
    posterImage: "",
    background: { pc: "", mobile: "" },
  });
  const [userInputData, setUserInputData] = useState({
    ...userInfo,
    ...perfInfo,
  });

  console.log("모든state", {
    ...userInfo,
    ...perfInfo,
  });

  const back = () => router.back();
  const changeTab = (step) => {
    setStep(step);
  };

  const submit = () => {
    console.log("submit :", {
      ...userInfo,
      ...perfInfo,
    });
    router.push("/provider/work/register/complete");
  };

  const handleChange = (e) => {
    e.persist();
    setChecked((prevState) => !prevState);
    setUserInputData({
      ...userInfo,
      ...perfInfo,
    });
  };

  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />
        <HeadSection>
          <T1>작품 판매 등록을 위해</T1>
          <T2>
            <span>작품정보</span>를 작성해주세요
          </T2>
          {step === "01" && <Num>1/2</Num>}
          {step === "02" && <Num>2/2</Num>}
        </HeadSection>
        <Divider>
          {step === "01" && (
            <>
              <Div1 />
              <Div2 />
            </>
          )}
          {step === "02" && <Div1 />}
        </Divider>
        <Section>
          {step === "01" && (
            <>
              <ProviderInfo userInfo={userInfo} setUserInfo={setUserInfo} />
              <PerformanceInfo1 perfInfo={perfInfo} setPerfInfo={setPerfInfo} />
            </>
          )}
          {step === "02" && (
            <PerformanceInfo2 perfInfo={perfInfo} setPerfInfo={setPerfInfo} />
          )}
        </Section>
        <Notice
          title={notice.title}
          body1={notice.body1}
          body2={notice.body2}
          body3={notice.body3}
        />

        <BottomSection>
          {step === "01" && (
            <>
              <BtnWrapper>
                <GrayShortBtn
                  text={"이전"}
                  onClickHandler={back}
                  fontColor={color.black3}
                  size={"12px"}
                  height={"36px"}
                />
              </BtnWrapper>
              <BtnWrapper>
                <OrangeShortBtn
                  width={"100%"}
                  background={true}
                  margin={"0px"}
                  height={"36px"}
                  size={"12px"}
                  onClick={() => changeTab("02")}
                >
                  다음
                </OrangeShortBtn>
              </BtnWrapper>
            </>
          )}
          {step === "02" && (
            <BtnSection>
              <CheckSection>
                <CheckBoxWrapper
                  width={"24px"}
                  height={"24px"}
                  onChange={handleChange}
                  value={checked ? color.orange : false}
                >
                  <FaCheck size={"15px"} color={checked ? "white" : "gray"} />
                </CheckBoxWrapper>
                <Check>안내사항을 확인했습니다</Check>
              </CheckSection>
              <Step2Buttons>
                <BtnWrapper>
                  <GrayShortBtn
                    text={"이전"}
                    onClickHandler={() => changeTab("01")}
                    fontColor={color.black3}
                    size={"12px"}
                    height={"36px"}
                  />
                </BtnWrapper>
                <OrangeSubmitBtn>
                  <OrangeShortBtn
                    width={"100%"}
                    background={true}
                    margin={"0px"}
                    height={"36px"}
                    size={"12px"}
                    onClick={submit}
                  >
                    작품판매 등록 요청하기
                  </OrangeShortBtn>
                </OrangeSubmitBtn>
              </Step2Buttons>
            </BtnSection>
          )}
        </BottomSection>
      </BodyContainer>
    </Container>
  );
}

const Container = styled.div`
  ${PageContainer};
`;

const NavContainer = styled.div`
  width: 220px;
`;

const BodyContainer = styled.div`
  ${PageContentContainer};
  flex-direction: column;
`;
const HeadSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const T1 = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 20px;
  color: ${color.black3};
`;
const T2 = styled.div`
  font-size: 24px;
  line-height: 26px;
  color: ${color.black1};
  & > span {
    color: ${color.orange};
  }
`;
const Num = styled.div`
  margin-left: auto;
  line-height: 28px;
  font-size: 14px;
`;
const Divider = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
`;

const Div1 = styled.div`
  background-color: ${color.yellow};
  height: 3px;
  width: 100%;
`;
const Div2 = styled.div`
  background-color: ${color.black5};
  height: 3px;
  width: 100%;
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const BottomSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 33px;
`;
const CheckSection = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const Check = styled.div``;
const BtnSection = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 61px;
`;

const Step2Buttons = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

const BtnWrapper = styled.div`
  width: 12.5%;
`;
const OrangeSubmitBtn = styled.div`
  width: 146px;
  margin-left: 20px;
`;

export default pl_workRegister01;
