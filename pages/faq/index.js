import styled from "styled-components";
import color from "../../styles/colors";
import FaqSection1 from "../../src/component/FAQ/FaqSection1";
import FaqSection2 from "../../src/component/FAQ/FaqSection2";

const FAQ = () => {
  return (
    <Container>
      <Title>자주 묻는 질문</Title>
      <Section>
        <Section1>
          <FaqSection1 />
        </Section1>
        <Section2>
          <FaqSection2 />
        </Section2>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 48px auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  line-height: 36px;
  font-size: 36px;
  margin-bottom: 70px;
  color: ${color.black2};
`;
const Section = styled.div`
  display: flex;
  width: 100%;
`;

const Section1 = styled.div`
  width: 67%;
`;
const Section2 = styled.div`
  width: 30%;
  margin-left: auto;
`;
export default FAQ;
