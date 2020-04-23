import React from 'react';
import {
  Container,
  ProgressIndicator,
  ProgressPercentage,
} from './ProgressBar.styles';

const ProgressBar = ({ value, limit }) => {
  const percentage = (100 * value) / limit;

  return (
    <Container>
      <ProgressIndicator id="progress-bar-indicator" percentage={percentage} />
      <ProgressPercentage id="progress-bar-percentage">{`${percentage.toFixed(
        2
      )}%`}</ProgressPercentage>
    </Container>
  );
};

export default ProgressBar;
