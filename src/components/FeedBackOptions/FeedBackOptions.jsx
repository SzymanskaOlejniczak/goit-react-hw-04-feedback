import PropTypes from 'prop-types';
import style from './FeedBackOptions.module.css';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => (
  
    <div>
      {options.map(option => (
      
          <button
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            className={style.feed_back}
          >
            {option}
          </button>
        )
      )}
    </div>
  );


FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
