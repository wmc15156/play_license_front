import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";
import Navi from "../../../src/component/Nav/Navigation";
import LogoBar from "../../../src/component/Nav/LogoBar";
import useModal from "../../../utils/useModal";
import Pagination from "../../../src/component/Pagination/Pagination";
import StatusBox from "../../../src/component/Tag/Purchase_AnswerStatus";
import DataManagementStatus from "../../../src/component/Tag/PL_DataStatus";
import Btn from "../../../src/component/Button/OriginalButton";
import Tag from "../../../src/component/Tag/Tag.";
import { data } from "../../../src/PL_Component/Work/dummies";

function pl_work() {
  const router = useRouter();
  const { openModal, closeModal, ModalPortal } = useModal();
  const [needLogin, setNeedLogin] = useState(false);
  // const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage; // 0
  const showCurrentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const onClickHandler = (id) => {
    router.push(`/provider/work/${id}`);
  };

  const getData = () => {
    // axios
    //   .get(GET_URL)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       console.log(res, "????????>>>>");
    //       setList(res.data);
    //     }
    //   })
    //   .catch((err) => {
    //     if (err.response.status === 401) {
    //       // 모달 로그인하고오기 창
    //       setNeedLogin(true);
    //     }
    //   });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />
        <HeadSection>
          <BtnWrapper>
            <Btn
              width={"100%"}
              background={true}
              margin={"0px"}
              height={"36px"}
              size={"12px"}
              onClick={() => onClickHandler("register")}
            >
              새 작품등록 문의하기
            </Btn>
          </BtnWrapper>
          <Title>작품관리</Title>
        </HeadSection>
        <TableWrapper>
          <Table>
            <Table_Title>
              <TitleText>작품명</TitleText>
              <TitleText>문의일자</TitleText>
              <TitleText>진행상태</TitleText>
              <TitleText>작품정보관리</TitleText>
              <TitleText>자료관리</TitleText>
            </Table_Title>
            {data.list.length === 0 && (
              <EmptyList>
                <span>작품 내역이 없습니다</span>
              </EmptyList>
            )}
            {data.list.length > 0 &&
              showCurrentPosts(data.list).map((q, idx) => {
                const {
                  productId,
                  title,
                  createdAt,
                  adminCheck,
                  product,
                  isDataExist,
                } = q;
                return (
                  <List key={idx}>
                    <Text>{title}</Text>
                    <Text>{createdAt}</Text>

                    <Text>
                      <StatusBox status={adminCheck}>{adminCheck}</StatusBox>
                    </Text>
                    <DetailText>
                      <span onClick={() => onClickHandler(productId)}>
                        정보 확인
                      </span>
                    </DetailText>
                    <Text>
                      <DataManagementStatus
                        status={adminCheck}
                        onClick={() => onClickHandler(`${productId}/files`)}
                      />
                    </Text>
                  </List>
                );
              })}
          </Table>
          <PageWrapper>
            <Pagination
              itemsPerPage={postsPerPage}
              totalItems={data.list.length}
              paginate={setCurrentPage}
            />
          </PageWrapper>
        </TableWrapper>
        <Divider />
        <ProductListTitle>판매중인 작품 바로가기</ProductListTitle>

        <Performance_List>
          {data.performances.map((item, idx) => (
            <Link href={`/performances/${item.productId}`} key={idx}>
              <Item key={item.productId}>
                <ItemImg>
                  <img src={item.productImage} alt={item.productTitle} />
                </ItemImg>
                <ItemDesc>
                  <Category>
                    {item.productBrokerageConsignment.map((cate, i) => {
                      return (
                        <Tag
                          title={cate.slice(0, 2)}
                          id={item.productId}
                          key={i}
                        >
                          {cate.slice(0, 2)}
                        </Tag>
                      );
                    })}
                  </Category>
                  <Ptitle>{item.productTitle}</Ptitle>
                  <PInfo>
                    <div>{item.productCate}</div>
                    <PInfo_Divider></PInfo_Divider>
                    <div>{item.productYear}</div>
                    <PInfo_Divider></PInfo_Divider>
                    <div>{item.productCompany}</div>
                  </PInfo>
                </ItemDesc>
              </Item>
            </Link>
          ))}
        </Performance_List>

        <BannerWrapper onClick={() => onClickHandler("register")}>
          <img src="/assets/image/PL/work_banner.png" />
        </BannerWrapper>
      </BodyContainer>
    </Container>
  );
}

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
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  position: relative;
`;

const BtnWrapper = styled.div`
  width: 100%;
  max-width: 130px;
  position: absolute;
  left: 0;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 24px;
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black2};
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

const BannerWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  & > img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
  }
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
    border-bottom: none;
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

const DetailText = styled.div`
  text-decoration: underline ${color.black2};
  & > span {
    cursor: pointer;
    color: ${color.black2};
  }
  ${TextStyle}
`;

const Text = styled.div`
  ${TextStyle}
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.black5};
  margin: 60px 0 40px 0;
`;

const ProductListTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${color.black2};
  font-size: 16px;
  font-family: "NotoSansCJKkr-Bold";
  margin-bottom: 38px;
`;

const Performance_List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 170px;
  width: 100%;
  height: auto;
  margin-right: 2rem;
`;

const ItemImg = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);

  & > img {
    width: 170px;
    height: auto;
  }
`;

const ItemDesc = styled.div`
  min-width: 170px;
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  width: 100%;
  display: flex;
`;

const Ptitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 18px;
  line-height: 18px;
`;

const PInfo = styled.div`
  display: flex;
  font-family: "NotoSansCJKkr-Regular";
  margin-top: 18px;
  align-items: center;
  color: ${color.black3};
`;

const PInfo_Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${color.black3};
  margin: 0 6px;
`;

export default pl_work;
