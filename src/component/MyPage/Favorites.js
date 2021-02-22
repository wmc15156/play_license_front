import styled from "styled-components";
import Link from "next/link";
import KeyWord from "../KeyWord";
import HeartBtn from "../Button/Heart";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Favorites = () => {
  const router = useRouter();
  const url = "/product/cart";
  const [isFav, setIsFav] = useState(true);
  const [list, setList] = useState([]);

  const getData = () => {
    axios.get(url).then((res) => {
      setList(res.data);
    });
  };

  const postHandler = () => {
    if (!isFav) {
      // remove from cart
      return;
    } else if (isFav) {
      // cart에 다시 post
      let url = `/product/${router.query.id}/add-item`;
      return;
    }
  };

  const heartBtnHandler = () => {
    axios
      .post("")
      .then((res) => setIsFav(!isFav))
      .catch((err) => console.error(err));
    setIsFav(!isFav); //바꾸고 서버로
    console.log(isFav, "isFav????");
    postHandler();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ListSt>
        {list.map((item) => (
          <Item key={item.productId}>
            {/* <Item> */}
            <Link href={`/performances/${item.productId}`}>
              <a>
                <ItemImg>
                  <img src={item.poster} alt={item.title} />
                </ItemImg>
              </a>
            </Link>

            <ItemDesc>
              <Link href={`/performances/${item.productId}`}>
                <a>
                  <Category>
                    <KeyWord />
                  </Category>
                  <Ptitle>{item.title}</Ptitle>
                  <PInfo>
                    <div>{item.category}</div>
                    <Divider>|</Divider>
                    <div>{item.year}</div>
                    <Divider>|</Divider>
                    <div>{item.genre}</div>
                  </PInfo>
                </a>
              </Link>
              <Btn>
                <HeartBtn state={isFav} onClickHandler={heartBtnHandler} />
              </Btn>
            </ItemDesc>
          </Item>
        ))}
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
  cursor: pointer;
`;
export default Favorites;
