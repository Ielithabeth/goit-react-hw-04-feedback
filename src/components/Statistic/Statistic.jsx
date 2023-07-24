import { Container } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistic = ({ good, neutral, bad, total, percentage }) => {
    return (
        <Container>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {percentage}%</p>
        </Container>)
}

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};