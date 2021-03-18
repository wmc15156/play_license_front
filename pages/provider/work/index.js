import styled from "styled-components";
import color from "../../../styles/colors";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";
import Navi from "../../../src/component/Nav/Navigation";
import LogoBar from "../../../src/component/Nav/LogoBar";

function pl_work() {
  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />
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

export default pl_work;
