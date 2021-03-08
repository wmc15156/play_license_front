import styled from "styled-components";
import color from "../../../styles/colors";
import { useContext, useReducer } from "react";
import { BuyingContext } from "../../../store/buyingStore";
import { buyingInitialState, buyingReducer } from "../../../reducers/buying";
import BasicInput from "../BasicInput/BasicInputColor";
import {
  SAVE_GROUP_NAME,
  SAVE_ABOUT_GROUP,
} from "../../../reducers/types/types";

const Group = () => {
  const [state, dispatch] = useReducer(buyingReducer, buyingInitialState);
  const updateGroupname = (e) =>
    dispatch({ type: SAVE_GROUP_NAME, groupName: e.target.value });

  const updateAboutGroup = (e) =>
    dispatch({ type: SAVE_ABOUT_GROUP, aboutGroup: e.target.value });

  console.log(state, "state??", state.groupName, state.aboutGroup);
  return (
    <Container>
      <HeadSection>
        <Title>소속단체정보</Title>
        <p>소속된 단체에 대한 정보를 알려주세요.</p>
      </HeadSection>
      <InputSection>
        <Input>
          <SubTitle>단체이름</SubTitle>
          <BasicInput
            width={"100%"}
            placeholder={"동호회명이나 동아리명 등의 이름을 적어주세요"}
            onChange={updateGroupname}
            value={state.groupName}
          />
        </Input>
        <Input>
          <SubTitle>소속소개</SubTitle>
          <BasicInput
            width={"100%"}
            placeholder={"소개말을 적어주세요"}
            onChange={updateAboutGroup}
            value={state.aboutGroup}
          />
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
  justify-content: space-between;
  margin-bottom: 28px;
`;
const SubTitle = styled.div`
  width: 140px;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  line-height: 16px;
`;
const InputBox = styled.input`
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: 1px solid ${color.black5};
`;

export default Group;
