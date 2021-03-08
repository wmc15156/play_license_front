import styled from "styled-components";
import color from "../../../styles/colors";
import { useContext, useReducer, useState } from "react";
import { BuyingContext } from "../../../store/buyingStore";
import { buyingInitialState, buyingReducer } from "../../../reducers/buying";
import BasicInput from "../BasicInput/BasicInputColor";
import GrayBtn from "../Button/GrayShortBtn";
import { FaCheck } from "react-icons/fa";
import CheckBoxWrapper from "../CheckBoxWrapper/CheckBoxWrapper";
import {
  SAVE_PLANNED_CONTENTS,
  SAVE_SCHEDULE,
  SAVE_NUMBER,
  SAVE_PLACE,
  SAVE_PRICE,
  SAVE_CHANGE_SCENARIO,
  SAVE_RANGE_OF_CHANGE,
  SAVE_REQUIRED_MATERIALS,
  SAVE_SELECT_MATERIALS,
  SAVE_CAST_MEMBERS,
  SAVE_STAFF_MEMBERS,
} from "../../../reducers/types/types";
// import "antd/dist/antd.css";
import "antd/lib/select/style/index.css";
import "antd/lib/date-picker/style/index.css";
import { Select } from "antd";
import { DatePicker, Radio, Space } from "antd";

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

const { Option } = Select;
const { RangePicker } = DatePicker;

const AboutPerformance = () => {
  const [state, dispatch] = useReducer(buyingReducer, buyingInitialState);
  const [changeScenarioList, setChangeScenarioList] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [requireList, setRequireList] = useState([false, false, false]);
  const [selectList, setSelectList] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  console.log(state, "state??");

  const updateGroupname = (e) =>
    dispatch({ type: SAVE_PLANNED_CONTENTS, plannedContents: e.target.value });

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  // 각색범위
  const handleRangeOfChange = (idx) => {
    setChangeScenarioList((checks) =>
      checks.map((curr, i) => (i === idx ? !curr : curr))
    );
    dispatch({
      type: SAVE_PLANNED_CONTENTS,
      rangeOfChange: changeScenarioList.map(
        (e, i) => (state.rangeOfChange[i] = e)
      ),
    });
  };

  // 필요자료
  const handleRequirements = (idx) => {
    setRequireList((checks) =>
      checks.map((curr, i) => (i === idx ? !curr : curr))
    );
    dispatch({
      type: SAVE_REQUIRED_MATERIALS,
      requiredMaterials: requireList.map(
        (e, i) => (state.requiredMaterials[i] = e)
      ),
    });
  };
  // 선택자료
  const handleSelectMaterials = (idx) => {
    setSelectList((checks) =>
      checks.map((curr, i) => (i === idx ? !curr : curr))
    );
    dispatch({
      type: SAVE_SELECT_MATERIALS,
      selectMaterials: selectList.map((e, i) => (state.selectMaterials[i] = e)),
    });
  };

  const addScheduleHandler = () => {
    console.log("일정추가 버튼 클릭");
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
            <Select
              defaultValue={"0"}
              style={{ width: "100%" }}
              onChange={handleChange}
            >
              <Option value="0">선택해주세요</Option>
              <Option value="1">동호회 작품 발표</Option>
              <Option value="2">공연제 출품</Option>
              <Option value="3">학내 공연</Option>
              <Option value="4">졸업 공연</Option>
              <Option value="5">기타</Option>
              {/* 기타 선택 시 직접입력 필요 */}
            </Select>
          </Content>
        </Input>
        <Input>
          <SubTitle>공연일정</SubTitle>

          <Content>
            <InputArea>
              <InputArea_Row1>
                <RangePicker size={"large"} />
                <GrayBtn
                  size={"14px"}
                  height={"40px"}
                  fontColor={color.black2}
                  onClickHandler={addScheduleHandler}
                  text={"일정추가"}
                />
                {/* 일정추가 시 같은 선택창 필요 */}
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>공연회차</SubTitle>

          <Content>
            <Select
              defaultValue={"0"}
              style={{ width: "100%" }}
              onChange={handleChange}
            >
              <Option value="0">선택해주세요</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
          </Content>
        </Input>
        <Input>
          <SubTitle>공연장소</SubTitle>

          <Content>
            <InputArea>
              <InputArea_Row1>
                <Select
                  defaultValue={"0"}
                  style={{ width: "100%" }}
                  onChange={handleChange}
                >
                  <Option value="0">선택해주세요</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
                <BasicInput
                  width={"100%"}
                  placeholder={"구체적 장소를 입력해주세요."}
                  background={color.gray1}
                  onChange={updateGroupname}
                  value={state.groupName}
                />
              </InputArea_Row1>
              <BasicInput
                width={"100%"}
                placeholder={
                  "비고사항 입력 (예시 : 상설공연장이 아닌 강당입니다.)"
                }
                background={color.gray1}
                onChange={updateGroupname}
                value={state.groupName}
              />
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>티켓가격</SubTitle>

          <Content>
            <InputArea>
              <InputArea_Row1>
                <Select
                  defaultValue={"0"}
                  style={{ width: "100%" }}
                  onChange={handleChange}
                >
                  <Option value="0">선택해주세요</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
                <BasicInput
                  width={"100%"}
                  placeholder={"1매당 가격을 입력해주세요."}
                  background={color.gray1}
                  onChange={updateGroupname}
                  value={state.groupName}
                />
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>각색여부</SubTitle>

          <Content>
            <Select
              defaultValue={"0"}
              style={{ width: "100%" }}
              onChange={handleChange}
            >
              <Option value="0">선택해주세요</Option>
              <Option value="1">각색있음</Option>
              <Option value="2">각색없음</Option>
            </Select>
          </Content>
        </Input>
        <Input>
          <SubTitle>각색범위</SubTitle>
          <Content>
            <CheckSection>
              {items_rangeOfChange.map((label, index) => (
                <li key={index}>
                  <CheckBoxWrapper
                    value={changeScenarioList[index]}
                    onChange={() => handleRangeOfChange(index)}
                  >
                    <FaCheck
                      size={"15px"}
                      color={changeScenarioList[index] ? "white" : "gray"}
                    />
                  </CheckBoxWrapper>
                  <div>{label}</div>
                </li>
              ))}
            </CheckSection>
          </Content>
        </Input>
        <Input>
          <SubTitle>필요자료</SubTitle>
          <Content>
            <CheckSection>
              {items_requireMaterial.map((label, index) => (
                <li key={index}>
                  <CheckBoxWrapper
                    value={requireList[index]}
                    onChange={() => handleRequirements(index)}
                  >
                    <FaCheck
                      size={"15px"}
                      color={requireList[index] ? "white" : "gray"}
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
                    value={selectList[index]}
                    onChange={() => handleSelectMaterials(index)}
                  >
                    <FaCheck
                      size={"15px"}
                      color={selectList[index] ? "white" : "gray"}
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
                <Select
                  defaultValue={"0"}
                  style={{ width: "100%" }}
                  onChange={handleChange}
                >
                  <Option value="0">배우</Option>
                </Select>
                <BasicInput
                  width={"100%"}
                  placeholder={"배우 참여인원수를 입력해주세요."}
                  background={color.gray1}
                  onChange={updateGroupname}
                  value={state.groupName}
                />
              </InputArea_Row1>
              <InputArea_Row1>
                <Select
                  defaultValue={"0"}
                  style={{ width: "100%" }}
                  onChange={handleChange}
                >
                  <Option value="0">스텝</Option>
                </Select>
                <BasicInput
                  width={"100%"}
                  placeholder={"스텝 참여인원수를 입력해주세요."}
                  background={color.gray1}
                  onChange={updateGroupname}
                  value={state.groupName}
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

export default AboutPerformance;
