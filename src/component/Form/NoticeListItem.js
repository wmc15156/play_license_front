import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const NoticeListItem = ({ title, cate, id, clickHandler }) => {
  const [hover, setHover] = useState(false);

  const hoverHandler = () => {
    setHover(true);
  };
  const hoverOutHandler = () => {
    setHover(false);
  };

  return (
    <Container>
      <Wrapper
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverOutHandler}
        onClick={clickHandler}
      >
        <Categ hover={hover}>{cate}</Categ>
        <Title hover={hover}>
          <div>{title}</div>
        </Title>
        <HeaderIcon hover={hover}>
          <p>
            <IoIosArrowForward />
          </p>
        </HeaderIcon>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 14px 0;
  border-bottom: 1px solid ${color.black5};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;
  height: 28px;
  color: ${color.black1};
  cursor: pointer;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
`;

const Categ = styled.div`
  background-color: ${color.gray1};
  color: ${color.black3};
  ${(props) =>
    props.hover &&
    css`
      background-color: ${color.orange};
      color: ${color.white};
    `};
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
`;

const HeaderIcon = styled.div`
  margin-left: auto;
  margin-right: 29px;
  color: ${(props) => props.hover && color.orange};
`;

export default NoticeListItem;
