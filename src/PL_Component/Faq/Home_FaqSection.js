import styled from "styled-components";
import color from "../../../styles/colors";
import NoticeListItem from "../../component/Form/NoticeListItem";

import { useRouter } from "next/router";
const faq = [
  {
    id: 1,
    title: "작품 등록은 어떻게 하나요?",
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
];

const FaqSection = () => {
  const router = useRouter();
  const changeRouteHandler = () => {
    router.push("/provider/faq");
  };

  return (
    <Container>
      <List>
        {faq.map((item, idx) => (
          <ListItem key={item.id}>
            <NoticeListItem
              title={item.title}
              cate={item.cate}
              clickHandler={changeRouteHandler}
            />
          </ListItem>
        ))}
      </List>
      <Box></Box>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 15px);
  padding-left: 15px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  min-height: 168px;
`;
const ListItem = styled.li``;

const Box = styled.div`
  width: 100%;
  height: 208px;
  border-radius: 14px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export default FaqSection;
