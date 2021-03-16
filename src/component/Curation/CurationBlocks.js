import styled from "styled-components";
import color from "../../../styles/colors";
import { useEffect, useState, memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// 등록되어 있는 큐레이션들이 보여지는 컴포넌트
const Category = ({ curation, getCurationInfo }) => {
  const router = useRouter();
  const [current, setCurrent] = useState("모든작품");

  useEffect(() => {
    if (router.query.curation) {
      setCurrent(router.query.curation);
    } else {
      setCurrent("모든작품");
    }
  }, [current]);

  const buttonBackgroundColor = (title) => () => {
    setCurrent(title);
    getCurationInfo(title);
  };

  return (
    <Container>
      {curation.map((cur, idx) => (
        <Link
          href={{
            pathname: "/market",
            query: { curation: cur },
          }}
        >
          <Box
            key={idx}
            onClick={buttonBackgroundColor(cur)}
            styles={current === cur}
          >
            {cur}
          </Box>
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 51px;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex: 0 1 auto;
  padding: 14px 22px;
  margin-right: 12px;
  margin-bottom: 12px;
  max-width: 300px;
  background-color: ${(p) => (p.styles ? `${color.orange}` : `${color.gray1}`)};
  color: ${(p) => (p.styles ? color.white : color.black1)};
  border-radius: 6px;
  letter-spacing: -0.5px;
  font-size: 16px;
  font-family: "NotoSansCJKkr-Medium";
  text-align: center;
  align-items: center;
  cursor: pointer;
`;

export default memo(Category);
