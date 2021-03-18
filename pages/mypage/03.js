import styled from "styled-components";
import MyPageHeader from "../../src/component/MyPage/MyPageHeader";
import QAList from "../../src/component/MyPage/QAList";

const pr = () => {
  return (
    <Background>
      <div>
        <MyPageHeader />
      </div>
      <Container>
        <QAList />,
      </Container>
    </Background>
  );
};
const Background = styled.div`
  padding: 0 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default pr;
