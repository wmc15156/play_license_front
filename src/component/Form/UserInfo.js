import styled from "styled-components";

const UserInfo = () => {
  return (
    <Container>
      <HeadSection>
        <Title>문의자 정보</Title>
        <p>
          실무자 정보를 입력해주세요. 가입자가 실무자가 아닐 경우, 정보를 지우고
          입력해주세요.
        </p>
      </HeadSection>
      <InputSection>
        <Input>
          <SubTitle>이름</SubTitle>
          <InputBox />
        </Input>
        <Input>
          <SubTitle>연락처</SubTitle>
          <InputBox />
        </Input>
        <Input>
          <SubTitle>남기실 말씀</SubTitle>
          <InputBox />
        </Input>
      </InputSection>
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  border-radius: 14px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  padding: 33px 47px 40px 38px;
`;
const HeadSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 39px;
  & > p {
    margin-top: 17px;
    font-family: "NotoSansCJKkr-Regular";
    font-size: 12px;
    line-height: 12px;
    color: #4e4e4e;
  }
`;
const Title = styled.div`
  color: #ff6f69;
  font-family: "NotoSansCJKkr-Bold";
  line-height: 24px;
  font-size: 24px;
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

export default UserInfo;
