// import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Event from './pages/events';
import Coach from './pages/coach';
import Schedule from './pages/schedule';
import Galery from './pages/galery';
 
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/events' element={<Event/>} />
        <Route path='/coach' element={<Coach/>} />
        <Route path='/schedule' element={<Schedule/>} />
        <Route path='/galery' element={<Galery/>} />
    </Routes>
    </Router>
);
}
 
export default App;