import styled from "styled-components";
import Link from "next/link";

const FaqSection2 = () => {
  return (
    <Link href="/qna">
      <Container>
        <img src="/assets/image/1:1 banner.png" />
      </Container>
    </Link>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 14px;
  cursor: pointer;
  margin-top: 23px;

  & > img {
    width: 100%;
    height: auto;
  }
`;

export default FaqSection2;
