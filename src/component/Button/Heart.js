import styled from "styled-components";

const Heart = ({ state, onClickHandler }) => {
  return (
    <>
      {state && <Container onClick={onClickHandler} />}
      {!state && <RemoveContainer onClick={onClickHandler} />}
    </>
  );
};
const Container = styled.div`
  width: 100%;
  height: 38px;
  background-image: url(/assets/image/heart.png);
  background-size: 100%;
`;

const RemoveContainer = styled.div`
  width: 100%;
  height: 38px;
  background-image: url(/assets/image/heart.png);
  background-size: 100%;
  opacity: 0.3;
`;
export default Heart;
