import { VFC } from "react";
import styled from "styled-components";
import Line from "@src/component/Line/Line";
import colors from "@styles/colors";

type Props = {
  title: string;
  removeSelectedProduct: (id) => any;
  id: number;
};

const UlWrapper = styled.ul`
  width: 100%;
  max-width: 630px;
  margin: 0;
  & > li {
    max-width: 630px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > img {
      cursor: pointer;
    }
  }
`;

const RegisterProductList: VFC<Props> = ({
  title,
  removeSelectedProduct,
  id,
}) => {
  return (
    <>
      <UlWrapper>
        <Line
          background={false}
          width={"630px"}
          height={"2px"}
          wrapperHeight={"0"}
        />
        <li>
          <span>{title}</span>
          <img
            src={"/assets/image/X_small.png"}
            onClick={removeSelectedProduct(id)}
          />
        </li>
      </UlWrapper>
    </>
  );
};

export default RegisterProductList;
