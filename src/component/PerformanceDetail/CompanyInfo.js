import styled from "styled-components";
import color from "../../../styles/colors";

const CompanyInfo = ({ item }) => {
  return (
    <Container>
      <Title>
        <Icon />
        <Text>{item.company} 제작</Text>
      </Title>
      <Desc>{item.description}</Desc>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
`;
const Icon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${color.gray1};
`;
const Text = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  letter-spacing: -0.5px;
  line-height: 16px;
`;

const Desc = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  line-height: 24px;
`;

export default CompanyInfo;
