import styled from "styled-components";
import Link from "next/link";

const ShowAll = ({ text, path }) => {
  return (
    <Container>
      <Link
        href={{
          pathname: "/market",
          query: { curation: path },
        }}
      >
        {text}
      </Link>
    </Container>
  );
};

const Container = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  cursor: pointer;
  display: inline-block;
`;

export default ShowAll;
