import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";
import Navi from "../../../src/component/Nav/Navigation";
import LogoBar from "../../../src/component/Nav/LogoBar";
import useModal from "../../../utils/useModal";
import axios from "axios";
import Pagination from "../../../src/component/Pagination/Pagination";
import StatusBox from "../../../src/component/Tag/AnswerStatus";

const list = [
  {
    questionId: 1,
    title: "등록절차 문의",
    adminCheck: false,
    createdAt: "2020.12.11",
  },
  {
    questionId: 2,
    title: "견적서 문의",
    adminCheck: true,
    createdAt: "2020.12.11",
  },
];

const pl_question = () => {
  const router = useRouter();
  const { openModal, closeModal, ModalPortal } = useModal();
  const [needLogin, setNeedLogin] = useState(false);
  // const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const indexOfLast = currentPage * postsPerPage; // 5
  const indexOfFirst = indexOfLast - postsPerPage; // 0
  const showCurrentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const onClickHandler = (id) => {
    router.push(`/provider/question/${id}`);
  };

  const getData = () => {
    // axios
    //   .get(GET_URL)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       console.log(res, "????????>>>>");
    //       setList(res.data);
    //     }
    //   })
    //   .catch((err) => {
    //     if (err.response.status === 401) {
    //       // 모달 로그인하고오기 창
    //       setNeedLogin(true);
    //     }
    //   });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />

        <Title>1:1 문의내역</Title>
        <TableWrapper>
          <Table>
            <Table_Title>
              <TitleText>제목</TitleText>
              <TitleText>자세히보기</TitleText>
              <TitleText>진행상태</TitleText>
              <TitleText>문의일자</TitleText>
            </Table_Title>
            {showCurrentPosts(list).map((q) => {
              const { questionId, title, adminCheck, createdAt } = q;
              return (
                <List key={questionId}>
                  <Text>{title}</Text>
                  <DetailText>
                    <span onClick={() => onClickHandler(questionId)}>
                      자세히보기
                    </span>
                  </DetailText>
                  <Text>
                    <StatusBox status={adminCheck}>{adminCheck}</StatusBox>
                  </Text>
                  <Text>{createdAt}</Text>
                </List>
              );
            })}
          </Table>
          <PageWrapper>
            <Pagination
              itemsPerPage={postsPerPage}
              totalItems={list.length}
              paginate={setCurrentPage}
            />
          </PageWrapper>
        </TableWrapper>
        <BannerWrapper onClick={() => onClickHandler("register")}>
          <img src="/assets/image/PL/banner_qna.png" />
        </BannerWrapper>
      </BodyContainer>
    </Container>
  );
};
const Container = styled.div`
  ${PageContainer};
`;

const NavContainer = styled.div`
  width: 220px;
`;

const BodyContainer = styled.div`
  flex-direction: column;
  ${PageContentContainer};
`;

const Title = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black2};
  margin-bottom: 30px;
`;

const TableWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 434px;
  flex-direction: column;
`;

const PageWrapper = styled.div`
  margin-top: auto;
`;

const BannerWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  & > img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
  }
`;

const Table = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  /* height: 100%; */
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 44px;
`;
const Table_Title = styled.li`
  display: flex;
  width: 100%;
  background-color: ${color.gray1};
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 60px;
`;
const TitleText = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black1};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const List = styled.li`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${color.black5};
  height: 60px;
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
const TextStyle = css`
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black1};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const DetailText = styled.div`
  text-decoration: underline ${color.black2};
  & > span {
    cursor: pointer;
    color: ${color.black2};
  }
  ${TextStyle}
`;

const Text = styled.div`
  ${TextStyle}
`;
export default pl_question;
