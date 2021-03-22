import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import axios from "axios";
import { useRouter } from "next/router";
import AnswerStatus from "../../component/Tag/AnswerStatus";
import Btn from "../../component/Button/OriginalButton";

import { useState } from "react";

const PL_CheckQnA = ({ data, next }) => {
  const router = useRouter();
  const { adminCheck, name, email, phone, title, comment } = data;

  return (
    <Container>
      <HeadSection>
        <T>
          <span>1:1 문의</span> 자세히보기
        </T>
        <StatusBox>
          <AnswerStatus status={adminCheck} />
        </StatusBox>
      </HeadSection>
      <Divider>
        <Div1 />
      </Divider>
      <Section>
        <Box>
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
              <InputBox textarea>
                {comment.replaceAll(/(?:\r\n|\r|\n)/g, "<br />")}
              </InputBox>
            </Input>
          </InputSection>
        </Box>
        <BottomSection>
          <ButtonContainer>
            <Btn
              width={"100%"}
              background={true}
              margin={"0px"}
              height={"36px"}
              size={"12px"}
              onClick={next}
            >
              확인
            </Btn>
          </ButtonContainer>
        </BottomSection>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
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
    color: ${color.orange};
  }
`;

const StatusBox = styled.div`
  position: absolute;
  left: 0;
`;

const Divider = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`;

const Div1 = styled.div`
  background-color: ${color.yellow};
  border-radius: 100px;
  height: 3px;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 143px;
`;
const Box = styled.div`
  height: 100%;
  border-radius: 14px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  padding: 33px 47px 40px 38px;
  margin-bottom: 30px;
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
  margin-bottom: 35px;
`;
const SubTitle = styled.div`
  width: 140px;
  font-family: "NotoSansCJKkr-Bold";
  line-height: 16px;
  color: ${color.black1};
`;
const InputBox = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  line-height: 16px;
  height: ${(props) => (props.textarea ? "127px" : "auto")};
  color: ${color.black1};
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${color.black5};
  padding: 19px 20px;
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
  margin-top: 30px;
`;
export default PL_CheckQnA;
