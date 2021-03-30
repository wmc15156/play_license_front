import styled, { css } from "styled-components";
import { memo, useState, useEffect } from "react";
import heartImg from "../../../public/assets/image/heart.png";

const Heart = ({
  state,
  onClickHandler,
  boxWidth,
  heartWidth,
  radius,
  bgcolor,
  shadow,
}) => {
  const [status, setStatus] = useState(state);

  useEffect(() => setStatus(state), [status]);

  return (
    <HeartBtnBox
      onClick={onClickHandler}
      boxWidth={boxWidth}
      radius={radius}
      bgcolor={bgcolor}
      shadow={shadow}
    >
      <HeartBtn state={state} heartWidth={heartWidth} />
    </HeartBtnBox>
  );
};

const HeartBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.boxWidth};
  height: ${(props) => props.boxWidth};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.bgcolor};
  box-shadow: ${(props) =>
    props.shadow ? "4px 4px 10px rgba(0, 0, 0, 0.1)" : "none"};
`;

const HeartBtn = styled.img.attrs({ src: heartImg })`
  width: ${(props) => props.heartWidth};
  height: auto;
  ${(props) =>
    !props.state &&
    css`
      filter: grayscale(100%);
    `}
`;

export default memo(Heart);
