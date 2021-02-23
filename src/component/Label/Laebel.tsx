import styled, { css } from "styled-components";
import React, { FC } from "react";

type LabelProps = {
  children: React.ReactNode;
  width: string;
  font: string;
  size: string;
};

const Wrapper = styled.div<{ width: string }>`
  width: ${(p) => p.width};
  margin-right: 15px;
`;

const LabelEle = styled.label<{ font: string; size: string }>`
  font: ${(p) => p.font};
  font-size: ${(p) => p.size};
`;

const Label: FC<LabelProps> = ({ children, width, font, size }) => {
  return (
    <Wrapper width={width}>
      <LabelEle font={font} size={size}>
        {children}
      </LabelEle>
    </Wrapper>
  );
};

export default Label;
