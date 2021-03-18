import styled from "styled-components";
import color from "../../../styles/colors";
import Btn1 from "../Button/GrayShortBtn";
import Btn2 from "../Button/OriginalButton";
import { useRef, useState, useEffect, memo } from "react";

const EstImgModal = ({ closeBtnHandler, imgSrcUrl }) => {
  const [source, setSource] = useState("");
  const imageRef = useRef();

  useEffect(() => setSource(imageRef.current.src), [imageRef, source]);

  const dataURLtoBlob = (dataURL) => {
    const arr = dataURL.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
      type: mime,
    });
  };

  const downloadImg = (imgSrc) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imgSrc;

    const fileName = image.src.split("/").pop();
    image.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;
      canvas.getContext("2d").drawImage(this, 0, 0);
      if (typeof window.navigator.msSaveBlob !== "undefined") {
        window.navigator.msSaveBlob(
          dataURLtoBlob(canvas.toDataURL()),
          fileName
        );
      } else {
        const link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.download = fileName;
        link.click();
      }
    };
  };

  return (
    <Container>
      <ImgWrapper>
        <img ref={imageRef} src={imgSrcUrl} />
      </ImgWrapper>
      <BtnSection>
        <Btn1
          size={"14px"}
          height={"40px"}
          text={"다운로드"}
          onClickHandler={() => downloadImg(source)}
          fontColor={color.black1}
        />
        <Div />
        <Btn2
          width={"100%"}
          background={true}
          margin={"0"}
          height={"40px"}
          size={"14px"}
          onClick={closeBtnHandler}
        >
          닫기
        </Btn2>
      </BtnSection>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 14px;
  background-color: ${color.white};
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px;
  margin: 0 1rem;
`;
const ImgWrapper = styled.div`
  max-width: 538px;
  & > img {
    max-width: 100%;
    height: auto;
  }
`;
const BtnSection = styled.div`
  width: 100%;
  display: flex;
  margin-top: 36px;
`;
const Div = styled.div`
  width: 15%;
`;
export default memo(EstImgModal);
