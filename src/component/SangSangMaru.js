import styled from "styled-components";
import color from "../../styles/colors";

const SangSangMaru = () => {
  return (
    <Container>
      <Title>
        <Icon />
        <Text>상상마루 제작</Text>
      </Title>
      <Desc>
        (주)문화공작소 상상마루는 어린이와 가족을 위한 문화예술분야
        소셜벤처기업으로 '우리이야기로 세계를 감동시키는 문화 상상집단'을 모토로
        하고 있습니다.
      </Desc>
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

export default SangSangMaru;
