import styled, { css } from "styled-components";
import color from "../../../../../styles/colors";
import AnswerStatus from "../../../Tag/AnswerStatus";
import BasicInput from "../../../BasicInput/BasicInputColor";
import TextArea from "../../../BasicInput/TextArea";
import Btn_Gray from "../../../Button/GrayShortBtn";
import Btn_Color from "../../../Button/OriginalButton";
import Uploader from "../../../Input/ImageUploader";
import { useState, useEffect } from "react";
import axios from "axios";

const FAQdetail = ({ url, id, closeModalHandler, pageType }) => {
  const [mode, setMode] = useState("check");
  const [readOnly, setReadOnly] = useState(null);
  const [data, setData] = useState({
    id: 1,
    createdAt: "2020.08.14",
    category: "등록문의",
    title: "구매비용은 얼마인가요?",
    comment: "답변답변답변",
    file: { filename: "", url: "" },
  });

  const getImgURL = (name, url, filename) => {
    setData({
      ...data,
      [name]: { url: url, filename: filename },
    });
  };

  // const getData = ()=>{
  //   const GET_URL = url;
  //   axios.get(GET_URL).then(res=>setData(res.data)).catch(err=>console.log(err.response))
  // }
  //   useEffect(()=>getData(),[])
  useEffect(() => setReadOnly((prev) => !prev), [mode]);
  const { createdAt, category, title, comment, file } = data;
  return (
    <Container>
      <HeadSection>
        <T pageType={pageType}>
          <span>FAQ</span> {mode === "check" ? " 자세히보기" : " 수정하기"}
        </T>
      </HeadSection>
      <div>
        <InputSection>
          <Input>
            <SubTitle>카테고리</SubTitle>
            <BasicInput
              readOnly={readOnly}
              height={"40px"}
              background={color.white}
              placeholder={""}
              fontSize={"14px"}
              fontColor={color.black1}
              onChange={(e) => setData({ ...data, category: e.target.value })}
              value={category}
              align={"left"}
            />
          </Input>
          <Input>
            <SubTitle>제목</SubTitle>
            <BasicInput
              readOnly={readOnly}
              height={"40px"}
              background={color.white}
              placeholder={""}
              fontSize={"14px"}
              fontColor={color.black1}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              value={title}
              align={"left"}
            />
          </Input>
          {mode === "check" && (
            <Input>
              <SubTitle>등록일</SubTitle>
              <BasicInput
                readOnly={readOnly}
                height={"40px"}
                background={color.white}
                placeholder={""}
                fontSize={"14px"}
                fontColor={color.black1}
                onChange={(e) =>
                  setData({ ...data, createdAt: e.target.value })
                }
                value={createdAt}
                align={"left"}
              />
            </Input>
          )}
          <Input>
            <SubTitle>답변내용</SubTitle>
            <TextArea
              width={"100%"}
              height={"127px"}
              background={color.white}
              padding={"13px 13px 13px 13px"}
              placeholder={"답변내용을 작성해주세요."}
              readOnly={readOnly}
              fontSize={"14px"}
              fontColor={color.black1}
              borderStyle={`1px solid ${color.black5}`}
              onChange={(e) =>
                setData({
                  ...data,
                  comment: e.target.value,
                })
              }
              value={comment}
            />
          </Input>
          {mode === "modify" && (
            <Input>
              <SubTitle>첨부파일</SubTitle>
              <UploadWrapper>
                <Uploader
                  name={"file"}
                  data={file}
                  getImgURL={getImgURL}
                  icon={false}
                  backgroundColor={color.white}
                  borderStyle={
                    pageType === "provider"
                      ? `1px solid ${color.blue}`
                      : `1px solid ${color.orange}`
                  }
                  fontColor={
                    pageType === "provider" ? color.blue : color.orange
                  }
                  width={"100px"}
                />
              </UploadWrapper>
            </Input>
          )}
        </InputSection>
        <BottomSection>
          <ButtonContainer>
            {mode === "modify" ? (
              <>
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
                    background={
                      pageType === "provider" ? color.blue : color.orange
                    }
                    margin={"0px"}
                    height={"36px"}
                    size={"12px"}
                    onClick={() => closeModalHandler()}
                  >
                    등록하기
                  </Btn_Color>
                </Btn2>
              </>
            ) : (
              <>
                <Btn1>
                  <Btn_Color
                    width={"100%"}
                    background={
                      pageType === "provider" ? color.blue : color.orange
                    }
                    margin={"0px"}
                    height={"36px"}
                    size={"12px"}
                    onClick={() => setMode("modify")}
                  >
                    수정하기
                  </Btn_Color>
                </Btn1>
                <Btn2>
                  <Btn_Gray
                    text={"닫기"}
                    onClickHandler={closeModalHandler}
                    size={"12px"}
                    height={"36px"}
                    fontColor={color.black1}
                  />
                </Btn2>
              </>
            )}
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
export default FAQdetail;
