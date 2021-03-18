import styled from "styled-components";
import color from "../../styles/colors";

const Notice = ({ title, body1, body2, fontColor }) => {
  return (
    <Container>
      <Box>
        <Title>{title}</Title>
        <Body color={fontColor}>
          {body1}
          <br />
          {body2}
        </Body>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${color.gray1};
  border-radius: 8px;
  padding: 28px 47px 28px 37px;
`;
const Box = styled.div`
  width: 100%;
`;
const Title = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  line-height: 14px;
  color: ${color.black1};
  margin-bottom: 9px;
`;
const Body = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  line-height: 26px;
  color: ${(props) => (props.color ? props.color : color.black1)};
`;

export default Notice;
