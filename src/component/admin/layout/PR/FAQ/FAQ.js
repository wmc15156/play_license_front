import styled, { css } from "styled-components";
import color from "../../../../../../styles/colors";
import Header from "../../../common/ContentHeader";
import { TabContainer } from "../../../../../../styles/PL_Frame";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ToggleSwitchBtn from "../../../../../../src/component/ToggleSwitch/ToggleSwitch";
import useModal from "../../../../../../utils/useModal";
import Pagination from "../../../../../../src/component/Pagination/Pagination";
import Modal_FAQdetail from "../../../common/Modal/FAQdetail";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const titleArr = [
  "순서조정",
  "카테고리",
  "제목",
  "등록일",
  "자세히보기",
  "노출",
  "삭제",
];

const FAQ = () => {
  const { openModal, closeModal, ModalPortal } = useModal();
  const [faqID, setFaqID] = useState(null);
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [list, setList] = useState([
    {
      id: 1,
      category: "등록문의",
      title: "구매비용은 얼마인가요?",
      createdAt: "2020.12.24",
      expose: true,
    },
    {
      id: 2,
      category: "작품구매",
      title: "구매비용은 얼마인가요?",
      createdAt: "2020.12.25",
      expose: false,
    },
  ]);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage; // 0

  const showCurrentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const closeModalHandler = () => {
    setModal(modal);
    closeModal();
  };

  const switchBtnHandler = (idx) => {
    console.log("노출 on/off");

    let arr = [...list];
    arr[idx] = { ...list[idx], expose: !list[idx].expose };
    setList(arr);
  };

  const removeBtnHandler = (idx) => {
    let arr = [...list];
    arr.splice(idx, 1);
    setList(arr);
  };

  return (
    <Container>
      <Header
        onClick={() => console.log("버튼클릭")}
        titleText={"등록된 FAQ"}
        count={`${9}개`}
        btnText={"FAQ 추가하기"}
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
                  <Text></Text>

                  <Text>{item.category}</Text>

                  <Text>{item.title}</Text>

                  <Text>{item.createdAt}</Text>

                  <DetailText>
                    <span
                      onClick={() => {
                        setFaqID(item.id);
                        setModal(true);
                        openModal();
                      }}
                    >
                      자세히보기
                    </span>
                  </DetailText>

                  <Text>
                    <ToggleSwitchBtn
                      on={item.expose}
                      switchBtnHandler={() => switchBtnHandler(idx)}
                      color={color.blue}
                    />
                  </Text>

                  <Text>
                    <IoCloseOutline
                      size={32}
                      color={color.black3}
                      style={{ cursor: "pointer" }}
                      onClick={() => removeBtnHandler(idx)}
                    />
                  </Text>
                </List>
              );
            })}
        </Table>
        <PageWrapper>
          <Pagination
            color={color.blue}
            itemsPerPage={postsPerPage}
            totalItems={list.length}
            paginate={setCurrentPage}
          />
        </PageWrapper>
      </TableWrapper>
      {modal && (
        <ModalPortal>
          <Modal_FAQdetail
            // id={faqID}}
            // url={}
            closeModalHandler={closeModalHandler}
          />
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
export default FAQ;
