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

const BannerListHeader = ({
  revalidate,
  data,
  currentMenu,
  curationList,
  isValid,
  setCurrentMenu,
  subContainer,
  setSubContainer,
}) => {
  const { openModal, closeModal, ModalPortal } = useModal();

  return (
    <div>
      {subContainer ? (
        <AdminWrapper height={"128px"}>
          <BannerListTitle>
            <p>
              {currentMenu === "홈 배너 관리"
                ? "배너 리스트"
                : currentMenu === "큐레이션 관리"
                ? "등록된 큐레이션"
                : null}{" "}
              <span>
                {currentMenu === "홈 배너 관리"
                  ? data && data.length
                  : currentMenu === "큐레이션 관리"
                  ? curationList && curationList?.length
                  : null}
                개
              </span>
            </p>

            <OriginalButton
              width={"100%"}
              maxWidth={"150px"}
              position={false}
              height={"48px"}
              margin={""}
              size={"16px"}
              background={true}
              onClick={
                currentMenu === "큐레이션 관리"
                  ? () => {
                      setSubContainer(false);
                    }
                  : openModal
              }
            >
              {currentMenu === "홈 배너 관리"
                ? "배너 추가하기"
                : currentMenu === "큐레이션 관리"
                ? "큐레이션 추가하기"
                : null}
            </OriginalButton>
          </BannerListTitle>
          <ModalPortal>
            {currentMenu === "홈 배너 관리" ? (
              <AddBannerModal closeModal={closeModal} revalidate={revalidate} />
            ) : null}
          </ModalPortal>
        </AdminWrapper>
      ) : null}
    </div>
  );
};
export default BannerListHeader;
