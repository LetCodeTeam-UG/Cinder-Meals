import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import TrackOrder from './components/TrackOrder';
import Contact from './components/Contact';
import Login from './components/Login';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/trackorder' element={<TrackOrder />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
