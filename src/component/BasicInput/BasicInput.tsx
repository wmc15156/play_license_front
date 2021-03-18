import styled from "styled-components";
import styles from "@styles/colors";
import { FC, memo } from "react";

const InputWrapper = styled.input.attrs<{
  placeholder: string;
  password: boolean;
}>((p) => ({
  placeholder: p.placeholder,
  // type: p.password ? "password" : null,
}))<{ width: string }>`
  width: ${(p) => p.width};
  height: 60px;
  text-indent: 22.5px;
  background-color: ${styles.gray1};
  border-radius: 8px;
  font-size: 16px;
  font-family: "NotoSansCJKkr-Regular";
  border: none;
`;

type Props = {
  width: string;
  placeholder: string;
  onChange?: () => void;
  value?: string;
  onBlur?: () => void;
  checkPw?: boolean;
  password?: boolean;
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
}) => {
  return (
    <InputWrapper
      width={width}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      type={checkPw ? "password" : null}
    />
  );
};

export default memo(InputBox);
