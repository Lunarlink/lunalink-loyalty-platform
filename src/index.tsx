import * as React from 'react'
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { render } from 'react-dom';
import './index.css';
import Home from './pages/HomePage';
import ProgramCreation from './pages/ProgramCreation';
import ProgramView from './pages/ProgramView';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/program-creation">Program Creation</Link>
          </nav>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/program-creation" Component={ProgramCreation} />
            <Route path="/program-view" Component={ProgramView} />
          </Routes>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));