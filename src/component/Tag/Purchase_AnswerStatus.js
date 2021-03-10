import styled, { css } from "styled-components";
import color from "../../../styles/colors";

const Purchase_AnswerStatus = ({ status }) => {
  return <Box status={status}>{status}</Box>;
};

const Box = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.5px;
  border-radius: 4px;

  ${(props) => {
    if (props.status === "관리자검토중" || props.status === "제작사검토중") {
      return css`
        background-color: ${color.white};
        border: 1px solid ${color.black3};
        color: ${color.black3};
      `;
    } else if (props.status === "보완요청") {
      return css`
        background-color: ${color.yellow};
        border: none;
        color: ${color.white};
      `;
    } else if (props.status === "승인완료") {
      return css`
        background-color: ${color.blue};
        border: none;
        color: ${color.white};
      `;
    } else if (props.status === "철회완료") {
      return css`
        background-color: ${color.gray1};
        border: none;
        color: ${color.black3};
      `;
    }
  }}
`;

export default Purchase_AnswerStatus;
