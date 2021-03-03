import InputNumber from "react-input-just-numbers";
import styled from "styled-components";
import styles from "@styles/colors";
import { FC, memo } from "react";

const InputWrapper = styled(InputNumber).attrs<{ placeHolder: string }>(
  (p) => ({
    placeholder: p.placeHolder,
  })
)<{ width: string }>`
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
  placeHolder: string;
  onChange?: () => void;
  value?: string;
};

const NumberInput: FC<Props> = ({
  children,
  width,
  placeHolder,
  onChange,
  value,
}) => {
  return (
    <InputWrapper
      width={width}
      placeHolder={placeHolder}
      onChange={onChange}
      value={value}
    />
  );
};

export default memo(NumberInput);
