import styled, { css } from "styled-components";
import color from "../../../../styles/colors";
import {
  PageContainer,
  PageContentContainer,
} from "../../../../styles/PL_Frame";
import Navi from "../../../../src/component/Nav/Navigation";
import LogoBar from "../../../../src/component/Nav/LogoBar";
import axios from "axios";
import useSWR from "swr";
import fetcher from "../../../../utils/fetcher";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import StatusBox from "../../../../src/component/Tag/Purchase_AnswerStatus";
import { data } from "../../../../src/PL_Component/Work/dummies_productInfo";
import Btn from "../../../../src/component/Button/GrayShortBtn";
import InputBox from "../../../../src/component/BasicInput/BasicInputColor";

const files = () => {
  const router = useRouter();
  const [required, setRequired] = useState({
    ...data.requiredMaterials,
  });
  const [selected, setSelected] = useState({
    ...data.selectedMaterials,
  });

  console.log("저장될 데이터", {
    ...data,
    ...required,
    ...selected,
  });

  const back = () => {
    router.back();
  };
  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />
        <HeadSection>
          <T2>
            <span>{data.title}</span>자료관리
          </T2>
          <BtnWrapper>
            <StatusBox status={data.adminCheck}>{data.adminCheck}</StatusBox>
          </BtnWrapper>
        </HeadSection>
        <Divider>
          <Div />
        </Divider>
        <Section>
          {/* 보완요청 => 업로드페이지 */}
          {/* 이외 => 업로드 안되는페이지? */}
          <Title>필수제공자료</Title>
          <Table>
            <Table_Title>
              <TitleText1>분류</TitleText1>
              <TitleText2>종류</TitleText2>
              <TitleText3>가격</TitleText3>
              <TitleText3>원본자료</TitleText3>
              <TitleText3>위탁동의서</TitleText3>
              <TitleText>비고</TitleText>
            </Table_Title>
            {required.select.map((file, idx) => {
              return (
                <List key={idx}>
                  <Text1>필수</Text1>
                  <Text2>{file.name}</Text2>
                  <Text3>{file.price}</Text3>
                  <Text3>{`${file.original} 버튼`}</Text3>
                  <Text3>{`${file.original} 위탁동의서 버튼`}</Text3>
                  <Text>
                    <InputBox
                      height={"28px"}
                      onChange={(e) => {
                        setRequired({
                          select: [
                            ...required.select,
                            {
                              ...required.select[idx],
                              etc: e.target.value,
                            },
                          ],
                        });
                      }}
                      value={required.select[idx].etc}
                    />
                  </Text>
                </List>
              );
            })}
          </Table>

          <Divider>
            <Div lineStyle />
          </Divider>

          <Title>선택제공자료</Title>
          <Table>
            <Table_Title>
              <TitleText1>분류</TitleText1>
              <TitleText2>종류</TitleText2>
              <TitleText3>가격</TitleText3>
              <TitleText3>원본자료</TitleText3>
              <TitleText3>위탁동의서</TitleText3>
              <TitleText>비고</TitleText>
            </Table_Title>
            {selected.select.map((file, idx) => {
              return (
                <List key={idx}>
                  <Text1>선택</Text1>
                  <Text2>{file.name}</Text2>
                  <Text3>{file.price}</Text3>
                  <Text3>{`${file.original} 버튼`}</Text3>
                  <Text3>{`${file.original} 위탁동의서 버튼`}</Text3>
                  <Text>
                    <InputBox
                      height={"28px"}
                      onChange={(e) => {
                        setSelected({
                          ...selected,
                          select: [
                            ...selected.select,
                            {
                              ...selected.select[idx],
                              etc: e.target.value,
                            },
                          ],
                        });
                      }}
                      value={selected.select[idx].etc}
                    />
                  </Text>
                </List>
              );
            })}
          </Table>
        </Section>
        <BottomSection>
          <NoticeBox>
            <p>
              영상이나 음원 등 고용량 파일인 경우{" "}
              <span>비고란에 드라이브 URL</span>을 남겨 주시거나,{" "}
              <span>비고란에 메모를 남기신 뒤 관리자 이메일</span>로 보내주세요.
            </p>
            <p>
              <span>관리자 이메일 : support@playlicense.com</span>
            </p>
          </NoticeBox>
          <BtnContainer>
            <Btn
              text={"이전"}
              size={"12px"}
              height={"36px"}
              fontColor={color.black2}
              onClickHandler={back}
            />
          </BtnContainer>
        </BottomSection>
      </BodyContainer>
    </Container>
  );
};

const Container = styled.div`
  ${PageContainer};
`;

const NavContainer = styled.div`
  width: 220px;
`;

const BodyContainer = styled.div`
  ${PageContentContainer};
  flex-direction: column;
`;

const HeadSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const T2 = styled.p`
  display: flex;
  align-items: center;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  color: ${color.black2};
  margin: 0;
  & > span {
    margin-right: 30px;
    font-size: 24px;
    color: ${color.orange};
  }
`;

const BtnWrapper = styled.div`
  /* width:  */
`;

const Divider = styled.div`
  display: flex;
  width: 100%;
  margin-top: 28px;
  margin-bottom: 30px;
`;

const Div = styled.div`
  background-color: ${color.yellow};
  height: 3px;
  width: 100%;

  ${(props) =>
    props.lineStyle &&
    css`
      background-color: ${color.black5};
      height: 1px;
    `}
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${color.black2};
  font-size: 18px;
  font-family: "NotoSansCJKkr-Bold";
  margin-bottom: 40px;
`;
const Table = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  /* height: 100%; */
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid ${color.gray1};
  /* box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1); */
  margin-bottom: 44px;
`;
const Table_Title = styled.li`
  display: flex;
  /* width: calc(100% - 20px); */
  width: 100%;
  background-color: ${color.gray1};
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 60px;
  /* &:first-child {
    padding-left: 20px;
  } */
`;

const List = styled.li`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${color.black5};
  height: 60px;
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
const TitleTextStyle = css`
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black1};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TitleText = styled.div`
  ${TitleTextStyle}
  width: calc(21% - 20px);
`;

const TitleText1 = styled.div`
  ${TitleTextStyle};
  padding-left: 20px;
  width: calc(9% - 20px);
`;

const TitleText2 = styled.div`
  ${TitleTextStyle};
  width: 19%;
`;
const TitleText3 = styled.div`
  ${TitleTextStyle};
  width: 17%;
`;

const TextStyle = css`
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black1};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const DetailText = styled.div`
  text-decoration: underline ${color.black2};
  & > span {
    cursor: pointer;
    color: ${color.black2};
  }
  ${TextStyle}
`;

const Text = styled.div`
  ${TextStyle} /* padding-left: 20px; */
  width: calc(21% - 20px);
`;
const Text1 = styled.div`
  ${TextStyle};
  /* padding-left: 20px; */
  padding-left: 20px;
  width: calc(9% - 20px);
`;

const Text2 = styled.div`
  ${TextStyle};
  width: 19%;
`;

const Text3 = styled.div`
  ${TextStyle};
  width: 17%;
`;

const BottomSection = styled.div`
  width: 100%;
`;
const NoticeBox = styled.div`
  background-color: ${color.gray1};
  border-radius: 14px;
  width: calc(100% - 60px);
  padding: 20px 30px;

  & > p {
    margin: 0;
    font-size: 12px;
    line-height: 20px;
    font-family: "NotoSansCJKkr-Regular";
    color: ${color.black2};
    & > span {
      font-family: "NotoSansCJKkr-Medium";
      color: ${color.black1};
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  width: 12.5%;
  margin-top: 30px;
  margin-left: auto;
`;
export default files;
