import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import  SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  return (
    <Router>

    <div className='App'>
      <Routes>
      <Route path="/sign-up" element={<SignUp/>}></Route>
       <Route path="/sign-in" element={<Login/>}></Route>
      </Routes>
    </div>
  
   </Router>
  );
}

export default App;
