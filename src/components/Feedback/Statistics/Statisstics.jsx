import styles from "./statistics.module.css";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
    <h3 className={styles.statistics__title}>Statistics:</h3>
        <ul className={styles.statistics__list}>
          <li className={styles.statistics__item}>Good: {good}</li>
          <li className={styles.statistics__item}>Neutral: {neutral}</li>
          <li className={styles.statistics__item}>Bad: {bad}</li>
          <li className={styles.statistics__item}>Total: {total()}</li>
          <li className={styles.statistics__item}>Positive feedack: {positivePercentage().toFixed(2)} %</li>
        </ul>
        </>
    )
}

export default Statistics;