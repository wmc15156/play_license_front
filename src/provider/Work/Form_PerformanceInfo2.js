import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import { FaCheck } from "react-icons/fa";
import CheckBoxWrapper from "../../component/CheckBoxWrapper/CircleCheckBoxWrapper";
import BasicInput from "../../component/BasicInput/BasicInputColor";
import Selector from "../../component/Input/SelectOption";
import ImageUploader from "../../component/Input/ImageUploader";
import GrayBtn from "../../component/Button/GrayShortBtn";
import { useCallback } from "react";

const items_category = ["연극", "뮤지컬", "기타"];
const items_genre = [
  "가족",
  "로맨스",
  "코미디",
  "공포",
  "판타지",
  "힐링",
  "범죄",
];
const items_mainAudience = [
  "영아(0세~1세)",
  "유아(1세~5세)",
  "아동(5세~8세)",
  "초등(8세~13세)",
  "중고등(14세~19세)",
  "일반(15세~성인)",
];

const PerformanceInfo2 = ({ perfInfo, setPerfInfo }) => {
  const getImgURL = (name, url, filename) => {
    setPerfInfo({
      ...perfInfo,
      [name]: { url: url, filename: filename },
    });
  };

  const setNumberList = (event, idx) => {
    const arr = [...perfInfo.numberList];
    arr[idx] = event.target.value;
    console.log(arr);

    setPerfInfo({
      ...perfInfo,
      numberList: arr,
    });
  };

  const removeNumberList = (idx) => {
    const arr = [...perfInfo.numberList];
    arr.splice(idx, 1);
    setPerfInfo({ ...perfInfo, numberList: arr });
  };

  const addNumberList = () => {
    setPerfInfo({
      ...perfInfo,
      numberList: [...perfInfo.numberList, ""],
    });
  };

  const checkCategoryHandler = (name) => {
    setPerfInfo({
      ...perfInfo,
      category: name,
    });
  };

  const removeGenreItemHandler = useCallback(
    (name) => {
      let array = perfInfo.genre;
      let itemIdx = array.indexOf(name);
      array.splice(itemIdx, 1);
      setPerfInfo((prev) => {
        return { ...prev, genre: [...array] };
      });
    },
    [perfInfo.genre]
  );

  const checkGenreHandler = (name) => {
    // 3개까지 선택가능
    if (perfInfo.genre.includes(name)) {
      removeGenreItemHandler(name);
    } else {
      if (perfInfo.genre.length >= 3) {
        alert("최대 3개까지 선택가능합니다");
      } else {
        setPerfInfo({
          ...perfInfo,
          genre: [...perfInfo.genre, name],
        });
      }
    }
  };

  const removeMainAudienceHandler = useCallback(
    (name) => {
      let array = perfInfo.mainAudience;
      let itemIdx = array.indexOf(name);
      array.splice(itemIdx, 1);
      setPerfInfo((prev) => {
        return { ...prev, mainAudience: [...array] };
      });
    },
    [perfInfo.mainAudience]
  );

  const checkMainAudienceHandler = (name) => {
    if (perfInfo.mainAudience.includes(name)) {
      removeMainAudienceHandler(name);
    } else {
      setPerfInfo({
        ...perfInfo,
        mainAudience: [...perfInfo.mainAudience, name],
      });
    }
  };

  const selectorChangesHandler = (e) => {
    let keyname = "";
    console.log(e.target.value);

    switch (e.target.value) {
      case "작가":
        keyname = "author";
        break;
      case "작곡가":
        keyname = "composer";
        break;
      case "작사가":
        keyname = "writer";
        break;
    }

    setPerfInfo({
      ...perfInfo,
      creativeStaff: {
        ...perfInfo.creativeStaff,
        [keyname]: {
          ...perfInfo.creativeStaff.author,
          select: e.target.value,
        },
      },
    });
  };

  return (
    <Container>
      <InputSection>
        <Input>
          <SubTitle>공연분야</SubTitle>
          <Content>
            <CheckSection>
              {items_category.map((label, index) => (
                <CheckItem key={index} labelName={label}>
                  <CheckBox>
                    <CheckBoxWrapper
                      widthHeight={"20px"}
                      checked={perfInfo.category.includes(label)}
                      onClick={() => checkCategoryHandler(label)}
                    >
                      <FaCheck
                        size={"15px"}
                        color={
                          perfInfo.category.includes(label)
                            ? color.white
                            : color.black5
                        }
                      />
                    </CheckBoxWrapper>
                  </CheckBox>
                  <Check_label>{label}</Check_label>
                </CheckItem>
              ))}
            </CheckSection>
          </Content>
        </Input>

        <Input>
          <SubTitle>창작진</SubTitle>
          <Content>
            <InputArea>
              <InputArea_Row1>
                <SelectorWrapper>
                  <Selector
                    options={["작가"]}
                    onChange={(e) =>
                      setPerfInfo({
                        ...perfInfo,
                        creativeStaff: {
                          ...perfInfo.creativeStaff,
                          author: {
                            ...perfInfo.creativeStaff.author,
                            select: e.target.value,
                          },
                        },
                      })
                    }
                    value={perfInfo.creativeStaff.author["select"]}
                  />
                </SelectorWrapper>
                <InputWrapper>
                  <BasicInput
                    width={"100%"}
                    placeholder={"창작진 이름을 모두 입력해주세요."}
                    background={color.gray1}
                    onChange={(e) =>
                      setPerfInfo({
                        ...perfInfo,
                        creativeStaff: {
                          ...perfInfo.creativeStaff,
                          author: {
                            ...perfInfo.creativeStaff.author,
                            input: e.target.value,
                          },
                        },
                      })
                    }
                    value={perfInfo.creativeStaff.author["input"]}
                  />
                </InputWrapper>
              </InputArea_Row1>

              <InputArea_Row1>
                <SelectorWrapper>
                  <Selector
                    value={perfInfo.creativeStaff.writer["select"]}
                    options={["작사가"]}
                    onChange={(e) =>
                      setPerfInfo({
                        ...perfInfo,
                        creativeStaff: {
                          ...perfInfo.creativeStaff,
                          writer: {
                            ...perfInfo.creativeStaff.writer,
                            select: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </SelectorWrapper>
                <InputWrapper>
                  <BasicInput
                    width={"100%"}
                    placeholder={"창작진 이름을 모두 입력해주세요."}
                    background={color.gray1}
                    onChange={(e) =>
                      setPerfInfo({
                        ...perfInfo,
                        creativeStaff: {
                          ...perfInfo.creativeStaff,
                          writer: {
                            ...perfInfo.creativeStaff.writer,
                            input: e.target.value,
                          },
                        },
                      })
                    }
                    value={perfInfo.creativeStaff.writer["input"]}
                  />
                </InputWrapper>
              </InputArea_Row1>

              <InputArea_Row1>
                <SelectorWrapper>
                  <Selector
                    value={perfInfo.creativeStaff.composer["select"]}
                    options={["작곡가"]}
                    onChange={(e) =>
                      setPerfInfo({
                        ...perfInfo,
                        creativeStaff: {
                          ...perfInfo.creativeStaff,
                          composer: {
                            ...perfInfo.creativeStaff.composer,
                            select: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </SelectorWrapper>
                <InputWrapper>
                  <BasicInput
                    width={"100%"}
                    placeholder={"창작진 이름을 모두 입력해주세요."}
                    background={color.gray1}
                    onChange={(e) =>
                      setPerfInfo({
                        ...perfInfo,
                        creativeStaff: {
                          ...perfInfo.creativeStaff,
                          composer: {
                            ...perfInfo.creativeStaff.composer,
                            input: e.target.value,
                          },
                        },
                      })
                    }
                    value={perfInfo.creativeStaff.composer["input"]}
                  />
                </InputWrapper>
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>공연장르</SubTitle>
          <Content>
            <CheckSection>
              {items_genre.map((label, index) => (
                <CheckItem key={index}>
                  <CheckBox>
                    <CheckBoxWrapper
                      widthHeight={"20px"}
                      checked={perfInfo.genre.includes(label)}
                      onClick={() => checkGenreHandler(label)}
                    >
                      <FaCheck
                        size={"15px"}
                        color={
                          perfInfo.genre.includes(label)
                            ? color.white
                            : color.black5
                        }
                      />
                    </CheckBoxWrapper>
                  </CheckBox>
                  <Check_label>{label}</Check_label>
                </CheckItem>
              ))}
            </CheckSection>
          </Content>
        </Input>
        <Input>
          <SubTitle>주관람층</SubTitle>
          <Content>
            <CheckSection>
              {items_mainAudience.map((label, index) => (
                <CheckItem key={index}>
                  <CheckBox>
                    <CheckBoxWrapper
                      widthHeight={"20px"}
                      checked={perfInfo.mainAudience.includes(label)}
                      onClick={() => checkMainAudienceHandler(label)}
                    >
                      <FaCheck
                        size={"15px"}
                        color={
                          perfInfo.mainAudience.includes(label)
                            ? color.white
                            : color.black5
                        }
                      />
                    </CheckBoxWrapper>
                  </CheckBox>
                  <Check_label>{label}</Check_label>
                </CheckItem>
              ))}
            </CheckSection>
          </Content>
        </Input>
        <Input>
          <SubTitle>공연규모</SubTitle>
          <Content>
            <SelectorWrapper>
              <Selector
                value={perfInfo.sizeOfPerformance}
                options={[
                  "소극장(300석 미만)",
                  "중극장(500석 미만)",
                  "대극장(500석 이상)",
                ]}
                onChange={(e) =>
                  setPerfInfo({
                    ...perfInfo,
                    sizeOfPerformance: e.target.value,
                  })
                }
              />
            </SelectorWrapper>
          </Content>
        </Input>

        <Input>
          <SubTitle>러닝타임</SubTitle>
          <Content>
            <Time>
              <SelectorWrapper changeWidth={"105px"}>
                <Selector
                  options={Array(24)
                    .fill()
                    .map((ele, idx) => idx + 1)}
                  onChange={(e) =>
                    setPerfInfo({
                      ...perfInfo,
                      runningTime: {
                        ...perfInfo.runningTime,
                        hour: e.target.value,
                      },
                    })
                  }
                  value={perfInfo.runningTime.hour}
                />
              </SelectorWrapper>
              <Time_text>시간</Time_text>
            </Time>
            <Time>
              <SelectorWrapper changeWidth={"105px"}>
                <Selector
                  options={Array(60)
                    .fill()
                    .map((ele, idx) => idx++)}
                  onChange={(e) =>
                    setPerfInfo({
                      ...perfInfo,
                      runningTime: {
                        ...perfInfo.runningTime,
                        min: e.target.value,
                      },
                    })
                  }
                  value={perfInfo.runningTime.min}
                />
              </SelectorWrapper>
              <Time_text>분</Time_text>
            </Time>

            <Time_im>
              <Time_text switchMargin>&#40;인터미션</Time_text>
              <SelectorWrapper changeWidth={"105px"}>
                <Selector
                  options={Array(60)
                    .fill()
                    .map((ele, idx) => idx++)}
                  onChange={(e) =>
                    setPerfInfo({
                      ...perfInfo,
                      runningTime: {
                        ...perfInfo.runningTime,
                        intermission: e.target.value,
                      },
                    })
                  }
                  value={perfInfo.runningTime.intermission}
                />
              </SelectorWrapper>
              <Time_text>분 포함&#41;</Time_text>
            </Time_im>
          </Content>
        </Input>

        <Input>
          <SubTitle>출연인원</SubTitle>
          <Content>
            <InputArea>
              <InputArea_Row1>
                <SelectorWrapper>
                  <Selector
                    options={["여성"]}
                    onChange={(e) =>
                      setPerfInfo({
                        ...perfInfo,
                        castMembers: {
                          ...perfInfo.castMembers,
                          women: {
                            ...perfInfo.castMembers.women,
                            select: e.target.value,
                          },
                        },
                      })
                    }
                    value={perfInfo.castMembers.women["select"]}
                  />
                </SelectorWrapper>
                <InputWrapper>
                  <BasicInput
                    width={"100%"}
                    placeholder={"배우 참여인원수를 입력해주세요."}
                    background={color.gray1}
                    onChange={(e) =>
                      setPerfInfo({
                        ...perfInfo,
                        castMembers: {
                          ...perfInfo.castMembers,
                          women: {
                            ...perfInfo.castMembers.women,
                            input: e.target.value,
                          },
                        },
                      })
                    }
                    value={perfInfo.castMembers.women["input"]}
                  />
                </InputWrapper>
              </InputArea_Row1>

              <InputArea_Row1>
                <SelectorWrapper>
                  <Selector
                    value={perfInfo.castMembers.men["select"]}
                    options={["남성"]}
                    onChange={(e) =>
                      setPerfInfo({
                        ...perfInfo,
                        castMembers: {
                          ...perfInfo.castMembers,
                          men: {
                            ...perfInfo.castMembers.men,
                            select: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </SelectorWrapper>
                <InputWrapper>
                  <BasicInput
                    width={"100%"}
                    placeholder={"배우 참여인원수를 입력해주세요."}
                    background={color.gray1}
                    onChange={(e) =>
                      setPerfInfo({
                        ...perfInfo,
                        castMembers: {
                          ...perfInfo.castMembers,
                          men: {
                            ...perfInfo.castMembers.men,
                            input: e.target.value,
                          },
                        },
                      })
                    }
                    value={perfInfo.castMembers.men["input"]}
                  />
                </InputWrapper>
              </InputArea_Row1>

              <InputArea_Row1>
                <SelectorWrapper>
                  <Selector
                    value={perfInfo.castMembers.children["select"]}
                    options={["아역"]}
                    onChange={(e) =>
                      setPerfInfo({
                        ...perfInfo,
                        castMembers: {
                          ...perfInfo.castMembers,
                          children: {
                            ...perfInfo.castMembers.children,
                            select: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </SelectorWrapper>
                <InputWrapper>
                  <BasicInput
                    width={"100%"}
                    placeholder={"배우 참여인원수를 입력해주세요."}
                    background={color.gray1}
                    onChange={(e) =>
                      setPerfInfo({
                        ...perfInfo,
                        castMembers: {
                          ...perfInfo.castMembers,
                          children: {
                            ...perfInfo.castMembers.children,
                            input: e.target.value,
                          },
                        },
                      })
                    }
                    value={perfInfo.castMembers.children["input"]}
                  />
                </InputWrapper>
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>각색 허용여부</SubTitle>
          <Content>
            <Selector
              value={perfInfo.changeScenario}
              options={["각색있음", "각색없음"]}
              onChange={(e) =>
                setPerfInfo({
                  ...perfInfo,
                  changeScenario: e.target.value,
                })
              }
            />
          </Content>
        </Input>
        <Input>
          <SubTitle>공연영상 URL</SubTitle>
          <Content>
            <InputArea>
              <InputArea_Row1>
                <BasicInput
                  width={"100%"}
                  placeholder={"유튜브 링크 주소를 입력해주세요."}
                  background={color.gray1}
                  onChange={(e) =>
                    setPerfInfo({
                      ...perfInfo,
                      performanceVideo: e.target.value,
                    })
                  }
                  value={perfInfo.performanceVideo}
                />
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>

        <Input>
          <SubTitle>기획의도</SubTitle>
          <Content>
            <InputArea>
              <InputArea_Row1>
                <BasicInput
                  width={"100%"}
                  placeholder={"작성해주세요."}
                  background={color.gray1}
                  onChange={(e) =>
                    setPerfInfo({
                      ...perfInfo,
                      planningDocument: e.target.value,
                    })
                  }
                  value={perfInfo.planningDocument}
                />
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>시놉시스</SubTitle>
          <Content>
            <InputArea>
              <InputArea_Row1>
                <BasicInput
                  width={"100%"}
                  placeholder={"작성해주세요."}
                  background={color.gray1}
                  onChange={(e) =>
                    setPerfInfo({
                      ...perfInfo,
                      synopsis: e.target.value,
                    })
                  }
                  value={perfInfo.synopsis}
                />
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>

        <Input>
          <SubTitle>공연포스터</SubTitle>
          <Content>
            <UploadBtnWrapper>
              <ImageUploader
                data={perfInfo.posterURL}
                name={"posterURL"}
                getImgURL={getImgURL}
              />
            </UploadBtnWrapper>
          </Content>
        </Input>

        <Input>
          <SubTitle>공연정보 URL</SubTitle>
          <Content>
            <InputArea>
              <InputArea_Row1>
                <BasicInput
                  width={"100%"}
                  placeholder={
                    "상세정보를 확인할 수 있는 링크주소를 입력해주세요."
                  }
                  background={color.gray1}
                  onChange={(e) =>
                    setPerfInfo({
                      ...perfInfo,
                      performanceInformationURL: e.target.value,
                    })
                  }
                  value={perfInfo.performanceInformationURL}
                />
              </InputArea_Row1>
            </InputArea>
          </Content>
        </Input>
        <Input>
          <SubTitle>넘버리스트</SubTitle>
          <Content>
            <InputArea>
              {perfInfo.numberList.map((listItem, i) => {
                return (
                  <InputArea_Row1 key={i}>
                    <BasicInput
                      width={"100%"}
                      placeholder={"입력해주세요."}
                      background={color.gray1}
                      onChange={(e) => setNumberList(e, i)}
                      value={listItem}
                    />
                    {i !== 0 && (
                      <BtnContainer>
                        <GrayBtn
                          size={"14px"}
                          height={"40px"}
                          fontColor={color.black2}
                          onClickHandler={() => removeNumberList(i)}
                          text={"삭제"}
                        />
                      </BtnContainer>
                    )}
                    {i === 0 && (
                      <BtnContainer>
                        <GrayBtn
                          size={"14px"}
                          height={"40px"}
                          fontColor={color.black2}
                          onClickHandler={addNumberList}
                          text={"추가"}
                        />
                      </BtnContainer>
                    )}
                  </InputArea_Row1>
                );
              })}
            </InputArea>
          </Content>
        </Input>
      </InputSection>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  border-radius: 14px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  padding: 33px 47px 40px 38px;
`;
const InputSection = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const Input = styled.li`
  display: flex;
  align-items: baseline;
  width: 100%;
  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0;
  }
`;
const SubTitle = styled.div`
  width: 20%;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  line-height: 16px;
`;
const Content = styled.div`
  display: flex;
  width: 80%;
`;
const SelectorWrapper = styled.div`
  width: 207px;

  ${(props) =>
    props.changeWidth &&
    css`
      max-width: ${props.changeWidth};
    `}
`;

const CheckSection = styled.ul`
  width: 100%;
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* margin-top: 33px; */
`;

const CheckBox = styled.div`
  width: 20px;
`;
const CheckItem = styled.li`
  /* margin: 0;
  padding: 0; */
  display: flex;
  align-items: center;
  /* max-width: 210px; */
  width: 30%;
  margin-bottom: 32px;

  /* ${(props) =>
    props.labelName === "기타" &&
    css`
      width: 100%;
    `} */
`;

const Check_label = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  margin-left: 8px;
  letter-spacing: -0.5px;
  min-width: 35px;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-left: 5%;
`;
const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const InputArea_Row1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

const Time_text = styled.div`
  margin-left: 12px;
  ${(props) =>
    props.switchMargin &&
    css`
      margin-left: 0;
      margin-right: 12px;
    `}
`;
const Time_im = styled.div`
  width: 46%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 18%;
`;

const Span = styled.span`
  width: 100%;
  color: ${color.black3};
  letter-spacing: -0.5px;
  line-height: 12px;
  font-size: 12px;
  font-family: "NotoSansCJKkr-Regular";
  margin-left: 12px;
`;

const ImageBtns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UploadBtnWrapper = styled.div`
  width: 207px;
`;

export default PerformanceInfo2;
