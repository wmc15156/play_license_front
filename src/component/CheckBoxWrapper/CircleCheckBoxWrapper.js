import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import { memo } from "react";

const CircleCheckbox = ({ widthHeight, checked, onClick, children }) => {
  return (
    // <Container>
    <Circle widthHeight={widthHeight} onClick={onClick} checked={checked}>
      {children}
    </Circle>
    // </Container>
  );
};

const Circle = styled.span`
  display: inline-flex;
  border-radius: 50%;
  width: ${(props) => props.widthHeight};
  height: ${(props) => props.widthHeight};
  border: 3px solid ${color.black5};
  ${(props) =>
    props.checked &&
    css`
      border: none;
      background-color: ${color.orange};
    `}
  justify-content: center;
  align-items: center;
`;

export default memo(CircleCheckbox);
