import styled from "styled-components";
import color from "../../../../../../styles/colors";
import { useCallback, useEffect, useState } from "react";
import {
  TabContainer,
  TabContentWrapper,
} from "../../../../../../styles/PL_Frame";
import Tab_Header from "./Tab_Header";
import Tab_Info from "./Tab_Info";
import Tab_Required from "./Tab_Required";
import Tab_Selected from "./Tab_Selected";
import StatusBox from "../../../../../../src/component/Tag/Purchase_AnswerStatus";

const Tabs = {
  info: <Tab_Info />,
  required: <Tab_Required />,
  selected: <Tab_Selected />,
};

const Tab_Container = ({ id }) => {
  const [tabName, setTabName] = useState("info");

  return (
    <Container>
      <HeadSection>
        <T1>문의내역 상세보기</T1>
        <T2>
          {id}
          <span>
            <StatusBox status={"관리자검토중"} />
          </span>
        </T2>
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
const T2 = styled.div`
  font-size: 24px;
  line-height: 26px;
  display: flex;
  align-items: center;

  & > span {
    margin-left: 20px;
  }
`;

const BodySection = styled.div`
  ${TabContentWrapper}
`;
export default Tab_Container;
