import { FC } from "react";
import styled, { css } from "styled-components";
import styles from "@styles/colors";
import React from "react";

const TagWrapper = styled.span`
  border: 2px ${styles.orange} solid;
  border-radius: 6px;
  width: 22px;
  height: 12px;
  opacity: 0.6;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.5px;
  text-align: center;
  color: ${styles.black2};
  padding: 7px 10px 9px 10px;
  margin: 0 4px 18px;
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
  &:first-child{
    margin-left:0;
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
