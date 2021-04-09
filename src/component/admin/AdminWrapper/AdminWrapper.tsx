import styled from "styled-components";
import { FC } from "react";

const Wrapper = styled.div<{ height: string }>`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(p) => (p.height ? p.height : null)};
  margin: 0 auto;
`;

type Props = {
  height?: string;
};

// 어드민 전용 Wrapper
const AdminWrapper: FC<Props> = ({ children, height }) => {
  return <Wrapper height={height}>{children}</Wrapper>;
};
export default AdminWrapper;
