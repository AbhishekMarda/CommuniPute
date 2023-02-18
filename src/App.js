// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css';
import Home from './pages';
import Login from './pages/login';
import Register from './pages/register';
import Select from './pages/select';
import Run from './pages/run';

function App() {
  return (
          <Router>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register/>} />
              <Route path='/select' element={<Select />} />
              <Route path='/run' element={<Run />} />
          </Routes>
          </Router>
      );
}


export default App;
