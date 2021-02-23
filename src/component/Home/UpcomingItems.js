import styled from "styled-components";
import Tag from "../Tag/Tag.";

const UpcomingItems = ({ list }) => {
  return (
    <Container>
      <Title>Coming Soon</Title>
      <List>
        {list.map((item, idx) => (
          <Item key={idx}>
            <ItemImg>
              <Overlay />
              <UpcomingDate>
                <Text1>공개예정</Text1>
                <Text2>
                  {}년 {}월 중
                </Text2>
              </UpcomingDate>
              <img src={item.image_link} alt={item.name} />
            </ItemImg>
            <ItemDesc>
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
  position: relative;

  & > img {
    width: 276px;
    height: auto;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  z-index: 10;
  background-color: black;
  opacity: 0.6;
  position: absolute;
`;

const UpcomingDate = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: #ffffff;
  z-index: 11;
`;

const Text1 = styled.p`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 24px;
  letter-spacing: -0.5px;
  line-height: 24px;
`;
const Text2 = styled.p`
  font-family: "NotoSansCJKkr-Regular";
  font-size: 16px;
  letter-spacing: -0.5px;
  line-height: 16px;
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
  overflow: hidden;
`;

export default UpcomingItems;
