import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import styles from "../../styles/colors";
import Link from "next/link";
import Menu from "./Menu";
import { useRouter } from "next/router";
import { GoSearch } from "react-icons/go";
import { IoPersonCircleSharp, IoMenu } from "react-icons/io5";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import sty from "../../styles/Login.module.css";

const Header = ({ menuStatus, onCloseHandler }) => {
  const router = useRouter();
  const { data, error } = useSWR("/auth/check/login", fetcher);
  const [bluehover, setBlueHover] = useState(false);
  const [yellowHover, setYellowHover] = useState(false);
  const [orangeHover, setOrangeHover] = useState(false);

  const onOrangeHover = () => {
    setOrangeHover(true);
  };
  const onOrangeLeave = () => {
    setOrangeHover(false);
  };
  const onYellowHover = () => {
    setYellowHover(true);
  };
  const onBlueHover = () => {
    setBlueHover(true);
  };
  const onYellowLeave = () => {
    setYellowHover(false);
  };
  const onBlueLeave = () => {
    setBlueHover(false);
  };

  const changePage = (page = "") => (e) => {
    e.preventDefault();
    router.push(`/${page}`);
    if (menuStatus) {
      onCloseHandler();
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
            {!data && (
              <ListItem_M
                onClick={changePage("login")}
                color={router.pathname === "/login" ? styles.blue : null}
                onMouseEnter={onBlueHover}
                onMouseLeave={onBlueLeave}
              >
                <Wrap>
                  <PersonIconWrapper>
                    <IoPersonCircleSharp
                      size="32px"
                      color={
                        router.pathname === "/login"
                          ? styles.white
                          : bluehover // state
                          ? styles.white
                          : styles.blue
                      }
                    />
                  </PersonIconWrapper>
                  <Text
                    color={router.pathname === "/login" ? styles.white : null}
                  >
                    LOGIN
                  </Text>
                </Wrap>
              </ListItem_M>
            )}
            {data && (
              <ListItem_M
                onClick={changePage("mypage/01")}
                color={router.pathname.includes("/mypage") ? styles.blue : null}
                onMouseEnter={onBlueHover}
                onMouseLeave={onBlueLeave}
              >
                <Wrap>
                  <PersonIconWrapper>
                    <IoPersonCircleSharp
                      size="32px"
                      color={
                        router.pathname.includes("/mypage")
                          ? styles.white
                          : bluehover
                          ? styles.white
                          : styles.blue
                      }
                    />
                  </PersonIconWrapper>
                  <Text
                    color={
                      router.pathname.includes("/mypage") ? styles.white : null
                    }
                  >
                    MYPAGE
                  </Text>
                </Wrap>
              </ListItem_M>
            )}

            <ListItem_S
              onClick={changePage("search")}
              color={router.pathname === "/search" ? styles.yellow : null}
              onMouseEnter={onYellowHover}
              onMouseLeave={onYellowLeave}
            >
              <Wrap>
                <SearchWrapper>
                  <GoSearch
                    size="28px"
                    color={
                      router.pathname === "/search"
                        ? styles.white
                        : yellowHover // state
                        ? styles.white
                        : styles.yellow
                    }
                  />
                </SearchWrapper>
                <Text
                  color={router.pathname === "/search" ? styles.white : null}
                >
                  SEARCH
                </Text>
              </Wrap>
            </ListItem_S>
            <ListItem
              onClick={onCloseHandler}
              onMouseEnter={onOrangeHover}
              onMouseLeave={onOrangeLeave}
            >
              <Wrap>
                <MenuIconWrapper>
                  <IoMenu
                    size="32px"
                    color={
                      orangeHover // state
                        ? styles.white
                        : styles.orange
                    }
                  />
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
              {!data && (
                <ListItem_M
                  onClick={changePage("login")}
                  color={router.pathname === "/login" ? styles.blue : null}
                  onMouseEnter={onBlueHover}
                  onMouseLeave={onBlueLeave}
                >
                  <Wrap>
                    <PersonIconWrapper>
                      <IoPersonCircleSharp
                        size="32px"
                        color={
                          router.pathname === "/login"
                            ? styles.white
                            : bluehover // state
                            ? styles.white
                            : styles.blue
                        }
                      />
                    </PersonIconWrapper>
                    <Text
                      color={router.pathname === "/login" ? styles.white : null}
                    >
                      LOGIN
                    </Text>
                  </Wrap>
                </ListItem_M>
              )}
              {data && (
                <ListItem_M
                  onClick={changePage("mypage/01")}
                  color={
                    router.pathname.includes("/mypage") ? styles.blue : null
                  }
                  onMouseEnter={onBlueHover}
                  onMouseLeave={onBlueLeave}
                >
                  <Wrap>
                    <PersonIconWrapper>
                      <IoPersonCircleSharp
                        size="32px"
                        color={
                          router.pathname.includes("/mypage")
                            ? styles.white
                            : bluehover
                            ? styles.white
                            : styles.blue
                        }
                      />
                    </PersonIconWrapper>
                    <Text
                      color={
                        router.pathname.includes("/mypage")
                          ? styles.white
                          : null
                      }
                    >
                      MYPAGE
                    </Text>
                  </Wrap>
                </ListItem_M>
              )}

              <ListItem_S
                onClick={changePage("search")}
                color={router.pathname === "/search" ? styles.yellow : null}
                onMouseEnter={onYellowHover}
                onMouseLeave={onYellowLeave}
              >
                <Wrap>
                  <SearchWrapper>
                    <GoSearch
                      size="28px"
                      color={
                        router.pathname === "/search"
                          ? styles.white
                          : yellowHover // state
                          ? styles.white
                          : styles.yellow
                      }
                    />
                  </SearchWrapper>
                  <Text
                    color={router.pathname === "/search" ? styles.white : null}
                  >
                    SEARCH
                  </Text>
                </Wrap>
              </ListItem_S>
              <ListItem
                active={menuStatus}
                onClick={onCloseHandler}
                onMouseEnter={onOrangeHover}
                onMouseLeave={onOrangeLeave}
              >
                <Wrap>
                  <MenuIconWrapper active={menuStatus}>
                    <IoMenu
                      size="32px"
                      color={
                        menuStatus
                          ? styles.white
                          : orangeHover // state
                          ? styles.white
                          : styles.orange
                      }
                    />
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
  display: block;
  margin-right: 20px;
`;

const LogoText = styled.div`
  font-family: "FreightSansBlackSC";
  font-size: 1.75rem;
  letter-spacing: 0.86px;
  &:hover {
    color: none;
  }
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

const ListItemStyle = css`
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
    color: ${styles.white};
    transition: all 0.3s ease-in-out;
  }
`;

const ListItem_M = styled.div`
  ${ListItemStyle};
  &:hover {
    background-color: ${styles.blue};
  }
`;
const ListItem_S = styled.div`
  ${ListItemStyle};
  &:hover {
    background-color: ${styles.yellow};
  }
`;

// MENU
const ListItem = styled.div`
  ${ListItemStyle};
  background-color: ${(props) => (props.active ? styles.orange : null)};
  color: ${(props) => (props.active ? styles.white : styles.black1)};
  &:hover {
    background-color: ${styles.orange};
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  padding-right: 2%;

  & > svg:hover {
    fill: ${styles.white};
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
    color: ${styles.white};
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
  z-index: 2;
  &:hover {
    color: ${styles.white};
  }
`;

const MenuIconWrapper = styled.span`
  margin: 0;
  padding-right: 25%;
  display: flex;
  align-items: center;
`;

export default Header;
