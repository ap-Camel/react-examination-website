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
import ExamDetails from './Componanats/teacher/ExamDetails';
import Test from './Componanats/teacher/Test';
import MyExams from './Componanats/teacher/MyExams';
import ExamDetails01 from './Componanats/teacher/ExamDetails01';
import MyQuestions from './Componanats/teacher/MyQuestions';
import QuestionDetails from './Componanats/teacher/QuestionDetails';

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
            {/* <Route path='/Exams' element={ <TeacherExams /> }></Route>
            <Route path='/Exams/Details/:id' element={ <ExamDetails /> }></Route>
            <Route path='/Test' element={ <Test /> }></Route> */}
            <Route path='/exams' element={ <MyExams /> } ></Route>
            <Route path='/exams/details/:id' element={ <ExamDetails01 /> }></Route>
            <Route path='/questions' element={ <MyQuestions /> }></Route>
            <Route path='/questions/details/:id' element={ <QuestionDetails /> }></Route>

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
