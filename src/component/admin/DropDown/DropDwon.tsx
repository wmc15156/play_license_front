import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";
import colors from "@styles/colors";
import { FC } from "react";

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
    & > img {
    margin-left: 26px;
  }
`;

type Props = {
  text: string;
  img?: boolean;
  position?: boolean;
  flexEnd?: boolean;
  toggle?: () => void
};

const DropDown: FC<Props> = ({ text, img, position,flexEnd, toggle }) => {
  return (
    <>
      <Wrapper position={position} onClick={toggle}>
        <span>{text}</span>
        {img && <img src={"/assets/image/Arrow_Down_Circle.png"} />}
      </Wrapper>
    </>
  );
};

export default DropDown;
