import styled from "styled-components";
import color from "../../../styles/colors";
import { useState, memo } from "react";

// 등록되어 있는 큐레이션들이 보여지는 컴포넌트
const Category = ({ curation, getCurationInfo }) => {
  const [current, setCurrent] = useState("모든작품");

  const buttonBackgroundColor = (title) => () => {
    setCurrent(title);
    getCurationInfo(title);
  };

  return (
    <Container>
      {curation.map((cur, idx) => (
        <Box
          key={idx}
          onClick={buttonBackgroundColor(cur)}
          color={current === cur ? true : false}
        >
          {cur}
        </Box>
      ))}
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
  padding: 14px 22px;
  margin-right: 12px;
  margin-bottom: 12px;
  max-width: 300px;
  background-color: ${(p) => (p.color ? `${color.orange}` : `${color.gray1}`)};
  color: ${(p) => (p.color ? color.white : color.black1)};
  border-radius: 6px;
  letter-spacing: -0.5px;
  font-size: 16px;
  font-family: "NotoSansCJKkr-Medium";
  text-align: center;
  align-items: center;
  cursor: pointer;
`;

export default memo(Category);
