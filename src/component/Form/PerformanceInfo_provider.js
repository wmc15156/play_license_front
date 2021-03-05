import styled from "styled-components";
import color from "../../../styles/colors";

const AboutPerformance = () => {
  return (
    <Container>
      <HeadSection>
        <Title>공연 정보</Title>
        <p>올릴 공연에 대한 정보를 알려주세요.</p>
      </HeadSection>
      <InputSection>
        <Input>
          <SubTitle>기획내용</SubTitle>
          <InputBox />
        </Input>
        <Input>
          <SubTitle>공연일정</SubTitle>
          <InputBox />
        </Input>
        <Input>
          <SubTitle>공연회차</SubTitle>
          <InputBox />
        </Input>
        <Input>
          <SubTitle>공연장소</SubTitle>
          <div>
            <div>
              <SelectBox />
              <InputBox />
            </div>
            <InputBox />
          </div>
        </Input>
        <Input>
          <SubTitle>티켓가격</SubTitle>
          <InputBox />
        </Input>
        <Input>
          <SubTitle>각색여부</SubTitle>
          <InputBox />
        </Input>
        <Input>
          <SubTitle>각색범위</SubTitle>
          <InputBox />
        </Input>
        <Input>
          <SubTitle>필요자료(필수)</SubTitle>
          <InputBox />
        </Input>
        <Input>
          <SubTitle>필요자료(유료)</SubTitle>
          <InputBox />
        </Input>
        <Input>
          <SubTitle>공연참여인원</SubTitle>
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
  margin-bottom: 35px;
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
const SelectBox = styled.select``;
export default AboutPerformance;
