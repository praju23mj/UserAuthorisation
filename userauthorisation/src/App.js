import './App.css';
import Register from "./Register";
import Login from "./Login"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
