import styled from "styled-components";
import AdminWrapper from "@src/component/admin/AdminWrapper/AdminWrapper";
import colors from "@styles/colors";
import { FC, VFC } from "react";
import { curationTitle } from "../../../../pages/admin";

const UlWrapper = styled.ul`
  width: 100%;
  max-width: 1200px;
  background-color: ${colors.gray1};
  box-sizing: border-box;
  border-radius: 14px;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 14px;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 21px 0 21px;

  & li {
    width: 100%;
    //max-width: 60px;
  }
`;

const ListWrapper = styled.li<{ justifyCenter: boolean }>`
  display: flex;
  justify-content: ${(p) => (p.justifyCenter ? "center" : null)};
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-right: 20px;
  }
`;

type Props = {
  titles: Array<string>; // 제목
  currentMenu: string;
  subContainer: boolean;
};

const DivWrapper = styled.div<{ maxWidth: string }>`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${(p) => p.maxWidth};
`;

const maxWidth = ["103px", "193px", "267px", "192px", "154px", "223px", "26px"];

const AdminHomeBannerTitle: VFC<Props> = ({
  titles,
  currentMenu,
  subContainer,
}) => {
  const data = currentMenu === "홈 배너 관리" ? titles : curationTitle;
  return (
    <>
      {subContainer ? (
        <AdminWrapper height={"56px"}>
          <UlWrapper>
            {data.map((title, i) => (
              <DivWrapper key={i} maxWidth={maxWidth[i]}>
                <ListWrapper justifyCenter={i !== 0}>{title}</ListWrapper>
              </DivWrapper>
            ))}
          </UlWrapper>
        </AdminWrapper>
      ) : null}
    </>
  );
};
export default AdminHomeBannerTitle;
