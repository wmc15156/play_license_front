import styled from "styled-components";
import Btn1 from "../Button/GrayShortBtn";
import Btn2 from "../Button/OrangeShortBtn";
import AnswerStatus from "../Tag/AnswerStatus";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

const Qna_modify = ({ details, onClickHandler }) => {
  const router = useRouter();
  // console.log(router.pathname);
  const GET_URL = `/question/${details.questionId}`;
  // console.log(router.query, ">??");
  // const { data: userData, error, mutate, revalidate } = useSWR(
  //   `/question/${details.questionId}`,
  // `/question/${router.query.id}`,
  // fetcher
  // );
  // console.log("userData", userData);

  // const getDetail = () => {
  //   console.log(GET_URL);
  //   axios.get(GET_URL).then((res) => {
  //     console.log(res);
  //     // setDetail(res.data);
  //   });
  // };

  // useEffect(() => {
  //   getDetail();
  // }, []);

  // console.log(userData, ">?");
  // const [data, setData] = useState({
  //   name: details.name,
  //   phone: details.phone,
  //   email: details.email,
  //   title: details.title,
  //   comment: details.comment,
  // });
  // const [titleInput, setTitleInput] = useState(details.title);
  // const [commentInput, setCommentInput] = useState(details.comment);

  // const inputTitleHandler = (e) => {
  //   setTitleInput(e.target.value);
  // };
  // const inputCommentHandler = (e) => {
  //   setCommentInput(e.target.value);
  // };

  const modifyHandler = () => {
    const PATCH_URL = `/question/${router.query.id}`;
    const params = { ...data, title: titleInput, comment: commentInput };
    axios.patch(PATCH_URL, params).then((res) => {
      if (res.status === 200) {
        router.push("/mypage");
      }
    });
  };

  // useEffect(() => setData(details), []);

  return (
    <Container>
      <HeadSection>
        <T>1:1 문의</T>
        <StatusBox>
          {/* <AnswerStatus status={details.isChecked} /> */}
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
              {/* <InputBox name="name" value={details.name}></InputBox> */}
            </Input>
            <Input>
              <SubTitle>이메일</SubTitle>
              {/* <InputBox name="email" value={details.email}></InputBox> */}
            </Input>
            <Input>
              <SubTitle>연락처</SubTitle>
              {/* <InputBox name="phone" value={details.phone}></InputBox> */}
            </Input>
            <Input>
              <SubTitle>제목</SubTitle>
              <InputBox
                name="title"
                // value={titleInput}
                // value={details.title}
                // onChange={inputTitleHandler}
              ></InputBox>
            </Input>
            <Input>
              <SubTitle>문의내용</SubTitle>
              <TextBox
                name="comment"
                // value={commentInput}
                // value={details.comment}
                // onChange={inputCommentHandler}
              ></TextBox>
            </Input>
          </InputSection>
        </Box>
        <BtnSection>
          <Wrapper1>
            <Btn1 text={"수정하기"} onClickHandler={modifyHandler} />
          </Wrapper1>
          <Wrapper2>
            <Btn2 text={"확인"} onClickHandler={onClickHandler} />
          </Wrapper2>
        </BtnSection>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  /* background-color: #fff; */
  /* padding: 40px;
  z-index: 11;
  border-radius: 14px; */
`;

const HeadSection = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 31px;
  align-items: center;
`;

const T = styled.div`
  font-size: 36px;
  line-height: 55px;

  & > span {
    /* color: #ff6f69; */
  }
`;

const StatusBox = styled.div`
  margin-left: auto;
`;

const Divider = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 89px;
`;

const Div1 = styled.div`
  background-color: #ffcc5c;
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
  color: #0d0d0c;
`;
const InputBox = styled.input`
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;
  color: #9e9e9e;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 19px 20px;
  ::placeholder {
    color: #0d0d0c;
    opacity: 0.4;
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
  border: 1px solid #e6e6e6;
  resize: none;
  padding: 19px 20px;
  ::placeholder {
    color: #0d0d0c;
    opacity: 0.4;
  }
  &:focus {
    outline: none;
  }
`;

const BtnSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Wrapper1 = styled.div`
  width: 47.5%;
`;
const Wrapper2 = styled.div`
  width: 47.5%;
`;

export default Qna_modify;
