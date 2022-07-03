import './styles/styles.css';
import Container from './components/Container';
import DigitButton from './components/DigitButton';
import DisplayButtons from './components/DisplayButtons';
import Display from './components/Display';
import Header from './components/Header';
import {AppProvider} from './context/AppContext';

import {useContext} from 'react';


function App() {

  return (<>
  <AppProvider>
    <Header></Header>
    <Container>
      <Display></Display>
      <DisplayButtons></DisplayButtons> 

    </Container>
    </AppProvider>
    </>
  );
}

export default App;
