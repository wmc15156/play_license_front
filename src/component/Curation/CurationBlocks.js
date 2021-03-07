import styled from "styled-components";
import color from "../../../styles/colors";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import { useEffect, useState } from "react";
import axios from "axios";

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
          color={current === cur}
        >
          {cur}
        </Box>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 1182px;
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
  background-color: ${(p) => (p.color ? `${color.orange}` : `${color.gray1}`)};
  border-radius: 6px;
  letter-spacing: -0.5px;
  font-size: 16px;
  font-family: "NotoSansCJKkr-Medium";
  text-align: center;
  align-items: center;
  cursor: pointer;
`;

export default Category;
