import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Getstarted from './components/Getstarted'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});


function App() {
  return (
    <MantineProvider theme={theme}>

    <>
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/submit" element={<Getstarted/>} />
    </Routes>
    </Router>
    </>
    </MantineProvider>

  );
}

export default App;
