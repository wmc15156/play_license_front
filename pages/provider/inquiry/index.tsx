import styled from "styled-components";
import OriginalButton from "@src/component/Button/OriginalButton";
import color from "@styles/colors";
import Link from "next/link";

const Container = styled.div`
  //position: relative;
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: grid;
  height: 100%;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
`;

function Inquiry() {
  return (
    <Container>
      <img src="/assets/image/PR-002.png" />
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingBottom: "30px",
        }}
      >
        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSdzYdGv-9NTKf2EllUgNy4ATbKi7z7LzSy-QJ7grj4oZkprLA/viewform"
          }
        >
          <OriginalButton
            margin={"0"}
            width={"580px"}
            background={color.blue}
            height={"60px"}
            size={"21px"}
            marginBottom={"60px"}
          >
            <a>작품 및 제작사 등록 문의</a>
          </OriginalButton>
        </Link>
      </div>
    </Container>
  );
}

export default Inquiry;
