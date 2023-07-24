import { Btn, Container } from './Feedback.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Container>
            {options.map(option => (
                <Btn
                  key={option}
                  type="button"
                  name={option}
                  onClick={() => onLeaveFeedback(option)}
                >
                  {option}
                </Btn>
            ))}
        </Container>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}