import { FC } from "react";
import styled, { css } from "styled-components";
import styles from "@styles/colors";
import React from "react";

const TagWrapper = styled.span`
  border-radius: 6px;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 12px;
  line-height: 1;
  letter-spacing: -0.5px;
  text-align: center;
  color: ${styles.black2};
  padding: 7px 10px;
  margin: 26px 4px 18px;
  display: inline-flex;
  align-items: center;
  ${(props) =>
    props.title === "공연"
      ? css`
          border: 3px ${styles.orange} solid;
        `
      : props.title === "교육"
      ? css`
          border: 3px ${styles.yellow} solid;
        `
      : css`
          border: 3px ${styles.blue_2} solid;
        `}
  &:first-child {
    margin-left: 0;
  }
`;

export type titleProps = {
  title: string;
  id: number;
};

type TagProps = {
  children: React.ReactNode;
  title: string;
};

const Tag: FC = ({ children, title }: TagProps) => {
  return <TagWrapper title={title}>{children}</TagWrapper>;
};

export default Tag;
