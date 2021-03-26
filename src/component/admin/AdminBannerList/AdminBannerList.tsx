import styled from "styled-components";
import colors from "@styles/colors";
import { useEffect, useState, VFC } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
  height: 128px;
  margin: 0 auto;
`;

const LiWrapper = styled.li`
  width: 100%;
  max-width: 1200px;
  height: 100%;
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
};

const AdminBannerList: VFC<Props> = ({ lists }) => {

  const [test, setTest] = useState(false);

  useEffect(() => {
    setTest(true);
  },[])

  return (
    <>
      {test ? <UlWrapper>
        <DragDropContext
          onDragEnd={(...props) => {
            console.log(props);
          }}
        >
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div
                style={{ width: "100%", maxWidth: "1200px", height: "100%" }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {lists.map((list, i) => {
                  return (
                    <Draggable
                      key={String(list.id)}
                      draggableId={`draggable-${i}`}
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
                              maxWidth: "225px",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <span>{list.title}</span>
                          </div>
                        </LiWrapper>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </UlWrapper> : null}
    </>
  );
};
export default AdminBannerList;
