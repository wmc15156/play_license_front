import styles from "../../styles/SelectLogin.module.css";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_METHOD, loginMethod } from "../../reducers/user";

function SelectLogin() {
  const BUYER_IMAGE =
    "https://user-images.githubusercontent.com/60249156/107965674-2646b600-6fee-11eb-8271-dd377eac4999.png";
  const PROVIDER_IMAGE =
    "https://user-images.githubusercontent.com/60249156/107965666-247cf280-6fee-11eb-97f6-609a1cd2eeb3.png";

  const dispatch = useDispatch();

  const onChangeLoginMethod = async (e: React.MouseEvent<HTMLImageElement>) => {
    dispatch(loginMethod(e.currentTarget.id as "buyer" | "provider"));
  }; // 아직 필요는 없을듯

  return (
    <div className={styles.Parent}>
      <div className={styles.BoxContainer}>
        <div>대본, 연극음악, 공연소품까지! 당신이 원하는 공정한 공연창작물</div>
        <div className={styles.Title}>
          <span className={styles.CompanyName}>PLAY LICENSE</span>
          &nbsp;&nbsp;
          <span>시작하기</span>
        </div>

        <div className={styles.ImageBox}>
          <Link href="/login">
            <a>
              <img
                src={BUYER_IMAGE}
                className={styles.BuyerImage}
                onClick={onChangeLoginMethod}
                id="buyer"
              />
            </a>
          </Link>
          <Link href="/login">
            <a>
              <img
                src={PROVIDER_IMAGE}
                onClick={onChangeLoginMethod}
                id="provider"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectLogin;
