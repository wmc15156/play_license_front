import styled from "styled-components";
import color from "../../../../../../styles/colors";
import Btn_Left from "../../../../Button/GrayShortBtn";
import Btn_Right from "../../../../Button/OriginalButton";

import Group from "../../../../Form/Group";
import UserInfo from "../../../../Form/UserInfo";
import PerformanceInfo_provider from "../../../../Form/PerformanceInfo_provider";
import PerformanceInfo_edu from "../../../../Form/PerformanceInfo_edu";
import PerformanceInfo_etc from "../../../../Form/PerformanceInfo_etc";

import useModal from "../../../../../../utils/useModal";
import AlertModal from "../../../../Modal/AlertModal";
import axios from "axios";
import { useState, useEffect } from "react";

const Tab_WorkInfo = ({ id, purpose, infoBtnColor }) => {
  const { openModal, closeModal, ModalPortal } = useModal();
  const [modal, setModal] = useState("");
  const [mode, setMode] = useState("check");
  const [isDataExist, setIsDataExist] = useState(true);

  const changeMode = (modeName) => {
    setMode(modeName);
  };
  const [groupState, setGroupState] = useState({
    groupName: "",
    introduction: "",
  });
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const [perfInfo, setPerfInfo] = useState(
    purpose.includes("perform")
      ? {
          planDocument: {
            0: "",
            1: "",
          }, // 공연 - 기획내용
          plan: [{ startDate: "", endDate: "" }],
          round: "", // 공연회차
          place: {
            place_select: "",
            place_detail: "",
            place_etc: "",
          }, // 공연장소
          price: "", // 티켓가격
          isChangedScenario: "", // 각색여부,
          changedRange: {
            select: [],
            input: "",
          },
          requiredMaterials: [],
          selectedMaterials: {
            select: [],
            input: "",
          },
          participant: {
            actor: {
              select: "",
              input: null,
            },
            staff: {
              select: "",
              input: null,
            },
          }, // 공연참여인원
        }
      : {
          // 교육,기타 - 사용목적,
          objective: {
            0: "",
            1: "",
          },
          plan: [{ startDate: "", endDate: "" }],
          period: "",
          requiredMaterials: [],
          selectedMaterials: {
            select: [],
            input: "",
          },
        }
  );

  const getData = () => {
    axios.get(`/product/info/${id}`).then((res) => {
      setIsDataExist(true);
      const { data } = res;
      setGroupState({
        groupName: data[0].product_groupName,
        introduction: data[0].product_introduction,
      });
      setUserInfo({
        name: data[0].product_name,
        phone: data[0].product_phone,
        comment: data[0].product_comment,
      });
      setPerfInfo(
        purpose.includes("perform")
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
    });
  };

  useEffect(() => getData(), []);

  const [userModifiedData, setModifiedData] = useState({
    ...groupState,
    ...userInfo,
    ...perfInfo,
    // category: data[0].product_category,
  });

  const openModalHandler = (name) => {
    setModal(name);
    openModal();
  };

  const closeModalHandler = () => {
    setModal("");
    closeModal();
  };

  const preventChanges = () => {
    console.log("수정불가");
    openModalHandler("prevent");
  };

  const modifyHandler = () => {
    console.log("수정하기");
    purpose.includes("perform")
      ? setModifiedData({
          ...groupState,
          ...userInfo,
          ...perfInfo,
          // category: data[0].product_category,
          productId: Number(id),
          participant_total:
            Number(perfInfo.participant.actor.input) +
            Number(perfInfo.participant.staff.input),
        })
      : setModifiedData({
          ...groupState,
          ...userInfo,
          ...perfInfo,
          // category: data[0].product_category,
          productId: Number(id),
        });

    console.log("axios patch수정");
    // axios
    //   .patch(
    //     `/user/inquiry/${
    //       purpose.includes("perform") ? "performance" : "education"
    //     }/${router.query.id}`,
    //     userModifiedData
    //   )
    //   .then((res) => {
    //     // console.log(res, "--res?");
    openModalHandler("success");
    //     onClickHandler(); // /mypage/01로
    //   })
    //   .catch((err) => console.error(err));
  };

  return (
    <Container>
      <BtnContainer>
        {mode === "check" && (
          <>
            <BtnWrapper></BtnWrapper>
            <BtnWrapper>
              <Btn_Right
                width={"100%"}
                background={infoBtnColor}
                margin={"0px"}
                height={"40px"}
                size={"14px"}
                onClick={() => changeMode("modify")}
              >
                내용 수정하기
              </Btn_Right>
            </BtnWrapper>
          </>
        )}
        {mode === "modify" && (
          <>
            <BtnWrapper>
              <Btn_Left
                text={"취소"}
                size={"14px"}
                height={"40px"}
                fontColor={color.black2}
                onClickHandler={() => changeMode("check")}
              />
            </BtnWrapper>
            <BtnWrapper>
              <Btn_Right
                width={"100%"}
                background={infoBtnColor}
                margin={"0px"}
                height={"40px"}
                size={"14px"}
                onClick={() => {
                  modifyHandler();
                  changeMode("check");
                }}
              >
                저장하기
              </Btn_Right>
            </BtnWrapper>
          </>
        )}
      </BtnContainer>
      <BodySection>
        {mode === "check" && (
          <BoxSection>
            <Wrap>
              <Group
                groupState={groupState}
                groupStateHandler={preventChanges}
                readOnly={true}
              />
            </Wrap>
            {isDataExist && purpose.includes("perform") && (
              // 구매문의 목적 : 공연 목적인 경우
              <Wrap>
                <PerformanceInfo_provider
                  perfInfoState={perfInfo}
                  setPerfInfoState={preventChanges}
                  readOnly={true}
                />
              </Wrap>
            )}
            {isDataExist && purpose.includes("edu") && (
              // 구매문의 목적 : 교육 목적인 경우
              <Wrap>
                <PerformanceInfo_edu
                  perfInfoState={perfInfo}
                  setPerfInfoState={preventChanges}
                  readOnly={true}
                />
              </Wrap>
            )}
            {isDataExist && purpose.includes("etc") && (
              // 구매문의 목적 : 기타 목적인 경우
              <Wrap>
                <PerformanceInfo_etc
                  perfInfoState={perfInfo}
                  setPerfInfoState={preventChanges}
                  readOnly={true}
                />
              </Wrap>
            )}
            <Wrap>
              <UserInfo
                userInfoState={userInfo}
                userInfoStateHandler={preventChanges}
                readOnly={true}
              />
            </Wrap>
          </BoxSection>
        )}
        {mode === "modify" && (
          <BoxSection>
            <Wrap>
              <Group
                groupState={groupState}
                groupStateHandler={setGroupState}
                readOnly={false}
              />
            </Wrap>
            {isDataExist && purpose.includes("perform") && (
              // 구매문의 목적 : 공연 목적인 경우
              <Wrap>
                <PerformanceInfo_provider
                  perfInfoState={perfInfo}
                  setPerfInfoState={setPerfInfo}
                  readOnly={false}
                />
              </Wrap>
            )}
            {isDataExist && purpose.includes("edu") && (
              // 구매문의 목적 : 교육 목적인 경우
              <Wrap>
                <PerformanceInfo_edu
                  perfInfoState={perfInfo}
                  setPerfInfoState={setPerfInfo}
                  readOnly={false}
                />
              </Wrap>
            )}
            {isDataExist && purpose.includes("etc") && (
              // 구매문의 목적 : 기타 목적인 경우
              <Wrap>
                <PerformanceInfo_etc
                  perfInfoState={perfInfo}
                  setPerfInfoState={setPerfInfo}
                  readOnly={false}
                />
              </Wrap>
            )}
            <Wrap>
              <UserInfo
                userInfoState={userInfo}
                userInfoStateHandler={setUserInfo}
                readOnly={false}
              />
            </Wrap>
          </BoxSection>
        )}
      </BodySection>

      <ModalPortal>
        {modal === "success" && (
          <AlertModal
            fontSize={"21px"}
            text={"수정이 완료되었습니다"}
            onClickBtn={closeModalHandler}
          />
        )}
        {modal === "prevent" && (
          <AlertModal
            fontSize={"21px"}
            text={"편집이 불가능한 상태입니다"}
            content1={"내용수정 버튼을 누르세요"}
            onClickBtn={closeModalHandler}
          />
        )}
      </ModalPortal>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`;

const BodySection = styled.div`
  margin-bottom: 60px;
`;

const BoxSection = styled.div`
  height: 100%;
`;

const Wrap = styled.div`
  margin-bottom: 30px;
`;

const BtnContainer = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: flex-end;
`;
const BtnWrapper = styled.div`
  margin-left: 20px;
  width: 15%;
`;
export default Tab_WorkInfo;
