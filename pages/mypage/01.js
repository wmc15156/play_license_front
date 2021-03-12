import styled from "styled-components";
import MyPageHeader from "../../src/component/MyPage/MyPageHeader";
import PurchaseRequest from "../../src/component/MyPage/PurchaseRequest";

const pr = () => {
  return (
    <Background>
      <div>
        <MyPageHeader />
      </div>
      <Container>
        <PurchaseRequest />
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
