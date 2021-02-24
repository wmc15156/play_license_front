import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useModal from "../../../utils/useModal";
import LoginAlert from "../Modal/AlertModal";
import StatusBox from "../Tag/AnswerStatus";
import QnaDetail from "../Modal/Qna";
import QnaDetailModify from "../Modal/Qna_modify";

const QAList = () => {
  const router = useRouter();

  const { openModal, closeModal, ModalPortal } = useModal();

  const [needLogin, setNeedLogin] = useState(false);
  const [list, setList] = useState([]);
  const [openDetail, setOpenDetail] = useState(false);
  const GET_URL = "/question";

  const detailClickHandler = (id) => {
    // setOpenDetail(true);
    // openModal();
    router.push(`/qna/${id}`);
  };

  const closeModalHandler = () => {
    closeModal();
  };

  const redirectHandler = () => {
    router.push("/login");
  };

  const getData = () => {
    axios
      .get(GET_URL)
      .then((res) => {
        if (res.status === 200) {
          console.log(res, "문의내역 리스트get");
          setList(res.data);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          // 모달 로그인하고오기 창
          setNeedLogin(true);
        }
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Link href="/qna">
        <Btn>
          <img src="/assets/image/1_1_CTA.png" />
        </Btn>
      </Link>
      <Table>
        <Title>
          <TitleText>제목</TitleText>
          <TitleText>자세히보기</TitleText>
          <TitleText>진행상태</TitleText>
          <TitleText>문의일자</TitleText>
        </Title>
        {list.map((q) => {
          const {
            questionId,
            title,
            adminCheck,
            email,
            comment,
            phone,
            name,
            createdAt,
          } = q;
          return (
            <List key={questionId}>
              <Text>{title}</Text>
              {/* <Link href=``> */}
              <DetailText onClick={() => detailClickHandler(questionId)}>
                자세히보기
              </DetailText>
              {/* </Link> */}
              {openDetail && !adminCheck && (
                <ModalPortal>
                  <QnaDetail details={q} onClickHandler={closeModalHandler} />
                </ModalPortal>
              )}
              {!openDetail && adminCheck && (
                <ModalPortal>
                  <QnaDetailModify
                    details={q}
                    onClickHandler={closeModalHandler}
                  />
                </ModalPortal>
              )}
              <Text>
                {<StatusBox status={adminCheck}>{adminCheck}</StatusBox>}
              </Text>
              <Text>{createdAt}</Text>
            </List>
          );
        })}
      </Table>

      {needLogin && (
        <ModalPortal>
          <LoginAlert text={"로그인해주세요"} onClickBtn={redirectHandler} />
        </ModalPortal>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 209px;
  display: flex;
  flex-direction: column;
`;
const Btn = styled.div`
  margin-left: auto;
  margin-bottom: 49.7px;
  cursor: pointer;
  & > img {
    height: 56px;
    width: auto;
  }
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
  background-color: #f5f5f5;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 60px;
`;
const TitleText = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  color: #333;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const List = styled.li`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  height: 60px;
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const DetailText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  font-family: "NotoSansCJKkr-Regular";
  color: #333;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #0d0d0c;
`;

const Text = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  color: #333;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export default QAList;
