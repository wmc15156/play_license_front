import { css } from "styled-components";

// 페이지 전체 컨테이너 (메뉴바(좌) + 컨텐츠(우))
export const PageContainer = css`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  background-color: #ffffff;
  padding-bottom: 60px;
`;

// 컨텐츠(우) = 페이지 전체 - 메뉴바(좌)
export const PageContentContainer = css`
  display: flex;
  padding: 37px 58px 0 58px;
  width: 100%;
  height: auto;
`;
