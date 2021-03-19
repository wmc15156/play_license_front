import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "../../src/component/Form/AccordionMenu";

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

const Notice = () => {
  // const [faq, setNotice] = useState([]);
  const GET_URL = "";
  // const getData = ()=>{
  // 등록 된 notice 가져오기
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
      <Title>공지사항</Title>
      <Section>
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
      </Section>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 48px auto;
  padding: 0 1rem;
`;
const Title = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  line-height: 36px;
  font-size: 36px;
  margin-bottom: 70px;
`;

const Section = styled.div`
  width: 100%;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li``;
export default Notice;
