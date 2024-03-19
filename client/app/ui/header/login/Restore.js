"use client";
import { useState } from "react";
import RestoreTwo from "./RestoreTwo";
import styles from "./login.module.scss";

export default function Restore({ setRestore }) {
  const [modelRestoreTwo, setModelRestoreTwo] = useState(false);

  return (
    <>
      <div
        className={styles.backgroundRestore}
        onClick={() => setRestore(false)}
      ></div>
      <div className={styles.restoreBlock}>
        <div
          className={styles.restoreClose}
          onClick={() => setRestore(false)}
        ></div>
        <h1 className={styles.restoreTitle}>Восстановить пароль</h1>
        <form className={styles.restoreForm}>
          <input
            type="text"
            className={styles.restoreInput}
            id="emailornumber"
            name="emailornumber"
            placeholder="Почта или номер телефона"
          />
          <div className={styles.sendGetWrapper}>
            <button className={styles.send}>Отправить</button>
            <input className={styles.get} placeholder="Полученный код"></input>
          </div>
          <div
            className={styles.continue}
            onClick={() => setModelRestoreTwo(!modelRestoreTwo)}
          >
            Далее
          </div>
        </form>
      </div>
      {modelRestoreTwo && <RestoreTwo setRestoreTwo={setModelRestoreTwo} />}
    </>
  );
}
