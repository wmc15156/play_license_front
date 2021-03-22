import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import useModal from "../../../utils/useModal";
import Btn_left from "../../component/Button/GrayShortBtn";
import Btn_right from "../../component/Button/OriginalButton";
import AlertModal from "../../component/Modal/AlertModal";
import StatusBox from "../../component/Tag/AnswerStatus";

const PL_ModifyQnA = ({ data, next }) => {
  const router = useRouter();
  const { openModal, ModalPortal, closeModal } = useModal();
  const { adminCheck, name, email, phone, title, comment } = data;
  const [isEmpty, setIsEmpty] = useState(false);
  const [inputs, setInputs] = useState({
    name: name,
    email: email,
    phone: phone,
    title: title,
    comment: comment,
  });

  const handleChange = (e) => {
    e.persist();
    setChecked((prevState) => !prevState);
  };

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    // console.log(name, [name], { ...inputs });
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const closeEmptyAlertModal = () => {
    setIsEmpty(false);
    closeModal();
  };
  const modify = () => {
    console.log("1:1문의 수정하기");
    // axios
    //   .post("/question", params)
    //   .then((res) => {
    //     if (res.status === 201) {
    //       setSuccess(true);
    //       openModal();
    //     }
    //   })
    //   .catch((err) => console.error(err));
  };

  const onSubmitHandler = (e) => {
    // console.log({ ...inputs });
    e.preventDefault();
    // if (!isChecked) {
    //   openModal();
    // }
    if (
      !inputs.name ||
      !inputs.email ||
      !inputs.phone ||
      !inputs.title ||
      !inputs.comment
    ) {
      setIsEmpty(true);
      openModal();
    }
    modify();
  };

  return (
    <Container>
      <HeadSection>
        <Title>
          <span>1:1 문의</span> 자세히보기
        </Title>
        <StatusBoxWrapper>
          <StatusBox status={adminCheck} />
        </StatusBoxWrapper>
      </HeadSection>
      <Divider>
        <Div1 />
      </Divider>
      <Section>
        <Box>
          <InputSection>
            <Input>
              <SubTitle>제작사 이름</SubTitle>
              <InputBox
                name="name"
                placeholder="이름을 입력해주세요."
                onChange={inputChangeHandler}
                value={inputs.name}
              />
            </Input>
            <Input>
              <SubTitle>이메일</SubTitle>
              <InputBox
                name="email"
                placeholder="이메일을 입력해주세요."
                onChange={inputChangeHandler}
                value={inputs.email}
              />
            </Input>
            <Input>
              <SubTitle>연락처</SubTitle>
              <InputBox
                name="phone"
                placeholder="연락처를 입력해주세요."
                onChange={inputChangeHandler}
                value={inputs.phone}
              />
            </Input>
            <Input>
              <SubTitle>제목</SubTitle>
              <InputBox
                name="title"
                placeholder="제목을 입력해주세요."
                onChange={inputChangeHandler}
                value={inputs.title}
              />
            </Input>
            <Input>
              <SubTitle>문의내용</SubTitle>
              <TextBox
                name="comment"
                placeholder="문의내용을 입력해주세요."
                onChange={inputChangeHandler}
                value={inputs.comment}
              />
            </Input>
          </InputSection>
        </Box>
        <BottomSection>
          <ButtonContainer>
            <Btn_left
              text={"수정하기"}
              size={"12px"}
              height={"36px"}
              onClickHandler={onSubmitHandler}
              fontColor={color.black2}
            />
            <Margin />
            <Btn_right
              width={"100%"}
              margin={"0"}
              background={true}
              height={"36px"}
              size={"12px"}
              onClick={next}
            >
              확인
            </Btn_right>
          </ButtonContainer>
        </BottomSection>
        <ModalPortal>
          {!isEmpty && (
            <AlertModal
              text={"내용을 모두 입력해주세요"}
              onClickBtn={closeEmptyAlertModal}
            />
          )}
        </ModalPortal>
      </Section>
    </Container>
  );
};

const Container = styled.div``;

const HeadSection = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 24px;
  font-family: "NotoSansCJKkr-Bold";

  & > span {
    color: ${color.orange};
  }
`;
const StatusBoxWrapper = styled.div`
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
  margin-bottom: 82px;
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
  &:last-child {
    margin-bottom: 0;
  }
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
  width: calc(100% - 40px);
  border-radius: 8px;
  border: 1px solid ${color.black5};
  padding: 13px 20px;
  ::placeholder {
    color: ${color.black4};
  }
`;

const TextBox = styled.textarea`
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;
  width: calc(100% - 40px);
  height: 89px;
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
const Margin = styled.div`
  width: 20px;
`;

export default PL_ModifyQnA;
