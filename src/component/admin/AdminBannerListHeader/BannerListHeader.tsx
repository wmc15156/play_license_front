import styled from "styled-components";
import AdminWrapper from "@src/component/admin/AdminWrapper/AdminWrapper";
import colors from "@styles/colors";
import OriginalButton from "@src/component/Button/OriginalButton";
import useModal from "@utils/useModal";
import AddBannerModal from "@src/component/admin/Modal/AddBanner";

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

const BannerListHeader = ({revalidate, data}) => {

  const { openModal, closeModal, ModalPortal } = useModal();

  return (
    <AdminWrapper height={"128px"}>
      <BannerListTitle>
        <p>
          배너 리스트 <span>{data && data.length}개</span>
        </p>

        <OriginalButton
          width={"100%"}
          maxWidth={"150px"}
          position={false}
          height={"48px"}
          margin={""}
          size={"16px"}
          background={true}
          onClick={openModal}
        >
          배너 추가하기
        </OriginalButton>
      </BannerListTitle>
      <ModalPortal>
        <AddBannerModal closeModal={closeModal} revalidate={revalidate}/>
      </ModalPortal>
    </AdminWrapper>
  );
};
export default BannerListHeader;
