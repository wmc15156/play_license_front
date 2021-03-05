import styled from "styled-components";
import color from "../../../styles/colors";

const GrayShortBtn = ({ text, onClickHandler }) => {
  return <Container onClick={onClickHandler}>{text}</Container>;
};
const Container = styled.div`
  width: 100%;
  /* padding: 0 10px; */
  height: 60px;
  border-radius: 8px;
  background-color: ${color.gray1};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.black1};
  opacity: 0.4;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 21px;
  line-height: 18px;
`;
export default GrayShortBtn;
