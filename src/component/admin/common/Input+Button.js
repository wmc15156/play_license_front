import styled from "styled-components";
import color from "../../../../styles/colors";
import InputWithText from "../../BasicInput/InputWithText";
import Btn from "../../Button/GrayShortBtn";
import { useState, useEffect } from "react";

const Price = ({
  isInactive,
  value = 0,
  onChange,
  text,
  btnText,
  btnClick,
}) => {
  const [deleted, setDeleted] = useState();
  return (
    <Container>
      {isInactive && <span>{value}원</span>}
      {!isInactive && (
        <>
          <InputWrapper btnText={btnText}>
            <InputWithText
              height={"28px"}
              background={color.white}
              fontSize={"12px"}
              fontColor={color.black1}
              onChange={onChange}
              value={value}
              align={"right"}
              text={text}
            />
          </InputWrapper>
          {btnText && (
            <ButtonWrapper>
              <Btn
                btnColor={color.black4}
                text={btnText}
                size={"12px"}
                height={"28px"}
                fontColor={color.white}
                onClickHandler={btnClick}
              />
            </ButtonWrapper>
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
  width: ${(props) => (props.btnText ? "68%" : "100%")};
`;

const ButtonWrapper = styled.div`
  width: 25%;
`;

export default Price;
