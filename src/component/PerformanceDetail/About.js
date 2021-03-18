import styled, { css } from "styled-components";
import color from "../../../styles/colors";

const About = ({ item }) => {
  const onClickInfoLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      <Box1>
        <List>
          <Item>
            <SubTitle>
              <Icon />
              기획의도
            </SubTitle>
            <Desc>{item.description}</Desc>
          </Item>
          <Divider />
          <Item>
            <SubTitle>
              <Icon />
              시놉시스
            </SubTitle>
            <Desc>{item.synopsis}</Desc>
          </Item>
          <Divider />
          <Item>
            <SubTitle>
              <Icon />
              상세정보
            </SubTitle>
            <Detail>
              <Text>
                <Text_L>창작진</Text_L>
                <Text_R>
                  <Text_R_Ptag>작가 {item.creativeStaff.author}</Text_R_Ptag>
                  <Text_R_Ptag>작곡 {item.creativeStaff.composer}</Text_R_Ptag>
                  <Text_R_Ptag>각본 {item.creativeStaff.writer}</Text_R_Ptag>
                </Text_R>
              </Text>
              <Text>
                <Text_L>공연분야</Text_L>
                <Text_R>{item.category}</Text_R>
              </Text>
              <Text>
                <Text_L>장르</Text_L>
                <Text_R>{item.genre}</Text_R>
              </Text>
              <Text>
                <Text_L>주 관람층</Text_L>
                <Text_R>{item.mainAudience}</Text_R>
              </Text>
              <Text>
                <Text_L>공연규모</Text_L>
                <Text_R>{item.sizeOfPerformance}</Text_R>
              </Text>
              <Text>
                <Text_L>출연인원</Text_L>
                <Text_R>
                  <Text_R_Ptag>여자 {item.castMembers.women}</Text_R_Ptag>
                  <Text_R_Ptag>남자 {item.castMembers.men}</Text_R_Ptag>
                  <Text_R_Ptag>아기는 인형으로 대체</Text_R_Ptag>
                </Text_R>
              </Text>
              <Text>
                <Text_L>셋리스트</Text_L>
                <Text_R>{item.product_link}</Text_R>
              </Text>
              <Text noBorder={true}>
                <Text_L>관련정보</Text_L>
                <Text_R
                  deco={true}
                  onClick={() =>
                    onClickInfoLink(item.performanceInformationURL)
                  }
                >
                  {item.performanceInformationURL}
                </Text_R>
              </Text>
            </Detail>
          </Item>
        </List>
      </Box1>
    </Container>
  );
};

const Container = styled.div`
  color: ${color.black1};
  display: flex;
  flex-direction: column;
`;

const Box1 = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  margin-bottom: 39px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  display: flex;
  width: 100%;
`;
const Icon = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${color.orange};
  margin-right: 18px;
`;
const SubTitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  display: flex;
  font-size: 20px;
  width: 25%;
  height: 100%;
  align-items: center;
  padding: 4% 0 4% 4%;
`;

const Divider = styled.div`
  height: 2px;
  background-color: ${color.black5};
`;
const Desc = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  font-size: 16px;
  width: 100%;
  padding: 4% 4% 4% 0;
`;
const Text = styled.div`
  padding: 5% 0;
  width: 100%;
  display: flex;
  border-bottom: ${(props) =>
    props.noBorder ? "none" : `2px solid ${color.black5}`};
`;
const Text_L = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  width: 25%;
`;
const Text_R = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  font-size: 16px;
  width: 50%;
  padding-left: 4%;
  ${(props) =>
    props.deco &&
    css`
      font-family: "NotoSansCJKkr-Bold";
      text-decoration: underline;
      color: ${color.orange};
      cursor: pointer;
    `}
`;

const Text_R_Ptag = styled.p`
  margin: 0;
  padding: 0;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 4%;
`;
export default About;
