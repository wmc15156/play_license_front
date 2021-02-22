import styled from "styled-components";
import Tag from "../Tag/Tag.";

const HotItems = ({ list }) => {
  const keywordArr = ["a", "공연", "c"];
  return (
    <Container>
      <Title>HOT</Title>
      <List>
        {list.map((item, idx) => (
          <Item key={idx}>
            <ItemImg>
              <img src={item.image_link} alt={item.name} />
            </ItemImg>
            <ItemDesc>
              <div>description: {item.name}</div>
              <div>
                {/* {item.brokerageConsignments.map((cate, i) => {
                  return (
                    <Tag title={cate} id={item.id}>
                      {cate}
                    </Tag>
                  );
                })} */}
              </div>
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

const Divider = styled.div`
  margin: 0 6px;
`;

const PInfo = styled.div`
  display: flex;
  font-family: "NotoSansCJKkr-Regular";
  line-height: 14px;
  position: absolute;
  bottom: 33px;
`;
const Ptitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 28px;
  line-height: 18px;
  position: absolute;
  bottom: 54px;
`;

const ItemDesc = styled.div`
  min-width: 241px;
  display: flex;
  flex-direction: column;
  padding: 33px;
  position: relative;
`;

const ItemImg = styled.div`
  width: 100%;
  height: 100%;
  & > img {
    border-right: 1px solid gray;
    width: 276px;
    height: auto;
  }
`;

const Item = styled.li`
  display: flex;
  max-width: 583px;
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
  margin-right: 5%;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Title = styled.div`
  font-family: "Gotham Bold";
  font-size: 24px;
  line-height: 48px;
  margin-bottom: 23px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 116px;
`;

export default HotItems;
