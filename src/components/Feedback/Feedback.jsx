import { Component } from 'react';
import styles from './stylesFeedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterVotes(voteName) {
    this.setState(prevState => {
      return {
        [voteName]: prevState[voteName] + 1,
      };
    });
  }

  totalVotes = () => {
    const totalVotes = this.state.good + this.state.neutral + this.state.bad;
    return totalVotes;
  };

  persentPositive = () => {
    const totalPositiveVotes = (this.state.good * 100) / this.totalVotes();
    return totalPositiveVotes;
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.text}>Please, leave Feedback</span>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button
              className={styles.btn}
              type="button"
              onClick={() => {
                this.counterVotes('good');
              }}
            >
              Good
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={styles.btn}
              type="button"
              onClick={() => {
                this.counterVotes('neutral');
              }}
            >
              Neutral
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={styles.btn}
              type="button"
              onClick={() => {
                this.counterVotes('bad');
              }}
            >
              Bad
            </button>
          </li>
        </ul>

        <span className={styles.stat__text}>Statistics:</span>
        <ul className={styles.stat__list}>
          <li className={styles.statistics__item}>Good: {this.state.good}</li>
          <li className={styles.statistics__item}>
            Neutral: {this.state.neutral}
          </li>
          <li className={styles.statistics__item}>Bad: {this.state.bad}</li>
          <li className={styles.statistics__item}>
            Total : {this.totalVotes()}
          </li>
          {this.totalVotes() ? (
            <li className={styles.statistics__item}>
              Positive feedack: {this.persentPositive().toFixed(0)} %
            </li>
          ) : (
            <li className={styles.statistics__item}>Positive feedack: 0 %</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Feedback;
