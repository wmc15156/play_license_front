import styled from "styled-components";
import color from "../../../styles/colors";
import ProviderInfo from "./Form_ProviderInfo";
import PerformanceInfo_Check from "./Form_CheckPerformanceInfo(1+2)";
import Btn_Left from "../../component/Button/GrayShortBtn";

const CheckPage = ({ userInfo, perfInfo, preventChanges, back }) => {
  return (
    <Container>
      <BodySection>
        <ProviderInfo
          userInfo={userInfo}
          setUserInfo={preventChanges}
          readOnly={true}
        />
        <PerformanceInfo_Check
          perfInfo={perfInfo}
          setPerfInfo={preventChanges}
          readOnly={true}
        />
      </BodySection>
      <BtnContainer>
        <BtnWrapper>
          <Btn_Left
            text={"이전"}
            size={"12px"}
            height={"36px"}
            fontColor={color.black2}
            onClickHandler={back}
          />
        </BtnWrapper>
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div``;
const BodySection = styled.div``;
const BtnContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: flex-end;
`;
const BtnWrapper = styled.div`
  width: 12.5%;
`;

export default CheckPage;
