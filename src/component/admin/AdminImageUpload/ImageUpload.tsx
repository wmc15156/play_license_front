import styled from "styled-components";
import { VFC } from "react";
import colors from "@styles/colors";

const InputWrapper = styled.button<{ marginRight?: string }>`
  width: 100%;
  max-width: 190px;
  border-radius: 8px;
  border: 1px solid ${colors.orange};
  background-color: ${colors.white};
  color: ${colors.orange};
  font-family: "NotoSansCJKkr-Regular";
  font-size: 14px;
  height: 40px;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : null)};
`;

type Props = {
  text: string;
  marginRight?: string;
  openImage?: () => void;
};

const ImageUploadInput: VFC<Props> = ({ text, marginRight,openImage }) => {
  return <InputWrapper marginRight={marginRight} onClick={openImage}>{text}</InputWrapper>;
};
export default ImageUploadInput;
