import styled from "styled-components";
import { FC } from "react";
import { SpanWrapper } from "@src/component/molecules/TextAndInput/TextAndInput";
import DropDown from "@src/component/admin/DropDown/DropDown";

const Wrapper = styled.div<{ width: string; margin: string }>`
  display: flex;
  width: 100%;
  max-width: ${(p) => p.width};
  margin-top: ${(p) => p.margin};
  background-color: #fff;
  z-index: 10;
  font-family: "NotoSansCJKkr-Regular", sans-serif;
`;

type Props = {
  width: string;
  textWidth: string;
  textSize: string;
  textColor: string;
  textMargin: string;
  wrapperMarginTop: string;
  kind: string;
  height: string;
  header?: boolean;
  img?: boolean;
  toggle: () => void;
};

const TextAndDropDown: FC<Props> = ({
  width,
  textWidth,
  textSize,
  textColor,
  textMargin,
  wrapperMarginTop,
  kind,
  height,
  children,
  header,
  img,
  toggle,
}) => {
  return (
    <>
      <Wrapper width={width} margin={wrapperMarginTop}>
        <SpanWrapper
          width={textWidth}
          size={textSize}
          color={textColor}
          textMargin={textMargin}
        >
          {children}
        </SpanWrapper>
        <DropDown
          text={kind}
          color={""}
          maxWidth={"207px"}
          height={"40px"}
          header={header}
          img={img}
          toggle={toggle}
        />
      </Wrapper>
    </>
  );
};

export default TextAndDropDown;
