import styled from "styled-components";
import color from "../../../styles/colors";
import GrayButton from "../../../src/component/Button/GrayShortBtn";
import OrangeButton from "../../../src/component/Button/OriginalButton";
import { useState, useEffect, useReducer, useContext } from "react";
import axios from "axios";
import {
  ProviderInfoContext,
  providerInfoReducer,
  providerInfoInitialState,
} from "../../../reducers/providerInfo";

const Info_ModifyBtns = ({ changeMode }) => {
  const [state, dispatch] = useContext(ProviderInfoContext);
  const saveButtonHandler = () => {
    const params = state.changed;
    console.log("편집 저장하기 ", params);
    axios
      .patch("/user/update/provider", params)
      .then((res) => {
        console.log(res);
        changeMode("default");
      })
      .catch((err) => console.log(err.response));
  };

  console.log(state, "btns state는?");
  return (
    <Container>
      <GrayButton
        text={"취소"}
        size={"12px"}
        height={"36px"}
        fontColor={color.black2}
        onClickHandler={() => changeMode("default")}
      />
      <Margin />
      <OrangeButton
        width={"100%"}
        background={true}
        margin={"0px"}
        height={"36px"}
        size={"12px"}
        onClick={saveButtonHandler}
      >
        저장하기
      </OrangeButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Margin = styled.div`
  width: 20px;
`;
export default Info_ModifyBtns;
