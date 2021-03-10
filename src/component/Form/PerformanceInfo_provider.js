import styled from "styled-components";
import color from "../../../styles/colors";
import { useCallback, useRef } from "react";
import BasicInput from "../BasicInput/BasicInputColor";
import GrayBtn from "../Button/GrayShortBtn";
import { FaCheck } from "react-icons/fa";
import CheckBoxWrapper from "../CheckBoxWrapper/CircleCheckBoxWrapper";
import Selector from "../Input/SelectOption";
import DatePicker from "../Input/DatePicker";

const items_rangeOfChange = ["대사", "줄거리", "일부만 공연", "인원", "기타"];
const items_requireMaterial = ["대본", "보컬악보", "공연포스터PSD"];
const items_selectMaterial = [
  "공연MR",
  "연습MR",
  "총보(라이브 연주 가능 악보)",
  "공연실황영상",
  "무대디자인",
  "소품디자인 및 리스트",
  "의상디자인",
  "음향리스트 및 파일",
  "안무가이드",
  "기타",
];

const AboutPerformance = ({ perfInfoState, setPerfInfoState }) => {
  const nextCalendarIdx = useRef(1);

  // const onAddCalendarClick = useCallback(() => {
  //   setPerfInfoState({
  //     ...perfInfoState,
  //     plan: [{ ...perfInfoState.plan[nextCalendarIdx], startDate: "" }],
  //   });
  //   setPerfInfoState({
  //     ...perfInfoState,
  //     plan: [{ ...perfInfoState.plan[nextCalendarIdx], endDate: "" }],
  //   });

  //   nextCalendarIdx.current += 1;
  // }, [perfInfoState.plan]);

  const onAddCalendarClick = () => {
    console.log("ref", nextCalendarIdx);
    // nextCalendarId.current.focus();
  };

  const removeSelectItemHandler = useCallback(
    (itemIdx) => {
      let array = perfInfoState.selectedMaterials;
      array.splice(itemIdx, 1);
      setPerfInfoState((prev) => {
        return { ...prev, selectedMaterials: [...array] };
      });
    },
    [perfInfoState.selectedMaterials]
  );

  const checkSelectHandler = (name) => {
    if (perfInfoState.selectedMaterials.includes(name)) {
      removeSelectItemHandler();
    } else {
      setPerfInfoState({
        ...perfInfoState,
        selectedMaterials: [...perfInfoState.selectedMaterials, name],
      });
    }
  };

  const removeRequireItemHandler = useCallback(
    (itemIdx) => {
      let array = perfInfoState.requiredMaterials;
      array.splice(itemIdx, 1);
      setPerfInfoState((prev) => {
        return { ...prev, requiredMaterials: [...array] };
      });
    },
    [perfInfoState.requiredMaterials]
  );

  const checkRequireHandler = (name) => {
    if (perfInfoState.requiredMaterials.includes(name)) {
      removeRequireItemHandler();
    } else {
      setPerfInfoState({
        ...perfInfoState,
        requiredMaterials: [...perfInfoState.requiredMaterials, name],
      });
    }
  };

  const removeRangeItemHandler = useCallback(
    (itemIdx) => {
      let array = perfInfoState.changedRange;
      array.splice(itemIdx, 1);
      setPerfInfoState((prev) => {
        return { ...prev, changedRange: [...array] };
      });
    },
    [perfInfoState.changedRange]
  );

  const checkRangeHandler = (name) => {
    // perfInfoState.changedRange label있는지 체크 있으면 빼기 없으면 추가
    if (perfInfoState.changedRange.includes(name)) {
      removeRangeItemHandler();
    } else {
      setPerfInfoState({
        ...perfInfoState,
        changedRange: [...perfInfoState.changedRange, name],
      });
    }
  };

  return (
    <Container>
      <HeadSection>
        <Title>공연 정보</Title>
        <p>올릴 공연에 대한 정보를 알려주세요.</p>
      </HeadSection>
      <InputSection>
        <Input>
          <SubTitle>기획내용</SubTitle>
          <Content>
            <InputArea>
              <InputArea_Row1>
                <Selector
                  value={perfInfoState.planDocument[0]}
                  options={[
                    "선택해주세요",
                    "동호회 작품 발표",
                    "공연제 출품",
                    "학내 공연",
                    "졸업 공연",
                    "기타",
                  ]}
                  onChange={(e) =>
                    setPerfInfoState({
                      ...perfInfoState,
                      planDocument: {
                        ...perfInfoState.planDocument,
                        0: e.target.value,
                      },
                    })
                  }
                />
              </InputArea_Row1>

              <InputArea_Row1>
                {perfInfoState.planDocument[0] === "기타" && (
                  <BasicInput
                    width={"100%"}
                    placeholder={"직접입력"}
                    background={color.white}
                    onChange={(e) =>
                      setPerfInfoState({
                        ...perfInfoState,
                        planDocument: {
                          ...perfInfoState.planDocument,
                          1: e.target.value,
                        },
                      })
                    }
                    value={perfInfoState.planDocument[1]}
                  />
                )}
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>공연일정</SubTitle>

          <Content>
            <InputArea>
              <InputArea_Row1>
                <DateArea ref={nextCalendarIdx}>
                  <Date_>
                    <Date_Start>
                      <Date_Name>시작</Date_Name>
                      <label>
                        <DatePicker
                          date={perfInfoState.plan[0].startDate}
                          setDate={(e) =>
                            setPerfInfoState({
                              ...perfInfoState,
                              plan: [
                                { ...perfInfoState.plan[0], startDate: e },
                              ],
                            })
                          }
                        />
                      </label>
                    </Date_Start>
                    <Date_Div>
                      <Divider />
                    </Date_Div>
                    <Date_End>
                      <Date_Name>종료</Date_Name>
                      <label>
                        <DatePicker
                          date={perfInfoState.plan[0].endDate}
                          setDate={(e) =>
                            setPerfInfoState({
                              ...perfInfoState,
                              plan: [{ ...perfInfoState.plan[0], endDate: e }],
                            })
                          }
                        />
                      </label>
                    </Date_End>
                  </Date_>
                </DateArea>
                {/* 일정추가 시 같은 선택창 필요 */}
                <AddBtnContainer>
                  <GrayBtn
                    size={"14px"}
                    height={"40px"}
                    fontColor={color.black2}
                    onClickHandler={onAddCalendarClick}
                    text={"일정추가"}
                  />
                </AddBtnContainer>
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>공연회차</SubTitle>

          <Content>
            <Selector
              value={perfInfoState.round}
              options={["선택해주세요", 1, 2, 3]}
              onChange={(e) =>
                setPerfInfoState({
                  ...perfInfoState,
                  round: e.target.value,
                })
              }
            />
          </Content>
        </Input>
        <Input>
          <SubTitle>공연장소</SubTitle>
          <Content>
            <InputArea>
              <InputArea_Row1>
                <Selector
                  value={perfInfoState.place["place_select"]}
                  options={["선택해주세요", 1, 2, 3]}
                  onChange={(e) =>
                    setPerfInfoState({
                      ...perfInfoState,
                      place: {
                        ...perfInfoState.place,
                        place_select: e.target.value,
                      },
                    })
                  }
                />
                <BasicInput
                  width={"100%"}
                  placeholder={"구체적 장소를 입력해주세요."}
                  background={color.gray1}
                  onChange={(e) =>
                    setPerfInfoState({
                      ...perfInfoState,
                      place: {
                        ...perfInfoState.place,
                        place_detail: e.target.value,
                      },
                    })
                  }
                  value={perfInfoState.place["place_detail"]}
                />
              </InputArea_Row1>
              <BasicInput
                width={"100%"}
                placeholder={
                  "비고사항 입력 (예시 : 상설공연장이 아닌 강당입니다.)"
                }
                background={color.gray1}
                onChange={(e) =>
                  setPerfInfoState({
                    ...perfInfoState,
                    place: {
                      ...perfInfoState.place,
                      place_etc: e.target.value,
                    },
                  })
                }
                value={perfInfoState.place["place_etc"]}
              />
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>티켓가격</SubTitle>

          <Content>
            <InputArea>
              <InputArea_Row1>
                <BasicInput
                  width={"100%"}
                  placeholder={"1매당 가격을 입력해주세요."}
                  background={color.gray1}
                  onChange={(e) =>
                    setPerfInfoState({
                      ...perfInfoState,
                      price: e.target.value,
                    })
                  }
                  value={perfInfoState.price}
                />
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>각색여부</SubTitle>

          <Content>
            <Selector
              value={perfInfoState.isChangedScenario}
              options={["선택해주세요", "각색있음", "각색없음"]}
              onChange={(e) =>
                setPerfInfoState({
                  ...perfInfoState,
                  isChangedScenario: e.target.value,
                })
              }
            />
          </Content>
        </Input>
        {perfInfoState.isChangedScenario === "각색있음" && (
          <Input>
            <SubTitle>각색범위</SubTitle>
            <Content>
              <CheckSection>
                {items_rangeOfChange.map((label, index) => (
                  <li key={index}>
                    <CheckBoxWrapper
                      widthHeight={"20px"}
                      checked={perfInfoState.changedRange.includes(label)}
                      onClick={() => checkRangeHandler(label)}
                    >
                      <FaCheck
                        size={"15px"}
                        color={
                          perfInfoState.changedRange.includes(label)
                            ? color.white
                            : color.black5
                        }
                      />
                    </CheckBoxWrapper>
                    <div>{label}</div>
                  </li>
                ))}
              </CheckSection>
            </Content>
          </Input>
        )}
        <Input>
          <SubTitle>필요자료</SubTitle>
          <Content>
            <CheckSection>
              {items_requireMaterial.map((label, index) => (
                <li key={index}>
                  <CheckBoxWrapper
                    widthHeight={"20px"}
                    checked={perfInfoState.requiredMaterials.includes(label)}
                    onClick={() => checkRequireHandler(label)}
                  >
                    <FaCheck
                      size={"15px"}
                      color={
                        perfInfoState.requiredMaterials.includes(label)
                          ? color.white
                          : color.black5
                      }
                    />
                  </CheckBoxWrapper>
                  <div>{label}</div>
                </li>
              ))}
            </CheckSection>
          </Content>
        </Input>
        <Input>
          <SubTitle>선택자료</SubTitle>
          <Content>
            <CheckSection>
              {items_selectMaterial.map((label, index) => (
                <li key={index}>
                  <CheckBoxWrapper
                    widthHeight={"20px"}
                    checked={perfInfoState.selectedMaterials.includes(label)}
                    onClick={() => checkSelectHandler(label)}
                  >
                    <FaCheck
                      size={"15px"}
                      color={
                        perfInfoState.selectedMaterials.includes(label)
                          ? color.white
                          : color.black5
                      }
                    />
                  </CheckBoxWrapper>
                  <div>{label}</div>
                </li>
              ))}
            </CheckSection>
          </Content>
        </Input>
        <Input>
          <SubTitle>공연참여인원</SubTitle>
          <Content>
            <InputArea>
              <InputArea_Row1>
                <Selector
                  options={["선택해주세요", "배우"]}
                  onChange={(e) =>
                    setPerfInfoState({
                      ...perfInfoState,
                      participant: {
                        ...perfInfoState.participant,
                        actor: {
                          ...perfInfoState.participant.actor,
                          select: e.target.value,
                        },
                      },
                    })
                  }
                  value={perfInfoState.participant.actor["select"]}
                />
                <BasicInput
                  width={"100%"}
                  placeholder={"배우 참여인원수를 입력해주세요."}
                  background={color.gray1}
                  onChange={(e) =>
                    setPerfInfoState({
                      ...perfInfoState,
                      participant: {
                        ...perfInfoState.participant,
                        actor: {
                          ...perfInfoState.participant.actor,
                          input: e.target.value,
                        },
                      },
                    })
                  }
                  value={perfInfoState.participant.actor["input"]}
                />
              </InputArea_Row1>
              <InputArea_Row1>
                <Selector
                  value={perfInfoState.participant.staff["select"]}
                  options={["선택해주세요", "스텝"]}
                  onChange={(e) =>
                    setPerfInfoState({
                      ...perfInfoState,
                      participant: {
                        ...perfInfoState.participant,
                        staff: {
                          ...perfInfoState.participant.staff,
                          select: e.target.value,
                        },
                      },
                    })
                  }
                />
                <BasicInput
                  width={"100%"}
                  placeholder={"스텝 참여인원수를 입력해주세요."}
                  background={color.gray1}
                  onChange={(e) =>
                    setPerfInfoState({
                      ...perfInfoState,
                      participant: {
                        ...perfInfoState.participant,
                        staff: {
                          ...perfInfoState.participant.staff,
                          input: e.target.value,
                        },
                      },
                    })
                  }
                  value={perfInfoState.participant.staff["input"]}
                />
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>
      </InputSection>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  border-radius: 14px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  padding: 33px 47px 40px 38px;
`;
const HeadSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 34px;
  & > p {
    margin: 0;
    margin-top: 14px;
    font-family: "NotoSansCJKkr-Regular";
    font-size: 12px;
    line-height: 12px;
    color: ${color.black3};
  }
`;
const Title = styled.div`
  color: ${color.orange};
  font-family: "NotoSansCJKkr-Bold";
  line-height: 24px;
  font-size: 24px;
`;

const InputSection = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
const Input = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 28px;
`;
const SubTitle = styled.div`
  width: 20%;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  line-height: 16px;
`;
const Content = styled.div`
  display: flex;
  width: 80%;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const InputArea_Row1 = styled.div`
  display: flex;
  width: 100%;
`;

const CheckSection = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 33px;
`;

const DateArea = styled.div`
  display: flex;
  width: 80%;
`;

const AddBtnContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;

const Date_ = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${color.black5};
  height: 40px;
  border-radius: 8px;
`;
const Date_Start = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  input {
    display: block;
    padding-left: 16px;
    height: 30px;
    width: calc(90% - 20px);
    border: none;
  }
`;
const Date_Name = styled.div`
  width: 45px;
`;
const Date_End = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  input {
    display: block;
    padding-left: 16px;
    height: 30px;
    width: calc(90% - 20px);
    border: none;
  }
`;
const Date_Div = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Divider = styled.div`
  width: 70%;
  height: 1px;
  background-color: ${color.black5};
`;
export default AboutPerformance;
