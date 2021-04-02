import styled from "styled-components";
import color from "../../../../styles/colors";
import Btn from "../../Button/OriginalButton";
import { useState } from "react";

const ContentHeader = ({ onClick, titleText, count, btnText }) => {
  return (
    <Container>
      <LeftArea>
        {titleText} <span>{count}</span>
      </LeftArea>
      <RightArea>
        <Btn
          width={"100%"}
          margin={"0px"}
          background={color.blue_4}
          height={"48px"}
          size={"16px"}
          fontColor={color.white}
          onClick={onClick}
        >
          {btnText}
        </Btn>
      </RightArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 40px 0;
`;

const LeftArea = styled.p`
  margin: 0;
  color: ${color.black2};
  font-family: "NotoSansCJKkr-Bold";
  font-size: 18px;
  display: flex;

  & > span {
    margin-left: 20px;
    color: ${color.blue_2};
  }
`;

const RightArea = styled.div`
  display: flex;
  margin-left: auto;
  width: 12.5%;
`;

export default ContentHeader;
