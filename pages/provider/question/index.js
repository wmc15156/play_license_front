import styled from "styled-components";
import color from "../../../styles/colors";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";
import Navi from "../../../src/component/Nav/Navigation";

function pl_question() {
  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <Content></Content>
    </Container>
  );
}
const Container = styled.div`
  ${PageContainer};
`;

const NavContainer = styled.div`
  width: 220px;
`;

const Content = styled.div`
  ${PageContentContainer};
  background-color: lightgray;
`;
export default pl_question;
