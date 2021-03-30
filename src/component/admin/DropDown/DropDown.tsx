import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";
import colors from "@styles/colors";
import { FC } from "react";
import {IoIosArrowDropdownCircle} from "react-icons/io"

const Wrapper = styled.div<{
  position: boolean;
}>`
  width: 100%;
  font-family: "NotoSansCJKkr-Regular";
  max-width: 174px;
  justify-content: center;
  display: flex;
  border: 1px solid ${colors.black5};
  border-radius: 6px;
  height: 48px;
  cursor: pointer;
  align-items: center;
    & > span {
    margin-left: 26px;
    line-height: 20px;
      & > svg {
        display: flex;
        align-items: center;
      }
  }
`;

type Props = {
  text: string;
  img?: boolean;
  position?: boolean;
  flexEnd?: boolean;
  color: string;
  toggle?: () => void
};

const DropDown: FC<Props> = ({ text, img, position,flexEnd, toggle, color }) => {
  return (
    <>
      <Wrapper position={position} onClick={toggle}>
        <div>{text}</div>
        {img && <span><IoIosArrowDropdownCircle color={color} size={20}/></span>}
      </Wrapper>
    </>
  );
};

export default DropDown;
