import styled from "styled-components";
import color from "../../../../../styles/colors";
import BasicInput from "../../../BasicInput/BasicInputColor";
import TextArea from "../../../BasicInput/TextArea";
import Selector from "../../../Input/SelectOption";
import Uploader from "../../../Input/FileUploader";
import Btn_Gray from "../../../Button/GrayShortBtn";
import Btn_Color from "../../../Button/OriginalButton";
import { useState } from "react";
import { values } from "lodash";

const Modal_AddItem = ({
  pageType,
  closeModalHandler,
  title,
  itemArr,
  selectorOptionArr,
  valueState,
  setValueState,
}) => {
  const [newItem, setNewItem] = useState({
    id: valueState.length + 1,
    category: "",
    title: "",
    comment: "",
    file: { filename: "", url: "" },
    createdAt: `${new Date().getFullYear()}.${
      new Date().getMonth() < 10
        ? `0${new Date().getMonth() + 1}`
        : new Date().getMonth() + 1
    }.${
      new Date().getDate() < 10
        ? `0${new Date().getDate()}`
        : new Date().getDate()
    }`,
    expose: false,
  });

  const addItemToList = () => {
    console.log("추가하기>>", [...valueState, newItem]);
    setValueState([...valueState, newItem]);
    closeModalHandler();
  };

  const getFileURL = (url, filename) => {
    setNewItem({ ...newItem, file: { url: url, filename: filename } });
  };

  return (
    <Container>
      <HeadSection>
        <T pageType={pageType}>
          <span>{title}</span> 추가하기
        </T>
      </HeadSection>
      <div>
        <InputSection>
          {itemArr.includes("카테고리") && (
            <Input>
              <SubTitle>카테고리</SubTitle>
              <Selector
                value={newItem.category}
                onChange={(e) =>
                  setNewItem({ ...newItem, category: e.target.value })
                }
                options={selectorOptionArr}
                height={"40px"}
                radius={"8px"}
                fontSize={"14px"}
                readOnly={false}
                defaultOption={"카테고리를 선택해주세요"}
              />
            </Input>
          )}
          {itemArr.includes("제목") && (
            <Input>
              <SubTitle>제목</SubTitle>
              <BasicInput
                readOnly={false}
                width={"100%"}
                height={"40px"}
                background={color.white}
                placeholder={"제목을 입력해주세요."}
                fontSize={"14px"}
                fontColor={color.black1}
                onChange={(e) =>
                  setNewItem({ ...newItem, title: e.target.value })
                }
                value={newItem.title}
                align={"left"}
              />
            </Input>
          )}

          {itemArr.includes("내용") && (
            <Input>
              <SubTitle>내용</SubTitle>
              <TextArea
                width={"100%"}
                height={"189px"}
                background={color.white}
                padding={"13px 13px 13px 13px"}
                placeholder={"내용을 입력해주세요."}
                readOnly={false}
                fontSize={"14px"}
                fontColor={color.black1}
                borderStyle={`1px solid ${color.black5}`}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    comment: e.target.value,
                  })
                }
                value={newItem.comment}
              />
            </Input>
          )}

          {itemArr.includes("답변내용") && (
            <Input>
              <SubTitle>답변내용</SubTitle>
              <TextArea
                width={"100%"}
                height={"127px"}
                background={color.white}
                padding={"13px 13px 13px 13px"}
                placeholder={"답변내용을 작성해주세요."}
                readOnly={false}
                fontSize={"14px"}
                fontColor={color.black1}
                borderStyle={`1px solid ${color.black5}`}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    comment: e.target.value,
                  })
                }
                value={newItem.comment}
              />
            </Input>
          )}

          {itemArr.includes("첨부파일") && (
            <Input>
              <SubTitle>첨부파일</SubTitle>
              <UploadWrapper>
                <Uploader
                  btnName={"업로드"}
                  readOnly={false}
                  data={newItem.file}
                  fileURLhandler={getFileURL}
                  icon
                  color={pageType === "provider" ? color.blue : color.orange}
                  width={"100px"}
                />
              </UploadWrapper>
            </Input>
          )}
        </InputSection>
        <BottomSection>
          <ButtonContainer>
            <Btn1>
              <Btn_Gray
                text={"취소"}
                onClickHandler={closeModalHandler}
                size={"12px"}
                height={"36px"}
                fontColor={color.black1}
              />
            </Btn1>
            <Btn2>
              <Btn_Color
                width={"100%"}
                background={pageType === "provider" ? color.blue : color.orange}
                margin={"0px"}
                height={"36px"}
                size={"12px"}
                onClick={() => addItemToList()}
              >
                등록하기
              </Btn_Color>
            </Btn2>
          </ButtonContainer>
        </BottomSection>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 722px;
  padding: 32px 34px 34px 34px;
  border-radius: 14px;
  background-color: ${color.white};
  z-index: 11;
`;

const HeadSection = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const T = styled.div`
  font-size: 24px;
  line-height: 24px;

  & > span {
    color: ${(props) =>
      props.pageType === "provider" ? color.blue : color.orange};
  }
`;

const StatusBox = styled.div`
  position: absolute;
  right: 0;
`;

const InputSection = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
const Input = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 22px;
`;
const SubTitle = styled.div`
  width: 140px;
  font-family: "NotoSansCJKkr-Bold";
  line-height: 16px;
  color: ${color.black1};
`;
const InputBox = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  line-height: 14px;
  height: ${(props) => (props.textarea ? "127px" : "auto")};
  color: ${color.black1};
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${color.black5};
  padding: 13px;
  ${(props) =>
    props.textarea &&
    css`
      overflow: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    `}
`;

const UploadWrapper = styled.div`
  width: 100%;
`;
const BottomSection = styled.div`
  width: 100%;
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
  width: 30%;
`;

const Btn1 = styled.div`
  width: 100%;
  margin-right: 16px;
`;
const Btn2 = styled.div`
  width: 100%;
  margin-left: 16px;
`;

export default Modal_AddItem;
