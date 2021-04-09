import styled from "styled-components";
import React, { FC, VFC } from "react";
import styles from "@styles/colors";

const Wrapper = styled.div<{ height?: string }>`
  display: flex;
  align-items: center;
  height: ${(p) => (p.height ? p.height : "70px")};
`;

const LineWrapper = styled.hr<{
  background: boolean;
  width: string;
  marginTop: string;
  height?: string;
  position?: boolean;
}>`
  width: ${(p) => p.width};
  border-radius: 100px;
  height: ${(p) => (p.height ? p.height : "3px")};
  background: ${(p) =>
    p.background ? `${styles.yellow}` : `${styles.black5}`};
  border: none;
  margin: 0;
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)};
  position: ${(p) => (p.position ? "absolute" : null)};
  right: 0;
`;

type Props = {
  background: boolean;
  width: string;
  marginTop?: string;
  height?: string;
  wrapperHeight?: string;
  position?: boolean;
};

const Line: VFC<Props> = ({
  background,
  width,
  marginTop,
  height,
  wrapperHeight,
  position,
}) => {
  return (
    <Wrapper height={wrapperHeight}>
      <LineWrapper
        background={background}
        width={width}
        marginTop={marginTop}
        height={height}
        position={position}
      />
    </Wrapper>
  );
};
export default Line;
