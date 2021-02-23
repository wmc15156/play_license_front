import React, { FC, useState } from "react";
import styled from "styled-components";
import Label from "@src/component/Label/Laebel";
import FindEmailInput from "@src/component/Input/FindEmailInput";
import styles from "@styles/colors";
import AuthTimer from "@src/component/Timer/AuthTimer";
import { use } from "ast-types";

type InputBoxWrapper = {
  children?: React.ReactNode;
  paddingLeft: string;
  marginBottom: string;
  labelText: string;
  labelWidth: string;
  labelFont: string;
  labelFontSize: string;
  placeholder: string;
  inputWidth: string;
  inputHeight: string;
  onlyNumber?: boolean;
  buttonText?: string;
};

const InputWrapper = styled.div<{ paddingLeft: string; marginBottom: string }>`
  display: flex;
  width: 100%;
  padding-left: ${(p) => p.paddingLeft};
  align-items: center;
  margin-bottom: ${(p) => p.marginBottom};
  font-size: 16px;
`;

const Button = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 56px;
  background-color: ${styles.pink};
  border-radius: 4px;
  position: relative;
  right: 65px;
  cursor: pointer;
  color: ${styles.white};
  font-family: "NanumGothic";
`;

const InputBoxWrapper: FC<InputBoxWrapper> = ({
  children,
  paddingLeft,
  marginBottom,
  labelWidth,
  labelText,
  labelFont,
  labelFontSize,
  placeholder,
  inputHeight,
  inputWidth,
  onlyNumber,
  buttonText,
}) => {
  const [initialTime, setInitialTime] = useState(180);
  const [count, setCount] = useState(false);
  const [sendCode, setSendCode] = useState(false);
  const onClickHandler = (text) => () => {
    if (text === "인증") {
      console.log("인증");
      setSendCode(true);
    }
    if (text === "확인") {
      console.log("확인");
      setCount(true);
    }
  };
  return (
    <>
      <InputWrapper paddingLeft={paddingLeft} marginBottom={marginBottom}>
        <Label width={labelWidth} font={labelFont} size={labelFontSize}>
          {labelText}
        </Label>
        <FindEmailInput
          placeholder={placeholder}
          width={inputWidth}
          height={inputHeight}
          onlyNumber={onlyNumber}
        />
        {onlyNumber && (
          <div>
            <Button onClick={onClickHandler(buttonText)}>{buttonText}</Button>
          </div>
        )}

        {onlyNumber && buttonText === "확인" && count && (
          <AuthTimer
            initialTime={initialTime}
            setInitialTime={setInitialTime}
          />
        )}
      </InputWrapper>
      {buttonText === "확인" && <div>asdasdasdasdasd</div>}
    </>
  );
};

export default InputBoxWrapper;
