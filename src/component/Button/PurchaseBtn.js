import styled from "styled-components";

import { useRouter } from "next/router";
// performance/:id 구매하기버튼
const PurchaseBtn = ({ path, onClickHandler }) => {
  const router = useRouter();

  return (
    <Container onClick={onClickHandler}>
      <span>구매하기</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  background-color: #ff6f69;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
  font-family: "NotoSansCJKkr-Bold";
  line-height: 18px;
  font-size: 21px;
  color: #ffffff;
`;

export default PurchaseBtn;
