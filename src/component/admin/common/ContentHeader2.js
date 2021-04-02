import styled from "styled-components";
import color from "../../../../styles/colors";
import Input from "../../BasicInput/BasicInputColor";
import Select from "../../Input/SelectOption";
import { useState } from "react";
import { GoSearch } from "react-icons/go";

const ContentHeader = ({
  titleText,
  placeholder,
  countText,
  optionsArr1,
  optionsArr2,
}) => {
  const [inputText, setInputText] = useState("");
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");
  return (
    <Container>
      <TextWrapper>
        {titleText} <span>{countText}</span>
      </TextWrapper>
      <InputArea resize={optionsArr2 ? optionsArr2 : null}>
        <Search>
          <Input_Name resize={optionsArr2 ? optionsArr2 : null}>
            검색
          </Input_Name>
          <Search_Input>
            <Input
              height={"40px"}
              background={color.gray1}
              placeholder={placeholder}
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
          <Input_Name resize={optionsArr2 ? optionsArr2 : null}>
            필터
          </Input_Name>
          <Filter_Input resize={optionsArr2 ? optionsArr2 : null}>
            <Select
              value={selected}
              onChange={setSelected}
              options={optionsArr1}
              height={"40px"}
              radius={"8px"}
              fontSize={"14px"}
              defaultOption={"카테고리"}
            />
          </Filter_Input>
          {optionsArr2 && (
            <Filter_Input resize={optionsArr2 ? optionsArr2 : null}>
              <Select
                value={selected2}
                onChange={setSelected2}
                options={optionsArr2}
                height={"40px"}
                radius={"8px"}
                fontSize={"14px"}
                defaultOption={"진행상태"}
              />
            </Filter_Input>
          )}
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
  width: ${(props) => (props.resize ? "75%" : "60%")};
  justify-content: space-between;
`;

const Input_Name = styled.div`
  display: inline-block;
  font-family: "NotoSansCJKkr-Bold";
  margin-right: ${(props) => (props.resize ? "0" : "15px")};
  width: 30px;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`;
const Search_Input = styled.div`
  position: relative;
  height: 40px;
  width: 90%;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  width: 37%;
  justify-content: space-between;
`;
const Filter_Input = styled.div`
  height: 40px;
  width: ${(props) => (props.resize ? "40%" : "90%")};
`;

export default ContentHeader;
