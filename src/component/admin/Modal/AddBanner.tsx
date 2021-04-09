import styled from "styled-components";
import colors from "@styles/colors";
import TextAndInput from "@src/component/molecules/TextAndInput/TextAndInput";
import styles from "@styles/colors";
import ContainerWrapper from "@src/component/ContainerWrapper/TopToBottom";
import { useRef, useState } from "react";
import useInput from "@utils/useInput";
import Line from "@src/component/Line/Line";
import ImageUpload from "@src/component/admin/AdminImageUpload/ImageUpload";
import ImageUploadInput from "@src/component/admin/AdminImageUpload/ImageUpload";
import OriginalButton from "@src/component/Button/OriginalButton";
import axios from "axios";
import fetcher from "@utils/fetcher";
import useSWR from "swr";

const Wrapper = styled.div`
  width: 100%;
  max-width: 560px;
  height: 440px;
  background-color: ${colors.white};
  z-index: 1;
  border-radius: 14px;
  position: relative;
`;

const DivWrapper = styled.div<{
  width?: string;
  height?: string;
  marginTop?: string;
}>`
  width: 100%;
  // max-width: ${(p) => (p.width ? p.width : "560px")};
  display: flex;
  justify-content: center;
  height: ${(p) => (p.height ? p.height : null)};
  margin: 0;
  box-sizing: border-box;
  margin-top: ${(p) => (p.marginTop ? p.marginTop : null)};

  & > span {
    display: inline-block;
    font-size: 14px;
    font-family: "NotoSansCJKkr-Bold";
    color: ${colors.black1};
    width: 40px;
  }
  & > input {
    display: none;
  }
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

type Url = {
  url: string;
  filename: string;
};

const AddBannerModal = ({ closeModal, revalidate }) => {
  const { data, error, revalidate: rel } = useSWR(
    "/admin/home-banner",
    fetcher
  );

  const [bannerName, setBannerName] = useInput("");
  const [url, setUrl] = useInput("");
  const [mobileImage, setMobileImage] = useState<Url | null>(null);
  const [selectUploadImage, setSelectUploadImage] = useState("");
  const [desktopImage, setDesktopImage] = useState<Url | null>(null);
  const inputOpenRef = useRef<HTMLInputElement>(null);
  const [order, setOrder] = useState(1);
  const openImage = (text: string) => () => {
    setSelectUploadImage(text);
    inputOpenRef.current!.click();
  };

  const handleImageUpload = (e: any) => {
    const formData = new FormData();
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    formData.append("file", e.target.files[0]);
    axios
      .post("/image/poster", formData, config)
      .then((res) => {
        console.log(res.data);
        selectUploadImage === "desktop"
          ? setDesktopImage(res.data)
          : setMobileImage(res.data);
      })
      .catch((err) => console.log(err.response.data));
  };

  const createBanner = () => {
    // TODO: 버튼 하단 이미지 규격 텍스트 추가
    // TODO: CSS 설정필요
    // TODO: Desktop/mobile 기본 이미지 변경(X로 된거)
    let bannerList = null;
    if (data) {
      bannerList = {
        title: bannerName,
        desktopUrl: desktopImage ? desktopImage.url : "",
        mobileUrl: mobileImage ? mobileImage.url : "",
        order: data.length + 1,
        exposure: false,
        url: url,
      };
    }

    if (bannerName && url) {
      console.log(bannerList);
      axios
        .post("/admin/home-banner", { bannerList })
        .then((res) => {
          console.log("order", order);
          setOrder((prevState) => {
            console.log(prevState);
            return prevState++;
          });
          revalidate();
          closeModal();
        })
        .catch((err) => console.log(err.response.data));
    }
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <span>배너추가</span>
        <img src={"/assets/image/X_small.png"} onClick={closeModal} />
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
          inputHeight={"40px"}
          inputFontSize={"14px"}
          whiteType={true}
          justify={true}
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
          onChange={setUrl}
          value={url}
          wrapperMargin={"22px"}
          number={false}
          inputHeight={"40px"}
          inputFontSize={"14px"}
          whiteType={true}
          justify={true}
        >
          URL
        </TextAndInput>
      </DivWrapper>
      <DivWrapper width={"560px"} height={"28px"}>
        <Line width={"472px"} background={false} marginTop={"22px"} />
      </DivWrapper>

      <DivWrapper width={"445px"} marginTop={"22px"}>
        <span>이미지 업로드</span>
        {desktopImage ? (
          <div>{desktopImage.filename}</div>
        ) : (
          <ImageUploadInput
            marginRight={"20px"}
            text={"Desktop용 업로드"}
            openImage={openImage("desktop")}
          />
        )}
        {mobileImage ? (
          <div>{mobileImage.filename}</div>
        ) : (
          <ImageUploadInput
            text={"mobile용 업로드"}
            openImage={openImage("mobile")}
          />
        )}
        <input
          type={"file"}
          accept={"image/png, image/jpeg, image/jpg"}
          ref={inputOpenRef}
          onChange={handleImageUpload}
        />
      </DivWrapper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <OriginalButton
          width={"100%"}
          maxWidth={"472px"}
          position={false}
          height={"40px"}
          size={"14px"}
          margin={"44px"}
          background={colors.orange}
          onClick={createBanner}
        >
          등록하기
        </OriginalButton>
      </div>
    </Wrapper>
  );
};

export default AddBannerModal;
