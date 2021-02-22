import styled from "styled-components";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ title, cate, id, answer }) => {
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const handleClick = (item) => {};
  return (
    <Container>
      <Wrapper
        open={open}
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <Categ>{cate}</Categ>
        <Title>
          <div>{title}</div>
        </Title>
        <HeaderIcon>
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
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;

  color: #333333;
  cursor: pointer;
  padding: 23px 0 23px 0;
  width: 100%;
  text-align: left;
  border: none;
  border-bottom: ${(props) => {
    if (props.open) {
      return "none";
    } else {
      return "1px solid #eee";
    }
  }};
  outline: none;
  transition: 0.4s;
`;
const Categ = styled.div`
  background-color: #f2f2f2;
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
  &:hover {
    background-color: #ff6f69;
    color: #ffffff;
  }
`;

const Title = styled.div`
  &:hover {
    color: #ff6f69;
  }
`;
const HeaderIcon = styled.div`
  margin-left: auto;
  margin-right: 29px;
  &:hover {
    color: #ff6f69;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  border-bottom: ${(props) => {
    if (props.open) {
      return "1px solid #eee";
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
  color: #333333;
  word-wrap: break-word;
`;

export default Accordion;
