import styled from "styled-components";
import React, { FC } from "react";
import InputBox from "@src/component/BasicInput/BasicInput";
import NumberInput from "@src/component/BasicInput/NumberInput";
import colors from "@styles/colors";

export const Wrapper = styled.div<{ margin: string; justify?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${p => p.justify ? 'center' : null};
  margin-top: ${(p) => p.margin};
`;

export const SpanWrapper = styled.span<{
  width: string;
  size: string;
  color?: string;
  textMargin: string;
}>`
  display: flex;
  align-items: center;
  font-size: ${(p) => p.size};
  font-family: "NotoSansCJKkr-Bold";
  color: ${(p) => p.color ? p.color : `${colors.black1}`};
  width: ${(p) => p.width};
  margin-right: ${(p) => p.textMargin};
`;

type Props = {
  children: React.ReactNode;
  textFontSize: string;
  textWidth: string;
  textColor: string;
  textMargin: string;
  inputWidth: string;
  placeholder: string;
  onChange: () => void;
  value: string;
  wrapperMargin: string;
  number: boolean;
  onBlur?: () => void;
  inputHeight?: string;
  inputFontSize?: string;
  whiteType?: boolean;
  justify?: boolean;
};

const TextAndInput: FC<Props> = ({
  children,
  textFontSize,
  textWidth,
  textColor,
  textMargin,
  inputWidth,
  placeholder,
  onChange,
  value,
  wrapperMargin,
  number,
  onBlur,
  inputHeight,
  inputFontSize,
  whiteType,
  justify,
}) => {
  const checkPw = children === "비밀번호";
  return (
    <Wrapper margin={wrapperMargin} justify={justify}>
      <SpanWrapper
        width={textWidth}
        size={textFontSize}
        color={textColor}
        textMargin={textMargin}
      >
        {children}
      </SpanWrapper>
      {number ? (
        <NumberInput
          width={inputWidth}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      ) : (
        <InputBox
          width={inputWidth}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          checkPw={checkPw}
          onBlur={onBlur}
          inputHeight={inputHeight}
          fontSize={inputFontSize}
          whiteType={whiteType}
        />
      )}
    </Wrapper>
  );
};

export default TextAndInput;
