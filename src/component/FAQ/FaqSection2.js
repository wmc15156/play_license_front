import styled from "styled-components";

const FaqSection2 = () => {
  return (
    <Container>
      <img src="/assets/image/1:1 banner.png" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 14px;

  & > img {
    /* max-width: 380px; */
    width: 100%;
    height: auto;
  }
`;

export default FaqSection2;
