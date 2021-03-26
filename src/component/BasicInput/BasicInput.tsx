import styled from "styled-components";
import styles from "@styles/colors";
import { FC, memo } from "react";

const InputWrapper = styled.input.attrs<{
  placeholder: string;
  password: boolean;
}>((p) => ({
  placeholder: p.placeholder,
  // type: p.password ? "password" : null,
}))<{ width: string; height?: string; fontSize?: string; whiteType?: boolean }>`
  width: ${(p) => p.width};
  height: ${(p) => (p.height ? p.height : "60px")};
  text-indent: 22.5px;
  background-color: ${(p) => (p.whiteType ? styles.white : styles.gray1)};
  border-radius: 8px;
  font-size: ${(p) => (p.fontSize ? p.fontSize : "16px")};
  font-family: "NotoSansCJKkr-Regular";
  border: ${(p) => (p.whiteType ? "1px solid #E6E6E6" : "none")};
`;

type Props = {
  width: string;
  placeholder: string;
  onChange?: () => void;
  value?: string;
  onBlur?: () => void;
  checkPw?: boolean;
  password?: boolean;
  inputHeight?: string;
  fontSize?: string;
  whiteType?: boolean;
};

const InputBox: FC<Props> = ({
  children,
  width,
  placeholder,
  onChange,
  value,
  onBlur,
  checkPw,
  password,
  inputHeight,
  fontSize,
  whiteType,
}) => {
  return (
    <InputWrapper
      width={width}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      type={checkPw ? "password" : null}
      height={inputHeight}
      fontSize={fontSize}
      whiteType={whiteType}
    />
  );
};

export default memo(InputBox);
