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
import useModal from "@utils/useModal";
import BannerRemoveModal from "@src/component/admin/Modal/BannerRemove";
import RegisterCuation from "@src/component/admin/Modal/RegisterCuation";

const productList = [
  {
    productId: 1,
    title: "네네네",
    poster: {
      filename: "123.jpg",
      url:
        "https://user-images.githubusercontent.com/60249156/108516807-007d2200-730a-11eb-99c8-119db6f45da4.png",
    },
    brokerageConsignments: ["공연", "교육", "기타"],
    category: "뮤지컬",
    year: "2021",
    company: "네이버",
  },
  {
    productId: 2,
    title: "네네네",
    poster: {
      filename: "123.jpg",
      url:
        "https://user-images.githubusercontent.com/60249156/108516807-007d2200-730a-11eb-99c8-119db6f45da4.png",
    },
    brokerageConsignments: ["공연", "교육", "기타"],
    category: "뮤지컬",
    year: "2021",
    company: "네이버",
  },
  {
    productId: 3,
    title: "네네네",
    poster: {
      filename: "123.jpg",
      url:
        "https://user-images.githubusercontent.com/60249156/108516807-007d2200-730a-11eb-99c8-119db6f45da4.png",
    },
    brokerageConsignments: ["공연", "교육", "기타"],
    category: "뮤지컬",
    year: "2021",
    company: "네이버",
  },
  {
    productId: 4,
    title: "네네네",
    poster: {
      filename: "123.jpg",
      url:
        "https://user-images.githubusercontent.com/60249156/108516807-007d2200-730a-11eb-99c8-119db6f45da4.png",
    },
    brokerageConsignments: ["공연", "교육", "기타"],
    category: "뮤지컬",
    year: "2021",
    company: "네이버",
  },
  {
    productId: 5,
    title: "네네네",
    poster: {
      filename: "123.jpg",
      url:
        "https://user-images.githubusercontent.com/60249156/108516807-007d2200-730a-11eb-99c8-119db6f45da4.png",
    },
    brokerageConsignments: ["공연", "교육", "기타"],
    category: "뮤지컬",
    year: "2021",
    company: "네이버",
  },
];

type Post = {
  filename: string;
  url: string;
}

export type ProductLists = {
  productId: number,
  poster: Post;
  brokerageConsignments: Array<string>;
  category: string;
  year: string;
  company: string;
  title: string;
}

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

export const DivWrapper = styled.div<{ margin: string; flexEnd?: boolean }>`
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
  const { ModalPortal, openModal, closeModal } = useModal();
  const [open, setOpen] = useState(false);
  const [productLists, setProductLists] = useState(productList);

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
          onClick={openModal}
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

      <ModalPortal>
        <RegisterCuation productLists={productLists} closeModal={closeModal}/>
      </ModalPortal>
    </ContainerWrapper>
  );
};

export default AddCuration;
