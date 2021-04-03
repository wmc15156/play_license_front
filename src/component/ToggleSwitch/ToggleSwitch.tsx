import styled from "styled-components";
import { VFC } from "react";
import colors from "@styles/colors";

const CheckBoxWrapper = styled.div<{ marginRight: string }>`
  position: relative;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : null)};
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  mix-blend-mode: normal;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    cursor: pointer;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${props=> props.color ? props.color : colors.orange};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

type Props = {
  on: boolean;
  switchBtnHandler: () => void;
  color?: string;
  marginRight?: string; // optional
};

const ToggleSwitchBtn: VFC<Props> = ({ on, switchBtnHandler, color, marginRight }) => {
  return (
    <div>
      <CheckBoxWrapper marginRight={marginRight} onClick={switchBtnHandler}>
        <CheckBox id="checkbox" type="checkbox" checked={on} color={color}/>
        <CheckBoxLabel />
      </CheckBoxWrapper>
    </div>
  );
};

export default ToggleSwitchBtn;
