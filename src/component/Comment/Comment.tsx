import styled from "styled-components";
import { FC } from "react";
import styles from "@styles/colors";

const Wrapper = styled.p<{ size: string; margin: string; width: string;}>`
  display: flex;
  justify-content: center;
  font-family: "NotoSansCJKkr-Regular";
  width: 100%;
  line-height: 24px;
  max-width: ${p => p.width ? p.width : '580px'};
  margin-top: ${(p) => p.margin};
  font-size: ${(p) => p.size};
  & span {
    color: ${styles.pink};
    font-family: "NotoSansCJKkr-Bold";
  }
`;

type Props = {
  font: string;
  margin: string;
  width?: string;
};

const Comment: FC<Props> = ({ children, font, margin, width }) => {
  return (
    <Wrapper size={font} margin={margin} width={width}>
      {children}
    </Wrapper>
  );
};

export default Comment;
