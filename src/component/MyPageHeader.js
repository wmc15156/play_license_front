import styled from "styled-components";
import { useState } from "react";

const MyPageHeader = () => {
  const [selected, setSelected] = useState(true);

  const changeMenuHandler = () => {};
  return (
    <Container>
      <Mypage>마이페이지</Mypage>
      <List>
        <Item>작품구매문의</Item>

        <Item>찜한공연</Item>

        <Item>1:1 문의</Item>

        <Item>계정정보</Item>
      </List>
    </Container>
  );
};
const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 24px;
  line-height: 48px;
  color: #0d0d0c;
  margin-bottom: 16px;
`;
const Mypage = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  line-height: 36px;
  font-size: 36px;
  margin-bottom: 54px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;
const Item = styled.li`
  margin-right: 70px;
`;
export default MyPageHeader;
