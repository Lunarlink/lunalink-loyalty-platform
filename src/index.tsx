import * as React from 'react'
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { render } from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import ProgramView from './pages/ProgramView';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div>
            <Header></Header>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/program-view/:id" Component={ProgramView} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>

    );
  }
}

render(<App />, document.getElementById('root'));