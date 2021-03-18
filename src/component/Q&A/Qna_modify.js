import styled from "styled-components";
import color from "../../../styles/colors";
import Btn1 from "../Button/GrayShortBtn";
import Btn2 from "../Button/OrangeShortBtn";
import AnswerStatus from "../Tag/AnswerStatus";
import { useRouter } from "next/router";
import { memo, useCallback, useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import useModal from "../../../utils/useModal";
import AlertModal from "../Modal/AlertModal";

const Qna_modify = ({ onClickHandler }) => {
  const { openModal, closeModal, ModalPortal } = useModal();
  const router = useRouter();
  const { data } = useSWR(`/question/${router.query.id}`, fetcher);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setComment(data.comment);
    }
  }, [(data && data.title) || (data && data.comment)]);

  const [title, setTitle] = useState(data ? data.title : null);
  const [comment, setComment] = useState(data ? data.comment : null);

  const inputTitleHandler = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [title]
  );

  const inputCommentHandler = useCallback(
    (e) => {
      setComment(e.target.value);
    },
    [comment]
  );

  const modifyHandler = () => {
    const PATCH_URL = `/question/${router.query.id}`;
    const params = { ...data, title, comment };
    axios
      .patch(PATCH_URL, params)
      .then((res) => {
        if (res.status === 200) {
          router.push("/mypage/03");
        }
      })
      .catch((err) => openModal());
  };

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
                  <InputBox name="name" value={data.name} />
                </Input>
                <Input>
                  <SubTitle>이메일</SubTitle>
                  <InputBox name="email" value={data.email} />
                </Input>
                <Input>
                  <SubTitle>연락처</SubTitle>
                  <InputBox name="phone" value={data.phone} />
                </Input>
                <Input>
                  <SubTitle>제목</SubTitle>
                  <InputBox
                    name="title"
                    value={title}
                    onChange={inputTitleHandler}
                  />
                </Input>
                <Input>
                  <SubTitle>문의내용</SubTitle>
                  <TextBox
                    name="comment"
                    // value={commentInput}
                    value={comment}
                    onChange={inputCommentHandler}
                  />
                </Input>
              </InputSection>
            </Box>
            <BtnSection>
              <Wrapper1>
                <Btn1
                  text={"수정하기"}
                  onClickHandler={modifyHandler}
                  fontColor={color.black1}
                />
              </Wrapper1>
              <Wrapper2>
                <Btn2 text={"확인"} onClickHandler={onClickHandler} />
              </Wrapper2>
            </BtnSection>
          </Section>
          <ModalPortal>
            <AlertModal
              text={`수정에 실패했습니다. 다시 시도해주세요.`}
              onClickBtn={closeModal}
            />
          </ModalPortal>
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
const InputBox = styled.input`
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
  }
`;

const TextBox = styled.textarea`
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;
  color: ${color.black1};
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

export default memo(Qna_modify);
