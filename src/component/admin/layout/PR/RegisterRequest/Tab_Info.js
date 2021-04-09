import styled from "styled-components";
import color from "../../../../../../styles/colors";
import Btn_Left from "../../../../Button/GrayShortBtn";
import Btn_Right from "../../../../Button/OriginalButton";
import ProviderInfo from "../../../../../provider/Work/Form_ProviderInfo";
import PerformanceInfo_Check from "../../../../../provider/Work/Form_CheckPerformanceInfo(1+2)";
import PerformanceInfo_Modify from "../../../../../provider/Work/Form_ModifyPerformanceInfo(1+2)";

import axios from "axios";
import { useState, useEffect } from "react";

const Tab_Info = ({ id }) => {
  const [mode, setMode] = useState("check");

  const changeMode = (modeName) => {
    setMode(modeName);
    console.log(modeName);
  };

  const [userInfo, setUserInfo] = useState({
    company: "",
    description: "",
    name: "",
    phone: "",
  });
  const [perfInfo, setPerfInfo] = useState({
    title: "",
    brokerageConsignments: [],
    brokerageConsignment: [],
    year: "",
    requiredMaterials: {
      select: [],
    },
    selectMaterials: {
      select: [],
      input: "",
    },
    comment: "",
    category: "",
    creativeStaff: {
      author: {},
      composer: {},
      writer: {},
    },
    genre: [],
    mainAudience: [],
    sizeOfPerformance: "",
    runningTime: {
      hour: {},
      min: {},
      intermission: {},
    },
    castMembers: {
      women: {},
      men: {},
      children: {},
    },
    changeScenario: "",
    performanceVideo: "",
    planningDocument: "",
    synopsis: "",
    performanceInformationURL: "",
    numberList: [],
    posterURL: {},
  });

  const getData = () => {
    axios.get(`/product/info/${id}`).then((res) => {
      const { data } = res;
      setUserInfo({
        company: data.company,
        description: data.description,
        name: data.name,
        phone: data.phone,
      });
      setPerfInfo({
        title: data.title,
        brokerageConsignments: data.brokerageConsignments.map((el) => el),
        brokerageConsignment: [],
        year: data.year,
        requiredMaterials: {
          select: data.requiredMaterials.select.map((el) => el),
        },
        selectMaterials: {
          select: data.selectMaterials.select.map((el) => el),
          input: data.selectMaterials.input,
        },
        comment: data.comment,
        category: data.category,
        creativeStaff: {
          author: data.creativeStaff.author,
          composer: data.creativeStaff.composer,
          writer: data.creativeStaff.writer,
        },
        genre: data.genre.map((el) => el),
        mainAudience: data.mainAudience.map((el) => el),
        sizeOfPerformance: data.sizeOfPerformance,
        runningTime: {
          hour: data.totalTime.hour,
          min: data.totalTime.min,
          intermission: data.totalTime.intermission,
        },
        castMembers: {
          women: data.castMembers.women,
          men: data.castMembers.men,
          children: data.castMembers.children,
        },
        changeScenario: data.changeScenario,
        performanceVideo: data.performanceVideo,
        planningDocument: data.plan,
        synopsis: data.synopsis,
        performanceInformationURL: data.performanceInformationURL,
        numberList: data.numberList.map((el) => el),
        posterURL: data.posterURL,
      });
    });
  };

  useEffect(() => getData(), []);

  const preventChanges = () => {
    console.log("수정불가");
  };

  const modifyHandler = () => {
    console.log("수정하기");
  };

  return (
    <Container>
      <BtnContainer>
        {mode === "check" && (
          <>
            <BtnWrapper></BtnWrapper>
            <BtnWrapper>
              <Btn_Right
                width={"100%"}
                background={color.blue_4}
                margin={"0px"}
                height={"40px"}
                size={"14px"}
                onClick={() => changeMode("modify")}
              >
                내용 수정하기
              </Btn_Right>
            </BtnWrapper>
          </>
        )}
        {mode === "modify" && (
          <>
            <BtnWrapper>
              <Btn_Left
                text={"취소"}
                size={"14px"}
                height={"40px"}
                fontColor={color.black2}
                onClickHandler={() => changeMode("check")}
              />
            </BtnWrapper>
            <BtnWrapper>
              <Btn_Right
                width={"100%"}
                background={color.blue_4}
                margin={"0px"}
                height={"40px"}
                size={"14px"}
                onClick={() => {
                  modifyHandler();
                  changeMode("check");
                }}
              >
                저장하기
              </Btn_Right>
            </BtnWrapper>
          </>
        )}
      </BtnContainer>
      <BodySection>
        {mode === "check" && (
          <>
            <ProviderInfo
              themeColor={color.blue}
              userInfo={userInfo}
              setUserInfo={preventChanges}
              readOnly={true}
            />
            <PerformanceInfo_Check
              titleColor={color.blue}
              themeColor={color.blue_2}
              role={"admin"}
              perfInfo={perfInfo}
              setPerfInfo={preventChanges}
              readOnly={true}
            />
          </>
        )}
        {mode === "modify" && (
          <>
            <ProviderInfo
              themeColor={color.blue}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              readOnly={false}
            />
            <PerformanceInfo_Modify
              titleColor={color.blue}
              themeColor={color.blue_2}
              role={"admin"}
              perfInfo={perfInfo}
              setPerfInfo={setPerfInfo}
              readOnly={false}
            />
          </>
        )}
      </BodySection>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`;

const BodySection = styled.div`
  margin-bottom: 60px;
`;
const BtnContainer = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: flex-end;
`;
const BtnWrapper = styled.div`
  margin-left: 20px;
  width: 15%;
`;
export default Tab_Info;
