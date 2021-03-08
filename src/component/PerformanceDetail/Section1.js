import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import color from "../../../styles/colors";
import Tag from "../Tag/Tag.";
import SangSangMaru from "../SangSangMaru";
import PurchaseBtn from "../Button/PurchaseBtn";
import HeartBtn from "../Button/Heart";
import CalcBtn from "../Button/CalcBtn";
import useModal from "../../../utils/useModal";
import AlertModal from "../Modal/AlertModal";
import CalcModal from "../Modal/CalcModal";
import { HiHome } from "react-icons/hi";

const Section1 = ({ item, savedStatus }) => {
  const router = useRouter();
  const { openModal, closeModal, ModalPortal } = useModal();
  const param = router.query.id;
  const POST_URL = `/product/${router.query.id}/add-item`;
  const DELETE_URL = `/product/${router.query.id}/cart`;
  // console.log("넘어온savedStatus", savedStatus, typeof savedStatus);
  const [isSaved, setIsSaved] = useState(savedStatus);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [calcModalOpen, setCalcModalOpen] = useState(false);

  const onClickHomeBtn = () => {
    router.push("/");
  };
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
    postHandler();
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
        .post(POST_URL, param)
        .then((res) => {
          if (res.status === 200) {
            console.log(res, "찜하기 추가성공????");
            setIsSaved(true);
            return;
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            console.log("로그인하고p오기");
            setLoginModalOpen(true);
            loginModalHandler();
            return;
          }
        });
    } else if (isSaved) {
      axios
        .delete(DELETE_URL)
        .then((res) => {
          if (res.status === 200) {
            console.log("찜하기 해제 성공!");
            setIsSaved(false);
            return;
          }
        })
        .catch((err) => console.error(err));
      return;
    }
  };

  return (
    <Item>
      <ItemImg>
        <img src={item.poster} alt={item.title} />
      </ItemImg>
      <HouseIcon onClick={onClickHomeBtn}>
        <HiHome size="21" color={color.black3} />
      </HouseIcon>
      <SecondColumn>
        <ItemDesc>
          <div>
            {/* {item.brokerageConsignment.map((cate, i) => {
              return (
                <Tag title={cate} id={item.id}>
                  {cate}
                </Tag>
              );
            })} */}
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
        <SangSangContainer>
          <SangSangMaru />
        </SangSangContainer>
      </SecondColumn>

      <BtnContainer>
        <PurchaseBtn onClickHandler={go} />
        <Btns>
          <HeartContainer>
            <HeartBtn
              state={isSaved}
              onClickHandler={addToHeart}
              boxWidth={"62px"}
              heartWidth={"24px"}
              radius={"8px"}
              bgcolor={color.gray1}
              shadow={false}
            />
          </HeartContainer>
          <CalcContainer>
            <CalcBtn onClickHandler={openCalcModal} />
          </CalcContainer>
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

const Divider = styled.div`
  margin: 0 6px;
`;

const PInfo = styled.div`
  display: flex;
  font-family: "NotoSansCJKkr-Regular";
  line-height: 14px;
  align-items: center;
`;

const Ptitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black1};
  font-size: 18px;
  line-height: 18px;
  margin-top: 30px;
  margin-bottom: 19px;
`;

const ItemDesc = styled.div`
  color: ${color.black2};
  min-width: 276px;
  display: flex;
  flex-direction: column;
  margin-bottom: 31px;
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

const HouseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: ${color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5%;
`;

const Item = styled.div`
  position: relative;
  display: flex;
  margin-top: 40px;
`;

const SangSangContainer = styled.div`
  display: flex;
  max-width: 340px;
  margin-top: auto;
`;
const BtnContainer = styled.div`
  max-width: 380px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-top: auto;
`;
const Btns = styled.div`
  display: flex;
  width: 100%;
  margin-top: 14px;
`;
const HeartContainer = styled.div`
  width: 25%;
  margin-right: 14px;
`;

const CalcContainer = styled.div`
  margin-left: auto;
  width: 68%;
`;

export default Section1;
