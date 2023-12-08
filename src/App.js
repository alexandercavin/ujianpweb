import logo from './logo.svg';
import './App.css';
import Hehe from './components/Hehe';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import Details from './components/Details';
function App() {
  return (
    <div className="App">
      <h1>Alexander Cavin T. || 50421109 UJIAN PWEB</h1>
      <Router>
        <Routes>
          {<Route path='/' element={<Hehe />} />}
          {<Route path='/dataTour/create' element={<Create />} />}
          {<Route path='/dataTour/Edit/:mhsid' element={<Edit />} />}
          {<Route path='/dataTour/Details/:mhsid' element={<Details />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
