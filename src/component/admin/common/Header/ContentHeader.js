import styled from "styled-components";
import color from "../../../../../styles/colors";
import Btn from "../../../Button/OriginalButton";
import { useState } from "react";

const ContentHeader = ({
  pageType,
  titleText,
  count,
  onClick,
  btnText,
  btnBodyColor,
}) => {
  return (
    <Container btnText={btnText}>
      <LeftArea pageType={pageType}>
        {titleText} <span>{count}</span>
      </LeftArea>
      {btnText && (
        <RightArea>
          <Btn
            width={"100%"}
            margin={"0px"}
            background={btnBodyColor}
            height={"48px"}
            size={"16px"}
            fontColor={color.white}
            onClick={onClick}
          >
            {btnText}
          </Btn>
        </RightArea>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: ${(props) => (props.btnText ? "40px 0" : "50px 0 60px 0")};
`;

const LeftArea = styled.p`
  margin: 0;
  color: ${color.black2};
  font-family: "NotoSansCJKkr-Bold";
  font-size: 18px;
  display: flex;

  & > span {
    margin-left: 20px;
    color: ${(props) =>
      props.pageType === "buyer" ? color.yellow : color.blue_2};
  }
`;

const RightArea = styled.div`
  display: flex;
  margin-left: auto;
  width: 12.5%;
`;

export default ContentHeader;
