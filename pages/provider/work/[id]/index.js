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
// import { data } from "../../../../src/PL_Component/Work/dummies_productInfo";

export async function getServerSideProps(context) {
  const id = context.params.id;
  const url = `/product/info/${id}`;
  const res = await axios.get(url);
  const respData = res.data;
  return {
    props: { data: respData },
  };
}

function pl_workDetail({ data }) {
  console.log(data);
  const router = useRouter();
  const queryId = data.productId;
  const [userInfo, setUserInfo] = useState({
    company: data.company,
    description: data.description,
    name: data.name,
    phone: data.phone,
  });

  const [perfInfo, setPerfInfo] = useState({
    title: data.title,
    brokerageConsignment: data.brokerageConsignments.map((el) => el),
    // brokerageConsignment: data.brokerageConsignment.map((el) => el),
    year: data.year,
    requiredMaterials: {
      select: data.requiredMaterials.select.map((el) => el),
    },
    selectMaterials: {
      select: data.selectMaterials.select.map((el) => el),
      input: data.selectMaterials.input,
    },
    comment: data.comment,
    category: data.category,
    creativeStaff: {
      author: data.creativeStaff.author,
      composer: data.creativeStaff.composer,
      writer: data.creativeStaff.writer,
    },
    genre: data.genre.map((el) => el),
    mainAudience: data.mainAudience.map((el) => el),
    sizeOfPerformance: data.sizeOfPerformance,
    runningTime: {
      hour: data.totalTime.hour,
      min: data.totalTime.min,
      intermission: data.totalTime.intermission,
    },
    castMembers: {
      women: data.castMembers.women,
      men: data.castMembers.men,
      children: data.castMembers.children,
    },
    changeScenario: data.changeScenario,
    performanceVideo: data.performanceVideo,
    planningDocument: data.plan,
    synopsis: data.synopsis,
    performanceInformationURL: data.performanceInformationURL,
    numberList: data.numberList.map((el) => el),
    posterURL: data.posterURL,
  });

  const [inputData, setInputData] = useState({
    ...userInfo,
    ...perfInfo,
    castMembers_total:
      Number(perfInfo.castMembers.women.input) +
      Number(perfInfo.castMembers.men.input) +
      Number(perfInfo.castMembers.children.input),
    isCheckInformation: true,
  });

  const preventChanges = () => {
    console.log("변경 안됨 모달창");
  };

  const next = () => {
    router.push("/provider/work");
  };

  const back = () => {
    router.push("/provider/work");
  };

  const modifyHandler = () => {
    let PATCH_URL = "";
    const params = inputData;
    console.log(params, "수정할 데이터");
    if (router.query.id) {
      PATCH_URL = `/product/${router.query.id}`;
    } else {
      PATCH_URL = queryId;
    }
    axios
      .patch(PATCH_URL, params)
      .then((res) => {
        console.log(res, "수정성공");
        next();
      })
      .catch((err) => console.log(err.response, "수정에러"));
  };

  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />
        <>
          <HeadSection>
            <T2>
              <span>{perfInfo.title}</span>작품정보관리 및 확인
            </T2>
            <BtnWrapper>
              <StatusBox status={data.progress}>{data.progress}</StatusBox>
            </BtnWrapper>
          </HeadSection>
          <Divider>
            <Div1 />
          </Divider>
          <Section>
            {data && data.progress === "보완요청" ? (
              <CheckModifyPage
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                perfInfo={perfInfo}
                setPerfInfo={setPerfInfo}
                preventChanges={preventChanges}
                back={back}
                modifyHandler={modifyHandler}
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
        </>
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
