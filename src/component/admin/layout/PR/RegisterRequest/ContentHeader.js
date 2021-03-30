import styled from "styled-components";
import color from "../../../../../../styles/colors";
import Input from "../../../../BasicInput/BasicInputColor";
import Select from "../../../../Input/SelectOption";
import { useState } from "react";
import { GoSearch } from "react-icons/go";

const ContentHeader = () => {
  const [inputText, setInputText] = useState("");
  const [selected, setSelected] = useState("");
  return (
    <Container>
      <TextWrapper>
        등록문의 <span>{"123건"}</span>
      </TextWrapper>
      <InputArea>
        <Search>
          <Input_Name>검색</Input_Name>
          <Search_Input>
            <Input
              height={"40px"}
              background={color.gray1}
              placeholder={"이름을 검색해보세요"}
              fontSize={"14px"}
              fontColor={color.black3}
              onChange={setInputText}
              value={inputText}
            />
            <GoSearch
              size={22}
              style={{
                position: "absolute",
                right: 8,
                top: 9,
                color: color.blue,
              }}
            />
          </Search_Input>
        </Search>
        <Filter>
          <Input_Name>필터</Input_Name>
          <Filter_Input>
            <Select
              value={selected}
              onChange={setSelected}
              options={["진행상태"]}
              height={"40px"}
              radius={"8px"}
              fontSize={"14px"}
            />
          </Filter_Input>
        </Filter>
      </InputArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 0 30px 0;
`;

const TextWrapper = styled.div`
  width: 100%;
  color: ${color.black2};
  font-family: "NotoSansCJKkr-Bold";
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;

  & > span {
    margin-left: 20px;
    color: ${color.blue_2};
  }
`;

const InputArea = styled.div`
  display: flex;
  margin-left: auto;
  width: 60%;
  justify-content: space-between;
`;

const Input_Name = styled.div`
  display: inline-block;
  font-family: "NotoSansCJKkr-Bold";
  margin-right: 20px;
  width: 30px;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;
const Search_Input = styled.div`
  position: relative;
  height: 40px;
  width: 90%;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
`;
const Filter_Input = styled.div`
  height: 40px;
  width: 90%;
`;

export default ContentHeader;
