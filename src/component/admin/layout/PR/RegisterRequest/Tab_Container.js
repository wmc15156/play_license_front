import styled from "styled-components";
import color from "../../../../../../styles/colors";
import { useCallback, useEffect, useState } from "react";
import {
  TabContainer,
  TabContentWrapper,
} from "../../../../../../styles/PL_Frame";
import Select from "../../../../Input/SelectOption";
import Btn from "../../../../Button/OriginalButton";
import Tab_Header from "./Tab_Header";
import Tab_Info from "./Tab_Info";
import Tab_Required from "./Tab_Required";
import Tab_Selected from "./Tab_Selected";
import StatusBox from "../../../../../../src/component/Tag/Purchase_AnswerStatus";

const Tab_Container = ({ id }) => {
  const [selected, setSelected] = useState("");
  const [tabName, setTabName] = useState("info");

  const Tabs = {
    info: <Tab_Info id={id} />,
    required: <Tab_Required id={id} />,
    selected: <Tab_Selected id={id} />,
  };

  return (
    <Container>
      <HeadSection>
        <T1>문의내역 상세보기</T1>
        <Row>
          <T2>
            {id}
            <span>
              <StatusBox status={"관리자검토중"} />
            </span>
          </T2>
          <RightArea tabName={tabName}>
            <Select_Input>
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
            {tabName === "info" && (
              <Btn_Wrap>
                <Btn
                  width={"100%"}
                  margin={"0px"}
                  background={color.white}
                  height={"40px"}
                  size={"14px"}
                  fontColor={color.blue}
                  borderStyle={`1px solid ${color.blue}`}
                  // onClick={onClick}
                >
                  문의 데이터 다운로드
                </Btn>
              </Btn_Wrap>
            )}
          </RightArea>
        </Row>
      </HeadSection>
      <Tab_Header changeTab={setTabName} tabName={tabName} />
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
  margin-bottom: 60px;
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
  width: 36%;
  justify-content: ${(props) =>
    props.tabName === "info" ? "space-between" : "flex-end"};
`;

const Select_Input = styled.div`
  height: 40px;
  width: 40%;
`;

const Btn_Wrap = styled.div`
  display: flex;
  width: 55%;
`;

const BodySection = styled.div`
  ${TabContentWrapper}
`;
export default Tab_Container;
