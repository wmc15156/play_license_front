import styled from "styled-components";
import colors from "@styles/colors";
import { Dispatch, SetStateAction, useEffect, useState, VFC } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ToggleSwitchBtn from "@src/component/ToggleSwitch/ToggleSwitch";
import useModal from "@utils/useModal";
import BannerRemoveModal from "@src/component/admin/Modal/BannerRemove";
import axios from "axios";
import { CurationList } from "../../../../pages/admin";
import {
  LiWrapper,
  UlWrapper,
} from "@src/component/admin/AdminBannerList/AdminBannerList";

type Props = {
  lists: CurationList[];
  setCurationList: Dispatch<SetStateAction<CurationList[]>>;
  revalidate?: () => Promise<boolean>;
  subContainer: boolean
};

const maxWidth = ["104px", "191px", "267px", "192px", "154px", "236px", "47px"];

const AdminCurationLists: VFC<Props> = ({
  lists,
  setCurationList,
  revalidate,
  subContainer,
}) => {
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
    axios
      .patch(`/admin/home-banner/${id}`, { bannerList: data[findIndex] })
      .then((res) => {
        revalidate();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    setCurationList(data);
  };

  const onRemove = (id) => () => {
    axios
      .delete(`/admin/home-banner/${id}`)
      .then((res) => {
        revalidate();
        closeModal();
      })
      .catch((err) => console.log(err.response.data));
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
      {test && subContainer ? (
        <DragDropContext
          onDragEnd={(param) => {
            const sourceIndex = param.source.index;
            const destinationIndex = param.destination?.index;
            let temp = null;
            if (!destinationIndex && destinationIndex !== 0) return;
            temp = lists[sourceIndex].order;
            lists[sourceIndex].order = lists[destinationIndex].order;
            lists[destinationIndex].order = temp;
            lists.splice(destinationIndex, 0, lists.splice(sourceIndex, 1)[0]);
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
                            <div
                              style={{
                                width: "100%",
                                maxWidth: "104px",
                                display: "flex",
                                justifyContent: "flex-start",
                                paddingLeft: "21px",
                                boxSizing: "border-box",
                              }}
                            >
                              <img
                                src={"/assets/image/sorting.png"}
                                {...provided.dragHandleProps}
                              />
                            </div>

                            <div
                              style={{
                                width: "100%",
                                maxWidth: "191px",
                              }}
                            >
                              <span>{list.curationName}</span>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                maxWidth: "267px",
                              }}
                            >
                              <span>{list.kinds}</span>
                            </div>

                            <div
                              style={{
                                width: "100%",
                                maxWidth: "192px",
                                paddingLeft: "70px",
                                boxSizing: "border-box",
                              }}
                            >
                              <ToggleSwitchBtn
                                on={list.exposure}
                                switchBtnHandler={onToggle(list.id)}
                                marginRight={"60px"}
                              />
                            </div>

                            <div
                              style={{
                                width: "100%",
                                maxWidth: "154px",
                              }}
                            >
                              <span>{list.productCount}</span>
                            </div>

                            <div style={{ width: "100%", maxWidth: "223px" }}>
                              <span>수정하기</span>
                            </div>
                            <div style={{ maxWidth: "26px", width: "100px" }}>
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
export default AdminCurationLists;
