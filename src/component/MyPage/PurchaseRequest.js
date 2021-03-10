import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import StatusBox from "../Tag/Purchase_AnswerStatus";
import useModal from "../../../utils/useModal";
import axios from "axios";
import { useEffect, useState, memo } from "react";
import { useRouter } from "next/router";
import EstImgDownloadModal from "../Modal/ImgDownLoadModal";
import ContractModal from "../Modal/ContractModal";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

const dummies = [
  {
    questionId: "1",
    contractId: "1",
    estimateId: "1",
    title: "네네네",
    check: "승인완료",
    createdAt: "2020.12.11",
  },
  {
    questionId: "2",
    estimateId: "2",
    title: "김종욱 찾기",
    check: "관리자검토중",
    createdAt: "2021.01.11",
  },
  {
    questionId: "3",
    title: "버드나무",
    check: "보완요청",
    createdAt: "2021.02.22",
  },
];

const PurchaseRequest = () => {
  const router = useRouter();
  const { openModal, closeModal, ModalPortal } = useModal();
  // const [list, setList] = useState([]);
  const [openDetail_Est, setOpenDetail_Est] = useState(false);
  const [openDetail_Cont, setOpenDetail_Cont] = useState(false);

  const closeModalHandler = () => {
    closeModal();
    setOpenDetail_Est(false);
    setOpenDetail_Cont(false);
  };

  const detailHandler = (id) => {
    router.push(`/qna/buy/${id}`);
  };

  // GET -작품구매문의
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

  const getDetails_Estimate = (id) => {
    console.log("작품견적문의 ", id);
    setOpenDetail_Est(true);
    openModal();
  };

  const getDetails_Contract = (id) => {
    console.log("작품계약서", id);
    setOpenDetail_Cont(true);
    openModal();
  };

  return (
    <Container>
      <Table>
        <Title>
          <TitleText>작품명</TitleText>
          <TitleText>문의일자</TitleText>
          <TitleText>진행상태</TitleText>
          <TitleText>문의내용</TitleText>
          <TitleText>견적서</TitleText>
          <TitleText>계약서</TitleText>
        </Title>
        {dummies.map((ele) => {
          const {
            questionId,
            contractId,
            estimateId,
            title,
            check,
            createdAt,
          } = ele;
          return (
            <List key={questionId}>
              <Text>{title}</Text>
              <Text>{createdAt}</Text>
              <Box_Status>
                <StatusBox status={check} />
              </Box_Status>

              {/* 문의내용 자세히 */}
              {check === "보완요청" ? (
                <DetailText color={color.orange}>
                  <span onClick={() => detailHandler(questionId)}>
                    보완하기
                  </span>
                </DetailText>
              ) : (
                <DetailText>
                  <span onClick={() => detailHandler(questionId)}>
                    자세히보기
                  </span>
                </DetailText>
              )}

              {/* 견적서 */}
              {estimateId ? (
                <DetailText>
                  <span onClick={() => getDetails_Estimate(estimateId)}>
                    자세히보기
                  </span>
                </DetailText>
              ) : (
                <DetailText></DetailText>
              )}

              {/* 계약서 */}
              {contractId ? (
                <DetailText>
                  <span onClick={() => getDetails_Contract(contractId)}>
                    자세히보기
                  </span>
                </DetailText>
              ) : (
                <DetailText></DetailText>
              )}
            </List>
          );
        })}
      </Table>
      {openDetail_Est && (
        <ModalPortal>
          <EstImgDownloadModal
            closeBtnHandler={closeModalHandler}
            imgSrcUrl={"/assets/image/estimateImg.png"}
          />
        </ModalPortal>
      )}
      {openDetail_Cont && (
        <ModalPortal>
          <ContractModal closeBtnHandler={closeModalHandler} />
        </ModalPortal>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 209px;
`;
const Table = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
`;
const Title = styled.li`
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
  font-family: ${(props) =>
    props.color ? "NotoSansCJKkr-Bold" : "NotoSansCJKkr-Regular"};
  color: ${(props) => (props.color ? props.color : color.black1)};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const DetailText = styled.div`
  text-decoration: underline;
  & > span {
    cursor: pointer;
  }
  ${TextStyle}
`;

const Text = styled.div`
  ${TextStyle}
`;

const Box_Status = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text_Status = styled.span`
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black3};
`;

export default memo(PurchaseRequest);
