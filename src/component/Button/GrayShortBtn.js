import styled from "styled-components";

const GrayShortBtn = ({ text, onClickHandler }) => {
  return <Container onClick={onClickHandler}>{text}</Container>;
};
const Container = styled.div`
  width: 100%;
  /* padding: 0 10px; */
  height: 60px;
  border-radius: 8px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  opacity: 0.4;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 21px;
  line-height: 18px;
`;
export default GrayShortBtn;
