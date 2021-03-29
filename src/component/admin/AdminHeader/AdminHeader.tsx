import styled from "styled-components";
import colors from "@styles/colors";
import { memo, useState } from "react";
import DropDown from "@src/component/admin/DropDown/DropDwon";

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 1200px;
  display: flex;
  align-items: center;
  height: 88px;
  margin: 0 auto;
  font-size: 16px;
  justify-content: space-between;
`;

const DivWrapper = styled.div`
  width: 100%;
  max-width: 210px;
  font-family: "FreightSansBlackSC";
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  & > img {
    width: 100%;
    max-width: 24px;
    height: 15px;
    margin-right: 15px;
  }
`;

const ListWrapper = styled.ul`
  width: 100%;
  max-width: 174px;
  box-sizing: border-box;
  max-width: 1200px;
  align-items: center;
  margin: 0 auto;
  font-size: 16px;
  text-align: right;
  position: relative;
  font-family: "NotoSansCJKkr-Regular";
  z-index: 10;
`;

const List = styled.li<{ backgroundColor?: boolean }>`
  width: 174px;
  max-width: 174px;
  justify-content: center;
  display: flex;
  border: 1px solid ${colors.black5};
  border-radius: 6px;
  height: 48px;
  align-items: center;
  text-align: right;
  cursor: pointer;
  background-color: ${(p) => (p.backgroundColor ? `${colors.black5}` : "#fff")};
  & > img {
    margin-left: 26px;
  }
`;

function AdminHeader() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("구매자 관리");
  const [menuText, setMenuText] = useState("제작사 관리");

  const toggle = () => {
    setOpen(() => !open);
  };

  const onChangeProvider = () => {
    setText((prevState) =>
      prevState === "구매자 관리" ? "제작사 관리" : "구매자 관리"
    );
    setMenuText((prevState) =>
      prevState === "구매자 관리" ? "제작사 관리" : "구매자 관리"
    );
    // drop down close
    setOpen(() => !open);
  };

  const logout = () => {
    // logout logic;
  };

  return (
    <div>
      <Wrapper>
        <DivWrapper>
          <img src={"/assets/image/logo.png"} />
          <div>PLAY LICENSE &nbsp; &nbsp; 관리자</div>
        </DivWrapper>
        <DropDown text={text} img toggle={toggle} />
      </Wrapper>
      <ListWrapper>
        <div style={{ position: "absolute", right: "0", top: "-22px" }}>
          {open && (
            <>
              <List onClick={onChangeProvider}>{menuText}</List>
              <List backgroundColor onClick={logout}>
                관리자 로그아웃
              </List>
            </>
          )}
        </div>
      </ListWrapper>
    </div>
  );
}
export default memo(AdminHeader);
