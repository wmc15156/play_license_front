import ContainerWrapper from "@src/component/ContainerWrapper/ContainerWrapper";
import Comment from "@src/component/Comment/Comment";
import Line from "@src/component/Line/Line";
import TextAndInput, {
  SpanWrapper,
  Wrapper,
} from "@src/component/molecules/TextAndInput/TextAndInput";
import colors from "@styles/colors";
import useInput from "@utils/useInput";
import { useState } from "react";
import TextAndDropDown from "@src/component/molecules/TextAndDropDown/TextAndDropDown";
import styled from "styled-components";
import OriginalButton from "@src/component/Button/OriginalButton";

const UlWrapper = styled.ul<{ fontColor: boolean }>`
  position: relative;
  top: -3px;
  width: 100%;
  max-width: 722px;
  padding-left: 93px;
  margin: 0;
  height: 0;
  z-index: 2;
  font-family: "NotoSansCJKkr-Regular", sans-serif;
  color: ${(p) => (p.color ? `${colors.orange}` : null)};
`;

const LiWrapper = styled.li<{ fontColor: boolean }>`
  width: 100%;
  max-width: 207px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.black5};
  border-radius: 6px;
  cursor: pointer;
  background-color: ${colors.white};
  color: ${(p) => (p.fontColor ? `${colors.orange}` : null)};
  z-index: 2;
`;

const DivWrapper = styled.div<{ margin: string; flexEnd?: boolean }>`
  //      나란히 있는 두개 컴포넌트
  width: 100%;
  max-width: 722px;
  display: flex;
  margin-top: ${(p) => p.margin};
  justify-content: ${(p) => (p.flexEnd ? "flex-end" : null)};
  z-index: 1;
`;

const AddCuration = () => {
  const [curationName, setCurationName] = useInput("");
  const [kind, setKind] = useState("디폴트");
  const [subKind, setSubKind] = useState("스페셜");

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  const onChangeKind = () => {
    setKind((prevState) => (prevState === "디폴트" ? "스페셜" : "디폴트"));
    setSubKind((prevState) => (prevState === "디폴트" ? "스페셜" : "디폴트"));
    toggle();
  };
  console.log("addCuration");
  return (
    <ContainerWrapper width={"722px"}>
      <Comment font={"18px"} margin={"50px"}>
        <span>큐레이션</span>&nbsp; 추가하기
      </Comment>
      <Line background={false} width={"722px"} />
      <TextAndInput
        textFontSize={"14px"}
        textWidth={"68px"}
        textColor={colors.black1}
        textMargin={"25px"}
        inputWidth={"629px"}
        placeholder={"큐레이션명을 입력해주세요"}
        onChange={setCurationName}
        value={curationName}
        wrapperMargin={"30px"}
        number={false}
        whiteType={true}
        inputHeight={"40px"}
        inputFontSize={"14px"}
      >
        큐레이션명
      </TextAndInput>
      <TextAndDropDown
        wrapperMarginTop={"22px"}
        width={"722px"}
        textMargin={"25px"}
        textWidth={"68px"}
        textColor={colors.black1}
        textSize={"14px"}
        kind={kind}
        height={"40px"}
        header={false}
        img={true}
        toggle={toggle}
      >
        종류
      </TextAndDropDown>
      <UlWrapper fontColor={kind === "스페셜"}>
        {open && (
          <LiWrapper fontColor={subKind === "스페셜"} onClick={onChangeKind}>
            {subKind}
          </LiWrapper>
        )}
      </UlWrapper>
      <DivWrapper margin={"22px"}>
        <SpanWrapper width={"68px"} size={"14px"} textMargin={"25px"}>
          작품설정
        </SpanWrapper>
        <OriginalButton
          width={"207px"}
          height={"40px"}
          margin={""}
          background={colors.black4}
          size={"14px"}
        >
          작품등록하기
        </OriginalButton>
      </DivWrapper>
      <DivWrapper margin={"20px"} flexEnd={true}>
        <OriginalButton
          width={"100px"}
          height={"36px"}
          margin={""}
          background={colors.gray1}
          size={"12px"}
          fontColor={colors.black2}
          marginRight={"20px"}
        >
          이전으로
        </OriginalButton>

        <OriginalButton
          width={"100px"}
          height={"36px"}
          margin={""}
          background={colors.orange}
          size={"12px"}
        >
          등록하기
        </OriginalButton>
      </DivWrapper>
    </ContainerWrapper>
  );
};

export default AddCuration;
