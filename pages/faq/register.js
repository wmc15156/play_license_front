import styled from "styled-components";
import Notice from "../../src/component/GrayNotice";
import Btn from "../../src/component/Button/SignUpButton";

const RegistQ = () => {
  const notice = {
    title: "안내사항",
    body1: `Play License (이하 “관리자”)는 이용자의 동의를 기반으로 개인정보를 수집·이용 및 제공하고 있으며, 이용자의 권리 (개인정보자기결정권)를 적극적으로 보장합니다. 회사는 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다.`,
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
              <InputBox />
            </Input>
            <Input>
              <SubTitle>이메일</SubTitle>
              <InputBox />
            </Input>
            <Input>
              <SubTitle>연락처</SubTitle>
              <InputBox />
            </Input>
            <Input>
              <SubTitle>제목</SubTitle>
              <InputBox />
            </Input>
            <Input>
              <SubTitle>문의내용</SubTitle>
              <InputBox />
            </Input>
          </InputSection>
        </Box>
        <Notice title={notice.title} body1={notice.body1} />
        <Check>안내사항을 확인했습니다</Check>
        <Btn text={"문의 등록하기"} />
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

const Section = styled.div``;
const Box = styled.div`
  height: 100%;
  border-radius: 14px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  padding: 33px 47px 40px 38px;
  margin-bottom: 43px;
`;
const Check = styled.div`
  margin-top: 33px;
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
  height: 56px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
`;
export default RegistQ;
