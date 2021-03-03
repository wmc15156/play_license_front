import styled from "styled-components";
import Tag from "../Tag/Tag.";
import { useRouter } from "next/router";
import ShowAll from "../Button/ShowAll";

const UpcomingItems = ({ list }) => {
  const router = useRouter();
  const routeHandler = (id) => {
    router.push(`/performances/${id}`);
  };

  return (
    <Container>
      <HeadSection>
        <Title>Coming Soon</Title>
        <ShowAll text={"모두보기"} path={"hot"} />
      </HeadSection>
      <List>
        {list.map((item, idx) => (
          <Item
            key={item.productId}
            onClick={() => routeHandler(item.productId)}
          >
            <ItemImg>
              <Overlay />
              <UpcomingDate>
                <Text1>공개예정</Text1>
                <Text2>
                  {}년 {}월 중
                </Text2>
              </UpcomingDate>
              <img src={item.productImage} alt={item.productTitle} />
            </ItemImg>
            <ItemDesc>
              <TagWrapper>
                {item.productBrokerageConsignment.map((cate, i) => {
                  return (
                    <Tag title={cate.slice(0, 2)} id={item.productId} key={i}>
                      {cate.slice(0, 2)}
                    </Tag>
                  );
                })}
              </TagWrapper>
              <Ptitle>{item.productTitle}</Ptitle>
              <PInfo>
                <div>{item.productCate}</div>
                <Divider>|</Divider>
                <div>{item.productYear}</div>
                <Divider>|</Divider>
                <div>{item.productCompany}</div>
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
`;
const Ptitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 18px;
`;

const ItemDesc = styled.div`
  min-width: 276px;
  display: flex;
  flex-direction: column;
`;

const TagWrapper = styled.div`
  margin-top: 27px;
  display: flex;
  bottom: 100px;
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
  text-transform: uppercase;
`;

const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default UpcomingItems;
