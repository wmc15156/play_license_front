import styled from "styled-components";
import color from "../../../styles/colors";
import Btn1 from "../Button/GrayShortBtn";
import Btn2 from "../Button/OriginalButton";
import { useRef, useState, useEffect } from "react";

const EstImgModal = ({ closeBtnHandler }) => {
  const [source, setSource] = useState("");
  const contentRef = useRef();

  // useEffect(() => {
  console.log(contentRef);
  // setSource(contentRef.current);
  // }, [contentRef, source]);

  const addSignature = () => {
    console.log("서명추가");
  };

  const downloadTxt = (txtSrc) => {
    console.log("다운로드 클릭");
  };

  return (
    <Container>
      <Content ref={contentRef}>
        <div>ㄱㅖ약서</div>
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
          onClickHandler={() => downloadTxt(source)}
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
