// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css';
import Home from './pages';
import Login from './pages/login';
import Register from './pages/register';
import Select from './pages/select';
import Run from './pages/run';
import { useState } from 'react';

function App() {
    const [currentId,setCurrentId] = useState('');
    return (
          <Router>
          <Routes>
              <Route exact path='/' element={<Home currentId={currentId}/>} />
              <Route path='/login' element={<Login currentId={currentId} setCurrentId={setCurrentId}/>} />
              <Route path='/register' element={<Register currentId={currentId} setCurrentId={setCurrentId}/>} />
              <Route path='/select' element={<Select currentId={currentId}/>} />
              <Route path='/run' element={<Run currentId={currentId}/>} />
          </Routes>
          </Router>
      );
}


export default App;
