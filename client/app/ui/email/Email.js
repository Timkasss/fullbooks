import styles from "./email.module.scss";

export default function Email() {
  return (
    <section className={styles.email}>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.content}>
            <h1 className={styles.title}>Подпишитесь на E-mail рассылку</h1>
            <p className={styles.text}>
              Если хотиет быть в курсе последних новостей и новинок кино -
              заполните форму ниже и оформите бесплатную E-mail рассылку!
            </p>
            <form className={styles.form}>
              <div className={styles.formHeader}>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Введите свой E-mail адрес"
                />
                <button className={styles.formButton}>Подписаться</button>
              </div>
              <div className={styles.checkboxWrapper}>
                <input
                  id="checkbox"
                  type="checkbox"
                  name="checkbox"
                  className={styles.checkbox}
                />
                <label className={styles.checkboxLabel} htmlFor="checkbox">
                  Соглашаюсь на условия
                </label>
                <a href="#" className={styles.checkboxLink}>
                  политики конфиденциальности
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
