import './App.css';
import Container from './components/Container';
import {ThemeProvider} from './context/ThemeContext';



function App() {
  return (
    <ThemeProvider>
      <Header/>
      <hr/>
      <Button/>
    </ThemeProvider>
    
 
  )
}

export default App;
