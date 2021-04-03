import styles from "../../../styles/SignUpButton.module.css";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  onClickHandler?: (e) => void;
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 580px;
  margin-top: 22px;
`;

function SignUpButton({ text, onClickHandler = null }: ButtonProps) {
  return (
    <Wrapper>
      <button className={styles.Button} onClick={onClickHandler}>
        {text}
      </button>
    </Wrapper>
  );
}

export default SignUpButton;
