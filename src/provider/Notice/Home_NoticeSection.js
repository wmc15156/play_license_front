import styled from "styled-components";
import color from "../../../styles/colors";
import NoticeListItem from "../../component/Form/NoticeListItem";

import { useRouter } from "next/router";

const notice = [
  {
    id: 1,
    title: "플레이라이선스 시범운영 안내",
    cate: "이용방법",
    answer: "LoremLoremLoremLorremLoremLoremLorremLoremLorem",
  },
  {
    id: 2,
    title: "플레이라이선스 시범운영 안내",
    cate: "이용방법",
    answer: `LoLoremLoremLoremLoremLor
    LoLoremLoremLorem
    LoLoremLoremLoremLoremLorLoLorem`,
  },
];

const NoticeSection = () => {
  const router = useRouter();
  const changeRouteHandler = () => {
    router.push("/provider/notice");
  };

  return (
    <Container>
      <List>
        {notice.map((item, idx) => (
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
  padding-right: 15px;
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
export default NoticeSection;
