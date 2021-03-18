import styled from "styled-components";
import color from "../../../styles/colors";
import Btn1 from "../Button/GrayShortBtn";
import Btn2 from "../Button/OriginalButton";
import { useRef, useState, useEffect } from "react";

const EstImgModal = ({ closeBtnHandler }) => {
  const [source, setSource] = useState("");
  const contentRef = useRef();

  useEffect(() => {
    // console.log(contentRef.current.innerHTML);
    setSource(contentRef.current.innerHTML);
  }, [contentRef, source]);

  const download = (filename, text) => {
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const onClickDownload = (val) => {
    let filename = "contract.txt";

    download(filename, val);
  };

  const addSignature = () => {
    console.log("서명추가");
  };

  return (
    <Container>
      <Content>
        <div ref={contentRef}>ㄱㅖ약서</div>
      </Content>
      <BtnSection>
        <Btn1
          size={"14px"}
          height={"40px"}
          text={"서명추가"}
          onClickHandler={addSignature}
          fontColor={color.black1}
        />
        <Div />
        <Btn1
          size={"14px"}
          height={"40px"}
          text={"다운로드"}
          onClickHandler={() => onClickDownload(source)}
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
const Content = styled.div`
  min-width: 538px;
  max-height: 538px;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;
const BtnSection = styled.div`
  width: 100%;
  display: flex;
  margin-top: 36px;
`;
const Div = styled.div`
  width: 12%;
`;
export default EstImgModal;
