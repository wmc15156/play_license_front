import styled, { css } from "styled-components";

// provider 페이지 전체 컨테이너 (메뉴바(좌) + 컨텐츠(우))
export const PageContainer = css`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  background-color: #ffffff;
  padding-bottom: 60px;
`;

// provider 컨텐츠(우) = 페이지 전체 - 메뉴바(좌)
export const PageContentContainer = css`
  display: flex;
  padding: 37px 58px 0 58px;
  width: 100%;
  height: auto;
`;

// admin tab
export const TabContainer = css`
  height: calc(100vh - 150px);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// admin tab content
export const TabContentWrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
`;
