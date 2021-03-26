import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState } from "react";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";

import Navi from "../../../src/component/Nav/Navigation";
import LogoBar from "../../../src/component/Nav/LogoBar";
import Notice from "../../../src/component/GrayNotice";
import CheckBoxWrapper from "../../../src/component/CheckBoxWrapper/CheckBoxWrapper";
import Btn_left from "../../../src/component/Button/GrayShortBtn";
import Btn_right from "../../../src/component/Button/OriginalButton";
import useModal from "../../../utils/useModal";
import AlertModal from "../../../src/component/Modal/AlertModal";

const notice = {
  title: "안내사항",
  body1: `Play License (이하 “관리자”)는 이용자의 동의를 기반으로 개인정보를 수집·이용 및 제공하고 있으며, 이용자의 권리 (개인정보자기결정권)를 적극적으로 보장합니다. 회사는 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다.`,
};

const PL_RegistQuestion = () => {
  const router = useRouter();
  const { openModal, ModalPortal, closeModal } = useModal();
  const [isChecked, setChecked] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    comment: "",
  });
  const { name, email, phone, title, comment } = inputs;

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

  const params = {
    name: name,
    email: email,
    phone: phone,
    title: title,
    comment: comment,
    isChecked: isChecked,
  };

  const next = () => {
    router.push("/provider/question");
  };

  const send = () => {
    console.log("1:1문의 남기기", params);
    axios
      .post("/question/provider", params)
      .then((res) => {
        // if (res.status === 201) {
        setSuccess(true);
        openModal();
        // }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const onSubmitHandler = (e) => {
    // console.log({ ...inputs });
    e.preventDefault();
    // if (!isChecked) {
    //   openModal();
    // }
    if (
      !isChecked ||
      !inputs.name ||
      !inputs.email ||
      !inputs.phone ||
      !inputs.title ||
      !inputs.comment
    ) {
      openModal();
    }
    if (isChecked) {
      send();
    }
  };

  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />
        <HeadSection>
          <T>
            <span>1:1 문의</span> 남기기
          </T>
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
                />
              </Input>
              <Input>
                <SubTitle>이메일</SubTitle>
                <InputBox
                  name="email"
                  placeholder="이메일을 입력해주세요."
                  onChange={inputChangeHandler}
                />
              </Input>
              <Input>
                <SubTitle>연락처</SubTitle>
                <InputBox
                  name="phone"
                  placeholder="연락처를 입력해주세요."
                  onChange={inputChangeHandler}
                />
              </Input>
              <Input>
                <SubTitle>제목</SubTitle>
                <InputBox
                  name="title"
                  placeholder="제목을 입력해주세요."
                  onChange={inputChangeHandler}
                />
              </Input>
              <Input>
                <SubTitle>문의내용</SubTitle>
                <TextBox
                  name="comment"
                  placeholder="문의내용을 입력해주세요."
                  onChange={inputChangeHandler}
                />
              </Input>
            </InputSection>
          </Box>
          <Notice
            title={notice.title}
            body1={notice.body1}
            fontColor={color.black2}
          />
          <BottomSection>
            <CheckSection>
              <CheckBoxWrapper
                width={"24px"}
                height={"24px"}
                onChange={handleChange}
                value={isChecked ? color.orange : false}
              >
                <FaCheck size={"15px"} color={isChecked ? "white" : "gray"} />
              </CheckBoxWrapper>
              <div>개인정보 수집 및 이용 동의</div>
            </CheckSection>
            <ButtonContainer>
              <Btn_left
                text={"취소"}
                size={"12px"}
                height={"36px"}
                onClickHandler={() => router.push("/provider/question")}
                fontColor={color.black2}
              />
              <Margin />
              <Btn_right
                width={"100%"}
                margin={"0"}
                background={true}
                height={"36px"}
                size={"12px"}
                onClick={onSubmitHandler}
              >
                문의 등록하기
              </Btn_right>
            </ButtonContainer>
          </BottomSection>
          <ModalPortal>
            {!isChecked && (
              <AlertModal
                text={"내용을 모두 입력해주세요"}
                onClickBtn={closeModal}
              />
            )}
            {isChecked && isSuccess && (
              <AlertModal
                text={"문의가 정상적으로 등록되었습니다"}
                onClickBtn={next}
              />
            )}
          </ModalPortal>
        </Section>
      </BodyContainer>
    </Container>
  );
};

const Container = styled.div`
  ${PageContainer};
`;

const NavContainer = styled.div`
  width: 220px;
`;

const BodyContainer = styled.div`
  flex-direction: column;
  ${PageContentContainer};
  height: 100%;
`;

const HeadSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;
`;

const T = styled.div`
  font-size: 24px;
  line-height: 24px;
  font-family: "NotoSansCJKkr-Bold";

  & > span {
    color: ${color.orange};
  }
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
  margin-bottom: 40px;
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
  width: 100%;
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

const BottomSection = styled.div`
  width: 100%;
  display: flex;
`;

const CheckSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
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

export default PL_RegistQuestion;
