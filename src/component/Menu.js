import styled from "styled-components";

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  background-color: white;
  margin: 0 auto;
  margin-top: 90px;
`;

const ListKo = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;

  margin-right: 80px;
  font-family: "NotoSansCJKkr-Medium";
  line-height: 36px;
  font-size: 36px;
  & > li {
    margin-bottom: 65px;
  }
`;

const ListEn = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;

  font-family: "Gotham Medium";
  font-size: 24px;
  opacity: 0.3;
  line-height: 36px;
  & > li {
    margin-bottom: 65px;
  }
`;

const CloseBtn = styled.div`
  margin-left: auto;
  width: 34px;
  height: 34px;
  border: 4px solid #000000;
`;
const Menu = (props) => {
  return (
    <Container>
      <ListKo>
        <li>
          <div>홈</div>
        </li>
        <li>
          <div>공연마켓</div>
        </li>
        <li>
          <div>서비스 소개</div>
        </li>
        <li>
          <div>자주 묻는 질문</div>
        </li>
        <li>
          <div>공지사항</div>
        </li>
        <li>
          <div>작품등록 문의</div>
        </li>
      </ListKo>
      <ListEn>
        <li>
          <div>Home</div>
        </li>
        <li>
          <div>Market</div>
        </li>
        <li>
          <div>Service Introduction</div>
        </li>
        <li>
          <div>FAQ</div>
        </li>
        <li>
          <div>Notice</div>
        </li>
        <li>
          <div>Register your work</div>
        </li>
      </ListEn>
      <CloseBtn onClick={props.close}>X icon</CloseBtn>
    </Container>
  );
};

export default Menu;
