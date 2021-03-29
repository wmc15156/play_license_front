import styled from "styled-components";
import AdminWrapper from "@src/component/admin/AdminWrapper/AdminWrapper";
import colors from "@styles/colors";
import { FC, VFC } from "react";

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
    width: 120%;
    max-width: 60px;
  }
`;

const ListWrapper = styled.li<{ margin: string }>`
  margin-right: ${(p) => (p.margin ? p.margin : null)};
  max-width: 60px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-right: 20px;
  }
`;

type Props = {
  titles: Array<string>; // 제목
  marginRight: Array<string>; // 각각 list간 margin right
};

const AdminHomeBannerTitle: VFC<Props> = ({ titles, marginRight, }) => {
  return (
    <AdminWrapper height={"56px"}>
      <UlWrapper>
        {titles.map((title, i) => (
          <div key={i}>
            <ListWrapper margin={marginRight[i]}>{title}</ListWrapper>
          </div>
        ))}
      </UlWrapper>
    </AdminWrapper>
  );
};
export default AdminHomeBannerTitle;
