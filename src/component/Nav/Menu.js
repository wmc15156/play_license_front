import Link from "next/link";
import styled from "styled-components";
import color from "../../../styles/colors";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Menu = ({ onCloseHandler }) => {
  const [curr, setCurr] = useState();
  const [homeHover, setHomeHover] = useState(false);
  const [pmHover, setPmHover] = useState(false);
  const [siHover, setSiHover] = useState(false);
  const [faqHover, setFaqHover] = useState(false);
  const [noHover, setnoHover] = useState(false);
  const [plHover, setPlHover] = useState(false);

  const plHoverHandler = () => {
    setPlHover(true);
  };
  const plHoverOutHandler = () => {
    setPlHover(false);
  };
  const noticeHoverHandler = (id) => {
    setnoHover(true);
  };
  const noticeHoverOutHandler = (id) => {
    setnoHover(false);
  };
  const faqHoverHandler = () => {
    setFaqHover(true);
  };
  const faqHoverOutHandler = () => {
    setFaqHover(false);
  };
  const siHoverHandler = () => {
    setSiHover(true);
  };
  const siHoverOutHandler = () => {
    setSiHover(false);
  };
  const pmHoverHandler = () => {
    setPmHover(true);
  };
  const pmHoverOutHandler = () => {
    setPmHover(false);
  };
  const homeHoverHandler = () => {
    setHomeHover(true);
  };
  const homeHoverOutHandler = () => {
    setHomeHover(false);
  };

  return (
    <Container>
      <List>
        <li
          onClick={onCloseHandler}
          onMouseEnter={homeHoverHandler}
          onMouseLeave={homeHoverOutHandler}
        >
          <Link href="/">
            <Item>
              <Ko color={homeHover ? color.orange : color.black1}>홈</Ko>
              <En color={homeHover ? color.orange : color.black4}>Home</En>
            </Item>
          </Link>
        </li>
        <li
          onClick={onCloseHandler}
          onMouseEnter={pmHoverHandler}
          onMouseLeave={pmHoverOutHandler}
        >
          <Link href="/market">
            <Item>
              <Ko color={pmHover ? color.orange : color.black1}>공연마켓</Ko>
              <En color={pmHover ? color.orange : color.black4}>Market</En>
            </Item>
          </Link>
        </li>
        <li
          onClick={onCloseHandler}
          onMouseEnter={siHoverHandler}
          onMouseLeave={siHoverOutHandler}
        >
          <Link href="/about">
            <Item>
              <Ko color={siHover ? color.orange : color.black1}>서비스 소개</Ko>
              <En color={siHover ? color.orange : color.black4}>
                Service Introduction
              </En>
            </Item>
          </Link>
        </li>
        <li
          onClick={onCloseHandler}
          onMouseEnter={faqHoverHandler}
          onMouseLeave={faqHoverOutHandler}
        >
          <Link href="/faq">
            <Item>
              <Ko color={faqHover ? color.orange : color.black1}>
                자주 묻는 질문
              </Ko>
              <En color={faqHover ? color.orange : color.black4}>FAQ</En>
            </Item>
          </Link>
        </li>
        <li
          onClick={onCloseHandler}
          onMouseEnter={noticeHoverHandler}
          onMouseLeave={noticeHoverOutHandler}
        >
          <Link href="/notice">
            <Item>
              <Ko color={noHover ? color.orange : color.black1}>공지사항</Ko>
              <En color={noHover ? color.orange : color.black4}>Notice</En>
            </Item>
          </Link>
        </li>
        <li>
          <Link href="/provider">
            <a
              target="_blank"
              onMouseEnter={plHoverHandler}
              onMouseLeave={plHoverOutHandler}
            >
              <Item>
                <Ko color={plHover ? color.orange : color.black1}>
                  PL 제작사센터
                </Ko>
                <En color={plHover ? color.orange : color.black4}>
                  PL provider center
                </En>
              </Item>
            </a>
          </Link>
        </li>
      </List>
      <CloseBtn onClick={onCloseHandler}>
        <IoClose size="45px" color={color.black3} />
      </CloseBtn>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - 57px);
  display: flex;
  background-color: ${color.white};
  margin: 0 auto;
  margin-top: 64px;
`;

const List = styled.div`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-right: 80px;
  font-family: "NotoSansCJKkr-Medium";
  line-height: 24px;
  font-size: 24px;
  & > li {
    margin-bottom: 60px;
  }
  & > li:first-child {
    margin-top: 11px;
  }
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
`;

const Ko = styled.div`
  display: flex;
  width: 50%;
  color: ${(props) => props.color};
`;

const En = styled.div`
  display: flex;
  width: 50%;
  margin-left: 2%;
  color: ${(props) => props.color};
`;

const CloseBtn = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

export default Menu;
