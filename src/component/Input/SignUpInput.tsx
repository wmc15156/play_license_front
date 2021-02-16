import styles from "../../../styles/SignUpInput.module.css";
import InputNumber from "react-input-just-numbers";
import AuthTimer from "../Timer/AuthTimer";
import { Dispatch, SetStateAction, useState } from "react";

type InputProps = {
  placeHolder: string;
  text: "인증" | "확인";
  value: string;
  onChangeHandler: (e) => void;
  onClickHandler: () => void;
  countDown?: boolean;
  initialTime?: number;
  setInitialTime?: Dispatch<SetStateAction<number>>;
  time?: boolean;
};

function SignUpInput({
  placeHolder,
  text,
  value,
  onChangeHandler,
  onClickHandler,
  countDown,
  initialTime,
  setInitialTime,
  time = null,
}: InputProps) {
  return (
    <div style={{ display: "flex", width: "620px" }}>
      <InputNumber
        className={styles.Input}
        placeholder={placeHolder}
        value={value}
        onChange={onChangeHandler}
      />
      {time && countDown && (
        <AuthTimer initialTime={initialTime} setInitialTime={setInitialTime} />
      )}
      <span className={styles.CheckButton} onClick={onClickHandler}>
        {text}
      </span>
    </div>
  );
}
export default SignUpInput;
