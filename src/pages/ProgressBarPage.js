import React from 'react';
import ProgressBar from '../components/ProgressBar';
import {
  Container,
  ProgressBarList,
  ControlSection,
  BarSelection,
  ControlButton,
} from './ProgressBarPage.styles';

const ProgressBarPage = ({ progressData }) => {
  const { buttons, bars, limit } = progressData;
  const [selectedBar, setSelectedBar] = React.useState(0);
  const [progressValues, setProgressValues] = React.useState(bars);
  const changeProgress = (increment) => () => {
    const newProgressValues = [...progressValues];
    const newValue = progressValues[selectedBar] + increment;
    newProgressValues.splice(selectedBar, 1, newValue < 0 ? 0 : newValue);
    setProgressValues(newProgressValues);
  };

  const onSelectionChange = React.useCallback(
    (event) => setSelectedBar(event.target.value),
    [setSelectedBar]
  );

  return (
    <Container>
      <h1>Progress Bar Demo</h1>
      <ProgressBarList>
        {progressValues.map((value, index) => (
          <ProgressBar key={index} value={value} limit={limit} />
        ))}
      </ProgressBarList>
      <ControlSection>
        <BarSelection value={selectedBar} onChange={onSelectionChange}>
          {bars.map((bar, index) => (
            <option key={index} value={index}>
              Progress {index + 1}
            </option>
          ))}
        </BarSelection>
        <div>
          {buttons.map((increment, index) => (
            <ControlButton key={index} onClick={changeProgress(increment)}>
              {increment > 0 ? `+${increment}` : increment}
            </ControlButton>
          ))}
        </div>
      </ControlSection>
    </Container>
  );
};

export default ProgressBarPage;
