import styled, { css } from "styled-components";
import color from "../../../../../styles/colors";
import Header from "../Header/ContentHeader2";
import { TabContainer } from "../../../../../styles/PL_Frame";
import useModal from "../../../../../utils/useModal";
import Pagination from "../../../Pagination/Pagination";
import StatusBox from "../../../Tag/AnswerStatus";
import Modal_QuestionDetail from "../Modal/QuestionDetail";
import { useEffect, useState } from "react";

const titleArr = [
  "회원여부",
  "문의자 이메일",
  "제목",
  "자세히보기",
  "진행상태",
  "문의일자",
];

const Question = ({
  pageType,
  headerOptArr1,
  defaultOption1,
  headerOptArr2,
  defaultOption2,
  subColor,
  mainColor,
}) => {
  const { openModal, closeModal, ModalPortal } = useModal();
  const [questionId, setQuestionId] = useState(null);
  const [isChecked, setIsChecked] = useState(null);
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [list, setList] = useState([
    {
      id: 1,
      isMember: false,
      email: "abc@gmail.com",
      title: "구매비용은 얼마인가요?",
      createdAt: "2020.12.24",
      adminCheck: true,
    },
    {
      id: 2,
      isMember: true,
      email: "abc@gmail.com",
      title: "구매비용은 얼마인가요?",
      createdAt: "2020.12.25",
      adminCheck: false,
    },
  ]);

  const closeModalHandler = () => {
    setModal(modal);
    closeModal();
  };

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage; // 0

  const showCurrentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <Container>
      <Header
        pageType={pageType}
        titleText={"1:1 문의관리"}
        countText={`${list.length}개`}
        placeholder={"이메일, 제목, 내용을 검색해보세요"}
        optionsArr1={headerOptArr1}
        defaultOption1={defaultOption1}
        optionsArr2={headerOptArr2}
        defaultOption2={defaultOption2}
      />

      <TableWrapper>
        <Table>
          <Table_Title>
            {titleArr.map((title, i) => (
              <TitleText key={i}>{title}</TitleText>
            ))}
          </Table_Title>
          {list.length === 0 && (
            <EmptyList>
              <span>FAQ가 없습니다</span>
            </EmptyList>
          )}
          {list.length > 0 &&
            showCurrentPosts(list).map((item, idx) => {
              return (
                <List key={idx}>
                  <Text>{item.isMember ? "회원" : "비회원"}</Text>

                  <Text>{item.email}</Text>

                  <Text>{item.title}</Text>

                  <DetailText>
                    <span
                      onClick={() => {
                        setQuestionId(item.id);
                        setIsChecked(item.adminCheck);
                        setModal(true);
                        openModal();
                      }}
                    >
                      자세히보기
                    </span>
                  </DetailText>

                  <Text>
                    <StatusBox
                      status={item.adminCheck}
                      color={pageType === "provider" ? subColor : mainColor}
                    />
                  </Text>

                  <Text>{item.createdAt}</Text>
                </List>
              );
            })}
        </Table>
        <PageWrapper>
          <Pagination
            color={mainColor}
            itemsPerPage={postsPerPage}
            totalItems={list.length}
            paginate={setCurrentPage}
          />
        </PageWrapper>
      </TableWrapper>
      {modal && (
        <ModalPortal>
          {isChecked && (
            <Modal_QuestionDetail
              isChecked={isChecked}
              // id={questionId}
              // url={}
              closeModalHandler={closeModalHandler}
              readOnly={true}
              pageType={pageType}
              mainColor={mainColor}
            />
          )}
          {!isChecked && (
            <Modal_QuestionDetail
              isChecked={isChecked}
              // id={questionId}
              // url={}
              closeModalHandler={closeModalHandler}
              readOnly={false}
              pageType={pageType}
              mainColor={mainColor}
            />
          )}
        </ModalPortal>
      )}
    </Container>
  );
};

const Container = styled.div`
  ${TabContainer}
`;
const TableWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 226px;
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
  flex-direction: column;
  border-radius: 10px;
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

const List = styled.li`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${color.black5};
  height: 60px;
  &:last-child {
    /* border-bottom: none; */
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

const Text = styled.div`
  ${TextStyle}
`;

const DetailText = styled.div`
  ${TextStyle};
  text-decoration: underline;
  text-decoration-color: ${color.black2};
  color: ${color.black2};
  & > span {
    cursor: pointer;
  }
`;
export default Question;
