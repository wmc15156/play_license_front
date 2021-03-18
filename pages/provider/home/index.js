import styled from "styled-components";
import color from "../../../styles/colors";
import Link from "next/link";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";
import Navi from "../../../src/component/Nav/Navigation";
import LogoBar from "../../../src/component/Nav/LogoBar";
import Home_Chart from "../../../src/PL_Component/Home/Home_Chart";
import NoticeListItem from "../../../src/component/Form/NoticeListItem";
import { IoIosInformationCircle } from "react-icons/io";
import { useRouter } from "next/router";
import { useState } from "react";

const notice = [
  {
    id: 1,
    title: "플레이라이선스 시범운영 안내",
    cate: "이용방법",
    answer: "LoremLoremLoremLorremLoremLoremLorremLoremLorem",
  },
  {
    id: 2,
    title: "플레이라이선스 시범운영 안내",
    cate: "이용방법",
    answer: `LoLoremLoremLoremLoremLor
    LoLoremLoremLorem
    LoLoremLoremLoremLoremLorLoLorem`,
  },
  {
    id: 3,
    title: "플레이라이선스 시범운영 안내",
    cate: "이용방법",
    answer: `LoLoremLoremLoremLoremLor
    LoLoremLoremLorem
    LoLoremLoremLoremLoremLorLoLorem`,
  },
];

const Table = ({ title, list }) => {
  return (
    <Table_Container>
      <Table_Title>{title}</Table_Title>
      {list.map((item, i) => {
        return (
          <Table_List key={i}>
            <Table_List_Sub>{item.category}</Table_List_Sub>
            <Table_List_Text>
              <span>{item.count}</span>건
            </Table_List_Text>
          </Table_List>
        );
      })}
    </Table_Container>
  );
};

const pl_home = () => {
  const router = useRouter();
  const [balloon, setBalloon] = useState(false);

  const changeRouteHandler = (page) => {
    router.push(`/provider/${page}`);
  };

  const iconClickHandler = () => {
    console.log("아이콘클릭");
    setBalloon((prev) => !prev);
  };

  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />
        <Section1>
          <Column1>
            <Title>공지사항</Title>
            <NoticeContainer>
              <List>
                {notice
                  .map((item, idx) => (
                    <ListItem key={item.id}>
                      <NoticeListItem
                        title={item.title}
                        cate={item.cate}
                        clickHandler={() => changeRouteHandler("notice")}
                      />
                    </ListItem>
                  ))
                  .slice(0, 2)}
              </List>
              <Divider>
                <Link href="/provider/notice">
                  <span>모두보기</span>
                </Link>
              </Divider>
              <Box>
                <Box_Head>
                  <Subtitle>고객현황</Subtitle>
                  <InfoIcon onClick={iconClickHandler}>
                    <IoIosInformationCircle color={color.black2} size="15px" />
                  </InfoIcon>
                  {balloon && (
                    <Balloon>
                      <Balloon_Text>
                        <span>상상마루</span> 님이 등록한
                        <br />
                        모든 작품에 대한 고객 현황입니다
                      </Balloon_Text>
                    </Balloon>
                  )}
                </Box_Head>
                <Box_Body>
                  <Box_List>
                    <Box_ListItem>
                      <Box_ListItem_name>
                        <img src="/assets/image/heart.png" />
                        찜하기
                      </Box_ListItem_name>
                      <Box_ListItem_content>
                        <span>10</span>명
                      </Box_ListItem_content>
                    </Box_ListItem>
                    <Box_ListItem>
                      <Box_ListItem_name>
                        <img src="/assets/image/heart.png" />
                        조회수
                      </Box_ListItem_name>
                      <Box_ListItem_content>
                        <span>10</span>회
                      </Box_ListItem_content>
                    </Box_ListItem>
                    <Box_ListItem>
                      <Box_ListItem_name>
                        <img src="/assets/image/heart.png" />
                        판매수
                      </Box_ListItem_name>
                      <Box_ListItem_content>
                        <span>10</span>건
                      </Box_ListItem_content>
                    </Box_ListItem>
                  </Box_List>
                </Box_Body>
              </Box>
            </NoticeContainer>
          </Column1>
          <Column2>
            <Title>자주묻는질문</Title>
            <FaqContainer>
              <List>
                {notice
                  .map((item, idx) => (
                    <ListItem key={item.id}>
                      <NoticeListItem
                        title={item.title}
                        cate={item.cate}
                        clickHandler={() => changeRouteHandler("faq")}
                      />
                    </ListItem>
                  ))
                  .slice(0, 2)}
              </List>
              <Divider>
                <Link href="/provider/faq">
                  <span>모두보기</span>
                </Link>
              </Divider>
              <Box>
                <Box_Head>
                  <Subtitle>월간매출통계</Subtitle>
                </Box_Head>
                <Box_Body>{/* <Home_Chart /> */}</Box_Body>
              </Box>
            </FaqContainer>
          </Column2>
        </Section1>
        <Section2>
          <Box height={"auto"}>
            <Box_Head>
              <Subtitle>구매분석</Subtitle>
            </Box_Head>
            <Box_Body>
              <Table
                title={"구매자 유형"}
                list={[
                  { category: "공연", count: "5" },
                  { category: "교육", count: "5" },
                  { category: "기타", count: "5" },
                ]}
              />
              <Table
                title={"장르"}
                list={[
                  { category: "가족", count: "5" },
                  { category: "로맨스", count: "5" },
                  { category: "판타지", count: "5" },
                ]}
              />
            </Box_Body>
          </Box>
        </Section2>
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

const Title = styled.div`
  font-size: 16px;
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black2};
  margin-bottom: 30px;
`;

const Subtitle = styled.div`
  text-align: center;
  width: 100%;
  font-size: 16px;
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black2};
`;

const Section1 = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`;

const Column1 = styled.div`
  width: 50%;
  margin-right: 15px;
`;

const Column2 = styled.div`
  width: 50%;
  margin-left: 15px;
`;

const Divider = styled.div`
  margin-top: 14px;
  margin-bottom: 30px;
  text-align: right;
  font-size: 12px;
  & > span {
    font-family: "NotoSansCJKkr-Regular";
    color: ${color.black3};
    cursor: pointer;
  }
`;

const NoticeContainer = styled.div`
  width: 100%;
`;
const FaqContainer = styled.div`
  width: 100%;
`;
const Section2 = styled.div`
  width: 100%;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li``;

const Box = styled.div`
  position: relative;
  width: calc(100% - 60px);
  height: ${(props) => (props.height ? props.height : "208px")};
  padding: 30px;
  border-radius: 14px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Box_Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const InfoIcon = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  /* text-align: right; */
`;

const Balloon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 20px;
  background-color: ${color.white};
  border: 1px solid ${color.black5};
  top: -50px;
  right: -53px;
  border-radius: 8px;
  z-index: 11;

  &::after {
    position: absolute;
    border-bottom: 0px solid transparent;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 10px solid ${color.white};
    border-color: ${color.black5} transparent;
    content: "";
    bottom: -10px;
  }
`;

const Balloon_Text = styled.div`
  line-height: 15px;
  font-family: "NotoSansCJKkr-Regular";
  font-size: 10px;
  text-align: center;
  & > span {
    /* position: relative; */
    display: inline-block;
    /* align-items: center; */
    color: ${color.orange};
  }
`;

const Box_Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Box_List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`;
const Box_ListItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  margin-bottom: 27px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Box_ListItem_name = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  & > img {
    width: 20px;
    height: auto;
    margin-right: 10px;
  }
`;
const Box_ListItem_content = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: flex-end;
  color: ${color.black3};
  & > span {
    color: ${color.orange};
  }
`;

const Table_Container = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: calc(50% - 15px);
  border-radius: 14px;
  border: 2px solid ${color.gray1};
`;

const Table_Title = styled.li`
  background-color: ${color.gray1};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 0;
  text-align: center;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  line-height: 16px;
  color: ${color.black3};
  margin-bottom: 15px;
`;

const Table_List = styled.li`
  font-family: "NotoSansCJKkr-Regular";
  line-height: 14px;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const Table_List_Sub = styled.div`
  width: 50%;
  margin-left: 30px;
`;

const Table_List_Text = styled.div`
  width: 50%;
  text-align: right;
  margin-right: 30px;
  color: ${color.black3};
  & > span {
    color: ${color.orange};
  }
`;

export default pl_home;
