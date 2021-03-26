import styled from "styled-components";
import colors from "@styles/colors";
import { Dispatch, SetStateAction, useEffect, useState, VFC } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ToggleSwitchBtn from "@src/component/ToggleSwitch/ToggleSwitch";
import useModal from "@utils/useModal";
import BannerRemoveModal from "@src/component/admin/Modal/BannerRemove";
export type BannerList = {
  id: number;
  title: string;
  exposure: boolean;
  desktopUrl: string | undefined;
  mobileUrl: string | undefined;
  url: string | undefined;
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
    border: 1px solid red;
  }
`;

type Props = {
  lists: BannerList[];
  setBannerList: Dispatch<SetStateAction<BannerList[]>>;
};

const AdminBannerList: VFC<Props> = ({ lists, setBannerList }) => {
  const [test, setTest] = useState(false);
  const { ModalPortal, openModal, closeModal } = useModal();
  const [removeBannerNumber, setRemoveBannerNumber] = useState(0);
  const [modalStatus, setModalStatus] = useState("");

  const onToggle = (id) => () => {
    // toggle switch on off
    const data = lists.map((list) =>
      list.id === id ? { ...list, exposure: !list.exposure } : list
    );
    setBannerList(data);
  };

  const onRemove = (id) => () => {
    const data = lists.filter((list) => list.id !== id);
    setBannerList(data);
    closeModal();
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
            if (!destinationIndex && destinationIndex !== 0) return;
            lists.splice(destinationIndex, 0, lists.splice(sourceIndex, 1)[0]);
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
                              <img src={"/assets/image/Rectangle.png"} />
                            </div>
                            <div
                              style={{
                                width: "100%",
                                maxWidth: "160px",
                              }}
                            >
                              <img src={"assets/image/Rectangle_small.png"} />
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
