import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import Menu from "../component/Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
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
              <img src="/assets/image/icon_mypage.png" />
              <Text>MYPAGE</Text>
            </ListItem>

            <ListItem>
              <img src="/assets/image/icon_search.png" />
              <Text>SEARCH</Text>
            </ListItem>
            <ListItem onClick={open}>
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
                <img src="/assets/image/icon_mypage.png" />
                <Text>MYPAGE</Text>
              </ListItem>

              <ListItem>
                <img src="/assets/image/icon_search.png" />
                <Text>SEARCH</Text>
              </ListItem>
              <ListItem onClick={open}>
                <img src="/assets/image/icon_hamburger.png" />
                <Text>MENU</Text>
              </ListItem>
            </List>
          </Container2>
          <Menu close={close} />
        </OpenContainer>
      )}
    </>
  );
};

const OpenContainer = styled.div`
  max-width: 1024px;
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
  max-width: 1024px;
  display: flex;
  margin: 48px auto;
  padding: 0 1rem;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
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
`;

const ListItem = styled.li`
  border: 0.5px solid #f5f5f5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: 117px;
  height: 45px;
  padding-left: 26px;
  position: relative;

  &:hover {
    font-family: "Gotham Medium";
    font-size: 14px;
    background-color: #ff6f69;
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }

  & > img {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;

const Text = styled.div`
  font-family: "Gotham Medium";
  font-size: 14px;
  position: absolute;
  bottom: 0;
  left: 70px;
`;

const ClickedText = styled.div`
  font-size: 14px;
  position: absolute;
  bottom: 0;
  right: 26px;
  color: #ffffff;
`;

export default Header;
