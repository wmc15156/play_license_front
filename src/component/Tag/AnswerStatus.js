import styled, { css } from "styled-components";
import { useEffect, useState } from "react";

const AnswerStatus = ({ status }) => {
  const [check, setCheck] = useState(false);
  const [text, setText] = useState("답변요청");

  useEffect(() => setCheck(status), []);
  useEffect(() => (status ? setText("답변완료") : setText("답변요청")), []);

  return <Container status={check}>{text}</Container>;
};

const Container = styled.div`
  width: 61px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.5px;

  ${(props) =>
    props.status
      ? css`
          background-color: #ff6f69;
          color: #ffffff;
        `
      : css`
          border: 1px solid #0d0d0c;
          opacity: 0.4;
        `};
`;

export default AnswerStatus;
