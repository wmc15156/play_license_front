import styled from "styled-components";
import color from "../../../styles/colors";
import { memo } from "react";

const InputBox = ({
  children,
  height,
  background,
  placeholder,
  onChange,
  value,
  fontSize,
  fontColor,
  readOnly,
  align,
}) => {
  return (
    <Container>
      <Input
        readOnly={readOnly}
        height={height}
        background={background}
        placeholder={placeholder}
        fontSize={fontSize}
        fontColor={fontColor}
        onChange={onChange}
        value={value}
        align={align}
      >
        {children}
      </Input>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input.attrs({
  placeholderTextColor: color.black4,
})`
  width: calc(100% - 39px);
  height: calc(${(props) => props.height} - 24px);
  background-color: ${(props) => props.background};
  border-radius: 8px;
  font-family: "NotoSansCJKkr-Regular";
  border: 1px solid ${color.black5};
  font-size: ${(props) => props.fontSize};
  line-height: 14px;
  padding: 12px 26px 12px 13px;
  color: ${(props) => (props.fontColor ? props.fontColor : color.black1)};
  text-align: ${(props) => (props.align ? props.align : "left")};

  &:focus {
    outline: none;
  }
`;

export default memo(InputBox);
