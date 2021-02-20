import styled from "styled-components";
import Notice from "../../src/component/GrayNotice";
import Btn from "../../src/component/Button/SignUpButton";
import { FaCheck } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import CheckBox from "../../src/component/CheckBox";
import useModal from "../../utils/useModal";
import AlertModal from "../../src/component/Modal/AlertModal";

const notice = {
  title: "안내사항",
  body1: `Play License (이하 “관리자”)는 이용자의 동의를 기반으로 개인정보를 수집·이용 및 제공하고 있으며, 이용자의 권리 (개인정보자기결정권)를 적극적으로 보장합니다. 회사는 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다.`,
};

const RegistQ = () => {
  const router = useRouter();
  const { openModal, ModalPortal, closeModal } = useModal();
  const [isChecked, setChecked] = useState(false);
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
    router.push("/mypage");
  };

  const send = () => {
    axios
      .post("https://api.shortlysoftware.com/api/question", params)
      .then((res) => {
        if (res.status === 201) {
          console.log(res, "??");
          next();
        }
      })
      .catch((err) => console.error(err));
  };

  const onSubmitHandler = (e) => {
    // console.log({ ...inputs });
    e.preventDefault();
    if (!isChecked) {
      // alert("개인정보 수집 및 이용에 동의해주세요.");
      openModal();
      return;
    } else if (
      !inputs.name ||
      !inputs.email ||
      !inputs.phone ||
      !inputs.title ||
      !inputs.comment
    ) {
      openModal();
      return;
      // alert(`내용을 모두 입력해주세요`);
    }
    send();
  };

  return (
    <Container>
      <HeadSection>
        <T>1:1 문의 남기기</T>
      </HeadSection>
      <Divider>
        <Div1 />
      </Divider>
      <Section>
        <Box>
          <InputSection>
            <Input>
              <SubTitle>이름</SubTitle>
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
        <Notice title={notice.title} body1={notice.body1} />
        <CheckSection>
          <CheckBtn checked={isChecked} onClick={handleChange} />
          <CheckBox checked={isChecked} handleChange={handleChange} />
          <Check>안내사항을 확인했습니다</Check>
        </CheckSection>
        <Btn text={"문의 등록하기"} onClickHandler={onSubmitHandler} />
        <ModalPortal>
          <AlertModal
            text={"내용을 모두 입력해주세요"}
            onClickBtn={closeModal}
          />
        </ModalPortal>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  max-width: 790px;
  padding: 0 1rem;
  margin: 0 auto;
  font-family: "NotoSansCJKkr-Medium";
`;

const HeadSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 31px;
`;

const T = styled.div`
  font-size: 36px;
  line-height: 55px;

  & > span {
    color: #ff6f69;
  }
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

const CheckSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 33px;
  margin-bottom: 44px;
`;

const CheckBtn = styled(FaCheck)`
  background-color: #e85377;
  width: 18px;
  height: 18px;
  font-size: 15px;
  border: 10px;
  font-weight: bolder;

  cursor: pointer;
  color: ${(props) => {
    /* console.log(props, "???"); */
    props.isChecked ? "#ffffff" : "#e85377";
  }};
`;

const Check = styled.span``;
export default RegistQ;
