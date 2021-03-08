import styled from "styled-components";
import color from "../../../styles/colors";

const CalcBtn = ({ onClickHandler }) => {
  return (
    <Container onClick={onClickHandler}>
      <span>가견적 계산하기</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  border-radius: 8px;
  border: 1px solid ${color.black5};
  align-items: center;
  justify-content: center;
  font-family: "NotoSansCJKkr-Medium";
  line-height: 21px;
  font-size: 21px;
  color: ${color.black3};
  & > span {
    padding: 0 0.5rem;
  }
`;

export default CalcBtn;
