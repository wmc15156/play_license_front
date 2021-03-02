import styled from "styled-components";
import React, { FC, VFC } from "react";
import styles from "@styles/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;

const LineWrapper = styled.hr<{ background: boolean }>`
  width: 100px;
  border-radius: 100px;
  height: 3px;
  background: ${(p) => (p.background ? `${styles.yellow}` : `${styles.gray1}`)};
  border: none;
  margin: 0;
`;

type Props = {
  background: boolean;
};

const Line: VFC<Props> = ({ background }) => {
  console.log(background, "LINE");
  return (
    <Wrapper>
      <LineWrapper background={background} />
    </Wrapper>
  );
};
export default Line;
