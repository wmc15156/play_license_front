import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import { useCallback } from "react";
import BasicInput from "../../component/BasicInput/BasicInputColor";
import CheckBoxWrapper from "../../component/CheckBoxWrapper/CircleCheckBoxWrapper";
import { FaCheck } from "react-icons/fa";
import Selector from "../../component/Input/SelectOption";

const items_purpose = ["공연 목적", "교육 목적", "기타 목적"];
const items_requireMaterial = ["대본", "악보", "원본 포스터"];
const items_selectMaterial1 = ["연습MR", "공연MR", "총보"];
const items_selectMaterial2 = [
  "공연실황영상",
  "무대디자인",
  "소품디자인 및 리스트",
  "의상디자인",
  "음향리스트 및 파일",
  "안무가이드",
  "기타",
];

const PerformanceInfo1 = ({ perfInfo, setPerfInfo }) => {
  // const isCheckedHandler = (name) => {
  //   let names = ;
  //   return ;
  // };

  const removeSelectItemHandler = useCallback(
    (name) => {
      let array = perfInfo.selectedMaterials.select;
      let itemIdx = array.map((e) => e.name).indexOf(name);
      array.splice(itemIdx, 1);
      setPerfInfo((prev) => {
        return {
          ...prev,
          selectedMaterials: {
            select: [...array],
            input: perfInfo.selectedMaterials.input,
          },
        };
      });
    },
    [perfInfo.selectedMaterials.select]
  );

  const checkSelectHandler = (name) => {
    let names = perfInfo.selectedMaterials.select.map((e) => e.name);
    if (names.includes(name)) {
      removeSelectItemHandler(name);
    } else {
      setPerfInfo({
        ...perfInfo,
        selectedMaterials: {
          select: [
            ...perfInfo.selectedMaterials.select,
            { name: name, price: "", original: "", etc: "" },
          ],
          input: perfInfo.selectedMaterials.input,
        },
      });
    }
  };

  const removeRequireItemHandler = useCallback(
    (name) => {
      let array = perfInfo.requiredMaterials.select;
      let itemIdx = array.map((e) => e.name).indexOf(name);
      array.splice(itemIdx, 1);
      setPerfInfo((prev) => {
        return {
          ...prev,
          requiredMaterials: {
            select: [...array],
          },
        };
      });
    },
    [perfInfo.requiredMaterials.select]
  );

  const checkRequireHandler = (name) => {
    let names = perfInfo.requiredMaterials.select.map((e) => e.name);
    if (names.includes(name)) {
      removeRequireItemHandler(name);
    } else {
      setPerfInfo({
        ...perfInfo,
        requiredMaterials: {
          select: [
            ...perfInfo.requiredMaterials.select,
            { name: name, price: "", original: "", etc: "" },
          ],
        },
      });
    }
  };

  const removePurposeItemHandler = useCallback(
    (name) => {
      let array = perfInfo.purpose;
      let itemIdx = array.indexOf(name);
      array.splice(itemIdx, 1);
      setPerfInfo((prev) => {
        return { ...prev, purpose: [...array] };
      });
    },
    [perfInfo.purpose]
  );

  const checkPurposeHandler = (name) => {
    if (perfInfo.purpose.includes(name)) {
      removePurposeItemHandler(name);
    } else {
      setPerfInfo({
        ...perfInfo,
        purpose: [...perfInfo.purpose, name],
      });
    }
  };

  return (
    <Container>
      <HeadSection>
        <Title>작품 정보</Title>
        <p>판매하실 작품에 대한 정보를 입력해주세요.</p>
      </HeadSection>
      <InputSection>
        <Input>
          <SubTitle>등록할 작품명</SubTitle>
          <Content>
            <BasicInput
              width={"100%"}
              placeholder={"입력해주세요"}
              onChange={(e) =>
                setPerfInfo({
                  ...perfInfo,
                  title: e.target.value,
                })
              }
              value={perfInfo.title}
            />
          </Content>
        </Input>
        <Input>
          <SubTitle>중개위탁 분야</SubTitle>
          <Content>
            <CheckSection>
              {items_purpose.map((label, index) => (
                <CheckItem key={index}>
                  <CheckBox>
                    <CheckBoxWrapper
                      widthHeight={"20px"}
                      checked={perfInfo.purpose.includes(label)}
                      onClick={() => checkPurposeHandler(label)}
                    >
                      <FaCheck
                        size={"15px"}
                        color={
                          perfInfo.purpose.includes(label)
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
          <SubTitle>초연연도</SubTitle>

          <Content>
            <SelectorWrapper>
              <Selector
                value={perfInfo.year}
                options={[1, 2, 3]}
                onChange={(e) =>
                  setPerfInfo({
                    ...perfInfo,
                    year: e.target.value,
                  })
                }
              />
            </SelectorWrapper>
          </Content>
        </Input>
        <Input>
          <SubTitle>필요자료</SubTitle>
          <Content>
            <CheckSection>
              {items_requireMaterial.map((label, index) => (
                <CheckItem key={index}>
                  <CheckBox>
                    <CheckBoxWrapper
                      widthHeight={"20px"}
                      checked={perfInfo.requiredMaterials.select
                        .map((e) => e.name)
                        .includes(label)}
                      onClick={() => checkRequireHandler(label)}
                    >
                      <FaCheck
                        size={"15px"}
                        color={
                          perfInfo.requiredMaterials.select
                            .map((e) => e.name)
                            .includes(label)
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
          <SubTitle>선택자료1</SubTitle>
          <Content>
            <CheckSection>
              {items_selectMaterial1.map((label, index) => (
                <>
                  <CheckItem key={index} labelName={label}>
                    <CheckBox>
                      <CheckBoxWrapper
                        widthHeight={"20px"}
                        checked={perfInfo.selectedMaterials.select
                          .map((e) => e.name)
                          .includes(label)}
                        onClick={() => checkSelectHandler(label)}
                      >
                        <FaCheck
                          size={"15px"}
                          color={
                            perfInfo.selectedMaterials.select
                              .map((e) => e.name)
                              .includes(label)
                              ? color.white
                              : color.black5
                          }
                        />
                      </CheckBoxWrapper>
                    </CheckBox>
                    <Check_label>{label}</Check_label>
                  </CheckItem>
                </>
              ))}
            </CheckSection>
          </Content>
        </Input>
        <Input>
          <SubTitle>선택자료2</SubTitle>
          <Content>
            <CheckSection>
              {items_selectMaterial2.map((label, index) => (
                <>
                  <CheckItem key={index} labelName={label}>
                    <CheckBox>
                      <CheckBoxWrapper
                        widthHeight={"20px"}
                        checked={perfInfo.selectedMaterials.select
                          .map((e) => e.name)
                          .includes(label)}
                        onClick={() => checkSelectHandler(label)}
                      >
                        <FaCheck
                          size={"15px"}
                          color={
                            perfInfo.selectedMaterials.select
                              .map((e) => e.name)
                              .includes(label)
                              ? color.white
                              : color.black5
                          }
                        />
                      </CheckBoxWrapper>
                    </CheckBox>
                    <Check_label>{label}</Check_label>
                    {label === "기타" &&
                      perfInfo.selectedMaterials.select.includes("기타") && (
                        <>
                          <BasicInput
                            width={"100%"}
                            placeholder={"직접입력"}
                            background={color.gray1}
                            onChange={(e) =>
                              setPerfInfo({
                                ...perfInfo,
                                selectedMaterials: {
                                  select: [
                                    ...perfInfo.selectedMaterials.select,
                                  ],
                                  input: e.target.value,
                                },
                              })
                            }
                            value={perfInfo.selectedMaterials.input}
                          />
                        </>
                      )}
                  </CheckItem>
                </>
              ))}
            </CheckSection>
          </Content>
        </Input>
        <Input>
          <SubTitle>남기실 말씀</SubTitle>
          <Content>
            <BasicInput
              width={"100%"}
              placeholder={"자유롭게 입력해주세요"}
              background={color.gray1}
              onChange={(e) =>
                setPerfInfo({
                  ...perfInfo,
                  comment: e.target.value,
                })
              }
              value={perfInfo.comment}
            />
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
      width: 100%;
    `}
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

export default PerformanceInfo1;
