import Link from "next/link";
import styled from "styled-components";
import color from "../../styles/colors";

const Menu = ({ onCloseHandler }) => {
  const go = () => {
    onCloseHandler();
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdzYdGv-9NTKf2EllUgNy4ATbKi7z7LzSy-QJ7grj4oZkprLA/viewform",
      "_blank"
    );
  };

  return (
    <Container>
      <List>
        <li onClick={onCloseHandler}>
          <Link href="/">
            <Item>
              <Ko>홈</Ko>
              <En>Home</En>
            </Item>
          </Link>
        </li>
        <li onClick={onCloseHandler}>
          <Link href="/market">
            <Item>
              <Ko>공연마켓</Ko>
              <En>Market</En>
            </Item>
          </Link>
        </li>
        <li onClick={onCloseHandler}>
          <Link href="/about">
            <Item>
              <Ko>서비스 소개</Ko>
              <En>Service Introduction</En>
            </Item>
          </Link>
        </li>
        <li onClick={onCloseHandler}>
          <Link href="/faq">
            <Item>
              <Ko>자주 묻는 질문</Ko>
              <En>FAQ</En>
            </Item>
          </Link>
        </li>
        <li onClick={onCloseHandler}>
          <Link href="/notice">
            <Item>
              <Ko>공지사항</Ko>
              <En>Notice</En>
            </Item>
          </Link>
        </li>
        <li>
          <div onClick={go}>
            <Item>
              <Ko>PL 제작사센터</Ko>
              <En>PL provider center</En>
            </Item>
          </div>
        </li>
      </List>
      <CloseBtn onClick={onCloseHandler}>
        <img src="/assets/image/icon_x.png" />
      </CloseBtn>
    </Container>
  );
};

const Container = styled.div`
  max-width: 924px;
  /* padding: 0 1rem; */
  width: 100%;
  display: flex;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 90px;
`;

const List = styled.div`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;

  margin-right: 80px;
  font-family: "NotoSansCJKkr-Medium";
  line-height: 36px;
  font-size: 36px;
  & > li {
    margin-bottom: 65px;
  }
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  &:hover {
    color: ${color.orange};
  }
`;

const Ko = styled.div`
  display: flex;
  width: 50%;
`;

const En = styled.div`
  display: flex;
  width: 50%;
  margin-left: 2%;
`;

const CloseBtn = styled.div`
  margin-left: auto;
  & > img {
    width: 34px;
    height: 34px;
  }
`;

export default Menu;
