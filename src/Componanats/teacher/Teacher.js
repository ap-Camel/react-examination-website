import React, { useEffect } from 'react';
import './teacher.css';

import TeacherExamCard from './TeacherExamCard';


function Teacher() {

    const [exams, setExams] = React.useState([{
        title: "",
        active: false,
        timesUsed: 0,
        passRate: 0,
        numOfQuestions: 0,
        duration: 0
    }]);

    const [latestTakenExams, setLatestTakenExams] = React.useState("");
    const [students, setStudents] = React.useState("");

    return(
        <div className='wrapper'>
            <div className='cards-section-container'>
                <div className='cards-header'>
                    <label>my exams</label>
                    <a href='#'>view all</a>
                </div>
                <div className='cards-list snaps-inline'>
                    <TeacherExamCard />
                    <TeacherExamCard />
                    <TeacherExamCard />
                    <TeacherExamCard />
                    <TeacherExamCard />
                    <TeacherExamCard />
                </div>
            </div>
            <div className='cards-section-container'>
                <div className='cards-header'>
                    <label>latest taken exams</label>
                    <a href='#'>view all</a>
                </div>
                <div className='cards-list snaps-inline'>
                    <TeacherExamCard />
                    <TeacherExamCard />
                    <TeacherExamCard />
                    <TeacherExamCard />
                    <TeacherExamCard />
                    <TeacherExamCard />
                </div>
            </div>
            <div className='cards-section-container'>
                <div className='cards-header'>
                    <label>my students</label>
                    <a href='#'>view all</a>
                </div>
                <div className='cards-list snaps-inline'>
                    <TeacherExamCard />
                    <TeacherExamCard />
                    <TeacherExamCard />
                    <TeacherExamCard />
                    <TeacherExamCard />
                    <TeacherExamCard />
                </div>
            </div>
        </div>
    );
}


export default Teacher;