import styled from "styled-components";
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

const AboutPerformance_edu = ({ perfInfoState, setPerfInfoState }) => {
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
                  value={perfInfoState.objective[0]}
                  options={[
                    "선택해주세요",
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
            <Selector
              value={perfInfoState.period}
              options={["선택해주세요", "A형(6개월)", "B형(12개월)"]}
              onChange={(e) =>
                setPerfInfoState({
                  ...perfInfoState,
                  period: e.target.value,
                })
              }
            />
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
                    date={perfInfoState.startDate[0].startDate}
                    setDate={(e) =>
                      setPerfInfoState({
                        ...perfInfoState,
                        startDate: [
                          { ...perfInfoState.startDate[0], startDate: e },
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
                    date={perfInfoState.startDate[0].endDate}
                    setDate={(e) =>
                      setPerfInfoState({
                        ...perfInfoState,
                        startDate: [
                          { ...perfInfoState.startDate[0], endDate: e },
                        ],
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
  margin-bottom: 39px;
  & > p {
    margin-top: 17px;
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

export default AboutPerformance_edu;
