import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import color from "../../../styles/colors";

const PL_DataStatus = ({ status, onClick }) => {
  // adminCheck="보완요청" => 업로드하기
  // adminCheck="승인완료" => 자료확인
  const [text, setText] = useState("");

  useEffect(
    () =>
      status === "승인완료"
        ? setText("자료확인")
        : status === "보완요청"
        ? setText("업로드하기")
        : setText(""),
    []
  );

  return (
    <Container status={status} onClick={onClick}>
      {text}
    </Container>
  );
};

const Container = styled.div`
  width: 79px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.5px;

  ${(props) => {
    if (props.status.includes("관리자")) {
      return css`
        display: none;
      `;
    } else if (props.status === "보완요청") {
      return css`
        background-color: ${color.orange};
        color: ${color.white};
        cursor: pointer;
      `;
    } else if (props.status === "승인완료") {
      return css`
        background-color: transparent;
        border: 1px solid ${color.orange};
        color: ${color.orange};
        cursor: pointer;
      `;
    }
  }}
`;

export default PL_DataStatus;
