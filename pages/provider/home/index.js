import styled from "styled-components";
import color from "../../../styles/colors";
import Link from "next/link";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";
import Navi from "../../../src/component/Nav/Navigation";
// import Home_Chart from "../../../src/PL_Component/Home/Home_Chart";
import NoticeListItem from "../../../src/component/Form/NoticeListItem";
import { IoIosInformationCircle } from "react-icons/io";
import { useRouter } from "next/router";

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
const pl_home = () => {
  const router = useRouter();
  const changeRouteHandler = (page) => {
    router.push(`/provider/${page}`);
  };
  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
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
                  <InfoIcon>
                    <IoIosInformationCircle color={color.black2} size="15px" />
                  </InfoIcon>
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
                <Subtitle>월간매출통계</Subtitle>
                <Box_Body>
                  <Home_Chart />
                </Box_Body>
              </Box>
            </FaqContainer>
          </Column2>
        </Section1>
        <Section2>
          <Box>
            <Box_Head>
              <Subtitle>구매분석</Subtitle>
            </Box_Head>
            <Box_Body></Box_Body>
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
  flex-direction: column;
  ${PageContentContainer};
`;

const Title = styled.div`
  font-size: 16px;
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black2};
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
  height: 324px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  min-height: 168px;
`;
const ListItem = styled.li``;

const Box = styled.div`
  width: calc(100% - 60px);
  height: 208px;
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
`;
const Box_Body = styled.div`
  width: 100%;
`;
const Box_List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Box_ListItem = styled.li`
  display: flex;
  justify-content: space-between;
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
  width: 13%;
  text-align: right;
  color: ${color.black3};
  & > span {
    color: ${color.orange};
  }
`;

export default pl_home;
