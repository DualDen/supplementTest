import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import MedicationsContainer from './components/Medications/MedicationsContainer';
import Nav from "./components/Navbar/Nav";
import Course from "./components/Course/Course";
import CourseContainer from "./components/Course/CourseContainer";
import NavContainer from "./components/Navbar/NavContainer";

function App() {
 

  return (
    <div className="App">
        <NavContainer/>
      <MedicationsContainer/>
        <CourseContainer/>
    </div>
  );
}

export default App;
