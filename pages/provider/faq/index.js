import styled from "styled-components";
import color from "../../../styles/colors";
import Accordion from "../../../src/component/Form/AccordionMenu";
import { useEffect, useState } from "react";
import axios from "axios";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";
import Navi from "../../../src/component/Nav/Navigation";
import LogoBar from "../../../src/component/Nav/LogoBar";

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

function pl_faq() {
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
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />
        <Title>자주 묻는 질문</Title>
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

export default pl_faq;
