import styled from "styled-components";
import color from "../../../styles/colors";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";
import Navi from "../../../src/component/Nav/Navigation";
import Notice from "../../../src/PL_Component/Notice/Home_NoticeSection";
import Faq from "../../../src/PL_Component/Faq/Home_FaqSection";

const pl_home = () => {
  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <Section1>
          <Column>
            공지사항
            <Notice />
          </Column>
          <Column>
            자주묻는질문
            <Faq />
          </Column>
        </Section1>
        <Section2>구매분석</Section2>
      </BodyContainer>
    </Container>
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
const Section1 = styled.div`
  display: flex;
  width: 100%;
`;
const Column = styled.div`
  width: 50%;
`;
const Section2 = styled.div``;

export default pl_home;
