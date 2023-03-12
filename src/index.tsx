import * as React from 'react'
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { render } from 'react-dom';
import './index.css';
import Home from './pages/Home';
import ProgramCreation from './pages/ProgramCreation';
import ProgramView from './pages/ProgramView';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div>
            <nav>
              <Link to="/">Lunarlink</Link>
            </nav>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/program-creation" Component={ProgramCreation} />
              <Route path="/program-view" Component={ProgramView} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>

    );
  }
}

render(<App />, document.getElementById('root'));