import styled from "styled-components";

const Nothing = ({ title }) => {
  return (
    <Container>
      <HeadSection>
        <Title>{title}</Title>
      </HeadSection>
      <Text>등록된 작품이 없습니다</Text>
    </Container>
  );
};
const Text = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Title = styled.div`
  font-family: "Gotham Bold";
  font-size: 24px;
  line-height: 48px;
  text-transform: uppercase;
`;

const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default Nothing;
