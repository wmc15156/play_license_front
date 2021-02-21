import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import KeyWord from "../KeyWord";
import SangSangMaru from "../SangSangMaru";
import PurchaseBtn from "../Button/PurchaseBtn";
import HeartBtn from "../Button/HeartBtn";
import CalcBtn from "../Button/CalcBtn";
import useModal from "../../../utils/useModal";
import AlertModal from "../Modal/AlertModal";
import CalcModal from "../Modal/CalcModal";

const Section1 = ({ item, savedStatus }) => {
  const router = useRouter();
  const { openModal, closeModal, ModalPortal } = useModal();
  const param = router.query.id;
  const ADD_URL = `/product/${router.query.id}/add-item`;
  const [isSaving, setIsSaving] = useState(false); // 찜하기 중
  // console.log("넘어온savedStatus", savedStatus, typeof savedStatus);
  const [isSaved, setIsSaved] = useState(true);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [calcModalOpen, setCalcModalOpen] = useState(false);

  const go = () => {
    router.push(`/performances/${router.query.id}/buy`);
  };

  const redirectHandler = () => {
    router.push("/login");
  };

  const loginModalHandler = () => {
    if (loginModalOpen) {
      openModal();
    }
  };

  const addToHeart = (e) => {
    e.preventDefault();
    setIsSaving(true);
    postHandler();
    setIsSaving(false);
  };

  const openCalcModal = () => {
    setCalcModalOpen(true);
    if (calcModalOpen) {
      openModal();
    }
  };

  const postHandler = () => {
    if (!isSaved) {
      axios
        .post(ADD_URL, param)
        .then((res) => {
          if (res.status === 200) {
            console.log(res, "찜하기 추가성공????");
            setIsSaved(true);
            return;
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            console.log("로그인하고오기");
            setLoginModalOpen(true);
            loginModalHandler();
          }
        });
    } else if (isSaved) {
      console.log("찜하기 해제");
      setIsSaved(false);
      // 찜하기에서 삭제
      // axios.post()
      return;
    }
  };

  return (
    <Item>
      <ItemImg>
        <img src={item.image_link} alt={item.name} />
      </ItemImg>

      <SecondColumn>
        <ItemDesc>
          <Category>
            <KeyWord />
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
          <CalcBtn onClickHandler={openCalcModal} />
        </Btns>
      </BtnContainer>
      <ModalPortal>
        {loginModalOpen && (
          <AlertModal text={"로그인해주세요"} onClickBtn={redirectHandler} />
        )}
        {calcModalOpen && <CalcModal text={"가견적 계산하기"} />}
      </ModalPortal>
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
