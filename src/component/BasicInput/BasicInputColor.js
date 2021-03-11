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
}) => {
  return (
    <Container>
      <Input
        height={height}
        background={background}
        placeholder={placeholder}
        fontSize={fontSize}
        onChange={onChange}
        value={value}
      >
        {children}
      </Input>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: ${(props) => props.height};
`;

const Input = styled.input.attrs({
  placeholderTextColor: color.black4,
})`
  width: calc(100% - 13px);
  background-color: ${(props) => props.background};
  border-radius: 8px;
  font-family: "NotoSansCJKkr-Regular";
  border: 1px solid ${color.black5};
  font-size: ${(props) => props.fontSize};
  padding: 13px 0 13px 13px;

  &:focus {
    outline: none;
  }
`;

export default memo(InputBox);
