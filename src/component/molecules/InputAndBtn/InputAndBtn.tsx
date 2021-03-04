import styled from "styled-components";
import NumberInput from "@src/component/BasicInput/NumberInput";
import React, { FC, memo, useState } from "react";
import OriginalButton from "@src/component/Button/OriginalButton";
import AuthTimer from "@src/component/Timer/AuthTimer";
import BasicInput from "@src/component/BasicInput/BasicInput";

const InputAndBtnWrapper = styled.div<{ marginTop: string }>`
  width: 100%;
  display: inline-flex;
  box-sizing: border-box;
  flex-direction: row-reverse;
  margin-top: ${(p) => p.marginTop};
  & > span {
    display: inline-flex;
  }
`;

type Props = {
  children: React.ReactNode;
  inputWidth: string;
  inputPlaceholder: string;
  btnFontSize: string;
  marginTop: string;
  btnBackground: boolean;
  onChange?: () => void;
  value?: string;
  timer?: boolean;
  onClick?: () => void;
  onBlur?: () => void;
  number?: boolean;
  bigBtn?: boolean;
};

const InputAndBtn: FC<Props> = ({
  children,
  inputWidth,
  inputPlaceholder,
  btnFontSize,
  marginTop,
  btnBackground,
  onChange,
  value,
  timer,
  onClick,
  number,
  onBlur,
  bigBtn,
}) => {
  const [initialTime, setInitialTime] = useState(180);
  return (
    <InputAndBtnWrapper marginTop={marginTop}>
      {number ? (
        <NumberInput
          width={inputWidth}
          placeHolder={inputPlaceholder}
          onChange={onChange}
          value={value}
        />
      ) : (
        <BasicInput
          width={inputWidth}
          placeholder={inputPlaceholder}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
      )}
      {timer && (
        <AuthTimer initialTime={initialTime} setInitialTime={setInitialTime} bigBtn={bigBtn}/>
      )}
      <OriginalButton
        width={"146px"}
        margin={"0px"}
        background={btnBackground}
        height={"60px"}
        size={btnFontSize}
        position={true}
        onClick={onClick}
      >
        {children}
      </OriginalButton>
    </InputAndBtnWrapper>
  );
};

export default memo(InputAndBtn);
