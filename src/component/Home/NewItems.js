import styled from "styled-components";
import Tag from "../Tag/Tag.";
import Link from "next/link";
import { useRouter } from "next/router";
import ShowAll from "../Button/ShowAll";
import color from "../../../styles/colors";

const NewItems = ({ list }) => {
  const router = useRouter();
  const routeHandler = (id) => {
    router.push(`/performances/${id}`);
  };
  return (
    <Container>
      <HeadSection>
        <Title>New</Title>
        <ShowAll text={"모두보기"} path={"새로 등록된 작품"} />
      </HeadSection>
      <List>
        {list.map((item, idx) => (
          <Link href={`/performances/${item.productId}`} key={item.productId}>
            <Item onClick={() => routeHandler(item.productId)}>
              <ItemImg>
                <img src={item.productImage} alt={item.productTitle} />
              </ItemImg>
              <ItemDesc>
                <Category>
                  {item.productBrokerageConsignment.map((cate, i) => {
                    return (
                      <Tag title={cate.slice(0, 2)} id={item.productId} key={i}>
                        {cate.slice(0, 2)}
                      </Tag>
                    );
                  })}
                </Category>
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
          </Link>
        ))}
      </List>
    </Container>
  );
};

const Category = styled.div`
  width: 100%;
  display: flex;
`;

const Divider = styled.div`
  margin: 0 6px;
`;

const PInfo = styled.div`
  display: flex;
  font-family: "NotoSansCJKkr-Regular";
  line-height: 1;
  margin-top: 18px;
  color: ${color.black3};
`;
const Ptitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 18px;
  line-height: 18px;
`;

const ItemDesc = styled.div`
  min-width: 276px;
  display: flex;
  flex-direction: column;
  margin-top: 26px;
`;

const ItemImg = styled.div`
  width: 100%;
  /* height: 100%; */
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);

  & > img {
    width: 276px;
    height: auto;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 276px;
  width: 100%;
  height: auto;
  margin-right: 2rem;
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
  margin-bottom: 31px;
  align-items: center;
  padding: 0 1rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default NewItems;
