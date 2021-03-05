import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ title, cate, id, answer }) => {
  const [open, setOpen] = useState(false);

  const [hover, setHover] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const hoverHandler = () => {
    setHover(true);
  };
  const hoverOutHandler = () => {
    setHover(false);
  };

  return (
    <Container>
      <Wrapper
        open={open}
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverOutHandler}
      >
        <Categ hover={hover} focus={open}>
          {cate}
        </Categ>
        <Title hover={hover} focus={open}>
          <div>{title}</div>
        </Title>
        <HeaderIcon hover={hover} focus={open}>
          <p>{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
        </HeaderIcon>
      </Wrapper>
      {open && (
        <Content open={open}>
          <Box />
          <Text>
            <P>{answer}</P>
          </Text>
        </Content>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border-top: 1px solid ${color.black5}; */
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;
  color: ${color.black1};
  cursor: pointer;
  padding: 23px 0;
  width: 100%;
  text-align: left;
  border: none;
  border-bottom: ${(props) => {
    if (props.open) {
      return "none";
    } else {
      return `1px solid ${color.black5}`;
    }
  }};
  outline: none;
  transition: 0.4s;
`;

const Categ = styled.div`
  background-color: ${color.gray1};
  color: ${color.black3};
  ${(props) =>
    props.hover &&
    css`
      background-color: ${color.orange};
      color: ${color.white};
    `}

  ${(props) =>
    props.focus &&
    css`
      background-color: ${color.orange};
      color: ${color.white};
    `}  

  border-radius: 4px;
  width: 60px;
  height: 28px;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12%;
`;

const Title = styled.div`
  color: ${(props) => props.hover && color.orange};
  ${(props) =>
    props.focus &&
    css`
      color: ${color.orange};
    `}
`;
const HeaderIcon = styled.div`
  margin-left: auto;
  margin-right: 29px;
  color: ${(props) => props.hover && color.orange};
  ${(props) =>
    props.focus &&
    css`
      color: ${color.orange};
    `}
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  border-bottom: ${(props) => {
    if (props.open) {
      return `1px solid ${color.black5}`;
    } else {
      return "none";
    }
  }};
`;

const Box = styled.div`
  height: 10px;
  margin-right: 12%;
  width: 60px;
`;

const Text = styled.div`
  width: 67%;
  height: 100%;
  padding: 10px 0 32px 0;
  margin-right: 29px;
`;

const P = styled.div`
  width: width;
  margin: 0;
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 24px;
  color: ${color.black2};
  word-wrap: break-word;
`;

export default Accordion;
