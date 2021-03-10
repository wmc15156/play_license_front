import styled from "styled-components";
import MyPageHeader from "../../src/component/MyPage/MyPageHeader";
import QAList from "../../src/component/MyPage/QAList";

const pr = () => {
  return (
    <Background>
      <HeadSection>
        <MyPageHeader />
      </HeadSection>
      <Container>
        <QAList />,
      </Container>
    </Background>
  );
};
const Background = styled.div`
  padding: 0 1rem;
`;

const HeadSection = styled.div``;

const Container = styled.div`
  max-width: 924px;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default pr;
