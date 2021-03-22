import styled from "styled-components";
import color from "../../../styles/colors";
import BasicInput from "../../component/BasicInput/BasicInputColor";

const ProviderInfo = ({ userInfo, setUserInfo, readOnly }) => {
  return (
    <Container>
      <HeadSection>
        <Title>제작사 정보</Title>
        <p>등록하시는 제작사에 대한 정보를 알려주세요.</p>
      </HeadSection>
      <InputSection>
        <Input>
          <SubTitle>제작사 이름</SubTitle>
          <BasicInput
            readOnly={readOnly}
            width={"100%"}
            placeholder={"제작사 이름을 적어주세요"}
            fontColor={color.black2}
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                groupName: e.target.value,
              })
            }
            value={userInfo.groupName}
          />
        </Input>
        <Input>
          <SubTitle>제작사 설명</SubTitle>
          <BasicInput
            readOnly={readOnly}
            width={"100%"}
            placeholder={"제작사 설명을 적어주세요"}
            height={"80px"}
            background={color.gray1}
            fontColor={color.black2}
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                introduction: e.target.value,
              })
            }
            value={userInfo.introduction}
          />
        </Input>
        <Input>
          <SubTitle>실무자 이름</SubTitle>
          <BasicInput
            readOnly={readOnly}
            width={"100%"}
            placeholder={"실무자 이름을 적어주세요"}
            fontColor={color.black2}
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                name: e.target.value,
              })
            }
            value={userInfo.name}
          />
        </Input>
        <Input>
          <SubTitle>실무자 연락처</SubTitle>
          <BasicInput
            readOnly={readOnly}
            width={"100%"}
            placeholder={"실무자 연락처를 적어주세요"}
            fontColor={color.black2}
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                phone: e.target.value,
              })
            }
            value={userInfo.phone}
          />
        </Input>
      </InputSection>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 14px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  padding: 33px 47px 40px 38px;
  margin-bottom: 30px;
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
  line-height: 18px;
  font-size: 18px;
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

export default ProviderInfo;
