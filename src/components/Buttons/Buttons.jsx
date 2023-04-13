import PropTypes from 'prop-types';
import css from './Buttons.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonBox}>
      <button
        className={css.button}
        type="button"
        name="good"
        onClick={e => {
          options(e);
          onLeaveFeedback();
        }}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        name="neutral"
        onClick={e => {
          options(e);
          onLeaveFeedback();
        }}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        name="bad"
        onClick={e => {
          options(e);
          onLeaveFeedback();
        }}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.func.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
