import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import styles from "../../styles/theme";
import Link from "next/link";
import Menu from "../component/Menu";
import { useRouter } from "next/router";
import { GoSearch } from "react-icons/go";
import { IoPersonCircleSharp, IoMenu } from "react-icons/io5";

// https://styled-components.com/docs/advanced#referring-to-other-components

const Header = ({ menuStatus, onCloseHandler }) => {
  const router = useRouter();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const onCloseHandler = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const changePage = (page = "") => () => {
    console.log("click");
    router.push(`/${page}`);
    if (menuStatus) {
      onCloseHandler();
      // closeModal();
    }
  };

  return (
    <>
      {!menuStatus && (
        <Container>
          <LogoBox>
            <Link href="/">
              <a>
                <Logo>
                  <Img src="/assets/image/logo.png" alt="" />
                  <LogoText>
                    PLAY
                    <br />
                    LICENSE
                  </LogoText>
                </Logo>
              </a>
            </Link>
          </LogoBox>
          <List>
            <ListItem_M
              onClick={changePage("mypage")}
              color={router.pathname === "/mypage" ? styles.color.blue : null}
            >
              <Wrap>
                <PersonIconWrapper>
                  <IoPersonCircleSharp
                    size="32px"
                    color={
                      router.pathname === "/mypage"
                        ? styles.color.white
                        : styles.color.blue
                    }
                  />
                </PersonIconWrapper>
                <Text
                  color={
                    router.pathname === "/mypage" ? styles.color.white : null
                  }
                >
                  MYPAGE
                </Text>
              </Wrap>
            </ListItem_M>

            <ListItem_S
              onClick={changePage("search")}
              color={router.pathname === "/search" ? styles.color.yellow : null}
            >
              <Wrap>
                <SearchWrapper>
                  <GoSearch
                    size="28px"
                    color={
                      router.pathname === "/search"
                        ? styles.color.white
                        : styles.color.yellow
                    }
                  />
                </SearchWrapper>
                <Text
                  color={
                    router.pathname === "/search" ? styles.color.white : null
                  }
                >
                  SEARCH
                </Text>
              </Wrap>
            </ListItem_S>
            <ListItem onClick={onCloseHandler}>
              <Wrap>
                <MenuIconWrapper>
                  <IoMenu size="32px" />
                </MenuIconWrapper>
                <Text>MENU</Text>
              </Wrap>
            </ListItem>
          </List>
        </Container>
      )}
      {menuStatus && (
        <MenuContainer>
          <Container2>
            <LogoBox>
              <Link href="/">
                <a>
                  <Logo>
                    <Img src="/assets/image/logo.png" alt="" />
                    <LogoText>
                      PLAY
                      <br />
                      LICENSE
                    </LogoText>
                  </Logo>
                </a>
              </Link>
            </LogoBox>
            <List>
              <ListItem_M
                onClick={changePage("mypage")}
                color={router.pathname === "/mypage" ? styles.color.blue : null}
              >
                <Wrap>
                  <PersonIconWrapper>
                    <IoPersonCircleSharp
                      size="32px"
                      color={
                        router.pathname === "/mypage"
                          ? styles.color.white
                          : styles.color.blue
                      }
                    />
                  </PersonIconWrapper>
                  <Text
                    color={
                      router.pathname === "/mypage" ? styles.color.white : null
                    }
                  >
                    MYPAGE
                  </Text>
                </Wrap>
              </ListItem_M>

              <ListItem_S
                onClick={changePage("search")}
                color={
                  router.pathname === "/search" ? styles.color.yellow : null
                }
              >
                <Wrap>
                  <SearchWrapper>
                    <GoSearch
                      size="28px"
                      color={
                        router.pathname === "/search"
                          ? styles.color.white
                          : styles.color.yellow
                      }
                    />
                  </SearchWrapper>
                  <Text
                    color={
                      router.pathname === "/search" ? styles.color.white : null
                    }
                  >
                    SEARCH
                  </Text>
                </Wrap>
              </ListItem_S>
              <ListItem active={menuStatus} onClick={onCloseHandler}>
                <Wrap>
                  <MenuIconWrapper active={menuStatus}>
                    <IoMenu size="32px" />
                  </MenuIconWrapper>
                  <Text>MENU</Text>
                </Wrap>
              </ListItem>
            </List>
          </Container2>
          <Menu onCloseHandler={onCloseHandler} />
        </MenuContainer>
      )}
    </>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 924px;
  margin: 44px auto;
  padding: 0 1rem;
`;

const Container2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  z-index: auto;
`;

const Container = styled.div`
  max-width: 924px;
  display: flex;
  margin: 44px auto;
  padding: 0 1rem;
  align-items: center;
`;
const LogoBox = styled.div`
  max-width: 100%;
  height: auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: auto;
`;
const Img = styled.img`
  width: 91px;
  height: 57px;
  /* max-width: 30%;
  height: auto; */
  display: block;
  margin-right: 20px;
`;

const LogoText = styled.div`
  font-family: "FreightSansBlackSC";
  font-size: 1.75rem;
  letter-spacing: 0.86px;
`;

const List = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  margin-left: auto;
  width: 60%;
  align-items: center;
`;

const ListItem_M = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  margin-right: 2%;
  cursor: pointer;
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}

  &:hover {
    font-family: "Gotham Medium";
    font-size: 14px;
    background-color: #0e9aa7;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;
const ListItem_S = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: cente;
  justify-content: center;
  width: 100%;
  height: 45px;
  margin-right: 2%;
  cursor: pointer;
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}

  &:hover {
    font-family: "Gotham Medium";
    font-size: 14px;
    background-color: #ffcc5c;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;

// MENU
const ListItem = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  margin-right: 2%;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#ff6f69" : null)};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  &:hover {
    font-family: "Gotham Medium";
    font-size: 14px;
    background-color: #ff6f69;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  padding-right: 2%;

  & > svg:hover {
    fill: #fff;
  }
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  font-family: "Gotham Medium";
  font-size: 14px;
  line-height: 17px;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  &:hover {
    color: #fff;
  }
`;
const SearchWrapper = styled.span`
  margin: 0;
  padding-right: 25%;
  display: flex;
  align-items: center;
`;

const PersonIconWrapper = styled.span`
  margin: 0;
  padding-right: 25%;
  display: flex;
  align-items: center;
`;

const MenuIconWrapper = styled.span`
  margin: 0;
  padding-right: 25%;
  display: flex;
  align-items: center;

  & > svg {
    color: ${(props) => (props.active ? "#fff" : "#ff6f69")};
  }
  & > svg:hover {
    color: #fff;
  }
`;

export default Header;
