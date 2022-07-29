import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from './Componanats/shared/Home';
import Login from './Componanats/login/Login';
import Signup from './Componanats/login/Signup';
import Navbar from './Navbar';
import Teacher from './Componanats/teacher/Teacher';
import TeacherExams from './Componanats/teacher/TeacherExams';
import Student from './Componanats/student/Student';

function App() {

  const user = useSelector(store => store.user);

  return (
    <Router>
      <Navbar />
      <Routes>
        {!user.loggedIn && (
          <>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Signup' element={<Signup />} ></Route>
          </>
        )}

        {user.loggedIn && user.userRole === "teacher" && (
          <>
            <Route path="/" element={<Home />}></Route>
            <Route path='/Teacher' element={<Teacher />}></Route>
            <Route path='/Exams' element={ <TeacherExams /> }></Route>
          </>
        )}

        {user.loggedIn && user.userRole === "student" && (
          <>
            <Route path="/" element={<Home />}></Route>
            <Route path='/Student' element={<Student />}></Route>
          </>
        )}
        
        
        
      </Routes>
    </Router>
  );
}

export default App;
