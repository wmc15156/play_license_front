import { Dispatch, FC, SetStateAction, VFC } from "react";
import styled from "styled-components";
import colors from "@styles/colors";
const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  background-color: ${colors.gray1};
  height: 62px;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const UlWrapper = styled.ul`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "NotoSansCJKkr-Bold";
  position: relative;
  box-sizing: border-box;
  padding-left: 0;

  & > li:hover {
    cursor: pointer;
  }
`;

const LiWrapper = styled.li<{ select?: boolean }>`
  border-bottom: ${(p) => (p.select ? `2px solid ${colors.orange}` : null)};
  height: 60px;
  display: flex;
  align-items: center;
  color: ${(p) => (p.select ? `${colors.orange}` : null)};
`;

type Props = {
  menus: Array<string>;
  currentMenu: string;
  setCurrentMenu: Dispatch<SetStateAction<string>>;
};

// change the text of the current menu when click

const AdminMenu: VFC<Props> = ({ menus, currentMenu, setCurrentMenu }) => {
  const onChangeCurrentMenuText = (text: string) => () => {
    setCurrentMenu(text);
  };
  return (
    <Wrapper>
      <UlWrapper>
        {menus.map((menu,i) => (
          <LiWrapper
            select={currentMenu === menu}
            onClick={onChangeCurrentMenuText(menu)}
            key={i}
          >
            {menu}
          </LiWrapper>
        ))}
      </UlWrapper>
    </Wrapper>
  );
};

export default AdminMenu;
