import styled from "styled-components";
import MyPageHeader from "../../src/component/MyPage/MyPageHeader";
import MyInfo from "../../src/component/MyPage/MyInfo";

const MP04 = () => {
  return (
    <Background>
      <HeadSection>
        <MyPageHeader />
      </HeadSection>
      <Container>
        <MyInfo />
      </Container>
    </Background>
  );
};

const Background = styled.div`
  padding: 0 1rem;
`;

const HeadSection = styled.div`
  width: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default MP04;
