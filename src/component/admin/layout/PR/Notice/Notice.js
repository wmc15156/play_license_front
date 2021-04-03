import styled, { css } from "styled-components";
import color from "../../../../../../styles/colors";
import Header from "../../../common/ContentHeader";
import { TabContainer } from "../../../../../../styles/PL_Frame";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ToggleSwitchBtn from "../../../../../../src/component/ToggleSwitch/ToggleSwitch";
import useModal from "../../../../../../utils/useModal";
import Pagination from "../../../../../../src/component/Pagination/Pagination";
import Modal_Noticedetail from "../../../common/Modal/NoticeDetail";
import Modal_AddItem from "../../../common/Modal/AddItem";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const titleArr = ["순서조정", "제목", "등록일", "자세히보기", "노출", "삭제"];

const Notice = () => {
  const { openModal, closeModal, ModalPortal } = useModal();
  const [noticeID, setNoticeID] = useState(null);
  const [modal, setModal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [list, setList] = useState([
    {
      id: 1,
      order: "",
      title: "신규 기능 업데이트 안내",
      createdAt: "2020.12.24",
      expose: true,
      file: { url: "", filename: "" },
    },
    {
      id: 2,
      order: "상상마루",
      title: "신규 기능 업데이트 안내",
      createdAt: "2020.12.25",
      expose: false,
      file: { url: "", filename: "" },
    },
    {
      id: 3,
      order: "상상마루",
      title: "신규 기능 업데이트 안내",
      createdAt: "2020.12.26",
      expose: false,
      file: { url: "", filename: "" },
    },
    {
      id: 4,
      order: "상상마루",
      title: "신규 기능 업데이트 안내",
      createdAt: "2020.12.27",
      expose: false,
      file: { url: "", filename: "" },
    },
  ]);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage; // 0

  const showCurrentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const openModalHandler = (name) => {
    setModal(name);
    openModal();
  };

  const closeModalHandler = () => {
    setModal("");
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

  const onDragEnd = (result) => {
    console.log(result.destination, result.source, result.draggableId);
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    console.log(list[source.index], list[destination.index], draggableId);
    //기존 배열에서 선택idx의 아이템 삭제 => 옮긴idx에 추가
    const copiedList = Array.from(list);

    copiedList.splice(source.index, 1);
    const [draggableItem] = list.filter(
      (item) => item.id === Number(draggableId)
    );
    // console.log(draggableItem, "draggableItem");
    copiedList.splice(destination.index, 0, draggableItem);
    // console.log(copiedList, "new?");
    setList(copiedList);
  };

  return (
    <Container>
      <Header
        onClick={() => openModalHandler("add")}
        titleText={"공지사항"}
        count={`${12}개`}
        btnText={"공지 추가하기"}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <TableWrapper>
          <Table>
            <Table_Title>
              {titleArr.map((title, i) => (
                <TitleText key={i}>{title}</TitleText>
              ))}
            </Table_Title>
            {list.length === 0 && (
              <EmptyList>
                <span>공지사항이 없습니다</span>
              </EmptyList>
            )}
            <Droppable droppableId={"droppable-notice"}>
              {(provided, snapshot) => {
                return (
                  <NoticeList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {list.length > 0 &&
                      showCurrentPosts(list).map((item, idx) => {
                        return (
                          <Draggable
                            key={idx}
                            draggableId={String(item.id)}
                            index={idx}
                          >
                            {(provided, snapshot) => (
                              <List
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                              >
                                <Text>
                                  <MoveIcon {...provided.dragHandleProps}>
                                    <IoMenuOutline
                                      size={24}
                                      color={color.black3}
                                    />
                                  </MoveIcon>
                                </Text>

                                <Text>{item.title}</Text>

                                <Text>{item.createdAt}</Text>

                                <DetailText>
                                  <span
                                    onClick={() => {
                                      setNoticeID(item.id);
                                      setModal("detail");
                                      openModal();
                                    }}
                                  >
                                    자세히보기
                                  </span>
                                </DetailText>

                                <Text>
                                  <ToggleSwitchBtn
                                    on={item.expose}
                                    switchBtnHandler={() =>
                                      switchBtnHandler(idx)
                                    }
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
                            )}
                          </Draggable>
                        );
                      })}
                    {provided.placeholder}
                  </NoticeList>
                );
              }}
            </Droppable>
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
      </DragDropContext>

      <ModalPortal>
        {modal === "detail" && (
          <Modal_Noticedetail
            // id={noticeID}}
            // url={}
            closeModalHandler={closeModalHandler}
          />
        )}
        {modal === "add" && (
          <Modal_AddItem
            closeModalHandler={closeModalHandler}
            title={"공지사항"}
            itemArr={["제목", "내용", "첨부파일"]}
            valueState={list}
            setValueState={setList}
          />
        )}
      </ModalPortal>
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

const NoticeList = styled.div``;
const MoveIcon = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  &:focus {
    outline: none;
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
export default Notice;
