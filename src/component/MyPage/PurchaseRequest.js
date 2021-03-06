import styled from "styled-components";
import color from "../../../styles/colors";

const PurchaseRequest = () => {
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
          <Box_Status>
            <Text_Status>관리자검토중</Text_Status>
          </Box_Status>
          {/* 문의내용 */}
          <Text>자세히보기</Text>
          {/* 견적서 */}
          <Text>자세히보기</Text>
          {/* 계약서 */}
          <Text>자세히보기</Text>
        </List>
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
const Text = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black1};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Box_Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Text_Status = styled.span`
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black3};
`;

export default PurchaseRequest;
