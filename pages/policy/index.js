import styled from "styled-components";
import color from "../../styles/colors";

const Policy = () => {
  return (
    <Container>
      <Title>
        PLAY LICENSE <span>개인정보처리방침</span>
      </Title>
      <Contents>
        <SubTitle>1. 개인정보의 수집범위</SubTitle>
        <Text1>
          ① Play License는 회원가입 및 작품 등록과 구매 등의 서비스 제공을 위해
          일반 회원 가입 당시 아래와 같은 개인정보를 수집하고 있습니다.
        </Text1>
        <Text2>
          &lt;일반 회원 가입 시 수집하는 개인정보의 범위&gt; 필수항목 : 이름,
          비밀번호, 전화번호, e-mail
        </Text2>
        <SubTitle>2. 개인정보의 수집목적 및 이용목적</SubTitle>
        <Text1>
          ① Play License는 회원님께 최대한으로 최적화되고 맞춤화된 서비스를
          제공하기 위하여 다음과 같은 목적으로 개인정보를 수집하고 있습니다.
        </Text1>
        <Text2>
          e-mail, 전화번호, 비밀번호 : 회원제 서비스 이용에 따른 본인 식별
          절차에 이용
        </Text2>
        <Text2>
          e-mail, 전화번호 : 공지사항 전달, 구매 문의 및 수락 여부 등에 대한
          본인 의사 확인, 불만 처리 등 원활한 의사소통 경로의 확보, 새로운
          서비스 안내 등에 이용
        </Text2>
        <Text1>
          ② Play License는 회원의 개인정보를 개인정보의 수집목적 및 이용목적에서
          고지한 범위 내에서만 사용하며 이용자의 사전 동의 없이는 동 범위를
          초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지
          않습니다. 단, 이용자들이 사전에 공개에 동의한 경우 법령의 규정에
          의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의
          요구가 있는 경우는 예외입니다.
        </Text1>
        <SubTitle>3. 개인정보의 보유기간 및 이용기간</SubTitle>
        <Text1>
          ① 귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은
          목적이 달성되면 파기됩니다. 단, 상법 등 관련법령의 규정에 의하여
          다음과 같이 거래 관련 권리 의무 관계의 확인 등을 이유로 일정기간
          보유하여야 할 필요가 있을 경우에는 일정기간 보유합니다.
        </Text1>
        <Text2>라이선스 부정 이용 및 등록 기록 : 3년</Text2>
        <Text2>계약 및 철회 등에 관한 기록 : 3년</Text2>
        <Text2>대금결제 및 재화등의 공급에 관한 기록 : 3년</Text2>
        <Text2>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</Text2>
        <Text2>3년 간 미접속 및 회원 탈퇴 시 회원 정보 삭제</Text2>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 410px);
  margin: 0 auto;
  max-width: 924px;
  padding: 0 1rem;
`;

const Title = styled.div`
  font-family: "FreightSansBlackSC";
  letter-spacing: 0.86px;
  color: ${color.black4};
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 44px;
  & > span {
    font-family: "NotoSansCJKkr-Bold";
    color: ${color.black2};
    letter-spacing: 0.86px;
    font-size: 22px;
    line-height: 24px;
  }
`;

const Contents = styled.div`
  margin-bottom: 80px;
`;

const SubTitle = styled.p`
  margin: 0;
  margin-top: 28px;
  font-family: "NotoSansCJKkr-Bold";
  &:nth-child(1) {
    margin: 0;
  }
`;
const Text1 = styled.p`
  margin: 0;
  margin: 10px 0;
  font-family: "NotoSansCJKkr-Regular";
`;
const Text2 = styled.p`
  margin: 0;
  margin: 10px 0;
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black3};
  margin-left: 14px;
`;

export default Policy;
