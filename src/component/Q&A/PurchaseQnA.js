import styled from "styled-components";
import color from "../../../styles/colors";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/router";
import { memo, useCallback, useEffect, useState } from "react";
import axios from "axios";
import Group from "../Form/Group";
import UserInfo from "../Form/UserInfo";
import PerformanceInfo_provider from "../Form/PerformanceInfo_provider";
import PerformanceInfo_edu from "../Form/PerformanceInfo_edu";
import PerformanceInfo_etc from "../Form/PerformanceInfo_etc";
import Btn from "../../../src/component/Button/OriginalButton";
import useModal from "../../../utils/useModal";
import AlertModal from "../Modal/AlertModal";

const PurchaseQnA = ({ onClickHandler, data }) => {
  const router = useRouter();

  const { openModal, closeModal, ModalPortal } = useModal();
  const [isEdit, setIsEdit] = useState(true);
  const [isCancelled, setIsCancelled] = useState(false);

  const [groupState, setGroupState] = useState({
    groupName: data[0].product_groupName,
    introduction: data[0].product_introduction,
  });

  const [userInfoState, setUserInfoState] = useState({
    name: data[0].product_name,
    phone: data[0].product_phone,
    comment: data[0].product_comment,
  });

  const [perfInfoState, setPerfInfoState] = useState(
    router.query.category === "공연목적"
      ? {
          planDocument: {
            0: data[0].product_planDocument[0],
            1: data[0].product_planDocument[1],
          }, // 공연 - 기획내용
          plan: data[0].product_plan.map((el) => {
            return { startDate: el.startDate, endDate: el.endDate };
          }),
          round: data[0].product_round, // 공연회차
          place: {
            place_select: data[0].product_place.place_select,
            place_detail: data[0].product_place.place_detail,
            place_etc: data[0].product_place.place_etc,
          }, // 공연장소
          price: data[0].product_price, // 티켓가격
          isChangedScenario: data[0].product_isChangedScenario, // 각색여부,
          changedRange: {
            select: data[0].product_changedRange.select,
            input: data[0].product_changedRange.input,
          },
          requiredMaterials: data[0].product_requiredMaterials,
          selectedMaterials: {
            select: data[0].product_selectedMaterials.select,
            input: data[0].product_selectedMaterials.input,
          },
          participant: {
            actor: {
              select: data[0].product_participant.actor.select,
              input: data[0].product_participant.actor.input,
            },
            staff: {
              select: data[0].product_participant.staff.select,
              input: data[0].product_participant.staff.input,
            },
          }, // 공연참여인원
        }
      : {
          objective: {
            0: data[0].product_objective[0],
            1: data[0].product_objective[1],
          }, // 교육,기타 - 사용목적,

          plan: data[0].product_plan.map((el) => {
            return { startDate: el.startDate, endDate: el.endDate };
          }),

          period: data[0].product_period,
          requiredMaterials: data[0].product_requiredMaterials,
          selectedMaterials: {
            select: data[0].product_selectedMaterials.select,
            input: data[0].product_selectedMaterials.input,
          },
        }
  );

  const preventSetState = () => {
    console.log("ㄴㄴㄴㄴㄴ");
    setIsEdit(true);
    openModal();
  };

  const cancelBtnHandler = () => {
    setIsCancelled(true);
    openModal();
  };

  const withdrawHandler = () => {
    let category = "";
    switch (data[0].product_category.substring(0, 2)) {
      case "공연":
        category = "performance";
        break;

      case "교육" || "기타":
        category = "education";
        break;
    }

    axios
      .patch(`/user/withdraw/${category}/${router.query.id}`)
      .then((res) => {
        setIsCancelled(false);
        closeModal();
        router.push("/mypage/01");
      })
      .catch((err) => console.error(err, "err"));

    setIsCancelled(false);
  };

  const modalCloseHandler = () => {
    setIsEdit(false);
    closeModal();
  };

  return (
    <>
      <Container>
        <HeadSection>
          <Row1>
            <T1>{"spspsp"}</T1>
            <DeleteBtnContainer>
              <DeleteBtn onClick={cancelBtnHandler}>
                <FaTrash color={color.black3} />
                <span>문의 철회하기</span>
              </DeleteBtn>
            </DeleteBtnContainer>
          </Row1>
          <T2>
            작성해주신 <span>작품구매 문의내용</span>을 확인해주세요
          </T2>
        </HeadSection>
        <Divider>
          <Div1 />
        </Divider>
        <BoxSection>
          <Wrap>
            <Group
              groupState={groupState}
              groupStateHandler={preventSetState}
            />
          </Wrap>
          {data && router.query.category.includes("공연") && (
            // 구매문의 목적 : 공연 목적인 경우
            <Wrap>
              <PerformanceInfo_provider
                perfInfoState={perfInfoState}
                setPerfInfoState={preventSetState}
              />
            </Wrap>
          )}
          {data && router.query.category.includes("교육") && (
            // 구매문의 목적 : 교육 목적인 경우
            <Wrap>
              <PerformanceInfo_edu
                perfInfoState={perfInfoState}
                setPerfInfoState={preventSetState}
              />
            </Wrap>
          )}
          {data && router.query.category.includes("기타") && (
            // 구매문의 목적 : 기타 목적인 경우
            <Wrap>
              <PerformanceInfo_etc
                perfInfoState={perfInfoState}
                setPerfInfoState={preventSetState}
              />
            </Wrap>
          )}
          <Wrap>
            <UserInfo
              userInfoState={userInfoState}
              userInfoStateHandler={preventSetState}
            />
          </Wrap>
        </BoxSection>
        <BtnSection>
          <Btn
            width={"100%"}
            background={true}
            margin={"0px"}
            height={"60px"}
            size={"21px"}
            onClick={onClickHandler}
          >
            뒤로가기
          </Btn>
        </BtnSection>
      </Container>
      {isEdit && (
        <ModalPortal>
          <AlertModal
            text={"편집이 불가능한 상태입니다"}
            onClickBtn={modalCloseHandler}
          />
        </ModalPortal>
      )}
      {isCancelled && (
        <ModalPortal>
          <AlertModal
            fontSize={"21px"}
            text={"구매문의를 철회하시겠습니까?"}
            content1={"문의 철회시 더이상 구매과정이 진행되지 않습니다."}
            content2={"이대로 철회하시겠습니까?"}
            onClickBtn={withdrawHandler}
          />
        </ModalPortal>
      )}
    </>
  );
};

const Container = styled.div`
  max-width: 790px;
  padding: 0 1rem;
  margin: 0 auto;
  font-family: "NotoSansCJKkr-Medium";
  margin-bottom: 143px;
`;

const HeadSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row1 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

const T1 = styled.div`
  color: ${color.black3};
  font-size: 16px;
  line-height: 16px;
`;

const DeleteBtnContainer = styled.div`
  margin-left: auto;
`;
const DeleteBtn = styled.div`
  display: flex;
  padding: 10px 13px 10px 15px;
  background-color: ${color.gray1};
  border-radius: 6px;
  align-items: center;
  font-size: 12px;
  letter-spacing: -0.5px;
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black3};
  & > span {
    margin-left: 7px;
  }
`;
const T2 = styled.div`
  font-size: 24px;
  line-height: 26px;

  & > span {
    color: ${color.orange};
  }
`;
const Divider = styled.div`
  display: flex;
  width: 100%;
  margin-top: 28px;
  margin-bottom: 30px;
`;

const Div1 = styled.div`
  background-color: ${color.yellow};
  border-radius: 100px;
  height: 3px;
  width: 100%;
`;
const BoxSection = styled.div`
  height: 100%;
`;

const Wrap = styled.div`
  margin-bottom: 30px;
`;

const BtnSection = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  justify-content: space-between;
`;

export default memo(PurchaseQnA);
