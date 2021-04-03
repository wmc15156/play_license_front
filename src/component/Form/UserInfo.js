import styled from "styled-components";
import color from "../../../styles/colors";
import BasicInput from "../BasicInput/BasicInputColor";

const UserInfo = ({ userInfoState, userInfoStateHandler, readOnly }) => {
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
          <BasicInput
            height={"40px"}
            readOnly={readOnly}
            width={"100%"}
            placeholder={"이름을 적어주세요"}
            onChange={(e) =>
              userInfoStateHandler({ ...userInfoState, name: e.target.value })
            }
            value={userInfoState.name}
          />
        </Input>
        <Input>
          <SubTitle>연락처</SubTitle>
          <BasicInput
            height={"40px"}
            readOnly={readOnly}
            width={"100%"}
            placeholder={"연락처를 적어주세요"}
            onChange={(e) =>
              userInfoStateHandler({ ...userInfoState, phone: e.target.value })
            }
            value={userInfoState.phone}
          />
        </Input>
        <Input>
          <SubTitle>남기실 말씀</SubTitle>
          <BasicInput
            height={"40px"}
            readOnly={readOnly}
            width={"100%"}
            placeholder={"자유롭게 입력해주세요"}
            onChange={(e) =>
              userInfoStateHandler({
                ...userInfoState,
                comment: e.target.value,
              })
            }
            background={color.gray1}
            value={userInfoState.comment}
          />
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
  margin-bottom: 34px;
  & > p {
    margin: 0;
    margin-top: 14px;
    font-family: "NotoSansCJKkr-Regular";
    font-size: 12px;
    line-height: 12px;
    color: ${color.black3};
  }
`;
const Title = styled.div`
  color: ${color.orange};
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
  margin-bottom: 28px;
`;
const SubTitle = styled.div`
  width: 140px;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  line-height: 16px;
`;
const InputBox = styled.input`
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: 1px solid ${color.black5};
`;

export default UserInfo;
