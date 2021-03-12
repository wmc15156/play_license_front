import styled from "styled-components";
import color from "../../../styles/colors";
import CheckBoxWrapper from "../CheckBoxWrapper/CircleCheckBoxWrapper";
import GrayShortBtn from "../Button/GrayShortBtn";
import OrangeShortBtn from "../Button/OriginalButton";
import { FaCheck } from "react-icons/fa";
import { useState, useCallback } from "react";
import BasicInput from "../BasicInput/BasicInputColor";
import { useRouter } from "next/router";

const items = {
  category: ["뮤지컬", "연극", "아동극"],
  sizeOfPerformance: [
    "소극장(300석 미만)",
    "중극장(500석 미만)",
    "대극장(500석 이상)",
  ],
  round: "",
  price: ["무료", "유료"],
  requiredMaterials: [
    "대본",
    "보컬악보",
    "원본포스터(PSD)",
    "연습MR",
    "공연MR",
    "총보(라이브 연주가 가능한 악보)",
    "공연실황영상",
    "무대디자인",
    "소품디자인 및 리스트",
    "의상디자인",
    "음향 리스트 및 파일",
    "안무 가이드",
  ],
};

const Est_Performance = () => {
  const router = useRouter();
  const [selected, setSelected] = useState({
    category: "",
    sizeOfPerformance: "",
    round: "",
    price: { 0: "", 1: "" },
    requiredMaterials: [],
  });

  console.log("perform 선택된 옵션>>>>", selected);

  const removeRequireItemHandler = useCallback(
    (itemIdx) => {
      let array = selected.requiredMaterials;
      array.splice(itemIdx, 1);
      setSelected((prev) => {
        return { ...prev, requiredMaterials: [...array] };
      });
    },
    [selected.requiredMaterials]
  );

  const checkRequireHandler = (name) => {
    if (selected.requiredMaterials.includes(name)) {
      removeRequireItemHandler();
    } else {
      setSelected({
        ...selected,
        requiredMaterials: [...selected.requiredMaterials, name],
      });
    }
  };

  const radioButtonHandler = (name, val) => {
    if (name === "price") {
      setSelected({
        ...selected,
        price: { ...selected.price, 0: val },
      });
    } else {
      setSelected({
        ...selected,
        [name]: val,
      });
    }
  };

  const resetHandler = () => {
    setSelected({
      category: "",
      sizeOfPerformance: "",
      round: "",
      price: { 0: "", 1: "" },
      requiredMaterials: [],
    });
    console.log(selected, "selected??");
  };

  const nextBtnHandler = () => {
    router.push(`/performances/${router.query.id}/buy`);
  };

  return (
    <div>
      <Title>
        *공연 또는 교육 목적이 아닌 경우, 가견적 계산이 불가하므로 ‘구매하기’로
        구매 문의를 작성해주세요.
      </Title>
      <BodySection>
        <List>
          <Item>
            <SubTitle>공연분야</SubTitle>
            <Content>
              <CheckSection>
                {items.category.map((label, index) => (
                  <CheckItem key={index}>
                    <CheckBoxWrapper
                      widthHeight={"20px"}
                      checked={selected.category.includes(label)}
                      onClick={() => radioButtonHandler("category", label)}
                    >
                      <FaCheck
                        size={"15px"}
                        color={
                          selected.category.includes(label)
                            ? color.white
                            : color.black5
                        }
                      />
                    </CheckBoxWrapper>
                    <div>{label}</div>
                  </CheckItem>
                ))}
              </CheckSection>
            </Content>
          </Item>
          <Item>
            <SubTitle>공연규모</SubTitle>
            <Content>
              <CheckSection>
                {items.sizeOfPerformance.map((label, index) => (
                  <CheckItem key={index}>
                    <CheckBoxWrapper
                      widthHeight={"20px"}
                      checked={selected.sizeOfPerformance.includes(label)}
                      onClick={() =>
                        radioButtonHandler("sizeOfPerformance", label)
                      }
                    >
                      <FaCheck
                        size={"15px"}
                        color={
                          selected.sizeOfPerformance.includes(label)
                            ? color.white
                            : color.black5
                        }
                      />
                    </CheckBoxWrapper>
                    <div>{label}</div>
                  </CheckItem>
                ))}
              </CheckSection>
            </Content>
          </Item>
          <Item>
            <SubTitle>공연회차</SubTitle>
            <Content>
              <Box>
                <BasicInput
                  width={"100%"}
                  placeholder={"직접입력"}
                  background={color.white}
                  onChange={(e) =>
                    setSelected({
                      ...selected,
                      round: e.target.value,
                    })
                  }
                  value={selected.round}
                />
                {/* <Text2>회차</Text2> */}
              </Box>
            </Content>
          </Item>
          <Item>
            <SubTitle>티켓가격</SubTitle>
            <Content>
              <Box_2>
                <CheckSection>
                  {items.price.map((label, index) => (
                    <CheckItem key={index}>
                      <CheckBoxWrapper
                        widthHeight={"20px"}
                        checked={selected.price[0].includes(label)}
                        onClick={() => radioButtonHandler("price", label)}
                      >
                        <FaCheck
                          size={"15px"}
                          color={
                            selected.price[0].includes(label)
                              ? color.white
                              : color.black5
                          }
                        />
                      </CheckBoxWrapper>
                      <div>{label}</div>
                    </CheckItem>
                  ))}
                </CheckSection>
              </Box_2>
              <Box_2>
                {selected.price[0] === "유료" && (
                  <BasicInput
                    width={"100%"}
                    placeholder={"직접입력"}
                    background={color.white}
                    onChange={(e) =>
                      setSelected({
                        ...selected,
                        price: {
                          ...selected.price,
                          1: e.target.value,
                        },
                      })
                    }
                    value={selected.price[1]}
                  />
                )}
              </Box_2>
            </Content>
          </Item>
          <Item>
            <SubTitle>필요자료</SubTitle>
            <Content_2>
              <CheckSection>
                {items.requiredMaterials.map((label, index) => (
                  <CheckItem key={index}>
                    <CheckBoxWrapper
                      widthHeight={"20px"}
                      checked={selected.requiredMaterials.includes(label)}
                      onClick={() => checkRequireHandler(label)}
                    >
                      <FaCheck
                        size={"15px"}
                        color={
                          selected.requiredMaterials.includes(label)
                            ? color.white
                            : color.black5
                        }
                      />
                    </CheckBoxWrapper>
                    <div>{label}</div>
                  </CheckItem>
                ))}
              </CheckSection>
            </Content_2>
          </Item>
        </List>
      </BodySection>
      <Est>
        <Text>
          고객님의 가상견적은 총 <span>200,000</span>원(VAT 별도)입니다.
        </Text>
      </Est>
      <BottomSection>
        <Buttons>
          <Btn1>
            <GrayShortBtn
              text={"초기화하기"}
              onClickHandler={resetHandler}
              size={"18px"}
              height={"56px"}
              fontColor={color.black1}
            />
          </Btn1>
          <Btn2>
            <OrangeShortBtn
              width={"100%"}
              background={true}
              margin={"0px"}
              height={"56px"}
              size={"18px"}
              onClick={() => nextBtnHandler()}
            >
              구매하기
            </OrangeShortBtn>
          </Btn2>
        </Buttons>
      </BottomSection>
    </div>
  );
};

const Title = styled.p`
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black3};
  margin: 0;
  margin-top: 20px;
  margin-bottom: 46px;
`;

const BodySection = styled.div``;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Item = styled.li`
  display: flex;
  width: 100%;
  height: 65px;
`;
const SubTitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  display: flex;
  width: 10%;
  align-items: baseline;
`;
const Content = styled.div`
  display: flex;
  font-family: "NotoSansCJKkr-Regular";
  font-size: 16px;
  line-height: 1;
  width: 90%;
  align-items: baseline;
`;
const Box = styled.div`
  align-items: baseline;
  width: 30%;
`;

const Box_2 = styled.div`
  width: 22.5% auto;
`;
const CheckSection = styled.ul`
  font-family: "NotoSansCJKkr-Regular";
  display: flex;
  font-size: 16px;
  line-height: 1;
  /* align-items: baseline; */
  width: 90%;
  margin: 0;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  /* align-items: center; */
`;

const CheckItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
`;

const Box_price = styled.div`
  align-items: baseline;
  display: flex;
`;
const Est = styled.div`
  width: 100%;
  display: flex;
  border-radius: 8px;
  background-color: ${color.gray1};
  margin-bottom: 25px;
  margin-top: 42px;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  padding: 22px 0;
  & > span {
    font-family: "NotoSansCJKkr-Bold";
    color: ${color.orange};
    font-size: 24px;
  }
`;

const Content_2 = styled.div`
  display: flex;
  font-family: "NotoSansCJKkr-Regular";
  font-size: 16px;
  line-height: 1;
  width: 90%;
  flex-wrap: wrap;
  align-items: baseline;
`;
const InputBox = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  font-size: 16px;
  display: flex;
  border-radius: 8px;
  max-width: 212px;
  height: 48px;
  border: 1px solid ${color.black5};
`;
const InputText = styled.input.attrs({
  type: "number",
})`
  line-height: 1;
  border-radius: 8px;
  width: 60%;
  border: none;
  outline: none;
  padding: 0 0 0 20px;
`;
const Text2 = styled.span`
  line-height: 1;
  padding: 0 20px 0 0;
  display: flex;
  align-items: center;
`;
const BottomSection = styled.div`
  width: 100%;
  height: 100%;
`;

const Buttons = styled.div`
  display: flex;
  height: 56px;
`;
const Btn1 = styled.div`
  width: 100%;
  margin-right: 16px;
`;
const Btn2 = styled.div`
  width: 100%;
  margin-left: 16px;
`;
export default Est_Performance;
