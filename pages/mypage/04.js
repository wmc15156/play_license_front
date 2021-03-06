import styled from "styled-components";
import MyPageHeader from "../../src/component/MyPageHeader";
import MyInfo from "../../src/component/MyPage/MyInfo";

const pr = () => {
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
  max-width: 924px;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default pr;
