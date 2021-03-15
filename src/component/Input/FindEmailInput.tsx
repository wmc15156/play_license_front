import styled from "styled-components";
import { FC } from "react";
import InputNumber from "react-input-just-numbers";
import styles from "@styles/colors";
const InputBox = styled.input<{ width: string; height: string }>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  padding: 0;
  text-indent: 20px;
  box-sizing: border-box;
  opacity: 0.5;
`;

const NumberInput = styled.input<{ width: string; height: string }>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  text-indent: 20px;
  padding: 0;
  box-sizing: border-box;
  opacity: 0.5;
`;

type InputProps = {
  placeholder: string;
  onlyNumber?: boolean;
  width: string;
  height: string;
};

const FindEmailInput: FC<InputProps> = ({
  placeholder,
  onlyNumber,
  width,
  height,
}) => {
  console.log(width, height, "input");
  return onlyNumber ? (
    <>
      <NumberInput width={width} height={height} placeholder={placeholder} />
      {/*<Button>인증</Button>*/}
    </>
  ) : (
    <>
      <InputBox width={width} height={height} placeholder={placeholder} />
    </>
  );
};

export default FindEmailInput;
