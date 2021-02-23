import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import useModal from "../../../utils/useModal";
import LoginAlert from "../Modal/AlertModal";
import { useRouter } from "next/router";

const QAList = () => {
  const router = useRouter();
  const { openModal, closeModal, ModalPortal } = useModal();
  const [needLogin, setNeedLogin] = useState(true);
  const GET_URL = "/api/product/buyer/cart";

  const redirectHandler = () => {
    router.push("/login");
  };

  const getData = () => {
    axios
      .get(GET_URL)
      .then((res) => console.log(res, "문의내역 리스트get"))
      .catch((err) => {
        if (err.response.status === 401) {
          // 모달 로그인하고오기 창
          setNeedLogin(true);
        }
      });
  };
  useEffect(() => {
    getData();
  });

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
        <List>
          {/* 작품명 */}
          <Text>네네네</Text>
          {/* 문의일자 */}
          <Text>2020.12.11</Text>
          {/* 진행상태 */}
          <Text>
            <button>관리자검토중</button>
          </Text>
          {/* 문의내용 */}
          <Text>자세히보기</Text>
          {/* 견적서 */}
          <Text>자세히보기</Text>
          {/* 계약서 */}
          <Text>자세히보기</Text>
        </List>
        <List>
          {/* 작품명 */}
          <Text>네네네</Text>
          {/* 문의일자 */}
          <Text>2020.12.11</Text>
          {/* 진행상태 */}
          <Text>
            <button>관리자검토중</button>
          </Text>
          {/* 문의내용 */}
          <Text>자세히보기</Text>
          {/* 견적서 */}
          <Text>자세히보기</Text>
          {/* 계약서 */}
          <Text>자세히보기</Text>
        </List>
        <List>
          {/* 작품명 */}
          <Text>네네네</Text>
          {/* 문의일자 */}
          <Text>2020.12.11</Text>
          {/* 진행상태 */}
          <Text>
            <button>관리자검토중</button>
          </Text>
          {/* 문의내용 */}
          <Text>자세히보기</Text>
          {/* 견적서 */}
          <Text>자세히보기</Text>
          {/* 계약서 */}
          <Text>자세히보기</Text>
        </List>
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
const Text = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  color: #333;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export default QAList;
