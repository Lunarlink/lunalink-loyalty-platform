import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";
import Programs from "./components/Programs";
import MyPrograms from "./components/MyPrograms";
import ProgramView from "./components/ProgramView";
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <div className="container card mb-4 box-shadow">
        
        <div>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route exact path="/create-program" element={<Programs/>}/>
          <Route exact path="/myprograms" element={<MyPrograms/>}/>
          <Route path="/program/:id" element={<ProgramView/>}/>
        </Routes>

      </div>
      </div>
    </div>
  );
}

export default App;
