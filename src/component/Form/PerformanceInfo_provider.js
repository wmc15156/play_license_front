import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import { useCallback } from "react";
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
  const handleStartDateInput = (i, e) => {
    const planValues = [...perfInfoState.plan];
    planValues[i]["startDate"] = e;
    setPerfInfoState({ ...perfInfoState, plan: planValues });
  };

  const handleEndDateInput = (i, e) => {
    const planValues = [...perfInfoState.plan];
    planValues[i]["endDate"] = e;
    setPerfInfoState({ ...perfInfoState, plan: planValues });
  };

  const handleAddCalendars = () => {
    setPerfInfoState({
      ...perfInfoState,
      plan: [...perfInfoState.plan, { startDate: "", endDate: "" }],
    });
  };

  const handleRemoveCalendars = (i) => {
    const planValues = [...perfInfoState.plan];
    planValues.splice(i, 1);
    setPerfInfoState({ ...perfInfoState, plan: planValues });
  };

  const removeSelectItemHandler = useCallback(
    (name) => {
      let array = perfInfoState.selectedMaterials.select;
      let itemIdx = array.indexOf(name);
      array.splice(itemIdx, 1);
      setPerfInfoState((prev) => {
        return {
          ...prev,
          selectedMaterials: {
            select: [...array],
            input: perfInfoState.selectedMaterials.input,
          },
        };
      });
    },
    [perfInfoState.selectedMaterials.select]
  );

  const checkSelectHandler = (name) => {
    if (perfInfoState.selectedMaterials.select.includes(name)) {
      removeSelectItemHandler(name);
    } else {
      setPerfInfoState({
        ...perfInfoState,
        selectedMaterials: {
          select: [...perfInfoState.selectedMaterials.select, name],
          input: perfInfoState.selectedMaterials.input,
        },
      });
    }
  };

  const removeRequireItemHandler = useCallback(
    (name) => {
      let array = perfInfoState.requiredMaterials;
      let itemIdx = array.indexOf(name);
      array.splice(itemIdx, 1);
      setPerfInfoState((prev) => {
        return { ...prev, requiredMaterials: [...array] };
      });
    },
    [perfInfoState.requiredMaterials]
  );

  const checkRequireHandler = (name) => {
    if (perfInfoState.requiredMaterials.includes(name)) {
      removeRequireItemHandler(name);
    } else {
      setPerfInfoState({
        ...perfInfoState,
        requiredMaterials: [...perfInfoState.requiredMaterials, name],
      });
    }
  };

  const removeRangeItemHandler = useCallback(
    (name) => {
      let array = perfInfoState.changedRange.select;
      let itemIdx = array.indexOf(name);
      array.splice(itemIdx, 1);
      setPerfInfoState((prev) => {
        return {
          ...prev,
          changedRange: {
            select: [...array],
            input: perfInfoState.changedRange.input,
          },
        };
      });
    },
    [perfInfoState.changedRange.select]
  );

  const checkRangeHandler = (name) => {
    // perfInfoState.changedRange label있는지 체크 있으면 빼기 없으면 추가
    if (perfInfoState.changedRange.select.includes(name)) {
      removeRangeItemHandler(name);
    } else {
      setPerfInfoState({
        ...perfInfoState,
        changedRange: {
          select: [...perfInfoState.changedRange.select, name],
          input: perfInfoState.changedRange.input,
        },
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
              {perfInfoState.plan.map((calendar, i) => {
                {
                  /* calendar = { startDate: "", endDate: "" } */
                }
                return (
                  <InputArea_Row1>
                    <DateArea>
                      <Date_>
                        <Date_Start>
                          <Date_Name>시작</Date_Name>
                          <label>
                            <DatePicker
                              date={calendar.startDate}
                              setDate={(e) => handleStartDateInput(i, e)}
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
                              date={calendar.endDate}
                              setDate={(e) => handleEndDateInput(i, e)}
                            />
                          </label>
                        </Date_End>
                      </Date_>
                    </DateArea>
                    {i !== 0 && (
                      <BtnContainer>
                        <GrayBtn
                          size={"14px"}
                          height={"40px"}
                          fontColor={color.black2}
                          onClickHandler={() => handleRemoveCalendars(i)}
                          text={"일정삭제"}
                        />
                      </BtnContainer>
                    )}
                    {i === 0 && (
                      <BtnContainer>
                        <GrayBtn
                          size={"14px"}
                          height={"40px"}
                          fontColor={color.black2}
                          onClickHandler={handleAddCalendars}
                          text={"일정추가"}
                        />
                      </BtnContainer>
                    )}
                  </InputArea_Row1>
                );
              })}
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>공연회차</SubTitle>

          <Content>
            <SelectorWrapper>
              <Selector
                value={perfInfoState.round}
                options={[1, 2, 3]}
                onChange={(e) =>
                  setPerfInfoState({
                    ...perfInfoState,
                    round: e.target.value,
                  })
                }
              />
            </SelectorWrapper>
          </Content>
        </Input>
        <Input>
          <SubTitle>공연장소</SubTitle>
          <Content>
            <InputArea>
              <InputArea_Row1>
                <SelectorWrapper>
                  <Selector
                    value={perfInfoState.place["place_select"]}
                    options={[1, 2, 3]}
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
                </SelectorWrapper>
                <InputWrapper>
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
                </InputWrapper>
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
              options={["각색있음", "각색없음"]}
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
                  <CheckItem key={index} labelName={label}>
                    <CheckBox>
                      <CheckBoxWrapper
                        widthHeight={"20px"}
                        checked={perfInfoState.changedRange.select.includes(
                          label
                        )}
                        onClick={() => checkRangeHandler(label)}
                      >
                        <FaCheck
                          size={"15px"}
                          color={
                            perfInfoState.changedRange.select.includes(label)
                              ? color.white
                              : color.black5
                          }
                        />
                      </CheckBoxWrapper>
                    </CheckBox>
                    <Check_label>{label}</Check_label>
                    {label === "기타" &&
                      perfInfoState.changedRange.select.includes("기타") && (
                        <BasicInput
                          width={"100%"}
                          placeholder={"직접입력"}
                          background={color.gray1}
                          onChange={(e) =>
                            setPerfInfoState({
                              ...perfInfoState,
                              changedRange: {
                                select: [...perfInfoState.changedRange.select],
                                input: e.target.value,
                              },
                            })
                          }
                          value={perfInfoState.changedRange.input}
                        />
                      )}
                  </CheckItem>
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
                <CheckItem key={index}>
                  <CheckBox>
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
                  </CheckBox>
                  <Check_label>{label}</Check_label>
                </CheckItem>
              ))}
            </CheckSection>
          </Content>
        </Input>
        <Input>
          <SubTitle>선택자료</SubTitle>
          <Content>
            <CheckSection>
              {items_selectMaterial.map((label, index) => (
                <>
                  <CheckItem key={index} labelName={label}>
                    <CheckBox>
                      <CheckBoxWrapper
                        widthHeight={"20px"}
                        checked={perfInfoState.selectedMaterials.select.includes(
                          label
                        )}
                        onClick={() => checkSelectHandler(label)}
                      >
                        <FaCheck
                          size={"15px"}
                          color={
                            perfInfoState.selectedMaterials.select.includes(
                              label
                            )
                              ? color.white
                              : color.black5
                          }
                        />
                      </CheckBoxWrapper>
                    </CheckBox>
                    <Check_label>{label}</Check_label>
                    {label === "기타" &&
                      perfInfoState.selectedMaterials.select.includes(
                        "기타"
                      ) && (
                        <>
                          <BasicInput
                            width={"100%"}
                            placeholder={"직접입력"}
                            background={color.gray1}
                            onChange={(e) =>
                              setPerfInfoState({
                                ...perfInfoState,
                                selectedMaterials: {
                                  select: [
                                    ...perfInfoState.selectedMaterials.select,
                                  ],
                                  input: e.target.value,
                                },
                              })
                            }
                            value={perfInfoState.selectedMaterials.input}
                          />
                          <Span>*최종 제공 자료는 협의 후 결정</Span>
                        </>
                      )}
                  </CheckItem>
                </>
              ))}
            </CheckSection>
          </Content>
        </Input>
        <Input>
          <SubTitle>공연참여인원</SubTitle>
          <Content>
            <InputArea>
              <InputArea_Row1>
                <SelectorWrapper>
                  <Selector
                    options={["배우"]}
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
                </SelectorWrapper>
                <InputWrapper>
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
                </InputWrapper>
              </InputArea_Row1>
              <InputArea_Row1>
                <SelectorWrapper>
                  <Selector
                    value={perfInfoState.participant.staff["select"]}
                    options={["스텝"]}
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
                </SelectorWrapper>
                <InputWrapper>
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
                </InputWrapper>
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
  align-items: baseline;
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
const SelectorWrapper = styled.div`
  width: 207px;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-left: 5%;
`;
const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const InputArea_Row1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const CheckSection = styled.ul`
  width: 100%;
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* margin-top: 33px; */
`;

const CheckBox = styled.div`
  width: 20px;
`;
const CheckItem = styled.li`
  /* margin: 0;
  padding: 0; */
  display: flex;
  align-items: center;
  /* max-width: 210px; */
  width: 30%;
  margin-bottom: 32px;

  ${(props) =>
    props.labelName === "기타" &&
    css`
      width: 70%;
    `}
`;

const Check_label = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  margin-left: 8px;
  letter-spacing: -0.5px;
  min-width: 35px;
`;

const DateArea = styled.div`
  display: flex;
  width: 78%;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  width: 18%;
`;

const Date_ = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${color.black5};
  height: 40px;
  border-radius: 8px;
  /* padding: 0 20px; */
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
  padding-left: 20px;
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

const Span = styled.span`
  width: 100%;
  color: ${color.black3};
  letter-spacing: -0.5px;
  line-height: 12px;
  font-size: 12px;
  font-family: "NotoSansCJKkr-Regular";
  margin-left: 12px;
`;

export default AboutPerformance;
