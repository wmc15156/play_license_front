import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import useModal from "../../../utils/useModal";

const PL_CheckQnA = () => {
  const router = useRouter();
  const { openModal, ModalPortal, closeModal } = useModal();

  return <Container>확인</Container>;
};

const Container = styled.div``;

export default PL_CheckQnA;
