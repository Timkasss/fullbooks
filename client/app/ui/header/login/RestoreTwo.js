import styles from "./login.module.scss";

export default function RestoreTwo({ setRestoreTwo }) {
  return (
    <>
      <div
        className={styles.backgroundRestoreTwo}
        onClick={() => setRestoreTwo(false)}
      ></div>
      <div className={styles.restoreBlockTwo}>
        <div
          className={styles.restoreCloseTwo}
          onClick={() => setRestoreTwo(false)}
        ></div>
        <h1 className={styles.restoreTitle}>Восстановить пароль</h1>
        <form className={styles.restoreFormTwo}>
          <input
            type="password"
            className={styles.newPassword}
            placeholder="Придумайте новый пароль"
          />
          <input
            type="password"
            className={styles.newPassword}
            placeholder="Подтвердите новый пароль"
          ></input>
          <button className={styles.done}>Готово!</button>
        </form>
      </div>
    </>
  );
}
