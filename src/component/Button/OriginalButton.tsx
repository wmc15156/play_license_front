import styled from "styled-components";
import styles from "@styles/colors";
import React, { FC, memo } from "react";

const Wrapper = styled.div<{
  width: string;
  margin: string;
  background: boolean;
  height: string;
  size: string;
}>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  background-color: ${(p) =>
    p.background ? `${styles.pink}` : `${styles.black3}`};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: ${styles.white};
  line-height: 18px;
  font-family: "NotoSansCJKkr-Bold";
  outline: 0;
  margin-top: ${(p) => p.margin};
  font-size: ${(p) => p.size};
  cursor: pointer;
`;

type Props = {
  children: React.ReactNode;
  width: string;
  margin: string;
  background: boolean;
  height: string;
  size: string;
};

const OriginalButton: FC<Props> = ({
  children,
  width,
  margin,
  background,
  height,
  size,
}) => {
  return (
    <Wrapper
      width={width}
      background={background}
      margin={margin}
      height={height}
      size={size}
    >
      {children}
    </Wrapper>
  );
};

export default memo(OriginalButton);
