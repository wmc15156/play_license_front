import styled from "styled-components";
import color from "../../../styles/colors";
import Btn from "../Button/SignUpButton";
import AnswerStatus from "../Tag/AnswerStatus";

const Qna = ({ details, onClickHandler }) => {
  return (
    <Container>
      <HeadSection>
        <T>1:1 문의</T>
        <StatusBox>
          <AnswerStatus status={details.adminCheck} />
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
              <InputBox>{details.name}</InputBox>
            </Input>
            <Input>
              <SubTitle>이메일</SubTitle>
              <InputBox>{details.email}</InputBox>
            </Input>
            <Input>
              <SubTitle>연락처</SubTitle>
              <InputBox>{details.phone}</InputBox>
            </Input>
            <Input>
              <SubTitle>제목</SubTitle>
              <InputBox>{details.title}</InputBox>
            </Input>
            <Input>
              <SubTitle>문의내용</SubTitle>
              <InputBox>{details.comment}</InputBox>
            </Input>
            <Input>
              <SubTitle>답변내용</SubTitle>
              <InputBox_resp>{details.comment}</InputBox_resp>
            </Input>
          </InputSection>
        </Box>
        <Btn text={"확인"} onClickHandler={onClickHandler} />
      </Section>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  /* background-color: #fff;
  padding: 40px;
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
    color: ${color.orange};
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
  color: #0d0d0c;
`;
const InputBox = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;
  color: #9e9e9e;
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
  color: #9e9e9e;
  width: 100%;
  border-radius: 8px;
  background-color: ${color.gray1};
  padding: 19px 20px;
  ::placeholder {
    color: ${color.black4};
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
  border: 1px solid ${color.black5};
  resize: none;
  padding: 19px 20px;
  ::placeholder {
    color: ${color.black4};
    opacity: 0.4;
  }
  &:focus {
    outline: none;
  }
`;

export default Qna;
