import React from 'react';
import { Container, Header, Main } from './App.styles';
import { getProgressBarData } from './utils/api';
import ProgressBarPage from './pages';

function App() {
  const [progressData, setProgressData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getProgressBarData()
      .then(setProgressData)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Container>
      <Header>
        <p>Progress bar app</p>
      </Header>
      <Main>
        {isLoading && <p>Loading progress bar data...</p>}
        {progressData && <ProgressBarPage progressData={progressData} />}
      </Main>
    </Container>
  );
}

export default App;
