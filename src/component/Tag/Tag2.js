import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import { useState, memo } from "react";

const Tag = ({ items }) => {
  return (
    <Container>
      {items.map((item, idx) => {
        return (
          <Item key={idx} boxStyle={item}>
            {item}
          </Item>
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Item = styled.li`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.5px;
  margin-right: 4px;
  padding: 8px 10px;
  border-radius: 6px;
  &:last-child {
    margin-right: 0;
  }

  ${(props) => {
    if (props.boxStyle.includes("공연")) {
      return css`
        color: ${color.orange};
        background-color: rgba(255, 107, 57, 0.2);
      `;
    } else if (props.boxStyle.includes("교육")) {
      return css`
        color: ${color.yellow};
        background-color: rgba(255, 186, 95, 0.2);
      `;
    } else if (props.boxStyle.includes("기타")) {
      return css`
        color: ${color.blue_2};
        background-color: rgba(149, 172, 229, 0.2);
      `;
    }
  }};
`;

export default memo(Tag);
