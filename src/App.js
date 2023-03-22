// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Ender from './components/Ender';
import Textform from './components/Textform';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes, Link,
  Route,

} from "react-router-dom";
import Footer from './components/Ender';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }

  return (
    <>
      <Router>
        <Navbar title="TEXTUS.com" />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Textform heading="Modifiy your Text" />} />
          </Routes>
        </div>
        <Ender/>
      </Router>
    </>

  );
}



export default App;
