import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";
import KeyWord from "../src/component/KeyWord";
import axios from "axios";
// import { API_URL } from "../../config/API_URL";

const Search = () => {
  const [list, setList] = useState([]);
  {
    /* 결과가 있으면 
    ''검색결과

    결과가 없으면
    
    ''검색결과
     */
  }
  const getData = () => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((res) => setList(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(list);
  return (
    <Container>
      <Section1>
        <InputBox />
      </Section1>
      <Section2>
        <Title>
          {} 검색결과 <span>{}건</span>
        </Title>
        {list && (
          <ListSt>
            {list
              .map((item) => (
                <Link href={`/performances/${item.id}`}>
                  <Item key={item.id}>
                    <a>
                      <ItemImg>
                        <img src={item.image_link} alt={item.name} />
                      </ItemImg>
                    </a>
                    <a>
                      <ItemDesc>
                        <Category>
                          <KeyWord />
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
                    </a>
                  </Item>
                </Link>
              ))
              .slice(0, 3)}
            {!list && (
              <None>
                <img src="/assets/image/logo.png" />
                <div>검색 결과가 없습니다</div>
              </None>
            )}
          </ListSt>
        )}
      </Section2>
    </Container>
  );
};

const Container = styled.div`
  max-width: 924px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Section1 = styled.div`
  display: flex;
  margin-bottom: 65px;
  padding: 0 1rem;
`;
const InputBox = styled.input`
  width: 100%;
  height: 104px;
  border-radius: 14px;
  background-color: #f5f5f5;
  border: none;
  font-size: 36px;
  font-family: "NotoSansCJKkr-Medium";
  padding-left: 34px;
`;
const Section2 = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;
const Title = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 24px;
  line-height: 48px;
  margin-bottom: 39px;
`;
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
export default Search;
