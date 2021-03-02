import styled from "styled-components";
import { FC } from "react";
import styles from "@styles/colors";

const Wrapper = styled.p<{ size: string; margin: string }>`
  display: flex;
  justify-content: center;
  font-family: NotoSansCJKkr-Bold;
  width: 100%;
  line-height: 24px;
  max-width: 580px;
  margin-top: ${(p) => p.margin};
  font-size: ${(p) => p.size};
  & span {
    color: ${styles.pink};
  }
`;

type Props = {
  font: string;
  margin: string;
};

const Comment: FC<Props> = ({ children, font, margin }) => {
  return (
    <Wrapper size={font} margin={margin}>
      {children}
    </Wrapper>
  );
};

export default Comment;
