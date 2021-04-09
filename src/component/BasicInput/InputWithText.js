import styled from "styled-components";
import color from "../../../styles/colors";
import { memo } from "react";

const InputWithText = ({
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
  text,
}) => {
  return (
    <InputWrapper>
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
        text={text}
      >
        {children}
      </Input>
      {text && <Text>{text}</Text>}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input.attrs({
  placeholderTextColor: color.black4,
})`
  width: calc(
    100% -
      ${(props) =>
        props.text
          ? props.text.length > 1
            ? 13 * (props.text.length + 2)
            : 39
          : 26}px
  );
  height: calc(${(props) => props.height} - 24px);
  background-color: ${(props) => props.background};
  border-radius: 8px;
  font-family: "NotoSansCJKkr-Regular";
  border: 1px solid ${color.black5};
  font-size: ${(props) => props.fontSize};
  line-height: 14px;
  padding: ${(props) =>
    props.text
      ? `12px ${13 * (props.text.length + 1)}px 12px 13px`
      : `12px 13px`};
  color: ${(props) => (props.fontColor ? props.fontColor : color.black1)};
  text-align: ${(props) => (props.align ? props.align : "left")};

  &:focus {
    outline: none;
  }
`;

const Text = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  font-size: 12px;
  line-height: 15px;
`;
export default memo(InputWithText);
