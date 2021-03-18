import styled from "styled-components";
import color from "../../../styles/colors";
import { useEffect, memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// 등록되어 있는 큐레이션들이 보여지는 컴포넌트
const Category = ({ curationBlock, curation, setCuration }) => {
  const router = useRouter();

  useEffect(() => {
    // 홈-큐레이션->market접속시 필요
    if (router.query.curation) {
      setCuration(router.query.curation);
    } else {
      setCuration("모든작품");
    }
  }, [curation]);

  const buttonBackgroundColor = (title) => () => {
    setCuration(title);
  };

  return (
    <Container>
      {curationBlock.map((cur, idx) => (
        <Link
          href={{
            pathname: "/market",
            query: { curation: cur },
          }}
          key={idx}
        >
          <Box onClick={buttonBackgroundColor(cur)} styles={curation === cur}>
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
