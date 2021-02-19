import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Menu from "../component/Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const onCloseHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <Container>
          <Logo>
            <Link href="/">
              <a>
                <Img src="/assets/image/logo.png" alt="" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <LogoText>
                  PLAY
                  <br />
                  LICENSE
                </LogoText>
              </a>
            </Link>
          </Logo>
          <List>
            <ListItem>
              <Link href="/mypage">
                <a>
                  <img src="/assets/image/icon_mypage.png" />

                  <Text>MYPAGE</Text>
                </a>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="/search">
                <a>
                  <img src="/assets/image/icon_search.png" />

                  <Text>SEARCH</Text>
                </a>
              </Link>
            </ListItem>
            <ListItem onClick={onCloseHandler}>
              <img src="/assets/image/icon_hamburger.png" />
              <Text>MENU</Text>
            </ListItem>
          </List>
        </Container>
      )}
      {isOpen && (
        <OpenContainer>
          <Container2>
            <Logo>
              <Link href="/">
                <a>
                  <Img src="/assets/image/logo.png" alt="" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <LogoText>
                    PLAY
                    <br />
                    LICENSE
                  </LogoText>
                </a>
              </Link>
            </Logo>
            <List>
              <ListItem>
                <Link href="/mypage">
                  <a>
                    <img src="/assets/image/icon_mypage.png" />
                    <Text>MYPAGE</Text>
                  </a>
                </Link>
              </ListItem>

              <ListItem>
                <Link href="/search">
                  <a>
                    <img src="/assets/image/icon_search.png" />

                    <Text>SEARCH</Text>
                  </a>
                </Link>
              </ListItem>
              <ClickedMenu onClick={onCloseHandler}>
                <img src="/assets/image/icon_hamburger.png" />
                <Text>MENU</Text>
              </ClickedMenu>
            </List>
          </Container2>
          <Menu onCloseHandler={onCloseHandler} />
        </OpenContainer>
      )}
    </>
  );
};
const A = styled.a`
  width: 100%;
  height: 100%;
  display: block;
`;

const OpenContainer = styled.div`
  max-width: 924px;
  display: flex;
  flex-direction: column;
  margin: 48px auto;
  padding: 0 1rem;
  background-color: #ffffff;
`;

const Container2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 924px;
  display: flex;
  margin: 48px auto;
  padding: 0 1rem;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: auto;
`;
const Img = styled.img`
  width: 91px;
  height: 58px;
  display: block;
  margin-right: 20px;
`;

const LogoText = styled.div`
  font-family: "FreightSansBlackSC";
  font-size: 24px;
  letter-spacing: 0.86px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  margin-left: auto;
  width: 530px;
`;

const ListItem = styled.li`
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  position: relative;
  margin-right: 2%;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    font-family: "Gotham Medium";
    font-size: 14px;
    background-color: #ff6f69;
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
  & > a {
    display: flex;
    align-items: center;
  }

  & > a > img {
    position: absolute;
    left: 26px;
    width: 24px;
    height: 24px;
  }
  & > img {
    position: absolute;
    left: 26px;
    width: 24px;
    height: 24px;
  }
`;

const ClickedMenu = styled.li`
  cursor: pointer;
  font-family: "Gotham Medium";
  font-size: 14px;
  color: #ffffff;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  position: relative;
  margin-right: 2%;
  background-color: #ff6f69;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    font-family: "Gotham Medium";
    font-size: 14px;
    background-color: #fff;
    color: #000;
    transition: all 0.3s ease-in-out;
  }

  & > img {
    position: absolute;
    left: 26px;
    width: 24px;
    height: 24px;
  }
`;

const Text = styled.div`
  font-family: "Gotham Medium";
  font-size: 14px;
  position: absolute;
  bottom: 0;
  left: 40%;
  line-height: 17px;
`;

const ClickedText = styled.div`
  font-size: 14px;
  position: absolute;
  bottom: 0;
  right: 26px;
  color: #ffffff;
`;

export default Header;
