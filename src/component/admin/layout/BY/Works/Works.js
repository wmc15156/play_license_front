import styled, { css } from "styled-components";
import color from "../../../../../../styles/colors";
import Header from "../../../common/Header/ContentHeader";
import Tag from "../../../../Tag/Tag2";
import { TabContainer } from "../../../../../../styles/PL_Frame";
import Pagination from "../../../../../../src/component/Pagination/Pagination";
import { useEffect, useState } from "react";

const titleArr = [
  "작품명",
  "목적",
  "디폴트 큐레이션",
  "스페셜 큐레이션",
  "구매문의",
];
const listArr = [
  {
    id: 1,
    count: 4,
    title: "배쓰맨 (Man of Bath)",
    createdAt: "2020.12.24",
    brokerageConsignments: ["교육"],
    default: ["new", "coming"],
    special: ["예술교육을 위한 작품", "아이들을 위한 작품"],
  },
  {
    id: 2,
    count: 4,
    title: "배쓰맨 (Man of Bath)",
    createdAt: "2020.12.25",
    brokerageConsignments: ["공연", "기타"],
    default: ["hot", "coming"],
    special: ["귀호강 고막멜팅 작품", "겨울에 딱 어울리는 작품"],
  },
  {
    id: 3,
    count: 4,
    title: "배쓰맨 (Man of Bath)",
    createdAt: "2020.12.26",
    brokerageConsignments: ["공연", "교육"],
    default: ["coming"],
    special: ["메소드 연기가 빛나는 작품"],
  },
  {
    id: 4,
    count: 4,
    title: "배쓰맨 (Man of Bath)",
    createdAt: "2020.12.27",
    brokerageConsignments: ["공연", "교육", "기타"],
    default: ["new", "coming"],
    special: ["의상이 매력적인 작품", "아이들을 위한 작품", "귀호강 고막멜팅"],
  },
];

const Works = () => {
  const [tab, setTab] = useState("");
  const [workId, setWorkId] = useState(null);
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

  return (
    <Container>
      <Header
        titleText={"등록된 작품"}
        count={`${listArr.length}개`}
        pageType={"buyer"}
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
              <span>등록된 작품이 없습니다</span>
            </EmptyList>
          )}
          {listArr.length > 0 &&
            showCurrentPosts(listArr).map((item, idx) => {
              return (
                <List key={idx}>
                  <Text>{item.title}</Text>
                  <Text>
                    <Tag items={item.brokerageConsignments} />
                  </Text>

                  <Text>
                    {item.default.length > 1
                      ? `${item.default[0]} 외 ${item.default.length - 1}개`
                      : item.default[0]}
                  </Text>

                  <Text changeStyle={color.orange}>
                    {item.special.length > 1
                      ? `${item.special[0]} 외 ${item.special.length - 1}개`
                      : item.special[0]}
                  </Text>
                  <Text>{item.count}건</Text>
                </List>
              );
            })}
        </Table>
        <PageWrapper>
          <Pagination
            color={color.orange}
            itemsPerPage={postsPerPage}
            totalItems={listArr.length}
            paginate={setCurrentPage}
          />
        </PageWrapper>
      </TableWrapper>
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
  ${TextStyle};
  ${(props) => {
    props.changeStyle &&
      css`
        color: ${props.changeStyle};
      `;
  }}
`;
export default Works;
