import styled from "styled-components";
import color from "../../../styles/colors";
import { memo } from "react";

const TextArea = ({
  readOnly,
  children,
  height,
  background,
  placeholder,
  fontSize,
  fontColor,
  textAlign,
  padding,
  onChange,
  value,
  borderStyle,
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
        textAlign={textAlign}
        padding={padding}
        onChange={onChange}
        value={value}
        borderStyle={borderStyle}
      >
        {children}
      </Input>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
`;

const Input = styled.textarea.attrs({
  placeholderTextColor: color.black4,
})`
  resize: none;
  width: calc(
    100% -
      ${(props) =>
        Number(
          props.padding
            .split(" ")[1]
            .replace(props.padding.split(" ")[1].slice(-2), "")
        ) * 2}px
  );
  height: calc(
    ${(props) => props.height} -
      ${(props) =>
        Number(
          props.padding
            .split(" ")[0]
            .replace(props.padding.split(" ")[0].slice(-2), "")
        ) * 2}px
  );
  background-color: ${(props) => props.background};
  border-radius: 8px;
  font-family: "NotoSansCJKkr-Regular";
  /* border: ; */
  font-size: ${(props) => props.fontSize};
  line-height: 14px;
  padding: ${(props) => props.padding};
  border: ${(props) => props.borderStyle};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "start")};
  color: ${(props) => (props.fontColor ? props.fontColor : color.black1)};

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${color.gray1};
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 16px;
    --webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: ${color.black4};
  }
`;
export default memo(TextArea);
