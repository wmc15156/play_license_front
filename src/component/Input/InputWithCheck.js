import styled, { css } from "styled-components";
import color from "../../../styles/colors";

const InputWithCheck = ({
  inputType,
  placeholder,
  height,
  fontSize,
  onChange,
  value,
  checkType,
  checkSame,
  checkCurrPW,
  onKeyUp,
}) => {
  return (
    <Container>
      <InputBox
        placeholder={placeholder}
        height={height}
        onChange={onChange}
        value={value}
        fontSize={fontSize}
        type={inputType}
        check={checkType}
        checkSame={checkSame}
        checkCurrPW={checkCurrPW}
        onKeyUp={onKeyUp}
      ></InputBox>
      {checkType === "확인" && (
        <Text1 checkCurrPW={checkCurrPW}>{"확인"}</Text1>
      )}
      {checkType === "일치" && <Text2 same={checkSame}>{"일치"}</Text2>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const InputBox = styled.input.attrs({
  placeholderTextColor: color.black3,
})`
  font-family: "NotoSansCJKkr-Regular";
  min-width: 300px;
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${color.gray1};
  border: 0;
  border-radius: 8px;
  padding: 0 60px 0 22px;
  font-size: ${(props) => props.fontSize};
  &:focus {
    outline: none;
  }
`;

const CheckTextStyle = css`
  font-family: "NotoSansCJKkr-Bold";
  position: absolute;
  right: 7%;
  top: 33%;
`;

const Text1 = styled.span`
  ${CheckTextStyle};
  color: ${(props) => (props.checkCurrPW ? color.orange : color.black3)};
`;

const Text2 = styled.span`
  ${CheckTextStyle};
  color: ${(props) => (props.same ? color.orange : color.black3)};
`;

export default InputWithCheck;
