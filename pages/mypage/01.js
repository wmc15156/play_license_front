import styled from "styled-components";
import MyPageHeader from "../../src/component/MyPage/MyPageHeader";
import PurchaseRequest from "../../src/component/MyPage/PurchaseRequest";

const pr = () => {
  return (
    <Background>
      <HeadSection>
        <MyPageHeader />
      </HeadSection>
      <Container>
        <PurchaseRequest />
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
