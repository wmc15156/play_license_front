import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import { useState, memo } from "react";

const CircleCheckBox = ({ name, text, onClickRadio }) => {
  const [selectOption, setSelectOption] = useState(false);

  const selectChangeHandler = (e) => {
    const { value } = e.target;
    console.log(value, "라디오버튼");
    // setSelectOption(value);
  };

  return (
    <>
      {/* <Container> */}

      <CheckBox
        name={name}
        value={text}
        checked={true}
        // onChange={onClickRadio}
        onClick={onClickRadio}
      >
        <LittleCircle checked={true}></LittleCircle>
      </CheckBox>
      <Text>{text}</Text>
      {/* </Container> */}
    </>
  );
};

const Container = styled.div`
  display: inline-block;
  max-width: 300px;
`;

const CheckBox = styled.span`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${color.black5};
  ${(props) =>
    props.checked &&
    css`
      border: 3px solid ${color.orange};
    `};
`;

const LittleCircle = styled.span`
  position: absolute;
  top: 4.5px;
  left: 4.5px;
  display: inline-block;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  ${(props) =>
    props.checked &&
    css`
      background-color: ${color.orange};
    `};
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  margin-right: 42px;
`;

export default CircleCheckBox;
