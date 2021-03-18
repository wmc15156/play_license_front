import styled from "styled-components";
import color from "../../../styles/colors";
import Link from "next/link";

const PLlogoBar = () => {
  return (
    <Container>
      <img src="/assets/image/logo.png" alt="logo" />
      <Name>
        PLAY LICENSE <span>제작자센터</span>
      </Name>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 36px;
  & > img {
    width: 22px;
    height: 15px;
    border-radius: 2px;
    margin-right: 15px;
  }
`;

const Name = styled.div`
  font-family: "FreightSansBlackSC";
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.86px;
  & > span {
    letter-spacing: 0.86px;
    margin-left: 4px;
    display: inline-block;
    font-family: "NotoSansCJKkr-Bold";
    font-size: 10px;
    line-height: 12px;
  }
`;

export default PLlogoBar;
