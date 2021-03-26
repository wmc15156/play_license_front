import styled from "styled-components";
import colors from "@styles/colors";
import TextAndInput from "@src/component/molecules/TextAndInput/TextAndInput";
import styles from "@styles/colors";
import ContainerWrapper from "@src/component/ContainerWrapper/ContainerWrapper";
import { useState } from "react";
import useInput from "@utils/useInput";

const Wrapper = styled.div`
  width: 100%;
  max-width: 560px;
  height: 440px;
  background-color: ${colors.white};
  z-index: 1;
  border-radius: 14px;
`;

const DivWrapper = styled.div<{ width: string }>`
  width: 100%;
  max-width: ${(p) => p.width};
`;

const TitleWrapper = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  width: 100%;
  max-width: 560px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
  font-size: 21px;
  position: relative;

  & > img {
    cursor: pointer;
    position: absolute;
    right: 42px;
    width: 25px;
    height: 25px;
  }
`;

const AddBannerModal = () => {
  const [bannerName, setBannerName] = useInput("");
  const [url, setUrl] = useInput("");
  const [mobileImage, setMobileImage] = useState();
  const [desktopImage, setDesktopImage] = useState();
  return (
    <Wrapper>
      <TitleWrapper>
        <span>배너추가</span>
        <img src={"/assets/image/X_small.png"} />
      </TitleWrapper>
      <DivWrapper width={"560px"}>
        <TextAndInput
          textFontSize={"14px"}
          textWidth={"40px"}
          textColor={styles.black1}
          textMargin={"30px"}
          inputWidth={"399px"}
          placeholder={"배너명을 입력해주세요"}
          onChange={setBannerName}
          value={bannerName}
          wrapperMargin={"44px"}
          number={false}
          inputHeight={'40px'}
          inputFontSize={'14px'}
          whiteType={true}
        >
          배너명
        </TextAndInput>
      </DivWrapper>

      <DivWrapper width={"560px"}>
        <TextAndInput
          textFontSize={"14px"}
          textWidth={"40px"}
          textColor={styles.black1}
          textMargin={"30px"}
          inputWidth={"399px"}
          placeholder={"연결 URL을 입력해주세요"}
          onChange={url}
          value={setUrl}
          wrapperMargin={"22px"}
          number={false}
          inputHeight={'40px'}
          inputFontSize={'14px'}
          whiteType={true}
        >
          URL
        </TextAndInput>
      </DivWrapper>
    </Wrapper>
  );
};

export default AddBannerModal;
