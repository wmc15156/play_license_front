import styled from "styled-components";
import styles from "@styles/colors";
import { FC } from "react";
const Wrapper = styled.div<{ margin: string; color: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: ${(p) => p.margin};
  font-family: "NotoSansCJKkr-Regular";
  background-color: ${styles.white};
  height: 60px;
  cursor: pointer;
  font-size: 21px;
  line-height: 42px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  color: ${(p) => p.color};
`;

type Props = {
  margin: string;
  color?: string;
};

const ShadowBox: FC<Props> = ({ children, margin, color }) => {
  return (
    <Wrapper margin={margin} color={color}>
      {children}
    </Wrapper>
  );
};
export default ShadowBox;
