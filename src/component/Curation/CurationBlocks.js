import styled from "styled-components";

// 등록되어 있는 큐레이션들이 보여지는 컴포넌트
const Category = () => {
  return (
    <Container>
      <Box>모든 작품</Box>
      <Box>요즘 가장 핫한 작품</Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 51px;
`;

const Box = styled.div`
  display: flex;
  flex: 0 1 auto;
  padding: 14px 23px;
  margin-right: 12px;
  margin-bottom: 9px;
  max-width: 300px;
  height: 48px;
  background-color: #f5f5f5;
  border-radius: 6px;
  letter-spacing: -0.5px;
  font-size: 16px;
  font-family: "NotoSansCJKkr-Medium";
  text-align: center;
  align-items: center;
`;

export default Category;
