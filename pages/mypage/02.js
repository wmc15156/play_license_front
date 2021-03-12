import styled from "styled-components";
import MyPageHeader from "../../src/component/MyPage/MyPageHeader";
import Favorites from "../../src/component/MyPage/Favorites";

const pr = () => {
  return (
    <Background>
      <HeadSection>
        <MyPageHeader />
      </HeadSection>
      <Container>
        <Favorites />
      </Container>
    </Background>
  );
};
const Background = styled.div`
  padding: 0 1rem;
`;

const HeadSection = styled.div``;

const Container = styled.div`
  max-width: 1200px;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default pr;
