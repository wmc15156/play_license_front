import styled from "styled-components";
import { useEffect } from "react";

const HeartBtn = ({ text = "찜하기", status, currStatus, onClickHandler }) => {
  useEffect(() => {
    console.log("status???", status);
  }, [status]);
  return (
    <Container status={status} onClick={onClickHandler}>
      {!currStatus && (
        <>
          <img src="/assets/image/heart.png" />
          <span>{text}</span>
        </>
      )}
      {currStatus && (
        <>
          <img src="/assets/image/heart.png" />
          <span>{text} 중</span>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-width: 70px;
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
  align-items: center;

  color: ${(props) => {
    if (props.status) {
      return "#ff6f69";
    } else if (!props.status) {
      return "#000000";
    }
  }};

  opacity: ${(props) => {
    if (props.status) {
      return 1;
    } else if (!props.status) {
      return 0.4;
    }
  }};

  & > img {
    width: 24px;
    height: 22px;
    margin-right: 12px;
  }
`;

export default HeartBtn;
