import styled from "styled-components";
import AdminWrapper from "@src/component/admin/AdminWrapper/AdminWrapper";
import colors from "@styles/colors";
import OriginalButton from "@src/component/Button/OriginalButton";

const BannerListTitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    color: ${colors.black2};
  }
  & > p > span {
    display: inline-block;
    color: ${colors.orange};
    margin-left: 20px;
  }
`;

const BannerListHeader = () => {
  const addBanner = () => {
    // banner 추가하기
  };

  return (
    <AdminWrapper height={"128px"}>
      <BannerListTitle>
        <p>
          배너 리스트 <span>6개</span>
        </p>

        <OriginalButton
          width={"100%"}
          maxWidth={"150px"}
          position={false}
          height={"48px"}
          margin={""}
          size={"16px"}
          background={true}
          onClick={addBanner}
        >
          배너 추가하기
        </OriginalButton>
      </BannerListTitle>
    </AdminWrapper>
  );
};
export default BannerListHeader;
