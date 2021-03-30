import styled, { css } from "styled-components";
import color from "../../../../../../styles/colors";

const Tab_Header = ({ changeTab, tabName }) => {
  return (
    <Container>
      <List>
        <Item
          onClick={() => changeTab("info")}
          color={tabName === "info" ? color.blue : null}
        >
          작품정보
        </Item>

        <Item
          onClick={() => changeTab("required")}
          color={tabName === "required" ? color.blue : null}
        >
          필수 제공 자료
        </Item>

        <Item
          onClick={() => changeTab("selected")}
          color={tabName === "selected" ? color.blue : null}
        >
          선택 제공 자료
        </Item>
      </List>
      <Div />
    </Container>
  );
};
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 41px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-right: 40px;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 18px;
  padding: 0 1vw 20px 1vw;
  color: ${color.black1};
  max-width: 110px;
  cursor: pointer;

  &:hover {
    color: ${color.blue};
  }

  ${(props) =>
    props.color &&
    css`
      padding-bottom: 20px;
      ${"" /* border-bottom: 3px solid ${props.color}; */}
      color: ${props.color};
    `};

  &:first-child {
    padding: 0 0 20px 0;
  }
`;

const Div = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export default Tab_Header;
