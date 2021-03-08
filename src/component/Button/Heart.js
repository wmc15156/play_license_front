import styled, { css } from "styled-components";
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
  return (
    <>
      {/* shadow는 boolean */}
      <HeartBtnBox
        onClick={onClickHandler}
        boxWidth={boxWidth}
        radius={radius}
        bgcolor={bgcolor}
        shadow={shadow}
      >
        {state && <HeartBtn heartWidth={heartWidth} />}
        {!state && <GrayHeartBtn heartWidth={heartWidth} />}
      </HeartBtnBox>
    </>
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

const StyleHeartImage = css`
  width: ${(props) => props.heartWidth};
  height: auto;
`;

const HeartBtn = styled.img.attrs({ src: heartImg })`
  ${StyleHeartImage};
`;

const GrayHeartBtn = styled.img.attrs({ src: heartImg })`
  ${StyleHeartImage};
  filter: grayscale(100%);
`;
export default Heart;
