import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import StatusBox from "../Tag/Purchase_AnswerStatus";
import useModal from "../../../utils/useModal";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

const dummies = [
  {
    questionId: "1",
    contractId: "1",
    estimateId: "1",
    title: "네네네",
    check: "보완요청",
    createdAt: "2020.12.11",
  },
  {
    questionId: "2",
    contractId: "2",
    estimateId: "2",
    title: "김종욱 찾기",
    check: "승인완료",
    createdAt: "2021.01.11",
  },
];

const PurchaseRequest = () => {
  const router = useRouter();
  const { openModal, closeModal, ModalPortal } = useModal();
  const { data } = useSWR(`/question/${router.query.id}`, fetcher);
  const [openDetail, setOpenDetail] = useState(false);
  const closeModalHandler = () => {
    closeModal();
  };

  const detailClickHandler = (id) => {
    console.log(`/구매문의내용/${id}로 이동`);
    // router.push(`//${id}`);
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
        {dummies.map((ele, i) => {
          console.log(ele);
          const {
            questionId,
            contractId,
            estimateId,
            title,
            check,
            createdAt,
          } = ele;
          return (
            <List>
              <Text>{title}</Text>
              <Text>{createdAt}</Text>
              <Box_Status>
                <StatusBox status={check} />
              </Box_Status>
              <DetailText>
                <span onClick={() => detailClickHandler(questionId)}>
                  자세히보기
                </span>
              </DetailText>
              <Text>자세히보기</Text>
              <Text>자세히보기</Text>
            </List>
          );
        })}
      </Table>
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
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black1};
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

export default PurchaseRequest;
