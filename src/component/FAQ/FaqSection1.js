import styled from "styled-components";
import Accordion from "../Form/AccordionMenu";
import { useEffect, useState } from "react";
import axios from "axios";

const faq = [
  {
    id: 1,
    title: "저작권 이용에 대한 문의는 어떻게 하나요?",
    cate: "이용방법",
    answer: "LoremLoremLoremLorremLoremLoremLorremLoremLorem",
  },
  {
    id: 2,
    title: "작품 등록은 어떻게 하나요?",
    cate: "이용방법",
    answer: `LoLoremLoremLoremLoremLor
    LoLoremLoremLorem
    LoLoremLoremLoremLoremLorLoLorem`,
  },
  {
    id: 3,
    title: "작품등록은 누구나 가능한가요?",
    cate: "작품등록",
    answer: `LoLoremLoremLoremLoremLor
      LoLoremLoremLorem
      LoLoremLoremLoremLoremLorLoLorem`,
  },
];

const FaqSection1 = () => {
  // const [faq, setFaq] = useState([]);
  const GET_URL = "";
  // const getData = ()=>{
  // 등록 된 faq들 가져오기
  // axios.get(GET_URL).then(res=>{
  // console.log(res);
  // setFaq(res)
  //   })
  // }
  // useEffect(()=>{
  //   getData()
  // })

  return (
    <Container>
      <List>
        {faq.map((item, idx) => (
          <ListItem key={item.id}>
            <Accordion
              title={item.title}
              cate={item.cate}
              answer={item.answer}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li``;

export default FaqSection1;
