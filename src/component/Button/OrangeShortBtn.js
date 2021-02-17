import styled from "styled-components";

const OrangeShortBtn = ({ text, onClickHandler }) => {
  return <Container onClick={onClickHandler}>{text}</Container>;
};
const Container = styled.div`
  width: 100%;

  height: 60px;
  border-radius: 8px;
  background-color: #ff6f69;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 21px;
  line-height: 18px;
`;
export default OrangeShortBtn;
