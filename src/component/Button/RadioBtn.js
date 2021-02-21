import styled from "styled-components";
import { useState } from "react";

const RadioBtn = ({ name, text, onClickRadio }) => {
  const [selectOption, setSelectOption] = useState(false);

  const selectChangeHandler = (e) => {
    const { value } = e.target;
    console.log(value, "라디오버튼");
    // setSelectOption(value);
  };

  return (
    <Container>
      <Item>
        <RadioLabel htmlFor="radio-select">
          <Radio
            id="radio-select"
            type="radio"
            name={name}
            value={text}
            checked={selectOption}
            onChange={onClickRadio}
            onClick={selectChangeHandler}
          />
        </RadioLabel>
        <Text>{text}</Text>
      </Item>
    </Container>
  );
};

const Container = styled.span`
  display: flex;
  max-width: 300px;
`;
const Item = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const RadioLabel = styled.label`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
const Radio = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 20px;
  height: 20px;

  &:hover ~ ${RadioLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      margin: 3px;
      background: #eeeeee;
    }
  }

  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioLabel} {
      border: 3px solid #ff6f69;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        margin: 3px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        
      background: #ff6f69;
      }
    }
  `}
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  margin-right: 42px;
`;

export default RadioBtn;
