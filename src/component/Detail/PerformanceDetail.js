import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoginCheckRequest, loadMyInfoThunk } from "../../../reducers/user";

import axios from "axios";
import HighlightVideo from "../Detail/HighlightVideo";
import About from "./About";
import Section1 from "./Section1";

// 들어오자마자 로그인 여부, 찜여부 확인

const PerformanceDetail = ({ item }) => {
  const router = useRouter();
  const { loading, data, error } = useSelector((state) => state.users?.me);
  const isLogin = useSelector((state) => state.users.isLogin);
  const dispatch = useDispatch();
  console.log("p:id", data, "data", isLogin, "error>>", error);

  const url = "/product/cart";
  const [savedStatus, setSavedStatus] = useState(false);

  useEffect(() => {
    isLoginCheckRequest(dispatch);
  }, [isLogin]);

  useEffect(() => {
    // 찜여부 get
    axios.get(url).then((res) => {
      // console.log(res, "res??");
      const data = res.data.filter(
        (item) => item.productId === Number(router.query.id)
      );
      if (data.length > 0) {
        setSavedStatus(true);
        console.log(savedStatus);
      } else {
        setSavedStatus(false);
        console.log(savedStatus);
      }
      // if (res.data.productId === Number(router.query.id)) {
      //   setSavedStatus(true);
      // }
    });
  }, [savedStatus]);
  return (
    <Container>
      <div>아이템{item.id}</div>
      <Section1 item={item} savedStatus={savedStatus} />

      {/* 비디오 */}
      <Section2>
        <HighlightVideo />
      </Section2>
      <Section3>
        <About item={item} />
      </Section3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Section2 = styled.div`
  margin-top: 120px;
  margin-bottom: 35px;
  width: 100%;
  max-height: 600px;
`;

const Section3 = styled.div`
  width: 100%;
  height: 100%;
`;

export default PerformanceDetail;
