import Link from "next/link";
import styled from "styled-components";

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
      <ListKo>
        <li>
          <a href="/" onClick={onCloseHandler}>
            홈
          </a>
        </li>
        <li>
          <a href="/market" onClick={onCloseHandler}>
            공연마켓
          </a>
        </li>
        <li>
          <a href="/about" onClick={onCloseHandler}>
            서비스 소개
          </a>
        </li>
        <li>
          <a href="/faq" onClick={onCloseHandler}>
            자주 묻는 질문
          </a>
        </li>
        <li>
          <a href="/notice" onClick={onCloseHandler}>
            공지사항
          </a>
        </li>
        <li>
          <div onClick={go}>작품등록 문의</div>
        </li>
      </ListKo>
      <ListEn>
        <li>
          <a href="/" onClick={onCloseHandler}>
            Home
          </a>
        </li>
        <li>
          <a href="/market" onClick={onCloseHandler}>
            Market
          </a>
        </li>
        <li>
          <a href="/about" onClick={onCloseHandler}>
            Service Introduction
          </a>
        </li>
        <li>
          <a href="/faq" onClick={onCloseHandler}>
            FAQ
          </a>
        </li>
        <li>
          <a href="/notice" onClick={onCloseHandler}>
            Notice
          </a>
        </li>
        <li>
          <div onClick={go}>Register your work</div>
        </li>
      </ListEn>
      <CloseBtn onClick={onCloseHandler}>
        <img src="/assets/image/icon_x.png" />
      </CloseBtn>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 90px;
`;

const ListKo = styled.div`
  list-style: none;
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

const ListEn = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;

  font-family: "Gotham Medium";
  font-size: 24px;
  opacity: 0.3;
  line-height: 36px;
  & > li {
    margin-bottom: 65px;
  }
`;

const CloseBtn = styled.div`
  margin-left: auto;
  & > img {
    width: 34px;
    height: 34px;
  }
`;

export default Menu;
