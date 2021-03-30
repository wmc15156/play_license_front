import styled from "styled-components";
import color from "../../../../../../styles/colors";
import { TabContainer } from "../../../../../../styles/PL_Frame";
import Input from "../../../../BasicInput/BasicInputColor";
import SaveButton from "../../../../Button/OriginalButton";
import { useState, useEffect } from "react";

const UrlPage = () => {
  const [url, setUrl] = useState("");

  const clickBtnHandler = (url) => {
    let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    if (regex.test(url)) {
      console.log("유효함");
      console.log("저장하기 어디에 저장?");
    } else {
      console.log("유효하지 못한 url");
    }
  };

  return (
    <Container>
      <InputArea>
        <Input_Name>작품 및 제작사 등록 문의 URL</Input_Name>
        <Input_Box>
          <Input
            height={"40px"}
            background={color.gray1}
            placeholder={"URL을 입력해주세요"}
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            fontSize={"14px"}
            fontColor={color.black3}
          />
        </Input_Box>
        <Input_Btn>
          <SaveButton
            width={"100%"}
            background
            provider
            height={"40px"}
            size={"14px"}
            fontColor={color.white}
            onClick={() => clickBtnHandler(url)}
          >
            저장
          </SaveButton>
        </Input_Btn>
      </InputArea>
    </Container>
  );
};

const Container = styled.div`
  ${TabContainer};
  justify-content: center;
`;
const InputArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input_Name = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 18px;
  color: ${color.black2};
`;
const Input_Box = styled.div`
  width: 62.5%;
  margin-left: 30px;
`;
const Input_Btn = styled.div`
  width: 12.5%;
  margin-left: 30px;
`;
export default UrlPage;
