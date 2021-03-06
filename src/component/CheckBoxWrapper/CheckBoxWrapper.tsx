import styled from "styled-components";
import { FC, memo, VFC } from "react";
import React from "react";
import styles from "@styles/colors";

const Wrapper = styled.span<{
  width: string;
  height: string;
  background: string | boolean;
  borderRadius?: string;
}>`
  display: inline-flex;
  border-radius: ${(p) => (p.borderRadius ? p.borderRadius : "6px")};
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  background-color: ${(p) =>
    p.background ? `${p.background}` : `${styles.gray1}`};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 17.5px;
`;

type Props = {
  children: React.ReactNode;
  width: string;
  height: string;
  background?: string;
  onChange?: () => void;
  value?: string | boolean;
  borderRadius?: string;
};

const CheckBoxWrapper: FC<Props> = ({
  children,
  width,
  height,
  onChange,
  value,
  borderRadius,
}) => {
  return (
    <Wrapper
      width={width}
      height={height}
      background={value}
      onClick={onChange}
      borderRadius={borderRadius}
    >
      {children}
    </Wrapper>
  );
};

export default memo(CheckBoxWrapper);
