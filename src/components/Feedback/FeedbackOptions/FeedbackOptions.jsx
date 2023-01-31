import styles from "./feedback-option.module.css";

const FeedbackOptions = ( { options, onLeaveFeedback} ) => {
    
    return (
        options.map((option)=> {
           return <button className={styles.btn} type="button" onClick={()=>{onLeaveFeedback(option)}}>{option}</button>
        }
    )
    )
}

export default FeedbackOptions;