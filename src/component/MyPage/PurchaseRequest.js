import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import StatusBox from "../Tag/Purchase_AnswerStatus";
import useModal from "../../../utils/useModal";
import axios from "axios";
import { useEffect, useState, memo } from "react";
import { useRouter } from "next/router";
import Pagination from "../Pagination/Pagination";
import EstImgDownloadModal from "../Modal/ImgDownLoadModal";
import ContractModal from "../Modal/ContractModal";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

const PurchaseRequest = () => {
  const router = useRouter();
  const { openModal, closeModal, ModalPortal } = useModal();
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [openDetail_Est, setOpenDetail_Est] = useState(false);
  const [openDetail_Cont, setOpenDetail_Cont] = useState(false);

  //pagination
  const indexOfLast = currentPage * postsPerPage; // 5
  const indexOfFirst = indexOfLast - postsPerPage; // 0
  const showCurrentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts; // 한 페이지에 뿌릴 작품들
  };

  const closeModalHandler = () => {
    closeModal();
    setOpenDetail_Est(false);
    setOpenDetail_Cont(false);
  };

  const detailModifyHandler = (id, category) => {
    router.push({
      pathname: `/qna/buy/${id}/modify`,
      query: { category: category },
    });
  };

  const detailCheckHandler = (id, category) => {
    router.push({
      pathname: `/qna/buy/${id}/check`,
      query: { category: category },
    });
  };

  // GET -작품구매문의
  const getData = () => {
    axios.get("/product/buyer/cart").then((res) => {
      if (res.status === 200) {
        console.log(res, "????????>>>>");
        setList(res.data);
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const getDetails_Estimate = (id) => {
    console.log("작품견적문의 ", id);
    setOpenDetail_Est(true);
    openModal();
  };

  const getDetails_Contract = (id) => {
    console.log("작품계약서", id);
    setOpenDetail_Cont(true);
    openModal();
  };

  return (
    <Container>
      <TableWrapper>
        <Table>
          <Title>
            <TitleText>작품명</TitleText>
            <TitleText>문의일자</TitleText>
            <TitleText>진행상태</TitleText>
            <TitleText>문의내용</TitleText>
            <TitleText>견적서</TitleText>
            <TitleText>계약서</TitleText>
          </Title>

          {list.length === 0 && (
            <EmptyList>
              <span>문의내역이 없습니다</span>
            </EmptyList>
          )}
          {list &&
            showCurrentPosts(list).map((ele, i) => {
              const {
                category,
                questionId,
                contractId,
                estimateId,
                title,
                adminCheck,
                createdAt,
              } = ele;
              return (
                <List key={i}>
                  <Text>{title}</Text>
                  <Text>{createdAt}</Text>
                  <Box_Status>
                    <StatusBox status={adminCheck} />
                  </Box_Status>

                  {/* 문의내용 자세히 */}
                  {adminCheck === "보완요청" ? (
                    <DetailText color={color.orange}>
                      <span
                        onClick={() =>
                          detailModifyHandler(questionId, category)
                        }
                      >
                        보완하기
                      </span>
                    </DetailText>
                  ) : (
                    <DetailText>
                      <span
                        onClick={() => detailCheckHandler(questionId, category)}
                      >
                        자세히보기
                      </span>
                    </DetailText>
                  )}

                  {/* 견적서 */}
                  {estimateId ? (
                    <DetailText>
                      <span onClick={() => getDetails_Estimate(estimateId)}>
                        자세히보기
                      </span>
                    </DetailText>
                  ) : (
                    <DetailText></DetailText>
                  )}

                  {/* 계약서 */}
                  {contractId ? (
                    <DetailText>
                      <span onClick={() => getDetails_Contract(contractId)}>
                        자세히보기
                      </span>
                    </DetailText>
                  ) : (
                    <DetailText></DetailText>
                  )}
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
      {openDetail_Est && !openDetail_Cont && (
        <ModalPortal>
          <EstImgDownloadModal
            closeBtnHandler={closeModalHandler}
            imgSrcUrl={"/assets/image/estimateImg.png"}
          />
        </ModalPortal>
      )}
      {!openDetail_Est && openDetail_Cont && (
        <ModalPortal>
          <ContractModal closeBtnHandler={closeModalHandler} />
        </ModalPortal>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 102px;
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

const Table = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
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
  font-family: ${(props) =>
    props.color ? "NotoSansCJKkr-Bold" : "NotoSansCJKkr-Regular"};
  color: ${(props) => (props.color ? props.color : color.black1)};
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

const Box_Status = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const EmptyList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  color: ${color.black3};
  font-family: "NotoSansCJKkr-Medium";
  font-size: 12px;
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
const Text_Status = styled.span`
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black3};
`;

export default memo(PurchaseRequest);
