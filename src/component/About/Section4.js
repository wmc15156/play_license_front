import styled from "styled-components";
import color from "../../../styles/colors";

const Section4 = () => {
  const list = ["", "", "", "", "", "", "", "", "", ""];

  return (
    <Container>
      <Title>
        PLAY LICENSE <span>와 함께하는 파트너사</span>
      </Title>
      <List>
        {list.map((item, i) => {
          return <Item key={i}>{item}</Item>;
        })}
      </List>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 100px;
  margin-top: 100px;
`;

const Title = styled.div`
  font-family: "FreightSansBlackSC";
  font-size: 3vw;
  line-height: 3.3vw;
  letter-spacing: 1.4px;

  & > span {
    font-family: "NotoSansCJKkr-Regular";
    font-size: 2.5vw;
    line-height: 2.5vw;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const Item = styled.li`
  flex: 1 0 17%;
  height: 50px;
  background-color: ${color.gray1};
  border-radius: 8px;
  margin-right: 3%;
  margin-top: 3%;
  &:nth-child(5n) {
    margin-right: 0;
  }
`;

export default Section4;
