import { styled } from 'styled-components';
import Home from './pages/Home';
import GlobalStyle from './styles/globalStyles';

const AppContainer = styled.div`
  width: 1444px;
  margin: 0 auto;
  max-width: 100%;
`;

function App() {

  return (
    <AppContainer>
      <GlobalStyle />
      <Home />
    </AppContainer>
  )
}

export default App;
