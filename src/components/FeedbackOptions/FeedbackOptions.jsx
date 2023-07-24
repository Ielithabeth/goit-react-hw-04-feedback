import { Btn, Container } from './Feedback.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Container>
            {Object.keys(options).map(option => (
                <Btn
                  key={option}
                  type="button"
                  name={option}
                  onClick={onLeaveFeedback}
                >
                  {option}
                </Btn>
            ))}
        </Container>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}