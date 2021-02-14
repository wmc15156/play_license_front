import styles from "../../../styles/SignUpButton.module.css";

type ButtonProps = {
  text: string;
  onClickHandler?: (e) => void;
};

function SignUpButton({ text, onClickHandler = null }: ButtonProps) {
  return (
    <div>
      <button className={styles.Button} onClick={onClickHandler}>
        {text}
      </button>
    </div>
  );
}

export default SignUpButton;
