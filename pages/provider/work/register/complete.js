import styled, { css } from "styled-components";
import color from "../../../../styles/colors";
import {
  PageContainer,
  PageContentContainer,
} from "../../../../styles/PL_Frame";
import axios from "axios";
import { useRouter } from "next/router";
import { FaLongArrowAltRight } from "react-icons/fa";
import Navi from "../../../../src/component/Nav/Navigation";
import LogoBar from "../../../../src/component/Nav/LogoBar";
import Btn from "../../../../src/component/Button/OriginalButton";

const PL_EndOfRegistration = () => {
  const router = useRouter();
  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />
        <HeadSection>
          <T1>{}님의</T1>
          <T2>
            <span>작품 판매 등록</span> 문의가 완료되었습니다!
          </T2>
        </HeadSection>
        <Divider>
          <Div1 />
        </Divider>
        <Box>
          <Box1>관리자검토중</Box1>
          <FaLongArrowAltRight color={color.orange} size={30} />
          <Box2>보완요청</Box2>
          <FaLongArrowAltRight color={color.black4} size={30} />
          <Box3>승인완료</Box3>
        </Box>
        <TextSection>
          <Text>위의 세단계를 거쳐 작품판매등록이 완료되며</Text>
          <Text>
            현재 진행상태는 <span>관리자 검토중</span> 입니다!
          </Text>
          <Text2>
            진행상태가 변동될때마다 가입하신 이메일로 안내사항을 보내드리오니
            확인부탁드립니다.
          </Text2>
        </TextSection>
        <BtnSection>
          <Btn
            width={"12.5%"}
            background={true}
            margin={"0px"}
            height={"36px"}
            size={"12px"}
            onClick={() => router.push("/provider/work")}
          >
            확인
          </Btn>
        </BtnSection>
      </BodyContainer>
    </Container>
  );
};
const Container = styled.div`
  ${PageContainer};
`;

const NavContainer = styled.div`
  width: 220px;
`;

const BodyContainer = styled.div`
  ${PageContentContainer};
  flex-direction: column;
`;
const HeadSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

const T1 = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 20px;
  color: ${color.black3};
`;
const T2 = styled.div`
  font-size: 24px;
  line-height: 26px;
  color: ${color.black1};
  & > span {
    color: ${color.orange};
  }
`;

const Divider = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 60px;
`;

const Div1 = styled.div`
  background-color: ${color.yellow};
  height: 3px;
  width: 100%;
`;

const Box = styled.div`
  width: 100%;
  background-color: ${color.gray1};
  border-radius: 14px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

const BoxStyles = css`
  font-size: 12px;
  font-family: "NotoSansCJKkr-Bold";
  padding: 6px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin: 0 5%;
`;

const Box1 = styled.div`
  background-color: transparent;
  color: ${color.orange};
  border: 1px solid ${color.orange};
  ${BoxStyles}
`;

const Box2 = styled.div`
  background-color: ${color.yellow};
  color: ${color.white};
  ${BoxStyles}
`;

const Box3 = styled.div`
  background-color: ${color.blue};
  color: ${color.white};
  ${BoxStyles}
`;

const TextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-family: "NotoSansCJKkr-Medium";
  font-size: 12px;
  line-height: 18px;
  margin: 0;
  & > span {
    color: ${color.orange};
  }
`;
const Text2 = styled.p`
  color: ${color.black3};
  font-family: "NotoSansCJKkr-Medium";
  font-size: 12px;
  margin: 0;
  margin-top: 30px;
`;

const BtnSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 60px;
`;

export default PL_EndOfRegistration;
