import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  return (
    <Container>
      <Section1>
        <ProfileImageContainer>
          <img src="/assets/image/PL/logo.png" />
        </ProfileImageContainer>
        <ProfileName>상상마루</ProfileName>
        <Box>계정정보</Box>
      </Section1>
      <Section2>
        <List>
          <Link href="/provider/home">
            <Menu focus={router.pathname === "/provider/home"}>홈</Menu>
          </Link>

          <Link href="/provider/work">
            <Menu focus={router.pathname === "/provider/work"}>작품관리</Menu>
          </Link>

          <Link href="/provider/money">
            <Menu focus={router.pathname === "/provider/money"}>정산관리</Menu>
          </Link>

          <Link href="/provider/question">
            <Menu focus={router.pathname === "/provider/question"}>
              1:1 문의내역
            </Menu>
          </Link>
        </List>
      </Section2>
    </Container>
  );
};

const Container = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  background-color: ${color.blue_3};
  color: ${color.white};
  font-family: "NotoSansCJKkr-Regular";
`;

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 336px;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${color.white};
  margin-top: 50px;
  margin-bottom: 22px;

  & > img {
    width: 98px;
    height: auto;
  }
`;

const ProfileName = styled.div`
  font-size: 21px;
  line-height: 24px;
  margin-bottom: 12px;
  font-family: "NotoSansCJKkr-Bold";
`;

const Box = styled.div`
  border-radius: 4px;
  background-color: ${color.white};
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.blue_2};
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.5px;
  padding: 8px 8.14px;
`;

const Section2 = styled.div`
  width: 100%;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Menu = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  font-size: 18px;
  line-height: 18px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    font-family: "NotoSansCJKkr-Bold";
  }
  ${(props) =>
    props.focus &&
    css`
      background-color: rgba(255, 255, 255, 0.2);
      font-family: "NotoSansCJKkr-Bold";
    `}
`;
export default Navigation;
