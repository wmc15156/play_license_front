import styled from "styled-components";
import React, { FC } from "react";
import Circle from "@src/component/Circle/Circle";
import Line from "@src/component/Line/Line";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;

type Props = {
  children?: React.ReactNode;
  process: number;
};

const ProcessCircle: FC<Props> = ({ children, process }) => {
  // 1 background: false
  const checkBackground = (num) => {
    return process >= num;
  };

  return (
    <Wrapper>
      <Circle background={checkBackground(1)}>1</Circle>
      <Line background={checkBackground(2)} />
      <Circle background={checkBackground(2)}>2</Circle>
      <Line background={checkBackground(3)} />
      <Circle background={checkBackground(3)}>3</Circle>
      <Line background={checkBackground(4)} />
      <Circle background={checkBackground(4)}>4</Circle>
    </Wrapper>
  );
};
export default ProcessCircle;
