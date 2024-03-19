import styles from './quote.module.scss';

export default function Quote() {
   return (
      <article className={styles.quote}>
         <h1 className={styles.name}>Слова отца </h1>
         <p className={styles.text}>Принимая во внимание показатели успешности, высококачественный прототип будущего проекта не оставляет шанса для своевременного выполнения сверхзадачи. Равным образом, дальнейшее развитие различных форм деятельности играет определяющее значение для благоприятных перспектив!</p>
      </article>
   )
}