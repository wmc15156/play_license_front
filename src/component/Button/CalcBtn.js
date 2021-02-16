import styled from "styled-components";

// performance/:id 구매하기버튼
const CalcBtn = () => {
  return (
    <Container>
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
  border: 1px solid rgba(0, 0, 0, 0.5);
  text-align: center;
  justify-content: center;
  font-family: "NotoSansCJKkr-Medium";
  line-height: 18px;
  font-size: 21px;
  color: #000000;
  opacity: 0.4;
`;

export default CalcBtn;
