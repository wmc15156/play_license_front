import styled from "styled-components";
import color from "../../../styles/colors";

const GrayShortBtn = ({ text, onClickHandler, fontColor }) => {
  return <Container onClick={onClickHandler}>{text}</Container>;
};
const Container = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  background-color: ${color.gray1};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.fontColor};
  font-family: "NotoSansCJKkr-Bold";
  font-size: 21px;
  line-height: 18px;
`;
export default GrayShortBtn;
