import styled from "styled-components";
import color from "../../../styles/colors";
import Btn_Left from "../Button/GrayShortBtn";
import Btn_Right from "../Button/OriginalButton";
import { FaCheck } from "react-icons/fa";
import CheckBoxWrapper from "../CheckBoxWrapper/CircleCheckBoxWrapper";
import { useState } from "react";

const items = {
  numberOfMembers: ["5명 미만", "10명 미만", "10명 이상"],
  category: ["뮤지컬", "연극", "아동극"],
  genre: ["드라마", "코미디", "가족"],
  sizeOfPerformance: [
    "소극장(300석 미만)",
    "중극장(500석 미만)",
    "대극장(500석 이상)",
  ],
  mainAudience: ["유아 및 아동", "청소년", "성인"],
};

const FilterModal = ({ closeModal, filterListHandler, setOption }) => {
  const [tmpObj, setTmpObj] = useState({
    numberOfMembers: "",
    category: "",
    genre: "",
    sizeOfPerformance: "",
    mainAudience: "",
  });

  const resetHandler = () => {
    closeModal();
    setOption({
      numberOfMembers: "",
      category: "",
      genre: "",
      sizeOfPerformance: "",
      mainAudience: "",
    });
  };

  const radioButtonHandler = (name, val) => {
    setTmpObj({
      ...tmpObj,
      [name]: val,
    });
  };

  const okButtonHandler = (obj) => {
    console.log(obj, "임시객체상태??");
    setOption(obj); // 상태변경
    filterListHandler(); // get요청
    closeModal();
  };

  return (
    <Container>
      <Title>필터링 찾기</Title>
      <Divider>
        <Div />
      </Divider>
      <BodySection>
        <Section>
          <Subtitle>출연인원</Subtitle>

          <CheckSection>
            {items.numberOfMembers.map((label, index) => (
              <li key={index}>
                <CheckBoxWrapper
                  widthHeight={"20px"}
                  checked={tmpObj.numberOfMembers.includes(label)}
                  onClick={() => radioButtonHandler("numberOfMembers", label)}
                >
                  <FaCheck
                    size={"15px"}
                    color={
                      tmpObj.numberOfMembers.includes(label)
                        ? color.white
                        : color.black5
                    }
                  />
                </CheckBoxWrapper>
                <div>{label}</div>
              </li>
            ))}
          </CheckSection>
        </Section>

        <Divider>
          <Div_Gray />
        </Divider>

        <Section>
          <Subtitle>공연분야</Subtitle>

          <CheckSection>
            {items.category.map((label, index) => (
              <li key={index}>
                <CheckBoxWrapper
                  widthHeight={"20px"}
                  checked={tmpObj.category.includes(label)}
                  onClick={() => radioButtonHandler("category", label)}
                >
                  <FaCheck
                    size={"15px"}
                    color={
                      tmpObj.category.includes(label)
                        ? color.white
                        : color.black5
                    }
                  />
                </CheckBoxWrapper>
                <div>{label}</div>
              </li>
            ))}
          </CheckSection>
        </Section>
        <Divider>
          <Div_Gray />
        </Divider>
        <Section>
          <Subtitle>공연장르</Subtitle>

          <CheckSection>
            {items.genre.map((label, index) => (
              <li key={index}>
                <CheckBoxWrapper
                  widthHeight={"20px"}
                  checked={tmpObj.genre.includes(label)}
                  onClick={() => radioButtonHandler("genre", label)}
                >
                  <FaCheck
                    size={"15px"}
                    color={
                      tmpObj.genre.includes(label) ? color.white : color.black5
                    }
                  />
                </CheckBoxWrapper>
                <div>{label}</div>
              </li>
            ))}
          </CheckSection>
        </Section>
        <Divider>
          <Div_Gray />
        </Divider>
        <Section>
          <Subtitle>공연규모</Subtitle>

          <CheckSection>
            {items.sizeOfPerformance.map((label, index) => (
              <li key={index}>
                <CheckBoxWrapper
                  widthHeight={"20px"}
                  checked={tmpObj.sizeOfPerformance.includes(label)}
                  onClick={() => radioButtonHandler("sizeOfPerformance", label)}
                >
                  <FaCheck
                    size={"15px"}
                    color={
                      tmpObj.sizeOfPerformance.includes(label)
                        ? color.white
                        : color.black5
                    }
                  />
                </CheckBoxWrapper>
                <div>{label}</div>
              </li>
            ))}
          </CheckSection>
        </Section>
        <Divider>
          <Div_Gray />
        </Divider>
        <Section>
          <Subtitle>주관람층</Subtitle>

          <CheckSection>
            {items.mainAudience.map((label, index) => (
              <li key={index}>
                <CheckBoxWrapper
                  widthHeight={"20px"}
                  checked={tmpObj.mainAudience.includes(label)}
                  onClick={() => radioButtonHandler("mainAudience", label)}
                >
                  <FaCheck
                    size={"15px"}
                    color={
                      tmpObj.mainAudience.includes(label)
                        ? color.white
                        : color.black5
                    }
                  />
                </CheckBoxWrapper>
                <div>{label}</div>
              </li>
            ))}
          </CheckSection>
        </Section>
      </BodySection>
      <BtnSection>
        <Btn1>
          <Btn_Left
            text={"취소"}
            size={"18px"}
            height={"56px"}
            fontColor={color.black1}
            onClickHandler={resetHandler}
          />
        </Btn1>
        <Btn2>
          <Btn_Right
            width={"100%"}
            background={true}
            margin={0}
            height={"56px"}
            size={"18px"}
            onClick={() => okButtonHandler(tmpObj)}
          >
            확인
          </Btn_Right>
        </Btn2>
      </BtnSection>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 1rem;
  padding: 24px;
  width: 562px;
  height: auto;
  border-radius: 14px;
  background-color: ${color.white};
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  letter-spacing: -0.56px;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
const Divider = styled.div`
  width: 100%;
  margin: 24px 0;
`;
const Div = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${color.yellow};
`;

const Div_Gray = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.gray1};
`;
const BodySection = styled.div`
  width: 100%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const Subtitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  letter-spacing: -0.5px;
  font-size: 16px;
`;

const CheckSection = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: "NotoSansCJKkr-Regular";
  letter-spacing: -0.5px;
  font-size: 16px;
`;
const Text = styled.div``;
const BtnSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`;
const Btn1 = styled.div`
  width: 45%;
`;
const Btn2 = styled.div`
  width: 45%;
`;
export default FilterModal;
