import PropTypes  from "prop-types";
import './FeedbackOptions.module.css';

const FeedbackOptions = ({options, updateFeedback}) => {

return (
<div>
    {options.map(option => (
    <button
    key={option}
    type="button"
    name={option}
    onClick={updateFeedback}
    >
        {option}
    </button>
    ))}
</div>
);
};

FeedbackOptions.propTypes ={
options: PropTypes.array,
updateFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
