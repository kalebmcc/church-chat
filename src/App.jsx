import './App.css'
import { Login } from './components/forms/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Register from './components/forms/Register';
import Header from './components/header/Header';
import { Route, Routes, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='bg-gray-500'>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default App
