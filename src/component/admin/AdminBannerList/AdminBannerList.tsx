import styled from "styled-components";
import colors from "@styles/colors";
import { Dispatch, SetStateAction, useEffect, useState, VFC } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ToggleSwitchBtn from "@src/component/ToggleSwitch/ToggleSwitch";
import useModal from "@utils/useModal";
import BannerRemoveModal from "@src/component/admin/Modal/BannerRemove";
import axios from "axios";
export type BannerList = {
  id: number;
  title: string;
  exposure: boolean;
  desktopUrl: string | undefined;
  mobileUrl: string | undefined;
  url: string | undefined;
  order: number;
};

const UlWrapper = styled.ul`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const LiWrapper = styled.li`
  width: 100%;
  max-width: 1200px;
  height: 128px;
  border-bottom: 1px solid ${colors.black5};
  display: flex;
  align-items: center;
  & > img {
    width: 24px;
    height: 24px;
  }
`;

type Props = {
  lists: BannerList[];
  setBannerList: Dispatch<SetStateAction<BannerList[]>>;
  revalidate: () => Promise<boolean>;
};

const AdminBannerList: VFC<Props> = ({ lists, setBannerList, revalidate }) => {
  const [test, setTest] = useState(false);
  const { ModalPortal, openModal, closeModal } = useModal();
  const [removeBannerNumber, setRemoveBannerNumber] = useState(0);
  const [modalStatus, setModalStatus] = useState("");

  const onToggle = (id) => () => {
    // toggle switch on off
    const data = lists.map((list) =>
      list.id === id ? { ...list, exposure: !list.exposure } : list
    );
    const findIndex = lists.findIndex((ele) => ele.id === id);
    axios.patch(`/admin/home-banner/${id}`, { bannerList: data[findIndex] })
      .then((res) => {
        revalidate();
      })
      .catch((err) => {
        console.log(err.response.data);
      })
    setBannerList(data);
  };

  const onRemove = (id) => () => {
    axios.delete(`/admin/home-banner/${id}`)
      .then((res) => {
        revalidate();
        closeModal();
      })
      .catch((err) => console.log(err.response.data))


  };

  const openRemoveModal = (id) => () => {
    setRemoveBannerNumber(id);
    setModalStatus("remove");
    openModal();
  };

  useEffect(() => {
    setTest(true);
  }, []);
  return (
    <>
      {test ? (
        <DragDropContext
          onDragEnd={(param) => {
            const sourceIndex = param.source.index;
            const destinationIndex = param.destination?.index;
            let temp = null;
            if (!destinationIndex && destinationIndex !== 0) return;
            console.log(lists[sourceIndex], lists[destinationIndex]);
            temp = lists[sourceIndex].order;
            lists[sourceIndex].order = lists[destinationIndex].order;
            lists[destinationIndex].order = temp;
            lists.splice(destinationIndex, 0, lists.splice(sourceIndex, 1)[0]);
            console.log(lists, {
              bannerList: [lists[sourceIndex], lists[destinationIndex]],
            });
            axios
              .patch("/admin/home-banner/order", {
                bannerList: [lists[sourceIndex], lists[destinationIndex]],
              })
              .then((res) => console.log(res.data))
              .catch((err) => console.log(err.response.data));
          }}
        >
          <UlWrapper>
            <Droppable droppableId="droppable-1" direction={"vertical"}>
              {(provided, _) => (
                <div
                  style={{ width: "100%", maxWidth: "1200px", height: "100%" }}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {lists.map((list, i) => {
                    return (
                      <Draggable
                        key={list.id}
                        draggableId={String(list.id)}
                        index={i}
                      >
                        {(provided, snapshot) => (
                          <LiWrapper
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            style={{
                              ...provided.draggableProps.style,
                              boxShadow: snapshot.isDragging
                                ? "0 0 .4rem #666"
                                : "none",
                            }}
                            key={i}
                          >
                            <img
                              src={"/assets/image/sorting.png"}
                              {...provided.dragHandleProps}
                            />
                            <div
                              style={{
                                width: "100%",
                                maxWidth: "278px",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <span>{list.title}</span>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                maxWidth: "340px",
                              }}
                            >
                              <img
                                style={{ height: "100px" }}
                                src={
                                  list.desktopUrl
                                    ? list.desktopUrl
                                    : "/assets/image/Rectangle.png"
                                }
                              />
                            </div>
                            <div
                              style={{
                                width: "100%",
                                maxWidth: "160px",
                              }}
                            >
                              <img
                                style={{ height: "100px" }}
                                src={
                                  list.desktopUrl
                                    ? list.desktopUrl
                                    : "assets/image/Rectangle_small.png"
                                }
                              />
                            </div>
                            <ToggleSwitchBtn
                              on={list.exposure}
                              switchBtnHandler={onToggle(list.id)}
                              marginRight={"60px"}
                            />

                            <div>
                              <span>{list.url}</span>
                            </div>
                            <div style={{ marginLeft: "75px" }}>
                              <img
                                src={"/assets/image/X_small.png"}
                                onClick={openRemoveModal(list.id)}
                              />
                            </div>
                          </LiWrapper>
                        )}
                      </Draggable>
                    );
                  })}
                  {/* drop영역 선정*/}
                  {provided.placeholder}
                  {/*모달 창 */}
                  <ModalPortal>
                    {modalStatus === "remove" && (
                      <BannerRemoveModal
                        closeModal={closeModal}
                        id={removeBannerNumber}
                        onRemove={onRemove(removeBannerNumber)}
                      />
                    )}
                  </ModalPortal>
                </div>
              )}
            </Droppable>
          </UlWrapper>
        </DragDropContext>
      ) : null}
    </>
  );
};
export default AdminBannerList;
