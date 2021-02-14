import styled from "styled-components";
import KeyWord from "./KeyWord";

const Category = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
`;

const Divider = styled.div`
  margin: 0 6px;
`;

const PInfo = styled.div`
  display: flex;
  font-family: "NotoSansCJKkr-Regular";
  line-height: 14px;
`;
const Ptitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 12px;
`;

const ItemDesc = styled.div`
  min-width: 276px;
  display: flex;
  flex-direction: column;
`;

const ItemImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);

  & > img {
    min-width: 276px;
    width: 100%;
    height: auto;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 276px;
  width: 100%;
  height: auto;
  margin-right: 5%;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  flex-wrap: wrap;
`;

const Title = styled.div`
  font-family: "Gotham Bold";
  font-size: 24px;
  line-height: 48px;
  margin-bottom: 23px;
  text-transform: uppercase;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  max-width: 1024px;
  margin: 0 auto;
`;

const ListItems = ({ list }) => {
  const keywordArr = ["a", "공연", "c"];
  return (
    <Container>
      <Title>새로 등록된 작품 {list.length}개</Title>
      <List>
        {list.map((item, idx) => (
          <Item key={idx}>
            <ItemImg>
              <img src={item.image_link} alt={item.name} />
            </ItemImg>
            <ItemDesc>
              <Category>
                <KeyWord words={keywordArr} />
              </Category>
              <Ptitle>title:</Ptitle>
              <PInfo>
                <div>데{}</div>
                <Divider>|</Divider>
                <div>이{}</div>
                <Divider>|</Divider>
                <div>터{}</div>
              </PInfo>
            </ItemDesc>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default ListItems;
