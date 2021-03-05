import styled from "styled-components";
import color from "../../../styles/colors";
import Tag from "../Tag/Tag.";
import { useRouter } from "next/router";
import ShowAll from "../Button/ShowAll";

const HotItems = ({ list }) => {
  const router = useRouter();
  const routeHandler = (id) => {
    router.push(`/performances/${id}`);
  };

  return (
    <Container>
      <HeadSection>
        <Title>HOT</Title>
        <ShowAll text={"모두보기"} path={"hot"} />
      </HeadSection>
      <List>
        {list.map((item) => (
          <Item
            key={item.productId}
            onClick={() => routeHandler(item.productId)}
          >
            <ItemImg>
              <img src={item.productImage} alt={item.productTitle} />
            </ItemImg>
            <ItemDesc>
              <div>{item.productTitle}</div>
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
  position: absolute;
  bottom: 38px;
  color: ${color.black3};
`;
const Ptitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 28px;
  line-height: 18px;
  position: absolute;
  bottom: 73px;
`;

const TagWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 100px;
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
  padding: 0 1rem;
`;

const Title = styled.div`
  font-family: "Gotham Bold";
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
`;

const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 34px;
  align-items: center;
  padding: 0 1rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default HotItems;
