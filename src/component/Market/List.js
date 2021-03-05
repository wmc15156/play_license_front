import styled from "styled-components";
import Link from "next/link";
import Tag from "../Tag/Tag.";
import Filter from "./Filter";

const List = ({ list }) => {
  return (
    <Container>
      <HeadSection>
        <Title>
          새로 등록된 작품<span>{list.length}개</span>
        </Title>
        <Filter />
      </HeadSection>
      <ListSt>
        {list.map((item) => (
          <Link href={`/performances/${item.id}`}>
            <Item key={item.id}>
              <a>
                <ItemImg>
                  <img src={item.image_link} alt={item.name} />
                </ItemImg>
              </a>
              <a>
                <ItemDesc>
                  <div>
                    {item.brokerageConsignments.map((cate, i) => {
                      return (
                        <Tag title={cate} id={item.id}>
                          {cate}
                        </Tag>
                      );
                    })}
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
              </a>
            </Item>
          </Link>
        ))}
      </ListSt>
    </Container>
  );
};

export default List;

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

const ListSt = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  flex-wrap: wrap;
`;

const Title = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 24px;
  line-height: 48px;
  text-transform: uppercase;

  & > span {
    opacity: 0.3;
    margin-left: 30px;
  }
`;

const HeadSection = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
