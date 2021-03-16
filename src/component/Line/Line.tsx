import styled from "styled-components";
import React, { FC, VFC } from "react";
import styles from "@styles/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;

const LineWrapper = styled.hr<{
  background: boolean;
  width: string;
  marginTop: string;
}>`
  width: ${(p) => p.width};
  border-radius: 100px;
  height: 3px;
  background: ${(p) => (p.background ? `${styles.yellow}` : `${styles.gray1}`)};
  border: none;
  margin: 0;
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)};
`;

type Props = {
  background: boolean;
  width: string;
  marginTop?: string;
};

const Line: VFC<Props> = ({ background, width, marginTop }) => {
  return (
    <Wrapper>
      <LineWrapper
        background={background}
        width={width}
        marginTop={marginTop}
      />
    </Wrapper>
  );
};
export default Line;
