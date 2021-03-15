import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useModal from "../../../utils/useModal";
import LoginAlert from "../Modal/AlertModal";
import StatusBox from "../Tag/AnswerStatus";
import Pagination from "../Pagination/Pagination";
import QnaDetail from "../Q&A/Qna";
import QnaDetailModify from "../Q&A/Qna_modify";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

const QAList = () => {
  const router = useRouter();
  const { openModal, closeModal, ModalPortal } = useModal();
  const [needLogin, setNeedLogin] = useState(false);
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const GET_URL = "/question";

  const indexOfLast = currentPage * postsPerPage; // 5
  const indexOfFirst = indexOfLast - postsPerPage; // 0
  const showCurrentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts; // 한 페이지에 뿌릴 작품들
  };

  const detailClickHandler = (id) => {
    router.push(`/qna/${id}`);
  };

  const redirectHandler = () => {
    router.push("/login");
  };

  const getData = () => {
    axios
      .get(GET_URL)
      .then((res) => {
        if (res.status === 200) {
          console.log(res, "????????>>>>");
          setList(res.data);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          // 모달 로그인하고오기 창
          setNeedLogin(true);
        }
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <TableWrapper>
        <Table>
          <Title>
            <TitleText>제목</TitleText>
            <TitleText>자세히보기</TitleText>
            <TitleText>진행상태</TitleText>
            <TitleText>문의일자</TitleText>
          </Title>
          {showCurrentPosts(list).map((q) => {
            const {
              questionId,
              title,
              adminCheck,
              createdAt,
              email,
              comment,
              phone,
              name,
            } = q;
            return (
              <List key={questionId}>
                <Text>{title}</Text>
                <DetailText>
                  <span onClick={() => detailClickHandler(questionId)}>
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
      <Link href="/qna">
        <Btn>
          <img src="/assets/image/MP_1_1banner.png" />
        </Btn>
      </Link>

      {needLogin && (
        <ModalPortal>
          <LoginAlert text={"로그인해주세요"} onClickBtn={redirectHandler} />
        </ModalPortal>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 102px;
`;
const Btn = styled.div`
  margin-left: auto;
  position: relative;
  cursor: pointer;
  width: 32%;
  & > img {
    max-width: 100%;
    height: auto;
  }
`;
const TableWrapper = styled.div`
  display: flex;
  width: 65%;
  min-height: 434px;
  flex-direction: column;
`;

const PageWrapper = styled.div`
  margin-top: auto;
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
const Title = styled.li`
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
  text-decoration: underline;
  & > span {
    cursor: pointer;
  }
  ${TextStyle}
`;

const Text = styled.div`
  ${TextStyle}
`;
export default QAList;
