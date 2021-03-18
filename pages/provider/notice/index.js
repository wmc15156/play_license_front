import styled from "styled-components";
import color from "../../../styles/colors";
import Accordion from "../../../src/component/Form/AccordionMenu";
import { useEffect, useState } from "react";
import axios from "axios";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";
import Navi from "../../../src/component/Nav/Navigation";
import LogoBar from "../../../src/component/Nav/LogoBar";

const notice = [
  {
    id: 1,
    title: "신규 기능 업데이트 안내 (2020.11.05)",
    cate: "공지사항",
    answer: "LoremLoremLoremLorremLoremLoremLorremLoremLorem",
  },
  {
    id: 2,
    title: "추석연휴 고객센터 휴무 안내 (2020.09.29)",
    cate: "공지사항",
    answer: `LoLoremLoremLoremLoremLor
    LoLoremLoremLorem
    LoLoremLoremLoremLoremLorLoLorem`,
  },
  {
    id: 3,
    title: "전화상담 재개 안내 (2020.09.10)",
    cate: "공지사항",
    answer: `LoLoremLoremLoremLoremLor
      LoLoremLoremLorem
      LoLoremLoremLoremLoremLorLoLorem`,
  },
];

function pl_notice() {
  // const [notice, setNotice] = useState([]);
  const GET_URL = "";
  // const getData = ()=>{
  // 등록 된 notice들 가져오기
  // axios.get(GET_URL).then(res=>{
  // console.log(res);
  // setNotice(res)
  //   })
  // }
  // useEffect(()=>{
  //   getData()
  // })

  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />
        <Title>공지사항</Title>
        <List>
          {notice.map((item, idx) => (
            <ListItem key={item.id}>
              <Accordion
                title={item.title}
                cate={item.cate}
                answer={item.answer}
              />
            </ListItem>
          ))}
        </List>
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
  flex-direction: column;
  ${PageContentContainer};
`;

const Title = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black2};
  padding-bottom: 30px;
  border-bottom: 1px solid ${color.black5};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li``;
export default pl_notice;
