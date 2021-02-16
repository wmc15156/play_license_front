import styled from "styled-components";

const About = ({ item }) => {
  console.log(item, ">?>?>?><?><");
  return (
    <Container>
      <Box1>
        <SubTitle>
          <Sub1>기획의도</Sub1>
          <Sub2>시놉시스</Sub2>
        </SubTitle>
        <Text>
          <T1>{item.description}</T1>
          <T2>{item.description}</T2>
        </Text>
      </Box1>
      <Box2>
        <SubTitle>
          <Sub1>상세정보</Sub1>
        </SubTitle>
        <Text_L>
          <T1>{item.description}</T1>
        </Text_L>
        <Text_R>
          <T1>{item.description}</T1>
        </Text_R>
      </Box2>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box1 = styled.div`
  display: flex;
  width: 100%;
  height: 483px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  margin-bottom: 39px;

  padding: 73px 6%;
`;
const Box2 = styled.div`
  display: flex;
  width: 100%;
  height: 483px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  margin-bottom: 139px;
  padding: 90px 6%;
`;
const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 318px;
  height: 100%;
  border-right: 1px solid gray;
  padding-right: 10%;
  /* padding-left: 4%; */
`;

const Sub1 = styled.div`
  width: 100%;
`;
const Sub2 = styled.div`
  width: 100%;
`;
const Text = styled.div`
  /* margin-left: auto; */
  max-width: 810px;

  padding-left: 1.5%;
`;
const Text_L = styled.div`
  padding-left: 1.5%;
  max-width: 270px;
  border-right: 1px solid gray;
`;
const Text_R = styled.div``;
const T1 = styled.div``;
const T2 = styled.div``;
export default About;
