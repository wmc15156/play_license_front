import styled from "styled-components";
import Link from "next/link";
import KeyWord from "../KeyWord";
import HeartBtn from "../Button/Heart";
import { useState, useEffect } from "react";
import axios from "axios";

const Favorites = ({ list }) => {
  const keywordArr = ["a", "b", "c"];
  const [isFav, setIsFav] = useState(true);

  const getData = () => {
    // axios.get('').then((res)=> setIsFav(res.data))
  };

  const heartBtnHandler = () => {
    // axios.post('').then((res)=> setIsFav(!isFav)).catch(err=>console.err(err))
    setIsFav(!isFav);
    console.log(isFav, "???");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ListSt>
        {/* {list.map((item) => ( */}
        {/* <Link href={`/performances/${item.id}`}> */}
        {/* <Item key={item.id}> */}
        <Item>
          <a>
            <ItemImg>
              {/* <img src={item.image_link} alt={item.name} /> */}
              ㅇㅇ
            </ItemImg>
          </a>
          <a>
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
              <Btn>
                <HeartBtn state={isFav} onClickHandler={heartBtnHandler} />
              </Btn>
            </ItemDesc>
          </a>
        </Item>
        {/* </Link> */}
        {/* ))} */}
      </ListSt>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 115px;
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
  position: relative;
`;

const ItemImg = styled.div`
  width: 100%;
  /* height: 100%; */
  height: 386px;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid gray;
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

const Btn = styled.div`
  width: 41px;
  height: 38px;
  position: absolute;
  right: 34px;
  top: 37px;
`;
export default Favorites;
