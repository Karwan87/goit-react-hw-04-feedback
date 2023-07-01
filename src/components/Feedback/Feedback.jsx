import React from 'react';
import PropTypes from 'prop-types';
import styles from './feedback.module.css';

const Feedback = ({ onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackButtons}>
      <button
        className={styles.btngood}
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        className={styles.btnneutral}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={styles.btnbad} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </div>
  );
};
Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
