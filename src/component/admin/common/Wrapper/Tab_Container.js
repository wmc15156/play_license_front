import styled, { css } from "styled-components";
import color from "../../../../../styles/colors";
import { useState } from "react";
import {
  TabContainer,
  TabContentWrapper,
} from "../../../../../styles/PL_Frame";
import Select from "../../../Input/SelectOption";
import Btn from "../../../Button/OriginalButton";
import Tab_WorkInfo from "../../layout/BY/Question_Buy/Tab_WorkInfo";
import Tab_Header from "../../layout/PR/RegisterRequest/Tab_Header";
import Tab_Info from "../../layout/PR/RegisterRequest/Tab_Info";
import Tab_Required from "../../layout/PR/RegisterRequest/Tab_Required";
import Tab_Selected from "../../layout/PR/RegisterRequest/Tab_Selected";
import StatusBox from "../../../Tag/Purchase_AnswerStatus";

const Tab_Container = ({ id, purpose, pageType, infoBtnColor }) => {
  const [selected, setSelected] = useState("");
  const [tabName, setTabName] = useState("info");

  const Tabs = {
    info:
      pageType === "buyer" ? (
        <Tab_WorkInfo id={id} purpose={purpose} infoBtnColor={infoBtnColor} />
      ) : (
        <Tab_Info id={id} infoBtnColor={infoBtnColor} />
      ),
    required: <Tab_Required id={id} />,
    selected: <Tab_Selected id={id} />,
  };

  return (
    <Container>
      <HeadSection pageType={pageType ? pageType : null}>
        <T1>문의내역 상세보기</T1>
        <Row>
          <T2>
            {id}
            <span>
              <StatusBox status={"관리자검토중"} />
            </span>
          </T2>
          <RightArea tabName={tabName}>
            <Select_Input pageType={pageType ? pageType : null}>
              <Select
                value={selected}
                onChange={setSelected}
                options={["관리자검토중", "보완요청", "승인완료"]}
                height={"40px"}
                radius={"8px"}
                fontSize={"14px"}
                defaultOption={"상태변경"}
              />
            </Select_Input>
            {pageType === "buyer" && (
              <Btn_Wrap pageType={pageType ? pageType : null}>
                <Btn
                  width={"100%"}
                  margin={"0px"}
                  background={color.gray1}
                  height={"40px"}
                  size={"14px"}
                  fontColor={color.black3}
                  // onClick={onClick}
                >
                  계약서 작성
                </Btn>
              </Btn_Wrap>
            )}
            {tabName === "info" && (
              <Btn_Wrap pageType={pageType ? pageType : null}>
                <Btn
                  width={"100%"}
                  margin={"0px"}
                  background={color.white}
                  height={"40px"}
                  size={"14px"}
                  fontColor={pageType === "buyer" ? color.orange : color.blue}
                  borderStyle={
                    pageType === "buyer"
                      ? `1px solid ${color.orange}`
                      : `1px solid ${color.blue}`
                  }
                  // onClick={onClick}
                >
                  문의 데이터 다운로드
                </Btn>
              </Btn_Wrap>
            )}
          </RightArea>
        </Row>
      </HeadSection>
      {pageType === "provider" && (
        <Tab_Header changeTab={setTabName} tabName={tabName} />
      )}
      <BodySection>{Tabs[tabName]}</BodySection>
    </Container>
  );
};

const Container = styled.div`
  ${TabContainer}
  margin-top:60px;
`;

const HeadSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.pageType === "buyer"
      ? css`
          padding-bottom: 28px;
          border-bottom: 3px solid ${color.black5};
        `
      : css`
          margin-bottom: 60px;
        `};
`;

const T1 = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: ${color.black3};
  margin-bottom: 20px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const T2 = styled.div`
  font-size: 24px;
  line-height: 26px;
  display: flex;
  align-items: center;

  & > span {
    margin-left: 20px;
  }
`;

const RightArea = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  justify-content: ${(props) =>
    props.tabName === "info" ? "space-between" : "flex-end"};
`;

const Select_Input = styled.div`
  height: 40px;
  width: ${(props) => (props.pageType === "buyer" ? "25%" : "40%")};
`;

const Btn_Wrap = styled.div`
  display: flex;
  width: ${(props) => (props.pageType === "buyer" ? "33%" : "55%")};
`;

const BodySection = styled.div`
  ${TabContentWrapper}
`;
export default Tab_Container;
