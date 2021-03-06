import styled from "styled-components";
import color from "../../../styles/colors";
import Link from "next/link";
import Tag from "../Tag/Tag.";
import HeartBtn from "../Button/Heart";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useModal from "../../../utils/useModal";
import AlertModal from "../Modal/AlertModal";

import axios from "axios";

const Favorites = () => {
  const router = useRouter();
  const GET_URL = "/product/cart";
  const { openModal, closeModal, ModalPortal } = useModal();
  const [isFav, setIsFav] = useState(true);
  const [list, setList] = useState([]);

  const getData = () => {
    axios.get(GET_URL).then((res) => {
      console.log("res?", res);

      setList(res.data);
    });
  };

  const heartBtnHandler = (id) => {
    const param = id;

    if (isFav) {
      // remove from cart
      axios
        .delete(`/product/${id}/cart`)
        .then((res) => {
          if (res.status === 200) {
            console.log(res, "delete resp");
            setIsFav(false);
            closeModal();
            return;
          }
        })
        .catch((err) => console.error(err));

      return;
    } else if (!isFav) {
      axios
        .post(`/product/${id}/add-item`, param)
        .then((res) => {
          if (res.status === 200) {
            console.log(res, "post resp");
            setIsFav(true);
            return;
          }
        })
        .catch((err) => console.error(err));
      return;
    }

    // setIsFav(!isFav); //바꾸고 서버로
    // console.log(isFav, "isFav????");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {list.length > 0 && (
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
                    <TagContainer>
                      {item.brokerageConsignments.map((cate, i) => {
                        return (
                          <Tag title={cate} id={item.id}>
                            {cate}
                          </Tag>
                        );
                      })}
                    </TagContainer>
                    <Ptitle>{item.title}</Ptitle>
                    <PInfo>
                      <div>{item.category}</div>
                      <Divider>|</Divider>
                      <div>{item.year}</div>
                      <Divider>|</Divider>
                      <div>{item.company}</div>
                    </PInfo>
                  </a>
                </Link>
                <Btn>
                  <HeartBtn
                    boxWidth={"50px"}
                    heartWidth={"26px"}
                    radius={"50%"}
                    bgcolor={color.white}
                    shadow={true}
                    state={isFav}
                    onClickHandler={openModal}
                  />
                </Btn>
              </ItemDesc>

              {isFav && (
                <ModalPortal>
                  <AlertModal
                    text={"이 공연의 찜하기를 해제할까요?"}
                    onClickBtn={() => heartBtnHandler(item.productId)}
                  />
                </ModalPortal>
              )}
            </Item>
          ))}
        </ListSt>
      )}
      {list.length === 0 && (
        <NoList>
          <Icon>
            <HeartBtn
              boxWidth={"70px"}
              heartWidth={"36px"}
              radius={"50%"}
              bgcolor={color.white}
              shadow={true}
              state={true}
            />
          </Icon>
          <Text>찜한공연이 없습니다</Text>
        </NoList>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 115px;
`;

const NoList = styled.div`
  min-height: calc(100vh - 410px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  & > img {
    max-width: 77px;
    height: 100%;
  }
`;
const Text = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 24px;
  line-height: 24px;
  margin-left: 5%;
`;

const TagContainer = styled.div`
  width: 100%;
  margin-top: 2.3vw;
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
  margin-bottom: 1vw;
`;

const ItemDesc = styled.div`
  max-width: 276px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ItemImg = styled.div`
  width: 100%;
  /* height: 100%; */
  /* height: 386px; */
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
  & > img {
    /* min-width: 276px; */
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
  display: inline-block;
  position: absolute;
  right: 0;
  top: 4.5vw;
`;

export default Favorites;
