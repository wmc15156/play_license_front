import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import KeyWord from "../KeyWord";
import SangSangMaru from "../SangSangMaru";
import PurchaseBtn from "../Button/PurchaseBtn";
import HeartBtn from "../Button/HeartBtn";
import CalcBtn from "../Button/CalcBtn";

const Section1 = ({ item }) => {
  const router = useRouter();
  const keywordArr = ["a", "공연", "c"];

  // 찜 버튼 상태
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  // 찜여부 t/f를 useState()에 넣기

  const go = () => {
    router.push(`/performances/${router.query.id}/buy`);
  };

  const heartHandler = () => {
    setIsSaved(!isSaved);
  };

  const addToHeart = (e) => {
    // 누를때마다 찜여부(isSaved)를 서버로 post.
    e.preventDefault();
    setIsSaving(true);
    heartHandler();

    setTimeout(() => {
      setIsSaving(false);
      heartHandler(true);
    }, 2000);

    // axios.post("/").then((res) => {
    //   if (res.code === 200) {
    //     setIsSaving(false);
    //     setIsSaved(true);
    //   }
    // });
  };

  return (
    <Item>
      {/* {이미지, 정보}, {상상마루제작}, 버튼모음 */}
      <ItemImg>
        <img src={item.image_link} alt={item.name} />
      </ItemImg>

      <SecondColumn>
        <ItemDesc>
          <Category>
            <KeyWord words={keywordArr} />
          </Category>
          <Ptitle>title:{}</Ptitle>
          <PInfo>
            <div>데{}</div>
            <Divider>|</Divider>
            <div>이{}</div>
            <Divider>|</Divider>
            <div>터{}</div>
          </PInfo>
        </ItemDesc>
        <SangSangContainer>
          <SangSangMaru />
        </SangSangContainer>
      </SecondColumn>

      <BtnContainer>
        <PurchaseBtn onClickHandler={go} />
        <Btns>
          <HeartContainer>
            <HeartBtn
              text={"찜하기"}
              currStatus={isSaving}
              status={isSaved}
              onClickHandler={addToHeart}
            />
          </HeartContainer>
          <CalcBtn />
        </Btns>
      </BtnContainer>
    </Item>
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
  width: 276px;
  height: 386px;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);

  & > img {
    min-width: 276px;
    width: 100%;
    height: auto;
  }
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5%;
`;

const Item = styled.div`
  display: flex;
`;

const SangSangContainer = styled.div`
  display: flex;
  max-width: 340px;
  margin-top: auto;
`;
const BtnContainer = styled.div`
  width: 380px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-top: auto;
`;
const Btns = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
`;
const HeartContainer = styled.div`
  width: 100%;
  margin-right: 15px;
`;

export default Section1;
