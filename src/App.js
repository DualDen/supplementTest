import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import CardsContainer from './components/Cards/CardsContainer';
import Nav from "./components/Navbar/Nav";
import Course from "./components/Course/Course";

function App() {
 

  return (
    <div className="App">
        <Nav/>
      <CardsContainer/>
        <Course/>
    </div>
  );
}

export default App;
