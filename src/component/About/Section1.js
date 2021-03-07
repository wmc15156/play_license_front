import styled from "styled-components";

const Section1 = () => {
  return (
    <Container>
      <img src="/assets/image/SI_section1.png" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(851 / 1920 * 100%);
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Section1;
