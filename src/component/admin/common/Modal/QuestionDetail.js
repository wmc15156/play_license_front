import styled, { css } from "styled-components";
import color from "../../../../../styles/colors";
import AnswerStatus from "../../../Tag/AnswerStatus";
import TextArea from "../../../BasicInput/TextArea";
import Btn_left from "../../../Button/GrayShortBtn";
import Btn_right from "../../../Button/OriginalButton";
import { useState, useEffect } from "react";
import axios from "axios";

// 1:1문의 자세히보기 클릭
const QuestionDetail = ({
  url,
  id,
  closeModalHandler,
  isChecked,
  readOnly,
  pageType,
  mainColor,
}) => {
  const [data, setData] = useState({
    id: 1,
    name: "상상",
    email: "abc@gmail.com",
    phone: "010-0000-0000",
    title: "구매비용은 얼마인가요?",
    comment: "구매하고 싶은데, ㅇㄹㄴㄹㄴㅇㄹ",
  });

  // const getData = ()=>{
  //   const GET_URL = url;
  //   axios.get(GET_URL).then(res=>setData(res.data)).catch(err=>console.log(err.response))
  // }
  //   useEffect(()=>getData(),[])

  const { name, email, phone, title, comment, reply } = data;
  return (
    <Container>
      <HeadSection>
        <T pageType={pageType}>
          <span>1:1 문의</span>관리
        </T>
        <StatusBox>
          <AnswerStatus
            status={isChecked}
            color={pageType === "provider" ? color.blue_4 : color.orange}
          />
        </StatusBox>
      </HeadSection>
      <div>
        <InputSection>
          <Input>
            <SubTitle>이름</SubTitle>
            <InputBox>{name}</InputBox>
          </Input>
          <Input>
            <SubTitle>이메일</SubTitle>
            <InputBox>{email}</InputBox>
          </Input>
          <Input>
            <SubTitle>연락처</SubTitle>
            <InputBox>{phone}</InputBox>
          </Input>
          <Input>
            <SubTitle>제목</SubTitle>
            <InputBox>{title}</InputBox>
          </Input>
          <Input>
            <SubTitle>문의내용</SubTitle>
            <InputBox textarea>{comment}</InputBox>
          </Input>
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
                  reply: e.target.value,
                })
              }
              value={reply}
            />
          </Input>
        </InputSection>
        <BottomSection>
          <ButtonContainer>
            {!isChecked ? (
              <>
                <Btn1>
                  <Btn_left
                    text={"닫기"}
                    onClickHandler={closeModalHandler}
                    size={"12px"}
                    height={"36px"}
                    fontColor={color.black1}
                  />
                </Btn1>
                <Btn2>
                  <Btn_right
                    width={"100%"}
                    background={mainColor}
                    margin={"0px"}
                    height={"36px"}
                    size={"12px"}
                    // onClick={() => nextBtnHandler()}
                  >
                    답변등록하기
                  </Btn_right>
                </Btn2>
              </>
            ) : (
              <>
                <Btn2>
                  <Btn_right
                    width={"100%"}
                    background={mainColor}
                    margin={"0px"}
                    height={"36px"}
                    size={"12px"}
                    // onClick={() => nextBtnHandler()}
                  >
                    확인
                  </Btn_right>
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
export default QuestionDetail;
