import styled from "styled-components";
import color from "../../../../styles/colors";
import { FaCheck } from "react-icons/fa";
import CheckBoxWrapper from "../../../../src/component/CheckBoxWrapper/CheckBoxWrapper";
import { useRouter } from "next/router";
import { useState, useReducer } from "react";
import Group from "../../../../src/component/Form/Group";
import PerformanceInfo from "../../../../src/component/Form/PerformanceInfo_provider";
import UserInfo from "../../../../src/component/Form/UserInfo";
import Notice from "../../../../src/component/GrayNotice";
import Btn from "../../../../src/component/Button/OriginalButton";
import useModal from "../../../../utils/useModal";
import AlertModal from "../../../../src/component/Modal/AlertModal";
import axios from "axios";

const notice = {
  title: "안내사항",
  body1: "1. 최종 제공 자료는 협의 후 달라질 수 있습니다.",
  body2:
    "2. 협의되지 않은 자료의 복사, 활용은 저작권 침해로 법적 책임을 질 수 있습니다.",
};

const Performance = () => {
  const [groupState, setGroupState] = useState({
    groupName: "",
    introduction: "",
  });
  const [perfInfoState, setPerfInfoState] = useState({
    planDocument: {}, // 기획내용
    plan: [{ startDate: "", endDate: "" }],
    round: "", // 공연회차
    place: {}, // 공연장소
    price: "", // 티켓가격
    isChangedScenario: "", // 각색여부,
    changedRange: { select: [], input: "" },
    requiredMaterials: [],
    selectedMaterials: { select: [], input: "" },
    participant: { actor: {}, staff: {} }, // 공연참여인원
  });
  const [userInfoState, setUserInfoState] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  console.log("모든state-->>", {
    ...groupState,
    ...perfInfoState,
    ...userInfoState,
  });
  const { openModal, ModalPortal, closeModal } = useModal();
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [userInputData, setUserInputData] = useState({
    ...groupState,
    ...perfInfoState,
    ...userInfoState,
  });

  const next = () => {
    router.push(`/performances/${router.query.id}/buy/complete`);
  };

  const handleChange = (e) => {
    e.persist();
    setChecked((prevState) => !prevState);
    setUserInputData({
      ...groupState,
      ...perfInfoState,
      ...userInfoState,
      category: "공연목적용",
      productId: Number(router.query.id),
      participant_total:
        Number(perfInfoState.participant.actor.input) +
        Number(perfInfoState.participant.staff.input),
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const {
      plannedContents,
      number,
      performPlace,
      price,
      changeScenario,
      requiredMaterials,
      castMembers,
    } = perfInfoState;
    //TODO: 유효성 추가
    if (!checked) {
      // alert("개인정보 수집 및 이용에 동의해주세요.");
      openModal();
    }

    console.log("구매문의버튼클릭", userInputData);
    axios
      .post("/product/buyer", userInputData)
      .then((res) => {
        console.log(res, "--res?");
        if (res.status === 201) {
          next();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <HeadSection>
        <T1>작품 구매를 위해 구매문의를 작성해주세요</T1>
        <T2>
          <span>구매정보</span>를 작성해주세요
        </T2>
        <Num>2/2</Num>
      </HeadSection>
      <Divider>
        <Div1 />
      </Divider>
      <BoxSection>
        <Wrap>
          <Group groupState={groupState} groupStateHandler={setGroupState} />
        </Wrap>
        <Wrap>
          <PerformanceInfo
            perfInfoState={perfInfoState}
            setPerfInfoState={setPerfInfoState}
          />
        </Wrap>
        <Wrap>
          <UserInfo
            userInfoState={userInfoState}
            userInfoStateHandler={setUserInfoState}
          />
        </Wrap>
      </BoxSection>
      <Notice title={notice.title} body1={notice.body1} body2={notice.body2} />

      <CheckSection>
        <CheckBoxWrapper
          width={"24px"}
          height={"24px"}
          onChange={handleChange}
          value={checked ? color.orange : false}
        >
          <FaCheck size={"15px"} color={checked ? "white" : "gray"} />
        </CheckBoxWrapper>
        <Check>안내사항을 확인했습니다</Check>
      </CheckSection>
      <BtnSection>
        <Btn
          width={"100%"}
          background={checked}
          margin={"0px"}
          height={"60px"}
          size={"21px"}
          onClick={onSubmitHandler}
        >
          구매문의 완료하기
        </Btn>
      </BtnSection>
      <ModalPortal>
        <AlertModal text={"내용을 모두 입력해주세요"} onClickBtn={closeModal} />
      </ModalPortal>
    </Container>
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

const T1 = styled.div`
  color: ${color.black3};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 20px;
`;
const T2 = styled.div`
  font-size: 24px;
  line-height: 26px;

  & > span {
    color: ${color.orange};
  }
`;
const Num = styled.div`
  margin-left: auto;
  line-height: 28px;
  font-size: 14px;
`;
const Divider = styled.div`
  display: flex;
  width: 100%;
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

const CheckSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 33px;
`;

const Check = styled.div``;
const Wrap = styled.div`
  margin-bottom: 30px;
`;
const BtnSection = styled.div`
  margin-top: 44px;
`;
export default Performance;
