import styled from "styled-components";
import HighlightVideo from "../Detail/HighlightVideo";
import About from "./About";
import Section1 from "./Section1";

const PerformanceDetail = ({ item }) => {
  return (
    <Container>
      <div>아이템{item.id}</div>
      <Section1 item={item} />

      {/* 비디오 */}
      <Section2>
        <HighlightVideo />
      </Section2>
      <Section3>
        <About item={item} />
      </Section3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Section2 = styled.div`
  margin-top: 120px;
  margin-bottom: 35px;
  width: 100%;
  max-height: 600px;
`;

const Section3 = styled.div`
  width: 100%;
  height: 100%;
`;

export default PerformanceDetail;
