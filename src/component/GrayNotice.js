import styled from "styled-components";

const Notice = ({ title, body1, body2 }) => {
  return (
    <Container>
      <Box>
        <Title>{title}</Title>
        <Body>
          {body1}
          <br />
          {body2}
        </Body>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 28px 47px 28px 37px;
`;
const Box = styled.div`
  width: 100%;
`;
const Title = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  line-height: 14px;
  color: #0d0d0c;
  margin-bottom: 9px;
`;
const Body = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  line-height: 26px;
  color: #0d0d0c;
`;

export default Notice;
