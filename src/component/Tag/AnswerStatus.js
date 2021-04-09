import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import color from "../../../styles/colors";

const AnswerStatus = ({ status, color }) => {
  const [check, setCheck] = useState(false);
  const [text, setText] = useState("답변요청");

  useEffect(() => setCheck(status), []);
  useEffect(() => (status ? setText("답변완료") : setText("답변요청")), []);

  return (
    <Container status={check} color={color}>
      {text}
    </Container>
  );
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
          background-color: ${(props) =>
            props.color ? props.color : color.orange};
          color: ${color.white};
        `
      : css`
          border: 1px solid ${color.black3};
          color: ${color.black3};
        `};
`;

export default AnswerStatus;
