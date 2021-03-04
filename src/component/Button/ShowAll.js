import styled from "styled-components";
import Link from "next/link";
import color from "../../../styles/colors";

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
  color: ${color.black1};
`;

export default ShowAll;
