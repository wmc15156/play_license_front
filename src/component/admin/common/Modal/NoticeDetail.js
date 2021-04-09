import styled, { css } from "styled-components";
import color from "../../../../../styles/colors";
import BasicInput from "../../../BasicInput/BasicInputColor";
import InputTextAndImg from "../../../BasicInput/InputTextAndImg";
import Btn_Gray from "../../../Button/GrayShortBtn";
import Btn_Color from "../../../Button/OriginalButton";
import Uploader from "../../../Input/FileUploader";
import { useState, useEffect } from "react";
import axios from "axios";

// 1:1문의 자세히보기 클릭
const Modal_Noticedetail = ({
  url,
  id,
  closeModalHandler,
  pageType,
  mainColor,
}) => {
  const [mode, setMode] = useState("check");
  const [readOnly, setReadOnly] = useState(true);
  const [data, setData] = useState({
    id: 1,
    createdAt: "2020.08.14",
    title: "광복절 임시공휴일 고객센터 휴무 안내 (2020.08.14)",
    comment: `8월 17일(월) 광복절 임시공휴일은 고객센터가 운영되지 않습니다.
    휴무내용 : 고객센터 전화상담, 1:1문의, 메일 문의
    
    휴무 기간동안 남겨주신 1:1 문의는 8월 18일(화)부터 순차적으로 답변 드릴 예정이며,
    회신이 늦어질 수 있는 점 양해 부탁드립니다.
    
    건강하고 행복한 휴일 보내시기 바랍니다.
    감사합니다 :)`,
    file: {
      filename: "smile",
      url:
        "http://t2.gstatic.com/images?q=tbn:ANd9GcQCze-mfukcuvzKk7Ilj2zQ0CS6PbOkq7ZhRInnNd1Yz3TQzU4e&t=1",
    },
  });

  const getImgURL = (url, filename) => {
    setData({
      ...data,
      file: { url: url, filename: filename },
    });
  };

  // const getData = ()=>{
  //   const GET_URL = url;
  //   axios.get(GET_URL).then(res=>setData(res.data)).catch(err=>console.log(err.response))
  // }
  //   useEffect(()=>getData(),[])
  useEffect(() => {
    mode === "check" ? setReadOnly(true) : setReadOnly(false);
  }, [mode]);
  const { createdAt, category, title, comment, file } = data;
  return (
    <Container>
      <HeadSection>
        <T pageType={pageType}>
          <span>공지사항</span> {mode === "check" ? "자세히보기" : "수정하기"}
        </T>
      </HeadSection>
      <div>
        <InputSection>
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

          <Input>
            <SubTitle>등록일</SubTitle>
            <BasicInput
              readOnly={readOnly}
              height={"40px"}
              background={color.white}
              placeholder={""}
              fontSize={"14px"}
              fontColor={color.black1}
              onChange={(e) => setData({ ...data, createdAt: e.target.value })}
              value={createdAt}
              align={"left"}
            />
          </Input>

          <Input>
            <SubTitle>내용</SubTitle>
            {mode === "check" && (
              <InputTextAndImg
                mode={mode}
                readOnly={readOnly}
                imgSrc={file.url}
                background={color.gray1}
                iconColor={mainColor}
              />
            )}

            {mode === "modify" && (
              <InputTextAndImg
                mode={mode}
                readOnly={readOnly}
                imgSrc={file.url}
                borderStyle={`1px solid ${color.black5}`}
                iconColor={mainColor}
                clickIconHandler={() =>
                  setData({
                    ...data,
                    file: { url: "", filename: "" },
                  })
                }
              />
            )}
          </Input>
          {mode === "modify" && (
            <Input>
              <SubTitle>첨부파일</SubTitle>
              <UploadWrapper>
                <Uploader
                  readOnly={readOnly}
                  data={file}
                  fileURLhandler={getImgURL}
                  icon
                  btnName={"업로드"}
                  color={mainColor}
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
                    background={mainColor}
                    margin={"0px"}
                    height={"36px"}
                    size={"12px"}
                    // onClick={() => nextBtnHandler()}
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
                    background={mainColor}
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
export default Modal_Noticedetail;
