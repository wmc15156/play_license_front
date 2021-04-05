import React, { FC, memo } from "react";
import styled from "styled-components";

type WrapperProps = {
  children: React.ReactNode;
  width: string;
};

const Wrapper = styled.div<{ width: string }>`
  width: 100%;
  height:100vh;
  max-width: ${p => p.width};
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  flex-wrap: wrap;
  font-family: "NotoSansCJKkr-Medium";
  margin: 0 auto;
`;

const ContainerWrapper: FC<WrapperProps> = ({ children, width }) => {
  return <Wrapper width={width}>{children}</Wrapper>;
};
export default memo(ContainerWrapper);
