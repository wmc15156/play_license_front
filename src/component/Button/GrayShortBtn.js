import styled from "styled-components";
import color from "../../../styles/colors";

const GrayShortBtn = ({ text, size, height, onClickHandler, fontColor }) => {
  return (
    <Container
      size={size}
      height={height}
      fontColor={fontColor}
      onClick={onClickHandler}
    >
      {text}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "60px")};
  border-radius: 8px;
  background-color: ${color.gray1};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.fontColor};
  font-family: "NotoSansCJKkr-Bold";
  font-size: ${(props) => (props.size ? props.size : "21px")};
  line-height: 18px;
  cursor: pointer;
`;
export default GrayShortBtn;
