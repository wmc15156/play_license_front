import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import color from "../../../styles/colors";
import useModal from "../../../utils/useModal";
import AlertModal from "../Modal/AlertModal";
import fetcher from "../../../utils/fetcher";

const MyPageHeader = () => {
  const router = useRouter();
  const { data: userData, error: err } = useSWR("/auth/me", fetcher);
  // const [currentId, setCurrentId] = useState(null);
  const { openModal, closeModal, ModalPortal } = useModal();

  // const onChangeId = (id) => {
  //   setCurrentId(id);
  // };

  useEffect(() => {
    if (err) {
      openModal();
    }
  }, [err]);

  const redirectHandler = () => {
    router.push("/login");
  };

  return (
    <Container>
      <Mypage>마이페이지</Mypage>
      <List>
        <Link href="/mypage/01">
          <Item color={router.pathname === "/mypage/01" ? color.orange : null}>
            작품구매문의
          </Item>
        </Link>
        <Link href="/mypage/02">
          <Item color={router.pathname === "/mypage/02" ? color.orange : null}>
            찜한공연
          </Item>
        </Link>

        <Link href="/mypage/03">
          <Item color={router.pathname === "/mypage/03" ? color.orange : null}>
            1:1 문의
          </Item>
        </Link>

        <Link href="/mypage/04">
          <Item color={router.pathname === "/mypage/04" ? color.orange : null}>
            계정정보
          </Item>
        </Link>
      </List>
      <Div />
      <ModalPortal>
        <AlertModal text={"로그인해주세요"} onClickBtn={redirectHandler} />
      </ModalPortal>
    </Container>
  );
};

const Container = styled.div`
  max-width: 924px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 44px;
`;

const Mypage = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  line-height: 36px;
  font-size: 36px;
  margin-bottom: 44px;
  color: ${color.black2};
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-right: 40px;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 18px;
  padding: 0 1vw;
  color: ${color.black1};
  padding-bottom: 20px;
  max-width: 100px;

  &:hover {
    color: ${color.orange};
  }
  ${(props) =>
    props.color &&
    css`
      padding-bottom: 20px;
      border-bottom: 3px solid ${props.color};
      color: ${props.color};
    `};
`;

const Div = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export default MyPageHeader;
