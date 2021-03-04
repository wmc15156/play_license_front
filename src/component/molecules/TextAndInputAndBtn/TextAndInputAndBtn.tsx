import styled from "styled-components";
import React, { FC, memo } from "react";
import InputAndBtn from "@src/component/molecules/InputAndBtn/InputAndBtn";

const Wrapper = styled.div<{ margin: string }>`
  width: 100%;
  display: flex;
  margin-top: ${(p) => p.margin};
`;

const SpanWrapper = styled.span<{
  width: string;
  size: string;
  color: string;
  textMargin: string;
}>`
  display: inline-flex;
  align-items: center;
  font-size: ${(p) => p.size};
  font-family: "NotoSansCJKkr-Bold";
  color: ${(p) => p.color};
  width: ${(p) => p.width};
  margin-right: ${(p) => p.textMargin};
`;

type Props = {
  children: React.ReactNode;
  text: string;
  textFontSize: string;
  textWidth: string;
  textColor: string;
  textMargin: string;
  inputWidth: string;
  placeholder: string;
  onChange: () => void;
  value: string;
  wrapperMargin: string;
  btnFontSize;
  onClick: () => void;
  onBlur?: () => void;
  number?: boolean;
  bigBtn?: boolean;
};

const TextAndInputAndBtn: FC<Props> = ({
  children,
  textFontSize,
  textWidth,
  textColor,
  textMargin,
  inputWidth,
  placeholder,
  onChange,
  value,
  text,
  wrapperMargin,
  btnFontSize,
  onClick,
  number,
  onBlur,
  bigBtn = false,
}) => {
  console.log(bigBtn, "2323");
  return (
    <Wrapper margin={wrapperMargin}>
      <SpanWrapper
        width={textWidth}
        size={textFontSize}
        textMargin={textMargin}
        color={textColor}
      >
        {text}
      </SpanWrapper>
      <InputAndBtn
        inputWidth={inputWidth}
        inputPlaceholder={placeholder}
        btnFontSize={btnFontSize}
        marginTop={"0px"}
        btnBackground={value.length > 0}
        onChange={onChange}
        value={value}
        onClick={onClick}
        onBlur={onBlur}
        number={number}
        timer={bigBtn}
        bigBtn={bigBtn}
      >
        {children}
      </InputAndBtn>
    </Wrapper>
  );
};

export default memo(TextAndInputAndBtn);
