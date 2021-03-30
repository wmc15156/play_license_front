import styled, { css } from "styled-components";
import color from "../../../styles/colors";

const Purchase_AnswerStatus = ({
  children,
  status,
  background,
  borderColor,
  fontColor,
  onClick,
}) => {
  return (
    <Box
      status={status}
      background={background}
      borderColor={borderColor}
      fontColor={fontColor}
      onClick={onClick ? onClick : null}
    >
      {typeof status === "string" ? status : children}
    </Box>
  );
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
  cursor: ${(props) => (props.onClick ? "pointer" : "none")};

  ${(props) => {
    if (
      typeof props.status === "string" &&
      (props.status.includes("관리자") || props.status.includes("제작사"))
    ) {
      return css`
        background-color: ${color.white};
        border: 1px solid ${color.black3};
        color: ${color.black3};
      `;
    } else if (
      typeof props.status === "string" &&
      props.status === "보완요청"
    ) {
      return css`
        background-color: ${color.yellow};
        border: none;
        color: ${color.white};
      `;
    } else if (
      typeof props.status === "string" &&
      props.status === "승인완료"
    ) {
      return css`
        background-color: ${color.blue};
        border: none;
        color: ${color.white};
      `;
    } else if (
      typeof props.status === "string" &&
      props.status === "철회완료"
    ) {
      return css`
        background-color: ${color.gray1};
        border: none;
        color: ${color.black3};
      `;
    } else {
      return css`
        background-color: ${(props) => props.background};
        color: ${(props) => props.fontColor};
        border: 1px solid ${(props) => props.borderColor};
      `;
    }
  }};
`;

export default Purchase_AnswerStatus;
