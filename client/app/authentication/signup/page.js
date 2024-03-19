import { loadSignUp } from "@/app/lib/load-date";
import styles from "@/app/style/login.module.scss";

export default function SignUp() {
  const handleUser = async (formData) => {
    "use server";
    await loadSignUp(formData);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.registration}>
        <div className={styles.registrationClose}></div>
        <h1 className={styles.registrationTitle}>Зареєструватися</h1>
        <form className={styles.formRegistrationWrapper} action={handleUser}>
          <input
            type="text"
            className={styles.registrationInput}
            name="username"
            placeholder="Ім'я"
          />
          <input
            type="text"
            className={styles.registrationInput}
            name="email"
            placeholder="Логин"
          />
          <input
            type="password"
            className={styles.registrationInput}
            name="password"
            placeholder="Пароль"
          />
          {/* <input
            id={styles.datec}
            className={styles.registrationInput}
            type="date"
            name="date"
            placeholder="дата"
          /> */}
          {/* <div className={styles.checkboxWrapper}>
            <input
              id="ckeckbox_1"
              type="checkbox"
              name="ckeckbox_1"
              className={styles.checkbox_1}
            />
            <label className={styles.checkboxLabel_1} htmlFor="ckeckbox_1">
              Соглашаюсь на условия
              <a href="#" className={styles.checkboxLink}>
                политики конфиденциальности
              </a>
            </label>
            <input
              id="ckeckbox_2"
              type="checkbox"
              name="ckeckbox_2"
              className={styles.checkbox_2}
            />
            <label className={styles.checkboxLabel_2} htmlFor="ckeckbox_2">
              Соглашаюсь на обработку персональных данных
            </label>
          </div> */}
          <button className={styles.sent} type="submit">
            Зареєструватися
          </button>
        </form>
      </div>
    </div>
  );
}
