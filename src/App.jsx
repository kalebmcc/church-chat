import { Login } from './components/forms/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Register from './components/forms/Register';
import Header from './components/header/Header';
import { Route, Routes, Outlet } from 'react-router-dom';
import './sass/App.scss';
import Home from './components/pages/home';

function App() {
  

  return (
    <div className=''>
        
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/chat" element={<Header/>}/>

        </Routes>
    </div>
  )
}

export default App
