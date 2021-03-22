import styled from "styled-components";
import color from "../../../styles/colors";
import Btn from "../Button/OriginalButton";
import AnswerStatus from "../Tag/AnswerStatus";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

const Qna = ({ onClickHandler }) => {
  const { data } = useSWR(`/question/${router.query.id}`, fetcher);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setComment(data.comment);
    }
  }, [(data && data.title) || (data && data.comment)]);

  const [title, setTitle] = useState(data ? data.title : null);
  const [comment, setComment] = useState(data ? data.comment : null);

  return (
    <>
      {data && (
        <Container>
          <HeadSection>
            <T>
              <span>1:1 문의</span> 자세히보기
            </T>
            <StatusBox>
              <AnswerStatus status={data.adminCheck} />
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
                  <InputBox>{data.name}</InputBox>
                </Input>
                <Input>
                  <SubTitle>이메일</SubTitle>
                  <InputBox>{data.email}</InputBox>
                </Input>
                <Input>
                  <SubTitle>연락처</SubTitle>
                  <InputBox>{data.phone}</InputBox>
                </Input>
                <Input>
                  <SubTitle>제목</SubTitle>
                  <InputBox>{data.title}</InputBox>
                </Input>
                <Input>
                  <SubTitle>문의내용</SubTitle>
                  <InputBox>{data.comment}</InputBox>
                </Input>
                <Input>
                  <SubTitle>답변내용</SubTitle>
                  <InputBox_resp>{data.comment}</InputBox_resp>
                </Input>
              </InputSection>
            </Box>
            <Btn
              width={"100%"}
              background={true}
              margin={"0px"}
              height={"60px"}
              size={"21px"}
              onClick={onClickHandler}
            >
              확인
            </Btn>
          </Section>
        </Container>
      )}
    </>
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
  right: 0;
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
  margin-bottom: 43px;
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
  font-size: 16px;
  line-height: 16px;
  color: ${color.black1};
`;
const InputBox = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;
  color: ${color.black1};
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${color.black5};
  padding: 19px 20px;
  ::placeholder {
    color: ${color.black4};
    opacity: 0.4;
  }
`;

const InputBox_resp = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;
  color: ${color.black2};
  width: 100%;
  border-radius: 8px;
  background-color: ${color.gray1};
  padding: 19px 20px;
  ::placeholder {
    color: ${color.black4};
  }
`;

const TextBox = styled.textarea`
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;
  color: #9e9e9e;
  width: 100%;
  height: 262px;
  border-radius: 8px;
  border: 1px solid ${color.black5};
  resize: none;
  padding: 19px 20px;
  ::placeholder {
    color: ${color.black4};
  }
  &:focus {
    outline: none;
  }
`;

export default memo(Qna);
