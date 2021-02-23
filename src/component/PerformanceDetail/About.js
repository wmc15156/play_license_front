import styled from "styled-components";
import color from "../../../styles/colors.ts";

const About = ({ item }) => {
  console.log(item, ">?>?>?><?><");
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
            <Desc>{item.product_link}</Desc>
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
                <Text_R>{item.product_link}</Text_R>
              </Text>
              <Text>
                <Text_L>창작진</Text_L>
                <Text_R>{item.product_link}</Text_R>
              </Text>
              <Text>
                <Text_L>창작진</Text_L>
                <Text_R>
                  {item.product_link}
                  {item.product_link}
                </Text_R>
              </Text>
              <Text>
                <Text_L>창작진</Text_L>
                <Text_R>{item.product_link}</Text_R>
              </Text>
              <Text>
                <Text_L>창작진</Text_L>
                <Text_R>{item.product_link}</Text_R>
              </Text>
            </Detail>
          </Item>
        </List>
      </Box1>
    </Container>
  );
};

const Container = styled.div`
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
  background-color: #ff6f69;
`;
const SubTitle = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  align-items: center;
  padding: 4% 0 4% 4%;
`;

const Divider = styled.div`
  height: 2px;
  background-color: #e6e6e6;
`;
const Desc = styled.div`
  width: 100%;
  padding: 4% 4% 4% 0;
`;
const Text = styled.div`
  padding: 4% 0;
  width: 100%;
  display: flex;
  border-bottom: 2px solid #e6e6e6;
`;
const Text_L = styled.div`
  width: 30%;
`;
const Text_R = styled.div`
  width: 50%;
  padding-left: 4%;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 4%;
`;
export default About;
