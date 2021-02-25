import styled from "styled-components";
import React from "react";

const CheckBox = (props) => {
  return (
    <Container>
      <label htmlFor="checkbtn" className="check-btn"></label>
      <Input
        id="checkbtn"
        type="checkbox"
        checked={props.checked}
        onChange={props.handleChange}
      />
    </Container>
  );
};



const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 15px;
  border: 10px;
  font-weight: bolder;

  /* .check-btn + input[id="checkbtn"] {
    width: 24px;
    height: 24px;
    background-color: #e85377;
    cursor: pointer;
    color: #fff;
  } */
  /* input[id="checkbtn"]:checked {
    width: 24px;
    height: 24px;
    background-color: #e85377;
    cursor: pointer;
    color: #fff;
  } */
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  vertical-align: middle;
  background: ${(props) => (props.checked ? "#e85377" : "papayawhip")};
  /* background: #e85377; */
  cursor: pointer;
  color: #fff;
  padding: 0;
`;
export default CheckBox;
