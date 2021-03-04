import styled from "styled-components";
import color from "../../../styles/colors";

const OrangeShortBtn = ({ text, onClickHandler }) => {
  return <Container onClick={onClickHandler}>{text}</Container>;
};
const Container = styled.div`
  width: 100%;

  height: 60px;
  border-radius: 8px;
  background-color: ${color.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.white};
  font-family: "NotoSansCJKkr-Bold";
  font-size: 21px;
  line-height: 18px;
`;
export default OrangeShortBtn;
