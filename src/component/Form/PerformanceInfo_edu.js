import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import { useCallback } from "react";
import { FaCheck } from "react-icons/fa";
import CheckBoxWrapper from "../CheckBoxWrapper/CircleCheckBoxWrapper";
import Selector from "../Input/SelectOption";
import BasicInput from "../BasicInput/BasicInputColor";
import DatePicker from "../Input/DatePicker";

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

const AboutPerformance_edu = ({
  perfInfoState,
  setPerfInfoState,
  readOnly,
}) => {
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

  return (
    <Container>
      <HeadSection>
        <Title>공연 정보</Title>
        <p>올릴 공연에 대한 정보를 알려주세요.</p>
      </HeadSection>
      <InputSection>
        <Input>
          <SubTitle>활용목적</SubTitle>
          <Content>
            <InputArea>
              <InputArea_Row1>
                <Selector
                  height={"40px"}
                  readOnly={readOnly}
                  value={perfInfoState.objective[0]}
                  options={[
                    "교육자료개발",
                    "교재 또는 교보재이용",
                    "교과 및 방과후 활동으로 공연",
                    "기타",
                  ]}
                  onChange={(e) =>
                    setPerfInfoState({
                      ...perfInfoState,
                      objective: {
                        ...perfInfoState.objective,
                        0: e.target.value,
                      },
                    })
                  }
                />
              </InputArea_Row1>

              <InputArea_Row1>
                {perfInfoState.objective[0] === "기타" && (
                  <BasicInput
                    height={"40px"}
                    readOnly={readOnly}
                    width={"100%"}
                    placeholder={"직접입력"}
                    background={color.white}
                    onChange={(e) =>
                      setPerfInfoState({
                        ...perfInfoState,
                        objective: {
                          ...perfInfoState.objective,
                          1: e.target.value,
                        },
                      })
                    }
                    value={perfInfoState.objective[1]}
                  />
                )}
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>이용기간</SubTitle>
          <Content>
            <SelectorWrapper>
              <Selector
                height={"40px"}
                readOnly={readOnly}
                value={perfInfoState.period}
                options={["A형(6개월)", "B형(12개월)"]}
                onChange={(e) =>
                  setPerfInfoState({
                    ...perfInfoState,
                    period: e.target.value,
                  })
                }
              />
            </SelectorWrapper>
          </Content>
        </Input>
        <Input>
          <SubTitle>이용 시작일</SubTitle>
          <DateArea>
            <Date_>
              <Date_Start>
                <Date_Name>시작</Date_Name>
                <label>
                  <DatePicker
                    date={perfInfoState.plan[0].startDate}
                    setDate={(e) =>
                      setPerfInfoState({
                        ...perfInfoState,
                        plan: [{ ...perfInfoState.plan[0], startDate: e }],
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
        </Input>

        <Input>
          <SubTitle>필요자료</SubTitle>
          <Content>
            <CheckSection>
              {items_requireMaterial.map((label, index) => (
                <CheckItem key={index}>
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
                            height={"40px"}
                            readOnly={readOnly}
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
  /* margin-bottom: 28px; */
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

const DateArea = styled.div`
  display: flex;
  width: 80%;
`;

const Date_ = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${color.black5};
  height: 40px;
  border-radius: 8px;
  margin-bottom: 22px;
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

const SelectorWrapper = styled.div`
  width: 207px;
  margin-bottom: 28px;
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

const CheckBox = styled.div`
  width: 20px;
`;

const Check_label = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  margin-left: 8px;
  letter-spacing: -0.5px;
  min-width: 35px;
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
export default AboutPerformance_edu;
