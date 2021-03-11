import styled from "styled-components";
import Link from "next/link";
import Tag from "../Tag/Tag.";
import Filter from "./Filter";

const List = ({
  list,
  count,
  sortListHandler,
  filterListHandler,
  selectedOption,
  setOption,
}) => {
  console.log(list, "list");
  return (
    <Container>
      <HeadSection>
        <Filter
          count={count}
          selectedOption={selectedOption}
          setOption={setOption}
          sortListHandler={sortListHandler}
          filterListHandler={filterListHandler}
        />
      </HeadSection>
      <ListSt>
        {list.map((item) => (
          <Link href={`/performances/${item.productId}`} key={item.productId}>
            <Item>
              <a>
                <ItemImg>
                  <img src={item.poster} alt={item.name} />
                </ItemImg>
              </a>
              <a>
                <ItemDesc>
                  <div>
                    {item.brokerageConsignments.map((cate, i) => {
                      return (
                        <Tag title={cate} id={item.productId} key={i}>
                          {cate}
                        </Tag>
                      );
                    })}
                  </div>
                  <Ptitle>{item.title}</Ptitle>
                  <PInfo>
                    <div>{item.category}</div>
                    <Divider>|</Divider>
                    <div>{item.year}</div>
                    <Divider>|</Divider>
                    <div>{item.company}</div>
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
  margin-right: 2.5%;
  margin-bottom: 132px;
`;

const ListSt = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const HeadSection = styled.div`
  display: flex;
  margin-bottom: 34px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
