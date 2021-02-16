import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const Menu = (props) => {
  const go = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdzYdGv-9NTKf2EllUgNy4ATbKi7z7LzSy-QJ7grj4oZkprLA/viewform",
      "_blank"
    );
  };

  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e, "eee");
    router.push(e.target.attributes.href.value);
  };

  return (
    <Container>
      <ListKo>
        <li>
          <Link href="/">
            <a>홈</a>
          </Link>
        </li>
        <li>
          <a href="/market" onClick={handleClick}>
            {/* <a
            onClick={(e) => {
              e.preventDefault();
              router.push("/market");
            }}
          > */}
            공연마켓
          </a>
        </li>
        <li>
          <a href="/about" onClick={handleClick}>
            서비스 소개
          </a>
        </li>
        <li>
          <a href="/faq">자주 묻는 질문</a>
        </li>
        <li>
          <a href="/notice">공지사항</a>
        </li>
        <li>
          <div onClick={go}>작품등록 문의</div>
        </li>
      </ListKo>
      <ListEn>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/market">Market</Link>
        </li>
        <li>
          <Link href="/about">Service Introduction</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/notice">Notice</Link>
        </li>
        <li>
          <div onClick={go}>Register your work</div>
        </li>
      </ListEn>
      <CloseBtn onClick={props.close}>X icon</CloseBtn>
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
  width: 34px;
  height: 34px;
  border: 4px solid #000000;
`;

export default Menu;
