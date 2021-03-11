import styled from "styled-components";
import styles from "@styles/colors";
import React, { FC } from "react";

const Wrapper = styled.div<{ margin: string }>`
  width: 100%;
  height: 156px;
  overflow-y: auto;
  background-color: ${styles.gray1};
  color: ${styles.black3};
  padding: 21px 22px 0 22px;
  margin-top: ${(p) => p.margin};
  font-family: "NotoSansCJKkr-Regular";
  border-radius: 8px;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

type Props = {
  children: React.ReactNode;
  margin: string;
};

const TextBox: FC<Props> = ({ children, margin }) => {
  return <Wrapper margin={margin}>{children}</Wrapper>;
};
export default TextBox;
