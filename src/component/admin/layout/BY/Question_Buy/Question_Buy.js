import styled, { css } from "styled-components";
import color from "../../../../../../styles/colors";
import Header from "../../../common/Header/ContentHeader2";
import { TabContainer } from "../../../../../../styles/PL_Frame";
import Pagination from "../../../../../../src/component/Pagination/Pagination";
import StatusBox from "../../../../../../src/component/Tag/Purchase_AnswerStatus";
import Tab_Container from "../../../common/Wrapper/Tab_Container";
import { useEffect, useState } from "react";

const titleArr = ["작품명", "목적", "문의자", "진행상태", "견적서", "상세보기"];
const listArr = [
  {
    id: 1,
    name: "이궁금",
    title: "배쓰맨 (Man of Bath)",
    createdAt: "2020.12.24",
    progress: "관리자검토중",
    brokerageConsignments: ["교육"],
    requestPurpose: "perform",
  },
  {
    id: 2,
    name: "이궁금",
    title: "배쓰맨 (Man of Bath)",
    createdAt: "2020.12.25",
    progress: "보완요청",
    brokerageConsignments: ["공연", "기타"],
    requestPurpose: "etc",
  },
  {
    id: 3,
    name: "이궁금",
    title: "배쓰맨 (Man of Bath)",
    createdAt: "2020.12.26",
    progress: "승인완료",
    brokerageConsignments: ["공연", "교육"],
    requestPurpose: "edu",
  },
  {
    id: 4,
    name: "이궁금",
    title: "배쓰맨 (Man of Bath)",
    createdAt: "2020.12.27",
    progress: "관리자검토중",
    brokerageConsignments: ["공연", "교육", "기타"],
    requestPurpose: "perform",
  },
];

const Question_Buy = () => {
  const [tab, setTab] = useState("");
  const [requestId, setRequestId] = useState(null);
  const [purpose, setPurpose] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage; // 0

  const showCurrentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  useEffect(() => setTab(""), []);

  const Tab = {
    detail: (
      <Tab_Container
        id={requestId}
        pageType={"buyer"}
        purpose={purpose}
        infoBtnColor={color.orange2}
      />
    ),
  };

  return (
    <Container>
      {tab && Tab[tab]}
      {!tab && (
        <>
          <Header
            pageType={"buyer"}
            titleText={"등록된 문의"}
            countText={`${listArr.length}건`}
            placeholder={"작품이름을 검색해보세요"}
            optionsArr1={["공연", "교육", "기타"]}
            defaultOption1={"목적"}
            optionsArr2={[
              "관리자검토중",
              "보완요청",
              "제작사검토중",
              "승인완료",
              "철회완료",
            ]}
            defaultOption2={"진행상태"}
          />
          <TableWrapper>
            <Table>
              <Table_Title>
                {titleArr.map((title, i) => (
                  <TitleText key={i}>{title}</TitleText>
                ))}
              </Table_Title>
              {listArr.length === 0 && (
                <EmptyList>
                  <span>{type} 내역이 없습니다</span>
                </EmptyList>
              )}
              {listArr.length > 0 &&
                showCurrentPosts(listArr).map((item, idx) => {
                  return (
                    <List key={idx}>
                      <Text>{item.title}</Text>

                      <Text>{item.name}</Text>

                      <Text>{item.createdAt}</Text>

                      <Text>
                        <StatusBox status={item.progress}>
                          {item.progress}
                        </StatusBox>
                      </Text>

                      <DetailText>견적서</DetailText>

                      <Text>
                        <StatusBox
                          status={false}
                          background={color.white}
                          fontColor={color.black1}
                          borderColor={color.black2}
                          onClick={() => {
                            setRequestId(item.id);
                            setPurpose(item.requestPurpose);
                            setTab("detail");
                          }}
                        >
                          {"문의내역 상세보기"}
                        </StatusBox>
                      </Text>
                    </List>
                  );
                })}
            </Table>
            <PageWrapper>
              <Pagination
                color={color.blue}
                itemsPerPage={postsPerPage}
                totalItems={listArr.length}
                paginate={setCurrentPage}
              />
            </PageWrapper>
          </TableWrapper>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  ${TabContainer}
`;
const TableWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 226px;
  flex-direction: column;
`;

const PageWrapper = styled.div`
  margin-top: auto;
`;

const Table = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  /* height: 100%; */
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 44px;
`;

const Table_Title = styled.li`
  display: flex;
  width: 100%;
  background-color: ${color.gray1};
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 60px;
`;

const TitleText = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black1};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const EmptyList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  color: ${color.black3};
  font-family: "NotoSansCJKkr-Medium";
  font-size: 12px;
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const List = styled.li`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${color.black5};
  height: 60px;
  &:last-child {
    /* border-bottom: none; */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
const TextStyle = css`
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black1};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  ${TextStyle}
`;
const DetailText = styled.div`
  ${TextStyle};
  text-decoration: underline;
  text-decoration-color: ${color.black2};
  color: ${color.black2};
`;
export default Question_Buy;
