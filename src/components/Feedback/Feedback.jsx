import { Component } from 'react';
import styles from './stylesFeedback.module.css';

class Feedback extends Component {

  static defaultProps = {
    initialValue: 0,
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterGood = () => {
    this.setState(prevValue => {
      return {
        good: prevValue.good + 1,
      };
    });
  };

  counterNeutral = () => {
    this.setState(prevValue => {
      return {
        neutral: prevValue.neutral + 1,
      };
    });
  };
  counterBad = () => {
    this.setState(prevValue => {
      return {
        bad: prevValue.bad + 1,
      };
    });
  };

  totalVotes = () => {
    const totalVotes = this.state.good + this.state.neutral + this.state.bad;
    return totalVotes;
  };

  persentPositive = () => {
    const totalPositiveVotes = this.state.good * 100 / this.totalVotes;
    return totalPositiveVotes;
  };

  render() {

    const totalPositiveVotes = ( (this.state.good * 100)  / this.totalVotes() );

    return (
      <div className={styles.wrapper}>
        <span className={styles.text}>Please, leave Feedback</span>
        <ul className={styles.list}>
          <li className={styles.item} type="button" onClick={this.counterGood}>
            <button className={styles.btn}>Good</button>
          </li>
          <li
            className={styles.item}
            type="button"
            onClick={this.counterNeutral}
          >
            <button className={styles.btn}>Neutral</button>
          </li>
          <li className={styles.item} type="button" onClick={this.counterBad}>
            <button className={styles.btn}>Bad</button>
          </li>
        </ul>
        <span className={styles.stat__text}>Statistics:</span>
        <ul className={styles.stat__list}>
          <li className={styles.statistics__item}>Good: {this.state.good}</li>
          <li className={styles.statistics__item}>
            Neutral: {this.state.neutral}
          </li>
          <li className={styles.statistics__item}>Bad: {this.state.bad}</li>
          <li className={styles.statistics__item}>Total : {this.totalVotes()}</li>
          {/* <li className={styles.statistics__item}>Positive feedack :{totalPositiveVotes}%</li> */}
          {this.totalVotes() ? <li className={styles.statistics__item}>Positive feedack :{totalPositiveVotes.toFixed(0)} %</li> : <li className={styles.statistics__item}>Positive feedack: 0 %</li>}
        </ul>
      </div>
    );
  }
}

export default Feedback;
