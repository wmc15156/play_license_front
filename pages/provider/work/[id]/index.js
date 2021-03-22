import styled, { css } from "styled-components";
import color from "../../../../styles/colors";
import {
  PageContainer,
  PageContentContainer,
} from "../../../../styles/PL_Frame";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Navi from "../../../../src/component/Nav/Navigation";
import LogoBar from "../../../../src/component/Nav/LogoBar";
import ProviderInfo from "../../../../src/PL_Component/Work/Form_ProviderInfo";
import useModal from "../../../../utils/useModal";
import axios from "axios";
import useSWR from "swr";
import fetcher from "../../../../utils/fetcher";
import CheckModifyPage from "../../../../src/PL_Component/Work/CheckModifyPage";
import CheckPage from "../../../../src/PL_Component/Work/CheckPage";
import StatusBox from "../../../../src/component/Tag/Purchase_AnswerStatus";
import { data } from "../../../../src/PL_Component/Work/dummies_productInfo";

function pl_workDetail() {
  const router = useRouter();
  // const { data } = useSWR(`${router.query.id}`, fetcher);
  const [userInfo, setUserInfo] = useState({
    // TODO: 계정정보 페이지 내용과 동일, 연동해서 미리 입력
    groupName: data.groupName,
    introduction: data.introduction,
    name: data.name,
    phone: data.phone,
  });
  // /performances/:id (buyer작품상세)페이지에 뿌려지는 key이름 사용
  const [perfInfo, setPerfInfo] = useState({
    title: data.title,
    purpose: data.purpose.map((item) => item),
    year: data.year,
    // requiredMaterials: [],
    requiredMaterials: {
      select: data.requiredMaterials.select.map((el) => el),
    },
    selectedMaterials: {
      select: data.selectedMaterials.select.map((el) => el),
      input: data.selectedMaterials.input,
    },
    comment: data.comment,
    category: {
      select: data.category.select.map((el) => el),
      input: data.category.input,
    }, //공연분야
    creativeStaff: {
      author: data.creativeStaff.author,
      composer: data.creativeStaff.composer,
      writer: data.creativeStaff.writer,
    },
    genre: data.genre.map((el) => el),
    mainAudience: data.mainAudience.map((el) => el),
    sizeOfPerformance: data.sizeOfPerformance,
    runningTime: {
      hour: data.runningTime.hour,
      min: data.runningTime.min,
      intermission: data.runningTime.intermission,
    },
    castMembers: {
      women: data.castMembers.women,
      men: data.castMembers.men,
      child: data.castMembers.child,
    },
    isChangedScenario: data.isChangedScenario, //각색허용여부
    youtubeUrl: data.youtubeUrl,
    description: data.description,
    synopsis: data.synopsis,
    performanceInformationURL: data.performanceInformationURL,
    numberList: data.numberList,
    posterImage: data.posterImage,
    background: { pc: data.background.pc, mobile: data.background.mobile },
  });
  const preventChanges = () => {
    console.log("변경 안됨 모달창");
  };

  const next = () => {
    console.log("편집하기 ");
    router.push("/provider/work");
  };

  const back = () => {
    router.push("/provider/work");
  };

  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />
        <HeadSection>
          <T2>
            <span>{data.title}</span>작품정보관리 및 확인
          </T2>
          <BtnWrapper>
            <StatusBox status={data.adminCheck}>{data.adminCheck}</StatusBox>
          </BtnWrapper>
        </HeadSection>
        <Divider>
          <Div1 />
        </Divider>
        <Section>
          {data && data.adminCheck === "보완요청" ? (
            <CheckModifyPage
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              perfInfo={perfInfo}
              setPerfInfo={setPerfInfo}
              preventChanges={preventChanges}
              back={back}
              next={next}
            />
          ) : (
            <CheckPage
              userInfo={userInfo}
              perfInfo={perfInfo}
              preventChanges={preventChanges}
              back={back}
            />
          )}
        </Section>
      </BodyContainer>
    </Container>
  );
}

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
  justify-content: space-between;
  align-items: center;
`;

const T2 = styled.p`
  display: flex;
  align-items: center;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  color: ${color.black2};
  margin: 0;
  & > span {
    margin-right: 30px;
    font-size: 24px;
    color: ${color.orange};
  }
`;

const BtnWrapper = styled.div`
  /* width:  */
`;

const Divider = styled.div`
  display: flex;
  width: 100%;
  margin-top: 28px;
  margin-bottom: 30px;
`;

const Div1 = styled.div`
  background-color: ${color.yellow};
  height: 3px;
  width: 100%;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export default pl_workDetail;
