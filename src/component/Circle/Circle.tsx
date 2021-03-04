import React, { FC } from "react";
import styled from "styled-components";
import styles from "@styles/colors";

const CircleWrapper = styled.div<{ background: boolean }>`
  display: inline-flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(p) =>
    p.background ? `${styles.yellow}` : `${styles.gray1}`};
  font-family: "NotoSansCJKkr-Bold";
  color: ${(p) => (p.background ? `${styles.white}` : "#939393")};
  font-size: 28px;
`;

type Props = {
  children: React.ReactNode;
  background: boolean;
};

const Circle: FC<Props> = ({ children, background }) => {
  return <CircleWrapper background={background}>{children}</CircleWrapper>;
};

export default Circle;
