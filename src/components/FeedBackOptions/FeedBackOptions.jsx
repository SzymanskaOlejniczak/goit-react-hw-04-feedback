import PropTypes from 'prop-types';
import style from './FeedBackOptions.module.css';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
            className={style.feed_back}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
