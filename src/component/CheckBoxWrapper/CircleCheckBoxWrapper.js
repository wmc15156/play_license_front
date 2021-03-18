import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import { memo } from "react";

const CircleCheckbox = ({
  widthHeight,
  checked,
  onClick,
  children,
  cursor,
}) => {
  return (
    <Circle
      widthHeight={widthHeight}
      onClick={onClick}
      checked={checked}
      cursor={cursor}
    >
      {children}
    </Circle>
  );
};

const Circle = styled.span`
  display: inline-flex;
  border-radius: 50%;
  width: ${(props) => props.widthHeight} -3px;
  height: ${(props) => props.widthHeight} -3px;
  border: 3px solid ${color.black5};
  ${(props) =>
    props.checked &&
    css`
      border: none;
      background-color: ${color.orange};
      width: ${(props) => props.widthHeight};
      height: ${(props) => props.widthHeight};
    `}
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.cursor ? "pointer" : "default")};
`;
export default memo(CircleCheckbox);
