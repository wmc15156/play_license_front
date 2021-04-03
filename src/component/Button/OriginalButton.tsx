import styled from "styled-components";
import styles from "@styles/colors";
import React, { FC, memo } from "react";

const Wrapper = styled.div<{
  width: string;
  margin: string;
  background: boolean | string;
  height: string;
  size: string;
  position: boolean;
  marginBottom?: string;
  provider?: boolean;
  maxWidth?: string;
  fontColor?: string;
  marginRight?: string;
  borderStyle?: string;
}>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  max-width: ${(p) => (p.maxWidth ? p.maxWidth : null)};
  background-color: ${(
    p //
  ) =>
    typeof p.background === "boolean" && p.background && p.provider
      ? `${styles.blue_2}`
      : typeof p.background === "boolean" && p.background
      ? `${styles.orange}`
      : typeof p.background === "boolean" && p.provider
      ? `${styles.white}`
      : typeof p.background === "boolean" || p.background === ""
      ? `${styles.black3}`
      : `${p.background}`};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: ${(p) =>
    p.provider && !p.background
      ? `${styles.black3}`
      : p.fontColor
      ? p.fontColor
      : styles.white};
  line-height: 18px;
  font-family: "NotoSansCJKkr-Bold";
  outline: 0;
  margin-top: ${(p) => p.margin};
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : "0")};
  margin-right: ${(p) => (p.marginRight ? p.marginRight : null)};
  font-size: ${(p) => p.size};
  position: ${(p) => (p.position ? "absolute" : null)};
  cursor: pointer;
  z-index: 1;
  border: ${p=>p.borderStyle ? p.borderStyle:null}
`;

type Props = {
  children: React.ReactNode;
  width: string;
  margin: string;
  background: boolean | string;
  height: string;
  size: string;
  position?: boolean;
  onClick?: () => void;
  marginBottom?: string;
  provider?: boolean;
  maxWidth?: string;
  fontColor?: string;
  marginRight?: string;
  borderStyle?: string;
};

const OriginalButton: FC<Props> = ({
  children,
  width,
  margin,
  background,
  height,
  size,
  position,
  onClick,
  marginBottom,
  provider,
  maxWidth,
  fontColor,
  marginRight,
  borderStyle
}) => {
  console.log(typeof background, "back", provider);
  return (
    <Wrapper
      width={width}
      background={background}
      margin={margin}
      height={height}
      size={size}
      position={position}
      onClick={onClick}
      marginBottom={marginBottom}
      provider={provider}
      maxWidth={maxWidth}
      fontColor={fontColor}
      marginRight={marginRight}
      borderStyle={borderStyle}
    >
      {children}
    </Wrapper>
  );
};

export default memo(OriginalButton);
