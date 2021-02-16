import styled from "styled-components";
import { useEffect } from "react";

const fontColor = {};

const HeartBtn = ({ text = "찜하기", status, currStatus, onClickHandler }) => {
  console.log("찜?", status, "찜하는중?", currStatus);
  useEffect(() => {
    if (status) {
      fontColor.color = "#ff6f69";
      fontColor.opacity = 1;
    }
    if (!status) {
      fontColor.color = "#000000";
      fontColor.opacity = 0.4;
    }

    // 찜 => 찜하기 글자색 o
    // 찜 x => 찜하기 회색
  }, [status]);

  return (
    <Container onClick={onClickHandler} style={fontColor}>
      {!currStatus && <span>{text}</span>}
      {currStatus && <span>{text} 중</span>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60px;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
  font-family: "NotoSansCJKkr-Bold";
  line-height: 18px;
  font-size: 21px;
  color: "#000000";
  opacity: 0.4;
`;

export default HeartBtn;
