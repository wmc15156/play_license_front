import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";
import colors from "@styles/colors";
import { FC } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
const Wrapper = styled.div<{
  position: boolean;
  maxWidth?: string;
  height?: string;
  special?: boolean;
}>`
  box-sizing: border-box;
  width: 100%;
  font-family: "NotoSansCJKkr-Regular";
  max-width: ${(p) => (p.maxWidth ? p.maxWidth : "174px")};
  justify-content: center;
  display: flex;
  border: 1px solid ${colors.black5};
  border-radius: 6px;
  height: ${(p) => (p.height ? p.height : "48px")};
  cursor: pointer;
  align-items: center;
  position: relative;
  z-index: 5;

  & > div {
    color: ${(p) => (p.special ? `${colors.orange}` : null)};
  }

  & > span {
    margin-left: 26px;
    line-height: 20px;
    & > svg {
      display: flex;
      align-items: center;
    }
  }
`;

const ImgWrapper = styled.div`
  position: absolute;
  height: 20px;
  top: 0;
  bottom: 0;
  right: 17px;
  margin: auto 0;
`;

type Props = {
  text: string;
  img?: boolean;
  position?: boolean;
  flexEnd?: boolean;
  color: string;
  maxWidth?: string;
  toggle?: () => void;
  height?: string;
  header?: boolean;
};

const DropDown: FC<Props> = ({
  text,
  img,
  position,
  flexEnd,
  toggle,
  color,
  maxWidth,
  height,
  header = true,
}) => {
  console.log("header", text);
  return (
    <>
      <Wrapper
        position={position}
        onClick={toggle}
        maxWidth={maxWidth}
        height={height}
        special={text === "스페셜"}
      >
        <div>{text}</div>
        {img && (
          <span>
            {header ? (
              <IoIosArrowDropdownCircle color={color} size={20} />
            ) : (
              <ImgWrapper>
                <MdArrowDropDown size={20} />
              </ImgWrapper>
            )}
          </span>
        )}
      </Wrapper>
    </>
  );
};

export default DropDown;
