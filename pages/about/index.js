import styled from "styled-components";
import Section1 from "../../src/component/About/Section1";
import Section2 from "../../src/component/About/Section2";
import Section3 from "../../src/component/About/Section3";
import Section4 from "../../src/component/About/Section4";

export default function About() {
  return (
    <Container>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Container>
  );
}

const Container = styled.div``;
const SectionWrapper = styled.div``;
